<div class="emu-block">
  <div id="spec-container">
  <emu-clause id="sec-structured-data">
  <emu-clause id="sec-json-object">
    <emu-clause id="sec-json.stringify" type="built-in function">
      <emu-clause id="sec-unicodeescape" type="abstract operation" aoid="UnicodeEscape">
        <h1><span class="secnum">25.5.4.4</span> UnicodeEscape ( <var>C</var> )</h1>
        <p>The abstract operation UnicodeEscape takes argument <var>C</var> (a code unit) and returns a String. It represents <var>C</var> as a Unicode escape sequence. It performs the following steps when called:</p>
        <emu-alg><ol><li><span aria-hidden="true" class="list-marker">1. </span>Let <var>n</var> be the numeric value of <var>C</var>.</li><li><span aria-hidden="true" class="list-marker">2. </span><emu-xref href="#assert" id="_ref_15609"><a href="notational-conventions.html#assert">Assert</a></emu-xref>: <var>n</var> ≤ 0xFFFF.</li><li><span aria-hidden="true" class="list-marker">3. </span>Let <var>hex</var> be the String representation of <var>n</var>, formatted as a lowercase hexadecimal number.</li><li><span aria-hidden="true" class="list-marker">4. </span>Return the <emu-xref href="#string-concatenation" id="_ref_15610"><a href="ecmascript-data-types-and-values.html#string-concatenation">string-concatenation</a></emu-xref> of the code unit 0x005C (REVERSE SOLIDUS), <emu-val>"u"</emu-val>, and <emu-xref aoid="StringPad" id="_ref_15611"><a href="text-processing.html#sec-stringpad">StringPad</a></emu-xref>(<var>hex</var>, 4, <emu-val>"0"</emu-val>, <emu-const>start</emu-const>).</li></ol></emu-alg>
      </emu-clause>
    </emu-clause>
  </emu-clause>
  </emu-clause>
  </div>
</div>