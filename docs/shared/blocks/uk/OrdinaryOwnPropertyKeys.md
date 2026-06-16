<div class="emu-block">
  <div id="spec-container">
  <emu-clause id="sec-ordinary-and-exotic-objects-behaviours">
  <emu-clause id="sec-ordinary-object-internal-methods-and-internal-slots">
  <emu-clause id="sec-ordinary-object-internal-methods-and-internal-slots-ownpropertykeys" type="internal method">
      <emu-clause id="sec-ordinaryownpropertykeys" type="abstract operation" aoid="OrdinaryOwnPropertyKeys">
        <h1><span class="secnum">10.1.11.1</span> OrdinaryOwnPropertyKeys ( <var>O</var> )</h1>
        <p>Абстрактна операція OrdinaryOwnPropertyKeys приймає аргумент <var>O</var> (об'єкт) і повертає 
<emu-xref href="#sec-list-and-record-specification-type" id="_ref_4587"><a href="ecmascript-data-types-and-values.html#sec-list-and-record-specification-type">Список (List)</a></emu-xref> 
<emu-xref href="#property-key" id="_ref_4588"><a href="ecmascript-data-types-and-values.html#property-key">"ключів властивостей" (property keys)</a></emu-xref>. Під час виклику вона виконує такі кроки:</p>
        <emu-alg><ol><li><span aria-hidden="true" class="list-marker">1. </span>Нехай <var>keys</var> буде новим порожнім 
<emu-xref href="#sec-list-and-record-specification-type" id="_ref_4589"><a href="ecmascript-data-types-and-values.html#sec-list-and-record-specification-type">Списком (List)</a></emu-xref>.</li>
<li><span aria-hidden="true" class="list-marker">2. </span>Для кожного власного 
<emu-xref href="#property-key" id="_ref_4590"><a href="ecmascript-data-types-and-values.html#property-key">ключа властивості (property key)</a></emu-xref> 
<var>P</var> об'єкта <var>O</var>, такого що <var>P</var> є 
<emu-xref href="#array-index" id="_ref_4591"><a href="ecmascript-data-types-and-values.html#array-index">індексом масиву (array index)</a></emu-xref>, у порядку зростання числових значень індексів:
<ol><li><span aria-hidden="true" class="list-marker">   a. </span>Додамо <var>P</var> до <var>keys</var>.</li></ol></li>
<li><span aria-hidden="true" class="list-marker">3. </span>Для кожного власного 
<emu-xref href="#property-key" id="_ref_4592"><a href="ecmascript-data-types-and-values.html#property-key">ключа властивості (property key)</a></emu-xref> 
<var>P</var> об'єкта <var>O</var>, такого що <var>P</var> <emu-xref href="#sec-ecmascript-language-types-string-type" id="_ref_4593"><a href="ecmascript-data-types-and-values.html#sec-ecmascript-language-types-string-type">є Рядком (is a String)</a></emu-xref> і 
<var>P</var> не є <emu-xref href="#array-index" id="_ref_4594"><a href="ecmascript-data-types-and-values.html#array-index">індексом масиву (array index)</a></emu-xref>, у хронологічному порядку створення властивостей:
<ol><li><span aria-hidden="true" class="list-marker">   a. </span>Додамо <var>P</var> до <var>keys</var>.</li></ol></li>
<li><span aria-hidden="true" class="list-marker">4. </span>Для кожного власного <emu-xref href="#property-key" id="_ref_4595"><a href="ecmascript-data-types-and-values.html#property-key">ключа властивості (property key)</a></emu-xref> 
<var>P</var> об'єкта <var>O</var>, такого що <var>P</var> <emu-xref href="#sec-ecmascript-language-types-symbol-type" id="_ref_4596"><a href="ecmascript-data-types-and-values.html#sec-ecmascript-language-types-symbol-type">є Символом (is a Symbol)</a></emu-xref>, у хронологічному порядку створення властивостей:
<ol><li><span aria-hidden="true" class="list-marker">   a. </span>Додамо <var>P</var> до <var>keys</var>.</li></ol></li>
<li><span aria-hidden="true" class="list-marker">5. </span>Повернемо <var>keys</var>.</li></ol></emu-alg>
      </emu-clause>
  </emu-clause>
  </emu-clause>
  </emu-clause>
  </div>
</div>