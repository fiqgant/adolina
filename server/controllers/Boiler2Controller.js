import Boiler2 from '../models/Boiler2Model.js';
import User from '../models/UserModel.js';

export const getAllBoiler2Data = async (req, res) => {
  const { private_key, company } = req.query;

  try {
    // Check if the user exists with the provided private key and company
    const user = await User.findOne({ where: { private_key, company } });
    if (!user) {
      return res.status(404).json({ msg: 'User not found' });
    }

    // Retrieve data from the boiler21 table
    const boiler2Data = await Boiler2.findAll();
    res.status(200).json(boiler2Data);
  } catch (error) {
    console.error('Error retrieving boiler2 data:', error);
    res.status(500).json({ msg: 'Internal Server Error' });
  }
};
