var valueTests = {};
valueTests._spec = {
	title : 'Expected Return Values'
	, id : 'valueTests'
	, note  : 'These are tests that expect very specific return values. They are sometimes related to bugs. Everything non-boolean should have an expected values test.'
};

/* *****************************************************************************
* The Tests
***************************************************************************** */

valueTests['basename'] = [
	  [ [ '/path/to/a/thing' ] /*args*/, 'thing' /*expect*/, 'string \'/path/to/a/thing\'' ]
	, [ [ '/path/to/a/thing/' ] /*args*/, 'thing' /*expect*/, 'string \'/path/to/a/thing/\'' ]
	, [ [ 'C:\\' ] /*args*/, 'C:\\' /*expect*/, 'string \'C:\\\'' ]
	, [ [ 'C:\\Program Files\\App\\thing' ] /*args*/, 'thing' /*expect*/, 'string \'C:\\Program Files\\App\\thing\'' ]
	, [ [ 'C:\\Program Files\\App\\thing\\' ] /*args*/, 'thing' /*expect*/, 'string \'C:\\Program Files\\App\\thing\\\'' ]
	, [ [ 'http://google.com' ] /*args*/, 'http://google.com' /*expect*/, 'string \'http://google.com\'' ]
	, [ [ 'http://google.com/' ] /*args*/, 'http://google.com' /*expect*/, 'string \'http://google.com/\'' ]
	, [ [ 'http://google.com/mail' ] /*args*/, 'mail' /*expect*/, 'string \'http://google.com/mail\'' ]
];
valueTests['ccase'] = [
	  [ [ 'This is some stuff' ] /*args*/, 'thisIsSomeStuff' /*expect*/, 'string \'This is some stuff\'' ]
	, [ [ 'This_is_some_stuff' ] /*args*/, 'thisIsSomeStuff' /*expect*/, 'string \'This_is_some_stuff\'' ]
	, [ [ 'This-is-some-stuff' ] /*args*/, 'thisIsSomeStuff' /*expect*/, 'string \'This-is-some-stuff\'' ]
	, [ [ 'This is-some_stuff' ] /*args*/, 'thisIsSomeStuff' /*expect*/, 'string \'This is-some_stuff\'' ]
	, [ [ 'This is\nstuff', [ '\n' ] ] /*args*/, 'this isStuff' /*expect*/, 'string \'This is\\nstuff\', with a replacement of \'\\n\'' ]
	, [ [ 'look its a class_name', null, true ] /*args*/, 'LookItsAClassName' /*expect*/, 'string \'look its a class_name\' with capitalization true' ]
	, [ [ 'This is_stuff.', ' ', true ] /*args*/, 'ThisIs_stuff.' /*expect*/, 'string \'This is_stuff.\' replacing spaces with capitalization true' ]
];
valueTests['incall'] = [
	  [ [ [ 1, 1.25, 0, '2.2' ], 1.6 ] /*args*/, [2.6, 2.85, 1.6, '3.8'] /*expect*/, 'parseFloat( 1.6 ) + parseFloat( 2.2 ) = 3.8000000000000003 // bug' ]
];
valueTests['trueish'] = [
	  [ [ function () {} ] /*args*/, 'function () {}' /*expect*/, 'A function should return the string source of the function.' ]
];
valueTests['values'] = [
	  [ [ [ 1, 1.25, 0, '2.2' ] ] /*args*/, [ 1, 1.25, 0, '2.2' ] /*expect*/, '[ 1, 1.25, 0, \'2.2\' ]' ]
];
valueTests['wild'] = [
	  [ [ 'foo', 'fo*' ] /*args*/, 'foo' /*expect*/, 'strings \'foo\' and \'fo*\'' ]
	, [ [ 'foo', 'foo*' ] /*args*/, 'foo' /*expect*/, 'strings \'foo\' and \'foo*\'' ]
];
