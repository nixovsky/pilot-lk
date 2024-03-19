let testSlider = document.querySelector('.testSlider');
if (testSlider){
    let questions = document.querySelectorAll('.question');
    let nextQuestion = document.querySelector('.next-question');
    let answers = document.querySelectorAll('.answer');
    let testSwiper = new Swiper(testSlider, {
        spaceBetween: 30,
        effect: "fade",
        autoHeight: "true",
        grabCursor: "false",
        allowTouchMove: "false",
        simulateTouch: false,
    })

    answers.forEach(answer => {
        answer.addEventListener('click', () => {
            answer.classList.toggle('marked');
            if (answer.classList.contains('marked')){
                answer.querySelector('input').checked = true;
            }else{
                answer.querySelector('input').checked = false;
            }
            console.log(testSwiper.activeIndex, questions.length - 1)
            
            if (testSwiper.activeIndex == questions.length - 1){
                nextQuestion.innerHTML = 'Отправить';
            }
            checkMarked(testSwiper.activeIndex, questions, nextQuestion);
        });
    });

    nextQuestion.addEventListener('click', (e) => {
        e.preventDefault();
        testSwiper.slideNext();
        nextQuestion.disabled = true;
        if (testSwiper.activeIndex == questions.length - 1){
            nextQuestion.innerHTML = 'Отправить';
        }

        // answers.forEach((el) => {
        //     if (el.classList.contains('marked')){
        //         console.log(el)
        //     }
        // });
    })
    checkMarked(testSwiper.activeIndex, questions, nextQuestion);
}


function checkMarked (sliderId, questions, nextBtn){
    let currentResponses = questions[sliderId].querySelectorAll('.answer');
    console.log(currentResponses)
    
    for (let i = 0; i < currentResponses.length; i++){
        if (currentResponses[i].classList.contains('marked')){
            nextBtn.disabled = false;
            break;
        }else{
            nextBtn.disabled = true;
        }
    }
}