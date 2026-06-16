<div class="emu-block">
  <div id="spec-container">
  <emu-clause id="sec-fundamental-objects">
  <emu-clause id="sec-object-objects">
  <emu-clause id="sec-properties-of-the-object-constructor">
    <emu-clause id="sec-object.assign" type="built-in function">
        <h1><span class="secnum">20.1.2.1</span> Object.assign ( <var>target</var>, ...<var>sources</var> )</h1>
        <p>This function copies the values of all of the enumerable own properties from one or more source objects to a <var>target</var> object.</p>
        <p>It performs the following steps when called:</p>
        <emu-alg><ol><li><span aria-hidden="true" class="list-marker">1. </span>Let <var>to</var> be ?&nbsp;<emu-xref aoid="ToObject" id="_ref_9750"><a href="abstract-operations.html#sec-toobject">ToObject</a></emu-xref>(<var>target</var>).</li><li><span aria-hidden="true" class="list-marker">2. </span>If only one argument was passed, return <var>to</var>.</li><li><span aria-hidden="true" class="list-marker">3. </span>For each element <var>nextSource</var> of <var>sources</var>, do<ol><li><span aria-hidden="true" class="list-marker">   a. </span>If <var>nextSource</var> is neither <emu-val>undefined</emu-val> nor <emu-val>null</emu-val>, then<ol><li><span aria-hidden="true" class="list-marker">      i. </span>Let <var>from</var> be !&nbsp;<emu-xref aoid="ToObject" id="_ref_9751"><a href="abstract-operations.html#sec-toobject">ToObject</a></emu-xref>(<var>nextSource</var>).</li><li><span aria-hidden="true" class="list-marker">      ii. </span>Let <var>keys</var> be ?&nbsp;<span class="e-user-code"><var>from</var>.<var class="field">[[OwnPropertyKeys]]</var>()</span>.</li><li><span aria-hidden="true" class="list-marker">      iii. </span>For each element <var>nextKey</var> of <var>keys</var>, do<ol><li><span aria-hidden="true" class="list-marker">           1. </span>Let <var>desc</var> be ?&nbsp;<span class="e-user-code"><var>from</var>.<var class="field">[[GetOwnProperty]]</var>(<var>nextKey</var>)</span>.</li><li><span aria-hidden="true" class="list-marker">           2. </span>If <var>desc</var> is not <emu-val>undefined</emu-val> and <var>desc</var>.<var class="field">[[Enumerable]]</var> is <emu-val>true</emu-val>, then<ol><li><span aria-hidden="true" class="list-marker">              a. </span>Let <var>propValue</var> be ?&nbsp;<emu-xref aoid="Get" id="_ref_9752"><a href="abstract-operations.html#sec-get-o-p" class="e-user-code">Get</a></emu-xref>(<var>from</var>, <var>nextKey</var>).</li><li><span aria-hidden="true" class="list-marker">              b. </span>Perform ?&nbsp;<emu-xref aoid="Set" id="_ref_9753"><a href="abstract-operations.html#sec-set-o-p-v-throw" class="e-user-code">Set</a></emu-xref>(<var>to</var>, <var>nextKey</var>, <var>propValue</var>, <emu-val>true</emu-val>).</li></ol></li></ol></li></ol></li></ol></li><li><span aria-hidden="true" class="list-marker">4. </span>Return <var>to</var>.</li></ol></emu-alg>
        <p>The <emu-val>"length"</emu-val> property of this function is <emu-val>2</emu-val><sub>𝔽</sub>.</p>
    </emu-clause>
  </emu-clause>
  </emu-clause>
  </emu-clause>
  </div>
</div>