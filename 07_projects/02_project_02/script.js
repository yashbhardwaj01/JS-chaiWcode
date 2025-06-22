const form = document.querySelector('form') // why form bcoz hamra calculate button iske andar h 

// ALERT ⚠️ const height = parseInt(document.querySelector('#height').value)  .... agr m event k bahar height likhunnga toh ye usecase empty value dega  

form.addEventListener('submit', function (e) { // event listner "submit", kyuki form h 
    e.preventDefault() // default submission ko prevent krne k liye kyuki , hmara data kisi db par nhi ja rha h 

    const height = parseInt(document.querySelector('#height').value) // DOM se value input lene ka tareeka h ye ...and it gives value in string format so we need to convert it to INT
    const weight = parseInt(document.querySelector('#weight').value)
    const results = document.querySelector('#results')

    if (height == '' || height < 0 || isNaN(height)) {   // isNaN(height) is equal to  height == NaN , checking if height is no. or not 
        results.innerHTML = `Please give a valid height ${height}`;
    }

    else if (weight == '' || weight < 0 || isNaN(weight)) {
        results.innerHTML = `Please give a valid weight ${weight}`;
    }

    else {
        // calculate BMI 
        const bmi = parseFloat((weight / ((height * height) / 10000)).toFixed(2))
        //show the result 
        results.innerHTML = `<span>Your BMI is ${bmi}</span>`

        // Display Message 

        if (bmi < 18.6) {
            results.innerHTML += `<span style="color: orange"> Under Weight </span>`;

        } else if (bmi >= 18.6 && bmi <= 24.9) {
            results.innerHTML += `<span style="color: green"> Normal Weight </span>`;

        } else {
            results.innerHTML += `<span style="color: red"> Over Weight </span>`;

        }

    }

})