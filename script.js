



//added event lister to generate button
document.getElementById('eventClick').addEventListener("click", function () { validateLength() });



//function validate length called on click
function validateLength() {
    let passLength = prompt('Please select your password length 8 - 128 characters');
    let length = passLength;
    let x = length;
    //if then statment to validate length
    if (x > 128 || x < 8) {
        alert("Please select a length between 8 and 128");
        validateLength();
    }
    else if (x <= 128 || x > 8) {
        alert("Thank you !! Please follow the next few prompts to continue setting up your password");
        generatePassWord();


        //GENERATE PASS WORD FUNCTION ONY RUNS AFTER LENGTH HAS BEEN VALIDATED
        function generatePassWord() {

            //PROMPTS FOR USER SELECTED CRITERIA
            let password = document.getElementById('display');
            let lowLetters = confirm("Would you like to use lower case letters in your password? Please click OK for yes, Cancel for NO ");
            let capitalLetters = confirm("WOULD YOU LIKE TO USE UPPER CASE LETTERS IN YOUR PASSWORD? Please click OK for yes, Cancel for NO");
            let numbers = confirm("Do you want to use numbers in your password? Please click OK for yes, Cancel for NO");
            //SET UP VARIABLES WITHIN THE FUNCTION FOR ALL POSSIBLE USER SELECTED COMBINATIONS         
            let specChar = confirm('Do you want to use any special characters in your password? Please click OK for yes, Cancel for NO');
            let allChar = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()=';
            let upper = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
            let lower = 'abcdefghijklmnopqrstuvwxyz';
            let nums = '1234567890';
            let specCharacters = '!@#$%^&*()_+';
            let upplowNums = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz1234567890';
            let upplowSpec = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz!@#$%^&*()_+';
            let uppSpecNums = "ABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890!@#$%^&*()_+";
            let upperLower = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
            let upperSpec = "ABCDEFGHIJKLMNOPQRSTUVWXYZ!@#$%^&*()_+";
            let upperNums = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
            let lowSpecNums = 'abcdefghijklmnopqrstuvwxyz!@#$%^&*()_+0123456789';
            let lowSpec = "abcdefghijklmnopqrstuvwxyz!@#$%^&*()_+";
            let lowNums = "abcdefghijklmnopqrstuvwxyz1234567890";
            let specNums = "1234567890!@#$%^&*()_+";



            //IF / ELSE STATEMENTS FOR USER SELECTED CRITERIA

            //UPPER CASE / LOWER CASE / NUMBERS AND SPECIAL CHARACTERS 
            let allCharLength = allChar.length;
            let passWord = '';
            if (capitalLetters === true && lowLetters === true && numbers === true && specChar === true) {
                for (var i = 1; i <= passLength; i++)
                    passWord = passWord + allChar.charAt(Math.floor(Math.random() * allCharLength));
                document.getElementById("display").value = passWord;
                console.log(passWord);
            }
            // LOWER CASE/ NUMBERS/ SPECIAL CHARACTERS
            else if (capitalLetters === false && lowLetters === true && numbers === true && specChar === true) {
                let passWord = "";
                let loNuSpeclength = lowSpecNums.length;
                console.log(lowSpecNums.length);
                for (var i = 1; i <= passLength; i++)
                    passWord = passWord + lowSpecNums.charAt(Math.floor(Math.random() * loNuSpeclength));
                document.getElementById("display").value = passWord;
            }
            //NUMBERS/SPECIAL CHARACTERS
            else if (capitalLetters === false && lowLetters === false && numbers === true && specChar === true) {
                let passWord = "";
                let specNumslength = specNums.length;
                for (var i = 1; i <= passLength; i++)
                    passWord = passWord + specNums.charAt(Math.floor(Math.random() * specNumslength));
                document.getElementById("display").value = passWord;
            }
            //ONLY SPECIAL CHARACTERS
            else if (capitalLetters === false && lowLetters === false && numbers === false && specChar === true) {
                let passWord = "";
                let specCharslength = specCharacters.length;
                for (var i = 1; i <= passLength; i++)
                    passWord = passWord + specCharacters.charAt(Math.floor(Math.random() * specCharslength));
                document.getElementById("display").value = passWord;
            }

            //ONLY LOWERCASE / NUMBERS
            else if (capitalLetters === false && lowLetters === true && numbers === true && specChar === false) {
                let passWord = "";
                let lowNumslength = lowNums.length;
                for (var i = 1; i <= passLength; i++)
                    passWord = passWord + lowNums.charAt(Math.floor(Math.random() * lowNumslength));
                document.getElementById("display").value = passWord;
            }
            //LOWER CASE / SPECIAL CHARACTERS
            else if (capitalLetters === false && lowLetters === true && numbers === false && specChar === true) {
                let passWord = "";
                let lowSpeclength = lowSpec.length;
                for (var i = 1; i <= passLength; i++)
                    passWord = passWord + lowSpec.charAt(Math.floor(Math.random() * lowSpeclength));
                document.getElementById("display").value = passWord;
            }
            //CAPITAL LETTERS / NUMBERS
            else if (capitalLetters === true && lowLetters === false && numbers === true && specChar === false) {
                let passWord = "";
                let upperNumslength = upperNums.length;
                for (var i = 1; i <= passLength; i++)
                    passWord = passWord + upperNums.charAt(Math.floor(Math.random() * upperNumslength));
                document.getElementById("display").value = passWord;
            }
            //CAPITAL LETTERS / SPECIAL CHARACTERS
            else if (capitalLetters === true && specChar === true) {
                let passWord = "";
                let upperSpeclength = upperSpec.length;
                for (var i = 1; i <= passLength; i++)
                    passWord = passWord + upperSpec.charAt(Math.floor(Math.random() * upperSpeclength));
                document.getElementById("display").value = passWord;
            }
            //CAPITAL LETTERS / LOWER CASE LETTERS
            else if (capitalLetters === true && lowLetters === true) {
                let passWord = "";
                let upperLowerlength = upperLower.length;
                for (var i = 1; i <= passLength; i++)
                    passWord = passWord + upperLower.charAt(Math.floor(Math.random() * upperLowerlength));
                document.getElementById("display").value = passWord;
            }
            //CAPITAL LETTERS / SPECIAL CHARS / NUMBERS
            else if (capitalLetters === true && specChar === true && numbers === true) {
                let passWord = "";
                let uppSpecNumslength = uppSpecNums.length;
                for (var i = 1; i <= passLength; i++)
                    passWord = passWord + uppSpecNums.charAt(Math.floor(Math.random() * uppSpecNumslength));
                document.getElementById("display").value = passWord;
            }
            //CAPITAL LETTERS/ LOWER CASE / NUMBERS 
            else if (capitalLetters === true && lowLetters === true && numbers === true) {
                let passWord = "";
                let upplowNumslength = upplowNums.length;
                for (var i = 1; i <= passLength; i++)
                    passWord = passWord + upplowNums.charAt(Math.floor(Math.random() * upplowNumslength));
                document.getElementById("display").value = passWord;
            }
            //CAPITAL LETTERS / LOWER CASE / SPECIAL CHARACTERS
            else if (capitalLetters === true && lowLetters === true && specChar === true) {
                let passWord = "";
                let upplowSpeclength = upplowSpec.length;
                for (var i = 1; i <= passLength; i++)
                    passWord = passWord + upplowSpec.charAt(Math.floor(Math.random() * upplowSpeclength));
                document.getElementById("display").value = passWord;
            }
            //CAPITAL LETTERS ONLY
            else if (capitalLetters === true) {
                let passWord = "";
                let upperlength = upper.length;
                for (var i = 1; i <= passLength; i++)
                    passWord = passWord + upper.charAt(Math.floor(Math.random() * upperlength));
                document.getElementById("display").value = passWord;
            }
            //LOWER CASE LETTERS ONLY
            else if (lowLetters === true) {
                let passWord = "";
                let lowerlength = lower.length;
                for (var i = 1; i <= passLength; i++)
                    passWord = passWord + lower.charAt(Math.floor(Math.random() * lowerlength));
                document.getElementById("display").value = passWord;
            }
            //NUMBERS ONLY
            else if (numbers === true) {
                let passWord = "";
                let numslength = nums.length;
                for (var i = 1; i <= passLength; i++)
                    passWord = passWord + nums.charAt(Math.floor(Math.random() * numslength));
                document.getElementById("display").value = passWord;
            }
            //NONE SELECTED
            else if (capitalLetters === false && lowLetters === false && numbers === false && specChar === false) {
                for (var i = 1; i <= passLength; i++)
                    passWord = "INVALID PASSWORD, YOU DID NOT SELECT A VALID CRITERIA PLEASE CLICK GENERATE AND START OVER";
                document.getElementById("display").value = passWord;

            }
        }
    }

}



