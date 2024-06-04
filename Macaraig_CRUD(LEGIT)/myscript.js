var rollV, nameV, genderV, addressV, emailV;

function readFom() {
  rollV = document.getElementById("roll").value;
  nameV = document.getElementById("name").value;
  genderV = document.getElementById("gender").value;
  surnameV = document.getElementById("surname").value;
  addressV = document.getElementById("address").value;
  emailV = document.getElementById("email").value;
  Swal.fire("Data Read Succesfully!");
  console.log(rollV, nameV, addressV, genderV);
}

document.getElementById("insert").onclick = function () {
  readFom();

  firebase
    .database()
    .ref("student/" + rollV)
    .set({
      UniqueID: rollV,
      FirstName: nameV,
      MiddleName: genderV,
      SurName: surnameV,
      address: addressV,
      EmailAddress: emailV
    });
    Swal.fire("Data Inserted Succesfully!");
  document.getElementById("roll").value = "";
  document.getElementById("name").value = "";
  document.getElementById("gender").value = "";
  document.getElementById("surname").value = "";
  document.getElementById("address").value = "";
  document.getElementById("email").value = "";
};

document.getElementById("read").onclick = function () {
  readFom();

  firebase
    .database()
    .ref("student/" + rollV)
    .on("value", function (snap) {
      document.getElementById("roll").value = snap.val().UniqueID;
      document.getElementById("name").value = snap.val().FirstName;
      document.getElementById("gender").value = snap.val().MiddleName;
      document.getElementById("surname").value = snap.val().SurName;
      document.getElementById("address").value = snap.val().address;
      document.getElementById("email").value = snap.val().EmailAddress;
    });
};

document.getElementById("update").onclick = function () {
  readFom();

  firebase
    .database()
    .ref("student/" + rollV)
    .update({
      //   rollNo: rollV,
      UniqueID: rollV,
      FirstName: nameV,
      MiddleName: genderV,
      SurName: surnameV,
      address: addressV,
      EmailAddress: emailV
    });
    Swal.fire("Data Updated Succesfully!");
  document.getElementById("roll").value = "";
  document.getElementById("name").value = "";
  document.getElementById("gender").value = "";
  document.getElementById("surname").value = "";
  document.getElementById("address").value = "";
  document.getElementById("email").value = "";
};
document.getElementById("delete").onclick = function () {
  readFom();

  firebase
    .database()
    .ref("student/" + rollV)
    .remove();
    Swal.fire("Data Deleted Succesfully!");
  document.getElementById("roll").value = "";
  document.getElementById("name").value = "";
  document.getElementById("gender").value = "";
  document.getElementById("surname").value = "";
  document.getElementById("address").value = "";
  document.getElementById("email").value = "";
};
