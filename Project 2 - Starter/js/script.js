
// selected page
clickedPgNumber = 1;
//number of contacts per page limit=10
let contactDisplayLimit = 10;

let pagination = document.querySelector('.pagination');


//Reference: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference%20%20/Global_Objects/Array/from
let contacts = Array.from(document.getElementsByClassName('contact-item cf'));

//counting the length of 'Li' elements
let contactCount = contacts.length;

// Calculating number of pages usingMath.ceil to return the equal or greater value
let pagesNumber = Math.ceil(contactCount / contactDisplayLimit);


//creating buttons for pagination
// Reference: https://stackoverflow.com/questions/11351135/create-ul-and-li-elements-in-javascript
// Paging buttons
for (let i = 1; i <= pagesNumber; i++) {
    // creating  li
    let li = document.createElement("li");
    // creating a
    let a = document.createElement("a");
    a.href = "#";
    a.innerHTML = i;
    a.onclick = paginate;

    li.appendChild(a);
    pagination.appendChild(li);
}


// first page intially set/displayed
pagination.children[clickedPgNumber - 1].firstChild.classList.add("active");

//let intial value be 0
let index = 0;
function hideContacts(index) {
    // in start, all contatcs are hidden  
    for (let i = index; i < contactCount; i++) {
        contacts[i].style.display = "none";
    }
}

//passing the display value limit to the hideContacts function
hideContacts(contactDisplayLimit);

// Function that implements pagination
function paginate(e) {
    let pgNumber = e.target.innerHTML;

    let firstContact = contactDisplayLimit * (pgNumber - 1);
    let lastContact;
    // last page 
    if (contactCount < firstContact + contactDisplayLimit) {
        lastContact = contactCount;
    } else {
        lastContact = firstContact + contactDisplayLimit;
    }


    // display contacts
    for (let i = firstContact; i < lastContact; i++) {
        contacts[i].style.display = "none";
    }

    // Activate and deactivating page buttons, then clicked one is activated while others remain deativated.
    pagination.children[clickedPgNumber - 1].firstChild.classList.remove("active");
    clickedPgNumber = clickedPgNumber + pgNumber;
    pagination.children[clickedPgNumber - 1].firstChild.classList.add("active");
}
