import { fromJS } from 'immutable';

const accessImmutableObject = (object, array) => {
  const mapObj = fromJS(object);
  return mapObj.getIn(array, undefined);
};

export default accessImmutableObject;
