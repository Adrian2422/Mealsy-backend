import register from 'babel-core/register';
import User from '../models/users.model';
import jwt from 'jsonwebtoken';

export default {
  async register(req, res, next){
    const { username, email, age, permissions, password } = req.body;
    const user = new User({username, email, age, permissions});
    await User.register(user, password);
    res.send('User created successfully. Now you can log in.');
  },

  async login(req, res, next){
    // generate token
    const token = jwt.sign({ id: req.user._id }, process.env.JWT_SECRET, { expiresIn: 1200 });
    // return token
    return res.send({ token });
  }
}