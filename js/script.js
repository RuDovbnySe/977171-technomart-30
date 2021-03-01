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
  map.classList.remove("popup-map-show");
})

var map_open = document.querySelector(".contacts-map");
var map = document.querySelector(".popup-map");
var map_close = document.querySelector(".popup-map-close")

map_open.addEventListener("click", function (evt){
  evt.preventDefault();
  map.classList.add("popup-map-show");
})

map_close.addEventListener("click", function (evt) {
  evt.preventDefault();
  console.log("Клик - закрыть");
  map.classList.remove("popup-map-show");
})
