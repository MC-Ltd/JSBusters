<div class="emu-block">
  <div id="spec-container">
  <emu-clause id="sec-fundamental-objects">
  <emu-clause id="sec-object-objects">
  <emu-clause id="sec-properties-of-the-object-constructor">
      <emu-clause id="sec-object.create" type="built-in function">
        <h1><span class="secnum">20.1.2.2</span> Object.create ( <var>O</var>, <var>Properties</var> )</h1>
        <p>This function creates a new object with a specified prototype.</p>
        <p>It performs the following steps when called:</p>
        <emu-alg><ol><li><span aria-hidden="true" class="list-marker">1. </span>If <var>O</var> <emu-xref href="#sec-object-type" id="_ref_9754"><a href="ecmascript-data-types-and-values.html#sec-object-type">is not an Object</a></emu-xref> and <var>O</var> is not <emu-val>null</emu-val>, throw a <emu-val>TypeError</emu-val> exception.</li><li><span aria-hidden="true" class="list-marker">2. </span>Let <var>obj</var> be <emu-xref aoid="OrdinaryObjectCreate" id="_ref_9755"><a href="ordinary-and-exotic-objects-behaviours.html#sec-ordinaryobjectcreate">OrdinaryObjectCreate</a></emu-xref>(<var>O</var>).</li><li><span aria-hidden="true" class="list-marker">3. </span>If <var>Properties</var> is not <emu-val>undefined</emu-val>, then<ol><li><span aria-hidden="true" class="list-marker">   a. </span>Return ?&nbsp;<emu-xref aoid="ObjectDefineProperties" id="_ref_9756"><a href="fundamental-objects.html#sec-objectdefineproperties" class="e-user-code">ObjectDefineProperties</a></emu-xref>(<var>obj</var>, <var>Properties</var>).</li></ol></li><li><span aria-hidden="true" class="list-marker">4. </span>Return <var>obj</var>.</li></ol></emu-alg>
      </emu-clause>
  </emu-clause>
  </emu-clause>
  </emu-clause>
  </div>
</div>