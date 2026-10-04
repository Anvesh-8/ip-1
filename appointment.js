const check=document.getElementById("opinon");
const finput=document.getElementById("file_upload");
const bttn=document.getElementById("upload_bttn");
const fname=document.getElementById("file_ornot")

check.addEventListener("change",function() {
    if(check.checked) {
        bttn.style.display="block"
    } else {
        bttn.style.display="none"
    }
});

bttn.addEventListener("click",function() {
    finput.click();
});

finput.addEventListener("change",function() {
    if(finput.value) {
        fname.innerText=finput.value.match(/[\/\\]([\w\d\s\.\-\(\)]+)$/)[1];
    } else {
        fname.innerText="no file choosen yet";
    }
})