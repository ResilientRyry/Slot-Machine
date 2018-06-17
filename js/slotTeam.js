// input amount of money starting with
// input amount of money betting with
// start button to begin game
// game images(10images per section) move at random
// user presses 3 buttons one for each section to stop

//3 event listeners
// images stop
// determine if they have a match or not
// display the results



$(document).ready(function(){

  var slots = ["images/apple.png","images/banana.png","images/grapefruit.png","images/kiwi.png","images/paprika.png","images/peach.png","images/raspberry.png","images/strawberry.png","images/tomato.png","images/watermelon.png"];
  var slotOne = $("#slot1");
  var slotTwo = $("#slot2");
  var slotThree = $("#slot3");
  var interval1;
  var interval2;
  var interval3;
  var cash = parseFloat($('#bc').val())
  var currentBet = 0;

  function rotate1(){
    var randomImage = slots[Math.floor(Math.random() * slots.length)];
    $("#slot1").attr('src', randomImage);
    console.log(randomImage);
  }
  function rotate2(){
    var randomImage2 = slots[Math.floor(Math.random() * slots.length)];
    $("#slot2").attr('src', randomImage2);
    console.log(randomImage2);
  }
  function rotate3(){
    var randomImage3 = slots[Math.floor(Math.random() * slots.length)];
    $("#slot3").attr('src', randomImage3);
    console.log(randomImage3);
  }
  function beginRotation1(){
    interval1 = setInterval(rotate1,150);
  }
  function beginRotation2(){
    interval2 = setInterval(rotate2,150);
  }
  function beginRotation3(){
    interval3 = setInterval(rotate3,150);
  }
  function hideStart(){
    $("#start").css("display", "none")
  }
  function showStart(){
    $("#start").css("display", "inline")
  }
  function hideSay(){
    $('#say').css('display', 'none')
  }
  function showSay(){
    $('#say').css('display', 'block')
  }

    $('#beginButton').on('click', function(){
      var enteredVal = parseFloat($('#bc').val())
        $('.beginButton').text(enteredVal)
    })



  $("#start").on("click",function(){
    beginRotation1()
    beginRotation2()
    beginRotation3()
    hideStart()
    hideSay()
  })


  function stopRotation1() {
    clearInterval(interval1);
  }
  function stopRotation2() {
    clearInterval(interval2);
  }
  function stopRotation3() {
    clearInterval(interval3);
    showStart()
    showSay()
  }

  $("#stop1").on("click",function(){
    stopRotation1()
    console.log(stopRotation1())

  })

  $("#stop2").on("click",function(){
    stopRotation2()
    console.log(stopRotation2())
  })

  $("#stop3").on("click",function(){
    stopRotation3()
    console.log(stopRotation3())
    if ('#stop1' === '#stop2' && '#stop3'){
      $('#say').text('Winner Winner Winner!!!');
    }else{
      $('#say').text('Loser Loser Loser!!!');
    }

  })
});
//event listener to increase bet
  $('#increase').on('click', function(){
      currentBet += 5;
      if (currentBet > totalSum){
        currentBet = totalSum;
      }
      $('#currentBet').text(currentBet);
  });

  //event listener to decrease bet
  $('#decrease').on('click', function(){
    currentBet -= 5;
    if (currentBet < 0){
      currentBet = 0;
    }
    $('#currentBet').text(currentBet);
  });

});
