/*******************************************************************************
* Setup Testing
*******************************************************************************/
var globalTotal = 0
	, globalFail = 0
	, globalPass = 0
	, decMac = 2
	, testSets = {}
	, scorecard = {}
	, coverage = {
		  'full' : {}
		, 'min'  : {}
	};

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
			return JSON.stringify( thing, null, '\t' );
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

function goodNum ( fElng, zeroOk ) {
	var it = parseFloat(fElng);
	if ( ( typeof(fElng) == 'undefined' ) || ( ( typeof(fElng) === 'string' ) && ( fElng == '' ) ) || ( fElng === null ) ) {
		return false;
	}
	if ( !isNaN(fElng) ) {
		if ( typeof(zeroOk) === 'number' ) {
			return ( it > zeroOk );
		} else {
			return ( zeroOk || ( it > 0 ) );
		}
	}
	return false;
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
	var log = $('#log')
		, logPre = $('#log_pre')
		, d = new Date();
	if ( goodStr( string ) ) {
		log.append( '"' + d.toLocaleDateString() + ' ' + d.toLocaleTimeString() + '" ' + string + '\n' );
		logPre.scrollTop( log.height() );
	}
}

function whspace2html ( string ) {
	return (''+string).replace( /\t/g, '&nbsp;&nbsp;' ).replace( /(\r\n|\n|\r)/g, '<br />\n' );
}

function report ( pass, syntax, expect, res, note ) {
	var tpl = '';
	if ( goodStr(syntax) ) {
		tpl += '<tr class="tr-' + ( pass ? 'pass' : 'fail' )  + '">';
		tpl += '<td class="' + ( pass ? 'pass' : 'fail' )  + '">' + ( pass ? 'pass' : 'fail' ) + '</td>';
		tpl += '<td class="syntax">' + syntax + '</td>';
		// tpl += '<td class="returned">' + format_thing( res ) + '</td>';
		tpl += '<td class="expect">' + format_thing( expect ) + '</td>';
		tpl += '<td class="note">' + note
		if ( !pass ) {
			tpl += ' <span class="failreturn">(Failed return value: ' + format_thing( res ) + ')</span>';
		}
		tpl += '</td>';
		tpl += '</tr>';
		return tpl;
	}
}

