# Documentation

<!-- Generated by documentation.js. Update this documentation by updating the source code. -->

### Table of Contents

- [is](#is)
    -   [Parameters](#parameters)
    -   [Examples](#examples)
- [isEqual](#isequal)
    -   [Parameters](#parameters-1)
- [has](#has)
    -   [Parameters](#parameters-2)
    -   [Examples](#examples-1)
- [equal](#equal)
    -   [Parameters](#parameters-3)
- [unique](#unique)
    -   [Parameters](#parameters-4)
- [getByProp](#getbyprop)
    -   [Parameters](#parameters-5)

## is

Type data checking on the fly.

### Parameters

- `Any`  

### Examples

```javascript
const myObject = {x:1, y:3}
const thisIs = is(myObject)
// expect(thisIs).toBe("Object")
```

Returns **[Boolean](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Boolean)** 

## isEqual

`isEqual` is like `is` but have 2 parameter for compare 2 type and return Bolean.

### Parameters

- `Anything` **Any** 
- `Anymore` **Any** 

Returns **[Boolean](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Boolean)** 

## has

checking the property in your object.

### Parameters

- `obj` **[Object](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Object)** 
- `propertyName` **[String](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String)** 

### Examples

```javascript
const Person = {name: 'John Lennon', band: 'Beatles', genre: "rock n roll"}

has(Person,'name')
```

Returns **[Boolean](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Boolean)** 

## equal

Compare 2 Object

### Parameters

- `objX` **[Object](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Object)** 
- `objY` **[Object](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Object)** 

Returns **Bool** This function for simple json object compare
you can't compare specific JSON like NODE Or
Dom Object in JSON-Data.

## unique

Get Unique value in array.

### Parameters

- `arrs` **[Array](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Array)** 
- `prop` **[String](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String)** as properties

Returns **[Array](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Array)** new array

## getByProp

Get value of object by property name.

### Parameters

- `obj` **[Object](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Object)** to find value in this object
- `prop` **[String](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String)** property name in obj

Returns **Any** value in object by property name
