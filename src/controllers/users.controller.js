import User from "../models/users.model";
import bcrypt from "bcrypt";

export default {
   async createUser(req, res) {
    const newData = req.body;
    const salt = await bcrypt.genSalt(10);
    const hash = await bcrypt.hash(newData.password, salt);
    newData.password = hash;
    const user = await new User(newData).save();
    return res.status(201).send({data: user, message: 'User was created!'});
  },
  
  async findAllUsers(req, res) {
    const sort_by = {};
        sort_by[req.query.sort_by || 'createdAt'] = req.query.order_by || 'desc';
        const offset = parseInt(req.query.offset) || 0;
        const per_page = parseInt(req.query.per_page) || 2;
        const usersPromise =
        User.find(req.filters)
            .skip(offset)
            .limit(per_page)
            .sort(sort_by);
        const countPromise = User.countDocuments(req.filters);
        const [users, count] = await Promise.all([usersPromise, countPromise]);
        return res.status(200).send({ data: users, count });
  },
  
  async findOneUser(req, res, next) {
    const user = await User.findOne({_id: req.params.id});
    if(!user){
      return next();
    } else {
      return res.status(200).send({data: user});
    }
  },
  
  async updateUser(req, res, next){
    const user = await User.findOne(req.id);
    if(!user){
      return next();
    } else {
      user.username = req.body.username;
      user.password = req.body.password;
      user.email = req.body.email;
      user.adult = req.body.adult;
      user.permissions = req.body.permissions;
      await user.save();

      return res.status(200).send({data: user, message: 'User was updated!'});
    }
  },
  
  async deleteUser(req, res, next) {
      const user = await User.findOne(req.id);
      if(!user){
        return next();
      } else {
        await user.deleteOne();
        res.status(200).send({message: "User was removed!"})
      }
  },

  async deleteAllUsers(req, res) {
    const users = await User.find().deleteMany({});
    return res.status(200).send({message: "Users were removed!"})
  },
}
