function Tool(args){
  this.type = args.type;
  this.color = args.color;
}

var updateQueue = [];

var selectedTool;

var toolData = [{
  type: 'grassland',
  color: '#99FF33'},
  {type: 'desert',
  color: '#DBB84D'},
  {type: 'tundra',
  color: '#B8E6E6'},
  {type: 'forest',
  color: '#006600'},
  {type: 'mountain',
  color: '#999999'},
  {type: 'ocean',
  color: '#0000FF'}]

function loadTools(){
   return toolData.map(function(args){
      return new Tool(args);
   })
}

function currentTool(allTools) {
  $("#toolbar").on('click', 'div', function(){
    console.log(this.id)
    for(i=0; i < allTools.length; i++){
      if (allTools[i].type == this.id)
        selectedTool = allTools[i]
    }
  });
}

$(function () {
  var allTools = loadTools();
  $.each(allTools, function(){
    $('#toolbar').append("<div id='"+ this.type + "'data-color='" + this.color + "' style='width: 10px; background-color: " + this.color +";'></div>");
  });
  currentTool(allTools);
  $('svg').on('click','path', function(event){
    $(this).attr("fill", selectedTool.color)
    $(this).attr("terrain", selectedTool.type);
    console.log($(this).attr("tile_id"))
    updateQueue.push({id: $(this).attr("tile_id"), terrain: $(this).attr("terrain")})
    console.log(updateQueue)
  });
});
