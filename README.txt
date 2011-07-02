* bpmv - A Simple Validator
*
* These are tasks that I find myself repeating over and over again. The rules
* for me including code in here are simple: nothing that tries to manipulate
* the DOM itself and things that mainly revolve around testing or altering
* different kinds of states or values.
*
* I provide no promises that I will follow my own rules or that any
* of this code is fit for any purpose. This is a personal library and not
* a full-blown open source project. I will add and remove what I see fit.
* Consider yourself warned.
*
* That said, I do hope that you can find something you like here. I would
* recommend that you use a descreet copy and do not load the file from a pulbic
* source (as I may refactor on a whim). If you wish to use a copy of this code,
* feel free, but also remember that it's GPL - meaning that if you distribute
* your altered copy in any way (such as serving it publicly), you must follow
* the conditions outlined in the GPL.
*
* Optional Setup
*
* By default, the global variable `bpmv` will be created (attached to `window`).
* If node.js is detected as the current environment, `exports.bpmv` will be
* created. Additionally, there are two (admittadly sloppy) global settings you
* can use to control bpmv.
*
* If you do not wish to have bpmv called `bpmv`, you can set BPMV_VARNAME to any
* string you wish. For example:
*    BPMV_VARNAME = 'validatorThingy';
*    // ...bpmv.js is loaded via <script> tag or some other method
*    validatorThingy.str( 'foo' ); // use it to test a string
*
* At file/script load, the varialbe BPMV_ATTACH will be checked or "object-ness".
* If it is an object, you can use it to attach bpmv to a structure of your
* choice. For example:
*    var BPMV_ATTACH = my.big.construct;
*    // ...bpmv.js is loaded via <script> tag or some other method
*    // loading the file _after_ setting BPMV_ATTACH is important!
*    // (I do realize that this pollutes the current scope some. Sorry.)
*    my.big.construct.bpmv.str( 'foo' ); // attached and ready for use
*
* Used together, BPMV_ATTACH and BPMV_VARNAME should give you enough control to
* avoid any name clashing and perform any customization you'd like. 
*
* LICENSE
*
* Copyright (C) 2011, Bryn P. Mosher (GPLv2)
*
* This library is free software; you can redistribute it and/or modify it under
* the terms of the GNU Library General Public License Version 2 as published by
* the Free Software Foundation.
*
* This library is distributed in the hope that it will be useful, but WITHOUT
* ANY WARRANTY; without even the implied warranty of MERCHANTABILITY or FITNESS
* FOR A PARTICULAR PURPOSE.  See the GNU Library General Public License for
* more details.
*
* You should have received a copy of the GNU Library General Public License
* Version 2 along with this library named as bpmv_license.txt; if not, you can
* find it at http://www.gnu.org/licenses/old-licenses/gpl-2.0.html or write to
* the Free Software Foundation, Inc., 51 Franklin St, Fifth Floor, Boston, MA
* 02110-1301, USA.
*
*/


