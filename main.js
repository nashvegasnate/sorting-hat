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
    domString += `<div class="card" style="width: 18rem;">
                    <div class="card-body">
                      <h5 class="card-title">${item.studentName}</h5>
                      <p class="card-text">${item.house}</p>
                      <a href="#" class="btn btn-primary">Expel</a>
                    </div>;
                  </div>`
  })
 
  printToDom('#studentCards', domString);
}


const handleButtonClick = (e) => {
const studentName = document.querySelector("#studentName").value;
  const newStudent = {
    studentName, 
    house,
  }

  studentArray.push(newStudent);
  createStudentCards();
}

// existing code above

function random_item(house) {
  return house[Math.floor(Math.random()*house.length)];
}

const house = ["Gryffindor", "Slytherin", "Ravenclaw", "Hufflepuff"];
// console.log(random_item(house));




// existing code below

const buttonEvents = () => {
  document.querySelector("#sortBtn").addEventListener('click', handleButtonClick);

}


const init = () => {
    buttonEvents();
};

init();
