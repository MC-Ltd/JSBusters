<div class="emu-block">
  <div id="spec-container">
  <emu-clause id="sec-structured-data">
  <emu-clause id="sec-json-object">
    <emu-clause id="sec-json.stringify" type="built-in function">
      <emu-clause id="sec-json-serialization-record">
        <h1><span class="secnum">25.5.4.1</span> JSON Serialization Record</h1>
        <p>A <dfn variants="JSON Serialization Records" tabindex="-1">JSON Serialization Record</dfn> is a <emu-xref href="#sec-list-and-record-specification-type" id="_ref_15568"><a href="ecmascript-data-types-and-values.html#sec-list-and-record-specification-type">Record</a></emu-xref> value used to enable serialization to the JSON format.</p>
        <p>JSON Serialization Records have the fields listed in <emu-xref href="#table-json-serialization-record" id="_ref_816"><a href="structured-data.html#table-json-serialization-record">Table 76</a></emu-xref>.</p>
        <emu-table id="table-json-serialization-record" caption="JSON Serialization Record Fields"><figure><figcaption>Table 76: <emu-xref href="#sec-json-serialization-record" id="_ref_15569"><a href="structured-data.html#sec-json-serialization-record">JSON Serialization Record</a></emu-xref> Fields</figcaption>
          <table>
            <thead>
              <tr>
                <th>Field Name</th>
                <th>Value</th>
                <th>Meaning</th>
              </tr>
            </thead>
            <tbody><tr>
              <td><var class="field">[[ReplacerFunction]]</var></td>
              <td>a <emu-xref href="#function-object" id="_ref_15570"><a href="ecmascript-data-types-and-values.html#function-object">function object</a></emu-xref> or <emu-val>undefined</emu-val></td>
              <td>A function that can supply replacement values for object properties (from JSON.stringify's <var>replacer</var> parameter).</td>
            </tr>
            <tr>
              <td><var class="field">[[PropertyList]]</var></td>
              <td>either a <emu-xref href="#sec-list-and-record-specification-type" id="_ref_15571"><a href="ecmascript-data-types-and-values.html#sec-list-and-record-specification-type">List</a></emu-xref> of Strings or <emu-val>undefined</emu-val></td>
              <td>The names of properties to include when serializing a non-array object (from JSON.stringify's <var>replacer</var> parameter).</td>
            </tr>
            <tr>
              <td><var class="field">[[Gap]]</var></td>
              <td>a String</td>
              <td>The unit of indentation (from JSON.stringify's <var>space</var> parameter).</td>
            </tr>
            <tr>
              <td><var class="field">[[Stack]]</var></td>
              <td>a <emu-xref href="#sec-list-and-record-specification-type" id="_ref_15572"><a href="ecmascript-data-types-and-values.html#sec-list-and-record-specification-type">List</a></emu-xref> of Objects</td>
              <td>The set of nested objects that are in the process of being serialized. Used to detect cyclic structures.</td>
            </tr>
            <tr>
              <td><var class="field">[[Indent]]</var></td>
              <td>a String</td>
              <td>The current indentation.</td>
            </tr>
          </tbody></table>
        </figure></emu-table>
      </emu-clause>
    </emu-clause>
  </emu-clause>
  </emu-clause>
  </div>
</div>