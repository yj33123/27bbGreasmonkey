// ==UserScript==
// @name       27bb        
// @namespace  http://27bb.com    
// @include    http://27bb.com/source/plugin/comic/html/* 
// @require    http://ajax.aspnetcdn.com/ajax/jquery/jquery-1.7.2.js
// ==/UserScript==
var img1 = $($('p:has(img)')[0].children[0]);
var img2 = $($('p:has(img)')[1].children[0]);
img1.after(img2).css('float', 'right');
img2.css('float', 'left');
$('iframe').remove();
$('div')[0].remove();
$('div')[0].remove();
$('div')[1].remove();
$('br').remove();
$('p')[0].remove();

var add = document.location.href;
var domainUrl = add.substring(0, add.lastIndexOf('/') + 1);
var currentPage = Number(Number(add.substring(add.lastIndexOf('/') + 1, add.lastIndexOf('.'))));

function next() {
	window.location = domainUrl + Number(Number(currentPage) + 1) + '.php';
}

function pre() {
	if (currentPage > 0) {
		window.location = domainUrl + Number(Number(currentPage) - 1) + '.php';
	}

}
$('body').keydown(function (event) {
	if (event.keyCode == 39) {
		next();
	}
	if (event.keyCode == 37) {
		pre();
	}
});