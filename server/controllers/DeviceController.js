import Device from "../models/DeviceModel.js"
import User from "../models/UserModel.js";
import { Op } from "sequelize";

export const getDevice = async(req, res) =>{
  try {
    let response;
    if(req.role === "admin"){
        response = await Device.findAll({
            attributes:['uuid','name','id_device'],
            include:[{
                model: User,
                attributes:['name','email']
            }]
        });
    }else{
        response = await Device.findAll({
            attributes:['uuid','name','id_device'],
            where:{
                userId: req.userId
            },
            include:[{
                model: User,
                attributes:['name','email']
            }]
        });
    }
    res.status(200).json(response);
} catch (error) {
    res.status(500).json({msg: error.message});
}
}

export const getDeviceById = async(req, res) =>{
  try {
    const device = await Device.findOne({
        where:{
            uuid: req.params.id
        }
    });
    if(!device) return res.status(404).json({msg: "Data tidak ditemukan"});
    let response;
    if(req.role === "admin"){
        response = await Device.findOne({
            attributes:['uuid','name','id_device'],
            where:{
                id: device.id
            },
            include:[{
                model: User,
                attributes:['name','email']
            }]
        });
    }else{
        response = await Device.findOne({
            attributes:['uuid','name','id_device'],
            where:{
                [Op.and]:[{id: device.id}, {userId: req.userId}]
            },
            include:[{
                model: User,
                attributes:['name','email']
            }]
        });
    }
    res.status(200).json(response);
  } catch (error) {
      res.status(500).json({msg: error.message});
  }
}

export const createDevice = async(req, res) =>{
  const {name, id_device} = req.body;
  try {
      await Device.create({
          name: name,
          id_device: id_device,
          userId: req.userId
      });
      res.status(201).json({msg: "Device Created Successfuly"});
  } catch (error) {
      res.status(500).json({msg: error.message});
  }
}

export const updateDevice = async(req, res) =>{
  try {
    const device = await Device.findOne({
        where:{
            uuid: req.params.id
        }
    });
    if(!device) return res.status(404).json({msg: "Data tidak ditemukan"});
    const {name, id_device} = req.body;
    if(req.role === "admin"){
        await Device.update({name, id_device},{
            where:{
                id: device.id
            }
        });
    }else{
        if(req.userId !== device.userId) return res.status(403).json({msg: "Akses terlarang"});
        await Device.update({name, id_device},{
            where:{
                [Op.and]:[{id: device.id}, {userId: req.userId}]
            }
        });
    }
    res.status(200).json({msg: "Device updated successfuly"});
  } catch (error) {
      res.status(500).json({msg: error.message});
  }
}

export const deleteDevice = async(req, res) =>{
  try {
    const device = await Device.findOne({
        where:{
            uuid: req.params.id
        }
    });
    if(!device) return res.status(404).json({msg: "Data tidak ditemukan"});
    const {name, id_device} = req.body;
    if(req.role === "admin"){
        await Device.destroy({
            where:{
                id: device.id
            }
        });
    }else{
        if(req.userId !== device.userId) return res.status(403).json({msg: "Akses terlarang"});
        await Device.destroy({
            where:{
                [Op.and]:[{id: device.id}, {userId: req.userId}]
            }
        });
    }
    res.status(200).json({msg: "Device deleted successfuly"});
  } catch (error) {
      res.status(500).json({msg: error.message});
  }
}