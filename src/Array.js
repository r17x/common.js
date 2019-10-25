import { isEqual } from "./Boolean";
import { getByProp } from "./Object";

function firstInArray() {
  return isEqual(this, "Array") ? this[0] : null;
}
/**
 * @name getFirst
 * @description Get first item in array.
 * @param {Array} array
 * @return {Any} first item in array
 * @since 0.0.3
 */
export const getFirst = Array.call.bind(firstInArray);

/**
 * @name unique
 * @description Get Unique value in array.
 * @function
 * @param {Array} arrs
 * @param {String} prop as properties
 * @return {Array} new array
 * @since 0.0.2
 */
export const unique = (arrs, prop) =>
  arrs.filter(
    (obj, pos, arr) =>
      arr
        .map(mapObj => getByProp(mapObj, prop))
        .indexOf(getByProp(obj, prop)) === pos
  );

export default {
  getFirst,
  unique
};
