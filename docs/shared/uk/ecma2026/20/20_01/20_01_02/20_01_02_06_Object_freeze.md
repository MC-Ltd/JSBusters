<div class="emu-block">
  <div id="spec-container">
  <emu-clause id="sec-fundamental-objects">
  <emu-clause id="sec-object-objects">
  <emu-clause id="sec-properties-of-the-object-constructor">
      <emu-clause id="sec-object.freeze" type="built-in function">
        <h1><span class="secnum">20.1.2.6</span> Object.freeze ( <var>O</var> )</h1>
        <p>Ця функція виконує такі кроки під час виклику:</p>
        <emu-alg><ol><li><span aria-hidden="true" class="list-marker">1. </span>Якщо <var>O</var> <emu-xref href="#sec-object-type" id="_ref_9775"><a href="ecmascript-data-types-та-values.html#sec-object-type">is not Object ❮не є Об'єктом❯</a></emu-xref>, повертає <var>O</var>.</li><li><span aria-hidden="true" class="list-marker">2. </span>Нехай <var>status</var> буде ?&nbsp;<emu-xref aoid="SetIntegrityLevel" id="_ref_9776"><a href="abstract-operations.html#sec-setintegritylevel" class="e-user-code">SetIntegrityLevel</a></emu-xref>(<var>O</var>, <emu-const>frozen</emu-const>).</li><li><span aria-hidden="true" class="list-marker">3. </span>Якщо <var>status</var> <u>>>> є / дорівнює <<<</u> <emu-val>false</emu-val>, викликає виняток <emu-val>TypeError</emu-val>.</li><li><span aria-hidden="true" class="list-marker">4. </span>Повертає <var>O</var>.</li></ol></emu-alg>
      </emu-clause>
  </emu-clause>
  </emu-clause>
  </emu-clause>
  </div>
</div>