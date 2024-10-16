// proto is just a pointing(refrence) object for an object
const obj1 = {
  key1: "value1",
  key2: "value2",
};

// obj2 is empty object
// we are just creating obj2 with setting proto of it
// here obj1 is proto for obj2
// so now what we seach in obj2 it will be seached in obj1
const obj2 = Object.create(obj1);

// we are adding key2 in obj2
obj2.key3 = "value3";

// we can see whole obj1 as proto of obj2
console.log(obj2.__proto__);

// this key doesn't exist in obj2 but it is present in obj1(proto of obj2)
console.log(obj2.key1);
