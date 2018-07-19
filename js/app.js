$(document).ready(function(){
  var score = 0
  var randomVerbIndex = getRandomInt(irregulars.length);

  $(".title").append(`
      <h1>${irregulars[randomVerbIndex][3]}</h1>
  `)
  $(".infinitif").append(`
    <input type="text" class="border" name="Infinitif" value="${irregulars[randomVerbIndex][0]}">
  `)
  $(".preterit").append(`
    <input type="text" class="border preterit" name="Prétérit" placeholder="Prétérit" value="">
  `)
  $(".p-passe").append(`
    <input type="text" class="border p-passe" name="Participe Passé" placeholder="Participe Passé" value="">
  `)
  var btn = "check";

  $("#check").click(function(){
    if (btn == "check") {
      if ($("input.preterit").val() == irregulars[randomVerbIndex][1]) {
        $("input.preterit").addClass("border border-success");
        score += 1;

      } else {
        $("input.preterit").addClass("border border-danger");
      }

      if ($("input.p-passe").val() == irregulars[randomVerbIndex][2]) {
        $("input.p-passe").addClass("border-success");
        score += 1;

      } else {
        $("input.p-passe").addClass("border-danger");
      }

      $("input.preterit").val(irregulars[randomVerbIndex][1]);
      $("input.p-passe").val(irregulars[randomVerbIndex][2]);


      $(".score").html(score);
      $(this).html("Recommencer");
      btn = "retry";
    } else {
      randomVerbIndex = getRandomInt(irregulars.length);
      $(".title").html(`
        <h1>${irregulars[randomVerbIndex][3]}</h1>
      `)
      $(".infinitif").html(`
        <input type="text" class="border" name="Infinitif" value="${irregulars[randomVerbIndex][0]}">
      `)
      $(".preterit").html(`
        <input type="text" class="border preterit" name="Prétérit" placeholder="Prétérit" value="">
      `)
      $(".p-passe").html(`
        <input type="text" class="border p-passe" name="Participe Passé" placeholder="Participe Passé" value="">
      `)
      $(this).html("Valider");
      btn = "check";
    }
  });


  function getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
  }
})
