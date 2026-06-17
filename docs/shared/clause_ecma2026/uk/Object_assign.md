<div class="emu-block">
  <div id="spec-container">
  <emu-clause id="sec-fundamental-objects">
  <emu-clause id="sec-object-objects">
  <emu-clause id="sec-properties-of-the-object-constructor">
    <emu-clause id="sec-object.assign" type="built-in function">
        <h1><span class="secnum">20.1.2.1</span> Object.assign ( <var>target</var>, ...<var>sources</var> )</h1>
        <p>Ця функція копіює значення всіх перелічуваних власних властивостей з одного або кількох вхідних об'єктів до об'єкта <var>target</var>.</p>
        <p>Під час виклику вона виконує такі кроки:</p>
        <emu-alg><ol><li><span aria-hidden="true" class="list-marker">1. </span>Нехай <var>to</var> є ?&nbsp;<emu-xref aoid="ToObject" id="_ref_9750"><a href="abstract-operations.html#sec-toobject">ToObject</a></emu-xref>(<var>target</var>).</li><li><span aria-hidden="true" class="list-marker">2. </span>Якщо було передано лише один аргумент, повернемо <var>to</var>.</li><li><span aria-hidden="true" class="list-marker">3. </span>Для кожного елементу <var>nextSource</var> з <var>sources</var>, робимо<ol><li><span aria-hidden="true" class="list-marker">   a. </span>Якщо <var>nextSource</var> не є ні <emu-val>undefined</emu-val> ні <emu-val>null</emu-val>, тоді<ol><li><span aria-hidden="true" class="list-marker">      i. </span>Нехай <var>from</var> є !&nbsp;<emu-xref aoid="ToObject" id="_ref_9751"><a href="abstract-operations.html#sec-toobject">ToObject</a></emu-xref>(<var>nextSource</var>).</li><li><span aria-hidden="true" class="list-marker">      ii. </span>Нехай <var>keys</var> є ?&nbsp;<span class="e-user-code"><var>from</var>.<var class="field">[[OwnPropertyKeys]]</var>()</span>.</li><li><span aria-hidden="true" class="list-marker">      iii. </span>Для кожного елементу <var>nextKey</var> з <var>keys</var>, робимо<ol><li><span aria-hidden="true" class="list-marker">           1. </span>Нехай <var>desc</var> є ?&nbsp;<span class="e-user-code"><var>from</var>.<var class="field">[[GetOwnProperty]]</var>(<var>nextKey</var>)</span>.</li><li><span aria-hidden="true" class="list-marker">           2. </span>Якщо <var>desc</var> не є <emu-val>undefined</emu-val> та <var>desc</var>.<var class="field">[[Enumerable]]</var> є <emu-val>true</emu-val>, тоді<ol><li><span aria-hidden="true" class="list-marker">              a. </span>Нехай <var>propValue</var> є ?&nbsp;<emu-xref aoid="Get" id="_ref_9752"><a href="abstract-operations.html#sec-get-o-p" class="e-user-code">Get</a></emu-xref>(<var>from</var>, <var>nextKey</var>).</li><li><span aria-hidden="true" class="list-marker">              b. </span>Виконаємо ?&nbsp;<emu-xref aoid="Set" id="_ref_9753"><a href="abstract-operations.html#sec-set-o-p-v-throw" class="e-user-code">Set</a></emu-xref>(<var>to</var>, <var>nextKey</var>, <var>propValue</var>, <emu-val>true</emu-val>).</li></ol></li></ol></li></ol></li></ol></li><li><span aria-hidden="true" class="list-marker">4. </span>Повернемо <var>to</var>.</li></ol></emu-alg>
        <p>Властивість <emu-val>"length"</emu-val> цієї функції є <emu-val>2</emu-val><sub>𝔽</sub>.</p>
    </emu-clause>
  </emu-clause>
  </emu-clause>
  </emu-clause>
  </div>
</div>