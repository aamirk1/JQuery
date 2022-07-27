// jQuery("button").click(function(){
//     console.log("button click")
// });

// $("button").click(function(){   //here $ means jQuery
//     console.log("button click")
// });

// jQuery(document).ready(function(){  //this is ready function and is used to first load document then run function not before
//     jQuery("button").click(function(){
//     console.log("button click")
//     });
// });

//both are same line 9 and 17

// $(document).ready(function(){  //this is ready function and is used to first load document then run function not before
//     $("button").click(function(){
//     console.log("button click")
//     });
// });

// jQuery.noConflict();
// jQuery(document).ready(function($){
//     $("button").click(function(){
//     console.log("button click")
//     });
// });

// part 1

// jQuery.noConflict();
// jQuery(document).ready(function($){
//     $("p").click(function(){        
//         alert("element selector")
//     });  
    
//     $("#btn-id").click(function(){
//         alert("ID Selector");
//     });

//     $(".btn-class").click(function(){
//         alert("Class Selector")
//     });
// });

// part 2

jQuery.noConflict();
jQuery(document).ready(function($){
    // Mouse Events
    $("p").click(function(){
        console.log("Clicked");
    });

    $("p").dblclick(function(){
        console.log("Double Clicked");
    });

    $("p").mouseenter(function(){
        console.log("Mouse Enter");
    });

    $("p").mouseleave(function(){
        console.log("Mouse Leave");
    });

    // Keyboard Events
    $("#name").keypress(function(){
        console.log("Key Press");
    });

    $("#name").keydown(function(){
        console.log("Key Down");
    });

    $("#name").keyup(function(){
        console.log("Key Up");
    });
});