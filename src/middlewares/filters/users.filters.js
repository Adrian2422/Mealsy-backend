import Users from '../../models/users.model';
import qs from 'qs';
import _, { identity } from 'lodash';

export default function getFilters(req, res, next){
  const availableFilters = Object.keys(Users.schema.paths);
  const filters = qs.parse(req.query);

  const schemaFilters = _.pickBy(filters, (value, key) => availableFilters.indexOf(key) > -1);
  let searchFilter = {};
  if(filters.q){
    searchFilter = {
      $text: {
        $search: filters.q
      }
    }
  }

  req.filters = { ...searchFilter, ...schemaFilters };
  next(); 
}