$(document).ready(function(){
  var score = 0
  var randomVerbIndex = getRandomInt(irregulars.length);

  $(".content").append(`
    <div class="col-12">
      <h1>${irregulars[randomVerbIndex][3]}</h1>
    </div>
    <div class="col-3">
      <label for="">Infinitif</label>
      <input type="text" class="" name="Infinitif" value="${irregulars[randomVerbIndex][0]}">
    </div>
    <div class="col-3">
      <label for="Prétérit">Prétérit</label>
      <input type="text" class="preterit" name="Prétérit" placeholder="Prétérit" value="">
    </div>
    <div class="col-3">
      <label for="">Participe Passé</label>
      <input type="text" class="p-passe" name="Participe Passé" placeholder="Participe Passé" value="">
    </div>

    <div class="col-12">
      <p>Score</p>
      <p class="score">${score}</p>
    </div>
  `)
  $("#check").click(function(){
    if ($("input.preterit").val() == irregulars[randomVerbIndex][1]) {
      console.log("super");
      score += 1;

    } else {
      console.log("perdu");
    }

    if ($("input.p-passe").val() == irregulars[randomVerbIndex][2]) {
      console.log("super");
      score += 1;

    } else {
      console.log("perdu");
    }
    $(".score").html(score);

    randomVerbIndex = getRandomInt(irregulars.length);

    $(".content").html(`
      <div class="col-12">
        <h1>${irregulars[randomVerbIndex][3]}</h1>
      </div>
      <div class="col-3">
        <label for="">Infinitif</label>
        <input type="text" class="" name="Infinitif" value="${irregulars[randomVerbIndex][0]}">
      </div>
      <div class="col-3">
        <label for="Prétérit">Prétérit</label>
        <input type="text" class="preterit" name="Prétérit" placeholder="Prétérit" value="">
      </div>
      <div class="col-3">
        <label for="">Participe Passé</label>
        <input type="text" class="p-passe" name="Participe Passé" placeholder="Participe Passé" value="">
      </div>
      <div class="col-12">
        <p>Score</p>
        <p class="score">${score}</p>
      </div>
    `)

  })





  function getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
  }
})
