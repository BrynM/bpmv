var emptyTests = {};
emptyTests._spec = {
	  title : 'Empty Arguments'
	, id    : 'emptyTests'
	, note  : 'These are tests that pass functions empty parameters. Everything should have an empty parameter test.'
};

/* *****************************************************************************
* The Tests
***************************************************************************** */
emptyTests['arr']       = [ [ [], false, 'empty args' ] ];
emptyTests['basename']  = [ [ [], undefined, 'empty args' ] ];
emptyTests['bool']      = [ [ [], false, 'empty args' ] ];
emptyTests['brow']      = [ [ [], true, 'empty args' ] ];
emptyTests['ccase']     = [ [ [], undefined, 'empty args' ] ];
emptyTests['clone']     = [ [ [], undefined, 'empty args' ] ];
emptyTests['cook']      = [ [ [], function ( cook ) { return typeof(cook) == 'object' }, 'empty args' ] ];
emptyTests['count']     = [ [ [], false, 'empty args' ] ];
emptyTests['date']      = [ [ [], false, 'empty args' ] ];
emptyTests['dirname']   = [ [ [], undefined, 'empty args' ] ];
emptyTests['dive']      = [ [ [], undefined, 'empty args' ] ];
emptyTests['ego']       = [ [ [], function ( id ) { return /^[A-Z0-9]{12}\_[0-9]{9,}$/.test( id ); }, 'empty args' ] ];
emptyTests['empty']     = [ [ [], true, 'empty args' ] ];
emptyTests['env']       = [ [ [], 'browser', 'empty args' ] ];
emptyTests['find']      = [ [ [], undefined, 'empty args' ] ];
emptyTests['float']     = [ [ [], false, 'empty args' ] ];
emptyTests['func']      = [ [ [], false, 'empty args' ] ];
emptyTests['grab']      = [ [ [], undefined, 'empty args' ] ];
emptyTests['host']      = [ [ [], false, 'empty args' ] ];
emptyTests['incall']    = [ [ [], undefined, 'empty args' ] ];
emptyTests['ini']       = [ [ [], undefined, 'empty args' ] ];
emptyTests['int']       = [ [ [], false, 'empty args' ] ];
emptyTests['ip']        = [ [ [], false, 'empty args' ] ];
emptyTests['isadog']    = [ [ [], false, 'empty args' ] ];
emptyTests['isjson']    = [ [ [], false, 'empty args' ] ];
emptyTests['keys']      = [ [ [], [], 'empty args' ] ];
emptyTests['ltrim']     = [ [ [], undefined, 'empty args' ] ];
emptyTests['node']      = [ [ [], false, 'empty args' ] ];
emptyTests['num']       = [ [ [], false, 'empty args' ] ];
emptyTests['obj']       = [ [ [], false, 'empty args' ] ];
emptyTests['pad']       = [ [ [], undefined, 'empty args' ] ];
emptyTests['rescape']   = [ [ [], undefined, 'empty args' ] ];
emptyTests['reverse']   = [ [ [], undefined, 'empty args' ] ];
emptyTests['rpad']      = [ [ [], undefined, 'empty args' ] ];
emptyTests['rtrim']     = [ [ [], undefined, 'empty args' ] ];
emptyTests['search']    = [ [ [], undefined, 'empty args' ] ];
emptyTests['serial']    = [ [ [], false, 'empty args' ] ];
emptyTests['shuffle']   = [ [ [], undefined, 'empty args' ] ];
emptyTests['str']       = [ [ [], false, 'empty args' ] ];
emptyTests['sum']       = [ [ [], 0, 'empty args' ] ];
emptyTests['time2time'] = [ [ [], undefined, 'empty args' ] ];
emptyTests['toke']      = [ [ [], undefined, 'empty args' ] ];
emptyTests['trim']      = [ [ [], undefined, 'empty args' ] ];
emptyTests['trueish']   = [ [ [], false, 'empty args' ] ];
emptyTests['txt2html']  = [ [ [], undefined, 'empty args' ] ];
emptyTests['typeis']    = [ [ [], undefined, 'empty args' ] ];
emptyTests['unserial']  = [ [ [], undefined, 'empty args' ] ];
emptyTests['values']    = [ [ [], [], 'empty args' ] ];
emptyTests['walk']      = [ [ [], undefined, 'empty args' ] ];
emptyTests['whatis']    = [ [ [], 'undefined', 'empty args' ] ];
emptyTests['wild']      = [ [ [], false, 'empty args' ] ];
emptyTests['wrapped']   = [ [ [], false, 'empty args' ] ];
