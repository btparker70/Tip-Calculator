//Calculator
function calculatorTip() {
    var billTotal = document.getElementById("billTotal").nodeValue;
    var serviceQuality = document.getElementById("serviceQuality").nodeValue;
    var totalPeople = document.getElementById("peopleTotal").nodeValue;

    // Validate Input
    if (billTotal === "" || serviceQuality == 0) {
        alert("Please enter values");
        return;
    }

    //Check to see if input is empty or <=1
    if (totalPeople === "" || totalPeople <= 1) {
        totalPeople = 1;

        document.getElementById("each").style.display = "none";
    } else {
        document.getElementById("each").style.display = "block";
    }

    //Calculate Tip
    var total = (billTotal * serviceQuality) / totalPeople;
    
    //Round to 2 decimal places
    total = Math.round(total * 100) / 100;

    //Always give 2 decimal places
    total = total.toFixed(2);

    //Display Tip
    document.getElementById("tip").innerHTML = total;
}

//Hide tip amount on load
document.getElementById("totalTip").style.display = "none";
document.getElementById("each").style.display = "none";

//Click to call function
document.getElementById("calculate").onclick = function() {
    calculateTip();
};