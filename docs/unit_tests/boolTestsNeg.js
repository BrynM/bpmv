var boolTestsNeg = {};
boolTestsNeg._spec = {
	  title : 'Negative Boolean Return'
	, id    : 'boolTestsNeg'
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
];
boolTestsNeg['host'] = [
];
boolTestsNeg['int'] = [
];
boolTestsNeg['ip'] = [
];
boolTestsNeg['isadog'] = [
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
boolTestsNeg['str'] = [
];
boolTestsNeg['trueish'] = [
];
boolTestsNeg['typeis'] = [
];
