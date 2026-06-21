<div class="emu-block">
  <div id="spec-container">
  <emu-clause id="sec-ordinary-and-exotic-objects-behaviours">
  <emu-clause id="sec-ordinary-object-internal-methods-and-internal-slots">
    <emu-clause id="sec-ordinary-object-internal-methods-and-internal-slots-ownpropertykeys-ua" type="internal method">
      <h1><span class="secnum">10.1.11</span> <var class="field">[[OwnPropertyKeys]]</var> ( )</h1>
      <p>Внутрішній метод <var class="field">[[OwnPropertyKeys]]</var> <emu-xref href="#ordinary-object" id="_ref_4582"><a href="ecmascript-data-types-and-values.html#ordinary-object">ordinary object (звичайного об'єкта)</a></emu-xref> <var>O</var> не приймає аргументів і повертає <emu-xref href="#sec-completion-record-specification-type" id="_ref_4583"><a href="ecmascript-data-types-and-values.html#sec-completion-record-specification-type">normal completion containing (???нормальне завершення???)</a></emu-xref>, що містить <emu-xref href="#sec-list-and-record-specification-type" id="_ref_4584"><a href="ecmascript-data-types-and-values.html#sec-list-and-record-specification-type">List (Список)</a></emu-xref> з <emu-xref href="#property-key" id="_ref_4585"><a href="ecmascript-data-types-and-values.html#property-key">property keys (ключів властивостей)</a></emu-xref>. Під час виклику він виконує такі кроки:</p>
      <emu-alg><ol><li><span aria-hidden="true" class="list-marker">1. </span>Повертає <emu-xref aoid="OrdinaryOwnPropertyKeys" id="_ref_4586"><a href="ordinary-and-exotic-objects-behaviours.html#sec-ordinaryownpropertykeys">OrdinaryOwnPropertyKeys</a></emu-xref>(<var>O</var>).</li></ol></emu-alg>
    </emu-clause>
  </emu-clause>
  </emu-clause>
  </div>
</div>
