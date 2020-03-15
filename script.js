hours = [8, 9, 10, 11, 12, 1, 2, 3, 4, 5]

$(document).ready(function() {
    setDate();
    renderRows();
})

function setDate(){
    date = moment().format('MMMM Do YYYY, h:mm a')
    console.log(date)

}

function renderRows() {

    //Start with an empty container
    $(".container").empty();

    //Loop through array to make a row for each index

    for (i=0; i<hours.length; i++) {

        hour = hours[i]

        //run the createRow function using the current index
        createRow(hour)
    }

}

function createRow() {
    //create row
    var row = $("<div>").attr("class", "row")
    
    //create column 1 containing time
    var colOne = $("<div>").attr({
        class: "row col-md-1 hour",
        "data-time": hour});
    
    //create time text for column 1

    if (hour<9){
        time = $("<P>").text(hour + "PM")
    }
    else if (hour===12){
        time = $("<P>").text(hour + "PM")
    }
    else{
        time = $("<P>").text(hour + "AM")
    }

    //add time to colOne
    colOne.append(time)

    //create column 2 which is an input field for schedule information
    var colTwo = $("<input>").attr({
        class: "row col-md-10",
        type: "text"})

    //create column 3 which is a save button
    var colThree = $("<button>").attr({
        class: "row col-md-1 saveBtn fas fa-lock",
        "data-save": hour})

    // add the 3 columns to the row
    row.append(colOne, colTwo, colThree)

    //add the row to the container
    $(".container").append(row)
}

