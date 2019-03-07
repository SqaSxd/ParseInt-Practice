var varUserInputOne;
var varUserInputTwo;
var varUserInputThree;

$(".Submit").click(function(){
  varUserInputOne=$(".userInputOne").val();
  varUserInputTwo=$(".userInputTwo").val();
  varUserInputThree=$(".userInputThree").val();
  $(".answer").html("Hi, "+varUserInputOne+" The sum of your favrite numbers is "+varUserInputTwo+varUserInputThree);
  
  //(parseInt(varUserInputTwo)+parseInt(varUserInputThree))
  
  console.log(varUserInputOne);
  console.log(varUserInputTwo);
  console.log(varUserInputThree);

});


