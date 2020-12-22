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