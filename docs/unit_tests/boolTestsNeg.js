var boolTestsNeg = {};
boolTestsNeg._spec = {
	  title : 'Negative Boolean Return'
	, id    : 'boolTestsNeg'
	, note  : 'These are all tests the expect functions to return boolean false. Not everything should have a negative test.'
};

/* *****************************************************************************
* The Tests
***************************************************************************** */
boolTestsNeg['arr'] = [
	  [ [ [] ] /*args*/, false /*expect*/, 'Empty Array' ]
	, [ [ new Array() ] /*args*/, false /*expect*/, 'Empty new Array()' ]
	, [ [ {} ] /*args*/, false /*expect*/, 'Empty inline shorthand object' ]
	, [ [ { a : 2 } ] /*args*/, false /*expect*/, 'Non-empty inline shorthand object' ]
	, [ [ false ] /*args*/, false /*expect*/, 'Boolean false' ]
	, [ [ true ] /*args*/, false /*expect*/, 'Boolean true' ]
	, [ [ null ] /*args*/, false /*expect*/, 'NULL' ]
	, [ [ undefined ] /*args*/, false /*expect*/, 'undefined proper' ]
];
boolTestsNeg['bool'] = [
	  [ [ 'true' ] /*args*/, false /*expect*/, 'String &quot;true&quot;' /*note*/ ]
	, [ [ 'false' ] /*args*/, false /*expect*/, 'String &quot;false&quot;' ]
	, [ [ 0 ] /*args*/, false /*expect*/, 'number 0' ]
	, [ [ '0' ] /*args*/, false /*expect*/, 'string &quot;0&quot;' ]
	, [ [ 1 ] /*args*/, false /*expect*/, 'number 1' ]
	, [ [ '1' ] /*args*/, false /*expect*/, 'string &quot;1&quot;' ]
	, [ [ null ] /*args*/, false /*expect*/, 'NULL' ]
	, [ [ undefined ] /*args*/, false /*expect*/, 'undefined proper' ]
];
boolTestsNeg['clone'] = [
	  [ [ false ] /*args*/, false /*expect*/, 'false' /*note*/ ]
];
boolTestsNeg['date'] = [
	  [ [ {} ] /*args*/, false /*expect*/, 'Empty inline shorthand object' ]
	, [ [ null ] /*args*/, false /*expect*/, 'NULL' ]
	, [ [ undefined ] /*args*/, false /*expect*/, 'undefined proper' ]
];
boolTestsNeg['float'] = [
	  [ [ 0 ] /*args*/, false /*expect*/, 'number 0' ]
	, [ [ '0' ] /*args*/, false /*expect*/, 'string &quot;0&quot;' ]
	, [ [ 0.0 ] /*args*/, false /*expect*/, 'number 0.0' ]
	, [ [ '0.0' ] /*args*/, false /*expect*/, 'string &quot;0.0&quot;' ]
	, [ [ -1 ] /*args*/, false /*expect*/, 'number -1' ]
	, [ [ '-1' ] /*args*/, false /*expect*/, 'string &quot;-1&quot;' ]
	, [ [ 0, false ] /*args*/, false /*expect*/, 'number 0, zero or below not allowed' ]
	, [ [ '0', false ] /*args*/, false /*expect*/, 'string &quot;0&quot;, zero or below not allowed' ]
	, [ [ 0.0, false ] /*args*/, false /*expect*/, 'number 0.0, zero or below not allowed' ]
	, [ [ '0.0', false ] /*args*/, false /*expect*/, 'string &quot;0.0&quot;, zero or below not allowed' ]
	, [ [ -1, false ] /*args*/, false /*expect*/, 'number -1, zero or below not allowed' ]
	, [ [ '-1', false ] /*args*/, false /*expect*/, 'string &quot;-1&quot;, zero or below not allowed' ]
	, [ [ 'A1' ] /*args*/, false /*expect*/, 'string &quot;A1&quot;' ]
	, [ [ false ] /*args*/, false /*expect*/, 'Boolean false' ]
	, [ [ true ] /*args*/, false /*expect*/, 'Boolean true' ]
	, [ [ null ] /*args*/, false /*expect*/, 'NULL' ]
	, [ [ undefined ] /*args*/, false /*expect*/, 'undefined proper' ]
];
boolTestsNeg['func'] = [
	  [ [] /*args*/, false /*expect*/, 'Empty args' ]
	, [ [ document.location.protocol ] /*args*/, false /*expect*/, 'Native variable document.location.protocol' ]
	, [ [ 'crud' ] /*args*/, false /*expect*/, 'String "crud"' ]
];
boolTestsNeg['host'] = [
	  [ [ 'crud' ] /*args*/, false /*expect*/, 'String "crud"' ]
	, [ [ document.location.href ] /*args*/, false /*expect*/, 'Native variable document.location.href' ]
];
boolTestsNeg['int'] = [
	  [ [ 'a' ] /*args*/, false /*expect*/, 'String \'a\'' ]
	, [ [ 1.25 ] /*args*/, false /*expect*/, 'float 1.25' ]
];
boolTestsNeg['ip'] = [
	  [ [] /*args*/, false /*expect*/, 'empty args' ]
	, [ [ '127:0:0:1' ] /*args*/, false /*expect*/, 'localhost - wrong delims' ]
	, [ [ '2001:0db8:85a3:0000:0000:8a2e:0370:7334' ] /*args*/, false /*expect*/, 'ipv6 \'2001:0db8:85a3:0000:0000:8a2e:0370:7334\' without flag' ]
];
boolTestsNeg['isadog'] = [
	  [ [ '/things/' ] /*args*/, false /*expect*/, 'string \'/things/\'' ]
	, [ [ '' ] /*args*/, false /*expect*/, 'empty string \'\'' ]
];
boolTestsNeg['isjson'] = [
	  [ [ 'things' ] /*args*/, false /*expect*/, 'string \'things\'' ]
	, [ [ '' ] /*args*/, false /*expect*/, 'empty string \'\'' ]
];
boolTestsNeg['num'] = [
	  [ [ 0 ] /*args*/, false /*expect*/, 'number 0' ]
	, [ [ '0' ] /*args*/, false /*expect*/, 'string &quot;0&quot;' ]
	, [ [ 0.0 ] /*args*/, false /*expect*/, 'number 0.0' ]
	, [ [ '0.0' ] /*args*/, false /*expect*/, 'string &quot;0.0&quot;' ]
	, [ [ -1 ] /*args*/, false /*expect*/, 'number -1' ]
	, [ [ '-1' ] /*args*/, false /*expect*/, 'string &quot;-1&quot;' ]
	, [ [ 0, false ] /*args*/, false /*expect*/, 'number 0, zero or below not allowed' ]
	, [ [ '0', false ] /*args*/, false /*expect*/, 'string &quot;0&quot;, zero or below not allowed' ]
	, [ [ 0.0, false ] /*args*/, false /*expect*/, 'number 0.0, zero or below not allowed' ]
	, [ [ '0.0', false ] /*args*/, false /*expect*/, 'string &quot;0.0&quot;, zero or below not allowed' ]
	, [ [ -1, false ] /*args*/, false /*expect*/, 'number -1, zero or below not allowed' ]
	, [ [ '-1', false ] /*args*/, false /*expect*/, 'string &quot;-1&quot;, zero or below not allowed' ]
	, [ [ 'A1' ] /*args*/, false /*expect*/, 'string &quot;A1&quot;' ]
	, [ [ false ] /*args*/, false /*expect*/, 'Boolean false' ]
	, [ [ true ] /*args*/, false /*expect*/, 'Boolean true' ]
	, [ [ null ] /*args*/, false /*expect*/, 'NULL' ]
	, [ [ undefined ] /*args*/, false /*expect*/, 'undefined proper' ]
];
boolTestsNeg['obj'] = [
	  [ [ {}, true ] /*args*/, false /*expect*/, 'Empty shorthand (&quot;{}&quot;) object required non-empty' ]
];
boolTestsNeg['node'] = [
	  [ [] /*args*/, false /*expect*/, 'Not in node...' ]
];
boolTestsNeg['str'] = [
	  [ [ {} ] /*args*/, false /*expect*/, 'Empty shorthand (&quot;{}&quot;) object' ]
];
boolTestsNeg['serial'] = [
	  [ [] /*args*/, false /*expect*/, 'empty parameters' ]
	, [ [ {} ] /*args*/, false /*expect*/, 'Empty shorthand (&quot;{}&quot;) object' ]
	, [ [ '' ] /*args*/, false /*expect*/, 'Empty string \'\'' ]
];
boolTestsNeg['trueish'] = [
	  [ [ 0 ] /*args*/, false /*expect*/, 'Integer 0' ]
	, [ [ '0' ] /*args*/, false /*expect*/, 'String &quot;0&quot;' ]
	, [ [ 'off' ] /*args*/, false /*expect*/, 'String &quot;off&quot;' ]
	, [ [ 'Off' ] /*args*/, false /*expect*/, 'String &quot;Off&quot;' ]
	, [ [ 'OFF' ] /*args*/, false /*expect*/, 'String &quot;OFF&quot;' ]
	, [ [ false ] /*args*/, false /*expect*/, 'Boolean false' ]
	, [ [ 'false' ] /*args*/, false /*expect*/, 'String &quot;false&quot;' ]
	, [ [ 'False' ] /*args*/, false /*expect*/, 'String &quot;False&quot;' ]
	, [ [ 'FALSE' ] /*args*/, false /*expect*/, 'String &quot;FALSE&quot;' ]
	, [ [ 'nay' ] /*args*/, false /*expect*/, 'String &quot;yar&quot;' ]
	, [ [ 'Nay' ] /*args*/, false /*expect*/, 'String &quot;Nay&quot;' ]
	, [ [ 'NAY' ] /*args*/, false /*expect*/, 'String &quot;NAY&quot;' ]
	, [ [ 'no' ] /*args*/, false /*expect*/, 'String &quot;no&quot;' ]
	, [ [ 'No' ] /*args*/, false /*expect*/, 'String &quot;No&quot;' ]
	, [ [ 'NO' ] /*args*/, false /*expect*/, 'String &quot;NO&quot;' ]
	, [ [ [] ] /*args*/, false /*expect*/, 'Empty shorthand (&quot;[]&quot;) Array' ]
	, [ [ {} ] /*args*/, false /*expect*/, 'Empty shorthand (&quot;{}&quot;) object' ]
];
boolTestsNeg['typeis'] = [
	  [ [ new Array(), 'String' ] /*args*/, false /*expect*/, 'new Array() is \'String\'' ]
];
boolTestsNeg['typeis'] = [
	  [ [ new Array(), 'String' ] /*args*/, false /*expect*/, 'new Array() is \'String\'' ]
	, [ [ '', 'undefined' ] /*args*/, false /*expect*/, 'empty string \'\' is \'undefined\'' ]
	, [ [ '', 'string' ] /*args*/, false /*expect*/, 'empty string \'\' is \'string\' (case sensitive)' ]
];
boolTestsNeg['wild'] = [
	  [ [ 'foo', 'baz*' ] /*args*/, false /*expect*/, 'strings \'foo\' and \'baz\'' ]
	, [ [ 'fo', 'foo*' ] /*args*/, false /*expect*/, 'strings \'fo\' and \'foo*\'' ]
];
