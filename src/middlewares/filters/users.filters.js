import Users from '../../models/users.model';
import qs from 'qs';

export default function getFilters(req, res, next){
  const filters = qs.parse(req.query);

  let searchFilter = {};
  if(filters.q){
    searchFilter = {
      username: {
        $regex: new RegExp(filters.q, 'i')
      }
    }
  }

  req.filters = { ...searchFilter };
  next(); 
}