chrome.tabs.executeScript({
    code: "window.getSelection().toString();"
}, function(selection) {
    let req = new XMLHttpRequest();
    req.open('POST', 'http://a6333561aef7a11e983310aca90be4ca-414216537.us-west-2.elb.amazonaws.com/sentiment/classifier');
    req.setRequestHeader('Content-Type', 'application/json');

    req.onload = function() {
      let response = JSON.parse(req.responseText);
      let elem = document.getElementById('output');

      if (response == 'positive') {
        elem.style.color = 'blue';
      } else if (response == 'negative') {
        elem.style.color = 'red';
      } else {
        elem.style.color = 'green';
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
