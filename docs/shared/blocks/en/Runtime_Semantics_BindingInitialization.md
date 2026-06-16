<div class="emu-block">
  <div id="spec-container">
  <emu-clause id="sec-syntax-directed-operations">
  <emu-clause id="sec-syntax-directed-operations-miscellaneous">
    <emu-clause id="sec-runtime-semantics-bindinginitialization" oldids="sec-identifiers-runtime-semantics-bindinginitialization,sec-destructuring-binding-patterns-runtime-semantics-bindinginitialization" type="sdo" aoid="BindingInitialization"><span id="sec-destructuring-binding-patterns-runtime-semantics-bindinginitialization"></span><span id="sec-identifiers-runtime-semantics-bindinginitialization"></span>
      <h1><span class="secnum">8.6.2</span> Runtime Semantics: BindingInitialization</h1>
      <p>The <emu-xref href="#sec-algorithm-conventions-syntax-directed-operations" id="_ref_3440"><a href="notational-conventions.html#sec-algorithm-conventions-syntax-directed-operations">syntax-directed operation</a></emu-xref> BindingInitialization takes arguments <var>value</var> (an <emu-xref href="#sec-ecmascript-language-types" id="_ref_3441"><a href="ecmascript-data-types-and-values.html#sec-ecmascript-language-types">ECMAScript language value</a></emu-xref>) and <var>environment</var> (an <emu-xref href="#sec-environment-records" id="_ref_3442"><a href="executable-code-and-execution-contexts.html#sec-environment-records">Environment Record</a></emu-xref> or <emu-val>undefined</emu-val>) and returns either a <emu-xref href="#sec-completion-record-specification-type" id="_ref_3443"><a href="ecmascript-data-types-and-values.html#sec-completion-record-specification-type">normal completion containing</a></emu-xref> <emu-const>unused</emu-const> or an <emu-xref href="#sec-completion-record-specification-type" id="_ref_3444"><a href="ecmascript-data-types-and-values.html#sec-completion-record-specification-type">abrupt completion</a></emu-xref>.</p>
      <emu-note><span class="note">Note</span><div class="note-contents">
        <p><emu-val>undefined</emu-val> is passed for <var>environment</var> to indicate that a <emu-xref aoid="PutValue" id="_ref_3445"><a href="ecmascript-data-types-and-values.html#sec-putvalue">PutValue</a></emu-xref> operation should be used to assign the initialization value. This is the case for <code>var</code> statements and formal parameter lists of some <emu-xref href="#non-strict-function" id="_ref_3446"><a href="ordinary-and-exotic-objects-behaviours.html#non-strict-function">non-strict functions</a></emu-xref> (See <emu-xref href="#sec-functiondeclarationinstantiation" id="_ref_233"><a href="ordinary-and-exotic-objects-behaviours.html#sec-functiondeclarationinstantiation">10.2.11</a></emu-xref>). In those cases a lexical binding is hoisted and preinitialized prior to evaluation of its initializer.</p>
      </div></emu-note>
      <p>It is defined piecewise over the following productions:</p>
      <emu-grammar><emu-production name="BindingIdentifier" collapsed="">
    <emu-nt><a href="ecmascript-language-expressions.html#prod-BindingIdentifier">BindingIdentifier</a></emu-nt> <emu-geq>:</emu-geq> <emu-rhs a="bras6mo_" id="prod-AUuPIcte"><emu-nt id="_ref_19314"><a href="ecmascript-language-expressions.html#prod-Identifier">Identifier</a></emu-nt></emu-rhs>