function report_coverage ( target, min ) {
	var contBreak = []
		, cont = []
		, fail
		, funcCount = 0
		, funcTot
		, funcs = 0
		, tot = 0
		, miss = 0
		, hit = 0
		, iter
		, iterSub
		, pass
		, res = undefined
		, resTarget = $(target)
		, setTots = {}
		, slug = min ? 'min' : 'full'
		, subTmp
		, mv = min ? bpmv_min : bpmv
		, wrapId = 'bpmv_coverage_'+slug;
	if ( goodObj(mv) && ( resTarget.length > 0 ) && goodObj( coverage ) && goodStr(target) && ( goodObj(coverage.full) || goodObj(coverage.min) ) ) {
		$('#'+wrapId).remove();
		cont.push( '<div id="'+wrapId+'" class="coverage">' );
		cont.push( '<h2>bpmv.'+(min ? 'min.' : '')+'js Coverage</h2>' );
		cont.push( '<div class="subcontain">' );

		cont.push( '<h3>bpmv.'+(min ? 'min.' : '')+'js Coverage By Function</h3>' );
		cont.push( '<table  id="' + wrapId + '_table" class="coverage-by-func">' );
		cont.push( '<thead>' );
		cont.push( '<tr>' );
		cont.push( '<th>Function</th>' );
		cont.push( '<th>Total</th>' );
		cont.push( '<th>Breakdown</th>' );
		cont.push( '</tr>' );
		cont.push( '</thead>' );
		cont.push( '<tbody id="' + wrapId + '_body">' );
		for ( iter in mv ) {
			if ( mv.hasOwnProperty(iter) && goodFunc(mv[iter]) ) {
				funcs++;
				funcTot = sum(coverage[slug][iter]);
				if ( funcTot < 1 ) {
					miss++;
				} else {
					hit++
				}
				tot = tot + funcTot;
				cont.push( '<tr class="'+(funcTot < 1 ? ' covMiss' : '')+'">' );
				cont.push( '<td class="covFunc">bpmv.'+iter+'()</td>' );
				cont.push( '<td class="covTot">'+funcTot+'</td>' );
				cont.push( '<td class="covBreak">' );
				if ( goodObj(coverage[slug][iter]) ) {
					contBreak = [];
					for ( iterSub in coverage[slug][iter] ) {
						if ( goodObj(window[iterSub]) ) {
							if ( !goodObj(setTots[iterSub]) ) {
								setTots[iterSub] = {};
							}
							if ( !setTots[iterSub][iter] ) {
								setTots[iterSub][iter] = sum( coverage[slug][iter][iterSub] );
							}
							contBreak.push( '<tr>' );
							contBreak.push( '<td>'+window[iterSub]._spec.title+'</td>' );
							//contBreak.push( '<td>'+iterSub+'</td>' );
							contBreak.push( '<td>'+sum( coverage[slug][iter][iterSub] )+'</td>' );
							contBreak.push( '<td>'+coverage[slug][iter][iterSub].pass+'</td>' );
							contBreak.push( '<td>'+coverage[slug][iter][iterSub].fail+'</td>' );
							contBreak.push( '</tr>' );
						}
					}
					if ( contBreak.length > 0 ) {
						cont.push( '<table  id="' + wrapId + '_'+iterSub+'_breakdown">' );
						cont.push( '<thead>' );
						cont.push( '<tr>' );
						cont.push( '<th>Test Set</th>' );
						//cont.push( '<th>Set Slug</th>' );
						cont.push( '<th>Total</th>' );
						cont.push( '<th>Passed</th>' );
						cont.push( '<th>Failed</th>' );
						cont.push( '</tr>' );
						cont.push( '</thead>' );
						cont.push( '<tbody>' );
						cont.push( contBreak.join( '\n' ) );
						cont.push( '</tbody>' );
						cont.push( '</table>' );
					}
				} else {
					cont.push( 'No tests run!' );
				}
				cont.push( '</td>' );
				cont.push( '</tr>' );
			}
		}
		cont.push( '</tbody>' );
		cont.push( '<tfoot>' );
		cont.push( '<tr>' );
		cont.push( '<td colspan="3">' );
		cont.push( '<h4 style="display: inline;" class="test_totals">bpmv.'+(min ? 'min.' : '')+'js Coverage By Function Grand Total</h4> Functions:' );
		cont.push( '<span class="totalGrand">'+funcs+'</span>' );
		cont.push( 'Coverage: <span class="totalGrand">' + (parseFloat(hit/funcs) * 100).toFixed(decMac) + '%</span> ' );
		cont.push( ' Hits: ' );
		cont.push( '<span class="totalPassed">'+hit+'</span>' );
		cont.push( ' Missed: ' );
		cont.push( '<span class="totalFailed">'+miss+'</span>' );
		cont.push( ' Total Tests: ' );
		cont.push( '<span class="totalGrand">'+tot+'</span>' );
		cont.push( ' Average Tests: ' );
		cont.push( '<span class="totalGrand">'+parseFloat(tot/funcs).toFixed(decMac)+'</span>' );
		cont.push( '</td>' );
		cont.push( '</tr>' );
		cont.push( '</tfoot>' );
		cont.push( '</table>' );

		cont.push( '<h3>bpmv.'+(min ? 'min.' : '')+'js Coverage By Set</h3>' );
		for ( iter in setTots ) {
			for ( iterSub in mv ) {
				if ( ( iterSub === '_spec' ) || ( iterSub === '_cfg' ) ) {
					continue;
				}
				if ( !goodNum(setTots[iter][iterSub]) ) {
					setTots[iter][iterSub] = 0;
				}
			}
		}
		for ( iter in setTots ) {
			tot = 0;
			pass = 0;
			fail = 0;
			hit = 0;
			miss = 0;
			funcCount = 0;
			cont.push( '<h4>'+window[iter]._spec.title+' Coverage</h4>' );
			if ( goodStr(window[iter]._spec.note) ) {
				cont.push( '<p>'+window[iter]._spec.note+'</p>' );
			}
			cont.push( '<table  id="' + wrapId + '_table" class="set-coverage">' );
			cont.push( '<thead>' );
			cont.push( '<tr>' );
			cont.push( '<th>Set</th>' );
			cont.push( '<th>Function</th>' );
			cont.push( '<th>Total Tests</th>' );
			cont.push( '<th>Pass</th>' );
			cont.push( '<th>Fail</th>' );
			cont.push( '</tr>' );
			cont.push( '</thead>' );
			cont.push( '<tbody id="' + wrapId + '_body">' );


			for ( iterSub in mv ) {
				if ( ( iterSub === '_spec' ) || ( iterSub === '_cfg' ) ) {
					continue;
				}
				funcCount++;
				funcTot = sum( setTots[iter][iterSub] );
				tot = parseInt( tot + funcTot );
				if ( funcTot < 1 ) {
//					continue;
				}
				cont.push( '<tr class="'+(funcTot < 1 ? ' covMiss' : '')+'">' );
				cont.push( '<td>'+iter+'</td>' );
				cont.push( '<td>bpmv.'+iterSub+'()</td>' );
				cont.push( '<td>'+funcTot+'</td>' );
				if  ( ( coverage[slug][iterSub] == null ) || ( coverage[slug][iterSub][iter] == null ) ) {
					miss++;
					cont.push( '<td>0</td>' );
					cont.push( '<td>0</td>' );
				} else {
					hit++;
					cont.push( '<td>'+coverage[slug][iterSub][iter].pass+'</td>' );
					pass = parseInt( pass + coverage[slug][iterSub][iter].pass );
					cont.push( '<td>'+coverage[slug][iterSub][iter].fail+'</td>' );
					fail = parseInt( fail + coverage[slug][iterSub][iter].fail );
				}
				cont.push( '</tr>' );
			}
			cont.push( '</tbody>' );
			cont.push( '<tfoot>' );
			cont.push( '<tr>' );
			cont.push( '<td colspan="5">' );
			cont.push( '<strong style="display: inline;" class="test_totals">'+window[iter]._spec.title+' Coverage Totals</strong>:' );
			cont.push( 'Functions: <span class="totalGrand">' + funcCount + '</span> ' );
			cont.push( 'Coverage: <span class="totalGrand">' + (parseFloat(hit/funcCount) * 100).toFixed(decMac) + '%</span> ' );
			cont.push( 'Hits: <span class="totalPassed">' + hit + '</span> ' );
			cont.push( 'Missed: <span class="totalFailed">' + miss + '</span> ' );
			cont.push( ' Average Tests: ' );
			cont.push( '<span class="totalGrand">'+parseFloat(tot/funcCount).toFixed(decMac)+'</span>' );
			cont.push( ' Pass: ' );
			cont.push( '<span class="totalPassed">'+pass+'</span>' );
			cont.push( ' Fail: ' );
			cont.push( '<span class="totalFailed">'+fail+'</span>' );

/*
		appNd += '<h3 style="display: inline;" class="test_totals">bpmv' + (min?'.min.js ':'.js ') + set._spec.title + ' ';
		appNd += 'Grand Total</h3>: <span class="totalGrand">' + tested + '</span> ';
		appNd += 'Passed: <span class="totalPassed">' + passed + '</span> ';
		appNd += 'Failed: <span class="totalFailed">' + failed + '</span> ';
*/
			cont.push( '</td>' );
			cont.push( '</tr>' );
			cont.push( '</tfoot>' );
			cont.push( '</table>' );
		}

		cont.push( '</div>' ); // close subcontain
		cont.push( '</div>' ); // close wrapper div
		resTarget.append( cont.join( '\n' ) );
	}
}

