hours = ["8", "9", "10", "11", "12", "13", "14", "15", "16", "17"]



//when page is ready add date and rows
$(document).ready(function() {
    setDate();
    renderRows();
    $("button").on("click", saveText);
    setInterval(function(){
        rowStyle();
    },1000);
    
})

// Get date from moment.js to add to top of page
function setDate(){
    date = moment().format('MMMM Do YYYY, h:mm a')

    //add date to jumbotron
    $("#currentDay").text(date);

}

// empty the container and start creating rows for each array item
function renderRows() {

    //Start with an empty container
    $(".container").empty();

    //Loop through array to make a row for each index

    for (i=0; i<hours.length; i++) {

        hour = hours[i]
        index = i

        //run the createRow function using the current index
        createRow(hour);
        rowStyle(hour);
        
    }

}

//for each hour in the array create a row with 3 columns
function createRow() {
    //create row
    var row = $("<div>").attr("class", "row")
    
    //create column 1 containing time
    var colOne = $("<div>").attr("class", "row col-md-1 col-sm-1 hour");
    
    //create time text for column 1 adding AM or PM where applicable
    if (hour==12){
        time = $("<P>").text(hour + "PM")
    }
    else if (hour<12){
        time = $("<P>").text(hour + "AM")
    }
    else if (hour>12){
        newHour = hour-12
        time = $("<P>").text(newHour + "PM")
    }

    //add time to colOne
    colOne.append(time)

    //create column 2 which is an input field for schedule information
    var colTwo = $("<input>").attr({
        class: "row col-md-10 col-sm-10",
        type: "text",
        id: hour})
    
    // get a value from local storage using the hour index as the key
    var eventId = localStorage.getItem(hour)


    //if there is an event make it the value of the column 2 input
    if (eventId) {

       colTwo.val(eventId)
        
    }

    //create column 3 which is a save button
    var colThree = $("<button>").attr({
        class: "row col-md-1 col-sm-1 saveBtn fas fa-lock",
        "data-save": hour})

    // add the 3 columns to the row
    row.append(colOne, colTwo, colThree)

    //add the row to the container
    $(".container").append(row)

}

//style each row to show whether the hour sits in the past, present or future
function rowStyle() {
    
    //take each input row and start a function
    $("input").each(function(){

        //take the id from the input which contains the hour value and turn into an integer
        var rowHour = parseInt((this).id)
        
        //retriev the current hour in 24 hour format from moment.js and turn into an integer
        var actualHour = parseInt(moment().hours())
        
        
        //if the hour in the row ID is the same as the time from moment.js then style the row for the present
        if (actualHour===rowHour){
            $(this).addClass("present")
        }

        //if the hour in the row ID is more than the time from moment.js then style the row for the past
        else if (actualHour>rowHour) {
            $(this).addClass("past")
        }

        //All other instances will be in the futire so style as future
        else{
            $(this).addClass("future")
        }     
        
    })
    
}
// run the saveText function when save button clicked
$("button").on("click", saveText);


function saveText(event) {
    //get the input div which is always the second child (index 1) of the parent as per rowStyle above. Take the id which is the hour.
    var eventId = $(this).parent().children()[1].id;
    //Do the same as above to get the value (text input) of the input field
    var eventText = $(this).parent().children()[1].value;

    //If there is no text in the field send an alert and return out of function
    if (eventText === "") {
    alert("Nothing has been entered");
    return
    }
    
    //take the hour and text as retrieved above and send to local storage
    window.localStorage.setItem(eventId, eventText)

}