</emu-production>
</emu-grammar>
      <emu-alg><ol><li><span aria-hidden="true" class="list-marker">1. </span>Let <var>name</var> be the <emu-xref aoid="StringValue" id="_ref_3447"><a href="ecmascript-language-expressions.html#sec-static-semantics-stringvalue">StringValue</a></emu-xref> of <emu-nt id="_ref_19315"><a href="ecmascript-language-expressions.html#prod-Identifier">Identifier</a></emu-nt>.</li><li><span aria-hidden="true" class="list-marker">2. </span>Return ?&nbsp;<emu-xref aoid="InitializeBoundName" id="_ref_3448"><a href="syntax-directed-operations.html#sec-initializeboundname" class="e-user-code">InitializeBoundName</a></emu-xref>(<var>name</var>, <var>value</var>, <var>environment</var>).</li></ol></emu-alg>
      <emu-grammar><emu-production name="BindingIdentifier" collapsed="">
    <emu-nt><a href="ecmascript-language-expressions.html#prod-BindingIdentifier">BindingIdentifier</a></emu-nt> <emu-geq>:</emu-geq> <emu-rhs a="0d8zyjn8" id="prod-mvAZKdLR"><emu-t>yield</emu-t></emu-rhs>
</emu-production>
</emu-grammar>
      <emu-alg><ol><li><span aria-hidden="true" class="list-marker">1. </span>Return ?&nbsp;<emu-xref aoid="InitializeBoundName" id="_ref_3449"><a href="syntax-directed-operations.html#sec-initializeboundname" class="e-user-code">InitializeBoundName</a></emu-xref>(<emu-val>"yield"</emu-val>, <var>value</var>, <var>environment</var>).</li></ol></emu-alg>
      <emu-grammar><emu-production name="BindingIdentifier" collapsed="">
    <emu-nt><a href="ecmascript-language-expressions.html#prod-BindingIdentifier">BindingIdentifier</a></emu-nt> <emu-geq>:</emu-geq> <emu-rhs a="hx1dvlrw" id="prod-SuKbQr-p"><emu-t>await</emu-t></emu-rhs>
</emu-production>
</emu-grammar>
      <emu-alg><ol><li><span aria-hidden="true" class="list-marker">1. </span>Return ?&nbsp;<emu-xref aoid="InitializeBoundName" id="_ref_3450"><a href="syntax-directed-operations.html#sec-initializeboundname" class="e-user-code">InitializeBoundName</a></emu-xref>(<emu-val>"await"</emu-val>, <var>value</var>, <var>environment</var>).</li></ol></emu-alg>
      <emu-grammar><emu-production name="BindingPattern" collapsed="">
    <emu-nt><a href="ecmascript-language-statements-and-declarations.html#prod-BindingPattern">BindingPattern</a></emu-nt> <emu-geq>:</emu-geq> <emu-rhs a="mh3oqyo8" id="prod-D4AQahDE"><emu-nt id="_ref_19316"><a href="ecmascript-language-statements-and-declarations.html#prod-ObjectBindingPattern">ObjectBindingPattern</a></emu-nt></emu-rhs>
</emu-production>
</emu-grammar>
      <emu-alg><ol><li><span aria-hidden="true" class="list-marker">1. </span>Perform ?&nbsp;<emu-xref aoid="RequireObjectCoercible" id="_ref_3451"><a href="abstract-operations.html#sec-requireobjectcoercible">RequireObjectCoercible</a></emu-xref>(<var>value</var>).</li><li><span aria-hidden="true" class="list-marker">2. </span>Return ?&nbsp;<emu-xref aoid="BindingInitialization" id="_ref_3452"><a href="syntax-directed-operations.html#sec-runtime-semantics-bindinginitialization" class="e-user-code">BindingInitialization</a></emu-xref> of <emu-nt id="_ref_19317"><a href="ecmascript-language-statements-and-declarations.html#prod-ObjectBindingPattern">ObjectBindingPattern</a></emu-nt> with arguments <var>value</var> and <var>environment</var>.</li></ol></emu-alg>
      <emu-grammar><emu-production name="BindingPattern" collapsed="">
    <emu-nt><a href="ecmascript-language-statements-and-declarations.html#prod-BindingPattern">BindingPattern</a></emu-nt> <emu-geq>:</emu-geq> <emu-rhs a="xjjvo5sr" id="prod-5QoB3lmK"><emu-nt id="_ref_19318"><a href="ecmascript-language-statements-and-declarations.html#prod-ArrayBindingPattern">ArrayBindingPattern</a></emu-nt></emu-rhs>
