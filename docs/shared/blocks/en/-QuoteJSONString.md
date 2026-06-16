<div class="emu-block">
  <div id="spec-container">
  <emu-clause id="sec-structured-data">
  <emu-clause id="sec-json-object">
    <emu-clause id="sec-json.stringify" type="built-in function">
      <emu-clause id="sec-quotejsonstring" type="abstract operation" aoid="QuoteJSONString">
        <h1><span class="secnum">25.5.4.3</span> QuoteJSONString ( <var>value</var> )</h1>
        <p>The abstract operation QuoteJSONString takes argument <var>value</var> (a String) and returns a String. It wraps <var>value</var> in 0x0022 (QUOTATION MARK) code units and escapes certain other code units within it. This operation interprets <var>value</var> as a sequence of UTF-16 encoded code points, as described in <emu-xref href="#sec-ecmascript-language-types-string-type" id="_ref_817"><a href="ecmascript-data-types-and-values.html#sec-ecmascript-language-types-string-type">6.1.4</a></emu-xref>. It performs the following steps when called:</p>
        <emu-alg><ol><li><span aria-hidden="true" class="list-marker">1. </span>Let <var>product</var> be the String value consisting solely of the code unit 0x0022 (QUOTATION MARK).</li><li><span aria-hidden="true" class="list-marker">2. </span>For each code point <var>C</var> of <emu-xref aoid="StringToCodePoints" id="_ref_15600"><a href="ecmascript-language-source-code.html#sec-stringtocodepoints">StringToCodePoints</a></emu-xref>(<var>value</var>), do<ol><li><span aria-hidden="true" class="list-marker">   a. </span>If <var>C</var> is listed in the “Code Point” column of <emu-xref href="#table-json-single-character-escapes" id="_ref_818"><a href="structured-data.html#table-json-single-character-escapes">Table 77</a></emu-xref>, then<ol><li><span aria-hidden="true" class="list-marker">      i. </span>Set <var>product</var> to the <emu-xref href="#string-concatenation" id="_ref_15601"><a href="ecmascript-data-types-and-values.html#string-concatenation">string-concatenation</a></emu-xref> of <var>product</var> and the escape sequence for <var>C</var> as specified in the “Escape Sequence” column of the corresponding row.</li></ol></li><li><span aria-hidden="true" class="list-marker">   b. </span>Else if <var>C</var> has a numeric value less than 0x0020 (SPACE) or <var>C</var> has the same numeric value as a <emu-xref href="#leading-surrogate" id="_ref_15602"><a href="ecmascript-data-types-and-values.html#leading-surrogate">leading surrogate</a></emu-xref> or <emu-xref href="#trailing-surrogate" id="_ref_15603"><a href="ecmascript-data-types-and-values.html#trailing-surrogate">trailing surrogate</a></emu-xref>, then<ol><li><span aria-hidden="true" class="list-marker">      i. </span>Let <var>unit</var> be the code unit whose numeric value is the numeric value of <var>C</var>.</li><li><span aria-hidden="true" class="list-marker">      ii. </span>Set <var>product</var> to the <emu-xref href="#string-concatenation" id="_ref_15604"><a href="ecmascript-data-types-and-values.html#string-concatenation">string-concatenation</a></emu-xref> of <var>product</var> and <emu-xref aoid="UnicodeEscape" id="_ref_15605"><a href="structured-data.html#sec-unicodeescape">UnicodeEscape</a></emu-xref>(<var>unit</var>).</li></ol></li><li><span aria-hidden="true" class="list-marker">   c. </span>Else,<ol><li><span aria-hidden="true" class="list-marker">      i. </span>Set <var>product</var> to the <emu-xref href="#string-concatenation" id="_ref_15606"><a href="ecmascript-data-types-and-values.html#string-concatenation">string-concatenation</a></emu-xref> of <var>product</var> and <emu-xref aoid="UTF16EncodeCodePoint" id="_ref_15607"><a href="ecmascript-language-source-code.html#sec-utf16encodecodepoint">UTF16EncodeCodePoint</a></emu-xref>(<var>C</var>).</li></ol></li></ol></li><li><span aria-hidden="true" class="list-marker">3. </span>Set <var>product</var> to the <emu-xref href="#string-concatenation" id="_ref_15608"><a href="ecmascript-data-types-and-values.html#string-concatenation">string-concatenation</a></emu-xref> of <var>product</var> and the code unit 0x0022 (QUOTATION MARK).</li><li><span aria-hidden="true" class="list-marker">4. </span>Return <var>product</var>.</li></ol></emu-alg>
        <emu-table id="table-json-single-character-escapes" caption="JSON Single Character Escape Sequences"><figure><figcaption>Table 77: JSON Single Character Escape Sequences</figcaption>
          <table>
            <thead>
              <tr>
                <th>
                  Code Point
                </th>
                <th>
                  Unicode Character Name
                </th>
                <th>
                  Escape Sequence
                </th>
              </tr>
            </thead>
            <tbody><tr>
              <td>
                U+0008
              </td>
              <td>
                BACKSPACE
              </td>
              <td>
                <code>\b</code>
              </td>
            </tr>
            <tr>
              <td>
                U+0009
              </td>
              <td>
                CHARACTER TABULATION
              </td>
              <td>
                <code>\t</code>
              </td>
            </tr>
            <tr>
              <td>
                U+000A
              </td>
              <td>
                LINE FEED (LF)
              </td>
              <td>
                <code>\n</code>
              </td>
            </tr>
            <tr>
              <td>
                U+000C
              </td>
              <td>
                FORM FEED (FF)
              </td>
              <td>
                <code>\f</code>
              </td>
            </tr>
            <tr>
              <td>
                U+000D
              </td>
              <td>
                CARRIAGE RETURN (CR)
              </td>
              <td>
                <code>\r</code>
              </td>
            </tr>
            <tr>
              <td>
                U+0022
              </td>
              <td>
                QUOTATION MARK
              </td>
              <td>
                <code>\"</code>
              </td>
            </tr>
            <tr>
              <td>
                U+005C
              </td>
              <td>
                REVERSE SOLIDUS
              </td>
              <td>
                <code>\\</code>
              </td>
            </tr>
          </tbody></table>
        </figure></emu-table>
      </emu-clause>
    </emu-clause>
  </emu-clause>
  </emu-clause>
  </div>
</div>