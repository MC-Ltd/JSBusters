---
# layout: page
ecmaFooter: true
title: ''
date: 2025-06-dd
---

# 

Давайте подивимося на ці алгоритми:
```mermaid
flowchart TB
    classDef boldText font-size:16px,font-weight:bold;
    20.1.2.10["`20.1.2.10 Object.getOwnPropertyNames ( *O* )`"]:::boldText
    %%click 20.1.2.10 "https://tc39.es/ecma262/2026/multipage/fundamental-objects.html#sec-object.getownpropertynames" _blank
    click 20.1.2.10 "/JSBusters/uk/ecma2026/20/20_01/20_01_02/clause_20_01_02_10_Object_getOwnPropertyNames" _blank
    20.1.2.10 ---> 20.1.2.11.1

    20.1.2.11["`20.1.2.11 Object.getOwnPropertySymbols ( *O* )`"]:::boldText
    %%click 20.1.2.11 "https://tc39.es/ecma262/2026/multipage/fundamental-objects.html#sec-object.getownpropertysymbols" _blank
    click 20.1.2.11 "/JSBusters/uk/ecma2026/20/20_01/20_01_02/clause_20_01_02_11_Object_getOwnPropertySymbols" _blank
    20.1.2.11 ---> 20.1.2.11.1

    20.1.2.11.1["`20.1.2.11.1 GetOwnPropertyKeys ( *O*, *type* )`"]:::boldText
    %%click 20.1.2.11.1 "https://tc39.es/ecma262/2026/multipage/fundamental-objects.html#sec-getownpropertykeys" _blank
    click 20.1.2.11.1 "/JSBusters/uk/ecma2026/20/20_01/20_01_02/clause_20_01_02_11_01_GetOwnPropertyKeys" _blank
    20.1.2.11.1 ---> 10.1.11



    10.1.11["`10.1.11 [[OwnPropertyKeys]] ( )`"]:::boldText
    %%click 10.1.11 "https://tc39.es/ecma262/2026/multipage/ordinary-and-exotic-objects-behaviours.html#sec-ordinary-object-internal-methods-and-internal-slots-ownpropertykeys" _blank
	click 10.1.11 "/JSBusters/uk/ecma2026/10/10_01/clause_10_01_11_OwnPropertyKeys" _blank

    10.1.11.1["`10.1.11.1 OrdinaryOwnPropertyKeys ( *O* )`"]:::boldText
    %%click 10.1.11.1 "https://tc39.es/ecma262/2026/multipage/ordinary-and-exotic-objects-behaviours.html#sec-ordinaryownpropertykeys" _blank
    click 10.1.11.1 "/JSBusters/uk/ecma2026/10/10_01/clause_10_01_11_01_OrdinaryOwnPropertyKeys" _blank
    10.1.11 --> 10.1.11.1
    
    
    
    %%13.2.5.6~~~~~~CopyRight@{ shape: braces, label: "© 2026 JSBusters" }
```




<!--@include: ../../../../shared/uk/ecma2026/-->


