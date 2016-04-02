// Copyright (c) 2012 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
/*
chrome.browserAction.onClicked.addListener(function(tab) {
  //chrome.tabs.create({url:chrome.extension.getURL("tabs_api.html")});
  chrome.tabs.create({url:"http://cnn.com"});
});
*/


//chrome.tabs.create({url:"http://cnn.com"}, callback);

//chrome.tabs.getCurrent(callback);
console.log('Booya');
//function callback(data) {
    //console.log('inside callback function');
    //console.log('DATA.URL: ',data);
//}
/*
chrome.browserAction.onClicked.addListener(function() {
    chrome.tabs.query({ active: true, lastFocusedWindow: true }, function (array_of_tabs) {
        var tab = array_of_tabs[0];
        var url = tab.url;
        console.log('url: ', url);
    });
});
*/
/*
chrome.tabs.query({ active: true, currentWindow: true}, 
    function (tabs) {
        console.log(tabs[0]);
    }
);
*/
chrome.browserAction.onClicked.addListener(function() {
    chrome.tabs.query({'active': true, currentWindow: true},
       function(tabs){
          alert(tabs[0].url);
       }
    );
});
/*
var forumTabs = new Array();

chrome.tabs.query({active: true, lastFocusedWindow: true}, function(tabs) {
   for(var i = 0; i < tabs.length; i++) {
    forumTabs[i] = tabs[i];
   }
   
   for(var i = 0; i < forumTabs.length; i++) {
       if(forumTabs[i] !== null) {
           window.console.log(forumTabs[i].url);
       } else {
           window.console.log("??" + i);
       }
   }
});
*/