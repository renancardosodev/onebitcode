import calculate from "./calculo.js"
import copyToClipboard from "./copyToClip.js"
import switchTheme from "./switchtheme.js"
import {handleButtonPress, handleClear, handleTyping} from "./buttons.js"

document.querySelectorAll(".charKey").forEach(function (charKeyBtn) {
    charKeyBtn.addEventListener("click", handleButtonPress)
  })
  
  document.querySelector("#clear").addEventListener("click", handleClear)
  document.querySelector("#input").addEventListener("keydown", handleTyping)
  document.querySelector("#equal").addEventListener("click", calculate)
  document.querySelector("#copyToClipboard").addEventListener("click", copyToClipboard)
  document.querySelector("#themeSwitcher").addEventListener("click", switchTheme)