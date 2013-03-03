/*******************************************************************************
* Setup Testing
*******************************************************************************/
var globalTotal = 0
	, globalFail = 0
	, globalPass = 0
	, tested = {}
	, untested = {};

function format_thing ( thing ) {
	switch ( typeof(thing) ) {
		case 'undefined':
			return 'undefined';
			break;
		case 'function':
			return 'function';
			break;
		case 'string':
			return '&quot;' + thing + '&quot;';
			break;
		case 'object':
			return whatIs( thing );
			break;
		default:
			return thing.toString();
			break;
	}
}

function goodArr ( arr ) {
	return goodObj( arr ) && ( Object.prototype.toString.call(arr) === '[object Array]' );
}

function goodFunc ( func ) {
	return ( typeof(func) === 'function' );
}

function goodObj ( obj ) {
	return ( obj !== null ) && ( typeof(obj) === 'object' );
}

function goodStr ( str ) {
	return ( typeof( str ) === 'string' ) && ( str.length > 0 );
}

function handle_rerun ( ev ) {
	var tst = null;
	if ( goodObj(ev) && goodObj(ev.currentTarget) ) {
		tst = $(ev.currentTarget).data( 'testize' );
		if ( goodObj( tst ) ) {
			log( 'Re-running test' );
			setTimeout( function () {
				testize( tst.set, tst.target, tst.min );
			}, 0 );
			setTimeout( function () {
				toc_update();
				toc_toggle( null, true );
			}, 500 );
		}
	}
}

function log ( string ) {
	var log = $('#log'),
		logPre = $('#log_pre');
	if ( goodStr( string ) ) {
		log.append( '**** ' + Date() + '\n' + string + '\n' );
		logPre.scrollTop( log.height() );
	}
}

function report ( pass, syntax, expect, note ) {
	var tpl = '';
	if ( goodStr(syntax) ) {
		tpl += '<tr class="tr-' + ( pass ? 'pass' : 'fail' )  + '">';
		tpl += '<td class="' + ( pass ? 'pass' : 'fail' )  + '">' + ( pass ? 'pass' : 'fail' ) + '</td>';
		tpl += '<td class="expect">' + format_thing( expect ) + '</td>';
		tpl += '<td class="syntax">' + syntax + '</td>';
		tpl += '<td class="note">' + note + '</td>';
		tpl += '</tr>';
		return tpl;
	}
}

function run_tests ( set, target, min ) {
	var tested = 0,
		passed = 0,
		failed = 0,
		appNd = '';
	if ( goodObj( set ) ) {
		myTarget = ''+target;
		$('#'+myTarget).parent().find( 'tbody tr' ).remove();
		$('#'+myTarget).parent().find( 'tfoot' ).remove();
		for ( var aSub in set ) {
			if ( goodStr( aSub ) && goodArr( set[aSub] ) && ( set[aSub].length > 0 ) ) {
				log( 'running ' + set[aSub].length + ' tests for bpmv.' + aSub + '()');
				for ( var aT = 0; aT < set[aSub].length; aT++ ) {
					var pass = false;
					if ( goodArr( set[aSub][aT] ) && ( set[aSub][aT].length == 3 ) ) {
						if ( min ) {
							pass = test_bpmvmin( aSub, set[aSub][aT][0], set[aSub][aT][1], set[aSub][aT][2] );
						} else {
							pass = test_bpmv( aSub, set[aSub][aT][0], set[aSub][aT][1], set[aSub][aT][2] );
						}
					} else if ( goodArr( set[aSub][aT] ) && ( set[aSub][aT].length == 2 ) ) {
						if ( min ) {
							pass = test_bpmvmin( aSub, set[aSub][aT][0], set[aSub][aT][1] );
						} else {
							pass = test_bpmv( aSub, set[aSub][aT][0], set[aSub][aT][1] );
						}
					}
					if ( pass.pass ) {
						passed++;
						globalPass++;
					} else {
						failed++;
						globalFail++
					}
					appNd += pass.report;
					tested++;
					globalTotal++;
					log( 'bpmv.' + aSub + '() test ' + aT + ' ' + ( pass.pass ? 'passed' : 'failed' ) );
				}
			}
		}
		appNd += '<tfoot><tr class="totals">';
		appNd += '<td colspan="4">';
		appNd += '<h3 style="display: inline;" class="test_totals">bpmv' + (min?'min.js ':'.js ') + set.title + ' ';
		appNd += 'Grand Total</h3>: <span class="totalGrand">' + tested + '</span> ';
		appNd += 'Passed: <span class="totalPassed">' + passed + '</span> ';
		appNd += 'Failed: <span class="totalFailed">' + failed + '</span> ';
		appNd += '</td>';
		appNd += '</tr></tfoot>';
		return appNd;
	}
}

