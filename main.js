
function newDate(){
    let date = new Date();
    let date1=document.getElementById('time');
    date1.innerHTML= `${date.getHours()}: ${date.getMinutes()}: ${date.getSeconds()}`;
}

setInterval(newDate,1000);