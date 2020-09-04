const buttonRef = document.querySelector(".js-button");

const handleBtnClick = function () {
  console.log("Клік по кнопці" + Date.now());
};

buttonRef.addEventListener("click", handleBtnClick);
