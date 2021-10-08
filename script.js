var qrcode = new QRCode(document.getElementById("qrcode"), {
  width: 200,
  height: 200
});
function makeCode() {
  var elText = document.getElementById("qrtext");

  if (!elText.value) {
    //alert("Input a text");
    elText.focus();
    return;
  }

  qrcode.makeCode(elText.value);
}
makeCode();
$("#qrtext")
  .on("blur", function () {
    makeCode();
  })
  .on("keydown", function (e) {
    if (e.keyCode == 13) {
      makeCode();
    }
  });
