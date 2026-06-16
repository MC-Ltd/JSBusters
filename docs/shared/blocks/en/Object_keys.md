<div class="emu-block">
  <div id="spec-container">
  <emu-clause id="sec-fundamental-objects">
  <emu-clause id="sec-object-objects">
  <emu-clause id="sec-properties-of-the-object-constructor">
      <emu-clause id="sec-object.keys" type="built-in function">
        <h1><span class="secnum">20.1.2.19</span> Object.keys ( <var>O</var> )</h1>
        <p>This function performs the following steps when called:</p>
        <emu-alg><ol><li><span aria-hidden="true" class="list-marker">1. </span>Let <var>obj</var> be ?&nbsp;<emu-xref aoid="ToObject" id="_ref_9829"><a href="abstract-operations.html#sec-toobject">ToObject</a></emu-xref>(<var>O</var>).</li><li><span aria-hidden="true" class="list-marker">2. </span>Let <var>keyList</var> be ?&nbsp;<emu-xref aoid="EnumerableOwnProperties" id="_ref_9830"><a href="abstract-operations.html#sec-enumerableownproperties" class="e-user-code">EnumerableOwnProperties</a></emu-xref>(<var>obj</var>, <emu-const>key</emu-const>).</li><li><span aria-hidden="true" class="list-marker">3. </span>Return <emu-xref aoid="CreateArrayFromList" id="_ref_9831"><a href="abstract-operations.html#sec-createarrayfromlist">CreateArrayFromList</a></emu-xref>(<var>keyList</var>).</li></ol></emu-alg>
      </emu-clause>
  </emu-clause>
  </emu-clause>
  </emu-clause>
  </div>
</div>