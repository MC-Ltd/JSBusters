<div class="emu-block">
  <div id="spec-container">
  <emu-clause id="sec-reflection">
  <emu-clause id="sec-reflect-object">
    <emu-clause id="sec-reflect.ownkeys" type="built-in function">
      <h1><span class="secnum">28.1.10</span> Reflect.ownKeys ( <var>target</var> )</h1>
      <p>This function performs the following steps when called:</p>
      <emu-alg><ol><li><span aria-hidden="true" class="list-marker">1. </span>If <var>target</var> <emu-xref href="#sec-object-type" id="_ref_16989"><a href="ecmascript-data-types-and-values.html#sec-object-type">is not an Object</a></emu-xref>, throw a <emu-val>TypeError</emu-val> exception.</li><li><span aria-hidden="true" class="list-marker">2. </span>Let <var>keys</var> be ?&nbsp;<span class="e-user-code"><var>target</var>.<var class="field">[[OwnPropertyKeys]]</var>()</span>.</li><li><span aria-hidden="true" class="list-marker">3. </span>Return <emu-xref aoid="CreateArrayFromList" id="_ref_16990"><a href="abstract-operations.html#sec-createarrayfromlist">CreateArrayFromList</a></emu-xref>(<var>keys</var>).</li></ol></emu-alg>
    </emu-clause>
  </emu-clause>
  </emu-clause>
  </div>
</div>