var dataUrl = "https://raw.githubusercontent.com/FreeCodeCamp/ProjectReferenceData/master/GDP-data.json";
var data;
function getDate(dString){
  var info = dString.split("-");
  var display ="";
  switch(info[1]){
    case "01":
      display+="Jan. ";
      break;
    case "02":
      display+="Feb. ";
      break;
    case "03":
      display+="Mar. ";
      break;
    case "04":
      display+="Apr. ";
      break;
    case "05":
      display+="May ";
      break;
    case "06":
      display+="Jun. ";
      break;
    case "07":
      display+="Jul. ";
      break;
    case "08":
      display+="Aug. ";
      break;
    case "09":
      display+="Sep. ";
      break;
    case "10":
      display+="Oct. ";
      break;
    case "11":
      display+="Nov. ";
      break;
    case "12":
      display+="Dec. ";
      break;
  }
  display += info[0];
  return display;
}

$(document).ready(function(){
  $.get(dataUrl, function(data){
    data = JSON.parse(data);
    var dataset = data.data.map(function(a){
      return a;
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
          return (svgHeight-(d[1]/42))+"px";})
      .attr("height",function(d){return (d[1]/42)+"px";})
      .attr("width", function(d){
          return ((svgWidth/dataset.length)-.1)+"px";})
      .attr("fill", "blue")
      .on("mouseover",function(d,i){return tooltip
        .style("top",(svgHeight-(d[1]/42)+50)+"px")
        .style("left", (i*(svgWidth/dataset.length)-40)+"px")
        .text(getDate(d[0])+":\n"+d[1])
        .classed("hide",false);})
   .on("mouseout",function(){
     return tooltip.classed("hide",true);
   });
    
    var tooltip = d3.select("body")
      .append("div")
      .classed("tip", true)
      .classed("hide",true);
  });
});
