import bcrypt from 'bcrypt';
import { User } from '../models/postgres/index.js';
import { generateToken } from '../utils/generateToken.js';

export const signup = async (req, res) => {
  const { name, email, password, role } = req.body;
  const hashed = await bcrypt.hash(password, 10);

  try {
    const user = await User.create({ name, email, password: hashed, role });
    res.json({ token: generateToken(user), user });
  } catch (err) {
    res.status(400).json({ err });
  }
};

export const login = async (req, res) => {
  const { email, password } = req.body;
  const user = await User.findOne({ where: { email } });
  if (!user || !(await bcrypt.compare(password, user.password))) {
    return res.status(401).json({ message: 'Invalid credentials' });
  }
  res.json({ token: generateToken(user), user });
};
