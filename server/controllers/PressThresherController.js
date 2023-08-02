import PressThresher from '../models/PressThresherModel.js';
import User from '../models/UserModel.js';

export const getAllPressThresherData = async (req, res) => {
  const { private_key, company } = req.query;

  try {
    // Check if the user exists with the provided private key and company
    const user = await User.findOne({ where: { private_key, company } });
    if (!user) {
      return res.status(404).json({ msg: 'User not found' });
    }

    // Retrieve data from the pressthresher table
    const pressthresherData = await PressThresher.findAll();
    res.status(200).json(pressthresherData);
  } catch (error) {
    console.error('Error retrieving pressthresher data:', error);
    res.status(500).json({ msg: 'Internal Server Error' });
  }
};
