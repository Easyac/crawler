var select = document.getElementById('lstUnidades');

var unidades = ["1,6", "1,7", "1,8", "1,9", "1,11", "1,12", "1,13", "1,14", "1,16", "1,17", "1,18", "1,20", "1,23", "1,24", "1,25", "1,29", "1,31", "1,32", "1,33", "1,34", "1,38", "1,39", "1,63", "1,64", "1,66", "1,67", "1,68", "1,69", "1,70", "1,71", "1,72", "1,73", "1,74", "1,75", "1,76", "1,77", "1,78", "1,79", "1,80", "1,81", "1,82", "1,83", "1,84", "1,119", "1,966", "1,974", "1,9906", "1,9966", "1,9970"];

unidades.forEach(function(cod){
  select.options.add(new Option(cod,cod));
});