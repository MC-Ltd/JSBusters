<div class="emu-block">
  <div id="spec-container">
  <emu-clause id="sec-fundamental-objects">
  <emu-clause id="sec-object-objects">
  <emu-clause id="sec-properties-of-the-object-constructor">
      <emu-clause id="sec-object.issealed" type="built-in function">
        <h1><span class="secnum">20.1.2.18</span> Object.isSealed ( <var>O</var> )</h1>
        <p>This function performs the following steps when called:</p>
        <emu-alg><ol><li><span aria-hidden="true" class="list-marker">1. </span>If <var>O</var> <emu-xref href="#sec-object-type" id="_ref_9827"><a href="ecmascript-data-types-and-values.html#sec-object-type">is not an Object</a></emu-xref>, return <emu-val>true</emu-val>.</li><li><span aria-hidden="true" class="list-marker">2. </span>Return ?&nbsp;<emu-xref aoid="TestIntegrityLevel" id="_ref_9828"><a href="abstract-operations.html#sec-testintegritylevel" class="e-user-code">TestIntegrityLevel</a></emu-xref>(<var>O</var>, <emu-const>sealed</emu-const>).</li></ol></emu-alg>
      </emu-clause>
  </emu-clause>
  </emu-clause>
  </emu-clause>
  </div>
</div>