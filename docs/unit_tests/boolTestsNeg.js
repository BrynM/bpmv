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
	  [ [ [] ] /*args*/, false /*expect*/, 'empty Array' ]
	, [ [ new Array() ] /*args*/, false /*expect*/, 'empty new Array()' ]
	, [ [ {} ] /*args*/, false /*expect*/, 'empty inline shorthand object' ]
	, [ [ { a : 2 } ] /*args*/, false /*expect*/, 'Non-empty inline shorthand object' ]
	, [ [ false ] /*args*/, false /*expect*/, 'boolean false' ]
	, [ [ true ] /*args*/, false /*expect*/, 'boolean true' ]
	, [ [ null ] /*args*/, false /*expect*/, 'null' ]
	, [ [ undefined ] /*args*/, false /*expect*/, 'undefined proper' ]
];
boolTestsNeg['bool'] = [
	  [ [ 'true' ] /*args*/, false /*expect*/, 'string &quot;true&quot;' /*note*/ ]
	, [ [ 'false' ] /*args*/, false /*expect*/, 'string &quot;false&quot;' ]
	, [ [ 0 ] /*args*/, false /*expect*/, 'number 0' ]
	, [ [ '0' ] /*args*/, false /*expect*/, 'string &quot;0&quot;' ]
	, [ [ 1 ] /*args*/, false /*expect*/, 'number 1' ]
	, [ [ '1' ] /*args*/, false /*expect*/, 'string &quot;1&quot;' ]
	, [ [ null ] /*args*/, false /*expect*/, 'null' ]
	, [ [ undefined ] /*args*/, false /*expect*/, 'undefined proper' ]
];
boolTestsNeg['clone'] = [
	  [ [ false ] /*args*/, false /*expect*/, 'false' /*note*/ ]
];
boolTestsNeg['date'] = [
	  [ [ {} ] /*args*/, false /*expect*/, 'empty inline shorthand object' ]
	, [ [ null ] /*args*/, false /*expect*/, 'null' ]
	, [ [ undefined ] /*args*/, false /*expect*/, 'undefined proper' ]
];
boolTestsNeg['empty'] = [
	  [ [ {a: 1} ] /*args*/, false /*expect*/, '{a: 1}' ]
	, [ [ 1 ] /*args*/, false /*expect*/, 'number 1' ]
	, [ [ 1.123 ] /*args*/, false /*expect*/, 'float 1.123' ]
	, [ [ 'a' ] /*args*/, false /*expect*/, 'the string &quot;a&quot;' ]
	, [ [ true ] /*args*/, false /*expect*/, 'boolean true' ]
	, [ [ false ] /*args*/, false /*expect*/, 'boolean false' ]
	, [ [ function () {} ] /*args*/, false /*expect*/, 'function () {}' ]
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
	, [ [ false ] /*args*/, false /*expect*/, 'boolean false' ]
	, [ [ true ] /*args*/, false /*expect*/, 'boolean true' ]
	, [ [ null ] /*args*/, false /*expect*/, 'null' ]
	, [ [ undefined ] /*args*/, false /*expect*/, 'undefined proper' ]
];
boolTestsNeg['func'] = [
	  [ [] /*args*/, false /*expect*/, 'empty args' ]
	, [ [ document.location.protocol ] /*args*/, false /*expect*/, 'Native variable document.location.protocol' ]
	, [ [ 'crud' ] /*args*/, false /*expect*/, 'string "crud"' ]
];
boolTestsNeg['host'] = [
	  [ [ 'crud' ] /*args*/, false /*expect*/, 'string "crud"' ]
	, [ [ document.location.href ] /*args*/, false /*expect*/, 'Native variable document.location.href' ]
];
boolTestsNeg['int'] = [
	  [ [ 'a' ] /*args*/, false /*expect*/, 'string \'a\'' ]
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
	, [ [ false ] /*args*/, false /*expect*/, 'boolean false' ]
	, [ [ true ] /*args*/, false /*expect*/, 'boolean true' ]
	, [ [ null ] /*args*/, false /*expect*/, 'null' ]
	, [ [ undefined ] /*args*/, false /*expect*/, 'undefined proper' ]
];
boolTestsNeg['obj'] = [
	  [ [ {}, true ] /*args*/, false /*expect*/, 'empty shorthand (&quot;{}&quot;) object required non-empty' ]
];
boolTestsNeg['node'] = [
	  [ [] /*args*/, false /*expect*/, 'Not in node...' ]
];
boolTestsNeg['str'] = [
	  [ [ {} ] /*args*/, false /*expect*/, 'empty shorthand (&quot;{}&quot;) object' ]
];
boolTestsNeg['serial'] = [
	  [ [] /*args*/, false /*expect*/, 'empty parameters' ]
	, [ [ {} ] /*args*/, false /*expect*/, 'empty shorthand (&quot;{}&quot;) object' ]
	, [ [ '' ] /*args*/, false /*expect*/, 'empty string \'\'' ]
];
boolTestsNeg['trueish'] = [
	  [ [ 0 ] /*args*/, false /*expect*/, 'integer 0' ]
	, [ [ '0' ] /*args*/, false /*expect*/, 'string &quot;0&quot;' ]
	, [ [ 'off' ] /*args*/, false /*expect*/, 'string &quot;off&quot;' ]
	, [ [ 'Off' ] /*args*/, false /*expect*/, 'string &quot;Off&quot;' ]
	, [ [ 'OFF' ] /*args*/, false /*expect*/, 'string &quot;OFF&quot;' ]
	, [ [ false ] /*args*/, false /*expect*/, 'boolean false' ]
	, [ [ 'false' ] /*args*/, false /*expect*/, 'string &quot;false&quot;' ]
	, [ [ 'False' ] /*args*/, false /*expect*/, 'string &quot;False&quot;' ]
	, [ [ 'FALSE' ] /*args*/, false /*expect*/, 'string &quot;FALSE&quot;' ]
	, [ [ 'nay' ] /*args*/, false /*expect*/, 'string &quot;yar&quot;' ]
	, [ [ 'Nay' ] /*args*/, false /*expect*/, 'string &quot;Nay&quot;' ]
	, [ [ 'NAY' ] /*args*/, false /*expect*/, 'string &quot;NAY&quot;' ]
	, [ [ 'no' ] /*args*/, false /*expect*/, 'string &quot;no&quot;' ]
	, [ [ 'No' ] /*args*/, false /*expect*/, 'string &quot;No&quot;' ]
	, [ [ 'NO' ] /*args*/, false /*expect*/, 'string &quot;NO&quot;' ]
	, [ [ [] ] /*args*/, false /*expect*/, 'empty shorthand (&quot;[]&quot;) Array' ]
	, [ [ {} ] /*args*/, false /*expect*/, 'empty shorthand (&quot;{}&quot;) object' ]
];
boolTestsNeg['typeis'] = [
	  [ [ new Array(), 'String' ] /*args*/, false /*expect*/, 'new Array() is \'string\'' ]
];
boolTestsNeg['typeis'] = [
	  [ [ new Array(), 'String' ] /*args*/, false /*expect*/, 'new Array() is \'string\'' ]
	, [ [ '', 'undefined' ] /*args*/, false /*expect*/, 'empty string \'\' is \'undefined\'' ]
	, [ [ '', 'string' ] /*args*/, false /*expect*/, 'empty string \'\' is \'string\' (case sensitive)' ]
];
boolTestsNeg['wild'] = [
	  [ [ 'foo', 'baz*' ] /*args*/, false /*expect*/, 'strings \'foo\' and \'baz\'' ]
	, [ [ 'fo', 'foo*' ] /*args*/, false /*expect*/, 'strings \'fo\' and \'foo*\'' ]
];
