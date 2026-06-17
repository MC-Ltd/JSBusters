<div class="emu-block">
  <div id="spec-container">
  <emu-clause id="sec-ecmascript-language-statements-and-declarations">
  <emu-clause id="sec-iteration-statements">
  <emu-clause id="sec-for-in-and-for-of-statements">
      <emu-clause id="sec-runtime-semantics-forinofloopevaluation" oldids="sec-for-in-and-for-of-statements-runtime-semantics-labelledevaluation" type="sdo" aoid="ForInOfLoopEvaluation"><span id="sec-for-in-and-for-of-statements-runtime-semantics-labelledevaluation"></span>
        <h1><span class="secnum">14.7.5.5</span> Runtime Semantics: ForInOfLoopEvaluation</h1>
        <p>The <emu-xref href="#sec-algorithm-conventions-syntax-directed-operations" id="_ref_7212"><a href="notational-conventions.html#sec-algorithm-conventions-syntax-directed-operations">syntax-directed operation</a></emu-xref> ForInOfLoopEvaluation takes argument <var>labelSet</var> (a <emu-xref href="#sec-list-and-record-specification-type" id="_ref_7213"><a href="ecmascript-data-types-and-values.html#sec-list-and-record-specification-type">List</a></emu-xref> of Strings) and returns either a <emu-xref href="#sec-completion-record-specification-type" id="_ref_7214"><a href="ecmascript-data-types-and-values.html#sec-completion-record-specification-type">normal completion containing</a></emu-xref> an <emu-xref href="#sec-ecmascript-language-types" id="_ref_7215"><a href="ecmascript-data-types-and-values.html#sec-ecmascript-language-types">ECMAScript language value</a></emu-xref> or an <emu-xref href="#sec-completion-record-specification-type" id="_ref_7216"><a href="ecmascript-data-types-and-values.html#sec-completion-record-specification-type">abrupt completion</a></emu-xref>. It is defined piecewise over the following productions:</p>
        <emu-grammar><emu-production name="ForInOfStatement" collapsed="">
    <emu-nt><a href="ecmascript-language-statements-and-declarations.html#prod-ForInOfStatement">ForInOfStatement</a></emu-nt> <emu-geq>:</emu-geq> <emu-rhs a="v1ibcd1w" id="prod-dhS3iRZF">
        <emu-t>for</emu-t>
        <emu-t>(</emu-t>
        <emu-nt id="_ref_21979"><a href="ecmascript-language-expressions.html#prod-LeftHandSideExpression">LeftHandSideExpression</a></emu-nt>
        <emu-t>in</emu-t>
        <emu-nt id="_ref_21980"><a href="ecmascript-language-expressions.html#prod-Expression">Expression</a></emu-nt>
        <emu-t>)</emu-t>
        <emu-nt id="_ref_21981"><a href="ecmascript-language-statements-and-declarations.html#prod-Statement">Statement</a></emu-nt>
    </emu-rhs>
</emu-production>
</emu-grammar>
        <emu-alg><ol><li><span aria-hidden="true" class="list-marker">1. </span>Let <var>keyResult</var> be ?&nbsp;<emu-xref aoid="ForIn/OfHeadEvaluation" id="_ref_7217"><a href="ecmascript-language-statements-and-declarations.html#sec-runtime-semantics-forinofheadevaluation" class="e-user-code">ForIn/OfHeadEvaluation</a></emu-xref>(«&nbsp;», <emu-nt id="_ref_21982"><a href="ecmascript-language-expressions.html#prod-Expression">Expression</a></emu-nt>, <emu-const>enumerate</emu-const>).</li><li><span aria-hidden="true" class="list-marker">2. </span>Return ?&nbsp;<emu-xref aoid="ForIn/OfBodyEvaluation" id="_ref_7218"><a href="ecmascript-language-statements-and-declarations.html#sec-runtime-semantics-forin-div-ofbodyevaluation-lhs-stmt-iterator-lhskind-labelset" class="e-user-code">ForIn/OfBodyEvaluation</a></emu-xref>(<emu-nt id="_ref_21983"><a href="ecmascript-language-expressions.html#prod-LeftHandSideExpression">LeftHandSideExpression</a></emu-nt>, <emu-nt id="_ref_21984"><a href="ecmascript-language-statements-and-declarations.html#prod-Statement">Statement</a></emu-nt>, <var>keyResult</var>, <emu-const>enumerate</emu-const>, <emu-const>assignment</emu-const>, <var>labelSet</var>).</li></ol></emu-alg>
        <emu-grammar><emu-production name="ForInOfStatement" collapsed="">
    <emu-nt><a href="ecmascript-language-statements-and-declarations.html#prod-ForInOfStatement">ForInOfStatement</a></emu-nt> <emu-geq>:</emu-geq> <emu-rhs a="7pgjrcn-" id="prod-A6rVBZNm">
        <emu-t>for</emu-t>
        <emu-t>(</emu-t>
        <emu-t>var</emu-t>
        <emu-nt id="_ref_21985"><a href="ecmascript-language-statements-and-declarations.html#prod-ForBinding">ForBinding</a></emu-nt>
        <emu-t>in</emu-t>
        <emu-nt id="_ref_21986"><a href="ecmascript-language-expressions.html#prod-Expression">Expression</a></emu-nt>
        <emu-t>)</emu-t>
        <emu-nt id="_ref_21987"><a href="ecmascript-language-statements-and-declarations.html#prod-Statement">Statement</a></emu-nt>
    </emu-rhs>
