// eslint-disable-next-line
import { isEqual, is } from "Boolean";

describe("[Boolean.is] Test", () => {
  each([
    [Function, "Function"],
    [Object, "Function"],
    [{}, "Object"],
    [() => {}, "Function"],
    [[], "Array"],
    [Symbol, "Function"]
  ]).test("the param %s is return %s", (test, expected) => {
    const tryIs = jest.fn(is);
    const result = tryIs(test);
    expect(result).toBe(expected);
    expect(tryIs).toHaveBeenCalledTimes(1);
  });
});

describe("[Boolean.isEqual] Test", () => {
  each([
    [Function, "Function", true],
    [Function, Function, false],
    [Object, "Function", true],
    [{}, "Object", true],
    [() => {}, "Function", true],
    [[], "Array", true],
    [Symbol, "Function", true]
  ]).test("the param %s equal %s is %s", (test, param, expected) => {
    const tryIs = jest.fn(isEqual);
    const result = tryIs(test, param);
    expect(result)[expected ? "toBeTruthy" : "toBeFalsy"]();
    expect(tryIs).toHaveBeenCalledTimes(1);
  });
});
