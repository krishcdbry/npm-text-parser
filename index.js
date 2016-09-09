'use strict'

/**
 * Text parser which receives text data as input and replaces the urls with clickable links (anchor tags),
 * emails as clickable mail:to tags and also replaces hash tags (#tag) with blue colored text (Optional)
 *
 * @module npm-text-parser
 * @typicalname parseText
 * @example
 * var sortBy = require('npm-text-parser')
 */

exports.parseUrl = parseUrl;
exports.parseEmail = parseEmail;
exports.parseHashtags = parseHash;
exports.parse = parseAll;


/**
 * @name parseUrl
 * @typicalname parseUrl
 * @param {string} text  - Input text
 * @return {string} parsed string
 *
 * @usage
 * var parseText = require('npm-text-parser')
 * var inputString = 'This is awesome it parses the url's dude and http://krishcdbry.com done !'
 *
 * parseText.parseUrl(inputString)
 * // This is awesome it parses the url's dude and <a href="http://krishcdbry.com" target="_blank">http://krishcdbry.com</a> done !
 *
 */
function parseUrl (text) {

	var urls = /(\b(https?|ftp):\/\/[A-Z0-9+&@#\/%?=~_|!:,.;-]*[-A-Z0-9+&@#\/%=~_|])/gim;  // Url regex

	text = text ? String(text).replace(/<[^>]+>/gm, '') : '';  // Remove all the html tags

	if (text.match(urls)) {
		text = text.replace(urls, "<a href=\"$1\" target=\"_blank\">$1</a>")  // Replaces the url matches with anchor tags
	}

	return text.replace(/\n\r?/g, '<br />');

}


/**
 * @name parseEmail
 * @typicalname parseEmail
 * @param {string} text  - Input text
 * @return {string} parsed string
 *
 * @usage
 * var parseText = require('npm-text-parser')
 * var inputString = 'This is awesome it parses the email's dude and krishcdbry@gmail.com done !'
 *
 * parseText.parseEmail(inputString)
 * // This is awesome it parses the url's dude and  <a href="mailto:krishcdbry@gmail.com">krishcdbry@gmail.com</a> done !
 *
 */
function parseEmail (text) {

	var emails = /(\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,6})/gim;  // Email regex

	text = text ? String(text).replace(/<[^>]+>/gm, '') : ''; // Remove all the html tags

	if (text.match(emails)) {
		text = text.replace(emails, "<a href=\"mailto:$1\">$1</a>"); // Replaces the email matches with mail:to anchor tags
	}

	return text.replace(/\n\r?/g, '<br />');

}


/**
 * @name parseHashtags
 * @typicalname parseHash
 * @param {string} text  - Input text
 * @return {string} parsed string
 *
 * @usage
 * var parseText = require('npm-text-parser')
 * var inputString = 'This is awesome it parses the hash tag's dude and #krishcdbry done !'
 *
 * parseText.parseHashtags(inputString)
 * // This is awesome it parses the url's dude and <a href="javascript:;">#krishcdbry</a> done !
 *
 */
function parseHash (text) {

	var hashTags = /((^|[ ])#[a-zA-Z0-9\d-]{1,500})/gim; // Hashtags regex

	text = text ? String(text).replace(/<[^>]+>/gm, '') : '';  // Remove all the html tags

	if (text.match(hashTags)) {
		text = text.replace(hashTags, "<a href=\"javascript:;\">$1</a>"); // Replaces the hashtag matches with hash# anchor tags
	}

	return text.replace(/\n\r?/g, '<br />');

}


/**
 * @name parseAll
 * @typicalname parseAll
 * @param {string} text  - Input text
 * @return {string} parsed string
 *
 * @usage
 * var parseText = require('npm-text-parser')
 * var inputString = 'This is awesome it parses the url's , email's and hash tag's dude http://krishcdbry@gmail.com and email krishcdbry@gmail.com also #krishcdbry done !'
 *
 * parseText.parseAll(inputString)
 * // This is awesome it parses the url's , email's and hash tag's dude <a href="http://krishcdbry@gmail.com" target="_blank">http://krishcdbry@gmail.com</a>
 * // and email <a href="mailto:krishcdbry@gmail.com">krishcdbry@gmail.com</a> also <a href="javascript:;">#krishcdbry</a> done !
 *
 */
function parseAll (text) {

	var urls = /(\b(https?|ftp):\/\/[A-Z0-9+&@#\/%?=~_|!:,.;-]*[-A-Z0-9+&@#\/%=~_|])/gim; // Url regex
	var emails = /(\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,6})/gim; // Email regex
	var hashTags = /((^|[ ])#[a-zA-Z0-9\d-]{1,500})/gim; // Hashtags regex

	text = text ? String(text).replace(/<[^>]+>/gm, '') : ''; // Remove all the html tags

	if (text.match(urls)) {
		text = text.replace(urls, "<a href=\"$1\" target=\"_blank\">$1</a>");
	}

	if (text.match(emails)) {
		text = text.replace(emails, "<a href=\"mailto:$1\">$1</a>");
	}

	if (text.match(hashTags)) {
		text = text.replace(hashTags, "<a href=\"javascript:;\" target=\"_blank\">$1</a>");
	}

	return text.replace(/\n\r?/g, '<br />');

}
