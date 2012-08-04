
/*******************************************************************************
*
* WARNING: bpmv.cLog IS CURRENTLY EXPERIMENTAL!!!
*
* bpmv.cLog and it's associated bpmv.c* functions are wrappers for console
* logging. I got the list of console function names from
* https://developer.mozilla.org/en-US/docs/DOM/console along with some
* experimenting in varous browsers.
*
* I've created this as an separate module as it would bloat bpmv.js and I can't
* guarantee it will even work.
*
* Possible future attitions:
*    + <div> output for console-less browsers?
*    + move console[member].apply() calls to bpmv._cCon() - need to do this
*      without resorting to an ugly switch(){} hack
*    + include minified version
*    + make this work in strict
*
*******************************************************************************/

/*******************************************************************************
* Sundries
*******************************************************************************/

/* store previously found console object */
bpmv._cStored = null;
/* test for a console func and retuer console if it exists */
bpmv._cCon = function ( key ) {
	if ( this._cStored === 'wood' ) {
		return;
	}
	if ( !this.obj(this._cStored) ) {
		this._cStored = console || window.console || null;
		if ( !this.obj(this._cStored) ) {
			this._cStored = 'wood';
			return;
		}
	}
	if ( this.str(key) && this.func(this._cStored[key]) ) {
		return this._cStored;
	}
};

/*******************************************************************************
* Wrappers
*******************************************************************************/

/* wrap console.assert() */
bpmv.cAssert = function () {
	var con = this._cCon( 'assert' );
	if ( this.obj(con) && this.num( arguments.length ) ) {
		return con.assert.apply( con, arguments );
	}
};
/* wrap console.count() */
bpmv.cCount = function () {
	var con = this._cCon( 'count' );
	if ( this.obj(con) && this.num( arguments.length ) ) {
		return con.count.apply( con, arguments );
	}
};
/* wrap console.debug() */
bpmv.cDebug = function () {
	var con = this._cCon( 'debug' );
	if ( this.obj(con) && this.num( arguments.length ) ) {
		return con.debug.apply( con, arguments );
	} else {
		return this.log.apply( this, arguments );
	}
};
/* wrap console.dir() */
bpmv.cDir = function () {
	var con = this._cCon( 'dir' );
	if ( this.obj(con) && this.num( arguments.length ) ) {
		return con.dir.apply( con, arguments );
	}
};
/* wrap console.dirxml() */
bpmv.cDirxml = function () {
	var con = this._cCon( 'dirxml' );
	if ( this.obj(con) && this.num( arguments.length ) ) {
		return con.dirxml.apply( con, arguments );
	}
};
/* wrap console.error() */
bpmv.cError = function () {
	var con = this._cCon( 'error' );
	if ( this.obj(con) && this.num( arguments.length ) ) {
		return con.error.apply( con, arguments );
	} else {
		return this.log.apply( this, arguments );
	}
};
/* wrap console.group() */
bpmv.cGroup = function () {
	var con = this._cCon( 'group' );
	if ( this.obj(con) && this.num( arguments.length ) ) {
		return con.group.apply( con, arguments );
	}
};
/* wrap console.groupCollapsed() */
bpmv.cGroupCollapsed = function () {
	var con = this._cCon( 'groupCollapsed' );
	if ( this.obj(con) && this.num( arguments.length ) ) {
		return con.groupCollapsed.apply( con, arguments );
	}
};
/* wrap console.groupEnd() */
bpmv.cGroupEnd = function () {
	var con = this._cCon( 'groupEnd' );
	if ( this.obj(con) && this.num( arguments.length ) ) {
		return con.groupEnd.apply( con, arguments );
	}
};
/* wrap console.info() */
bpmv.cInfo = function () {
	var con = this._cCon( 'info' );
	if ( this.obj(con) && this.num( arguments.length ) ) {
		return con.info.apply( con, arguments );
	} else {
		return this.log.apply( this, arguments );
	}
};
/* wrap console.log() */
bpmv.cLog = function () {
	var con = this._cCon( 'log' );
	if ( this.obj(con) && this.num( arguments.length ) ) {
		return con.log.apply( con, arguments );
	}
};
/* wrap console.markTimeline() */
bpmv.cMarkTimeline = function () {
	var con = this._cCon( 'markTimeline' );
	if ( this.obj(con) && this.num( arguments.length ) ) {
		return con.markTimeline.apply( con, arguments );
	}
};
/* wrap console.profile() */
bpmv.cProfile = function () {
	var con = this._cCon( 'profile' );
	if ( this.obj(con) && this.num( arguments.length ) ) {
		return con.profile.apply( con, arguments );
	}
};
/* wrap console.profileEnd() */
bpmv.cProfileEnd = function () {
	var con = this._cCon( 'profileEnd' );
	if ( this.obj(con) && this.num( arguments.length ) ) {
		return con.profileEnd.apply( con, arguments );
	}
};
/* wrap console.time() */
bpmv.cTime = function () {
	var con = this._cCon( 'time' );
	if ( this.obj(con) && this.num( arguments.length ) ) {
		return con.time.apply( con, arguments );
	}
};
/* wrap console.timeEnd() */
bpmv.cTimeEnd = function () {
	var con = this._cCon( 'timeEnd' );
	if ( this.obj(con) && this.num( arguments.length ) ) {
		return con.timeEnd.apply( con, arguments );
	}
};
/* wrap console.timeStamp() */
bpmv.cTimeStamp = function () {
	var con = this._cCon( 'timeStamp' );
	if ( this.obj(con) && this.num( arguments.length ) ) {
		return con.timeStamp.apply( con, arguments );
	}
};
/* wrap console.trace() */
bpmv.cTrace = function () {
	var con = this._cCon( 'trace' );
	if ( this.obj(con) && this.num( arguments.length ) ) {
		return con.trace.apply( con, arguments );
	}
};
/* wrap console.warn() */
bpmv.cWarn = function () {
	var con = this._cCon( 'warn' );
	if ( this.obj(con) && this.num( arguments.length ) ) {
		return con.warn.apply( con, arguments );
	} else {
		return this.log.apply( this, arguments );
	}
};
