import User from '../models/users.model';
import jwt from 'jsonwebtoken';

export default {
  async register(req, res, next){
    const engravedData = req.engravedData;
    const { username, email, age, permissions, password } = engravedData;
    if(Object.keys(engravedData).length > 0 && engravedData.constructor === Object){
      const user = new User({username, email, age, permissions});
      await User.register(user, password);
      return res.status(201).send('User created successfully. Now you can log in.');
    } else {
      return res.status(422).send({data: req.body, message: 'Some data is invalid!'});
    }
  },

  async login(req, res, next){
    // generate token
    const token = jwt.sign({ id: req.user._id }, process.env.JWT_SECRET, { expiresIn: 1200 });
    // return token
    return res.send({ token });
  }
}