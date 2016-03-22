var dataUrl = "https://raw.githubusercontent.com/FreeCodeCamp/ProjectReferenceData/master/GDP-data.json";
var data;
$(document).ready(function(){
  $.get(dataUrl, function(data){
    data = JSON.parse(data);
    var dataset = data.data.map(function(a){
      return a[1];
    });
    var svgWidth = 800;
    var svgHeight = 450;
    var svg = d3.select("body")
      .append("svg")
      .attr("width", svgWidth)
      .attr("height",svgHeight);
   svg.selectAll("rect")
      .data(dataset)
      .enter()
      .append("rect")
      .attr("x", function(d,i){
          return (i*(svgWidth/dataset.length))+"px";})
      .attr("y", function(d,i){
          return (svgHeight-(d/40))+"px";})
      .attr("height",function(d){return (d/40)+"px";})
      .attr("width", function(d){
          return ((svgWidth/dataset.length)-.1)+"px";})
      .attr("fill", "blue");
  });
});
