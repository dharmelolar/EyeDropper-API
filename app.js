// select elements from the dom

const selectBtn = document.getElementById("selectBtn");
const hexcode = document.getElementById("result");
const bgColor = document.querySelector("body");


selectBtn.addEventListener("click", () => {

  // initialise the eyedropper object
  const eyeDropper = new EyeDropper();

  // start the eyedropper mode 
  eyeDropper.open()
    .then((colorSelectResult) => {
      hexcode.textContent = colorSelectResult.sRGBHex;
      bgColor.style.background = colorSelectResult.sRGBHex;
    })
    .catch((e) => {
      hexcode.textContent = e;
    });
});
