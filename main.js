console.log("CONNECTED");

const studentArray = [];

const printToDom = (divId, textToPrint) => {
  const selectedDiv = document.querySelector(divId);
    selectedDiv.innerHTML = textToPrint;
  }

function toggleFunc() {
const hider = document.querySelector("#hiddenForm");
  if (hider.style.display === "none") {
    hider.style.display = "block";
    } else {
    hider.style.display = "none";
  }
}

const createStudentCards = () => {
  let domString = '';
  studentArray.forEach((item, i) => {
    domString += `<div class="card m-2" style="width: 18rem;">
                    <div class="card-body">
                      <h5 class="card-title">${item.studentName}</h5>
                      <p class="card-text">${item.house}</p>
                      <a href="#" class="btn btn-primary">Expel</a>
                    </div>
                  </div>`
  })
 
  printToDom('#studentCards', domString);
}



const handleButtonClick = (e) => {
const studentName = document.querySelector("#studentName").value;
 const house = random_item() 
const newStudent = {
    studentName, 
    house,
  }

const warningMessage = () => {
  let message = `<h6 class="text-danger">Please Enter Name</h6>`;
  printToDom("#danger", message);

}
  if(studentName.length === 0) {
    warningMessage();
  } else {
    studentArray.push(newStudent);

  }


  createStudentCards(studentArray);
  document.querySelector("form").reset(); 

  
}


function random_item() {
  const house = ["Gryffindor", "Slytherin", "Ravenclaw", "Hufflepuff"];
  return house[Math.floor(Math.random()*house.length)];

}





const buttonEvents = () => {
  document.querySelector("#sortBtn").addEventListener('click', handleButtonClick);

}


const init = () => {
    buttonEvents();
};

init();
