<div class="emu-block">
  <div id="spec-container">
  <emu-clause id="sec-fundamental-objects">
  <emu-clause id="sec-object-objects">
  <emu-clause id="sec-properties-of-the-object-constructor">
      <emu-clause id="sec-object.getownpropertydescriptors" type="built-in function">
        <h1><span class="secnum">20.1.2.9</span> Object.getOwnPropertyDescriptors ( <var>O</var> )</h1>
        <p>This function performs the following steps when called:</p>
        <emu-alg><ol><li><span aria-hidden="true" class="list-marker">1. </span>Let <var>obj</var> be ?&nbsp;<emu-xref aoid="ToObject" id="_ref_9791"><a href="abstract-operations.html#sec-toobject">ToObject</a></emu-xref>(<var>O</var>).</li><li><span aria-hidden="true" class="list-marker">2. </span>Let <var>ownKeys</var> be ?&nbsp;<span class="e-user-code"><var>obj</var>.<var class="field">[[OwnPropertyKeys]]</var>()</span>.</li><li><span aria-hidden="true" class="list-marker">3. </span>Let <var>descriptors</var> be <emu-xref aoid="OrdinaryObjectCreate" id="_ref_9792"><a href="ordinary-and-exotic-objects-behaviours.html#sec-ordinaryobjectcreate">OrdinaryObjectCreate</a></emu-xref>(<emu-xref href="#sec-properties-of-the-object-prototype-object" id="_ref_9793"><a href="fundamental-objects.html#sec-properties-of-the-object-prototype-object">%Object.prototype%</a></emu-xref>).</li><li><span aria-hidden="true" class="list-marker">4. </span>For each element <var>key</var> of <var>ownKeys</var>, do<ol><li><span aria-hidden="true" class="list-marker">   a. </span>Let <var>desc</var> be ?&nbsp;<span class="e-user-code"><var>obj</var>.<var class="field">[[GetOwnProperty]]</var>(<var>key</var>)</span>.</li><li><span aria-hidden="true" class="list-marker">   b. </span>Let <var>descriptor</var> be <emu-xref aoid="FromPropertyDescriptor" id="_ref_9794"><a href="ecmascript-data-types-and-values.html#sec-frompropertydescriptor">FromPropertyDescriptor</a></emu-xref>(<var>desc</var>).</li><li><span aria-hidden="true" class="list-marker">   c. </span>If <var>descriptor</var> is not <emu-val>undefined</emu-val>, perform !&nbsp;<emu-xref aoid="CreateDataPropertyOrThrow" id="_ref_9795"><a href="abstract-operations.html#sec-createdatapropertyorthrow">CreateDataPropertyOrThrow</a></emu-xref>(<var>descriptors</var>, <var>key</var>, <var>descriptor</var>).</li></ol></li><li><span aria-hidden="true" class="list-marker">5. </span>Return <var>descriptors</var>.</li></ol></emu-alg>
      </emu-clause>
  </emu-clause>
  </emu-clause>
  </emu-clause>
  </div>
</div>