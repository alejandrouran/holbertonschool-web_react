import { fromJS } from "immutable";

const accessInmutatableOject = (object, array) => {
    const mapObj = fromJS(object);
    return mapObj.getIn(array, undefined);
};

export default accessInmutatableOject;