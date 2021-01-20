function sayItLoud (textString) {
    let message = new SpeechSynthesisUtterance(textString);
    let voices = window.speechSynthesis.getVoices();
    message.voice = voices[1];
    message.pitch = 1.0; // range between 0 and 2
    message.rate = 0.7; // range between 0.1 (lowest) and 10 (highest) 
    window.speechSynthesis.speak(message);
    message.onend = function(event){
        window.speechSynthesis.cancel();
    }
  }

