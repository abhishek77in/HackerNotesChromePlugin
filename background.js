// Called when the url of a tab changes.
function checkForValidUrl(tabId, changeInfo, tab) {
  // If the 'github.com' is found in the tab's URL...
  if (tab.url.indexOf('github.com') > -1) {
    // ... show the page action.
    chrome.pageAction.show(tabId);
	path = tab.url.split('//');
	uname = path[1].split('/')[1];
	repo = path[1].split('/')[2];
	//alert(repo);
	hurl = "http://www.thehackernotes.com/" + uname + '/' + repo;
	chrome.tabs.create({url: hurl});
  }
};

// Listen for any changes to the URL of any tab.
chrome.tabs.onUpdated.addListener(checkForValidUrl);
