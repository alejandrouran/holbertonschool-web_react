import { fromJS } from 'immutable';

const accessImmutableObject = (object, array) => {
  const mapdObj = fromJS(object);
  return mapObj.getIn(array, undefined);
};

export default accessImmutableObject;
