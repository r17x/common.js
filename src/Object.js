import { isEqual } from "./Boolean";
/**
 * @name has
 * @description
 * checking the property in your object.
 * @param {Object} obj
 * @param {String} propertyName
 * @return {Boolean}
 * @example
 *
 * const Person = {name: 'John Lennon', band: 'Beatles', genre: "rock n roll"}
 *
 * has(Person,'name')
 */
export const has = Function.call.bind(Object.hasOwnProperty);

/**
 * @name equal
 * @description Compare 2 Object
 * @function
 * @param {Object} objX
 * @param {Object} objY
 * @return {Bool}
 *
 * This function for simple json object compare
 * you can't compare specific JSON like NODE Or
 * Dom Object in JSON-Data.
 */
export const equal = (objX, objY) =>
  JSON.stringify(objX) === JSON.stringify(objY);

/**
 * @name unique
 * @description Get Unique value in array.
 * @function
 * @param {Array} arrs
 * @param {String} prop as properties
 * @return {Array} new array
 */
export const unique = (arrs, prop) =>
  arrs.filter(
    (obj, pos, arr) =>
      arr
        .map(mapObj => getByProp(mapObj, prop))
        .indexOf(getByProp(obj, prop)) === pos
  );

/**
 * @name getByProp
 * @description Get value of object by property name.
 * @function
 * @param {Object} obj - to find value in this object
 * @param {String} prop - property name in obj
 * @return {Any} - value in object by property name
 */
export const getByProp = (obj, prop) =>
  isEqual(prop, "String")
    ? prop.split(".").reduce((acc, cur) => acc[cur], obj)
    : obj;

export default {
  equal,
  getByProp,
  unique,
  has
};
