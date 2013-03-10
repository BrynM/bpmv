var valueTests = {};
valueTests._spec = {
	title : 'Expected Return Values'
	, id : 'valueTests'
};

/* *****************************************************************************
* The Tests
***************************************************************************** */
valueTests['incall'] = [
	  [ [ [ 1, 1.25, 0, '2.2' ], 1.6 ] /*args*/, [2.6, 2.85, 1.6, '3.8'] /*expect*/, 'parseFloat( 1.6 ) + parseFloat( 2.2 ) = 3.8000000000000003 // bug' ]
];
valueTests['trueish'] = [
	  [ [ function () {} ] /*args*/, 'function () {}' /*expect*/, 'A function should return the string source of the function.' ]
];
valueTests['values'] = [
	  [ [ [ 1, 1.25, 0, '2.2' ] ] /*args*/, [ 1, 1.25, 0, '2.2' ] /*expect*/, '[ 1, 1.25, 0, \'2.2\' ]' ]
];
