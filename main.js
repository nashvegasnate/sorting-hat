console.log("CONNECTED");

const studentArray = [];

const exStudents = [];

const printToDom = (divId, textToPrint) => {
  const selectedDiv = document.querySelector(divId);
    selectedDiv.innerHTML = textToPrint;
  };

function goToggle() {
const hider = document.querySelector("#hiddenForm");
  if (hider.style.display === "none") {
    hider.style.display = "block";
    } else {
    hider.style.display = "none";
  }
};

const createStudentCards = () => {
  let domString = '';
  studentArray.forEach((item, i) => {
    domString += `<div class="card m-2" style="width: 18rem;">
                    <div class="card-body">
                      <h5 class="card-title">${item.studentName}</h5>
                      <p class="card-text">${item.house}</p>
                      <button type="button" id="${i}" class="btn btn-primary">Expel</button>
                    </div>
                  </div>`
  })
 
  printToDom('#studentCards', domString);
};



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
  // takes all IDs and creates new array - sorting from low to high
const studentIds = studentArray.map(student => student.id).sort((a, b) => a - b);

// TERNARY OPERATOR- if studentArray is not empty, it creates an ID that is +1 of last item
const id = studentIds.length ? studentIds[(studentIds.length - 1)] + 1 : 1;

  createStudentCards(studentArray);
  document.querySelector("form").reset(); 

  
};


function random_item() {
  const house = ["Gryffindor", "Slytherin", "Ravenclaw", "Hufflepuff"];
  return house[Math.floor(Math.random()*house.length)];

};



const studentIds = exStudents.map((studentArray) => studentArray.id).sort((a, b) => a - b);
const id = studentIds.length ? studentIds[studentIds.length - 1] + 1 : 1;

const expelStudent = (e) => {
  const targetType = e.target.type;
  const targetId = e.target.id;
  console.log(studentArray);
  if (targetType === 'button') {
 
  studentArray.splice(targetId, 1);

}
createStudentCards(studentArray);
}






const buttonEvents = () => {
  document.querySelector("#sortBtn").addEventListener('click', handleButtonClick);
  document.querySelector("#toggleBtn").addEventListener('click', goToggle);
  document.querySelector("#studentCards").addEventListener('click', expelStudent);

};


const init = () => {
  buttonEvents();
};

init();
