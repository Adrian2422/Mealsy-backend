import User from '../models/users.model';
import jwt from 'jsonwebtoken';

export default {
  async register(req, res, next){
    const { username, email, age, permissions, password } = req.body;
    const user = await User.findOne({ $or: [{username: username}, {email: email}]});
    if(!user){
      const user = new User({username, email, age, permissions});
      await User.register(user, password);
      res.send('User created successfully. Now you can log in.');
    } else {
      res.send('User with this username/email already exist! Please insert unused data!');
    }
  },

  async login(req, res, next){
    // generate token
    const token = jwt.sign({ id: req.user._id }, process.env.JWT_SECRET, { expiresIn: 1200 });
    // return token
    return res.send({ token });
  }
}