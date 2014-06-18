// ==UserScript==
// @name           Qiita: ヘッダーの一行ニュースのタグの空白を削除
// @version        1.0
// @author         vzvu3k6k
// @match          http://qiita.com/*
// @namespace      http://vzvu3k6k.tk/
// @license        CC0
// ==/UserScript==

var type = document.querySelector('.globalHeadlineNews_newsType');
type.textContent = type.textContent.trim();
