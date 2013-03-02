/*******************************************************************************
*
* Yet another templating engine in JS, here's bmtpl.
*
*******************************************************************************/
if ( ( typeof(bpmv) === 'object' ) && ( typeof(bmtpl) != 'object' ) ) {

	var bmtpl = {
		_dateRenderStamp : new Date(),
		_dateStamp : new Date(),
		conf : {},
		plugins : {}
	};

	( function () { // BEGIN A NEW SCOPE

		/***************************************************************************
		* Configuration
		***************************************************************************/
		bmtpl.conf = function () {
			bmtpl.conf._curr = bpmv.obj(bmtpl.conf._curr) ? bmtpl.conf._curr : {};
			var curr = bmtpl.conf._curr;
			curr.delimArgs       = bpmv.str(curr.delimArgs)       ? curr.delimArgs        : ',';
			curr.delimLeft       = bpmv.str(curr.delimLeft)       ? curr.delimLeft        : '[[';
			curr.delimRight      = bpmv.str(curr.delimRight)      ? curr.delimRight       : ']]';
			curr.delimCloseBlock = bpmv.str(curr.delimCloseBlock) ? curr.delimCloseBlock  : '/';
			curr.delimVar        = bpmv.str(curr.delimVar)        ? curr.delimVar         : '%';
			curr.escapeChar      = bpmv.str(curr.escapeChar)      ? curr.escapeChar       : '\\';
			curr.maxLen          = bpmv.num(curr.maxLen, true)    ? parseInt(curr.maxLen) : 4096;
			curr.throwOnError    = bpmv.bool(curr.throwOnError)   ? curr.throwOnError     : true;
			return curr;
		};

		bmtpl.conf();

	return bmtpl.conf; })() && ( function () { // BEGIN A NEW SCOPE

		/***************************************************************************
		* Tokenizer
		***************************************************************************/
		function BmtTok ( opts ) {
			if ( bpmv.obj(opts) ) {
				this.text    = bpmv.str(opts.text) ? opts.text : '';
				this.tokType = bpmv.str(opts.tokType) ? opts.tokType : undefined;
			} else {
				this.text    = '';
				this.tokType = undefined;
			}
			this._parsed   = null;
			this._children = null;
		}
		BmtTok.prototype.parse = function ( forceReparse ) {

		};

		bmtpl.tokenize = function ( srcText ) {
			var retText = '',
				tkScope = [],
				currChar = 0;
			if ( bpmv.str(srcText) ) {
				return new BmtTok( { text : ''+srcText } );
			}
			return retText;
		};

	return bmtpl.tokenize; })() && ( function () { // BEGIN A NEW SCOPE

		var bmtplVars = {};

		/***************************************************************************
		* variable support
		***************************************************************************/
		bmtpl.addVar = function ( varName, varVal ) {
			if ( bpmv.str(varName) ) {
				bmtplVars[varName] = varVal;
			}
		};

		bmtpl.getVar = function ( varName, raw ) {
			if ( raw ) {
				return bmtplVars[varName];
			} else {
				switch ( bpmv.whatis(bmtplVars[varName]) ) {
					case 'null':
					case 'undefined':
						return '';
						break;
					default:
						if ( bpmv.func(bmtplVars[varName].toString) ) {
							return bmtplVars[varName].toString();
						}
						break;
				}
			}
			return '';
		};

	return bmtplVars; })() && ( function () { // BEGIN A NEW SCOPE

		/***************************************************************************
		* Basic filter token support
		* Filters should transform it's text
		***************************************************************************/
		bmtpl.plugins.filt = {};

		bmtpl.plugins.filt._search = function ( tokName ) {
			return bpmv.func( bmtpl.plugins.filt[tokName] );
		};

	return bmtpl.plugins.filt; })() && ( function () { // BEGIN A NEW SCOPE

		/***************************************************************************
		* Basic function token support
		***************************************************************************/
		bmtpl.plugins.func = {};

		bmtpl.plugins.func._search = function ( tokName ) {
			return bpmv.func( bmtpl.plugins.func[tokName] );
		};

	return bmtpl.plugins.func; })() && ( function () { // BEGIN A NEW SCOPE

		/***************************************************************************
		* Basic block token support
		***************************************************************************/
		bmtpl.plugins.block = {};

		bmtpl.plugins.block._search = function ( tokName ) {
			return bpmv.func( bmtpl.plugins.block[tokName] );
		};

	return bmtpl.plugins.block; })(); // END OUR INTERNAL SCOPES

} else if ( typeof(bpmv) != 'object' ) {
	throw( '[FAIL] bmtpl Templating Engine requires bpmv.js loaded as the object "bpmv".' );
} else if  ( typeof(bmtpl) === 'object' ) {
	throw( '[FAIL] bmtpl Templating Engine has already been loaded as the object "bmtpl".' );
}

/*******************************************************************************
* Filter plugins
*******************************************************************************/
( function () { // Filter plugins

	bmtpl.plugins.filt.trim = function () {
		return bpmv.trim( arguments[0] );
	};

})();

/*******************************************************************************
* Function plugins
*******************************************************************************/
( function () { // Function plugins

	bmtpl.plugins.func.now = function () {
		return bpmv.typeis( bmtpl._dateRenderStamp, 'Date' ) ? bmtpl._dateRenderStamp.toString() : new Date().toString();
	};

})();

/*******************************************************************************
* Block level plugins
*******************************************************************************/
( function () { // Block level plugins

	bmtpl.plugins.block.pure = function () {
		return arguments[0];
	}

})();
