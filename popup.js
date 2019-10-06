chrome.tabs.executeScript({
    code: "window.getSelection().toString();"
}, function(selection) {
    let req = new XMLHttpRequest();
    req.open('POST', 'http://a1a48892be7c911e9b3960a515995724-1930931035.us-west-2.elb.amazonaws.com/sentiment/classifier');
    req.setRequestHeader('Content-Type', 'application/json');
    req.onload = function() {
      let response = JSON.parse(req.responseText);
      document.getElementById('output').innerHTML = response;
    }
    let sendData = JSON.stringify(
        {
          "review": selection[0]
        }
    );
    req.send(sendData);
});