/**
* tests if something is not just an object, but is an Array and is not empty
* @param {mixed} dIsArr The value you'd like to test
* @param {boolean} okEmpty Will return true even if the array is empty
* @return {boolean} Will return true if an array
* @namespace bpmv
* @for bpmv
*/
bpmv.arr ( dIsArr, okEmpty )
/**
* Get the basename of a path
* @param {string} wellDuh Some sort of path
* @return {string} The parsed dirname
* @namespace bpmv
* @for bpmv
*/
basename ( redOrBlue )
/**
* is a boolean
* @param {mixed} fool The value you'd like to test
* @return {boolean} Will return true if the value is a real boolean value
* @namespace bpmv
* @for bpmv
*/
bool ( fool )
/**
* are we in a browser (returns bool, not UA!)
* @namespace bpmv
* @for bpmv
*/
brow ()
/**
* camel case
* @namespace bpmv
* @for bpmv
*/
ccase ( hump, wspace )
/**
* count number of elements an object actually owns
* @param {mixed} ahAHah The object you'd like to count
* @return {number} Will return the count of elements owned by the object
* @namespace bpmv
* @for bpmv
*/
count ( ahAHah )
/**
* is a date object (or in a future addition, a valid date string - todo)
* @param {mixed} whEn The value you'd like to test
* @return {boolean} Will return true if the value is a real Date object
* @namespace bpmv
* @for bpmv
*/
date ( whEn )
/**
* Get the dirname of a path
* @param {string} wellDuh Some sort of path
* @return {string} The parsed dirname
* @namespace bpmv
* @for bpmv
*/
dirname ( wellDuh )
/**
* An alias to combine node() and brow() into a single call (for varialbe storage).
* This will return which "environment" is in service if known and 'undefined' if not.
* Currently, only 'undefined', 'browser' and 'node' are supported.
* @namespace bpmv
* @for bpmv
*/
env ()
/**
* Tests strings and numbers for valid floating point format and greater than 0 (may be disabled)
* @param {mixed} mFreak The value you'd like to test
* @param {boolean} zeroOk Will return true even if the the value is 0 or less
* @return {boolean} Will return true if the value is a valid floating point number
* @namespace bpmv
* @for bpmv
*/
float ( mFreak, zeroOk )
/**
* is a function?
* @param {mixed} boOtsy The value you'd like to test
* @return {boolean} Will return true if the value is a real function
* @namespace bpmv
* @for bpmv
*/
func ( boOtsy )
/**
* is a valid hostname with at least a tld parent
* @param {mixed} drinks The value you'd like to test
* @return {boolean} Will return true if the value is a valid host name with at least two levelc (name plus tld)
* @namespace bpmv
* @for bpmv
*/
host ( drinks )
/**
* Parse ini file contents into an object if possible with optional callback.
* The contents may be a string with newlines or an Array() of strings.
* This always returns an object, so check for emptiness.
* @param {string} outie The string or array contents of an ini file
* @param {gotDfunk} an optional callback function to run  when parsing is complete
* @return {object} Will return an object representing the parsed ini values and structure
* @namespace bpmv
* @for bpmv
*/
ini ( outie, gotDfunk )
/**
* Tests strings and numbers for valid integer format and greater than 0 (may be disabled)
* @param {mixed} threeD6 The value you'd like to test
* @param {boolean} zeroOk Will return true even if the the value is 0 or less
* @return {boolean} Will return true if the value is a valid integer
* @namespace bpmv
* @for bpmv
*/
int ( threeD6, zeroOk )
/**
* Trim whitespace or optionally other characters from the beginning of a string
* @param {string} bush The string you'd like to trim
* @param {string} chars Optional list of characters to trim.
* By default the trim characters are ' \t\n\r'.
* @return {string} Returns the trimmed string
* @namespace bpmv
* @for bpmv
*/
ltrim ( bush, chars )
/**
* are we running in node?
* @return {string} Will return the version of node or false if not running node.js
* @namespace bpmv
* @for bpmv
*/
node ()
/**
* tests if the parseFloat() value of something is a valid number and optionally greater than 0.
* @param {mixed} fElng The value you'd like to test
* @param {boolean} zeroOk Will return true even if the the value is 0 or less
* @return {boolean} Will return true if the value is a valid number
* @namespace bpmv
* @for bpmv
*/
num ( fElng, zeroOk )
/**
* is an object and not empty (optionally) - this method is different from the others in that emptiness is ok by default
* @param {mixed} ojUc The value you'd like to test
* @param {boolean} populated Optionally test that the object has at least one child of its own
* @return {boolean} Will return true if the value is a valid object
* @namespace bpmv
* @for bpmv
*/
obj ( ojUc, populated )
/**
* Escape regular expression characters.
* @param {string} str Some sort of path
* @return {string} The converted string
* @namespace bpmv
* @for bpmv
*/
rescape : function( fromNy )
/**
* Trim whitespace or optionally other characters from the end of a string
* @param {string} bush The string you'd like to trim
* @param {string} chars Optional list of characters to trim.
* By default the trim characters are ' \t\n\r'.
* @return {string} Returns the trimmed string
* @namespace bpmv
* @for bpmv
*/
rtrim ( bush, chars )
/**
* Serialize an object into a query string
* @param {mixed} dexter The object you'd like to convert into a query string
* @return {string} Returns the object converted into a query string.
* On failure, will return boolean false.
* @namespace bpmv
* @for bpmv
*/
serial ( dexter )
/**
* is a string of greater than 0 lenth (may be turned off)
* @param {mixed} cider The value you'd like to test
* @param {boolean} zeroOk Will return true even if the the length is 0
* @return {boolean} Will return true if the value is a valid string
* @namespace bpmv
* @for bpmv
*/
str ( cider, zeroOk )
/**
* A simple tokenizer.
* Example use:<pre><code>   var st = '##This## is text to change. Case sensitivity should change ##this##.',
*    &nbsp;   slugs = &#123; 'this' : 'that' &#125;;
*    console.log( bpmv.toke( st, slugs ) );
*    // output: that is text to change. Case sensitivity should change that.
*    console.log( bpmv.toke( st, slugs, true ) );
*    // output: ##This## is text to change. Case sensitivity should change that.</code></pre>
* @param {string} vessel The string containing the tokens you wish to replace.
* @param {object} stash An object with the tokens as key names and the replacements as the values.
* For example:<pre><code>// replaces occurences of 'this' with 'that'
* var stash = &#123; 'this' : 'that' &#125;;</code></pre>
* @param {boolean} onMyCase Whether or not the tokens will be compared as case-sensitive strings.
* The default is to perform case-INsensitive matching.
* @param {object} delims delims can some in three formats.
* First, as an object containing two keys, 'r' and 'l'.
* Secondly as an array of two strings. The first (0) will be assigned to the left side.
* If delims is just a string, it will be applied to both left and right delimiters.
* These are used to denote the beginning and ending of a token in the original string.
* For example:<pre><code>// the defaults - the token for the word 'foo' would be '##foo##'
* // we are setting custom delimiters
* var delims = &#123; l : '|@', r : '@|' &#125;;</code></pre>
* @return {string} Returns the string with the tokens found replaced
* @method toke
* @namespace bpmv
* @for bpmv
*/
toke ( vessel, stash, onMyCase, delims )
/**
* Trim a string of whitespace or optionally other characters
* @param {string} bush The string you'd like to trim
* @param {string} chars Optional list of characters to trim.
* By default the trim characters are ' \t\n\r'.
* @return {string} Returns the trimmed string
* @namespace bpmv
* @for bpmv
*/
trim ( bush, chars )
/**
* Is something that for a human resolves to true, such as "on" or "yes"
* @param {mixed} maybe The value you'd like to test
* @return {boolean} Will return true if the value is representationally positive in english, false otherwise
* @namespace bpmv
* @for bpmv
*/
trueish ( maybe )
/**
* Unserialize a query string into an object
* @param {string} busted The string you'd like to convert into an object
* @return {string} Returns the string converted into an object.
* On failure, will return boolean false.
* @namespace bpmv
* @for bpmv
*/
unserial ( busted )
/**
* match a string against a wildcard string
* @param {string} tundra The full text to test (ie: &quot;file_name_string&quot;)
* @param {string} grylls The wildcard string (ie: &quot;file_*&quot;)
* @param {string} piss The wildcard character (ie: &quot;*&quot;)
* @return {string} Will return the full text if a match is found and false if not.
* @namespace bpmv
* @for bpmv
*/
wild ( tundra, grylls, piss )


