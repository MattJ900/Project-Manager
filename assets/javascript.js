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
// {
//     name: "",
//     type: "",
//     rate: "",
//     dueDate: "",
//     earnings: ""
// }
var listToDisplay = $('.project-display')
var testProjects = [{
    name: "test1",
    type: "html",
    rate: "50",
    dueDate: "12/30/2021",
    earnings: "100"
}, {
    name: "test2",
    type: "html",
    rate: "50",
    dueDate: "12/30/2021",
    earnings: "100"
}, {
    name: "test3",
    type: "html",
    rate: "50",
    dueDate: "12/30/2021",
    earnings: "100"
}];

function displayProjects(){
    testProjects.forEach(element => {
        var daysTillDue = moment(element.dueDate, "MM/DD/YYYY").dayOfYear() - moment().dayOfYear();
        var newItem = $('<li>').text("PROJECT NAME: " + element.name + " || PROJECT TYPE: " + element.type + " || PROJECT RATE: " + element.rate + " || DUE DATE: " + element.dueDate + " || DUE IN: " + daysTillDue + " || POTENTIAL EARNINGS: " + element.earnings );
        listToDisplay.append(newItem);


    });
}


console.log(testProjects);
console.log(moment("12/30/2021", "MM/DD/YYYY").dayOfYear());

displayProjects();

// var button = document.querySelector("btn");  
// button.addEventListener("click");
// console.log("click");



// function btn()

