// If the 'github.com' is found show icon of the extension
function checkForValidUrl(tabId, changeInfo, tab) {
  if (tab.url.indexOf('github.com') > -1) {
    chrome.pageAction.show(tabId);
  }
}
chrome.tabs.onUpdated.addListener(checkForValidUrl);

// On click - open corresponding hackernotes page in new tab
chrome.pageAction.onClicked.addListener(function (tab) {
  var path = tab.url.split('//');
  var username = path[1].split('/')[1];
  var repo = path[1].split('/')[2];
  var hackernotesUrl = "http://www.hackernotes.org/" + username + '/' + repo;
  if(username === "" || repo === "") {
    hackernotesUrl = "http://www.hackernotes.org/"
  }
  chrome.tabs.create({
    url: hackernotesUrl
  });
});
