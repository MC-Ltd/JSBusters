---
# layout: page
ecmaFooter: true
title: 'Order of keys in an object'
date: 2026-06-22
---

# Order of keys in an object

# Порядок ключів в об'єкті

Often, in articles about the order of object keys, we can read something like the following:

> Are objects ordered? In other words, if we loop over an object, do we get all properties in the same order they were added? Can we rely on this?

> The short answer is: “ordered in a special fashion”: integer properties are sorted, others appear in creation order.
> [javascript.info](https://javascript.info/object#ordered-like-an-object)

Or

> The traversal order, as of modern ECMAScript specification, is well-defined and consistent across implementations. Within each component of the prototype chain, all non-negative integer keys (those that can be array indices) will be traversed first in ascending order by value, then other string keys in ascending chronological order of property creation.
> [developer.mozilla.org](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for...in#description)



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

sandboxes: [Node.js](https://onecompiler.com/javascript/44t78wakw), [Deno](https://onecompiler.com/javascript/44t78wakw), [Bun](https://onecompiler.com/javascript/44t78wakw), [DevTools](/en/faq.md#DevTools)

<!--@include: ../../../shared/en/ecma2026/10/10_01/10_01_11_OwnPropertyKeys.md-->

<!--@include: ../../../shared/en/ecma2026/10/10_01/10_01_11_01_OrdinaryOwnPropertyKeys.md-->


