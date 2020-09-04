Array.prototype.insert = function ( index, item ) {
    this.splice( index, 0, item );
};
chrome.webNavigation.onBeforeNavigate.addListener(function(details) 
{
    if (details.frameId != 0) //ignore subframes. 0 is main frame
    { return; }
    if (details.url.startsWith('https://apps.apple.com/')) {
        // console.log(details.url.split('/'))
        url_arr = details.url.split('/')
        if (url_arr[3] === 'app') {
            // https://apps.apple.com/app/apple-store/id1470168007
            url_arr.insert(3, 'cn')
            chrome.tabs.update(details.tabId, {url: url_arr.join('/')});
        }
        else  if (url_arr[3] !== 'cn'){
            // https://apps.apple.com/us/app/spark-mail-email-by-readdle/id997102246
            url_arr[3] = 'cn'
            chrome.tabs.update(details.tabId, {url: url_arr.join('/')});
        }

    }

});