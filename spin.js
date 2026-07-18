const canvas = document.getElementById("wheel");
const ctx = canvas.getContext("2d");

const spinBtn = document.getElementById("spinBtn");
const popup = document.getElementById("popup");

const prizes = [
  "₹20",
  "₹50",
  "₹30",
  "₹80",
  "₹100",
  "₹10"
];

const colors = [
  "#ff3b6a",
  "#ff5a7d",
  "#ff2d55",
  "#ff7096",
  "#ff4d73",
  "#ff8cab"
];

const total = prizes.length;
const arc = (2 * Math.PI) / total;

let rotation = 0;
let spinning = false;

function drawWheel() {

    ctx.clearRect(0,0,290,290);

    ctx.save();
    ctx.translate(145,145);
    ctx.rotate(rotation);

    for(let i=0;i<total;i++){

        ctx.beginPath();
        ctx.moveTo(0,0);
        ctx.arc(0,0,135,i*arc,(i+1)*arc);
        ctx.closePath();

        ctx.fillStyle = colors[i];
ctx.fill();

ctx.strokeStyle = colors[i];
ctx.lineWidth = 2;
ctx.stroke();

        ctx.save();

        ctx.rotate(i*arc + arc/2);

        ctx.fillStyle="#fff";
        ctx.font="bold 18px Arial";
        ctx.textAlign="right";

        ctx.fillText(prizes[i],112,6);

        ctx.restore();
    }

    ctx.beginPath();
ctx.arc(0,0,30,0,Math.PI*2);
ctx.fillStyle = "#ffd400";
ctx.fill();

ctx.strokeStyle = "#e0a800";
ctx.lineWidth = 3;
ctx.stroke();
    

    ctx.restore();
}

drawWheel();

spinBtn.onclick=function(){

    if(spinning) return;

    spinning=true;

    spinBtn.disabled=true;

    // Always land on ₹100 (index 4)
    const target = Math.floor(Math.random() * prizes.length);

    const spins = 8;
const pointerOffset = -Math.PI / 2; // Pointer is at the top

const finalAngle =
    (spins * Math.PI * 2) +
    pointerOffset -
    (target * arc) -
    (arc / 2);

    const start = rotation;
    const duration = 5000;
    const startTime = performance.now();

    function animate(now){

        let progress = (now-startTime)/duration;

        if(progress>1) progress=1;

        const ease = 1-Math.pow(1-progress,4);

        rotation = start + (finalAngle-start)*ease;

        drawWheel();

        if(progress<1){

            requestAnimationFrame(animate);

        }else{

          const wonPrize = prizes[target];
document.getElementById("winAmount").innerText = wonPrize;
popup.style.display = "flex";

        }

    }

    requestAnimationFrame(animate);

};
document.getElementById("claimBtn").onclick = function () {

    const upi = document.getElementById("upiId").value.trim();

    if (upi === "") {
        alert("Please enter your UPI ID.");
        return;
    }

    // Save the UPI ID locally (optional)
    localStorage.setItem("upiId", upi);

    // Redirect to the next page
    window.location.href="verify.html";
};
