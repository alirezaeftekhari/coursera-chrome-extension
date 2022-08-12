let btn = document.getElementById("btn");

btn.addEventListener("click", async () => {
  let [tab] = await chrome.tabs.query({ active: true, currentWindow: true });

  chrome.scripting.executeScript({
    target: { tabId: tab.id },
    function: initViewElement,
  });

  chrome.scripting.executeScript({
    target: { tabId: tab.id },
    function: renderCurrentSubs,
  });

});

function initViewElement() {
  let pre = document.createElement('pre');
  pre.id = 'currentSub';
  //////////// styles
  pre.style.textAlign = 'center';
  pre.style.color = 'rgb(31, 31, 31)';
  pre.style.fontSize = '1.75rem';
  pre.style.lineHeight = '1.75rem';
  pre.style.fontFamily = '"Source Sans Pro", Arial, sans-serif';
  pre.style.fontWeight = '600';
  pre.style.letterSpacing = '-0.1px';
  pre.style.marginTop = '16px';
  ///////////
  document.getElementsByClassName('css-5tv8pg')[0].prepend(pre);
}

function renderCurrentSubs() {
  let video = document.getElementsByClassName('vjs-tech')[0];
  video.addEventListener('timeupdate', e => {
    const track = [ ...video.textTracks ]
    .find( track => track.mode === "showing" );
    const texts = [...track.activeCues].map( cue => cue.text );
    let newVal = texts.join('\n');
    let currentVal = document.getElementById('currentSub').innerHTML;
    if (newVal !== currentVal) {
        document.getElementById('currentSub').innerHTML = newVal;
    }
});
}
