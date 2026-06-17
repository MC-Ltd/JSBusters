<div class="emu-block">
  <div id="spec-container">
  <emu-clause id="sec-fundamental-objects">
  <emu-clause id="sec-object-objects">
  <emu-clause id="sec-properties-of-the-object-constructor">
      <emu-clause id="sec-object.freeze" type="built-in function">
        <h1><span class="secnum">20.1.2.6</span> Object.freeze ( <var>O</var> )</h1>
        <p>This function performs the following steps when called:</p>
        <emu-alg><ol><li><span aria-hidden="true" class="list-marker">1. </span>If <var>O</var> <emu-xref href="#sec-object-type" id="_ref_9775"><a href="ecmascript-data-types-and-values.html#sec-object-type">is not an Object</a></emu-xref>, return <var>O</var>.</li><li><span aria-hidden="true" class="list-marker">2. </span>Let <var>status</var> be ?&nbsp;<emu-xref aoid="SetIntegrityLevel" id="_ref_9776"><a href="abstract-operations.html#sec-setintegritylevel" class="e-user-code">SetIntegrityLevel</a></emu-xref>(<var>O</var>, <emu-const>frozen</emu-const>).</li><li><span aria-hidden="true" class="list-marker">3. </span>If <var>status</var> is <emu-val>false</emu-val>, throw a <emu-val>TypeError</emu-val> exception.</li><li><span aria-hidden="true" class="list-marker">4. </span>Return <var>O</var>.</li></ol></emu-alg>
      </emu-clause>
  </emu-clause>
  </emu-clause>
  </emu-clause>
  </div>
</div>