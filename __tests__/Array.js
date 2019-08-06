import { unique } from "Object";
describe("[Object.unique] Test:", () => {
  each([
    // case 1
    [
      [
        { x: 1, y: 2, z: 3 },
        { x: 1, y: 2, z: 3 },
        { x: 1, y: 2, z: 3 },
        { x: 1, y: 2, z: 3 }
      ],
      [{ x: 1, y: 2, z: 3 }]
    ],
    // case 2
    [[{ x: 1 }, { x: 2 }, { x: 3 }, { x: 2 }], [{ x: 1 }, { x: 2 }, { x: 3 }]]
  ]).test(
    `should return 1 item in duplicate item of array
        %j
        %j
    `,
    (duplicateItemInArray, expectedArrayUnique) => {
      const tryUnique = jest.fn(unique);
      const result = tryUnique(duplicateItemInArray, "x");
      expect(result).toStrictEqual(expectedArrayUnique);
    }
  );
});
