import PmGenset1 from '../models/PmGenset1Model.js';
import User from '../models/UserModel.js';

export const getAllPmGenset1Data = async (req, res) => {
  const { private_key, company } = req.query;

  try {
    // Check if the user exists with the provided private key and company
    const user = await User.findOne({ where: { private_key, company } });
    if (!user) {
      return res.status(404).json({ msg: 'User not found' });
    }

    // Retrieve data from the pmgenset table
    const pmgensetData = await PmGenset1.findAll();
    res.status(200).json(pmgensetData);
  } catch (error) {
    console.error('Error retrieving pmgenset data:', error);
    res.status(500).json({ msg: 'Internal Server Error' });
  }
};