</emu-production>
</emu-grammar>
        <emu-alg><ol><li><span aria-hidden="true" class="list-marker">1. </span>Let <var>keyResult</var> be ?&nbsp;<emu-xref aoid="ForIn/OfHeadEvaluation" id="_ref_7219"><a href="ecmascript-language-statements-and-declarations.html#sec-runtime-semantics-forinofheadevaluation" class="e-user-code">ForIn/OfHeadEvaluation</a></emu-xref>(«&nbsp;», <emu-nt id="_ref_21988"><a href="ecmascript-language-expressions.html#prod-Expression">Expression</a></emu-nt>, <emu-const>enumerate</emu-const>).</li><li><span aria-hidden="true" class="list-marker">2. </span>Return ?&nbsp;<emu-xref aoid="ForIn/OfBodyEvaluation" id="_ref_7220"><a href="ecmascript-language-statements-and-declarations.html#sec-runtime-semantics-forin-div-ofbodyevaluation-lhs-stmt-iterator-lhskind-labelset" class="e-user-code">ForIn/OfBodyEvaluation</a></emu-xref>(<emu-nt id="_ref_21989"><a href="ecmascript-language-statements-and-declarations.html#prod-ForBinding">ForBinding</a></emu-nt>, <emu-nt id="_ref_21990"><a href="ecmascript-language-statements-and-declarations.html#prod-Statement">Statement</a></emu-nt>, <var>keyResult</var>, <emu-const>enumerate</emu-const>, <emu-const>var-binding</emu-const>, <var>labelSet</var>).</li></ol></emu-alg>
        <emu-grammar><emu-production name="ForInOfStatement" collapsed="">
    <emu-nt><a href="ecmascript-language-statements-and-declarations.html#prod-ForInOfStatement">ForInOfStatement</a></emu-nt> <emu-geq>:</emu-geq> <emu-rhs a="jzctgxkp" id="prod-zcGoySgU">
        <emu-t>for</emu-t>
        <emu-t>(</emu-t>
        <emu-nt id="_ref_21991"><a href="ecmascript-language-statements-and-declarations.html#prod-ForDeclaration">ForDeclaration</a></emu-nt>
        <emu-t>in</emu-t>
        <emu-nt id="_ref_21992"><a href="ecmascript-language-expressions.html#prod-Expression">Expression</a></emu-nt>
        <emu-t>)</emu-t>
        <emu-nt id="_ref_21993"><a href="ecmascript-language-statements-and-declarations.html#prod-Statement">Statement</a></emu-nt>
    </emu-rhs>
