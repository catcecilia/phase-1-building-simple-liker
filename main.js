// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!
//step 1 add hidden class to error modal so it doesn't show when it first loads
const errorMsg = document.querySelector('#modal');
errorMsg.className = "hidden";

//invoke mimicServerCall 

const hearts = document.querySelectorAll('.like-glyph');
hearts.forEach(heart => heart.addEventListener('click', function(){
  mimicServerCall()
   .catch(()=>{
    errorMsg.classList.remove("hidden");
    setTimeout(function(){errorMsg.className="hidden"}, 3000)})
  .then(()=>{
    heart.classList.toggle("activated-heart");
    if (heart.innerText == EMPTY_HEART){
      heart.innerText=FULL_HEART;
    } else {
      heart.innerText=EMPTY_HEART;
    }
  });
}));


//------------------------------------------------------------------------------
// Don't change the code below: this function mocks the server response
//------------------------------------------------------------------------------

function mimicServerCall(url="http://mimicServer.example.com", config={}) {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      let isRandomFailure = Math.random() < .2
      if (isRandomFailure) {
        reject("Random server error. Try again.");
      } else {
        resolve("Pretend remote server notified of action!");
      }
    }, 300);
  });
}
