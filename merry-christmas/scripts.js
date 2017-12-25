$(function(){
    $("#sayMerry").on({
        mouseover:function(){
            $(this).css({
                left:(Math.random()*200)+"px",
                top:(Math.random()*200)+"px",
            });

            $('#sayHappy').removeClass('transparent');


            function show_one (){
                $('#one').removeClass('transparent');
            };
            window.setTimeout( show_one, 2000 ); // 5 seconds
            
            function show_two (){
                $('#two').removeClass('transparent');
            };
            window.setTimeout( show_two, 4000 ); // 5 seconds

            function show_three (){
                $('#three').removeClass('transparent');
            };
            window.setTimeout( show_three, 5000 ); // 5 seconds
        }
    });
});

$(function(){
    $("#sayMerry").on({
        onTap:function(){
            $(this).css({
                left:(Math.random()*200)+"px",
                top:(Math.random()*200)+"px",
            });

            $('#sayHappy').removeClass('transparent')
        }
    });
});

var stuff = ['Make America Great Again, quick!!', 'Oh no!', 'Do not let the terrorists win!', 'End the War on Christmas!', 'We need to stop being Politically CORRECT!'];

$(function () { // this is a shortcut for document ready
    counter = 0;
    // the next line, of course, assumes you have an element with id="next"
    $('#sayHappy').click(function () {
        counter = (counter + 1) % stuff.length; // increment your counter
        // the modulus (%) operator resets the counter to 0
        // when it reaches the length of the array
        $('#text').text(stuff[counter]);
    });
});

$(function () { // this is a shortcut for document ready
    counter = 0;
    $('#sayMerry').click(function () {
    	counter = (counter + 1) % stuff.length;
        $('#text').text('Thanks, President Trump, for letting us say Merry Christmas again!');
        $('#one').addClass('transparent');
        $('#two').addClass('transparent');
        $('#three').addClass('transparent');
        $('#sayHappy').addClass('transparent');
        if (screen.width < 700) {
            $('#text').text(stuff[counter]);
            $('#one').removeClass('transparent');
            $('#two').removeClass('transparent');
            $('#three').removeClass('transparent');
            $('#sayHappy').removeClass('transparent');
        }
    });


});



/* the random stuff */


$(document).ready(function(){
    animateDiv();
    
});

function makeNewPosition(){
    
    // Get viewport dimensions (remove the dimension of the div)
    var h = $(window).height() - 50;
    var w = $(window).width() - 50;
    
    var nh = Math.floor(Math.random() * h);
    var nw = Math.floor(Math.random() * w);
    
    return [nh,nw];    
    
}

function animateDiv(){
    var newq = makeNewPosition();
    var oldq = $('#one').offset();
    var speed = calcSpeed([oldq.top, oldq.left], newq);
    
    $('#one').animate({ top: newq[0], left: newq[1] }, speed, function(){
      animateDiv();        
    });
    
};

function calcSpeed(prev, next) {
    
    var x = Math.abs(prev[1] - next[1]);
    var y = Math.abs(prev[0] - next[0]);
    
    var greatest = x > y ? x : y;
    
    var speedModifier = 0.1;

    var speed = Math.ceil(greatest/speedModifier);

    return speed;

};

$(document).ready(function(){
    animateDivTwo();
    
});

function makeNewPositionTwo(){
    
    // Get viewport dimensions (remove the dimension of the div)
    var h = $(window).height() - 50;
    var w = $(window).width() - 50;
    
    var nh = Math.floor(Math.random() * h);
    var nw = Math.floor(Math.random() * w);
    
    return [nh,nw];    
    
}

function animateDivTwo(){
    var newq = makeNewPositionTwo();
    var oldq = $('#two').offset();
    var speed = calcSpeedTwo([oldq.top, oldq.left], newq);
    
    $('#two').animate({ top: newq[0], left: newq[1] }, speed, function(){
      animateDivTwo();        
    });
    
};

function calcSpeedTwo(prev, next) {
    
    var x = Math.abs(prev[1] - next[1]);
    var y = Math.abs(prev[0] - next[0]);
    
    var greatest = x > y ? x : y;
    
    var speedModifier = 0.1;

    var speed = Math.ceil(greatest/speedModifier);

    return speed;

};


$(document).ready(function(){
    animateDivThree();
    
});

function makeNewPositionThree(){
    
    // Get viewport dimensions (remove the dimension of the div)
    var h = $(window).height() - 50;
    var w = $(window).width() - 50;
    
    var nh = Math.floor(Math.random() * h);
    var nw = Math.floor(Math.random() * w);
    
    return [nh,nw];    
    
}

function animateDivThree(){
    var newq = makeNewPositionThree();
    var oldq = $('#three').offset();
    var speed = calcSpeedThree([oldq.top, oldq.left], newq);
    
    $('#three').animate({ top: newq[0], left: newq[1] }, speed, function(){
      animateDivThree();        
    });
    
};

function calcSpeedThree(prev, next) {
    
    var x = Math.abs(prev[1] - next[1]);
    var y = Math.abs(prev[0] - next[0]);
    
    var greatest = x > y ? x : y;
    
    var speedModifier = 0.1;

    var speed = Math.ceil(greatest/speedModifier);

    return speed;

};