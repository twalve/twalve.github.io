(function() {
  const paragraph = ["Chabo", "Shamo", "Ko-Shamo", "Tomaru", "Onagadori"];

  const join = document.querySelector("#join");
  const serial = document.querySelector("#serial");
  const serialOr = document.querySelector("#serialOr");

  join.innerText = paragraph.join();
  serial.innerText = paragraph.serialJoin();
  serialOr.innerText = paragraph.serialJoin("or");
}());