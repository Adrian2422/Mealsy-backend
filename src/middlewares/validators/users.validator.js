import User from '../../models/users.model';
import { isEmail } from 'validator'

export default async function validateUser(req, res, next) {
  const data = {};
  const validData = [];
  const { username, email, adult, permissions, password } = req.body;
  const user = await User.findOne({ $or: [{username: username}, {email: email}]});
  if(!user){
    // validate name
    data.username = username;
    validData.push(username.length >= 8);
    // validate email
    data.email = email;
    validData.push(isEmail(email));
    // validate adult
    data.adult = adult;
    validData.push(typeof adult === 'boolean');
    // validate permissions
    data.permissions = permissions;
    validData.push([1, 2, 3, 4].includes(permissions));
    // validate password
    data.password = password;
    const passRegex = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[$@$!%* #+=?&])[A-Za-z\d$@$!%* #+=?&]{8,}$/;
    validData.push(passRegex.test(password));
    // check if any validation was failed
    req.engravedData = validData.includes(false) ? {} : { ...data };
    next();
  } else {
    res.status(409).send('User with this username/email already exist! Please insert unused data!');
  }
}
