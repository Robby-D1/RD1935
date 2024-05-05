document.getElementById("biggerBtn").onclick = function() {
    document.getElementById("textArea").style.fontSize = "24pt";
};

function changeStyle() {
    var textArea = document.getElementById("textArea");
    if (document.getElementById("fancyShmancy").checked) {
        textArea.style.fontWeight = "bold";
        textArea.style.color = "blue";
        textArea.style.textDecoration = "underline";
    } else if (document.getElementById("boringBetty").checked) {
        textArea.style.fontWeight = "normal";
        textArea.style.color = "black";
        textArea.style.textDecoration = "none";
    }
}

document.getElementById("mooBtn").onclick = function() {
    var textArea = document.getElementById("textArea");
    var sentences = textArea.value.split(".");
    for (var i = 0; i < sentences.length; i++) {
        if (sentences[i].trim().length > 0) {
            sentences[i] = sentences[i].trim() + "-Moo";
        }
    }
    textArea.value = sentences.join(". ").toUpperCase();
};
