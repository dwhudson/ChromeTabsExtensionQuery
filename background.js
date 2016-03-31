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

chrome.browserAction.onClicked.addListener(function() {
    chrome.tabs.query({ currentWindow: true, active: true }, function (tabs) {
      console.log(tabs[0]);
    });
});

