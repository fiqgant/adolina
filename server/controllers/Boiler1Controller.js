import Boiler1 from '../models/Boiler1Model.js';
import User from '../models/UserModel.js';

export const getAllBoiler1Data = async (req, res) => {
  const { private_key, company } = req.query;

  try {
    // Check if the user exists with the provided private key and company
    const user = await User.findOne({ where: { private_key, company } });
    if (!user) {
      return res.status(404).json({ msg: 'User not found' });
    }

    // Retrieve data from the boiler11 table
    const boiler1Data = await Boiler1.findAll();
    res.status(200).json(boiler1Data);
  } catch (error) {
    console.error('Error retrieving boiler1 data:', error);
    res.status(500).json({ msg: 'Internal Server Error' });
  }
};
