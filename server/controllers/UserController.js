import User from "../models/UserModel.js";
import argon2 from "argon2";
import crypto from "crypto";

export const getUsers = async (req, res) => {
  try {
    const response = await User.findAll({
      attributes: ['uuid', 'name', 'email', 'role', 'company', 'private_key']
    });
    res.status(200).json(response);
  } catch (error) {
    res.status(500).json({ msg: error.message });
  }
};

export const getUserById = async (req, res) => {
  try {
    const response = await User.findOne({
      attributes: ['uuid', 'name', 'email', 'role', 'company', 'private_key'],
      where: {
        uuid: req.params.id
      }
    });
    res.status(200).json(response);
  } catch (error) {
    res.status(500).json({ msg: error.message });
  }
};

export const createUser = async (req, res) => {
  const { name, email, password, confPassword, role, company } = req.body;
  if (password !== confPassword) return res.status(400).json({ msg: "Password dan Confirm Password tidak cocok" });
  const hashPassword = await argon2.hash(password);
  const privateKey = crypto.randomBytes(10).toString('hex'); // Generate private key

  try {
    await User.create({
      name: name,
      email: email,
      password: hashPassword,
      company: company,
      private_key: privateKey, // Set the generated private key
      role: role
    });
    res.status(201).json({ msg: "Register Berhasil" });
  } catch (error) {
    res.status(400).json({ msg: error.message });
  }
};

export const updateUser = async (req, res) => {
  const user = await User.findOne({
    where: {
      uuid: req.params.id
    }
  });
  if (!user) return res.status(404).json({ msg: "User tidak ditemukan" });
  const { name, email, password, confPassword, role, company } = req.body;
  let hashPassword;
  if (password === "" || password === null) {
    hashPassword = user.password;
  } else {
    hashPassword = await argon2.hash(password);
  }
  if (password !== confPassword) return res.status(400).json({ msg: "Password dan Confirm Password tidak cocok" });

  const privateKey = crypto.randomBytes(10).toString('hex'); // Generate private key

  try {
    await User.update({
      name: name,
      email: email,
      password: hashPassword,
      company: company,
      private_key: privateKey, // Set the generated private key
      role: role
    }, {
      where: {
        id: user.id
      }
    });
    res.status(200).json({ msg: "User Updated" });
  } catch (error) {
    res.status(400).json({ msg: error.message });
  }
};

export const deleteUser = async (req, res) => {
  const user = await User.findOne({
    where: {
      uuid: req.params.id
    }
  });
  if (!user) return res.status(404).json({ msg: "User tidak ditemukan" });
  try {
    await User.destroy({
      where: {
        id: user.id
      }
    });
    res.status(200).json({ msg: "User Deleted" });
  } catch (error) {
    res.status(400).json({ msg: error.message });
  }
  
};

export const updateUserProfile = async (req, res) => {
  const { name, email, password, confPassword, company } = req.body;
  const userId = req.userId; // Retrieve the user ID from the middleware

  const user = await User.findByPk(userId);
  if (!user) return res.status(404).json({ msg: "User tidak ditemukan" });

  // Validate password if provided
  if (password !== confPassword) {
    return res.status(400).json({ msg: "Password dan Confirm Password tidak cocok" });
  }

  let hashPassword = user.password;
  if (password !== "" && password !== null) {
    hashPassword = await argon2.hash(password);
  }

  try {
    await user.update({
      name: name,
      email: email,
      password: hashPassword,
      company: company,
      private_key: private_key,
    });

    res.status(200).json({ msg: "Profil berhasil diperbarui" });
  } catch (error) {
    res.status(400).json({ msg: error.message });
  }
};