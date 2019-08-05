function getConstructorName() {
  return this.constructor.name;
}

function constructorNameEqual(name) {
  return this.constructor.name === name;
}

/**
 * @name is
 * @description
 * Type data checking on the fly.
 *
 * @function
 * @param {Any}
 * @return {Boolean}
 * @example
 *
 * const myObject = {x:1, y:3}
 * const thisIs = is(myObject)
 * // expect(thisIs).toBe("Object")
 *
 */
export const is = Function.call.bind(getConstructorName);

/**
 * @name isEqual
 * @description
 * `isEqual` is like `is` but have 2 parameter for compare 2 type and return Bolean.
 * @param {Any} Anything
 * @param {Any} Anymore
 * @return {Boolean}
 */
export const isEqual = Function.call.bind(constructorNameEqual);

export default {
  is,
  isEqual
};
