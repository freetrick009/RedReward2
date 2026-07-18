const cities = {
  "Maharashtra": [
    "Mumbai",
    "Pune",
    "Nagpur",
    "Nashik"
  ],
  "Delhi": [
    "New Delhi",
    "Dwarka",
    "Rohini"
  ],
  "Gujarat": [
    "Ahmedabad",
    "Surat",
    "Vadodara"
  ],
  "Karnataka": [
    "Bengaluru",
    "Mysuru",
    "Mangaluru"
  ],
  "Tamil Nadu": [
    "Chennai",
    "Coimbatore",
    "Madurai"
  ],
  "West Bengal": [
    "Kolkata",
    "Howrah",
    "Durgapur"
  ]
};

const state = document.getElementById("state");
const city = document.getElementById("city");

state.addEventListener("change", function () {

  city.innerHTML = '<option value="">Select City</option>';

  const list = cities[this.value] || [];

  list.forEach(function(item){

    const option = document.createElement("option");
    option.textContent = item;
    option.value = item;

    city.appendChild(option);

  });

});

document.getElementById("rewardForm").addEventListener("submit", function(e){

    e.preventDefault();

    const batch = document.getElementById("batch").value.trim();
    const mobile = document.getElementById("mobile").value.trim();
    const agree = document.getElementById("agree").checked;

    if(batch === ""){
        alert("Please enter Batch Code.");
        return;
    }

    if(!/^[0-9]{10}$/.test(mobile)){
        alert("Please enter a valid 10-digit mobile number.");
        return;
    }

    if(state.value === ""){
        alert("Please select a state.");
        return;
    }

    if(city.value === ""){
        alert("Please select a city.");
        return;
    }

    if(!agree){
        alert("Please accept the Terms & Conditions.");
        return;
    }
    
location.replace("otp.html");

});