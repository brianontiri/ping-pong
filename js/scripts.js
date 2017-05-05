var number = function(ontiri) {
  for (var i = 1; i <= ontiri; i++) {
    if (i % 5 === 0 && i % 3 === 0) {
      $("ul#output").append("<li class = 'toa'> pingpong</li>")
    } else if (i % 3 === 0) {
      $("ul#output").append("<li class = 'toa'> ping</li>")
    } else if (i % 5 === 0) {
      $("ul#output").append("<li class = 'toa'> pong</li>")
    } else {
      $("ul#output").append("<li class = 'toa'>" + String(i) + "</li>")
    }
  }
}

$(document).ready(function() {
  $("form#yo").submit(function(event) {
    event.preventDefault();
    $("li.toa").remove();
    var input = parseInt($("input#aye").val())
    number(input)
  })
})
