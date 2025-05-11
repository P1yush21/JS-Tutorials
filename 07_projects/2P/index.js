const form = document.querySelector("form")

form.addEventListener('submit', function(e){
    e.preventDefault()
    // It's a method used in event handling to stop the browser’s default behavior for a particular event.

    const height = parseInt(document.querySelector('#height').value)
    const weight = parseInt(document.querySelector('#weight').value)
    const results = document.querySelector('#result')

    if(height === '' || height < 0 || isNaN(height)){
        result.innerHTML = 'please give a valid height ${height}';
    }else if(weight === '' || weight < 0 || isNaN(weight)) {
        result.innerHTML = 'please give a valid weight ${weight}';
    } else {
        const bmi = (weight / ((height*height)/10000)).toFixed(2)
    }
    results.innerHTML = `<span>${bmi}</span>`;
})