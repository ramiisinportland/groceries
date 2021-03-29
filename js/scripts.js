$(document).ready(function(){
  $("form").submit(function(event){
    event.preventDefault();
    let first = $("input#first").val();
    let second = $("input#second").val();
    let third = $("input#third").val();
    let arrayThings = [first, second, third];
    
    let sortedArray = [];

      arrayThings.forEach(function(item){
      sortedArray.push(item.toUpperCase())
    })

    $("#first-item").text(sortedArray[0]);
    $("#second-item").text(sortedArray[1]);
    $("#third-item").text(sortedArray[2]);

    // arrayThings.forEach(function(arrayThings, thing){

    // });
  console.log(sortedArray);

    $("#result").show();
  });
});