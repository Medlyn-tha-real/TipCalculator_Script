// Hide the tip amount on load
const totaTip = document.getElementById("totalTip")
totaTip.style.display ="none";
const each = document.getElementById("each").style.display ="none";




// Custom function
const calculateTip = () => {

    // Store the data of inputs
    let billAmount = document.getElementById("billAmount").value;
    let serviceQuality = document.getElementById("serviceQuality").value;
    let numPeople = document.getElementById("totalPeople").value;

    // Quick validation
    if(billAmount === ""  || serviceQuality === 0) {
        return window.alert("Please enter some values!");
    }

    // Check to see if this input is empty or less than or equal to 1
    if(numPeople === "" || numPeople <= 1) {
        numPeople = 1;
        this.each.style.display = "none";
    } else {
        this.each.style.display = "block";
    }

    // Do some math
    let total = (billAmount * serviceQuality) / numPeople;
    total = Math.round(total * 100) / 100;
    total = total.toFixed(2);
    
    // Display the tip! 
    document.getElementById("totalTip").style.display = "block";
    document.getElementById("tip").innerHTML = total;
}






// Clicking the button calls our custom function
document.getElementById("calculate").onclick = function() { calculateTip(); };
