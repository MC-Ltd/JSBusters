<div class="emu-block">
  <div id="spec-container">
  <emu-clause id="sec-fundamental-objects">
  <emu-clause id="sec-object-objects">
  <emu-clause id="sec-properties-of-the-object-constructor">
      <emu-clause id="sec-object.getownpropertydescriptors" type="built-in function">
        <h1><span class="secnum">20.1.2.9</span> Object.getOwnPropertyDescriptors ( <var>O</var> )</h1>
        <p>Ця функція виконує такі кроки під час виклику:</p>
        <emu-alg><ol><li><span aria-hidden="true" class="list-marker">1. </span>Нехай <var>obj</var> буде ?&nbsp;<emu-xref aoid="ToObject" id="_ref_9791"><a href="abstract-operations.html#sec-toobject">ToObject</a></emu-xref>(<var>O</var>).</li><li><span aria-hidden="true" class="list-marker">2. </span>Нехай <var>ownKeys</var> буде ?&nbsp;<span class="e-user-code"><var>obj</var>.<var class="field">[[OwnPropertyKeys]]</var>()</span>.</li><li><span aria-hidden="true" class="list-marker">3. </span>Нехай <var>descriptors</var> буде <emu-xref aoid="OrdinaryObjectCreate" id="_ref_9792"><a href="ordinary-та-exotic-objects-behaviours.html#sec-ordinaryobjectcreate">OrdinaryObjectCreate</a></emu-xref>(<emu-xref href="#sec-properties-of-the-object-prototype-object" id="_ref_9793"><a href="fundamental-objects.html#sec-properties-of-the-object-prototype-object">%Object.prototype%</a></emu-xref>).</li><li><span aria-hidden="true" class="list-marker">4. </span>Для кожного елементу <var>key</var> з <var>ownKeys</var>, робить<ol><li><span aria-hidden="true" class="list-marker">   a. </span>Нехай <var>desc</var> буде ?&nbsp;<span class="e-user-code"><var>obj</var>.<var class="field">[[GetOwnProperty]]</var>(<var>key</var>)</span>.</li><li><span aria-hidden="true" class="list-marker">   b. </span>Нехай <var>descriptor</var> буде <emu-xref aoid="FromPropertyDescriptor" id="_ref_9794"><a href="ecmascript-data-types-та-values.html#sec-frompropertydescriptor">FromPropertyDescriptor</a></emu-xref>(<var>desc</var>).</li><li><span aria-hidden="true" class="list-marker">   c. </span>Якщо <var>descriptor</var> не <u>>>> є / дорівнює <<<</u> <emu-val>undefined</emu-val>, виконає !&nbsp;<emu-xref aoid="CreateDataPropertyOrThrow" id="_ref_9795"><a href="abstract-operations.html#sec-createdatapropertyorthrow">CreateDataPropertyOrThrow</a></emu-xref>(<var>descriptors</var>, <var>key</var>, <var>descriptor</var>).</li></ol></li><li><span aria-hidden="true" class="list-marker">5. </span>Повертає <var>descriptors</var>.</li></ol></emu-alg>
      </emu-clause>
  </emu-clause>
  </emu-clause>
  </emu-clause>
  </div>
</div>