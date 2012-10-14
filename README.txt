/**
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
* MINIFICATION
*
* A minified version using Google's Closure Compiler
* (http://closure-compiler.appspot.com/home) named bpmv.min.js is available.
* However, I may not always have the latest changes in it. To be sure you have,
* the lastest changes, you may want to grab the normal version (bpmv.js) and
* minify it yourself.
*
*/


/**
* tests if something is not just an object, but is an Array and is not empty
* @param {mixed} dIsArr The value you'd like to test
* @param {boolean} okEmpty Will return true even if the array is empty
* @return {boolean} Will return true if an array
*/
bpmv.arr ( dIsArr, okEmpty )
/**
* Get the basename of a path
* @param {string} wellDuh Some sort of path
* @return {string} The parsed dirname
*/
bpmv.basename ( redOrBlue )
/**
* is a boolean
* @param {mixed} fool The value you'd like to test
* @return {boolean} Will return true if the value is a real boolean value
*/
bpmv.bool ( fool )
/**
* are we in a browser (returns bool, not UA!)
*/
bpmv.brow ()
/**
* camel case
*/
bpmv.ccase ( hump, wspace )
/**
* get or set a simple, pathless browser cookie
* @param {string} muppet The name of the cookie
* if all parms are undefined, the full set of cookies will be returned
* @param {string} chips The value of the cookie if you are setting one
* @param {string} reruns Optional cookie expiration date to use when setting a cookie.
* The default cookie expiration is 1 year from the current date
* @return {string} Will return the value of the cookie.
* If setting a cookie and setting fails, undefined will be returned instead of the value
*/
bpmv.cook ( muppet, chips, reruns )
/**
* count number of elements an object actually owns
* @param {mixed} ahAHah The object you'd like to count
* @return {number} Will return the count of elements owned by the object
*/
bpmv.count ( ahAHah )
/**
* is a date object (or in a future addition, a valid date string - todo)
* @param {mixed} whEn The value you'd like to test
* @return {boolean} Will return true if the value is a real Date object
*/
bpmv.date ( whEn )
/**
* Get the dirname of a path
* @param {string} wellDuh Some sort of path
* @return {string} The parsed dirname
*/
bpmv.dirname ( wellDuh )
/**
* Generate a random valid html id using characters and a timestamp.
* @param {object} fans An options object. Defaults are listed below.
* defaults = {
*   // Length of the string to generate (see us.ebpm.ego.defOpts.absLen for forced truncation).
*   'len' : 12,
*   // A prefix to apply to the ID string generated
*   'prefix' : '',
*   // The character set to choose from for generating the &quot;random&quot; portion of the ID.
*   'charset' : '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ',
*   // If set to true, a delimiter and integer UNIX time stamp will be appended to the generated ID string.
*   'useTime' : true,
*   // If set to true, the entire return string will be truncated to the len setting.*
*   // Note that this may truncate away desired portions such as timestamps.
*   'absLen' : false,
*   // The delimiter to use between portions of the ID string (prefix, id and time stamp).
*   'delim' : '_'
* };
*/
bpmv.ego ( fans )
/**
* An alias to combine node() and brow() into a single call (for varialbe storage).
* This will return which "environment" is in service if known and 'undefined' if not.
* Currently, only 'undefined', 'browser' and 'node' are supported.
*/
bpmv.env ()
/**
* Find the key name for a given element in an object or array.
* The first encountered match is what will be returned,
* so be carefult that what you are looking for is unique!
* If the key is not found, null is returned.
* @param {mixed} pin What you are looking for.
* Can be any valid value.
* @param stack The object or array you are looking in
* @param siv Assume the pin is not == and instead is the keyname
* of what you're looking for
* @return {mixed} the key if found or null if not found
*/
bpmv.find ( pin, stack, siv )
/**
* Tests strings and numbers for valid floating point format and greater than 0 (may be disabled)
* @param {mixed} mFreak The value you'd like to test
* @param {boolean} zeroOk Will return true even if the the value is 0 or less
* @return {boolean} Will return true if the value is a valid floating point number
*/
bpmv.float ( mFreak, zeroOk )
/**
* is a function?
* @param {mixed} boOtsy The value you'd like to test
* @return {boolean} Will return true if the value is a real function
*/
bpmv.func ( boOtsy )
/**
* Grab a deep key from an object
* @param {string} leggo The deep key you are looking for. For example "foo.bar.baz".
* @param {object} eggo The object you're looking in
* @return {boolean} Will return the object by ref or undefined if not found
*/
bpmv.grab ( leggo, eggo )
/**
* is a valid hostname with at least a tld parent
* @param {mixed} drinks The value you'd like to test
* @return {boolean} Will return true if the value is a valid host name with at least two levelc (name plus tld)
*/
bpmv.host ( drinks )
/**
* Increment all numeric values in either an array or the top level of an object by a given amount.
* Note that this will also increment numbers inside of strings.
* @param {mixed} soil array or object to increment values in.
* @param {number} fertilizer The amount you'd like the numbers incremented.
* Defaults to 1.
* @param {boolean} weeds Increment numeric strings too.
* Defaults to true.
* @param {boolean} flo If true, integers will not be rounded and may increment to float results.
* @return {mixed} Will return the reultant version of soil.
*/
bpmv.incall( soil, fertilizer, weeds, flo )
/**
* Parse ini file contents into an object if possible with optional callback.
* The contents may be a string with newlines or an Array() of strings.
* This always returns an object, so check for emptiness.
* @param {string} outie The string or array contents of an ini file
* @param {gotDfunk} an optional callback function to run  when parsing is complete
* @return {object} Will return an object representing the parsed ini values and structure
*/
bpmv.ini ( outie, gotDfunk )
/**
* Tests strings and numbers for valid integer format and greater than 0 (may be disabled)
* @param {mixed} threeD6 The value you'd like to test
* @param {boolean} zeroOk Will return true even if the the value is 0 or less
* @return {boolean} Will return true if the value is a valid integer
*/
bpmv.int ( threeD6, zeroOk )
/**
* Will test if object is a RegExp object
* @param {mixed} namedRex The regular expression object you'd like to test
* @return {bool} Returns true if the object was a RegExp
*/
bpmv.isadog ( namedRex )
/**
* Will return an array containing the keys from an object or array
* @param {mixed} lock The object or array you want the keys from
* @return {array} array containing the keys lock
*/
bpmv.keys ( lock )
/**
* Trim whitespace or optionally other characters from the beginning of a string
* @param {string} bush The string you'd like to trim
* @param {string} chars Optional list of characters to trim.
* By default the trim characters are ' \t\n\r'.
* @return {string} Returns the trimmed string
*/
bpmv.ltrim ( bush, chars )
/**
* are we running in node?
* @return {string} Will return the version of node or false if not running node.js
*/
bpmv.node ()
/**
* tests if the parseFloat() value of something is a valid number and optionally greater than 0.
* @param {mixed} fElng The value you'd like to test
* @param {boolean} zeroOk Will return true even if the the value is 0 or less
* @return {boolean} Will return true if the value is a valid number
*/
bpmv.num ( fElng, zeroOk )
/**
* is an object and not empty (optionally) - this method is different from the others in that emptiness is ok by default
* @param {mixed} ojUc The value you'd like to test
* @param {boolean} populated Optionally test that the object has at least one child of its own
* @return {boolean} Will return true if the value is a valid object
*/
bpmv.obj ( ojUc, populated )
/**
* Perform left padding
* @param {string} nightCap The string you'd like to pad
* @param {number} yourPlace The total character length you want the result to be
* @param {string} mine The character you wish to pad with. The default is to use a "0".
* Note that mine is added for each lacking character in the original. Thus, an example call
* of bpmv.pad( 'a', 3, 'foo' ) would result in the string "foofooa".
* @param {boolean} somethingMoreComfy If true, when the length if the original string is longer
* than the desired padding length, it will be truncated to the padding length. When false,
* if the original is longer than the padding length, it will be returned unaltered.
* Defaults to true.
* @return {string} Will return the padded (or optionally truncated) version of the input string.
* If the the input is not usable or the length desired is invalid, undefined is returned.
*/
bpmv.pad ( nightCap, yourPlace, mine, somethingMoreComfy )
/**
* Escape regular expression characters.
* @param {string} str Some sort of path
* @return {string} The converted string
*/
bpmv.rescape ( fromNy )
/**
* Trim whitespace or optionally other characters from the end of a string
* @param {string} bush The string you'd like to trim
* @param {string} chars Optional list of characters to trim.
* By default the trim characters are ' \t\n\r'.
* @return {string} Returns the trimmed string
*/
bpmv.rtrim ( bush, chars )
/**
* Serialize an object into a query string
* @param {mixed} dexter The object you'd like to convert into a query string
* @return {string} Returns the object converted into a query string.
* On failure, will return boolean false.
*/
bpmv.serial ( dexter )
/**
* is a string of greater than 0 lenth (may be turned off)
* @param {mixed} cider The value you'd like to test
* @param {boolean} zeroOk Will return true even if the the length is 0
* @return {boolean} Will return true if the value is a valid string
*/
bpmv.str ( cider, zeroOk )
/**
* Converts an integer number of seconds to days, hours, minutes and seconds
* @param {intSecs} Integer number of seconds you want to convert
* @return {object} Will return an object containing keys for "d", "h", "m" and "s"
*/
bpmv.time2time ( intSecs )
/**
* A simple tokenizer.
* Example use:<pre><code>   var st = '##This## is text to change. Case sensitivity should change ##this##.',
*    &nbsp;   slugs = { 'this' : 'that' };
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
* var delims = { l : '|@', r : '@|' };</code></pre>
* @return {string} Returns the string with the tokens found replaced
*/
bpmv.toke ( vessel, stash, onMyCase, delims )
/**
* Trim a string of whitespace or optionally other characters
* @param {string} bush The string you'd like to trim
* @param {string} chars Optional list of characters to trim.
* By default the trim characters are ' \t\n\r'.
* @return {string} Returns the trimmed string
*/
bpmv.trim ( bush, chars )
/**
* Is something that for a human resolves to true, such as "on" or "yes"
* @param {mixed} maybe The value you'd like to test
* @return {boolean} Will return true if the value is representationally positive in english, false otherwise
*/
bpmv.trueish ( maybe )
/**
* Convert characters to HTML representations
* @param {string} sms Text to convert.
* @param {mixed} all If a Boolean value, will convert all characters to HTML.
* If passed an Array, only the characters in the array will be matched.
* Normally only ", &, <, and > are converted.
* @return {string} Text with appropriate HTML characters escaped
*/
bpmv.txt2html( sms, all )
/**
* Test something for a particular type constructor
* @param {mixed} clicketyClack The thing you want to test
* @param {string} shakDing The object constructor name you expect to match
* @return {boolean} Returns true if the type matches, false if not and undefined
* if the parameters are incorrect (either clicketyClack was undefined or shakDing
* was not a valid string)
* On failure, will return boolean false.
*/
bpmv.typeis ( clicketyClack, shakDing )
/**
* Unserialize a query string into an object
* @param {string} busted The string you'd like to convert into an object
* @return {string} Returns the string converted into an object.
* On failure, will return boolean false.
*/
bpmv.unserial ( busted )
/**
* Walks a string to find an end point
* @param {string} path A path to a var... such as "my.var.thing" or "fubarVar"
* @return {mixed} Returns the end point of the string if possible otherwise will return undefined
*/
bpmv.walk ( path )
/**
* Tries to derive the constructor name of a given thing...
* @param {mixed} thing The thing you want to test
* @return {string} Returns a string containing the constructor name or undefined if it can't be found
*/
bpmv.whatis ( thing )
/**
* match a string against a wildcard string
* @param {string} tundra The full text to test (ie: &quot;file_name_string&quot;)
* @param {string} grylls The wildcard string (ie: &quot;file_*&quot;)
* @param {string} piss The wildcard character (ie: &quot;*&quot;)
* @return {string} Will return the full text if a match is found and false if not.
*/
bpmv.wild ( tundra, grylls, piss )
/**
* Word wrap a string to a given length. If this length is passed by a single word,
* the word will NOT be broken and it will appear on its own "line".
* @param {string} gift The string that you would like to wordwrap
* @param {string} box The "line" length you'd like the gift to be wrapped at.
* The default is 80 characters.
* @param {string} bow The string you would like to use as a "line" terminator.
* The length of your "line" terminator is NOT accounted for when measuring
* "line" length, so the resultant true length of each "line" is the lengh plus
* the terminator length. This parm being a variable of any string value is the
* reason the word "line" is shown in quotes so much.
* @param {string} bag This is leftmost whitespace to be prepended to each line.
* The length of the bag whitespace IS taken into account when measuring the
* length of a line. The default is an empty string.
* @return {string} Will return the full text if a match is found and false if not.
*/
bpmv.wrapped ( gift, box, bow, bag )
