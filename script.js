function submitHandler(event) {
  event.preventDefault();

  const fName = document.getElementById("firstn").value;
  const lName = document.getElementById("lastn").value;
  const email = document.getElementById("email").value;
  const mob = document.getElementById("tele").value;
  const address = document.getElementById("address").value;
  //   console.log(fName, lName, email, mob, address);
  const obj = {
    full_name: fName + " " + lName,
    first_Name: fName,
    last_Name: lName,
    email_address: email,
    mobile_number: mob,
    address: address,
  };
  console.log(obj);
}
