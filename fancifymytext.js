function makeTextBigger() {
    document.getElementById("textArea").style.fontSize = "24pt";
  }
  
  function changeStyle() {
    var textArea = document.getElementById("textArea");
    var fancyShmancy = document.getElementById("fancyShmancy");
    var boringBetty = document.getElementById("boringBetty");
  
    if (fancyShmancy.checked) {
      textArea.style.fontWeight = "bold";
      textArea.style.color = "blue";
      textArea.style.textDecoration = "underline";
    } else if (boringBetty.checked) {
      textArea.style.fontWeight = "normal";
      textArea.style.color = "black";
      textArea.style.textDecoration = "none";
    }
  }
  
  function mooifyText() {
    var textArea = document.getElementById("textArea");
    var sentences = textArea.value.split(".");
    for (var i = 0; i < sentences.length; i++) {
      if (sentences[i].trim().length > 0) {
        sentences[i] = sentences[i].trim() + "-Moo";
      }
    }
    textArea.value = sentences.join(". ").toUpperCase();
  }
  
  document.getElementById("biggerBtn").addEventListener("click", makeTextBigger);
  document.getElementById("fancyShmancy").addEventListener("change", changeStyle);
  document.getElementById("boringBetty").addEventListener("change", changeStyle);
  document.getElementById("mooBtn").addEventListener("click", mooifyText);
