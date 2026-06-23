---
# layout: page
ecmaFooter: true
title: ''
date: 2025-06-18
---

# Порядок ключів в об'єкті / order of keys in an object




<!--@include: ../../../shared/uk/ecma2026/10/10_01/10_01_11_OwnPropertyKeys.md-->

<!--@include: ../../../shared/uk/ecma2026/10/10_01/10_01_11_01_OrdinaryOwnPropertyKeys.md-->


```javascript
var obj = {
    [Symbol("ID2")]: "ID2",
    [Symbol("ID1")]: "ID1",
    "9": 9,
    "0": 0,
    "z": "z",
    "a": "a",
};

console.log(obj);
// {
//   '0': 0,
//   '9': 9,
//   z: 'z',
//   a: 'a',
//   [Symbol(ID2)]: 'ID2',
//   [Symbol(ID1)]: 'ID1'
// }
```

[пісочниця / sandbox NodeJS](https://onecompiler.com/javascript/44t78wakw)

