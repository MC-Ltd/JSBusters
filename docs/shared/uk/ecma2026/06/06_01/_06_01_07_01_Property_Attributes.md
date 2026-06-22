<div class="emu-block">
  <div id="spec-container">
  <emu-clause id="sec-ecmascript-language-types">
    <emu-clause id="sec-object-type">
      <emu-clause id="sec-property-attributes">
        <h1><span class="secnum">6.1.7.1</span> Property Attributes</h1>
        <p>Attributes are used in this specification to define and explain the state of Object properties as described in <emu-xref href="#table-object-property-attributes" id="_ref_101"><a href="ecmascript-data-types-and-values.html#table-object-property-attributes">Table 3</a></emu-xref>. Unless specified explicitly, the initial value of each attribute is its Default Value.</p>
        <emu-table id="table-object-property-attributes" caption="Attributes of an Object property" oldids="table-2,table-3,table-4,table-data-property-attributes,table-accessor-property-attributes,table-default-attribute-values"><figure><figcaption>Table 3: Attributes of an Object property</figcaption><span id="table-default-attribute-values"></span><span id="table-accessor-property-attributes"></span><span id="table-data-property-attributes"></span><span id="table-4"></span><span id="table-3"></span><span id="table-2"></span>
          <table>
            <thead>
              <tr>
                <th>Attribute Name</th>
                <th>Types of property for which it is present</th>
                <th>Value Domain</th>
                <th>Default Value</th>
                <th>Description</th>
              </tr>
            </thead>
            <tbody><tr>
              <td>
                <var class="field">[[Value]]</var>
              </td>
              <td>
                <emu-xref href="#sec-object-type" id="_ref_1557"><a href="ecmascript-data-types-and-values.html#sec-object-type">data property</a></emu-xref>
              </td>
              <td>
                an <emu-xref href="#sec-ecmascript-language-types" id="_ref_1558"><a href="ecmascript-data-types-and-values.html#sec-ecmascript-language-types">ECMAScript language value</a></emu-xref>
              </td>
              <td>
                <emu-val>undefined</emu-val>
              </td>
              <td>
                The value retrieved by a get access of the property.
              </td>
            </tr>
            <tr>
              <td>
                <var class="field">[[Writable]]</var>
              </td>
              <td>
                <emu-xref href="#sec-object-type" id="_ref_1559"><a href="ecmascript-data-types-and-values.html#sec-object-type">data property</a></emu-xref>
              </td>
              <td>
                a Boolean
              </td>
              <td>
                <emu-val>false</emu-val>
              </td>
              <td>
                If <emu-val>false</emu-val>, attempts by ECMAScript code to change the property's <var class="field">[[Value]]</var> attribute using <var class="field">[[Set]]</var> will not succeed.
              </td>
            </tr>
            <tr>
              <td>
                <var class="field">[[Get]]</var>
              </td>
              <td>
                <emu-xref href="#sec-object-type" id="_ref_1560"><a href="ecmascript-data-types-and-values.html#sec-object-type">accessor property</a></emu-xref>
              </td>
              <td>
                an Object or <emu-val>undefined</emu-val>
              </td>
              <td>
                <emu-val>undefined</emu-val>
              </td>
              <td>
                If the value <emu-xref href="#sec-object-type" id="_ref_1561"><a href="ecmascript-data-types-and-values.html#sec-object-type">is an Object</a></emu-xref> it must be a <emu-xref href="#function-object" id="_ref_1562"><a href="ecmascript-data-types-and-values.html#function-object">function object</a></emu-xref>. The function's <var class="field">[[Call]]</var> internal method (<emu-xref href="#table-additional-essential-internal-methods-of-function-objects" id="_ref_102"><a href="ecmascript-data-types-and-values.html#table-additional-essential-internal-methods-of-function-objects">Table 5</a></emu-xref>) is called with an empty arguments list to retrieve the property value each time a get access of the property is performed.
              </td>
            </tr>
            <tr>
              <td>
                <var class="field">[[Set]]</var>
              </td>
              <td>
                <emu-xref href="#sec-object-type" id="_ref_1563"><a href="ecmascript-data-types-and-values.html#sec-object-type">accessor property</a></emu-xref>
              </td>
              <td>
                an Object or <emu-val>undefined</emu-val>
              </td>
              <td>
                <emu-val>undefined</emu-val>
              </td>
              <td>
                If the value <emu-xref href="#sec-object-type" id="_ref_1564"><a href="ecmascript-data-types-and-values.html#sec-object-type">is an Object</a></emu-xref> it must be a <emu-xref href="#function-object" id="_ref_1565"><a href="ecmascript-data-types-and-values.html#function-object">function object</a></emu-xref>. The function's <var class="field">[[Call]]</var> internal method (<emu-xref href="#table-additional-essential-internal-methods-of-function-objects" id="_ref_103"><a href="ecmascript-data-types-and-values.html#table-additional-essential-internal-methods-of-function-objects">Table 5</a></emu-xref>) is called with an arguments list containing the assigned value as its sole argument each time a set access of the property is performed. The effect of a property's <var class="field">[[Set]]</var> internal method may, but is not required to, have an effect on the value returned by subsequent calls to the property's <var class="field">[[Get]]</var> internal method.
              </td>
            </tr>
            <tr>
              <td>
                <var class="field">[[Enumerable]]</var>
              </td>
              <td>
                <emu-xref href="#sec-object-type" id="_ref_1566"><a href="ecmascript-data-types-and-values.html#sec-object-type">data property</a></emu-xref> or <emu-xref href="#sec-object-type" id="_ref_1567"><a href="ecmascript-data-types-and-values.html#sec-object-type">accessor property</a></emu-xref>
              </td>
              <td>
                a Boolean
              </td>
              <td>
                <emu-val>false</emu-val>
              </td>
              <td>
                If <emu-val>true</emu-val>, the property will be enumerated by a for-in enumeration (see <emu-xref href="#sec-for-in-and-for-of-statements" id="_ref_104"><a href="ecmascript-language-statements-and-declarations.html#sec-for-in-and-for-of-statements">14.7.5</a></emu-xref>). Otherwise, the property is said to be non-enumerable.
              </td>
            </tr>
            <tr>
              <td>
                <var class="field">[[Configurable]]</var>
              </td>
              <td>
                <emu-xref href="#sec-object-type" id="_ref_1568"><a href="ecmascript-data-types-and-values.html#sec-object-type">data property</a></emu-xref> or <emu-xref href="#sec-object-type" id="_ref_1569"><a href="ecmascript-data-types-and-values.html#sec-object-type">accessor property</a></emu-xref>
              </td>
              <td>
                a Boolean
              </td>
              <td>
                <emu-val>false</emu-val>
              </td>
              <td>
                If <emu-val>false</emu-val>, attempts to delete the property, change it from a <emu-xref href="#sec-object-type" id="_ref_1570"><a href="ecmascript-data-types-and-values.html#sec-object-type">data property</a></emu-xref> to an <emu-xref href="#sec-object-type" id="_ref_1571"><a href="ecmascript-data-types-and-values.html#sec-object-type">accessor property</a></emu-xref> or from an <emu-xref href="#sec-object-type" id="_ref_1572"><a href="ecmascript-data-types-and-values.html#sec-object-type">accessor property</a></emu-xref> to a <emu-xref href="#sec-object-type" id="_ref_1573"><a href="ecmascript-data-types-and-values.html#sec-object-type">data property</a></emu-xref>, or make any changes to its attributes (other than replacing an existing <var class="field">[[Value]]</var> or setting <var class="field">[[Writable]]</var> to <emu-val>false</emu-val>) will fail.
              </td>
            </tr>
          </tbody></table>
        </figure></emu-table>
      </emu-clause>
    </emu-clause>
  </emu-clause>
  </div>
</div>