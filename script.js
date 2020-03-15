hours = ["8", "9", "10", "11", "12", "13", "14", "15", "16", "17"]

//when page is ready add date and rows
$(document).ready(function() {
    setDate();
    renderRows();
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
    
    
    console.log("type: " +typeof hour);
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

    //create column 3 which is a save button
    var colThree = $("<button>").attr({
        class: "row col-md-1 col-sm-1 saveBtn fas fa-lock",
        "data-save": hour})

    // add the 3 columns to the row
    row.append(colOne, colTwo, colThree)

    //add the row to the container
    $(".container").append(row)
}

function rowStyle() {
    
    $("input").each(function(){
        var rowHour = parseInt((this).id)
        console.log("test: " +typeof rowHour);
        var actualHour = parseInt(moment().hours())
        console.log("actualHour: " +typeof actualHour);
        

        if (actualHour===rowHour){
            $(this).addClass("present")
        }

        else if (actualHour>rowHour) {
            $(this).addClass("past")
        }

        else{
            $(this).addClass("future")
        }     
        
    })
    
}

setInterval(function(){
    rowStyle();
},1000);