</emu-production>
</emu-grammar>
        <emu-alg><ol><li><span aria-hidden="true" class="list-marker">1. </span>Let <var>keyResult</var> be ?&nbsp;<emu-xref aoid="ForIn/OfHeadEvaluation" id="_ref_7221"><a href="ecmascript-language-statements-and-declarations.html#sec-runtime-semantics-forinofheadevaluation" class="e-user-code">ForIn/OfHeadEvaluation</a></emu-xref>(<emu-xref aoid="BoundNames" id="_ref_7222"><a href="syntax-directed-operations.html#sec-static-semantics-boundnames">BoundNames</a></emu-xref> of <emu-nt id="_ref_21994"><a href="ecmascript-language-statements-and-declarations.html#prod-ForDeclaration">ForDeclaration</a></emu-nt>, <emu-nt id="_ref_21995"><a href="ecmascript-language-expressions.html#prod-Expression">Expression</a></emu-nt>, <emu-const>enumerate</emu-const>).</li><li><span aria-hidden="true" class="list-marker">2. </span>Return ?&nbsp;<emu-xref aoid="ForIn/OfBodyEvaluation" id="_ref_7223"><a href="ecmascript-language-statements-and-declarations.html#sec-runtime-semantics-forin-div-ofbodyevaluation-lhs-stmt-iterator-lhskind-labelset" class="e-user-code">ForIn/OfBodyEvaluation</a></emu-xref>(<emu-nt id="_ref_21996"><a href="ecmascript-language-statements-and-declarations.html#prod-ForDeclaration">ForDeclaration</a></emu-nt>, <emu-nt id="_ref_21997"><a href="ecmascript-language-statements-and-declarations.html#prod-Statement">Statement</a></emu-nt>, <var>keyResult</var>, <emu-const>enumerate</emu-const>, <emu-const>lexical-binding</emu-const>, <var>labelSet</var>).</li></ol></emu-alg>
        <emu-grammar><emu-production name="ForInOfStatement" collapsed="">
    <emu-nt><a href="ecmascript-language-statements-and-declarations.html#prod-ForInOfStatement">ForInOfStatement</a></emu-nt> <emu-geq>:</emu-geq> <emu-rhs a="jqzgi_en" id="prod-xXfkt6k0">
        <emu-t>for</emu-t>
        <emu-t>(</emu-t>
        <emu-nt id="_ref_21998"><a href="ecmascript-language-expressions.html#prod-LeftHandSideExpression">LeftHandSideExpression</a></emu-nt>
        <emu-t>of</emu-t>
        <emu-nt id="_ref_21999"><a href="ecmascript-language-expressions.html#prod-AssignmentExpression">AssignmentExpression</a></emu-nt>
        <emu-t>)</emu-t>
        <emu-nt id="_ref_22000"><a href="ecmascript-language-statements-and-declarations.html#prod-Statement">Statement</a></emu-nt>
    </emu-rhs>
</emu-production>
</emu-grammar>
        <emu-alg><ol><li><span aria-hidden="true" class="list-marker">1. </span>Let <var>keyResult</var> be ?&nbsp;<emu-xref aoid="ForIn/OfHeadEvaluation" id="_ref_7224"><a href="ecmascript-language-statements-and-declarations.html#sec-runtime-semantics-forinofheadevaluation" class="e-user-code">ForIn/OfHeadEvaluation</a></emu-xref>(«&nbsp;», <emu-nt id="_ref_22001"><a href="ecmascript-language-expressions.html#prod-AssignmentExpression">AssignmentExpression</a></emu-nt>, <emu-const>iterate</emu-const>).</li><li><span aria-hidden="true" class="list-marker">2. </span>Return ?&nbsp;<emu-xref aoid="ForIn/OfBodyEvaluation" id="_ref_7225"><a href="ecmascript-language-statements-and-declarations.html#sec-runtime-semantics-forin-div-ofbodyevaluation-lhs-stmt-iterator-lhskind-labelset" class="e-user-code">ForIn/OfBodyEvaluation</a></emu-xref>(<emu-nt id="_ref_22002"><a href="ecmascript-language-expressions.html#prod-LeftHandSideExpression">LeftHandSideExpression</a></emu-nt>, <emu-nt id="_ref_22003"><a href="ecmascript-language-statements-and-declarations.html#prod-Statement">Statement</a></emu-nt>, <var>keyResult</var>, <emu-const>iterate</emu-const>, <emu-const>assignment</emu-const>, <var>labelSet</var>).</li></ol></emu-alg>
        <emu-grammar><emu-production name="ForInOfStatement" collapsed="">
    <emu-nt><a href="ecmascript-language-statements-and-declarations.html#prod-ForInOfStatement">ForInOfStatement</a></emu-nt> <emu-geq>:</emu-geq> <emu-rhs a="7m-adytu" id="prod-pPrWP7Ph">
        <emu-t>for</emu-t>
        <emu-t>(</emu-t>
        <emu-t>var</emu-t>
        <emu-nt id="_ref_22004"><a href="ecmascript-language-statements-and-declarations.html#prod-ForBinding">ForBinding</a></emu-nt>
        <emu-t>of</emu-t>
        <emu-nt id="_ref_22005"><a href="ecmascript-language-expressions.html#prod-AssignmentExpression">AssignmentExpression</a></emu-nt>
        <emu-t>)</emu-t>
        <emu-nt id="_ref_22006"><a href="ecmascript-language-statements-and-declarations.html#prod-Statement">Statement</a></emu-nt>
    </emu-rhs>
