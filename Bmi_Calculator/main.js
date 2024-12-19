const form = document.querySelector('form')

form.addEventListener('submit', function(e){
    e.preventDefault()

    const height = parseInt(document.querySelector('#height').value);
    const weight = parseInt(document.querySelector('#weight').value);

    const results = document.querySelector('#results');

    if(isNaN(height) || height<0){
        results.innerHTML = `Enter a valid height`;
    } else if(isNaN(weight) || weight<0){
        results.innerHTML = `Enter a valid weight`;
    }
    else {
        const bmi = (weight/((height*height)/10000)).toFixed(2);
        let category = '';
        if (bmi < 18.5) {
            category = 'Underweight';
            results.style.color = 'blue';
        } else if (bmi >= 18.5 && bmi < 24.9) {
            category = 'Normal weight';
            results.style.color = 'green';
        } else if (bmi >= 25 && bmi < 29.9) { 
            category = 'Overweight';
            results.style.color = 'orange';
        } else {
            category = 'Obesity';
            results.style.color = 'red';
        }

        results.innerHTML = `Your BMI is <strong>${bmi}</strong> (${category}).`;
    }
})