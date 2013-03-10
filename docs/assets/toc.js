var tocCount = 0;

function toc_handle_click ( ev ) {
	var cl = null
		, gotcha = null;
	if ( bpmv.obj(ev) && bpmv.obj(ev.currentTarget) ) {
		cl = $(ev.currentTarget);
		if ( bpmv.obj( cl ) && ( cl.length > 0 ) && cl.is( 'li[toc-to]' ) ) {
			gotcha = $('*[toc='+cl.attr( 'toc-to' )+']');
			if ( bpmv.obj( gotcha ) && ( gotcha.length > 0 ) ) {
				toc_toggle();
				$('html,body').animate( {
						'scrollTop' : gotcha.offset().top - 40
				}, 300 );
			}
		}
	}
}

function toc_check_scroll () {
	var currToc = $('#toc')
		, currTocCont = $('#toc_cont');
	if ( currTocCont.outerHeight() <= currToc.innerHeight() ) {
		currToc.css( 'overflow-y', 'hidden' );
	} else {
		currToc.css( 'overflow-y', 'scroll' );
	}
	$('#toc_close').hide( 0 ).show( 0 ).css( 'top', currToc.scrollTop()+'px' );
}

function toc_toggle ( ev, forceOff ) {
	var currToc = $('#toc')
		, currTocCont = $('#toc_cont')
		, currTocTog = $('#toc_tog');
	if ( bpmv.obj( currToc ) && bpmv.obj(currTocTog) ) {
		currToc.stop( true, true );
		currTocTog.stop( true, true );
		if ( currToc.is( ':visible' ) || forceOff ) {
			currToc.fadeOut( 200 );
			currTocTog.fadeIn( 200 );
		} else {
			currToc.fadeIn( 200, toc_check_scroll );
			currTocTog.fadeOut( 200 );
		}
	}
	if ( bpmv.obj(ev) ) {
		if ( bpmv.func(ev.stopPropagation) ) {
			ev.stopPropagation();
		}
		if ( bpmv.func(ev.preventDefault) ) {
			ev.preventDefault();
		}
	}
	return false;
}

function toc_update () {
	var currToc = $('#toc')
		, currTocTog = $('#toc_tog')
		, headers = $('.contain h1,.contain h2,.contain h3,.contain h4,.contain h5,.contain h6')
		, tH = null
		, cont = [ '<div id="toc_cont">', '<div id="toc_close">close</div>' ]
		, node = '';
	if ( bpmv.obj( headers ) && ( headers.length > 0 ) ) {
		cont.push( '<ul id="toc_ul">' );
		for ( var aH = 0; aH < headers.length; aH++ ) {
			tH = $(headers[aH]);
			node = tH.get(0).nodeName;
			isToc = tH.attr( 'toc' );
			if ( !bpmv.str( isToc ) )  {
				isToc = tocCount++;
				tH.attr( 'toc', isToc );
			}
			if ( bpmv.obj( tH ) && ( tH.length == 1 ) ) {
				cont.push( '<li toc-to="' + isToc + '" class="' + node.toLowerCase() + '">' + tH.get(0).innerHTML + '</li>' );
			}
		}
		cont.push( '</ul>' );
		cont.push( '</div>' ); // close toc_cont
		if ( bpmv.obj( currToc ) && ( currToc.length > 0 ) ) {
			currToc.replaceWith( '<div id="toc">' + cont.join( '\n' ) + '</div>' );
		} else {
			currToc = $('<div id="toc"></div>');
			currToc.append( cont.join( '\n' ) );
			$('body').prepend( currToc );
		}
		if ( !bpmv.obj( currTocTog ) || ( currTocTog.length < 1 ) ) {
			$('body').prepend( '<div id="toc_tog">Contents</div>' );
			currTocTog = $('#toc_tog');
			currTocTog.click( toc_toggle );
		}
		$('#toc_close').click( toc_toggle );
		$('#toc_ul li').click( toc_handle_click );
		$('#toc').scroll( toc_check_scroll );
	}
}

$(window).resize( toc_check_scroll );

