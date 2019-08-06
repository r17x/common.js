import { has, getByProp, equal } from "Object";

describe("[Object.getByProp] Test", () => {
  each([
    [{ x: 1, y: 2, z: 5 }, "x", 1],
    [{ x: { x: 1, y: 2, z: 5 }, y: 2, z: 5 }, "x.x", 1],
    [{ x: { x: 1, y: 2, z: 5 }, y: { x: 1, y: 2, z: 5 }, z: 5 }, "y.x", 1]
  ]).test(
    "the object of %j has own property %s",
    (obj, propertyName, returned) => {
      const fn = jest.fn(getByProp);
      const result = fn(obj, propertyName);
      expect(result).toBe(returned);
    }
  );
});

describe("[Object.equal] Test", () => {
  each([[{ x: 1, y: 2, c: String }, { x: 1, y: 2, c: String }, true]]).test(
    "Object X %s equal Y %s is %s",
    (paramX, paramY, expected) => {
      const fn = jest.fn(equal);
      const result = fn(paramX, paramY);
      expect(result)[expected ? "toBeTruthy" : "toBeFalsy"]();
      expect(fn).toHaveBeenCalledTimes(1);
    }
  );
});

describe("[Object.has] Test", () => {
  each([[{ x: 1, y: 2 }, "x", true]]).test(
    "the object of %j have property `%s` ? %s",
    (test, param, expected) => {
      const tryHas = jest.fn(has);
      const result = tryHas(test, ...param);
      expect(result)[expected ? "toBeTruthy" : "toBeFalsy"]();
      expect(tryHas).toHaveBeenCalledTimes(1);
      expect(tryHas).toHaveBeenCalledWith(test, ...param);
    }
  );
});
