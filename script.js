let messageIndex = 0;

const messages = [
    "Seriously? Why not? 😢",
    "Come on, don't be shy! 😊",
    "Is there a reason you keep saying no?",
    "Hmm, I'm not convinced. Try again?",
    "You're breaking my heart! 💔",
    "Maybe next time? Pretty please? 🙏",
    "I won't give up on you! 💪",
    "I'll take that as a maybe! 😄",
    "You're playing hard to get, huh?",
    "Alright, last chance! What's your answer?",
    "Oh, don't be like that! I know you want to say yes. 😉",
    "You're driving me crazy with suspense! Just say yes already! 😅",
    "I promise it'll be fun! Say yes!",
    "How can you resist this offer? It's a once in a lifetime opportunity! 😄"
];

function showMessage(response) {
  if (response === "No") {
      const noButton = document.getElementById("no-button");
      const container = document.querySelector(".container");
      const maxWidth = window.innerWidth - noButton.offsetWidth;
      const maxHeight = window.innerHeight - noButton.offsetHeight;

      noButton.style.position = "absolute";

      document.getElementsByClassName("image")[0].src = "images/gun.gif";

      const randomX = Math.max(0, Math.floor(Math.random() * maxWidth));
      const randomY = Math.max(0, Math.floor(Math.random() * maxHeight));

      noButton.style.left = randomX + "px";
      noButton.style.top = randomY + "px";

      document.getElementById("name").style.display = "none";

      document.getElementById("question").textContent = messages[messageIndex];
      messageIndex = (messageIndex + 1) % messages.length;

      const yesButton = document.getElementById("yesButton");
      yesButton.style.transform = "scale(1.2)";
      yesButton.style.transition = "transform 0.3s ease";
  } else if (response === "Yes") {
      document.getElementById("name").remove();
      document.getElementById("no-button").remove();

      const yesMessage = document.getElementById("question");
      yesMessage.textContent = "LESGOOO see you on the 14th babygirl😘😘";
      yesMessage.style.display = "block";
      yesMessage.style.fontStyle = "normal";

      document.getElementsByClassName("image")[0].src = "images/dance.gif";
      document.querySelector(".Mainprompt").classList.add("yes-animation");
  }
}
