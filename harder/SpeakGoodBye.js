(function (window) {
  var speakWord = "Good Bye ";
  var byeSpeaker = speakWord;

  function speak(byeSpeaker) {
    console.log(speakWord + byeSpeaker);
  }

  window.byeSpeaker = byeSpeaker;

})(window);
