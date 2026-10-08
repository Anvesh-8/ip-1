let shoban = document.getElementById("soga");
let babu = document.querySelector("button");
let ntr = document.getElementById("file_input");
let anr = document.getElementById("filename");

function chikki(x) {
    if (x.checked) {
        babu.style.display = "inline";
    } else {
        babu.style.display = "none"
    }
}


babu.addEventListener("click",function(event) {
    event.preventDefault();
    ntr.click();
})
ntr.addEventListener("change",function() {
    if(ntr.files.length>0) {
        anr.innerText=ntr.files[0].name;
        anr.style.display="inline";
    } else {
        anr.innerText="no file choosen yet";
    }
});

let sav = document.querySelector("form");
sav.addEventListener("submit",function(event) {
    event.preventDefault();
    console.log("Your Appointment booking with {Doctor} On {} is Successful")
});