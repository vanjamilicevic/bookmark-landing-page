
/*
    Function that validates email input
*/
function validateEmail(email) {

    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    return re.test(String(email).toLowerCase())
}

/*
    When "Contact Us" button is clicked email will be validated and proper message shown
*/
document.getElementById("contact-us-button").addEventListener("click", function() {

    emailValue = document.getElementById("email-input").value
    if (!validateEmail(emailValue)) {

        document.getElementById("error").classList.add("error-displayed")
        document.getElementById("email-input").classList.add("email-input-error")
        document.getElementById("email-input").classList.remove("transparent")
    } else {
        
        document.getElementById("error").classList.remove("error-displayed")
        document.getElementById("email-input").classList.remove("email-input-error")
        document.getElementById("email-input").classList.add("transparent")
    }
})

/* 
    Setting slides to change on click
*/
document.getElementById("simple-bookmarking").addEventListener ("click", function() {

    document.getElementById("simple-bookmarking").style.borderBottom="3px solid #FA5959"
    document.getElementById("easy-sharing").style.border="none"
    document.getElementById("speedy-searching").style.border="none"

    document.getElementById("slide-one").classList.remove("none")
    document.getElementById("slide-two").classList.add("none")
    document.getElementById("slide-three").classList.add("none")
})

document.getElementById("speedy-searching").addEventListener ("click", function() {

    document.getElementById("speedy-searching").style.borderBottom="3px solid #FA5959"
    document.getElementById("simple-bookmarking").style.border="none"
    document.getElementById("easy-sharing").style.border="none"
    
    document.getElementById("slide-one").classList.add("none")
    document.getElementById("slide-two").classList.remove("none")
    document.getElementById("slide-three").classList.add("none")
})

document.getElementById("easy-sharing").addEventListener ("click", function() {

    document.getElementById("easy-sharing").style.borderBottom="3px solid #FA5959"
    document.getElementById("simple-bookmarking").style.border="none"
    document.getElementById("speedy-searching").style.border="none"

    document.getElementById("slide-one").classList.add("none")
    document.getElementById("slide-two").classList.add("none")
    document.getElementById("slide-three").classList.remove("none")
})

/*
    Setting hidden answers to display on click and to hide other displayed answers
    Changing arrow picture
*/

/*
    Function receives:
    itemNumber - Question number, [1, n]

    This function is executed when user clicks on a question.
    1. If paragraph is hidden, it will display it by adding additional class
    2. If paragraph is displayed, it will hide it by removing additional class
*/
function toggleAnswer(itemNumber) {

    // Fetching the concrete item from the HTML (question, arrow and answer)
    let questionTag = document.getElementsByClassName("question")[itemNumber - 1]
    let arrowTag = document.getElementsByClassName("arrow")[itemNumber - 1]
    let answerTag = document.getElementsByClassName("answer")[itemNumber - 1]

    // Displaying the answer if it was hidden
    let answerClasses = [... answerTag.classList]
    if (answerClasses.includes("answer-hidden")) {
        answerTag.classList.remove("answer-hidden")
        questionTag.classList.add("question-bold")
        arrowTag.classList.add("rotate-arrow")
        
    }
    // Hidding the answer if it was displayed
    else {
        answerTag.classList.add("answer-hidden")
        questionTag.classList.remove("question-bold")
        arrowTag.classList.remove("rotate-arrow")
    }

    // Closing all other displayed questions
    let answers = document.getElementsByClassName("answer")
    let questions = document.getElementsByClassName("question")
    let arrows = document.getElementsByClassName("arrow")
    for(let i = 0; i < answers.length; i++) {

        if(i === itemNumber - 1)
            continue

        let answerClasses = [... answers[i].classList]
        if (!answerClasses.includes("answer-hidden")) {
            answers[i].classList.add("answer-hidden")
            questions[i].classList.remove("question-bold")
            arrows[i].classList.remove("rotate-arrow")
        }
    }
}

/*
    Turning on/off hamburger menu
*/
document.getElementById("hamburger-icon").addEventListener ("click", function() {

    document.getElementById("desktop-header-container").classList.add("none");
    document.getElementById("mobile-header-container").classList.add("mobile-header-container-active");
})

document.getElementById("hamburger-menu").addEventListener ("click", function() {

    document.getElementById("desktop-header-container").classList.remove("none");
    document.getElementById("mobile-header-container").classList.remove("mobile-header-container-active");
})

/*
    Scrolling to element when clicked
*/
document.getElementById("mobile-header-features").addEventListener ("click", function() {

    document.getElementById("desktop-header-container").classList.remove("none");
    document.getElementById("mobile-header-container").classList.remove("mobile-header-container-active");
    document.getElementById('features').scrollIntoView({
        behavior: 'smooth'
      });
})

document.getElementById("mobile-header-contact").addEventListener ("click", function() {

    document.getElementById("desktop-header-container").classList.remove("none");
    document.getElementById("mobile-header-container").classList.remove("mobile-header-container-active");
    document.getElementById('contact-us').scrollIntoView({
        behavior: 'smooth'
      });
})

document.getElementById("mobile-header-button").addEventListener ("click", function() {

    document.getElementById("desktop-header-container").classList.remove("none");
    document.getElementById("mobile-header-container").classList.remove("mobile-header-container-active");
    document.getElementById('desktop-header-container').scrollIntoView({
        behavior: 'smooth'
      });
})