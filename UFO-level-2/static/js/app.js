// from data.js
var tableData = data;

// YOUR CODE HERE!
// Create reference to table body
var tbody = d3.select("tbody");

// UFO Sighting values for each column
tableData.forEach(function(ufoSighting) {
    console.log(ufoSighting);
    // Append a new table row for each UFO Sighting object
    var row = tbody.append("tr");

    // Use 'Object.entries' to console.log each UFO Sighting value
    Object.entries(ufoSighting).forEach(function([key, value]) {
      console.log(key, value);
      // Append cell to the row for each value
      var cell = row.append("td");
      cell.text(value);
    });
  });

// Select the button - click event
var button = d3.select("#filter-btn");
button.on("click", function() {

    tbody.html("");

    // Select the input date, state and shape
    var inputElement = d3.select("#input");
    // Retrieve the value property of the input date, state, shape
    var inputValue = inputElement.property("value");
    // Filter data with datetime, city, state, country or shape equal to user input
    var filteredData = tableData.filter(sighting => sighting.datetime === inputValue ||
                                                    sighting.city === inputValue ||
                                                    sighting.state === inputValue ||
                                                    sighting.country === inputValue ||
                                                    sighting.shape === inputValue);
    // console.log filter values
    console.log(filteredData);


    filteredData.forEach(function(selections) {

    console.log(selections);
    // Append a new table row for each UFO Sighting object
    var row = tbody.append("tr");
    // Use `Object.entries` to console.log each UFO Sighting value
    Object.entries(selections).forEach(function([key, value]) {
        console.log(key, value);
        // Append cell to the row for each value
        var cell = row.append("td");
        cell.text(value);
    });
});
});