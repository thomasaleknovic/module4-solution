
(function (window) {
  var speakWord = "Hello ";
  var helloSpeaker = speakWord;
  function speak(helloSpeaker) {
    console.log(speakWord + " " + helloSpeaker);
  }

  window.helloSpeaker = helloSpeaker;

})(window);