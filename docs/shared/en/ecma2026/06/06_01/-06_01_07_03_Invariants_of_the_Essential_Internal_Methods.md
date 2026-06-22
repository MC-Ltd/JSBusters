
<div class="emu-block">
  <div id="spec-container">
  <emu-clause id="sec-ecmascript-language-types">
    <emu-clause id="sec-object-type">
      <emu-clause id="sec-invariants-of-the-essential-internal-methods">
        <h1><span class="secnum">6.1.7.3</span> Invariants of the Essential Internal Methods</h1>
        <p>The Internal Methods of Objects of an ECMAScript engine must conform to the list of invariants specified below. Ordinary ECMAScript Objects as well as all standard <emu-xref href="#exotic-object" id="_ref_1616"><a href="ecmascript-data-types-and-values.html#exotic-object">exotic objects</a></emu-xref> in this specification maintain these invariants. ECMAScript Proxy objects maintain these invariants by means of runtime checks on the result of traps invoked on the <var class="field">[[ProxyHandler]]</var> object.</p>
        <p>Any implementation provided <emu-xref href="#exotic-object" id="_ref_1617"><a href="ecmascript-data-types-and-values.html#exotic-object">exotic objects</a></emu-xref> must also maintain these invariants for those objects. Violation of these invariants may cause ECMAScript code to have unpredictable behaviour and create security issues. However, violation of these invariants must never compromise the memory safety of an implementation.</p>
        <p>An implementation must not allow these invariants to be circumvented in any manner such as by providing alternative interfaces that implement the functionality of the essential internal methods without enforcing their invariants.</p>
        <h2>Definitions:</h2>
        <ul>
          <li>
            The <em>target</em> of an internal method is the object upon which the internal method is called.
          </li>
          <li>
            A target is <em>non-extensible</em> if it has been observed to return <emu-val>false</emu-val> from its <var class="field">[[IsExtensible]]</var> internal method, or <emu-val>true</emu-val> from its <var class="field">[[PreventExtensions]]</var> internal method.
          </li>
          <li>
            A <em>non-existent</em> property is a property that does not exist as an own property on a non-extensible target.
          </li>
          <li>
            All references to <em><emu-xref aoid="SameValue" id="_ref_1618"><a href="abstract-operations.html#sec-samevalue">SameValue</a></emu-xref></em> are according to the definition of the <emu-xref aoid="SameValue" id="_ref_1619"><a href="abstract-operations.html#sec-samevalue">SameValue</a></emu-xref> algorithm.
          </li>
        </ul>
        <h2>Return value:</h2>
        <p>The value returned by any internal method must be a <emu-xref href="#sec-completion-record-specification-type" id="_ref_1620"><a href="ecmascript-data-types-and-values.html#sec-completion-record-specification-type">Completion Record</a></emu-xref> with either:</p>
        <ul>
          <li><var class="field">[[Type]]</var> = <emu-const>normal</emu-const>, <var class="field">[[Target]]</var> = <emu-const>empty</emu-const>, and <var class="field">[[Value]]</var> = a value of the "normal return type" shown below for that internal method, or</li>
          <li><var class="field">[[Type]]</var> = <emu-const>throw</emu-const>, <var class="field">[[Target]]</var> = <emu-const>empty</emu-const>, and <var class="field">[[Value]]</var> = any <emu-xref href="#sec-ecmascript-language-types" id="_ref_1621"><a href="ecmascript-data-types-and-values.html#sec-ecmascript-language-types">ECMAScript language value</a></emu-xref>.</li>
        </ul>
        <emu-note><span class="note">Note 1</span><div class="note-contents">
          <p>An internal method must not return a <emu-xref href="#sec-completion-record-specification-type" id="_ref_1622"><a href="ecmascript-data-types-and-values.html#sec-completion-record-specification-type">continue completion</a></emu-xref>, a <emu-xref href="#sec-completion-record-specification-type" id="_ref_1623"><a href="ecmascript-data-types-and-values.html#sec-completion-record-specification-type">break completion</a></emu-xref>, or a <emu-xref href="#sec-completion-record-specification-type" id="_ref_1624"><a href="ecmascript-data-types-and-values.html#sec-completion-record-specification-type">return completion</a></emu-xref>.</p>
        </div></emu-note>
        <h2><var class="field">[[GetPrototypeOf]]</var> ( )</h2>
        <ul>
          <li>
            The normal return type is either Object or Null.
          </li>
          <li>
            If target is non-extensible, and <var class="field">[[GetPrototypeOf]]</var> returns a value <var>V</var>, then any future calls to <var class="field">[[GetPrototypeOf]]</var> should return the <emu-xref aoid="SameValue" id="_ref_1625"><a href="abstract-operations.html#sec-samevalue">SameValue</a></emu-xref> as <var>V</var>.
          </li>
        </ul>
        <emu-note><span class="note">Note 2</span><div class="note-contents">
          <p>An object's prototype chain should have <emu-xref href="#finite" id="_ref_1626"><a href="ecmascript-data-types-and-values.html#finite">finite</a></emu-xref> length (that is, starting from any object, recursively applying the <var class="field">[[GetPrototypeOf]]</var> internal method to its result should eventually lead to the value <emu-val>null</emu-val>). However, this requirement is not enforceable as an object level invariant if the prototype chain includes any <emu-xref href="#exotic-object" id="_ref_1627"><a href="ecmascript-data-types-and-values.html#exotic-object">exotic objects</a></emu-xref> that do not use the <emu-xref href="#ordinary-object" id="_ref_1628"><a href="ecmascript-data-types-and-values.html#ordinary-object">ordinary object</a></emu-xref> definition of <var class="field">[[GetPrototypeOf]]</var>. Such a circular prototype chain may result in infinite loops when accessing object properties.</p>
        </div></emu-note>
        <h2><var class="field">[[SetPrototypeOf]]</var> ( <var>V</var> )</h2>
        <ul>
          <li>
            The normal return type is Boolean.
          </li>
          <li>
            If target is non-extensible, <var class="field">[[SetPrototypeOf]]</var> must return <emu-val>false</emu-val>, unless <var>V</var> is the <emu-xref aoid="SameValue" id="_ref_1629"><a href="abstract-operations.html#sec-samevalue">SameValue</a></emu-xref> as the target's observed <var class="field">[[GetPrototypeOf]]</var> value.
          </li>
        </ul>
        <h2><var class="field">[[IsExtensible]]</var> ( )</h2>
        <ul>
          <li>
            The normal return type is Boolean.
          </li>
          <li>
            If <var class="field">[[IsExtensible]]</var> returns <emu-val>false</emu-val>, all future calls to <var class="field">[[IsExtensible]]</var> on the target must return <emu-val>false</emu-val>.
          </li>
        </ul>
        <h2><var class="field">[[PreventExtensions]]</var> ( )</h2>
        <ul>
          <li>
            The normal return type is Boolean.
          </li>
          <li>
            If <var class="field">[[PreventExtensions]]</var> returns <emu-val>true</emu-val>, all future calls to <var class="field">[[IsExtensible]]</var> on the target must return <emu-val>false</emu-val> and the target is now considered non-extensible.
          </li>
        </ul>
        <h2><var class="field">[[GetOwnProperty]]</var> ( <var>P</var> )</h2>
        <ul>
          <li>
            The normal return type is either <emu-xref href="#sec-property-descriptor-specification-type" id="_ref_1630"><a href="ecmascript-data-types-and-values.html#sec-property-descriptor-specification-type">Property Descriptor</a></emu-xref> or Undefined.
          </li>
          <li>
            If the return value is a <emu-xref href="#sec-property-descriptor-specification-type" id="_ref_1631"><a href="ecmascript-data-types-and-values.html#sec-property-descriptor-specification-type">Property Descriptor</a></emu-xref>, it must be a <emu-xref href="#sec-property-descriptor-specification-type" id="_ref_1632"><a href="ecmascript-data-types-and-values.html#sec-property-descriptor-specification-type">fully populated Property Descriptor</a></emu-xref>.
          </li>
          <li>
            If <var>P</var> is described as a non-configurable, non-writable own <emu-xref href="#sec-object-type" id="_ref_1633"><a href="ecmascript-data-types-and-values.html#sec-object-type">data property</a></emu-xref>, all future calls to <var class="field">[[GetOwnProperty]]</var> ( <var>P</var> ) must return <emu-xref href="#sec-property-descriptor-specification-type" id="_ref_1634"><a href="ecmascript-data-types-and-values.html#sec-property-descriptor-specification-type">Property Descriptor</a></emu-xref> whose <var class="field">[[Value]]</var> is <emu-xref aoid="SameValue" id="_ref_1635"><a href="abstract-operations.html#sec-samevalue">SameValue</a></emu-xref> as <var>P</var>'s <var class="field">[[Value]]</var> attribute.
          </li>
          <li>
            If <var>P</var>'s attributes other than <var class="field">[[Writable]]</var> and <var class="field">[[Value]]</var> may change over time, or if the property might be deleted, then <var>P</var>'s <var class="field">[[Configurable]]</var> attribute must be <emu-val>true</emu-val>.
          </li>
          <li>
            If the <var class="field">[[Writable]]</var> attribute may change from <emu-val>false</emu-val> to <emu-val>true</emu-val>, then the <var class="field">[[Configurable]]</var> attribute must be <emu-val>true</emu-val>.
          </li>
          <li>
            If the target is non-extensible and <var>P</var> is non-existent, then all future calls to <var class="field">[[GetOwnProperty]]</var> (<var>P</var>) on the target must describe <var>P</var> as non-existent (i.e. <var class="field">[[GetOwnProperty]]</var> (<var>P</var>) must return <emu-val>undefined</emu-val>).
          </li>
        </ul>
        <emu-note><span class="note">Note 3</span><div class="note-contents">
          <p>As a consequence of the third invariant, if a property is described as a <emu-xref href="#sec-object-type" id="_ref_1636"><a href="ecmascript-data-types-and-values.html#sec-object-type">data property</a></emu-xref> and it may return different values over time, then either or both of the <var class="field">[[Writable]]</var> and <var class="field">[[Configurable]]</var> attributes must be <emu-val>true</emu-val> even if no mechanism to change the value is exposed via the other essential internal methods.</p>
        </div></emu-note>
        <h2><var class="field">[[DefineOwnProperty]]</var> ( <var>P</var>, <var>Desc</var> )</h2>
        <ul>
          <li>
            The normal return type is Boolean.
          </li>
          <li>
            <var class="field">[[DefineOwnProperty]]</var> must return <emu-val>false</emu-val> if <var>P</var> has previously been observed as a non-configurable own property of the target, unless either:
            <ol>
              <li>
                <var>P</var> is a writable <emu-xref href="#sec-object-type" id="_ref_1637"><a href="ecmascript-data-types-and-values.html#sec-object-type">data property</a></emu-xref>. A non-configurable writable <emu-xref href="#sec-object-type" id="_ref_1638"><a href="ecmascript-data-types-and-values.html#sec-object-type">data property</a></emu-xref> can be changed into a non-configurable non-writable <emu-xref href="#sec-object-type" id="_ref_1639"><a href="ecmascript-data-types-and-values.html#sec-object-type">data property</a></emu-xref>.
              </li>
              <li>
                All attributes of <var>Desc</var> are the <emu-xref aoid="SameValue" id="_ref_1640"><a href="abstract-operations.html#sec-samevalue">SameValue</a></emu-xref> as <var>P</var>'s attributes.
              </li>
            </ol>
          </li>
          <li>
            <var class="field">[[DefineOwnProperty]]</var> (<var>P</var>, <var>Desc</var>) must return <emu-val>false</emu-val> if target is non-extensible and <var>P</var> is a non-existent own property. That is, a non-extensible target object cannot be extended with new properties.
          </li>
        </ul>
        <h2><var class="field">[[HasProperty]]</var> ( <var>P</var> )</h2>
        <ul>
          <li>
            The normal return type is Boolean.
          </li>
          <li>
            If <var>P</var> was previously observed as a non-configurable own data or <emu-xref href="#sec-object-type" id="_ref_1641"><a href="ecmascript-data-types-and-values.html#sec-object-type">accessor property</a></emu-xref> of the target, <var class="field">[[HasProperty]]</var> must return <emu-val>true</emu-val>.
          </li>
        </ul>
        <h2><var class="field">[[Get]]</var> ( <var>P</var>, <var>Receiver</var> )</h2>
        <ul>
          <li>
            The normal return type is any <emu-xref href="#sec-ecmascript-language-types" id="_ref_1642"><a href="ecmascript-data-types-and-values.html#sec-ecmascript-language-types">ECMAScript language type</a></emu-xref>.
          </li>
          <li>
            If <var>P</var> was previously observed as a non-configurable, non-writable own <emu-xref href="#sec-object-type" id="_ref_1643"><a href="ecmascript-data-types-and-values.html#sec-object-type">data property</a></emu-xref> of the target with value <var>V</var>, then <var class="field">[[Get]]</var> must return the <emu-xref aoid="SameValue" id="_ref_1644"><a href="abstract-operations.html#sec-samevalue">SameValue</a></emu-xref> as <var>V</var>.
          </li>
          <li>
            If <var>P</var> was previously observed as a non-configurable own <emu-xref href="#sec-object-type" id="_ref_1645"><a href="ecmascript-data-types-and-values.html#sec-object-type">accessor property</a></emu-xref> of the target whose <var class="field">[[Get]]</var> attribute is <emu-val>undefined</emu-val>, the <var class="field">[[Get]]</var> operation must return <emu-val>undefined</emu-val>.
          </li>
        </ul>
        <h2><var class="field">[[Set]]</var> ( <var>P</var>, <var>V</var>, <var>Receiver</var> )</h2>
        <ul>
          <li>
            The normal return type is Boolean.
          </li>
          <li>
            If <var>P</var> was previously observed as a non-configurable, non-writable own <emu-xref href="#sec-object-type" id="_ref_1646"><a href="ecmascript-data-types-and-values.html#sec-object-type">data property</a></emu-xref> of the target, then <var class="field">[[Set]]</var> must return <emu-val>false</emu-val> unless <var>V</var> is the <emu-xref aoid="SameValue" id="_ref_1647"><a href="abstract-operations.html#sec-samevalue">SameValue</a></emu-xref> as <var>P</var>'s <var class="field">[[Value]]</var> attribute.
          </li>
          <li>
            If <var>P</var> was previously observed as a non-configurable own <emu-xref href="#sec-object-type" id="_ref_1648"><a href="ecmascript-data-types-and-values.html#sec-object-type">accessor property</a></emu-xref> of the target whose <var class="field">[[Set]]</var> attribute is <emu-val>undefined</emu-val>, the <var class="field">[[Set]]</var> operation must return <emu-val>false</emu-val>.
          </li>
        </ul>
        <h2><var class="field">[[Delete]]</var> ( <var>P</var> )</h2>
        <ul>
          <li>
            The normal return type is Boolean.
          </li>
          <li>
            If <var>P</var> was previously observed as a non-configurable own data or <emu-xref href="#sec-object-type" id="_ref_1649"><a href="ecmascript-data-types-and-values.html#sec-object-type">accessor property</a></emu-xref> of the target, <var class="field">[[Delete]]</var> must return <emu-val>false</emu-val>.
          </li>
        </ul>
        <h2><var class="field">[[OwnPropertyKeys]]</var> ( )</h2>
        <ul>
          <li>
            The normal return type is <emu-xref href="#sec-list-and-record-specification-type" id="_ref_1650"><a href="ecmascript-data-types-and-values.html#sec-list-and-record-specification-type">List</a></emu-xref>.
          </li>
          <li>
            The returned <emu-xref href="#sec-list-and-record-specification-type" id="_ref_1651"><a href="ecmascript-data-types-and-values.html#sec-list-and-record-specification-type">List</a></emu-xref> must not contain any duplicate entries.
          </li>
          <li>
            Each element of the returned <emu-xref href="#sec-list-and-record-specification-type" id="_ref_1652"><a href="ecmascript-data-types-and-values.html#sec-list-and-record-specification-type">List</a></emu-xref> must be a <emu-xref href="#property-key" id="_ref_1653"><a href="ecmascript-data-types-and-values.html#property-key">property key</a></emu-xref>.
          </li>
          <li>
            The returned <emu-xref href="#sec-list-and-record-specification-type" id="_ref_1654"><a href="ecmascript-data-types-and-values.html#sec-list-and-record-specification-type">List</a></emu-xref> must contain at least the keys of all non-configurable own properties that have previously been observed.
          </li>
          <li>
            If the target is non-extensible, the returned <emu-xref href="#sec-list-and-record-specification-type" id="_ref_1655"><a href="ecmascript-data-types-and-values.html#sec-list-and-record-specification-type">List</a></emu-xref> must contain only the keys of all own properties of the target that are observable using <var class="field">[[GetOwnProperty]]</var>.
          </li>
        </ul>
        <h2><var class="field">[[Call]]</var> ( )</h2>
        <ul>
          <li>
            The normal return type is any <emu-xref href="#sec-ecmascript-language-types" id="_ref_1656"><a href="ecmascript-data-types-and-values.html#sec-ecmascript-language-types">ECMAScript language type</a></emu-xref>.
          </li>
        </ul>
        <h2><var class="field">[[Construct]]</var> ( )</h2>
        <ul>
          <li>
            The normal return type is Object.
          </li>
          <li>
            The target must also have a <var class="field">[[Call]]</var> internal method.
          </li>
        </ul>
      </emu-clause>
    </emu-clause>
  </emu-clause>
  </div>
</div>