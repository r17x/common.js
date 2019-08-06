/**
 * @module Object
 */
import { isEqual } from "./Boolean";

/**
 * @name has
 * @description
 * checking the property in your object.
 * @param {Object} obj
 * @param {String} propertyName
 * @return {Boolean}
 * @example
 * @since 0.0.2
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
 * @since 0.0.2
 *
 * This function for simple json object compare
 * you can't compare specific JSON like NODE Or
 * Dom Object in JSON-Data.
 */
export const equal = (objX, objY) =>
  JSON.stringify(objX) === JSON.stringify(objY);

/**
 * @name getByProp
 * @description Get value of object by property name.
 * @function
 * @param {Object} obj - to find value in this object
 * @param {String} prop - property name in obj
 * @return {Any} - value in object by property name
 * @since 0.0.2
 */
export const getByProp = (obj, prop) =>
  isEqual(prop, "String")
    ? prop.split(".").reduce((acc, cur) => acc[cur], obj)
    : obj;

export default {
  equal,
  getByProp,
  has
};