function run_tests ( set, target, min ) {
	var tested = 0
		, passed = 0
		, failed = 0
		, appNd = ''
		, scorePart
		, minSLug = (min ? '_min.' : '.')
		, covKey = (min ? 'min' : 'full')
		, subId
		, tex;
	if ( goodObj( set ) && goodObj( set._spec ) ) {
		subId = set._spec.id;
		if ( testSets[subId] == null ) {
			testSets[subId] = 0;
		}
		myTarget = ''+target;
		$('#'+myTarget).parent().find( 'tbody tr' ).remove();
		$('#'+myTarget).parent().find( 'tfoot' ).remove();
		log( '*** running set ' + set._spec.title);
		for ( var aSub in set ) {
			if ( ( aSub === '_spec' ) || ( aSub === '_cfg' ) ) {
				continue;
			}
			if ( goodStr( aSub ) && goodArr( set[aSub] ) && ( set[aSub].length > 0 ) ) {
				log( '*** running ' + set[aSub].length + ' tests for bpmv' + minSLug + aSub + '()');
				if ( !goodObj(coverage[covKey][aSub]) ) {
					coverage[covKey][aSub] = {};
				}
				if ( typeof(coverage[covKey][aSub][subId]) === 'undefined' ) {
					coverage[covKey][aSub][subId] = {
						  'fail' : 0
						, 'pass' : 0
					};
				}
				for ( var aT = 0; aT < set[aSub].length; aT++ ) {
					var pass = false
						args = [];
					if ( set[aSub][aT].length > 0 ) {
						// funky fix for byref arrays having trouble when affected b y multiple runs
						for ( var ia = 0; ia < set[aSub][aT][0].length; ia++ ) {
							if ( goodArr(set[aSub][aT][0][ia]) ) {
								args.push( bpmv.clone(set[aSub][aT][0][ia]) );
							} else {
								args.push( set[aSub][aT][0][ia] );
							}
						}
					}
					if ( goodArr( set[aSub][aT] ) && ( set[aSub][aT].length == 3 ) ) {
						if ( min ) {
							pass = test_bpmvmin( aSub, args, set[aSub][aT][1], set[aSub][aT][2] );
						} else {
							pass = test_bpmv( aSub, args, set[aSub][aT][1], set[aSub][aT][2] );
						}
					} else if ( goodArr( set[aSub][aT] ) && ( set[aSub][aT].length == 2 ) ) {
						if ( min ) {
							pass = test_bpmvmin( aSub, args, set[aSub][aT][1] );
						} else {
							pass = test_bpmv( aSub, args, set[aSub][aT][1] );
						}
					}
					if ( pass.pass ) {
						passed++;
						globalPass++;
						coverage[covKey][aSub][subId].pass++;
					} else {
						failed++;
						globalFail++
						coverage[covKey][aSub][subId].fail++;
					}
					appNd += pass.report;
					tested++;
					globalTotal++;
					log( 'bpmv' + minSLug + aSub + '() test ' + aT + ' ' + ( pass.pass ? 'passed' : 'failed' ) );
				}
			}
		}
		testSets[subId]++;
		scorePart = set._spec.id + ( min ? '.MINSET' : '' );
		scorecard[scorePart] = {
			  'pass'   : parseInt(passed)
			, 'fail'   : parseInt(failed)
			, 'target' : target
		};
		appNd += '<tfoot><tr class="totals">';
		appNd += '<td colspan="4">';
		appNd += '<h3 style="display: inline;" class="test_totals">bpmv' + (min?'.min.js ':'.js ') + set._spec.title + ' ';
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
				} else if ( typeof(expect) == 'object' ) {
					if ( goodObj(JSON) ) {
						pass = JSON.stringify( expect ) == JSON.stringify( res );
					} else {
						// this will be false for arrays... :/
						pass = expect == res;
					}
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
		return { 'pass' : pass, 'report' : report( pass, syntax, expect, res, note ) };
	}
}

