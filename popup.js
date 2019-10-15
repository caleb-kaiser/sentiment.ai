chrome.tabs.executeScript({
    code: "window.getSelection().toString();"
}, function(selection) {
    let req = new XMLHttpRequest();
    req.open('POST', 'http://a1a48892be7c911e9b3960a515995724-1930931035.us-west-2.elb.amazonaws.com/sentiment/classifier');
    req.setRequestHeader('Content-Type', 'application/json');

    req.onload = function() {
      let response = JSON.parse(req.responseText);
      let elem = document.getElementById('output');

      if (response == 'positive') {
        elem.cssText = 'color: blue';
      } else if (response == 'negative') {
        elem.cssText = 'color: red';
      } else {
        elem.cssText = 'color: green';
        response = 'unclear'
      }
      elem.innerHTML = response;
    }

    let sendData = JSON.stringify(
        {
          "review": selection[0]
        }
    );
    
    req.send(sendData);
});
