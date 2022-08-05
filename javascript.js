let userform = document.getElementById("form");
let button = document.getElementsByClassName("button");
let outHasil = document.getElementById("hasil");
let submit = document.getElementById("submit");


submit.addEventListener("click", function (event) {
  event.preventDefault();

  const UserName = document.getElementById("nama").value;
  const UserBerat = document.getElementById("berat").value;
  const UserTinggi = document.getElementById("tinggi").value;

  const BMI = UserBerat / ((UserTinggi * UserTinggi) / 10000).toFixed(1);

  if (BMI <= 18.5) {
    outHasil.innerHTML = `${UserName}, BMI kamu adalah ${BMI} Artinya kamu <b>Kurus`;
  } else if (BMI > 18.5 && BMI < 25) {
    outHasil.innerHTML = `${UserName}, BMI kamu adalah ${BMI} Artinya kamu <b>Normal`;
  } else if (BMI >= 25 && BMI < 30) {
    outHasil.innerHTML = `${UserName}, BMI kamu adalah ${BMI} Artinya kamu <b>Gendut`;
  } else {
    outHasil.innerHTML = `${UserName}, BMI kamu adalah ${BMI} Artinya kamu <b>Obesitas`;
  }
});
