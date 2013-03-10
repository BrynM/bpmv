var emptyTests = {};
emptyTests._spec = {
	  title : 'Empty Arguments'
	, id    : 'emptyTests'
};

/* *****************************************************************************
* The Tests
***************************************************************************** */
emptyTests['arr']       = [ [ [], false, 'Empty Args' ] ];
emptyTests['basename']  = [ [ [], undefined, 'Empty Args' ] ];
emptyTests['bool']      = [ [ [], false, 'Empty Args' ] ];
emptyTests['brow']      = [ [ [], true, 'Empty Args' ] ];
emptyTests['ccase']     = [ [ [], undefined, 'Empty Args' ] ];
emptyTests['clone']     = [ [ [], undefined, 'Empty Args' ] ];
emptyTests['cook']      = [ [ [], function ( cook ) { return typeof(cook) == 'object' }, 'Empty Args' ] ];
emptyTests['count']     = [ [ [], false, 'Empty Args' ] ];
emptyTests['date']      = [ [ [], false, 'Empty Args' ] ];
emptyTests['dirname']   = [ [ [], undefined, 'Empty Args' ] ];
emptyTests['ego']       = [ [ [], function ( id ) { return /^[A-Z0-9]{12}\_[0-9]{9,}$/.test( id ); }, 'Empty Args' ] ];
emptyTests['env']       = [ [ [], 'browser', 'Empty Args' ] ];
emptyTests['find']      = [ [ [], undefined, 'Empty Args' ] ];
emptyTests['float']     = [ [ [], false, 'Empty Args' ] ];
emptyTests['func']      = [ [ [], false, 'Empty Args' ] ];
emptyTests['grab']      = [ [ [], undefined, 'Empty Args' ] ];
emptyTests['host']      = [ [ [], false, 'Empty Args' ] ];
emptyTests['incall']    = [ [ [], undefined, 'Empty Args' ] ];
emptyTests['ini']       = [ [ [], undefined, 'Empty Args' ] ];
emptyTests['int']       = [ [ [], false, 'Empty Args' ] ];
emptyTests['ip']        = [ [ [], false, 'Empty Args' ] ];
emptyTests['isadog']    = [ [ [], false, 'Empty Args' ] ];
emptyTests['isjson']    = [ [ [], false, 'Empty Args' ] ];
emptyTests['keys']      = [ [ [], [], 'Empty Args' ] ];
emptyTests['ltrim']     = [ [ [], undefined, 'Empty Args' ] ];
emptyTests['node']      = [ [ [], false, 'Empty Args' ] ];
emptyTests['num']       = [ [ [], false, 'Empty Args' ] ];
emptyTests['obj']       = [ [ [], false, 'Empty Args' ] ];
emptyTests['pad']       = [ [ [], undefined, 'Empty Args' ] ];
emptyTests['rescape']   = [ [ [], undefined, 'Empty Args' ] ];
emptyTests['reverse']   = [ [ [], undefined, 'Empty Args' ] ];
emptyTests['rpad']      = [ [ [], undefined, 'Empty Args' ] ];
emptyTests['rtrim']     = [ [ [], undefined, 'Empty Args' ] ];
emptyTests['search']    = [ [ [], undefined, 'Empty Args' ] ];
emptyTests['serial']    = [ [ [], false, 'Empty Args' ] ];
emptyTests['str']       = [ [ [], false, 'Empty Args' ] ];
emptyTests['sum']       = [ [ [], 0, 'Empty Args' ] ];
emptyTests['time2time'] = [ [ [], undefined, 'Empty Args' ] ];
emptyTests['toke']      = [ [ [], undefined, 'Empty Args' ] ];
emptyTests['trim']      = [ [ [], undefined, 'Empty Args' ] ];
emptyTests['trueish']   = [ [ [], false, 'Empty Args' ] ];
emptyTests['txt2html']  = [ [ [], undefined, 'Empty Args' ] ];
emptyTests['typeis']    = [ [ [], undefined, 'Empty Args' ] ];
emptyTests['unserial']  = [ [ [], undefined, 'Empty Args' ] ];
emptyTests['values']    = [ [ [], [], 'Empty Args' ] ];
emptyTests['walk']      = [ [ [], undefined, 'Empty Args' ] ];
emptyTests['whatis']    = [ [ [], 'undefined', 'Empty Args' ] ];
emptyTests['wild']      = [ [ [], false, 'Empty Args' ] ];
emptyTests['wrapped']   = [ [ [], false, 'Empty Args' ] ];
