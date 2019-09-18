var config = {
    apiKey: "AIzaSyDYv-IfSZjpCZT4I0NfMpjr4ocM0jngQf8",
    authDomain: "will-s-project.firebaseapp.com",
    databaseURL: "https://will-s-project.firebaseio.com",
    projectId: "will-s-project",
    storageBucket: "",
    messagingSenderId: "1048685961476",
    appId: "1:1048685961476:web:cb6018f33925f8e653b051"
};

firebase.initializeApp(config);

var database = firebase.database();

let name = "";
let role = "";
let date = "";
let rate = "";

database.ref().on("child_added", function (snapshot) {
    let dude = snapshot.val();
    console.log(dude);

    let months = 0;


    let newRow = $("<tbody>");
    newRow.attr("scope", "row");
    let newTR = $("<tr>");
    let newName = $("<td>")
    newName.text(dude.name);
    let newRole = $("<td>")
    newRole.text(dude.role);
    let newDate = $("<td>")
    newDate.text(dude.date);
    let newMonths = $("<td>");
    newMonths.text(1)
    let newRate = $("<td>")
    newRate.text(dude.rate);
    let newPaid = $("<td>");
    newPaid.text(1)

    newTR.append(newName);
    newTR.append(newRole);
    newTR.append(newDate);
    newTR.append(newMonths);
    newTR.append(newRate);
    newTR.append(newPaid);
    newRow.append(newTR);

    $("#main").append(newRow);



})

$(".btn").on("click", function () {
    event.preventDefault();
    name = $("#name-input").val().trim();
    role = $("#role-input").val().trim();
    date = $("#date-input").val().trim();
    rate = $("#rate-input").val().trim();

    database.ref().push({
        name: name,
        role: role,
        date: date,
        rate: rate
    });
}); 