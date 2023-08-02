import Sterilizer from '../models/SterilizerModel.js';
import User from '../models/UserModel.js';

export const getAllSterilizerData = async (req, res) => {
  const { private_key, company } = req.query;

  try {
    // Check if the user exists with the provided private key and company
    const user = await User.findOne({ where: { private_key, company } });
    if (!user) {
      return res.status(404).json({ msg: 'User not found' });
    }

    // Retrieve data from the sterilizer table
    const sterilizerData = await Sterilizer.findAll();
    res.status(200).json(sterilizerData);
  } catch (error) {
    console.error('Error retrieving sterilizer data:', error);
    res.status(500).json({ msg: 'Internal Server Error' });
  }
};
