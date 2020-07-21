const hasNewMessage = () => {
  // TODO: return true with a probability of 20%.
  if (Math.random() <= 0.2) {
    return true;
  } else {
    return false;
  }

};

console.log(Math.random);




const newMessage = () => {
// //   // TODO: return a random message as an object with two keys, subject and sender

let subject = ['Welcome', 'Imback', 'Reminder'];
let sender  = ['GitHub', 'Arnold'];
const randomSubject = Math.floor(Math.random() * subject.length);
const randomMessage1 = subject[randomSubject]

const randomSender = Math.floor(Math.random() * sender.length);
const randomMessage2 = sender[randomSender]
return newObject = {subject : randomMessage1, sender: randomMessage2}

}
console.log(newMessage())


const appendMessageToDom = () => {
  // TODO: append the given message to the DOM (as a new row of `#inbox`)
// Call values from the previous function & give it a new variable to callback+-
const newMessage2 = newMessage()
console.log(newMessage2)
const newEmail = document.querySelector("#inbox");
const insertNewEmail = `<div class="row message unread" ".message">
<div class="col-3">${newMessage2.sender}</div>
<div class="col-9">${newMessage2.subject}</div>
</div>`

newEmail.insertAdjacentHTML('beforebegin', insertNewEmail);

// const tag = document.createElement("p");
//    var text = document.createTextNode("Tutorix is the best e-learning platform");
//    tag.appendChild(text);
//    var element = document.getElementById("new");
//    element.appendChild(tag);

// const testTwo = `<div class="row message unread">
// <div class="col-3"${randomMessage1}</div>
// <div class="col-9"${randomMessage2}</div>
// </div>`

// const testOne = document.querySelector("#inbox");
// testOne.insertAdjacentHTML('beforebegin', testTwo);//'<div class="row message unread">${newMessage}</div>');

 };

console.log(appendMessageToDom());


const refresh = () => {
  // TODO: Implement the global refresh logic. If there is a new message,
  //       append it to the DOM. Update the unread counter in title as well.


};









// Do not remove these lines:
document.addEventListener("DOMContentLoaded", () => {
  setInterval(refresh, 1000); // Every 1 second, the `refresh` function is called.
});

