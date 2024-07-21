function getData() {
  let name = document.getElementById("nameInput").value;
  let email = document.getElementById("emailInput").value;
  let position = document.getElementById("position").value;
  let address = document.getElementById("address").value;

  if (name == "") {
    return alert("Tolong diisi namanya");
  } else if (email == "") {
    return alert("Tolong diisi emailnya");
  }
  
  document.getElementById("nameInput").value = "";
  document.getElementById("emailInput").value = "";
  document.getElementById("position").value = "";
  document.getElementById("address").value = "";
  
  let myEmail = "fbn.farrel.id@gmail.com";
  let subject = "";
  let a = document.createElement("a");
  a.href = `mailto:${myEmail}?subject=${subject}&body=`;
  a.click();
}
