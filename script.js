const userInput = document.getElementById("user-input");
const checkBtn = document.getElementById("check-btn");
const clearBtn = document.getElementById("clear-btn");
const resultsDiv = document.getElementById("results-div");

const patterns = [
  /^[1]{0,1}\s{0,1}\d{3}[-\s]{0,1}\d{3}[-\s]{0,1}\d{4}$/,
  /^[1]{0,1}\s{0,1}\(\d{3}\)[-\s]{0,1}\d{3}[-\s]{0,1}\d{4}$/
]

function check() {
  const phoneGiven = userInput.value;
  userInput.value = '';

  if(!phoneGiven) {
    alert("Please provide a phone number");

    return
  }
  let isValid = false;
  for( const e of patterns) {
    if(e.test(phoneGiven)) {
      isValid = true;
      break;
    }
  }
  if(isValid) {
    resultsDiv.innerHTML += `
      <p>Valid US number: ${phoneGiven}</p>
    `;
  } else {
    resultsDiv.innerHTML += `
      <p>Invalid US number: ${phoneGiven}</p>
    `;
  }
  
  

}

function clear() {
  resultsDiv.innerHTML = '';
}

checkBtn.addEventListener('click', check);

clearBtn.addEventListener('click', clear);

console.log(/^[1]{0,1}\s{0,1}\d{3}[-\s]{0,1}\d{3}[-\s]{0,1}\d{4}$/.test('1 111 111 1111'))
