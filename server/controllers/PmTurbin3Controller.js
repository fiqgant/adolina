import PmTurbin3 from '../models/PmTurbin3Model.js';
import User from '../models/UserModel.js';

export const getAllPmTurbin3Data = async (req, res) => {
  const { private_key, company } = req.query;

  try {
    // Check if the user exists with the provided private key and company
    const user = await User.findOne({ where: { private_key, company } });
    if (!user) {
      return res.status(404).json({ msg: 'User not found' });
    }

    // Retrieve data from the pmturbin3 table
    const pmturbin3Data = await PmTurbin3.findAll();
    res.status(200).json(pmturbin3Data);
  } catch (error) {
    console.error('Error retrieving pmturbin3 data:', error);
    res.status(500).json({ msg: 'Internal Server Error' });
  }
};
