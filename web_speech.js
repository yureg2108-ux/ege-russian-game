window.speakWord = function(word) {
    window.speechSynthesis.cancel();

    let utterance = new SpeechSynthesisUtterance(word);

    utterance.lang = "ru-RU";
    utterance.rate = 0.8;
    utterance.pitch = 0.8;

    window.speechSynthesis.speak(utterance);
};