var vertices = genLineData(genPolarCoordinates(200), [300,300]);


var width = 1200,
    height = 1200

var numPoints = 100

 var svg = d3.select("body").append("svg")
     .attr("width", width)
     .attr("height", height);

 //create line
 var lineFunction = d3.svg.line()
    .x(function(d){ return d.x;})
    .y(function(d){ return d.y;})
    .interpolate("basis");

  var lineShow = svg.append("path")
  .attr("d", lineFunction(vertices).concat("z"))
  .attr("stroke", "blue")
  .attr("stroke-width", 4)
  .attr("fill", "green");