</emu-production>
</emu-grammar>
        <emu-alg><ol><li><span aria-hidden="true" class="list-marker">1. </span>Let <var>keyResult</var> be ?&nbsp;<emu-xref aoid="ForIn/OfHeadEvaluation" id="_ref_7226"><a href="ecmascript-language-statements-and-declarations.html#sec-runtime-semantics-forinofheadevaluation" class="e-user-code">ForIn/OfHeadEvaluation</a></emu-xref>(«&nbsp;», <emu-nt id="_ref_22007"><a href="ecmascript-language-expressions.html#prod-AssignmentExpression">AssignmentExpression</a></emu-nt>, <emu-const>iterate</emu-const>).</li><li><span aria-hidden="true" class="list-marker">2. </span>Return ?&nbsp;<emu-xref aoid="ForIn/OfBodyEvaluation" id="_ref_7227"><a href="ecmascript-language-statements-and-declarations.html#sec-runtime-semantics-forin-div-ofbodyevaluation-lhs-stmt-iterator-lhskind-labelset" class="e-user-code">ForIn/OfBodyEvaluation</a></emu-xref>(<emu-nt id="_ref_22008"><a href="ecmascript-language-statements-and-declarations.html#prod-ForBinding">ForBinding</a></emu-nt>, <emu-nt id="_ref_22009"><a href="ecmascript-language-statements-and-declarations.html#prod-Statement">Statement</a></emu-nt>, <var>keyResult</var>, <emu-const>iterate</emu-const>, <emu-const>var-binding</emu-const>, <var>labelSet</var>).</li></ol></emu-alg>
        <emu-grammar><emu-production name="ForInOfStatement" collapsed="">
    <emu-nt><a href="ecmascript-language-statements-and-declarations.html#prod-ForInOfStatement">ForInOfStatement</a></emu-nt> <emu-geq>:</emu-geq> <emu-rhs a="b3wzboyu" id="prod-OIo-GNlm">
        <emu-t>for</emu-t>
        <emu-t>(</emu-t>
        <emu-nt id="_ref_22010"><a href="ecmascript-language-statements-and-declarations.html#prod-ForDeclaration">ForDeclaration</a></emu-nt>
        <emu-t>of</emu-t>
        <emu-nt id="_ref_22011"><a href="ecmascript-language-expressions.html#prod-AssignmentExpression">AssignmentExpression</a></emu-nt>
        <emu-t>)</emu-t>
        <emu-nt id="_ref_22012"><a href="ecmascript-language-statements-and-declarations.html#prod-Statement">Statement</a></emu-nt>
    </emu-rhs>
</emu-production>
</emu-grammar>
        <emu-alg><ol><li><span aria-hidden="true" class="list-marker">1. </span>Let <var>keyResult</var> be ?&nbsp;<emu-xref aoid="ForIn/OfHeadEvaluation" id="_ref_7228"><a href="ecmascript-language-statements-and-declarations.html#sec-runtime-semantics-forinofheadevaluation" class="e-user-code">ForIn/OfHeadEvaluation</a></emu-xref>(<emu-xref aoid="BoundNames" id="_ref_7229"><a href="syntax-directed-operations.html#sec-static-semantics-boundnames">BoundNames</a></emu-xref> of <emu-nt id="_ref_22013"><a href="ecmascript-language-statements-and-declarations.html#prod-ForDeclaration">ForDeclaration</a></emu-nt>, <emu-nt id="_ref_22014"><a href="ecmascript-language-expressions.html#prod-AssignmentExpression">AssignmentExpression</a></emu-nt>, <emu-const>iterate</emu-const>).</li><li><span aria-hidden="true" class="list-marker">2. </span>Return ?&nbsp;<emu-xref aoid="ForIn/OfBodyEvaluation" id="_ref_7230"><a href="ecmascript-language-statements-and-declarations.html#sec-runtime-semantics-forin-div-ofbodyevaluation-lhs-stmt-iterator-lhskind-labelset" class="e-user-code">ForIn/OfBodyEvaluation</a></emu-xref>(<emu-nt id="_ref_22015"><a href="ecmascript-language-statements-and-declarations.html#prod-ForDeclaration">ForDeclaration</a></emu-nt>, <emu-nt id="_ref_22016"><a href="ecmascript-language-statements-and-declarations.html#prod-Statement">Statement</a></emu-nt>, <var>keyResult</var>, <emu-const>iterate</emu-const>, <emu-const>lexical-binding</emu-const>, <var>labelSet</var>).</li></ol></emu-alg>
        <emu-grammar><emu-production name="ForInOfStatement" collapsed="">
    <emu-nt><a href="ecmascript-language-statements-and-declarations.html#prod-ForInOfStatement">ForInOfStatement</a></emu-nt> <emu-geq>:</emu-geq> <emu-rhs a="mhrux1r7" id="prod-Z4scLosS">
        <emu-t>for</emu-t>
        <emu-t>await</emu-t>
        <emu-t>(</emu-t>
        <emu-nt id="_ref_22017"><a href="ecmascript-language-expressions.html#prod-LeftHandSideExpression">LeftHandSideExpression</a></emu-nt>
        <emu-t>of</emu-t>
        <emu-nt id="_ref_22018"><a href="ecmascript-language-expressions.html#prod-AssignmentExpression">AssignmentExpression</a></emu-nt>
        <emu-t>)</emu-t>
        <emu-nt id="_ref_22019"><a href="ecmascript-language-statements-and-declarations.html#prod-Statement">Statement</a></emu-nt>
    </emu-rhs>
