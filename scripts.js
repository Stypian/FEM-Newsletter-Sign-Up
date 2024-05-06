onload = function() {

    function submitEmail() {
        const form = document.querySelector(".newsletter__email-form");
        const inpt = document.querySelector(".newsletter__email");
        const submit = document.querySelectorAll(".newsletter__submit");
        const thanks = document.querySelector(".newsletter__thanks-cont");
        const cont = document.querySelector(".newsletter__cont");
        const subThanksDesk = document.querySelector(".newsletter__submit--thanks");
        const subThanksMob = document.querySelector(".newsletter__submit--thanks-mobile");
        const emailError = document.querySelector(".newsletter__email-p--error");
        const thanksButtons = [subThanksDesk, subThanksMob];
        const valid = /^([a-zA-Z0-9\.-]+)@([a-zA-Z0-9-]+).([a-z]{2,3})$/;


        //remove the thanks message and show normal screen
        for (let i = 0; i < thanksButts.length; i++) {    
            thanksButtons[i].addEventListener("click", function() {
                thanks.style.display = "none";
                cont.style.display = "flex";
                inpt.value = '';
                remErrors();
            })
        }
 

        //add error colors and message
        function addErrors() {    
            emailError.style.display = "block";
            inpt.setAttribute("style", "border-color: hsl(4, 100%, 67%); color: hsl(4, 100%, 67%); background-color: hsla(4, 100%, 67%, 0.2)");
        }
        
        //remove error colors and message
        function remErrors() {     
            emailError.style.display = "none";
            inpt.setAttribute("style", "border-color: hsla(231, 7%, 60%, 0.6); color: #000; background-color: #fff");
        }

        //submit form without refreshing page
        function submitForm() {
            form.addEventListener("submit", function(e) {
                e.preventDefault();
            })
        }
        
        //remove the red error color when typing new iput
        inpt.addEventListener("keydown", function() {    
            inpt.style.color = '#000';
        })

        //show thanks message or errors
        submit[2].addEventListener("click", function(e) {
            e.preventDefault();
            if (valid.test(inpt.value)) {
                submitForm();
                cont.style.display = 'none';
                thanks.style.display = 'block';
            } else {
                addErrors();
            }         
        })
        
    }

    submitEmail();






























}
