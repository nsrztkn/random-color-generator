for (let i = 1; i <= 100; i++) {
  var box = document.createElement("div");
  box.classList.add("box");
  document.querySelector(".container").appendChild(box);
}

const btn = document.querySelector(".btn");
const randomColorBlock = document.querySelectorAll(".box");

function RandomHexColorCode() {
  var chars = "0123456789abcdef";
  var colorLength = 6;
  var color = "";

  for (var i = 0; i < colorLength; i++) {
    var randomColor = Math.floor(Math.random() * chars.length);
    color += chars.substring(randomColor, randomColor + 1);
  }

  return "#" + color;
}

function addColor() {
  randomColorBlock.forEach(item => {
    var newColor = RandomHexColorCode();
    item.style.backgroundColor = newColor;
    var p = item.querySelector("p");

    if (!p) {
      p = document.createElement("p");
      item.appendChild(p);
      p.classList.add("color-code");
    }

    p.innerHTML = newColor;
  });
}

addColor();

btn.addEventListener("click", addColor);

function copyColorCode(event) {
  let target = event.target;

  let color = target.innerHTML;

  if (target.className === "box") {
    color = target.querySelector("p").innerHTML;
  }

  navigator.clipboard.writeText(color).then(
    function () {
      console.log("Renk kodu başarıyla kopyalandı: " + color);
      let h1 = document.createElement("h1");
      document.body.appendChild(h1);
      h1.classList.add("copied");

      h1.innerHTML = `Renk kodu başarıyla kopyalandı: <span> ${color} </span>`;
      let span = h1.querySelector("span");
      // span.style.color = color;
      span.style.backgroundColor = color;

      setTimeout(function () {
        h1.remove();
      }, 1000);
    },
    function (err) {
      console.error("Renk kodu kopyalanamadı: ", err);
    }
  );
}

randomColorBlock.forEach(function (box) {
  box.addEventListener("click", copyColorCode);
});
