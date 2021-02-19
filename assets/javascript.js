//header
function date_time() {
    now = moment().format('MMMM Do, YYYY [at] h:mm:ss a');
    document.getElementById('timer').innerHTML = now;
    setTimeout(function () { date_time(); }, 1000);
}
// console.log(date_time)
date_time();

//button popup


//display