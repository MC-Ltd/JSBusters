
<div class="emu-block">
  <div id="spec-container">
  <emu-clause id="sec-ecmascript-language-types">
    <emu-clause id="sec-object-type">
      <emu-clause id="sec-object-internal-methods-and-internal-slots">
        <h1><span class="secnum">6.1.7.2</span> Object Internal Methods and Internal Slots</h1>
        <p>The actual semantics of objects, in ECMAScript, are specified via algorithms called <em>internal methods</em>. Each object in an ECMAScript engine is associated with a set of internal methods that defines its runtime behaviour. These internal methods are not part of the ECMAScript language. They are defined by this specification purely for expository purposes. However, each object within an implementation of ECMAScript must behave as specified by the internal methods associated with it. The exact manner in which this is accomplished is determined by the implementation.</p>
        <p>Internal method names are polymorphic. This means that different object values may perform different algorithms when a common internal method name is invoked upon them. That actual object upon which an internal method is invoked is the “target” of the invocation. If, at runtime, the implementation of an algorithm attempts to use an internal method of an object that the object does not support, a <emu-val>TypeError</emu-val> exception is thrown.</p>
        <p>Internal slots correspond to internal state that is associated with objects, Symbols, or <emu-xref href="#sec-private-names" id="_ref_1574"><a href="ecmascript-data-types-and-values.html#sec-private-names">Private Names</a></emu-xref> and used by various ECMAScript specification algorithms. Internal slots are not object properties and they are not inherited. Depending upon the specific internal slot specification, such state may consist of values of any <emu-xref href="#sec-ecmascript-language-types" id="_ref_1575"><a href="ecmascript-data-types-and-values.html#sec-ecmascript-language-types">ECMAScript language type</a></emu-xref> or of specific ECMAScript specification type values. Unless explicitly specified otherwise, internal slots are allocated as part of the process of creating an object, Symbol, or <emu-xref href="#sec-private-names" id="_ref_1576"><a href="ecmascript-data-types-and-values.html#sec-private-names">Private Name</a></emu-xref> and may not be dynamically added. Unless specified otherwise, the initial value of an internal slot is the value <emu-val>undefined</emu-val>. Various algorithms within this specification create values that have internal slots. However, the ECMAScript language provides no direct way to manipulate internal slots.</p>
        <p>All objects have an internal slot named <var class="field">[[PrivateElements]]</var>, which is a <emu-xref href="#sec-list-and-record-specification-type" id="_ref_1577"><a href="ecmascript-data-types-and-values.html#sec-list-and-record-specification-type">List</a></emu-xref> of <emu-xref href="#sec-privateelement-specification-type" id="_ref_1578"><a href="ecmascript-data-types-and-values.html#sec-privateelement-specification-type">PrivateElements</a></emu-xref>. This <emu-xref href="#sec-list-and-record-specification-type" id="_ref_1579"><a href="ecmascript-data-types-and-values.html#sec-list-and-record-specification-type">List</a></emu-xref> represents the values of the private fields, methods, and accessors for the object. Initially, it is an empty <emu-xref href="#sec-list-and-record-specification-type" id="_ref_1580"><a href="ecmascript-data-types-and-values.html#sec-list-and-record-specification-type">List</a></emu-xref>.</p>
        <p>Internal methods and internal slots are identified within this specification using names enclosed in double square brackets [[ ]].</p>
        <p><emu-xref href="#table-essential-internal-methods" id="_ref_105"><a href="ecmascript-data-types-and-values.html#table-essential-internal-methods">Table 4</a></emu-xref> summarizes the <em>essential internal methods</em> used by this specification that are applicable to all objects created or manipulated by ECMAScript code. Every object must have algorithms for all of the essential internal methods. However, all objects do not necessarily use the same algorithms for those methods.</p>
        <p>An <dfn id="ordinary-object" variants="ordinary objects" tabindex="-1">ordinary object</dfn> is an object that satisfies all of the following criteria:</p>
        <ul>
          <li>
            For the internal methods listed in <emu-xref href="#table-essential-internal-methods" id="_ref_106"><a href="ecmascript-data-types-and-values.html#table-essential-internal-methods">Table 4</a></emu-xref>, the object uses those defined in <emu-xref href="#sec-ordinary-object-internal-methods-and-internal-slots" id="_ref_107"><a href="ordinary-and-exotic-objects-behaviours.html#sec-ordinary-object-internal-methods-and-internal-slots">10.1</a></emu-xref>.
          </li>
          <li>
            If the object has a <var class="field">[[Call]]</var> internal method, it uses either the one defined in <emu-xref href="#sec-ecmascript-function-objects-call-thisargument-argumentslist" id="_ref_108"><a href="ordinary-and-exotic-objects-behaviours.html#sec-ecmascript-function-objects-call-thisargument-argumentslist">10.2.1</a></emu-xref> or the one defined in <emu-xref href="#sec-built-in-function-objects-call-thisargument-argumentslist" id="_ref_109"><a href="ordinary-and-exotic-objects-behaviours.html#sec-built-in-function-objects-call-thisargument-argumentslist">10.3.1</a></emu-xref>.
          </li>
          <li>
            If the object has a <var class="field">[[Construct]]</var> internal method, it uses either the one defined in <emu-xref href="#sec-ecmascript-function-objects-construct-argumentslist-newtarget" id="_ref_110"><a href="ordinary-and-exotic-objects-behaviours.html#sec-ecmascript-function-objects-construct-argumentslist-newtarget">10.2.2</a></emu-xref> or the one defined in <emu-xref href="#sec-built-in-function-objects-construct-argumentslist-newtarget" id="_ref_111"><a href="ordinary-and-exotic-objects-behaviours.html#sec-built-in-function-objects-construct-argumentslist-newtarget">10.3.2</a></emu-xref>.
          </li>
        </ul>
        <p>An <dfn id="exotic-object" variants="exotic objects" tabindex="-1">exotic object</dfn> is an object that is not an <emu-xref href="#ordinary-object" id="_ref_1581"><a href="ecmascript-data-types-and-values.html#ordinary-object">ordinary object</a></emu-xref>.</p>
        <p>This specification recognizes different kinds of <emu-xref href="#exotic-object" id="_ref_1582"><a href="ecmascript-data-types-and-values.html#exotic-object">exotic objects</a></emu-xref> by those objects' internal methods. An object that is behaviourally equivalent to a particular kind of <emu-xref href="#exotic-object" id="_ref_1583"><a href="ecmascript-data-types-and-values.html#exotic-object">exotic object</a></emu-xref> (such as an <emu-xref href="#array-exotic-object" id="_ref_1584"><a href="ordinary-and-exotic-objects-behaviours.html#array-exotic-object">Array exotic object</a></emu-xref> or a <emu-xref href="#bound-function-exotic-object" id="_ref_1585"><a href="ordinary-and-exotic-objects-behaviours.html#bound-function-exotic-object">bound function exotic object</a></emu-xref>), but does not have the same collection of internal methods specified for that kind, is not recognized as that kind of <emu-xref href="#exotic-object" id="_ref_1586"><a href="ecmascript-data-types-and-values.html#exotic-object">exotic object</a></emu-xref>.</p>
        <p>The “Signature” column of <emu-xref href="#table-essential-internal-methods" id="_ref_112"><a href="ecmascript-data-types-and-values.html#table-essential-internal-methods">Table 4</a></emu-xref> and other similar tables describes the invocation pattern for each internal method. The invocation pattern always includes a parenthesized list of descriptive parameter names. If a parameter name is the same as an ECMAScript type name then the name describes the required type of the parameter value. If an internal method explicitly returns a value, its parameter list is followed by the symbol “→” and the type name of the returned value. The type names used in signatures refer to the types defined in clause <emu-xref href="#sec-ecmascript-data-types-and-values" id="_ref_113"><a href="ecmascript-data-types-and-values.html#sec-ecmascript-data-types-and-values">6</a></emu-xref> augmented by the following additional names. “<em>any</em>” means the value may be any <emu-xref href="#sec-ecmascript-language-types" id="_ref_1587"><a href="ecmascript-data-types-and-values.html#sec-ecmascript-language-types">ECMAScript language type</a></emu-xref>.</p>
        <p>In addition to its parameters, an internal method always has access to the object that is the target of the method invocation.</p>
        <p>An internal method implicitly returns a <emu-xref href="#sec-completion-record-specification-type" id="_ref_1588"><a href="ecmascript-data-types-and-values.html#sec-completion-record-specification-type">Completion Record</a></emu-xref>, either a <emu-xref href="#sec-completion-record-specification-type" id="_ref_1589"><a href="ecmascript-data-types-and-values.html#sec-completion-record-specification-type">normal completion</a></emu-xref> that wraps a value of the return type shown in its invocation pattern, or a <emu-xref href="#sec-completion-record-specification-type" id="_ref_1590"><a href="ecmascript-data-types-and-values.html#sec-completion-record-specification-type">throw completion</a></emu-xref>.</p>
        <emu-table id="table-essential-internal-methods" caption="Essential Internal Methods" oldids="table-5"><figure><figcaption>Table 4: Essential Internal Methods</figcaption><span id="table-5"></span>
          <table>
            <thead>
              <tr>
                <th>
                  Internal Method
                </th>
                <th>
                  Signature
                </th>
                <th>
                  Description
                </th>
              </tr>
            </thead>
            <tbody><tr>
              <td>
                <var class="field">[[GetPrototypeOf]]</var>
              </td>
              <td>
                ( ) <b>→</b> Object | Null
              </td>
              <td>
                Determine the object that provides inherited properties for this object. A <emu-val>null</emu-val> value indicates that there are no inherited properties.
              </td>
            </tr>
            <tr>
              <td>
                <var class="field">[[SetPrototypeOf]]</var>
              </td>
              <td>
                (Object | Null) <b>→</b> Boolean
              </td>
              <td>
                Associate this object with another object that provides inherited properties. Passing <emu-val>null</emu-val> indicates that there are no inherited properties. Returns <emu-val>true</emu-val> indicating that the operation was completed successfully or <emu-val>false</emu-val> indicating that the operation was not successful.
              </td>
            </tr>
            <tr>
              <td>
                <var class="field">[[IsExtensible]]</var>
              </td>
              <td>
                ( ) <b>→</b> Boolean
              </td>
              <td>
                Determine whether it is permitted to add additional properties to this object.
              </td>
            </tr>
            <tr>
              <td>
                <var class="field">[[PreventExtensions]]</var>
              </td>
              <td>
                ( ) <b>→</b> Boolean
              </td>
              <td>
                Control whether new properties may be added to this object. Returns <emu-val>true</emu-val> if the operation was successful or <emu-val>false</emu-val> if the operation was unsuccessful.
              </td>
            </tr>
            <tr>
              <td>
                <var class="field">[[GetOwnProperty]]</var>
              </td>
              <td>
                (<var>propertyKey</var>) <b>→</b> Undefined | <emu-xref href="#sec-property-descriptor-specification-type" id="_ref_1591"><a href="ecmascript-data-types-and-values.html#sec-property-descriptor-specification-type">Property Descriptor</a></emu-xref>
              </td>
              <td>
                Return a <emu-xref href="#sec-property-descriptor-specification-type" id="_ref_1592"><a href="ecmascript-data-types-and-values.html#sec-property-descriptor-specification-type">Property Descriptor</a></emu-xref> for the own property of this object whose key is <var>propertyKey</var>, or <emu-val>undefined</emu-val> if no such property exists.
              </td>
            </tr>
            <tr>
              <td>
                <var class="field">[[DefineOwnProperty]]</var>
              </td>
              <td>
                (<var>propertyKey</var>, <var>PropertyDescriptor</var>) <b>→</b> Boolean
              </td>
              <td>
                Create or alter the own property, whose key is <var>propertyKey</var>, to have the state described by <var>PropertyDescriptor</var>. Return <emu-val>true</emu-val> if that property was successfully created/updated or <emu-val>false</emu-val> if the property could not be created or updated.
              </td>
            </tr>
            <tr>
              <td>
                <var class="field">[[HasProperty]]</var>
              </td>
              <td>
                (<var>propertyKey</var>) <b>→</b> Boolean
              </td>
              <td>
                Return a Boolean value indicating whether this object already has either an own or inherited property whose key is <var>propertyKey</var>.
              </td>
            </tr>
            <tr>
              <td>
                <var class="field">[[Get]]</var>
              </td>
              <td>
                (<var>propertyKey</var>, <var>Receiver</var>) <b>→</b> <em>any</em>
              </td>
              <td>
                Return the value of the property whose key is <var>propertyKey</var> from this object. If any ECMAScript code must be executed to retrieve the property value, <var>Receiver</var> is used as the <emu-val>this</emu-val> value when evaluating the code.
              </td>
            </tr>
            <tr>
              <td>
                <var class="field">[[Set]]</var>
              </td>
              <td>
                (<var>propertyKey</var>, <var>value</var>, <var>Receiver</var>) <b>→</b> Boolean
              </td>
              <td>
                Set the value of the property whose key is <var>propertyKey</var> to <var>value</var>. If any ECMAScript code must be executed to set the property value, <var>Receiver</var> is used as the <emu-val>this</emu-val> value when evaluating the code. Returns <emu-val>true</emu-val> if the property value was set or <emu-val>false</emu-val> if it could not be set.
              </td>
            </tr>
            <tr>
              <td>
                <var class="field">[[Delete]]</var>
              </td>
              <td>
                (<var>propertyKey</var>) <b>→</b> Boolean
              </td>
              <td>
                Remove the own property whose key is <var>propertyKey</var> from this object. Return <emu-val>false</emu-val> if the property was not deleted and is still present. Return <emu-val>true</emu-val> if the property was deleted or is not present.
              </td>
            </tr>
            <tr>
              <td>
                <var class="field">[[OwnPropertyKeys]]</var>
              </td>
              <td>
                ( ) <b>→</b> <emu-xref href="#sec-list-and-record-specification-type" id="_ref_1593"><a href="ecmascript-data-types-and-values.html#sec-list-and-record-specification-type">List</a></emu-xref> of <emu-xref href="#property-key" id="_ref_1594"><a href="ecmascript-data-types-and-values.html#property-key">property keys</a></emu-xref>
              </td>
              <td>
                Return a <emu-xref href="#sec-list-and-record-specification-type" id="_ref_1595"><a href="ecmascript-data-types-and-values.html#sec-list-and-record-specification-type">List</a></emu-xref> whose elements are all of the own <emu-xref href="#property-key" id="_ref_1596"><a href="ecmascript-data-types-and-values.html#property-key">property keys</a></emu-xref> for the object.
              </td>
            </tr>
          </tbody></table>
        </figure></emu-table>
        <p><emu-xref href="#table-additional-essential-internal-methods-of-function-objects" id="_ref_114"><a href="ecmascript-data-types-and-values.html#table-additional-essential-internal-methods-of-function-objects">Table 5</a></emu-xref> summarizes additional essential internal methods that are supported by objects that may be called as functions. A <dfn id="function-object" variants="function objects" tabindex="-1">function object</dfn> is an object that supports the <var class="field">[[Call]]</var> internal method. A <dfn id="constructor" variants="constructors" tabindex="-1">constructor</dfn> is an object that supports the <var class="field">[[Construct]]</var> internal method. Every object that supports <var class="field">[[Construct]]</var> must support <var class="field">[[Call]]</var>; that is, every <emu-xref href="#constructor" id="_ref_1597"><a href="ecmascript-data-types-and-values.html#constructor">constructor</a></emu-xref> must be a <emu-xref href="#function-object" id="_ref_1598"><a href="ecmascript-data-types-and-values.html#function-object">function object</a></emu-xref>. Therefore, a <emu-xref href="#constructor" id="_ref_1599"><a href="ecmascript-data-types-and-values.html#constructor">constructor</a></emu-xref> may also be referred to as a <em><emu-xref href="#constructor" id="_ref_1600"><a href="ecmascript-data-types-and-values.html#constructor">constructor</a></emu-xref> function</em> or <em><emu-xref href="#constructor" id="_ref_1601"><a href="ecmascript-data-types-and-values.html#constructor">constructor</a></emu-xref> <emu-xref href="#function-object" id="_ref_1602"><a href="ecmascript-data-types-and-values.html#function-object">function object</a></emu-xref></em>.</p>
        <emu-table id="table-additional-essential-internal-methods-of-function-objects" caption="Additional Essential Internal Methods of Function Objects" oldids="table-6"><figure><figcaption>Table 5: Additional Essential Internal Methods of Function Objects</figcaption><span id="table-6"></span>
          <table>
            <thead>
              <tr>
                <th>
                  Internal Method
                </th>
                <th>
                  Signature
                </th>
                <th>
                  Description
                </th>
              </tr>
            </thead>
            <tbody><tr>
              <td>
                <var class="field">[[Call]]</var>
              </td>
              <td>
                (<em>any</em>, a <emu-xref href="#sec-list-and-record-specification-type" id="_ref_1603"><a href="ecmascript-data-types-and-values.html#sec-list-and-record-specification-type">List</a></emu-xref> of <em>any</em>) <b>→</b> <em>any</em>
              </td>
              <td>
                Executes code associated with this object. Invoked via a function call expression. The arguments to the internal method are a <emu-val>this</emu-val> value and a <emu-xref href="#sec-list-and-record-specification-type" id="_ref_1604"><a href="ecmascript-data-types-and-values.html#sec-list-and-record-specification-type">List</a></emu-xref> whose elements are the arguments passed to the function by a call expression. Objects that implement this internal method are <em>callable</em>.
              </td>
            </tr>
            <tr>
              <td>
                <var class="field">[[Construct]]</var>
              </td>
              <td>
                (a <emu-xref href="#sec-list-and-record-specification-type" id="_ref_1605"><a href="ecmascript-data-types-and-values.html#sec-list-and-record-specification-type">List</a></emu-xref> of <em>any</em>, Object) <b>→</b> Object
              </td>
              <td>
                Creates an object. Invoked via the <code>new</code> operator or a <code>super</code> call. The first argument to the internal method is a <emu-xref href="#sec-list-and-record-specification-type" id="_ref_1606"><a href="ecmascript-data-types-and-values.html#sec-list-and-record-specification-type">List</a></emu-xref> whose elements are the arguments of the <emu-xref href="#constructor" id="_ref_1607"><a href="ecmascript-data-types-and-values.html#constructor">constructor</a></emu-xref> invocation or the <code>super</code> call. The second argument is the object to which the <code>new</code> operator was initially applied. Objects that implement this internal method are called <em><emu-xref href="#constructor" id="_ref_1608"><a href="ecmascript-data-types-and-values.html#constructor">constructors</a></emu-xref></em>. A <emu-xref href="#function-object" id="_ref_1609"><a href="ecmascript-data-types-and-values.html#function-object">function object</a></emu-xref> is not necessarily a <emu-xref href="#constructor" id="_ref_1610"><a href="ecmascript-data-types-and-values.html#constructor">constructor</a></emu-xref> and such non-<emu-xref href="#constructor" id="_ref_1611"><a href="ecmascript-data-types-and-values.html#constructor">constructor</a></emu-xref> <emu-xref href="#function-object" id="_ref_1612"><a href="ecmascript-data-types-and-values.html#function-object">function objects</a></emu-xref> do not have a <var class="field">[[Construct]]</var> internal method.
              </td>
            </tr>
          </tbody></table>
        </figure></emu-table>
        <p>The semantics of the essential internal methods for <emu-xref href="#ordinary-object" id="_ref_1613"><a href="ecmascript-data-types-and-values.html#ordinary-object">ordinary objects</a></emu-xref> and standard <emu-xref href="#exotic-object" id="_ref_1614"><a href="ecmascript-data-types-and-values.html#exotic-object">exotic objects</a></emu-xref> are specified in clause <emu-xref href="#sec-ordinary-and-exotic-objects-behaviours" id="_ref_115"><a href="ordinary-and-exotic-objects-behaviours.html#sec-ordinary-and-exotic-objects-behaviours">10</a></emu-xref>. If any specified use of an internal method of an <emu-xref href="#exotic-object" id="_ref_1615"><a href="ecmascript-data-types-and-values.html#exotic-object">exotic object</a></emu-xref> is not supported by an implementation, that usage must throw a <emu-val>TypeError</emu-val> exception when attempted.</p>
      </emu-clause>
    </emu-clause>
  </emu-clause>
  </div>
</div>