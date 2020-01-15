chrome.webNavigation.onErrorOccurred.addListener(function(details) 
{
    if (details.frameId != 0) //ignore subframes. 0 is main frame
    { return; }
    if (details.url.startsWith('https://apps.apple.com/')) {
        // console.log(details.url.split('/'))
        url_arr = details.url.split('/')
        url_arr[3] = 'cn'

        chrome.tabs.update(details.tabId, {url: url_arr.join('/')});
    }

});