function answerQuery(message) {
  if (message.indexOf("rain") != -1 || message.indexOf("sun") != -1 || message.indexOf("weather") != -1)
    return "I do not care too much about weather I am stuck in a data center.";
  return "Sorry Dave, I cannot do that.";
}
function saySomething() {
  var message = document.getElementById('message').value.toLowerCase();
  var conversation = document.getElementById('conversation');
  var answer = answerQuery(message);


  conversation.innerHTML += "<p><strong>You:</strong> " + message + "</p>";
  conversation.innerHTML += "<p><strong>Useless bot:</strong> " + answer + "</p>";
}