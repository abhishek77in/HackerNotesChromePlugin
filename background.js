// If the 'github.com' is found show icon of the extension
function checkForValidUrl(tabId, changeInfo, tab) {
  if (tab.url.indexOf('github.com') > -1) {
    chrome.pageAction.show(tabId);
  }
}
chrome.tabs.onUpdated.addListener(checkForValidUrl);

// On click - open corresponding hackernotes page in new tab
chrome.browserAction.onClicked.addListener(function (tab) {
  path = tab.url.split('//');
  username = path[1].split('/')[1];
  repo = path[1].split('/')[2];
  hackernotesUrl = "http://www.thehackernotes.com/" + username + '/' + repo;
  chrome.tabs.create({
    url: hackernotesUrl
  });
});