</emu-production>
</emu-grammar>
        <emu-alg><ol><li><span aria-hidden="true" class="list-marker">1. </span>Let <var>keyResult</var> be ?&nbsp;<emu-xref aoid="ForIn/OfHeadEvaluation" id="_ref_7231"><a href="ecmascript-language-statements-and-declarations.html#sec-runtime-semantics-forinofheadevaluation" class="e-user-code">ForIn/OfHeadEvaluation</a></emu-xref>(«&nbsp;», <emu-nt id="_ref_22020"><a href="ecmascript-language-expressions.html#prod-AssignmentExpression">AssignmentExpression</a></emu-nt>, <emu-const>async-iterate</emu-const>).</li><li><span aria-hidden="true" class="list-marker">2. </span>Return ?&nbsp;<emu-xref aoid="ForIn/OfBodyEvaluation" id="_ref_7232"><a href="ecmascript-language-statements-and-declarations.html#sec-runtime-semantics-forin-div-ofbodyevaluation-lhs-stmt-iterator-lhskind-labelset" class="e-user-code">ForIn/OfBodyEvaluation</a></emu-xref>(<emu-nt id="_ref_22021"><a href="ecmascript-language-expressions.html#prod-LeftHandSideExpression">LeftHandSideExpression</a></emu-nt>, <emu-nt id="_ref_22022"><a href="ecmascript-language-statements-and-declarations.html#prod-Statement">Statement</a></emu-nt>, <var>keyResult</var>, <emu-const>iterate</emu-const>, <emu-const>assignment</emu-const>, <var>labelSet</var>, <emu-const>async</emu-const>).</li></ol></emu-alg>
        <emu-grammar><emu-production name="ForInOfStatement" collapsed="">
    <emu-nt><a href="ecmascript-language-statements-and-declarations.html#prod-ForInOfStatement">ForInOfStatement</a></emu-nt> <emu-geq>:</emu-geq> <emu-rhs a="cyt_lv_1" id="prod-5PDN6AV3">
        <emu-t>for</emu-t>
        <emu-t>await</emu-t>
        <emu-t>(</emu-t>
        <emu-t>var</emu-t>
        <emu-nt id="_ref_22023"><a href="ecmascript-language-statements-and-declarations.html#prod-ForBinding">ForBinding</a></emu-nt>
        <emu-t>of</emu-t>
        <emu-nt id="_ref_22024"><a href="ecmascript-language-expressions.html#prod-AssignmentExpression">AssignmentExpression</a></emu-nt>
        <emu-t>)</emu-t>
        <emu-nt id="_ref_22025"><a href="ecmascript-language-statements-and-declarations.html#prod-Statement">Statement</a></emu-nt>
    </emu-rhs>
