

function downloadFile(url, filename) {
    const a = document.createElement('a');
    a.href = url;
    a.download = filename;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
}

// Attach the function to the button click event
document.getElementById('downloadBtn').addEventListener('click', function() {
    const fileUrl = 'https://www.canva.com/design/DAGPRD33Lf4/pXClsrAoNTzv1iy4Kt0mrw/view?utm_content=DAGPRD33Lf4&utm_campaign=designshare&utm_medium=link&utm_source=editor'; // Replace with your file URL
    const fileName = 'https://www.canva.com/design/DAGPRD33Lf4/pXClsrAoNTzv1iy4Kt0mrw/view?utm_content=DAGPRD33Lf4&utm_campaign=designshare&utm_medium=link&utm_source=editor'; // Replace with the desired file name
    downloadFile(fileUrl, fileName);
});



document.addEventListener("DOMContentLoaded", function() {
    const menuIcon = document.getElementById("menuicon");
    const navList = document.querySelector(".navlist");
  
    menuIcon.addEventListener("click", function() {
      navList.classList.toggle("active");
    });
  });
  






function spark(event){
    let i2 = document.createElement('i2');
    i2.style.left=(event.pageX)+'px';
    i2.style.top=(event.pageY)+'px';
i2.style.scale=`${Math.random()*2+1}`
i2.style.setProperty('--x',getRandomTransitionValue());
i2.style.setProperty('--y',getRandomTransitionValue());
    document.body.appendChild(i2);
    setTimeout(()=>{
        document.body.removeChild(i2)
    },2000)
}

function getRandomTransitionValue(){
return `${Math.random()*400-200}px`
}

document.addEventListener('mousemove',spark);



// let words= document.querySelectorAll(".word");
// words.foreach((word)=>{
//     let letters = word.textContent.split("");
//     word.textContent="";
//     letters.forEach((letter)=>{
//         let span = document.createElement("span");
//         span.textContent=letter;
//         span.className="letter";
//         word.append(span)

//     });
// });

// let currentWordIndex = 0;
// let maxWordIndex = words.length -1;
// words[currentWordIndex].style.opacity="1";

// let changeText = () => {
//     let currentWord =words[currentWordIndex];
//     let nextWord = currentWordIndex === maxWordIndex ? words [0]: words [currentWordIndex + 1]
 
//     Array.from(currentWord.children).forEach((letter,i)=>{
//         setTimeout(()=>{
//             letter.className = "letter out";
//         } , i*80);
//     });
//     nextWord.style.opacity="1";
//     Array.from(nextWord.children).forEach((letter,i)=>{
//         letter.className="letter behind";
//         setTimeout(()=>{
//             letter.className="letter in";
//         },340+i*80)
//     })
  
// currentWordIndex=currentWordIndex===maxWordIndex ? 0 : currentWordIndex +1;

// };

// changeText();
// setInterval(changeText,)





let words = document.querySelectorAll(".word");

words.forEach((word) => {
    let letters = word.textContent.split("");
    word.textContent = "";
    letters.forEach((letter) => {
        let span = document.createElement("span");
        span.textContent = letter;
        span.className = "letter";
        word.append(span);
    });
});

let currentWordIndex = 0;
let maxWordIndex = words.length - 1;
words[currentWordIndex].style.opacity = "1";  // Set the initial word to be visible

let changeText = () => {
    let currentWord = words[currentWordIndex];
    let nextWord = currentWordIndex === maxWordIndex ? words[0] : words[currentWordIndex + 1];
    
    // Fade out the current word's letters
    Array.from(currentWord.children).forEach((letter, i) => {
        setTimeout(() => {
            letter.className = "letter out";
        }, i * 80);
    });
    
    // Ensure the next word is fully transparent initially
    nextWord.style.opacity = "1";
    Array.from(nextWord.children).forEach((letter, i) => {
        letter.className = "letter behind"; // Place the letters behind
        setTimeout(() => {
            letter.className = "letter in";  // Bring them to the front
        }, 340 + i * 80);
    });
    
    // Set opacity to 0 after the transition for the current word
    setTimeout(() => {
        currentWord.style.opacity = "0";
    }, currentWord.children.length * 80);

    currentWordIndex = currentWordIndex === maxWordIndex ? 0 : currentWordIndex + 1;
};

changeText();
setInterval(changeText, 3000);













const name = nameInput.value.trim();
const email = emailInput.value.trim();
const address = address.value.trim();
const phone = phoneInput.value.trim();
const message = messageInput.value.trim();
var mailtoLink ="anayashaikh903@gmail.com"

console.log('Input values:', name, email, address, phone, message);

if (name === '' || email === '' || address === '' || phone === '' || message === '') {
  alert('Please fill out all fields.');
  return;
}

console.log('Input values are valid');

const subject = `Contact Form Submission from ${name}`;
const body = `Name: ${name}\nEmail: ${email}\nPhone: ${phone}\nMessage: ${message}`;

console.log('Email subject and body:', subject, body);

const mailtoLink = `mailto:${recipientEmail}?subject=${subject}&body=${body}`;

console.log('Mailto link:', mailtoLink);

try {
  window.location.href = mailtoLink;
} catch (error) {
  console.error('Error redirecting to mailto link:', error);
}