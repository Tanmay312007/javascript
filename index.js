const nameNode = document.createElement("h1");
nameNode.id = "name";
const bodyRef = document.querySelector("body");
bodyRef.prepend(nameNode);
const nameRef = document.getElementById("name");
console.log(nameRef);
const documentRef = document.getElementsByClassName("description")[0];
console.log(documentRef[0]);

nameRef.innerHTML = "Tanmay Shah";
documentRef.innerHTML =
  "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consequatur, ab voluptas commodi modi veniam in alias doloremque incidunt cum iste sunt, sit ipsa, possimus ipsam. Quisquam eveniet modi exercitationem a.";

const buttonNode = document.createElement("button");
buttonNode.innerHTML = "Apply For Form";
buttonNode.addEventListener('click', function() { 
    alert("Thanks For Applying")                
})
bodyRef.append(buttonNode);
