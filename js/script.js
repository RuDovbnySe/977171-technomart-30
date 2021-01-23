var write = document.querySelector(".contacts-btn");
var letter = document.querySelector(".letter");
var close = document.querySelector(".js-close");


write.addEventListener("click", function (evt) {
  evt.preventDefault();
  console.log("Клик - Напишите нам");
  letter.classList.add("letter-show");
});

close.addEventListener("click", function (evt) {
  evt.preventDefault();
  console.log("Клик - закрыть");
  letter.classList.remove("letter-show");
})