function test_bpmv ( member, args, expect, note, other ) {
	var pass = false
		, res = undefined
		, mv = goodStr( other ) && goodObj( window[other] ) ? window[other] : bpmv
		, argStr = 'undefined'
		, objStr = goodStr( other ) ? other : 'bpmv'
		, syntax = '';
	if ( goodStr( member ) ) {
		syntax += objStr + '.' + member + '(';
		if ( goodArr( args ) && ( args.length > 0 ) ) {
			for ( var aA = 0; aA < args.length; aA++ ) {
				if ( aA > 0 ) {
					syntax += ',';
				}
				syntax += ' ' + format_thing( args[aA] );
			}
			syntax += (/\s/).test( syntax ) ? ' )' : '';
		} else {
			syntax += ')';
		}
		if ( mv.hasOwnProperty( member ) && goodFunc(mv[member]) && ( goodArr( args ) || typeof(args) == 'undefined' ) ) {
			try {
				res = mv[member].apply( mv, args );
				if ( typeof(expect) == 'function' ) {
					pass = expect( res );
				} else if ( ( typeof(expect) == 'undefined' ) && ( typeof(res) == 'undefined' ) ) {
					pass = true;
				} else if ( typeof(expect) == 'undefined' ) {
					pass = false;
				} else {
					pass = expect == res;
				}
			} catch ( err ) {
				pass = false;
				note += ' <span class="syserr">[Fatal] &quot;' + err + '&quot;</span> ';
			}
		} else if ( !mv.hasOwnProperty( member ) ) {
				note += ' <span class="syserr">[Fatal] &quot;Not found on object&quot;</span> ';
		} else if ( !goodFunc(mv[member]) ) {
				note += ' <span class="syserr">[Fatal] &quot;Not a function&quot;</span> ';
		} else if ( !goodArr( args ) || typeof(args) != 'undefined' ) {
				note += ' <span class="syserr">[Fatal] &quot;Invalid test arguments&quot;</span> ';
		}
		return { 'pass' : pass, 'report' : report( pass, syntax, expect, note ) };
	}
}

function test_bpmvmin ( member, args, expect, note ) {
	return test_bpmv( member, args, expect, note, 'bpmv_min' );
}

function testize ( set, target, min ) {
	var cont = []
		, res = undefined
		, resTarget = $(target)
		, subTarg = ''
		, subTargCont = ''
		, tDootie = null,
		subFound = [];
	if ( ( resTarget.length > 0 ) && goodObj( set ) && goodStr(set.title) && goodStr(target) ) {
		subTarg = ( min ? 'min_' : '' ) + set.title.replace( /[^a-z^0-9^\-^\_]+/gi, '_' ) + '_results';
		subTargCont = subTarg + '_container';
		cont.push( '<div id="' + subTargCont + '">' );
		cont.push( '<h2>bpmv' + ( min ? '.min' : '' ) + '.js ' + set.title + '</h2>' );
		cont.push( '<div class="subcontain">' );
		cont.push( '<table >' );
		cont.push( '<thead>' );
		cont.push( '<tr>' );
		cont.push( '<th>Pass</th>' );
		cont.push( '<th>Expect</th>' );
		cont.push( '<th>Syntax</th>' );
		cont.push( '<th>Note</th>' );
		cont.push( '</tr>' );
		cont.push( '</thead>' );
		cont.push( '<tbody id="' + subTarg + '">' );
		cont.push( run_tests( set, subTarg, min ) );
		cont.push( '</tbody>' );
		cont.push( '</table>' );
		cont.push( '</div>' );
		subFound = $('#'+subTargCont);
		if ( subFound.length > 0 ) {
			subFound.stop( true, true );
			subFound.replaceWith( cont.join( '\n' ) );
			subFound = $('#'+subTargCont);
			subFound.fadeTo( 500, 0.25, function () {
				subFound.fadeTo( 500, 1.0 );
			});
		} else {
			resTarget.append( cont.join( '\n' ) );
		}
		tDootie = $('<div class="rerun"><a href="javascript:void(0);">re-run test set</a></div>');
		tDootie.data( 'testize', {
			  'set' : set
			, 'target' : target
			, 'min' : min
		});
		tDootie.click( handle_rerun );
		resTarget.find('#'+subTargCont).find('.subcontain').prepend( tDootie );
	}
}

function untested () {

}

function whatIs ( thing ) {
	try {
		if ( goodStr(thing.constructor.name) ) {
			return '[object ' + thing.constructor.name + ']';
		}
	} catch (e) {
	}
	var blair = Object.prototype.toString.call( thing ),
		rgxObj = /^\[[oO]bject ([^\]]+)\]/;
	if ( thing === null ) { blair = 'null'; }
	if ( thing === NaN ) { blair = 'NaN'; }
	if ( typeof(thing) === 'undefined' ) { blair = 'undefined'; }
	if ( goodStr(blair) ) {
		if ( rgxObj.test(blair) ) {
			blair = blair.match( rgxObj ).pop();
		}
	}
	if ( goodStr(blair) ) {
		return '[object ' + blair + ']';
	}
	if ( goodObj(thing) ) {
		return '[object Object]';
	}
	return; // undef
}

