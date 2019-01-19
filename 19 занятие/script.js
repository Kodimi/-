var textarea = docment.getElemtntById("sandbox"),
    button = document.getElementById("find");

button.addEventListener("click", function() {
    var text, words, dictionary = {};
    text = textarea.value.replace(/[`А-Яа-яА-Za-z]/g," ");
    words = text.split(" "). filter(function(word) {
        return word.length > 4;
    }).map(function(word) {}
    }
    