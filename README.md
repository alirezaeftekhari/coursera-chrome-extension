# Coursera Chrome Extension
This is a Chrome browser extension that displays real-time subtitles of running video within a generated HTML DOM element.

This plugin helps students to translate it instantly according to their preferred language with the help of [Google Translate extension](https://chrome.google.com/webstore/detail/google-translate/aapbdbdomjkkjkaonfhkkikfgjllcleb) if they do not understand the language of the teacher.

## How to use it?
### Prerequisites:
Just install [Google Translate extension](https://chrome.google.com/webstore/detail/google-translate/aapbdbdomjkkjkaonfhkkikfgjllcleb).
### Steps:
1) Clone or download this repository and extract it.
2) Open Chrome extensions tab (chrome://extensions/) in your chrome browser.
3) Turn on the developer mode at the top right of the document.
4) Click on the "Load unpacked" button at the top left of the document.
5) Browse and select the root directory of this extension.
6) Now, the extension is loaded and you should pin it.

If you've done these steps correctly, when you click on the extension icon ( <img src="https://raw.githubusercontent.com/alirezaeftekhari/coursera-chrome-extension/master/images/icon128.png?raw=true" width="20"/> ) you should see a green button with "Generate" text written inside.
### A video example:
You can click on this link to see a video to completely understand how to use this extension and improving your learning speed on the Coursera platform :)

### How it works?
Coursera is using [WebVTT (Web Video Text Tracks)](https://en.wikipedia.org/wiki/WebVTT) for showing subtitles inside the video element.

WebVTT allows us to read the subtitles text and the other properties by the [TextTrack](https://developer.mozilla.org/en-US/docs/Web/API/TextTrack) interface.

When the value of the [Mode](https://developer.mozilla.org/en-US/docs/Web/API/TextTrack/mode) property is 'showing', we can see that this text is displayed in the [Video](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/video) element.