</emu-production>
</emu-grammar>
      <emu-alg><ol><li><span aria-hidden="true" class="list-marker">1. </span>Let <var>iteratorRecord</var> be ?&nbsp;<emu-xref aoid="GetIterator" id="_ref_3453"><a href="abstract-operations.html#sec-getiterator" class="e-user-code">GetIterator</a></emu-xref>(<var>value</var>, <emu-const>sync</emu-const>).</li><li><span aria-hidden="true" class="list-marker">2. </span>Let <var>result</var> be <emu-xref aoid="Completion" id="_ref_3454"><a href="notational-conventions.html#sec-completion-ao">Completion</a></emu-xref>(<emu-xref aoid="IteratorBindingInitialization" id="_ref_3455"><a href="syntax-directed-operations.html#sec-runtime-semantics-iteratorbindinginitialization" class="e-user-code">IteratorBindingInitialization</a></emu-xref> of <emu-nt id="_ref_19319"><a href="ecmascript-language-statements-and-declarations.html#prod-ArrayBindingPattern">ArrayBindingPattern</a></emu-nt> with arguments <var>iteratorRecord</var> and <var>environment</var>).</li><li><span aria-hidden="true" class="list-marker">3. </span>If <var>iteratorRecord</var>.<var class="field">[[Done]]</var> is <emu-val>false</emu-val>, return ?&nbsp;<emu-xref aoid="IteratorClose" id="_ref_3456"><a href="abstract-operations.html#sec-iteratorclose" class="e-user-code">IteratorClose</a></emu-xref>(<var>iteratorRecord</var>, <var>result</var>).</li><li><span aria-hidden="true" class="list-marker">4. </span>Return ?&nbsp;<var>result</var>.</li></ol></emu-alg>
      <emu-grammar><emu-production name="ObjectBindingPattern" collapsed="">
    <emu-nt><a href="ecmascript-language-statements-and-declarations.html#prod-ObjectBindingPattern">ObjectBindingPattern</a></emu-nt> <emu-geq>:</emu-geq> <emu-rhs a="gbpaspne" id="prod-lV7YKS21">
        <emu-t>{</emu-t>
        <emu-t>}</emu-t>
    </emu-rhs>
</emu-production>
</emu-grammar>
      <emu-alg><ol><li><span aria-hidden="true" class="list-marker">1. </span>Return <emu-const>unused</emu-const>.</li></ol></emu-alg>
      <emu-grammar><emu-production name="ObjectBindingPattern">
    <emu-nt><a href="ecmascript-language-statements-and-declarations.html#prod-ObjectBindingPattern">ObjectBindingPattern</a></emu-nt> <emu-geq>:</emu-geq> <emu-rhs a="gk43jrsm" id="prod-LZltxEP-">
        <emu-t>{</emu-t>
        <emu-nt id="_ref_19320"><a href="ecmascript-language-statements-and-declarations.html#prod-BindingPropertyList">BindingPropertyList</a></emu-nt>
        <emu-t>}</emu-t>
    </emu-rhs>
    <emu-rhs a="d1upprvx" id="prod--Bap0q1J">
        <emu-t>{</emu-t>
        <emu-nt id="_ref_19321"><a href="ecmascript-language-statements-and-declarations.html#prod-BindingPropertyList">BindingPropertyList</a></emu-nt>
        <emu-t>,</emu-t>
        <emu-t>}</emu-t>
    </emu-rhs>