</emu-production>
</emu-grammar>
        <emu-alg><ol><li><span aria-hidden="true" class="list-marker">1. </span>Let <var>keyResult</var> be ?&nbsp;<emu-xref aoid="ForIn/OfHeadEvaluation" id="_ref_7233"><a href="ecmascript-language-statements-and-declarations.html#sec-runtime-semantics-forinofheadevaluation" class="e-user-code">ForIn/OfHeadEvaluation</a></emu-xref>(«&nbsp;», <emu-nt id="_ref_22026"><a href="ecmascript-language-expressions.html#prod-AssignmentExpression">AssignmentExpression</a></emu-nt>, <emu-const>async-iterate</emu-const>).</li><li><span aria-hidden="true" class="list-marker">2. </span>Return ?&nbsp;<emu-xref aoid="ForIn/OfBodyEvaluation" id="_ref_7234"><a href="ecmascript-language-statements-and-declarations.html#sec-runtime-semantics-forin-div-ofbodyevaluation-lhs-stmt-iterator-lhskind-labelset" class="e-user-code">ForIn/OfBodyEvaluation</a></emu-xref>(<emu-nt id="_ref_22027"><a href="ecmascript-language-statements-and-declarations.html#prod-ForBinding">ForBinding</a></emu-nt>, <emu-nt id="_ref_22028"><a href="ecmascript-language-statements-and-declarations.html#prod-Statement">Statement</a></emu-nt>, <var>keyResult</var>, <emu-const>iterate</emu-const>, <emu-const>var-binding</emu-const>, <var>labelSet</var>, <emu-const>async</emu-const>).</li></ol></emu-alg>
        <emu-grammar><emu-production name="ForInOfStatement" collapsed="">
    <emu-nt><a href="ecmascript-language-statements-and-declarations.html#prod-ForInOfStatement">ForInOfStatement</a></emu-nt> <emu-geq>:</emu-geq> <emu-rhs a="uatmda3j" id="prod-KdWnMB6i">
        <emu-t>for</emu-t>
        <emu-t>await</emu-t>
        <emu-t>(</emu-t>
        <emu-nt id="_ref_22029"><a href="ecmascript-language-statements-and-declarations.html#prod-ForDeclaration">ForDeclaration</a></emu-nt>
        <emu-t>of</emu-t>
        <emu-nt id="_ref_22030"><a href="ecmascript-language-expressions.html#prod-AssignmentExpression">AssignmentExpression</a></emu-nt>
        <emu-t>)</emu-t>
        <emu-nt id="_ref_22031"><a href="ecmascript-language-statements-and-declarations.html#prod-Statement">Statement</a></emu-nt>
    </emu-rhs>
</emu-production>
</emu-grammar>
        <emu-alg><ol><li><span aria-hidden="true" class="list-marker">1. </span>Let <var>keyResult</var> be ?&nbsp;<emu-xref aoid="ForIn/OfHeadEvaluation" id="_ref_7235"><a href="ecmascript-language-statements-and-declarations.html#sec-runtime-semantics-forinofheadevaluation" class="e-user-code">ForIn/OfHeadEvaluation</a></emu-xref>(<emu-xref aoid="BoundNames" id="_ref_7236"><a href="syntax-directed-operations.html#sec-static-semantics-boundnames">BoundNames</a></emu-xref> of <emu-nt id="_ref_22032"><a href="ecmascript-language-statements-and-declarations.html#prod-ForDeclaration">ForDeclaration</a></emu-nt>, <emu-nt id="_ref_22033"><a href="ecmascript-language-expressions.html#prod-AssignmentExpression">AssignmentExpression</a></emu-nt>, <emu-const>async-iterate</emu-const>).</li><li><span aria-hidden="true" class="list-marker">2. </span>Return ?&nbsp;<emu-xref aoid="ForIn/OfBodyEvaluation" id="_ref_7237"><a href="ecmascript-language-statements-and-declarations.html#sec-runtime-semantics-forin-div-ofbodyevaluation-lhs-stmt-iterator-lhskind-labelset" class="e-user-code">ForIn/OfBodyEvaluation</a></emu-xref>(<emu-nt id="_ref_22034"><a href="ecmascript-language-statements-and-declarations.html#prod-ForDeclaration">ForDeclaration</a></emu-nt>, <emu-nt id="_ref_22035"><a href="ecmascript-language-statements-and-declarations.html#prod-Statement">Statement</a></emu-nt>, <var>keyResult</var>, <emu-const>iterate</emu-const>, <emu-const>lexical-binding</emu-const>, <var>labelSet</var>, <emu-const>async</emu-const>).</li></ol></emu-alg>
        <emu-note><span class="note">Note</span><div class="note-contents">
          <p>This section is extended by Annex <emu-xref href="#sec-initializers-in-forin-statement-heads" id="_ref_453"><a href="additional-ecmascript-features-for-web-browsers.html#sec-initializers-in-forin-statement-heads">B.3.5</a></emu-xref>.</p>
        </div></emu-note>
      </emu-clause>
  </emu-clause>
  </emu-clause>
  </emu-clause>
  </div>
</div>