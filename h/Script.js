document.getElementById("send-btn").addEventListener("click", function () {
  sendMessage();
});

document.getElementById("user-input").addEventListener("keypress", function (e) {
  if (e.key === "Enter") {
    sendMessage();
  }
});

function sendMessage() {
  let userInput = document.getElementById("user-input").value.trim();
  if (userInput !== "") {
    displayMessage(userInput, "user");
    document.getElementById("user-input").value = ""; // Clear input field

    setTimeout(() => {
      let botResponse = translateToSanskrit(userInput);
      typingAnimation(botResponse);
    }, 1000);
  }
}

function displayMessage(message, sender) {
  let chatBox = document.getElementById("chat-box");
  let messageElement = document.createElement("div");
  messageElement.classList.add(sender + "-message");

  let paragraph = document.createElement("p");
  paragraph.textContent = message;

  messageElement.appendChild(paragraph);
  chatBox.appendChild(messageElement);
  chatBox.scrollTop = chatBox.scrollHeight;
}

function typingAnimation(text) {
  let chatBox = document.getElementById("chat-box");
  let messageElement = document.createElement("div");
  messageElement.classList.add("bot-message");

  let paragraph = document.createElement("p");
  paragraph.textContent = ""; 

  messageElement.appendChild(paragraph);
  chatBox.appendChild(messageElement);
  chatBox.scrollTop = chatBox.scrollHeight;

  let index = 0;
  let typingInterval = setInterval(function () {
    paragraph.textContent += text.charAt(index);
    index++;
    if (index === text.length) {
      clearInterval(typingInterval);
    }
  }, 10);
}

