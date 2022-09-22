const selectBtn = document.getElementById("selectBtn");
const hexcode = document.getElementById("result");
const bgColor = document.querySelector("body");

selectBtn.addEventListener("click", () => {
  const eyeDropper = new EyeDropper();
  eyeDropper.open()
    .then((colorSelectResult) => {
      hexcode.textContent = colorSelectResult.sRGBHex;
      bgColor.style.background = colorSelectResult.sRGBHex;
    })
    .catch((e) => {
      hexcode.textContent = e;
    });
});
