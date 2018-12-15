var optionsIterator;
var options = [];
var optionsCounter = 0, correct = 0;
var container = document.getElementById("container");
var question = document.getElementById("question");

function load() {
    question.innerHTML = Question[optionsCounter].Text;
    for(optionsIterator = 0; optionsIterator < 4; ++optionsIterator){
        options[optionsIterator].innerHTML = Question[optionsCounter].options[optionsIterator];
    }
}

function proceed(event) {
    var index = event.target.index;
    if (Question[optionsCounter].correct == index) {
        correct++;
    }
    optionsCounter++;
    if (optionsCounter == Question.length) {
        document.body.innerHTML = "<h1>Правильных ответов: " + correct + " / " + Question.length + "<h1>";
    } else {
        load();
    }
}

for (optionsIterator = 0; optionsIterator < 4; ++optionsIterator) {
    var option = document.createElement("div");
    option.classList.add("panel","panel-option");
    option.index = optionsIterator;
    option.addEventListener("click", proceed);
    container.appendChild(option);
    options.push(option);
}

load();