function translateToSanskrit(englishText) {
  const translations = {
    "hello": "नमस्ते",
    "how are you": "कथमस्ति त्वं?",
    "thank you": "धन्यवादः",
    "good morning": "सुप्रभातम्",
    "good night": "शुभरात्रिः",
    "yes": "आम्",
    "no": "नहि",
    "please": "कृपया",
    "sorry": "क्षमया",
    "goodbye": "वदन्तु",
    "what is your name": "तव नाम किम्?",
    "my name is ashwith": "मम नाम अश्विथ अस्ति",
    "how old are you": "कति वर्षाणि तव?",
    "i am 16 years old": "अहं षोडशवर्षीयं",
    "where are you from": "कुतः आगच्छसि?",
    "i am from india": "अहं भारतात् आगच्छामि",
    "what is the capital of india": "भारतस्य राजधानी किम्?",
    "new delhi": "नवदिल्ली",
    "i love you": "अहं त्वां प्रेमामि",
    "what is the time": "समयः कः अस्ति?",
    "how are you feeling": "तुम् कथम् अनुभवसि?",
    "do you speak sanskrit": "भवान् संस्कृतं भाषते?",
    "i am learning sanskrit": "अहं संस्कृतं पठामि",
    "what is your profession": "तव व्यवसायः कः?",
    "i am a student": "अहं छात्रः अस्मि",
    "what do you like": "तुभ्यं किम् रोचते?",
    "i like music": "मम संगीतं रोचते",
    "do you have siblings": "किम् ते सहोदरः अस्ति?",
    "i have one brother": "मम एकः भ्राता अस्ति",
    "where is your home": "भवतः गृहम् कुत्र अस्ति?",
    "my home is in thrissur": "मम गृहम् त्रिश्शूर् नगरे अस्ति",
    "are you married": "किं भवतः विवाहः जातः?",
    "no, i am not married": "नहि, अहं अविवाहितः अस्मि",
    "can you help me": "कृपया सहायतां करोतु?",
    "i am sorry": "मम दोषः",
    "let's go": "आगच्छामः",
    "stop": "स्थगय",
    "wait": "क्षणमेकं प्रतीक्षस्व",
    "what are you doing": "त्वं किं करोति?",
    "i am reading": "अहं पठामि",
    "i am eating": "अहं खादामि",
    "do you want water": "किं जलं इच्छसि?",
    "yes, i want water": "आम्, मम जलं आवश्यकं",
    "no, thank you": "नहि, धन्यवादः",
    "what is the weather today": "अद्य कस्मिन् प्रकारेण वायुः अस्ति?",
    "it is raining": "अद्य वर्षति",
    "it is sunny": "अद्य दिवाकरः प्रचण्डः अस्ति",
    "what is your favorite color": "तव प्रियः वर्णः कः?",
    "can you hear me?": "किं त्वं मम श्रुणोसि?",
    "i can't hear you": "अहं त्वां न श्रुणोमि",
    "where are you going?": "त्वं कुत्र गच्छसि?",
    "i am going home": "अहं गृहं गच्छामि",
    "what do you want?": "तुभ्यं किं इच्छसि?",
    "i want food": "मम आहारः आवश्यकः",
    "i am tired": "अहं क्लान्तः अस्मि",
    "i am happy": "अहं सुखी अस्मि",
    "do you need help?": "किं ते सहाय्यं आवश्यकं?",
    "i am fine": "अहं कुशलः अस्मि",
    "i am sad": "अहं दुःखी अस्मि",
    "are you busy?": "किं त्वं व्यस्तः अस्ति?",
    "yes, i am busy": "आम्, अहं व्यस्तः अस्मि",
    "i am free": "अहं मुक्तः अस्मि",
    "what are you studying?": "त्वं किम् पठसि?",
    "i am studying sanskrit": "अहं संस्कृतं पठामि",
    "what is your hobby?": "तव मनोरञ्जनं किम् अस्ति?",
    "my hobby is reading books": "मम मनोरञ्जनं पुस्तकानां पठनं अस्ति",
    "what time is it?": "समयः कः अस्ति?",
    "it is 5 o'clock": "समयः पञ्चवादनः अस्ति",
    "i am hungry": "अहं क्षुधितः अस्मि",
    "i am thirsty": "अहं तृषितः अस्मि",
    "where do you work?": "त्वं कुत्र कर्म करोषि?",
    "i work in an office": "अहं कार्यालये कर्म करोमि",
    "do you like sports?": "किं त्वं क्रीडां रोचते?",
    "yes, i like sports": "आम्, मम क्रीडा रोचते",
    "where is the bathroom?": "शौचालयः कुत्र अस्ति?",
    "this is my friend": "अयं मम मित्रम् अस्ति",
    "do you have any pets?": "किं ते पालयिताः जन्तवः सन्ति?",
    "i have a dog": "मम शुनकः अस्ति",
    "what are your hobbies?": "तव के मनोरञ्जनानि?",
    "i love reading books": "मम पुस्तकानां पठनं रोचते",
    "do you know sanskrit?": "किं त्वं संस्कृतं जानासि?",
    "yes, i know sanskrit": "आम्, अहं संस्कृतं जानामि",
    "i don't understand": "अहं न अवगच्छामि",
    "do you like music?": "किं ते संगीतं रोचते?",
    "yes, i love music": "आम्, अहं संगीतं प्रेमामि",
    "what are you listening to?": "त्वं किं शृणोसि?",
    "i am listening to music": "अहं संगीतं शृणोमि",
    "can you repeat?": "कृपया पुनः वदतु",
    "how can i help you?": "किं सहाय्यं करोमि?",
    "i am feeling cold": "अहं शीतं अनुभवामि",
    "i am feeling hot": "अहं उष्णं अनुभवामि",
    "do you like reading?": "किं ते पठनं रोचते?",
    "what do you like to eat?": "तुभ्यं किं खादितुं रोचते?",
    "i like fruits": "मम फलानि रोचन्ते",
    "are you ready?": "किं त्वं सज्जः असि?",
    "i am ready": "अहं सज्जः अस्मि",
    "what's your favorite book?": "तव प्रियं पुस्तकं किम् अस्ति?",
    "my favorite book is bhagavad gita": "मम प्रियं पुस्तकं भगवद्गीता अस्ति",
    "how was your day?": "तव दिनं कथम् अभवत्?",
    "my day was good": "मम दिनं उत्तमम् अभवत्",
    "what are you watching?": "त्वं किं पश्यसि?",
    "i am watching a movie": "अहं चलच्चित्रं पश्यामि",
    "where are you living?": "त्वं कुत्र वससि?"
  };

  return translations[englishText.toLowerCase()] || "Translation not available";
}
