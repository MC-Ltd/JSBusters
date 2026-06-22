
<div class="emu-block">
  <div id="spec-container">
  <emu-clause id="sec-ecmascript-language-types">
    <emu-clause id="sec-object-type">
      <emu-clause id="sec-well-known-intrinsic-objects">
        <h1><span class="secnum">6.1.7.4</span> Well-Known Intrinsic Objects</h1>
        <p>Well-known intrinsics are built-in objects that are explicitly referenced by the algorithms of this specification and which usually have <emu-xref href="#realm" id="_ref_1657"><a href="executable-code-and-execution-contexts.html#realm">realm</a></emu-xref>-specific identities. Unless otherwise specified each intrinsic object actually corresponds to a set of similar objects, one per <emu-xref href="#realm" id="_ref_1658"><a href="executable-code-and-execution-contexts.html#realm">realm</a></emu-xref>.</p>
        <p>Within this specification a reference such as %name% means the intrinsic object, associated with the current <emu-xref href="#realm" id="_ref_1659"><a href="executable-code-and-execution-contexts.html#realm">realm</a></emu-xref>, corresponding to the name. A reference such as %name.a.b% means, as if the <emu-val>"b"</emu-val> property of the value of the <emu-val>"a"</emu-val> property of the intrinsic object %name% was accessed prior to any ECMAScript code being evaluated. Determination of the current <emu-xref href="#realm" id="_ref_1660"><a href="executable-code-and-execution-contexts.html#realm">realm</a></emu-xref> and its intrinsics is described in <emu-xref href="#sec-execution-contexts" id="_ref_116"><a href="executable-code-and-execution-contexts.html#sec-execution-contexts">9.4</a></emu-xref>. The well-known intrinsics are listed in <emu-xref href="#table-well-known-intrinsic-objects" id="_ref_117"><a href="ecmascript-data-types-and-values.html#table-well-known-intrinsic-objects">Table 6</a></emu-xref>.</p>
        <emu-table id="table-well-known-intrinsic-objects" caption="Well-Known Intrinsic Objects" oldids="table-7"><figure><figcaption>Table 6: Well-Known Intrinsic Objects</figcaption><span id="table-7"></span>
          <table>
            <thead>
              <tr>
                <th>
                  Intrinsic Name
                </th>
                <th>
                  Global Name
                </th>
                <th>
                  ECMAScript Language Association
                </th>
              </tr>
            </thead>
            <tbody><tr>
              <td>
                <emu-xref href="#sec-aggregate-error-constructor" id="_ref_1661"><a href="fundamental-objects.html#sec-aggregate-error-constructor">%AggregateError%</a></emu-xref>
              </td>
              <td>
                <code>AggregateError</code>
              </td>
              <td>
                The <code>AggregateError</code> <emu-xref href="#constructor" id="_ref_1662"><a href="ecmascript-data-types-and-values.html#constructor">constructor</a></emu-xref> (<emu-xref href="#sec-aggregate-error-constructor" id="_ref_118"><a href="fundamental-objects.html#sec-aggregate-error-constructor">20.5.7.1</a></emu-xref>)
              </td>
            </tr>
            <tr>
              <td>
                <emu-xref href="#sec-array-constructor" id="_ref_1663"><a href="indexed-collections.html#sec-array-constructor">%Array%</a></emu-xref>
              </td>
              <td>
                <code>Array</code>
              </td>
              <td>
                The Array <emu-xref href="#constructor" id="_ref_1664"><a href="ecmascript-data-types-and-values.html#constructor">constructor</a></emu-xref> (<emu-xref href="#sec-array-constructor" id="_ref_119"><a href="indexed-collections.html#sec-array-constructor">23.1.1</a></emu-xref>)
              </td>
            </tr>
            <tr>
              <td>
                <emu-xref href="#sec-arraybuffer-constructor" id="_ref_1665"><a href="structured-data.html#sec-arraybuffer-constructor">%ArrayBuffer%</a></emu-xref>
              </td>
              <td>
                <code>ArrayBuffer</code>
              </td>
              <td>
                The ArrayBuffer <emu-xref href="#constructor" id="_ref_1666"><a href="ecmascript-data-types-and-values.html#constructor">constructor</a></emu-xref> (<emu-xref href="#sec-arraybuffer-constructor" id="_ref_120"><a href="structured-data.html#sec-arraybuffer-constructor">25.1.4</a></emu-xref>)
              </td>
            </tr>
            <tr>
              <td>
                <emu-xref href="#sec-%arrayiteratorprototype%-object" id="_ref_1667"><a href="indexed-collections.html#sec-%arrayiteratorprototype%-object">%ArrayIteratorPrototype%</a></emu-xref>
              </td>
              <td>
              </td>
              <td>
                The prototype of <emu-xref href="#sec-array-iterator-objects" id="_ref_1668"><a href="indexed-collections.html#sec-array-iterator-objects">Array Iterator objects</a></emu-xref> (<emu-xref href="#sec-array-iterator-objects" id="_ref_121"><a href="indexed-collections.html#sec-array-iterator-objects">23.1.5</a></emu-xref>)
              </td>
            </tr>
            <tr>
              <td>
                <emu-xref href="#sec-%asyncfromsynciteratorprototype%-object" id="_ref_1669"><a href="control-abstraction-objects.html#sec-%asyncfromsynciteratorprototype%-object">%AsyncFromSyncIteratorPrototype%</a></emu-xref>
              </td>
              <td>
              </td>
              <td>
                The prototype of <emu-xref href="#sec-async-from-sync-iterator-objects" id="_ref_1670"><a href="control-abstraction-objects.html#sec-async-from-sync-iterator-objects">Async-from-Sync Iterator objects</a></emu-xref> (<emu-xref href="#sec-async-from-sync-iterator-objects" id="_ref_122"><a href="control-abstraction-objects.html#sec-async-from-sync-iterator-objects">27.1.5</a></emu-xref>)
              </td>
            </tr>
            <tr>
              <td>
                <emu-xref href="#sec-async-function-constructor" id="_ref_1671"><a href="control-abstraction-objects.html#sec-async-function-constructor">%AsyncFunction%</a></emu-xref>
              </td>
              <td>
              </td>
              <td>
                The <emu-xref href="#constructor" id="_ref_1672"><a href="ecmascript-data-types-and-values.html#constructor">constructor</a></emu-xref> of async <emu-xref href="#function-object" id="_ref_1673"><a href="ecmascript-data-types-and-values.html#function-object">function objects</a></emu-xref> (<emu-xref href="#sec-async-function-constructor" id="_ref_123"><a href="control-abstraction-objects.html#sec-async-function-constructor">27.7.1</a></emu-xref>)
              </td>
            </tr>
            <tr>
              <td>
                <emu-xref href="#sec-asyncgeneratorfunction-constructor" id="_ref_1674"><a href="control-abstraction-objects.html#sec-asyncgeneratorfunction-constructor">%AsyncGeneratorFunction%</a></emu-xref>
              </td>
              <td>
              </td>
              <td>
                The <emu-xref href="#constructor" id="_ref_1675"><a href="ecmascript-data-types-and-values.html#constructor">constructor</a></emu-xref> of async generator <emu-xref href="#function-object" id="_ref_1676"><a href="ecmascript-data-types-and-values.html#function-object">function objects</a></emu-xref> (<emu-xref href="#sec-asyncgeneratorfunction-constructor" id="_ref_124"><a href="control-abstraction-objects.html#sec-asyncgeneratorfunction-constructor">27.4.1</a></emu-xref>)
              </td>
            </tr>
            <tr>
              <td>
                <emu-xref href="#sec-properties-of-asyncgenerator-prototype" id="_ref_1677"><a href="control-abstraction-objects.html#sec-properties-of-asyncgenerator-prototype">%AsyncGeneratorPrototype%</a></emu-xref>
              </td>
              <td>
              </td>
              <td>
                The prototype of async generator objects (<emu-xref href="#sec-asyncgenerator-objects" id="_ref_125"><a href="control-abstraction-objects.html#sec-asyncgenerator-objects">27.6</a></emu-xref>)
              </td>
            </tr>
            <tr>
              <td>
                <emu-xref href="#sec-asynciteratorprototype" id="_ref_1678"><a href="control-abstraction-objects.html#sec-asynciteratorprototype">%AsyncIteratorPrototype%</a></emu-xref>
              </td>
              <td>
              </td>
              <td>
                An object that all standard built-in <emu-xref href="#sec-asynciterator-interface" id="_ref_1679"><a href="control-abstraction-objects.html#sec-asynciterator-interface">async iterator objects</a></emu-xref> indirectly inherit from
              </td>
            </tr>
            <tr>
              <td>
                <emu-xref href="#sec-atomics-object" id="_ref_1680"><a href="structured-data.html#sec-atomics-object">%Atomics%</a></emu-xref>
              </td>
              <td>
                <code>Atomics</code>
              </td>
              <td>
                The <code>Atomics</code> object (<emu-xref href="#sec-atomics-object" id="_ref_126"><a href="structured-data.html#sec-atomics-object">25.4</a></emu-xref>)
              </td>
            </tr>
            <tr>
              <td>
                <emu-xref href="#sec-bigint-constructor" id="_ref_1681"><a href="numbers-and-dates.html#sec-bigint-constructor">%BigInt%</a></emu-xref>
              </td>
              <td>
                <code>BigInt</code>
              </td>
              <td>
                The BigInt <emu-xref href="#constructor" id="_ref_1682"><a href="ecmascript-data-types-and-values.html#constructor">constructor</a></emu-xref> (<emu-xref href="#sec-bigint-constructor" id="_ref_127"><a href="numbers-and-dates.html#sec-bigint-constructor">21.2.1</a></emu-xref>)
              </td>
            </tr>
            <tr>
              <td>
                <emu-xref href="#sec-typedarray-objects" id="_ref_1683"><a href="indexed-collections.html#sec-typedarray-objects">%BigInt64Array%</a></emu-xref>
              </td>
              <td>
                <code>BigInt64Array</code>
              </td>
              <td>
                The BigInt64Array <emu-xref href="#constructor" id="_ref_1684"><a href="ecmascript-data-types-and-values.html#constructor">constructor</a></emu-xref> (<emu-xref href="#sec-typedarray-objects" id="_ref_128"><a href="indexed-collections.html#sec-typedarray-objects">23.2</a></emu-xref>)
              </td>
            </tr>
            <tr>
              <td>
                <emu-xref href="#sec-typedarray-objects" id="_ref_1685"><a href="indexed-collections.html#sec-typedarray-objects">%BigUint64Array%</a></emu-xref>
              </td>
              <td>
                <code>BigUint64Array</code>
              </td>
              <td>
                The BigUint64Array <emu-xref href="#constructor" id="_ref_1686"><a href="ecmascript-data-types-and-values.html#constructor">constructor</a></emu-xref> (<emu-xref href="#sec-typedarray-objects" id="_ref_129"><a href="indexed-collections.html#sec-typedarray-objects">23.2</a></emu-xref>)
              </td>
            </tr>
            <tr>
              <td>
                <emu-xref href="#sec-boolean-constructor" id="_ref_1687"><a href="fundamental-objects.html#sec-boolean-constructor">%Boolean%</a></emu-xref>
              </td>
              <td>
                <code>Boolean</code>
              </td>
              <td>
                The Boolean <emu-xref href="#constructor" id="_ref_1688"><a href="ecmascript-data-types-and-values.html#constructor">constructor</a></emu-xref> (<emu-xref href="#sec-boolean-constructor" id="_ref_130"><a href="fundamental-objects.html#sec-boolean-constructor">20.3.1</a></emu-xref>)
              </td>
            </tr>
            <tr>
              <td>
                <emu-xref href="#sec-dataview-constructor" id="_ref_1689"><a href="structured-data.html#sec-dataview-constructor">%DataView%</a></emu-xref>
              </td>
              <td>
                <code>DataView</code>
              </td>
              <td>
                The DataView <emu-xref href="#constructor" id="_ref_1690"><a href="ecmascript-data-types-and-values.html#constructor">constructor</a></emu-xref> (<emu-xref href="#sec-dataview-constructor" id="_ref_131"><a href="structured-data.html#sec-dataview-constructor">25.3.2</a></emu-xref>)
              </td>
            </tr>
            <tr>
              <td>
                <emu-xref href="#sec-date-constructor" id="_ref_1691"><a href="numbers-and-dates.html#sec-date-constructor">%Date%</a></emu-xref>
              </td>
              <td>
                <code>Date</code>
              </td>
              <td>
                The Date <emu-xref href="#constructor" id="_ref_1692"><a href="ecmascript-data-types-and-values.html#constructor">constructor</a></emu-xref> (<emu-xref href="#sec-date-constructor" id="_ref_132"><a href="numbers-and-dates.html#sec-date-constructor">21.4.2</a></emu-xref>)
              </td>
            </tr>
            <tr>
              <td>
                <emu-xref href="#sec-decodeuri-encodeduri" id="_ref_1693"><a href="global-object.html#sec-decodeuri-encodeduri">%decodeURI%</a></emu-xref>
              </td>
              <td>
                <code>decodeURI</code>
              </td>
              <td>
                The <code>decodeURI</code> function (<emu-xref href="#sec-decodeuri-encodeduri" id="_ref_133"><a href="global-object.html#sec-decodeuri-encodeduri">19.2.6.1</a></emu-xref>)
              </td>
            </tr>
            <tr>
              <td>
                <emu-xref href="#sec-decodeuricomponent-encodeduricomponent" id="_ref_1694"><a href="global-object.html#sec-decodeuricomponent-encodeduricomponent">%decodeURIComponent%</a></emu-xref>
              </td>
              <td>
                <code>decodeURIComponent</code>
              </td>
              <td>
                The <code>decodeURIComponent</code> function (<emu-xref href="#sec-decodeuricomponent-encodeduricomponent" id="_ref_134"><a href="global-object.html#sec-decodeuricomponent-encodeduricomponent">19.2.6.2</a></emu-xref>)
              </td>
            </tr>
            <tr>
              <td>
                <emu-xref href="#sec-encodeuri-uri" id="_ref_1695"><a href="global-object.html#sec-encodeuri-uri">%encodeURI%</a></emu-xref>
              </td>
              <td>
                <code>encodeURI</code>
              </td>
              <td>
                The <code>encodeURI</code> function (<emu-xref href="#sec-encodeuri-uri" id="_ref_135"><a href="global-object.html#sec-encodeuri-uri">19.2.6.3</a></emu-xref>)
              </td>
            </tr>
            <tr>
              <td>
                <emu-xref href="#sec-encodeuricomponent-uricomponent" id="_ref_1696"><a href="global-object.html#sec-encodeuricomponent-uricomponent">%encodeURIComponent%</a></emu-xref>
              </td>
              <td>
                <code>encodeURIComponent</code>
              </td>
              <td>
                The <code>encodeURIComponent</code> function (<emu-xref href="#sec-encodeuricomponent-uricomponent" id="_ref_136"><a href="global-object.html#sec-encodeuricomponent-uricomponent">19.2.6.4</a></emu-xref>)
              </td>
            </tr>
            <tr>
              <td>
                <emu-xref href="#sec-error-constructor" id="_ref_1697"><a href="fundamental-objects.html#sec-error-constructor">%Error%</a></emu-xref>
              </td>
              <td>
                <code>Error</code>
              </td>
              <td>
                The Error <emu-xref href="#constructor" id="_ref_1698"><a href="ecmascript-data-types-and-values.html#constructor">constructor</a></emu-xref> (<emu-xref href="#sec-error-constructor" id="_ref_137"><a href="fundamental-objects.html#sec-error-constructor">20.5.1</a></emu-xref>)
              </td>
            </tr>
            <tr>
              <td>
                <emu-xref href="#sec-eval-x" id="_ref_1699"><a href="global-object.html#sec-eval-x">%eval%</a></emu-xref>
              </td>
              <td>
                <code>eval</code>
              </td>
              <td>
                The <code>eval</code> function (<emu-xref href="#sec-eval-x" id="_ref_138"><a href="global-object.html#sec-eval-x">19.2.1</a></emu-xref>)
              </td>
            </tr>
            <tr>
              <td>
                <emu-xref href="#sec-native-error-types-used-in-this-standard-evalerror" id="_ref_1700"><a href="fundamental-objects.html#sec-native-error-types-used-in-this-standard-evalerror">%EvalError%</a></emu-xref>
              </td>
              <td>
                <code>EvalError</code>
              </td>
              <td>
                The EvalError <emu-xref href="#constructor" id="_ref_1701"><a href="ecmascript-data-types-and-values.html#constructor">constructor</a></emu-xref> (<emu-xref href="#sec-native-error-types-used-in-this-standard-evalerror" id="_ref_139"><a href="fundamental-objects.html#sec-native-error-types-used-in-this-standard-evalerror">20.5.5.1</a></emu-xref>)
              </td>
            </tr>
            <tr>
              <td>
                <emu-xref href="#sec-finalization-registry-constructor" id="_ref_1702"><a href="managing-memory.html#sec-finalization-registry-constructor">%FinalizationRegistry%</a></emu-xref>
              </td>
              <td>
                <code>FinalizationRegistry</code>
              </td>
              <td>
                The <emu-xref href="#sec-finalization-registry-constructor" id="_ref_1703"><a href="managing-memory.html#sec-finalization-registry-constructor">FinalizationRegistry</a></emu-xref> <emu-xref href="#constructor" id="_ref_1704"><a href="ecmascript-data-types-and-values.html#constructor">constructor</a></emu-xref> (<emu-xref href="#sec-finalization-registry-constructor" id="_ref_140"><a href="managing-memory.html#sec-finalization-registry-constructor">26.2.1</a></emu-xref>)
              </td>
            </tr>
            <tr>
              <td>
                <emu-xref href="#sec-typedarray-objects" id="_ref_1705"><a href="indexed-collections.html#sec-typedarray-objects">%Float16Array%</a></emu-xref>
              </td>
              <td>
                <code>Float16Array</code>
              </td>
              <td>
                The Float16Array <emu-xref href="#constructor" id="_ref_1706"><a href="ecmascript-data-types-and-values.html#constructor">constructor</a></emu-xref> (<emu-xref href="#sec-typedarray-objects" id="_ref_141"><a href="indexed-collections.html#sec-typedarray-objects">23.2</a></emu-xref>)
              </td>
            </tr>
            <tr>
              <td>
                <emu-xref href="#sec-typedarray-objects" id="_ref_1707"><a href="indexed-collections.html#sec-typedarray-objects">%Float32Array%</a></emu-xref>
              </td>
              <td>
                <code>Float32Array</code>
              </td>
              <td>
                The Float32Array <emu-xref href="#constructor" id="_ref_1708"><a href="ecmascript-data-types-and-values.html#constructor">constructor</a></emu-xref> (<emu-xref href="#sec-typedarray-objects" id="_ref_142"><a href="indexed-collections.html#sec-typedarray-objects">23.2</a></emu-xref>)
              </td>
            </tr>
            <tr>
              <td>
                <emu-xref href="#sec-typedarray-objects" id="_ref_1709"><a href="indexed-collections.html#sec-typedarray-objects">%Float64Array%</a></emu-xref>
              </td>
              <td>
                <code>Float64Array</code>
              </td>
              <td>
                The Float64Array <emu-xref href="#constructor" id="_ref_1710"><a href="ecmascript-data-types-and-values.html#constructor">constructor</a></emu-xref> (<emu-xref href="#sec-typedarray-objects" id="_ref_143"><a href="indexed-collections.html#sec-typedarray-objects">23.2</a></emu-xref>)
              </td>
            </tr>
            <tr>
              <td>
                <emu-xref href="#sec-%foriniteratorprototype%-object" id="_ref_1711"><a href="ecmascript-language-statements-and-declarations.html#sec-%foriniteratorprototype%-object">%ForInIteratorPrototype%</a></emu-xref>
              </td>
              <td>
              </td>
              <td>
                The prototype of <emu-xref href="#sec-for-in-iterator-objects" id="_ref_1712"><a href="ecmascript-language-statements-and-declarations.html#sec-for-in-iterator-objects">For-In Iterator objects</a></emu-xref> (<emu-xref href="#sec-for-in-iterator-objects" id="_ref_144"><a href="ecmascript-language-statements-and-declarations.html#sec-for-in-iterator-objects">14.7.5.10</a></emu-xref>)
              </td>
            </tr>
            <tr>
              <td>
                <emu-xref href="#sec-function-constructor" id="_ref_1713"><a href="fundamental-objects.html#sec-function-constructor">%Function%</a></emu-xref>
              </td>
              <td>
                <code>Function</code>
              </td>
              <td>
                The Function <emu-xref href="#constructor" id="_ref_1714"><a href="ecmascript-data-types-and-values.html#constructor">constructor</a></emu-xref> (<emu-xref href="#sec-function-constructor" id="_ref_145"><a href="fundamental-objects.html#sec-function-constructor">20.2.1</a></emu-xref>)
              </td>
            </tr>
            <tr>
              <td>
                <emu-xref href="#sec-generatorfunction-constructor" id="_ref_1715"><a href="control-abstraction-objects.html#sec-generatorfunction-constructor">%GeneratorFunction%</a></emu-xref>
              </td>
              <td>
              </td>
              <td>
                The <emu-xref href="#constructor" id="_ref_1716"><a href="ecmascript-data-types-and-values.html#constructor">constructor</a></emu-xref> of generator <emu-xref href="#function-object" id="_ref_1717"><a href="ecmascript-data-types-and-values.html#function-object">function objects</a></emu-xref> (<emu-xref href="#sec-generatorfunction-constructor" id="_ref_146"><a href="control-abstraction-objects.html#sec-generatorfunction-constructor">27.3.1</a></emu-xref>)
              </td>
            </tr>
            <tr>
              <td>
                <emu-xref href="#sec-properties-of-generator-prototype" id="_ref_1718"><a href="control-abstraction-objects.html#sec-properties-of-generator-prototype">%GeneratorPrototype%</a></emu-xref>
              </td>
              <td>
              </td>
              <td>
                The prototype of generator objects (<emu-xref href="#sec-generator-objects" id="_ref_147"><a href="control-abstraction-objects.html#sec-generator-objects">27.5</a></emu-xref>)
              </td>
            </tr>
            <tr>
              <td>
                <emu-xref href="#sec-typedarray-objects" id="_ref_1719"><a href="indexed-collections.html#sec-typedarray-objects">%Int8Array%</a></emu-xref>
              </td>
              <td>
                <code>Int8Array</code>
              </td>
              <td>
                The Int8Array <emu-xref href="#constructor" id="_ref_1720"><a href="ecmascript-data-types-and-values.html#constructor">constructor</a></emu-xref> (<emu-xref href="#sec-typedarray-objects" id="_ref_148"><a href="indexed-collections.html#sec-typedarray-objects">23.2</a></emu-xref>)
              </td>
            </tr>
            <tr>
              <td>
                <emu-xref href="#sec-typedarray-objects" id="_ref_1721"><a href="indexed-collections.html#sec-typedarray-objects">%Int16Array%</a></emu-xref>
              </td>
              <td>
                <code>Int16Array</code>
              </td>
              <td>
                The Int16Array <emu-xref href="#constructor" id="_ref_1722"><a href="ecmascript-data-types-and-values.html#constructor">constructor</a></emu-xref> (<emu-xref href="#sec-typedarray-objects" id="_ref_149"><a href="indexed-collections.html#sec-typedarray-objects">23.2</a></emu-xref>)
              </td>
            </tr>
            <tr>
              <td>
                <emu-xref href="#sec-typedarray-objects" id="_ref_1723"><a href="indexed-collections.html#sec-typedarray-objects">%Int32Array%</a></emu-xref>
              </td>
              <td>
                <code>Int32Array</code>
              </td>
              <td>
                The Int32Array <emu-xref href="#constructor" id="_ref_1724"><a href="ecmascript-data-types-and-values.html#constructor">constructor</a></emu-xref> (<emu-xref href="#sec-typedarray-objects" id="_ref_150"><a href="indexed-collections.html#sec-typedarray-objects">23.2</a></emu-xref>)
              </td>
            </tr>
            <tr>
              <td>
                <emu-xref href="#sec-isfinite-number" id="_ref_1725"><a href="global-object.html#sec-isfinite-number">%isFinite%</a></emu-xref>
              </td>
              <td>
                <code>isFinite</code>
              </td>
              <td>
                The <code>isFinite</code> function (<emu-xref href="#sec-isfinite-number" id="_ref_151"><a href="global-object.html#sec-isfinite-number">19.2.2</a></emu-xref>)
              </td>
            </tr>
            <tr>
              <td>
                <emu-xref href="#sec-isnan-number" id="_ref_1726"><a href="global-object.html#sec-isnan-number">%isNaN%</a></emu-xref>
              </td>
              <td>
                <code>isNaN</code>
              </td>
              <td>
                The <code>isNaN</code> function (<emu-xref href="#sec-isnan-number" id="_ref_152"><a href="global-object.html#sec-isnan-number">19.2.3</a></emu-xref>)
              </td>
            </tr>
            <tr>
              <td>
                <emu-xref href="#sec-iterator-constructor" id="_ref_1727"><a href="control-abstraction-objects.html#sec-iterator-constructor">%Iterator%</a></emu-xref>
              </td>
              <td>
                <code>Iterator</code>
              </td>
              <td>
                The <code>Iterator</code> <emu-xref href="#constructor" id="_ref_1728"><a href="ecmascript-data-types-and-values.html#constructor">constructor</a></emu-xref> (<emu-xref href="#sec-iterator-constructor" id="_ref_153"><a href="control-abstraction-objects.html#sec-iterator-constructor">27.1.3.1</a></emu-xref>)
              </td>
            </tr>
            <tr>
              <td>
                <emu-xref href="#sec-%iteratorhelperprototype%-object" id="_ref_1729"><a href="control-abstraction-objects.html#sec-%iteratorhelperprototype%-object">%IteratorHelperPrototype%</a></emu-xref>
              </td>
              <td>
              </td>
              <td>
                The prototype of <emu-xref href="#sec-iterator-helper-objects" id="_ref_1730"><a href="control-abstraction-objects.html#sec-iterator-helper-objects">Iterator Helper objects</a></emu-xref> (<emu-xref href="#sec-%iteratorhelperprototype%-object" id="_ref_154"><a href="control-abstraction-objects.html#sec-%iteratorhelperprototype%-object">27.1.2.1</a></emu-xref>)
              </td>
            </tr>
            <tr>
              <td>
                <emu-xref href="#sec-json-object" id="_ref_1731"><a href="structured-data.html#sec-json-object">%JSON%</a></emu-xref>
              </td>
              <td>
                <code>JSON</code>
              </td>
              <td>
                The <code>JSON</code> object (<emu-xref href="#sec-json-object" id="_ref_155"><a href="structured-data.html#sec-json-object">25.5</a></emu-xref>)
              </td>
            </tr>
            <tr>
              <td>
                <emu-xref href="#sec-map-constructor" id="_ref_1732"><a href="keyed-collections.html#sec-map-constructor">%Map%</a></emu-xref>
              </td>
              <td>
                <code>Map</code>
              </td>
              <td>
                The Map <emu-xref href="#constructor" id="_ref_1733"><a href="ecmascript-data-types-and-values.html#constructor">constructor</a></emu-xref> (<emu-xref href="#sec-map-constructor" id="_ref_156"><a href="keyed-collections.html#sec-map-constructor">24.1.1</a></emu-xref>)
              </td>
            </tr>
            <tr>
              <td>
                <emu-xref href="#sec-%mapiteratorprototype%-object" id="_ref_1734"><a href="keyed-collections.html#sec-%mapiteratorprototype%-object">%MapIteratorPrototype%</a></emu-xref>
              </td>
              <td>
              </td>
              <td>
                The prototype of <emu-xref href="#sec-map-iterator-objects" id="_ref_1735"><a href="keyed-collections.html#sec-map-iterator-objects">Map Iterator objects</a></emu-xref> (<emu-xref href="#sec-map-iterator-objects" id="_ref_157"><a href="keyed-collections.html#sec-map-iterator-objects">24.1.5</a></emu-xref>)
              </td>
            </tr>
            <tr>
              <td>
                <emu-xref href="#sec-math-object" id="_ref_1736"><a href="numbers-and-dates.html#sec-math-object">%Math%</a></emu-xref>
              </td>
              <td>
                <code>Math</code>
              </td>
              <td>
                The <code>Math</code> object (<emu-xref href="#sec-math-object" id="_ref_158"><a href="numbers-and-dates.html#sec-math-object">21.3</a></emu-xref>)
              </td>
            </tr>
            <tr>
              <td>
                <emu-xref href="#sec-number-constructor" id="_ref_1737"><a href="numbers-and-dates.html#sec-number-constructor">%Number%</a></emu-xref>
              </td>
              <td>
                <code>Number</code>
              </td>
              <td>
                The Number <emu-xref href="#constructor" id="_ref_1738"><a href="ecmascript-data-types-and-values.html#constructor">constructor</a></emu-xref> (<emu-xref href="#sec-number-constructor" id="_ref_159"><a href="numbers-and-dates.html#sec-number-constructor">21.1.1</a></emu-xref>)
              </td>
            </tr>
            <tr>
              <td>
                <emu-xref href="#sec-object-constructor" id="_ref_1739"><a href="fundamental-objects.html#sec-object-constructor">%Object%</a></emu-xref>
              </td>
              <td>
                <code>Object</code>
              </td>
              <td>
                The Object <emu-xref href="#constructor" id="_ref_1740"><a href="ecmascript-data-types-and-values.html#constructor">constructor</a></emu-xref> (<emu-xref href="#sec-object-constructor" id="_ref_160"><a href="fundamental-objects.html#sec-object-constructor">20.1.1</a></emu-xref>)
              </td>
            </tr>
            <tr>
              <td>
                <emu-xref href="#sec-parsefloat-string" id="_ref_1741"><a href="global-object.html#sec-parsefloat-string">%parseFloat%</a></emu-xref>
              </td>
              <td>
                <code>parseFloat</code>
              </td>
              <td>
                The <code>parseFloat</code> function (<emu-xref href="#sec-parsefloat-string" id="_ref_161"><a href="global-object.html#sec-parsefloat-string">19.2.4</a></emu-xref>)
              </td>
            </tr>
            <tr>
              <td>
                <emu-xref href="#sec-parseint-string-radix" id="_ref_1742"><a href="global-object.html#sec-parseint-string-radix">%parseInt%</a></emu-xref>
              </td>
              <td>
                <code>parseInt</code>
              </td>
              <td>
                The <code>parseInt</code> function (<emu-xref href="#sec-parseint-string-radix" id="_ref_162"><a href="global-object.html#sec-parseint-string-radix">19.2.5</a></emu-xref>)
              </td>
            </tr>
            <tr>
              <td>
                <emu-xref href="#sec-promise-constructor" id="_ref_1743"><a href="control-abstraction-objects.html#sec-promise-constructor">%Promise%</a></emu-xref>
              </td>
              <td>
                <code>Promise</code>
              </td>
              <td>
                The Promise <emu-xref href="#constructor" id="_ref_1744"><a href="ecmascript-data-types-and-values.html#constructor">constructor</a></emu-xref> (<emu-xref href="#sec-promise-constructor" id="_ref_163"><a href="control-abstraction-objects.html#sec-promise-constructor">27.2.3</a></emu-xref>)
              </td>
            </tr>
            <tr>
              <td>
                <emu-xref href="#sec-proxy-constructor" id="_ref_1745"><a href="reflection.html#sec-proxy-constructor">%Proxy%</a></emu-xref>
              </td>
              <td>
                <code>Proxy</code>
              </td>
              <td>
                The Proxy <emu-xref href="#constructor" id="_ref_1746"><a href="ecmascript-data-types-and-values.html#constructor">constructor</a></emu-xref> (<emu-xref href="#sec-proxy-constructor" id="_ref_164"><a href="reflection.html#sec-proxy-constructor">28.2.1</a></emu-xref>)
              </td>
            </tr>
            <tr>
              <td>
                <emu-xref href="#sec-native-error-types-used-in-this-standard-rangeerror" id="_ref_1747"><a href="fundamental-objects.html#sec-native-error-types-used-in-this-standard-rangeerror">%RangeError%</a></emu-xref>
              </td>
              <td>
                <code>RangeError</code>
              </td>
              <td>
                The RangeError <emu-xref href="#constructor" id="_ref_1748"><a href="ecmascript-data-types-and-values.html#constructor">constructor</a></emu-xref> (<emu-xref href="#sec-native-error-types-used-in-this-standard-rangeerror" id="_ref_165"><a href="fundamental-objects.html#sec-native-error-types-used-in-this-standard-rangeerror">20.5.5.2</a></emu-xref>)
              </td>
            </tr>
            <tr>
              <td>
                <emu-xref href="#sec-native-error-types-used-in-this-standard-referenceerror" id="_ref_1749"><a href="fundamental-objects.html#sec-native-error-types-used-in-this-standard-referenceerror">%ReferenceError%</a></emu-xref>
              </td>
              <td>
                <code>ReferenceError</code>
              </td>
              <td>
                The ReferenceError <emu-xref href="#constructor" id="_ref_1750"><a href="ecmascript-data-types-and-values.html#constructor">constructor</a></emu-xref> (<emu-xref href="#sec-native-error-types-used-in-this-standard-referenceerror" id="_ref_166"><a href="fundamental-objects.html#sec-native-error-types-used-in-this-standard-referenceerror">20.5.5.3</a></emu-xref>)
              </td>
            </tr>
            <tr>
              <td>
                <emu-xref href="#sec-reflect-object" id="_ref_1751"><a href="reflection.html#sec-reflect-object">%Reflect%</a></emu-xref>
              </td>
              <td>
                <code>Reflect</code>
              </td>
              <td>
                The <code>Reflect</code> object (<emu-xref href="#sec-reflect-object" id="_ref_167"><a href="reflection.html#sec-reflect-object">28.1</a></emu-xref>)
              </td>
            </tr>
            <tr>
              <td>
                <emu-xref href="#sec-regexp-constructor" id="_ref_1752"><a href="text-processing.html#sec-regexp-constructor">%RegExp%</a></emu-xref>
              </td>
              <td>
                <code>RegExp</code>
              </td>
              <td>
                The RegExp <emu-xref href="#constructor" id="_ref_1753"><a href="ecmascript-data-types-and-values.html#constructor">constructor</a></emu-xref> (<emu-xref href="#sec-regexp-constructor" id="_ref_168"><a href="text-processing.html#sec-regexp-constructor">22.2.4</a></emu-xref>)
              </td>
            </tr>
            <tr>
              <td>
                <emu-xref href="#sec-%regexpstringiteratorprototype%-object" id="_ref_1754"><a href="text-processing.html#sec-%regexpstringiteratorprototype%-object">%RegExpStringIteratorPrototype%</a></emu-xref>
              </td>
              <td>
              </td>
              <td>
                The prototype of <emu-xref href="#sec-regexp-string-iterator-objects" id="_ref_1755"><a href="text-processing.html#sec-regexp-string-iterator-objects">RegExp String Iterator objects</a></emu-xref> (<emu-xref href="#sec-regexp-string-iterator-objects" id="_ref_169"><a href="text-processing.html#sec-regexp-string-iterator-objects">22.2.9</a></emu-xref>)
              </td>
            </tr>
            <tr>
              <td>
                <emu-xref href="#sec-set-constructor" id="_ref_1756"><a href="keyed-collections.html#sec-set-constructor">%Set%</a></emu-xref>
              </td>
              <td>
                <code>Set</code>
              </td>
              <td>
                The Set <emu-xref href="#constructor" id="_ref_1757"><a href="ecmascript-data-types-and-values.html#constructor">constructor</a></emu-xref> (<emu-xref href="#sec-set-constructor" id="_ref_170"><a href="keyed-collections.html#sec-set-constructor">24.2.2</a></emu-xref>)
              </td>
            </tr>
            <tr>
              <td>
                <emu-xref href="#sec-%setiteratorprototype%-object" id="_ref_1758"><a href="keyed-collections.html#sec-%setiteratorprototype%-object">%SetIteratorPrototype%</a></emu-xref>
              </td>
              <td>
              </td>
              <td>
                The prototype of <emu-xref href="#sec-set-iterator-objects" id="_ref_1759"><a href="keyed-collections.html#sec-set-iterator-objects">Set Iterator objects</a></emu-xref> (<emu-xref href="#sec-set-iterator-objects" id="_ref_171"><a href="keyed-collections.html#sec-set-iterator-objects">24.2.6</a></emu-xref>)
              </td>
            </tr>
            <tr>
              <td>
                <emu-xref href="#sec-sharedarraybuffer-constructor" id="_ref_1760"><a href="structured-data.html#sec-sharedarraybuffer-constructor">%SharedArrayBuffer%</a></emu-xref>
              </td>
              <td>
                <code>SharedArrayBuffer</code>
              </td>
              <td>
                The SharedArrayBuffer <emu-xref href="#constructor" id="_ref_1761"><a href="ecmascript-data-types-and-values.html#constructor">constructor</a></emu-xref> (<emu-xref href="#sec-sharedarraybuffer-constructor" id="_ref_172"><a href="structured-data.html#sec-sharedarraybuffer-constructor">25.2.3</a></emu-xref>)
              </td>
            </tr>
            <tr>
              <td>
                <emu-xref href="#sec-string-constructor" id="_ref_1762"><a href="text-processing.html#sec-string-constructor">%String%</a></emu-xref>
              </td>
              <td>
                <code>String</code>
              </td>
              <td>
                The String <emu-xref href="#constructor" id="_ref_1763"><a href="ecmascript-data-types-and-values.html#constructor">constructor</a></emu-xref> (<emu-xref href="#sec-string-constructor" id="_ref_173"><a href="text-processing.html#sec-string-constructor">22.1.1</a></emu-xref>)
              </td>
            </tr>
            <tr>
              <td>
                <emu-xref href="#sec-%stringiteratorprototype%-object" id="_ref_1764"><a href="text-processing.html#sec-%stringiteratorprototype%-object">%StringIteratorPrototype%</a></emu-xref>
              </td>
              <td>
              </td>
              <td>
                The prototype of <emu-xref href="#sec-string-iterator-objects" id="_ref_1765"><a href="text-processing.html#sec-string-iterator-objects">String Iterator objects</a></emu-xref> (<emu-xref href="#sec-string-iterator-objects" id="_ref_174"><a href="text-processing.html#sec-string-iterator-objects">22.1.5</a></emu-xref>)
              </td>
            </tr>
            <tr>
              <td>
                <emu-xref href="#sec-symbol-constructor" id="_ref_1766"><a href="fundamental-objects.html#sec-symbol-constructor">%Symbol%</a></emu-xref>
              </td>
              <td>
                <code>Symbol</code>
              </td>
              <td>
                The Symbol <emu-xref href="#constructor" id="_ref_1767"><a href="ecmascript-data-types-and-values.html#constructor">constructor</a></emu-xref> (<emu-xref href="#sec-symbol-constructor" id="_ref_175"><a href="fundamental-objects.html#sec-symbol-constructor">20.4.1</a></emu-xref>)
              </td>
            </tr>
            <tr>
              <td>
                <emu-xref href="#sec-native-error-types-used-in-this-standard-syntaxerror" id="_ref_1768"><a href="fundamental-objects.html#sec-native-error-types-used-in-this-standard-syntaxerror">%SyntaxError%</a></emu-xref>
              </td>
              <td>
                <code>SyntaxError</code>
              </td>
              <td>
                The SyntaxError <emu-xref href="#constructor" id="_ref_1769"><a href="ecmascript-data-types-and-values.html#constructor">constructor</a></emu-xref> (<emu-xref href="#sec-native-error-types-used-in-this-standard-syntaxerror" id="_ref_176"><a href="fundamental-objects.html#sec-native-error-types-used-in-this-standard-syntaxerror">20.5.5.4</a></emu-xref>)
              </td>
            </tr>
            <tr>
              <td>
                <emu-xref href="#sec-%throwtypeerror%" id="_ref_1770"><a href="ordinary-and-exotic-objects-behaviours.html#sec-%throwtypeerror%">%ThrowTypeError%</a></emu-xref>
              </td>
              <td>
              </td>
              <td>
                A <emu-xref href="#function-object" id="_ref_1771"><a href="ecmascript-data-types-and-values.html#function-object">function object</a></emu-xref> that unconditionally throws a new instance of <emu-xref href="#sec-native-error-types-used-in-this-standard-typeerror" id="_ref_1772"><a href="fundamental-objects.html#sec-native-error-types-used-in-this-standard-typeerror">%TypeError%</a></emu-xref>
              </td>
            </tr>
            <tr>
              <td>
                <emu-xref href="#sec-%typedarray%-intrinsic-object" id="_ref_1773"><a href="indexed-collections.html#sec-%typedarray%-intrinsic-object">%TypedArray%</a></emu-xref>
              </td>
              <td>
              </td>
              <td>
                The super class of all typed Array <emu-xref href="#constructor" id="_ref_1774"><a href="ecmascript-data-types-and-values.html#constructor">constructors</a></emu-xref> (<emu-xref href="#sec-%typedarray%-intrinsic-object" id="_ref_177"><a href="indexed-collections.html#sec-%typedarray%-intrinsic-object">23.2.1</a></emu-xref>)
              </td>
            </tr>
            <tr>
              <td>
                <emu-xref href="#sec-native-error-types-used-in-this-standard-typeerror" id="_ref_1775"><a href="fundamental-objects.html#sec-native-error-types-used-in-this-standard-typeerror">%TypeError%</a></emu-xref>
              </td>
              <td>
                <code>TypeError</code>
              </td>
              <td>
                The TypeError <emu-xref href="#constructor" id="_ref_1776"><a href="ecmascript-data-types-and-values.html#constructor">constructor</a></emu-xref> (<emu-xref href="#sec-native-error-types-used-in-this-standard-typeerror" id="_ref_178"><a href="fundamental-objects.html#sec-native-error-types-used-in-this-standard-typeerror">20.5.5.5</a></emu-xref>)
              </td>
            </tr>
            <tr>
              <td>
                <emu-xref href="#sec-typedarray-objects" id="_ref_1777"><a href="indexed-collections.html#sec-typedarray-objects">%Uint8Array%</a></emu-xref>
              </td>
              <td>
                <code>Uint8Array</code>
              </td>
              <td>
                The Uint8Array <emu-xref href="#constructor" id="_ref_1778"><a href="ecmascript-data-types-and-values.html#constructor">constructor</a></emu-xref> (<emu-xref href="#sec-typedarray-objects" id="_ref_179"><a href="indexed-collections.html#sec-typedarray-objects">23.2</a></emu-xref>)
              </td>
            </tr>
            <tr>
              <td>
                <emu-xref href="#sec-typedarray-objects" id="_ref_1779"><a href="indexed-collections.html#sec-typedarray-objects">%Uint8ClampedArray%</a></emu-xref>
              </td>
              <td>
                <code>Uint8ClampedArray</code>
              </td>
              <td>
                The Uint8ClampedArray <emu-xref href="#constructor" id="_ref_1780"><a href="ecmascript-data-types-and-values.html#constructor">constructor</a></emu-xref> (<emu-xref href="#sec-typedarray-objects" id="_ref_180"><a href="indexed-collections.html#sec-typedarray-objects">23.2</a></emu-xref>)
              </td>
            </tr>
            <tr>
              <td>
                <emu-xref href="#sec-typedarray-objects" id="_ref_1781"><a href="indexed-collections.html#sec-typedarray-objects">%Uint16Array%</a></emu-xref>
              </td>
              <td>
                <code>Uint16Array</code>
              </td>
              <td>
                The Uint16Array <emu-xref href="#constructor" id="_ref_1782"><a href="ecmascript-data-types-and-values.html#constructor">constructor</a></emu-xref> (<emu-xref href="#sec-typedarray-objects" id="_ref_181"><a href="indexed-collections.html#sec-typedarray-objects">23.2</a></emu-xref>)
              </td>
            </tr>
            <tr>
              <td>
                <emu-xref href="#sec-typedarray-objects" id="_ref_1783"><a href="indexed-collections.html#sec-typedarray-objects">%Uint32Array%</a></emu-xref>
              </td>
              <td>
                <code>Uint32Array</code>
              </td>
              <td>
                The Uint32Array <emu-xref href="#constructor" id="_ref_1784"><a href="ecmascript-data-types-and-values.html#constructor">constructor</a></emu-xref> (<emu-xref href="#sec-typedarray-objects" id="_ref_182"><a href="indexed-collections.html#sec-typedarray-objects">23.2</a></emu-xref>)
              </td>
            </tr>
            <tr>
              <td>
                <emu-xref href="#sec-native-error-types-used-in-this-standard-urierror" id="_ref_1785"><a href="fundamental-objects.html#sec-native-error-types-used-in-this-standard-urierror">%URIError%</a></emu-xref>
              </td>
              <td>
                <code>URIError</code>
              </td>
              <td>
                The URIError <emu-xref href="#constructor" id="_ref_1786"><a href="ecmascript-data-types-and-values.html#constructor">constructor</a></emu-xref> (<emu-xref href="#sec-native-error-types-used-in-this-standard-urierror" id="_ref_183"><a href="fundamental-objects.html#sec-native-error-types-used-in-this-standard-urierror">20.5.5.6</a></emu-xref>)
              </td>
            </tr>
            <tr>
              <td>
                <emu-xref href="#sec-weakmap-constructor" id="_ref_1787"><a href="keyed-collections.html#sec-weakmap-constructor">%WeakMap%</a></emu-xref>
              </td>
              <td>
                <code>WeakMap</code>
              </td>
              <td>
                The WeakMap <emu-xref href="#constructor" id="_ref_1788"><a href="ecmascript-data-types-and-values.html#constructor">constructor</a></emu-xref> (<emu-xref href="#sec-weakmap-constructor" id="_ref_184"><a href="keyed-collections.html#sec-weakmap-constructor">24.3.1</a></emu-xref>)
              </td>
            </tr>
            <tr>
              <td>
                <emu-xref href="#sec-weak-ref-constructor" id="_ref_1789"><a href="managing-memory.html#sec-weak-ref-constructor">%WeakRef%</a></emu-xref>
              </td>
              <td>
                <code>WeakRef</code>
              </td>
              <td>
                The <emu-xref href="#sec-weak-ref-constructor" id="_ref_1790"><a href="managing-memory.html#sec-weak-ref-constructor">WeakRef</a></emu-xref> <emu-xref href="#constructor" id="_ref_1791"><a href="ecmascript-data-types-and-values.html#constructor">constructor</a></emu-xref> (<emu-xref href="#sec-weak-ref-constructor" id="_ref_185"><a href="managing-memory.html#sec-weak-ref-constructor">26.1.1</a></emu-xref>)
              </td>
            </tr>
            <tr>
              <td>
                <emu-xref href="#sec-weakset-constructor" id="_ref_1792"><a href="keyed-collections.html#sec-weakset-constructor">%WeakSet%</a></emu-xref>
              </td>
              <td>
                <code>WeakSet</code>
              </td>
              <td>
                The WeakSet <emu-xref href="#constructor" id="_ref_1793"><a href="ecmascript-data-types-and-values.html#constructor">constructor</a></emu-xref> (<emu-xref href="#sec-weakset-constructor" id="_ref_186"><a href="keyed-collections.html#sec-weakset-constructor">24.4.1</a></emu-xref>)
              </td>
            </tr>
            <tr>
              <td>
                <emu-xref href="#sec-%wrapforvaliditeratorprototype%-object" id="_ref_1794"><a href="control-abstraction-objects.html#sec-%wrapforvaliditeratorprototype%-object">%WrapForValidIteratorPrototype%</a></emu-xref>
              </td>
              <td>
              </td>
              <td>
                The prototype of wrapped <emu-xref href="#sec-iterator-interface" id="_ref_1795"><a href="control-abstraction-objects.html#sec-iterator-interface">iterator objects</a></emu-xref> returned by Iterator.from (<emu-xref href="#sec-%wrapforvaliditeratorprototype%-object" id="_ref_187"><a href="control-abstraction-objects.html#sec-%wrapforvaliditeratorprototype%-object">27.1.3.2.2.1</a></emu-xref>)
              </td>
            </tr>
          </tbody></table>
        </figure></emu-table>
        <emu-note><span class="note">Note</span><div class="note-contents">
          <p>Additional entries in <emu-xref href="#table-additional-well-known-intrinsic-objects" id="_ref_188"><a href="additional-ecmascript-features-for-web-browsers.html#table-additional-well-known-intrinsic-objects">Table 98</a></emu-xref>.</p>
        </div></emu-note>
      </emu-clause>
    </emu-clause>
  </emu-clause>
  </div>
</div>