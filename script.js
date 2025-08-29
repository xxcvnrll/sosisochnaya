let modal = document.getElementById("sausageModal");
let buyButton = document.getElementById("buyButton");
let closeButton = document.getElementsByClassName("close")[0];

buyButton.onclick = function () {
  modal.style.display = "block";
};

closeButton.onclick = function () {
  modal.style.display = "none";
};

window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
};

function buySausage() {
  alert("📞але сосисочная..... SOSите");
}
