const form = document.querySelector("form");
form.addEventListener("submit", function(event){
    event.preventDefault();
    console.log("Inside my form");
    let height = document.getElementById("height").value;
    let ht = height/100;

    console.log(ht);
    let weight = document.querySelector("#weight").value;
    console.log(weight);

    let results = document.querySelector("#results");
    if(!height || !weight || isNaN(height) || isNaN(weight)){
        let text = "Please enter a correct value";
        results.innerHTML = text;
    }else{
        let bmi = weight / (ht * ht).toFixed(2);
        results.innerHTML = "The BMI index is " + bmi;
        console.log(bmi);
    }
});
