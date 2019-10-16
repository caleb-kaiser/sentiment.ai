# sentiment.ai
Simple Chrome extension that analyzes the sentiment of any text on the page. Built using [Cortex](https://github.com/cortexlabs/cortex/) and Google's BERT.

# The Chrome extension no one asked for

Everything about Sentiment.ai is unnecessary, from its name to its very existence. It does, however, do two things really well.

First, it allows you to measure the sentiment of any text on your screen. Kind of.

Secondly, it shows how easy it is to build a project using machine learning with tools like [Cortex](https://github.com/cortexlabs/cortex/)

Check it out in action:

![Sentiment.ai Demo](https://media.giphy.com/media/RfqIvLjNGXRCh2TR4G/giphy.gif)

# Installation instructions

1. Spin up your own sentiment analysis service using [this tutorial](https://github.com/cortexlabs/cortex/tree/master/examples/sentiment-analysis). It takes roughly 25 minutes, and you'll be able to say you've built your own machine learning-powered sentiment analyzer.

2. Download this repository.

3. Change the url in line 5 of `popup.js` to whatever url points to your sentiment analysis API.

4. Go to `chrome://extensions` in your browser, turn on developer mode, and click `load unpacked`.

5. Select your downloaded version of this repo, and unpack it.

That's the whole deal. Good luck—and if you enjoy this project at all, you can thank me by giving [Cortex](https://github.com/cortexlabs/cortex/) a star.
