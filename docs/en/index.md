# Головна
Ласкаво просимо!

<div class="info-card">
  <i class="fa fa-star"></i>
  Тестовий блок зі старого сайту
</div>

<div>
  <emu-clause id="sec-ordinary-object-internal-methods-and-internal-slots-ownpropertykeys-ua" type="internal method">
    <h1>
      <span class="secnum">10.1.11</span> <var class="field">[[OwnPropertyKeys]]</var> ( )
    </h1>
    <p>
      Внутрішній метод <var class="field">[[OwnPropertyKeys]] </var>
      <emu-xref href="#ordinary-object" id="_ref_4582">
        <a href="ecmascript-data-types-and-values.html#ordinary-object">звичайного об'єкта (ordinary object) </a>
      </emu-xref> 
      <var>O</var> не приймає аргументів і повертає 
      <emu-xref href="#sec-completion-record-specification-type" id="_ref_4583">
        <a href="ecmascript-data-types-and-values.html#sec-completion-record-specification-type">нормальне завершення (normal completion containing)</a>
      </emu-xref>, що містить 
      <emu-xref href="#sec-list-and-record-specification-type" id="_ref_4584">
        <a href="ecmascript-data-types-and-values.html#sec-list-and-record-specification-type">Список (List)</a>
      </emu-xref>
      <emu-xref href="#property-key" id="_ref_4585">
        <a href="ecmascript-data-types-and-values.html#property-key"> ключів властивостей (property keys)</a>
      </emu-xref>. Під час виклику він виконує такі кроки:
    </p>
    <emu-alg>
      <ol>
        <li>
          <span aria-hidden="true" class="list-marker">1. </span>
          Повертає 
          <emu-xref aoid="OrdinaryOwnPropertyKeys" id="_ref_4586">
            <a href="ordinary-and-exotic-objects-behaviours.html#sec-ordinaryownpropertykeys">OrdinaryOwnPropertyKeys</a>
          </emu-xref>
          (<var>O</var>).
        </li>
      </ol>
    </emu-alg>
  </emu-clause>
  <emu-clause id="sec-ordinaryownpropertykeys" type="abstract operation" aoid="OrdinaryOwnPropertyKeys">
    <h1>
      <span class="secnum">10.1.11.1</span> OrdinaryOwnPropertyKeys ( <var>O</var> )
    </h1>
    <p>
      Абстрактна операція OrdinaryOwnPropertyKeys приймає аргумент <var>O</var> (об'єкт) і повертає 
      <emu-xref href="#sec-list-and-record-specification-type" id="_ref_4587">
        <a href="ecmascript-data-types-and-values.html#sec-list-and-record-specification-type">Список (List)</a>
      </emu-xref> 
      <emu-xref href="#property-key" id="_ref_4588">
        <a href="ecmascript-data-types-and-values.html#property-key">"ключів властивостей" (property keys)</a>
      </emu-xref>. Під час виклику вона виконує такі кроки:
    </p>
    <emu-alg>
      <ol>
        <li>
          <span aria-hidden="true" class="list-marker">1. </span>Нехай <var>keys</var> буде новим порожнім 
          <emu-xref href="#sec-list-and-record-specification-type" id="_ref_4589">
            <a href="ecmascript-data-types-and-values.html#sec-list-and-record-specification-type">Списком (List)</a>
          </emu-xref>.
        </li>
        <li>
          <span aria-hidden="true" class="list-marker">2. </span>Для кожного власного 
          <emu-xref href="#property-key" id="_ref_4590">
            <a href="ecmascript-data-types-and-values.html#property-key">ключа властивості (property key)</a>
          </emu-xref> 
          <var>P</var> об'єкта <var>O</var>, такого що <var>P</var> є 
          <emu-xref href="#array-index" id="_ref_4591">
            <a href="ecmascript-data-types-and-values.html#array-index">індексом масиву (array index)</a>
          </emu-xref>, у порядку зростання числових значень індексів:
          <ol>
            <li>
              <span aria-hidden="true" class="list-marker">   a. </span>Додамо <var>P</var> до <var>keys</var>.
            </li>
          </ol>
        </li>
        <li>
          <span aria-hidden="true" class="list-marker">3. </span>Для кожного власного 
          <emu-xref href="#property-key" id="_ref_4592">
            <a href="ecmascript-data-types-and-values.html#property-key">ключа властивості (property key)</a>
          </emu-xref> 
          <var>P</var> об'єкта <var>O</var>, такого що <var>P</var> 
          <emu-xref href="#sec-ecmascript-language-types-string-type" id="_ref_4593">
            <a href="ecmascript-data-types-and-values.html#sec-ecmascript-language-types-string-type">є Рядком (is a String)</a>
          </emu-xref> 
          і <var>P</var> не є 
          <emu-xref href="#array-index" id="_ref_4594">
            <a href="ecmascript-data-types-and-values.html#array-index">індексом масиву (array index)</a>
          </emu-xref>
          , у хронологічному порядку створення властивостей:
          <ol>
            <li>
              <span aria-hidden="true" class="list-marker">   a. </span>Додамо <var>P</var> до <var>keys</var>.
            </li>
          </ol>
        </li>
        <li>
          <span aria-hidden="true" class="list-marker">4. </span>Для кожного власного 
          <emu-xref href="#property-key" id="_ref_4595">
            <a href="ecmascript-data-types-and-values.html#property-key">ключа властивості (property key)</a>
          </emu-xref> 
          <var>P</var> об'єкта <var>O</var>, такого що <var>P</var> 
          <emu-xref href="#sec-ecmascript-language-types-symbol-type" id="_ref_4596">
            <a href="ecmascript-data-types-and-values.html#sec-ecmascript-language-types-symbol-type">є Символом (is a Symbol)</a>
          </emu-xref>
          , у хронологічному порядку створення властивостей:
          <ol>
            <li>
              <span aria-hidden="true" class="list-marker">   a. </span>Додамо <var>P</var> до <var>keys</var>.
            </li>
          </ol>
        </li>
        <li>
          <span aria-hidden="true" class="list-marker">5. </span>Повернемо <var>keys</var>.
        </li>
      </ol>
    </emu-alg>
  </emu-clause>
</div>


<div>
<emu-clause id="sec-enumerableownproperties" type="abstract operation" oldids="sec-enumerableownpropertynames" aoid="EnumerableOwnProperties"><span id="sec-enumerableownpropertynames"></span>
      <h1><span class="secnum">7.3.23</span> EnumerableOwnProperties ( <var>O</var>, <var>kind</var> )</h1>
      <p>The abstract operation EnumerableOwnProperties takes arguments <var>O</var> (an Object) and <var>kind</var> (<emu-const>key</emu-const>, <emu-const>value</emu-const>, or <emu-const>key+value</emu-const>) and returns either a <emu-xref href="#sec-completion-record-specification-type" id="_ref_2623"><a href="ecmascript-data-types-and-values.html#sec-completion-record-specification-type">normal completion containing</a></emu-xref> a <emu-xref href="#sec-list-and-record-specification-type" id="_ref_2624"><a href="ecmascript-data-types-and-values.html#sec-list-and-record-specification-type">List</a></emu-xref> of <emu-xref href="#sec-ecmascript-language-types" id="_ref_2625"><a href="ecmascript-data-types-and-values.html#sec-ecmascript-language-types">ECMAScript language values</a></emu-xref> or a <emu-xref href="#sec-completion-record-specification-type" id="_ref_2626"><a href="ecmascript-data-types-and-values.html#sec-completion-record-specification-type">throw completion</a></emu-xref>. It performs the following steps when called:</p>
      <emu-alg><ol><li><span aria-hidden="true" class="list-marker">1. </span>Let <var>ownKeys</var> be ?&nbsp;<span class="e-user-code"><var>O</var>.<var class="field">[[OwnPropertyKeys]]</var>()</span>.</li><li><span aria-hidden="true" class="list-marker">2. </span>Let <var>results</var> be a new empty <emu-xref href="#sec-list-and-record-specification-type" id="_ref_2627"><a href="ecmascript-data-types-and-values.html#sec-list-and-record-specification-type">List</a></emu-xref>.</li><li><span aria-hidden="true" class="list-marker">3. </span>For each element <var>key</var> of <var>ownKeys</var>, do<ol><li><span aria-hidden="true" class="list-marker">   a. </span>If <var>key</var> <emu-xref href="#sec-ecmascript-language-types-string-type" id="_ref_2628"><a href="ecmascript-data-types-and-values.html#sec-ecmascript-language-types-string-type">is a String</a></emu-xref>, then<ol><li><span aria-hidden="true" class="list-marker">      i. </span>Let <var>desc</var> be ?&nbsp;<span class="e-user-code"><var>O</var>.<var class="field">[[GetOwnProperty]]</var>(<var>key</var>)</span>.</li><li><span aria-hidden="true" class="list-marker">      ii. </span>If <var>desc</var> is not <emu-val>undefined</emu-val> and <var>desc</var>.<var class="field">[[Enumerable]]</var> is <emu-val>true</emu-val>, then<ol><li><span aria-hidden="true" class="list-marker">          1. </span>If <var>kind</var> is <emu-const>key</emu-const>, then<ol><li><span aria-hidden="true" class="list-marker">             a. </span>Append <var>key</var> to <var>results</var>.</li></ol></li><li><span aria-hidden="true" class="list-marker">          2. </span>Else,<ol><li><span aria-hidden="true" class="list-marker">             a. </span>Let <var>value</var> be ?&nbsp;<emu-xref aoid="Get" id="_ref_2629"><a href="abstract-operations.html#sec-get-o-p" class="e-user-code">Get</a></emu-xref>(<var>O</var>, <var>key</var>).</li><li><span aria-hidden="true" class="list-marker">             b. </span>If <var>kind</var> is <emu-const>value</emu-const>, then<ol><li><span aria-hidden="true" class="list-marker">                i. </span>Append <var>value</var> to <var>results</var>.</li></ol></li><li><span aria-hidden="true" class="list-marker">             c. </span>Else,<ol><li><span aria-hidden="true" class="list-marker">                i. </span><emu-xref href="#assert" id="_ref_2630"><a href="notational-conventions.html#assert">Assert</a></emu-xref>: <var>kind</var> is <emu-const>key+value</emu-const>.</li><li><span aria-hidden="true" class="list-marker">                ii. </span>Let <var>entry</var> be <emu-xref aoid="CreateArrayFromList" id="_ref_2631"><a href="abstract-operations.html#sec-createarrayfromlist">CreateArrayFromList</a></emu-xref>(« <var>key</var>, <var>value</var>&nbsp;»).</li><li><span aria-hidden="true" class="list-marker">                iii. </span>Append <var>entry</var> to <var>results</var>.</li></ol></li></ol></li></ol></li></ol></li></ol></li><li><span aria-hidden="true" class="list-marker">4. </span>Return <var>results</var>.</li></ol></emu-alg>
    </emu-clause>
</div>