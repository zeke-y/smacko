const typedTextSpan = document.querySelector(".typed-text");
const cursorSpan = document.querySelector(".cursor");
const typedTextSpanBody = document.querySelector(".typed-text-body");
const textHeader = ["About me."];
const textBody = ["I am this."]
const typingDelay = 200;
const newTextDelay = 2000;
let textArrayIndex = 0;
let charIndex = 0;

function type() {
  if(charIndex < textHeader[textArrayIndex].length) {
    if (!cursorSpan.classList.contains("typing")) cursorSpan.classList.add("typing");
   typedTextSpan.textContent += textHeader[textArrayIndex].charAt(charIndex);
    charIndex++;
    setTimeout(type, typingDelay);
  }
  else {
    cursorSpan.classList.remove("typing");
  }
}

document.addEventListener("DOMContentLoaded", function() {
  setTimeout(type,newTextDelay + 150);
});