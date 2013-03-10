var boolTestsPos = {};
boolTestsPos._spec = {
	  title : 'Positive Boolean Return'
	, id    : 'boolTestsPos'
};

/* *****************************************************************************
* The Tests
***************************************************************************** */
boolTestsPos['arr'] = [
	  [ [ [ 1 ] ] /*args*/, true /*expect*/, 'single item Array' /*note*/ ]
	, [ [ new Array( 1 ) ] /*args*/, true /*expect*/, 'new Array(), non-empty' ]
	, [ [ [], true ] /*args*/, true /*expect*/, 'Empty shorthand Array, empty allowed' ]
	, [ [ new Array(), true ] /*args*/, true /*expect*/, 'new Array(), empty allowed' ]
];
boolTestsPos['bool'] = [
	  [ [ true ] /*args*/, true /*expect*/, 'true' /*note*/ ]
	, [ [ false ] /*args*/, true /*expect*/, 'false' ]
];
boolTestsPos['brow'] = [
	  [ [ true ] /*args*/, true /*expect*/, 'true' /*note*/ ]
];
boolTestsPos['date'] = [
	[ [ new Date() ] /*args*/, true /*expect*/, 'new Date object' ]
];
boolTestsPos['float'] = [
	  [ [ 1 ] /*args*/, true /*expect*/, 'number 1' ]
	, [ [ '1' ] /*args*/, true /*expect*/, 'string &quot;1&quot;' ]
	, [ [ 1.2 ] /*args*/, true /*expect*/, 'number 1.2' ]
	, [ [ '1.2' ] /*args*/, true /*expect*/, 'string &quot;1.2&quot;' ]
	, [ [ 1.2312312312312312e+29 ] /*args*/, true /*expect*/, 'scientific number 1.2312312312312312e+29' ]
	, [ [ '1.2312312312312312e+29' ] /*args*/, true /*expect*/, 'scientific string &quot;1.2312312312312312e+29&quot;' ]
	, [ [ 0, true ] /*args*/, true /*expect*/, 'number 0, zero or below OK' ]
	, [ [ '0', true ] /*args*/, true /*expect*/, 'string &quot;0&quot;, zero or below OK' ]
	, [ [ 0.0, true ] /*args*/, true /*expect*/, 'number 0.0, zero or below OK' ]
	, [ [ '0.0', true ] /*args*/, true /*expect*/, 'string &quot;0.0&quot;, zero or below OK' ]
	, [ [ -1, true ] /*args*/, true /*expect*/, 'number -1, zero or below OK' ]
	, [ [ '-1', true ] /*args*/, true /*expect*/, 'string &quot;-1&quot;, zero or below OK' ]
];
boolTestsPos['func'] = [
	  [ [ document.getElementById ] /*args*/, true /*expect*/, 'Native function document.getElementById()' ]
	, [ [ function () { return; } ] /*args*/, true /*expect*/, 'Anonymous function function () { return; }' ]
	, [ [ run_tests ] /*args*/, true /*expect*/, 'Named function run_tests()' ]
	, [ [ Date ] /*args*/, true /*expect*/, 'Object function Date' ]
];
boolTestsPos['host'] = [
	  [ [ 'foobar', true ] /*args*/, true /*expect*/, 'Single host name' ]
	, [ [ 'foobar.foo' ] /*args*/, true /*expect*/, '2-level host name' ]
	, [ [ 'www.foobar.foo' ] /*args*/, true /*expect*/, '3-level host name' ]
	, [ [ 'www.foobar.foo' ] /*args*/, true /*expect*/, '3-level host name' ]
];
boolTestsPos['int'] = [
	  [ [ 1 ] /*args*/, true /*expect*/, 'number 1' ]
	, [ [ '1' ] /*args*/, true /*expect*/, 'string &quot;1&quot;' ]
	, [ [ 1234567890 ] /*args*/, true /*expect*/, 'number 1234567890' ]
	, [ [ '1234567890' ] /*args*/, true /*expect*/, 'string &quot;1234567890&quot;' ]
	, [ [ 0, true ] /*args*/, true /*expect*/, 'number 0, zero or below OK' ]
	, [ [ '0', true ] /*args*/, true /*expect*/, 'string &quot;0&quot;, zero or below OK' ]
	, [ [ -1, true ] /*args*/, true /*expect*/, 'number -1, zero or below OK' ]
	, [ [ '-1', true ] /*args*/, true /*expect*/, 'string &quot;-1&quot;, zero or below OK' ]
];
boolTestsPos['ip'] = [
	  [ [ '127.0.0.1' ] /*args*/, true /*expect*/, 'localhost' ]
	, [ [ '2130706433' ] /*args*/, true /*expect*/, 'decimal localhost' ]
	, [ [ '10.13.13.13' ] /*args*/, true /*expect*/, '10.x.x.x local network' ]
	, [ [ '168627469' ] /*args*/, true /*expect*/, 'decimal 10.x.x.x local network' ]
	, [ [ '192.168.1.1' ] /*args*/, true /*expect*/, '192.168.x.x local network' ]
	, [ [ '3232235777' ] /*args*/, true /*expect*/, 'decimal 192.168.x.x local network' ]
	, [ [ '4.4.4.4' ] /*args*/, true /*expect*/, 'internet' ]
	, [ [ '67372036' ] /*args*/, true /*expect*/, 'decimal internet' ]
	, [ [ '2001:0db8:85a3:0000:0000:8a2e:0370:7334', true ] /*args*/, true /*expect*/, 'IPV6' ]
];
boolTestsPos['isadog'] = [
	  [ [ /.*/ ] /*args*/, true /*expect*/, 'Inline RegExp pattern (&quot;/.*/&quot;)' ]
	, [ [ new RegExp() ] /*args*/, true /*expect*/, 'new RegExp()' ]
	, [ [ /.*/, true ] /*args*/, true /*expect*/, 'Inline RegExp pattern (&quot;/.*/&quot;) with required non-empty source' ]
	, [ [ new RegExp( '.*' ), true ] /*args*/, true /*expect*/, 'new RegExp() with required non-empty source' ]
];
boolTestsPos['num'] = [
	  [ [ 1 ] /*args*/, true /*expect*/, 'Number 1' ]
	, [ [ '1' ] /*args*/, true /*expect*/, 'String &quot;1&quot;' ]
	, [ [ 1.2 ] /*args*/, true /*expect*/, 'Number 1.2' ]
	, [ [ '1.2' ] /*args*/, true /*expect*/, 'String &quot;1.2&quot;' ]
	, [ [ 1.2312312312312312e+29 ] /*args*/, true /*expect*/, 'Scientific number 1.2312312312312312e+29' ]
	, [ [ '1.2312312312312312e+29' ] /*args*/, true /*expect*/, 'Scientific string &quot;1.2312312312312312e+29&quot;' ]
	, [ [ 0, true ] /*args*/, true /*expect*/, 'Number 0, zero or below OK' ]
	, [ [ '0', true ] /*args*/, true /*expect*/, 'String &quot;0&quot;, zero or below OK' ]
	, [ [ 0.0, true ] /*args*/, true /*expect*/, 'Number 0.0, zero or below OK' ]
	, [ [ '0.0', true ] /*args*/, true /*expect*/, 'String &quot;0.0&quot;, zero or below OK' ]
	, [ [ -1, true ] /*args*/, true /*expect*/, 'Number -1, zero or below OK' ]
	, [ [ '-1', true ] /*args*/, true /*expect*/, 'String &quot;-1&quot;, zero or below OK' ]
];
boolTestsPos['obj'] = [
	  [ [ {} ] /*args*/, true /*expect*/, 'Empty shorthand (&quot;{}&quot;) object' ]
	, [ [ new Object() ] /*args*/, true /*expect*/, 'Empty new Object()' ]
	, [ [ { a : 2 }, true ] /*args*/, true /*expect*/, 'Non-empty shorthand (&quot;{}&quot;) object required non-empty' ]
	, [ [ new Object( { a : 2 } ), true ] /*args*/, true /*expect*/, 'empty new Object() required non-empty' ]
];
boolTestsPos['str'] = [
	  [ [ 'foo' ] /*args*/, true /*expect*/, 'Non-empty string' ]
	, [ [ '', true ] /*args*/, true /*expect*/, 'Empty string, empty OK' ]
];
boolTestsPos['trueish'] = [
	  [ [ 1 ] /*args*/, true /*expect*/, 'Integer 1' ]
	, [ [ '1' ] /*args*/, true /*expect*/, 'String &quot;1&quot;' ]
	, [ [ 'checked' ] /*args*/, true /*expect*/, 'String &quot;checked&quot;' ]
	, [ [ 'Checked' ] /*args*/, true /*expect*/, 'String &quot;Checked&quot;' ]
	, [ [ 'CHECKED' ] /*args*/, true /*expect*/, 'String &quot;CHECKED&quot;' ]
	, [ [ 'on' ] /*args*/, true /*expect*/, 'String &quot;on&quot;' ]
	, [ [ 'On' ] /*args*/, true /*expect*/, 'String &quot;On&quot;' ]
	, [ [ 'ON' ] /*args*/, true /*expect*/, 'String &quot;ON&quot;' ]
	, [ [ true ] /*args*/, true /*expect*/, 'Boolean true' ]
	, [ [ 'true' ] /*args*/, true /*expect*/, 'String &quot;true&quot;' ]
	, [ [ 'True' ] /*args*/, true /*expect*/, 'String &quot;True&quot;' ]
	, [ [ 'TRUE' ] /*args*/, true /*expect*/, 'String &quot;TRUE&quot;' ]
	, [ [ 'yar' ] /*args*/, true /*expect*/, 'String &quot;yar&quot;' ]
	, [ [ 'Yar' ] /*args*/, true /*expect*/, 'String &quot;Yar&quot;' ]
	, [ [ 'YAR' ] /*args*/, true /*expect*/, 'String &quot;YAR&quot;' ]
	, [ [ 'yes' ] /*args*/, true /*expect*/, 'String &quot;yes&quot;' ]
	, [ [ 'Yes' ] /*args*/, true /*expect*/, 'String &quot;Yes&quot;' ]
	, [ [ 'YES' ] /*args*/, true /*expect*/, 'String &quot;YES&quot;' ]
	, [ [ { a : 2} ] /*args*/, true /*expect*/, 'Non-empty shorthand (&quot;{}&quot;) object' ]
];
boolTestsPos['typeis'] = [
	  [ [ false, 'Boolean' ] /*args*/, true /*expect*/, 'Boolean false' ]
	, [ [ true, 'Boolean' ] /*args*/, true /*expect*/, 'Boolean true' ]
	, [ [ {}, 'Object' ] /*args*/, true /*expect*/, 'Empty inline shorthand object' ]
	, [ [ new Object, 'Object' ] /*args*/, true /*expect*/, 'new Oject()' ]
	, [ [ '', 'String' ] /*args*/, true /*expect*/, 'Empty string' ]
	, [ [ new String(), 'String' ] /*args*/, true /*expect*/, 'new String()' ]
];

