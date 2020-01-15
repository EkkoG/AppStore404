chrome.tabs.onUpdated.addListener(function(tabId, changeInfo, tab) {
    // alert('updated from background');
    if (changeInfo.url && changeInfo.url !== "null" && changeInfo.url !== "undefined" ) {

        if (changeInfo.url.startsWith('https://apps.apple.com/us/')) {
            // console.log(details.url.split('/'))
            url_arr = changeInfo.url.split('/')
            url_arr[3] = 'cn'

            chrome.tabs.update(tabId, {url: url_arr.join('/')});
        }
    }
});