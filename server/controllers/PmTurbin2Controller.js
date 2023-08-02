import PmTurbin2 from '../models/PmTurbin2Model.js';
import User from '../models/UserModel.js';

export const getAllPmTurbin2Data = async (req, res) => {
  const { private_key, company } = req.query;

  try {
    // Check if the user exists with the provided private key and company
    const user = await User.findOne({ where: { private_key, company } });
    if (!user) {
      return res.status(404).json({ msg: 'User not found' });
    }

    // Retrieve data from the pmturbin2 table
    const pmturbin2Data = await PmTurbin2.findAll();
    res.status(200).json(pmturbin2Data);
  } catch (error) {
    console.error('Error retrieving pmturbin2 data:', error);
    res.status(500).json({ msg: 'Internal Server Error' });
  }
};
