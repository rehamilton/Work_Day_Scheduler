hours = [8, 9, 10, 11, 12, 1, 2, 3, 4, 5]


function renderRows() {

    //Start with an empty container
    $(".container").empty();

    //Loop through array to make a row for each index

    for (i=0; i<hours.length; i++) {

        hour = hours[i]

        createRow(hour)
        console.log(hour)
    }

}

function createRow() {
    //create row
    var row = $("<div>").attr("class", "row")
    
    //create column 1 containing time
    var colOne = $("<div>").attr({
        class: "row col-md-1 hour",
        "data-time": hour});
    
    //create column 2 which is an input field for schedule information
    var colTwo = $("<input>").attr({
        class: "row col-md-10",
        type: "text"})

    //create text for column 2

    //create column 3 which is a save button
    var colThree = $("<button>").attr({
        class: "row col-md-1 saveBtn",
        "data-save": hour})

    


    row.append(colOne, colTwo, colThree)
    $(".container").append(row)
}

moment().format('MMMM Do YYYY, h:mm:ss a')

renderRows()