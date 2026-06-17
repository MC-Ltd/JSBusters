<div class="emu-block">
  <div id="spec-container">
  <emu-clause id="sec-fundamental-objects">
  <emu-clause id="sec-object-objects">
  <emu-clause id="sec-properties-of-the-object-constructor">
      <emu-clause id="sec-object.create" type="built-in function">
        <h1><span class="secnum">20.1.2.2</span> Object.create ( <var>O</var>, <var>Properties</var> )</h1>
        <p>Ця функція створює новий об'єкт із заданим прототипом.</p>
        <p>Під час виклику вона виконує такі кроки:</p>
        <emu-alg><ol><li><span aria-hidden="true" class="list-marker">1. </span>Якщо <var>O</var> <emu-xref href="#sec-object-type" id="_ref_9754"><a href="ecmascript-data-types-and-values.html#sec-object-type">is not an Object (не є Об'єктом)</a></emu-xref> та <var>O</var> не є <emu-val>null</emu-val>, викликаємо виняток <emu-val>TypeError</emu-val>.</li><li><span aria-hidden="true" class="list-marker">2. </span>Нехай <var>obj</var> є <emu-xref aoid="OrdinaryObjectCreate" id="_ref_9755"><a href="ordinary-and-exotic-objects-behaviours.html#sec-ordinaryobjectcreate">OrdinaryObjectCreate</a></emu-xref>(<var>O</var>).</li><li><span aria-hidden="true" class="list-marker">3. </span>Якщо <var>Properties</var> не є <emu-val>undefined</emu-val>, тоді<ol><li><span aria-hidden="true" class="list-marker">   a. </span>Повернемо ?&nbsp;<emu-xref aoid="ObjectDefineProperties" id="_ref_9756"><a href="fundamental-objects.html#sec-objectdefineproperties" class="e-user-code">ObjectDefineProperties</a></emu-xref>(<var>obj</var>, <var>Properties</var>).</li></ol></li><li><span aria-hidden="true" class="list-marker">4. </span>Повернемо <var>obj</var>.</li></ol></emu-alg>
      </emu-clause>
  </emu-clause>
  </emu-clause>
  </emu-clause>
  </div>
</div>