</emu-production>
</emu-grammar>
      <emu-alg><ol><li><span aria-hidden="true" class="list-marker">1. </span>Perform ?&nbsp;<emu-xref aoid="PropertyBindingInitialization" id="_ref_3457"><a href="ecmascript-language-statements-and-declarations.html#sec-destructuring-binding-patterns-runtime-semantics-propertybindinginitialization" class="e-user-code">PropertyBindingInitialization</a></emu-xref> of <emu-nt id="_ref_19322"><a href="ecmascript-language-statements-and-declarations.html#prod-BindingPropertyList">BindingPropertyList</a></emu-nt> with arguments <var>value</var> and <var>environment</var>.</li><li><span aria-hidden="true" class="list-marker">2. </span>Return <emu-const>unused</emu-const>.</li></ol></emu-alg>
      <emu-grammar><emu-production name="ObjectBindingPattern" collapsed="">
    <emu-nt><a href="ecmascript-language-statements-and-declarations.html#prod-ObjectBindingPattern">ObjectBindingPattern</a></emu-nt> <emu-geq>:</emu-geq> <emu-rhs a="etffxusy" id="prod-PoaYdJZS">
        <emu-t>{</emu-t>
        <emu-nt id="_ref_19323"><a href="ecmascript-language-statements-and-declarations.html#prod-BindingRestProperty">BindingRestProperty</a></emu-nt>
        <emu-t>}</emu-t>
    </emu-rhs>
</emu-production>
</emu-grammar>
      <emu-alg><ol><li><span aria-hidden="true" class="list-marker">1. </span>Let <var>excludedNames</var> be a new empty <emu-xref href="#sec-list-and-record-specification-type" id="_ref_3458"><a href="ecmascript-data-types-and-values.html#sec-list-and-record-specification-type">List</a></emu-xref>.</li><li><span aria-hidden="true" class="list-marker">2. </span>Return ?&nbsp;<emu-xref aoid="RestBindingInitialization" id="_ref_3459"><a href="ecmascript-language-statements-and-declarations.html#sec-destructuring-binding-patterns-runtime-semantics-restbindinginitialization" class="e-user-code">RestBindingInitialization</a></emu-xref> of <emu-nt id="_ref_19324"><a href="ecmascript-language-statements-and-declarations.html#prod-BindingRestProperty">BindingRestProperty</a></emu-nt> with arguments <var>value</var>, <var>environment</var>, and <var>excludedNames</var>.</li></ol></emu-alg>
      <emu-grammar><emu-production name="ObjectBindingPattern" collapsed="">
    <emu-nt><a href="ecmascript-language-statements-and-declarations.html#prod-ObjectBindingPattern">ObjectBindingPattern</a></emu-nt> <emu-geq>:</emu-geq> <emu-rhs a="ullzxsua" id="prod-qC471RM1">
        <emu-t>{</emu-t>
        <emu-nt id="_ref_19325"><a href="ecmascript-language-statements-and-declarations.html#prod-BindingPropertyList">BindingPropertyList</a></emu-nt>
        <emu-t>,</emu-t>
        <emu-nt id="_ref_19326"><a href="ecmascript-language-statements-and-declarations.html#prod-BindingRestProperty">BindingRestProperty</a></emu-nt>
        <emu-t>}</emu-t>
    </emu-rhs>
</emu-production>
</emu-grammar>
      <emu-alg><ol><li><span aria-hidden="true" class="list-marker">1. </span>Let <var>excludedNames</var> be ?&nbsp;<emu-xref aoid="PropertyBindingInitialization" id="_ref_3460"><a href="ecmascript-language-statements-and-declarations.html#sec-destructuring-binding-patterns-runtime-semantics-propertybindinginitialization" class="e-user-code">PropertyBindingInitialization</a></emu-xref> of <emu-nt id="_ref_19327"><a href="ecmascript-language-statements-and-declarations.html#prod-BindingPropertyList">BindingPropertyList</a></emu-nt> with arguments <var>value</var> and <var>environment</var>.</li><li><span aria-hidden="true" class="list-marker">2. </span>Return ?&nbsp;<emu-xref aoid="RestBindingInitialization" id="_ref_3461"><a href="ecmascript-language-statements-and-declarations.html#sec-destructuring-binding-patterns-runtime-semantics-restbindinginitialization" class="e-user-code">RestBindingInitialization</a></emu-xref> of <emu-nt id="_ref_19328"><a href="ecmascript-language-statements-and-declarations.html#prod-BindingRestProperty">BindingRestProperty</a></emu-nt> with arguments <var>value</var>, <var>environment</var>, and <var>excludedNames</var>.</li></ol></emu-alg>
    </emu-clause>
  </emu-clause>
  </emu-clause>
  </div>
</div>