function sum ( thing, noRecur ) {
	var tot = 0
		, iter;
	if ( goodNum(thing) ) {
		return thing;
	}
	if ( goodObj(thing) ) {
		for ( iter in thing ) {
			if ( thing.hasOwnProperty(iter) ) {
				if ( goodObj(thing[iter]) && !noRecur ) {
					tot = 1*tot + sum( thing[iter] );
				} else if ( goodNum(thing[iter], true) ) {
					tot = 1*tot + thing[iter];
				}
			}
		}
	}
	return tot;
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
		, tDootie = null
		, subFound = []
		, scorePart
		, testRes;
	if ( ( resTarget.length > 0 ) && goodObj( set ) && goodObj(set._spec) && goodStr(set._spec.title) && goodStr(target) ) {
		subTarg = ( min ? 'min_' : '' ) + set._spec.title.replace( /[^a-z^0-9^\-^\_]+/gi, '_' ) + '_results';
		subTargCont = subTarg + '_container';
		testRes = run_tests( set, subTarg, min );
		cont.push( '<div id="' + subTargCont + '">' );
		cont.push( '<h2>bpmv' + ( min ? '.min' : '' ) + '.js ' + set._spec.title );
		scorePart = set._spec.id + ( min ? '.MINSET' : '' );
		if ( goodObj(scorecard[scorePart]) && ( scorecard[scorePart].fail > 0 ) ) {
			cont.push( ' <span class="hsFail">('+scorecard[scorePart].fail+' test'+(scorecard[scorePart].fail>1?'s':'')+' failed)</span>' );
		}
		cont.push( '</h2>' );
		cont.push( '<div class="subcontain">' );
		if ( goodStr(set._spec.note) ) {
			cont.push( '<p>'+set._spec.note+'</p>' );
		}
		cont.push( '<table >' );
		cont.push( '<thead>' );
		cont.push( '<tr>' );
		cont.push( '<th>Pass</th>' );
		cont.push( '<th>Syntax</th>' );
		// cont.push( '<th>Returned</th>' );
		cont.push( '<th>Expect</th>' );
		cont.push( '<th>Note</th>' );
		cont.push( '</tr>' );
		cont.push( '</thead>' );
		cont.push( '<tbody id="' + subTarg + '">' );
		cont.push( testRes );
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

