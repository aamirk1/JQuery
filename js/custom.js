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

// jQuery.noConflict();
// jQuery(document).ready(function($){
//     // Mouse Events
//     $("p").click(function(){
//         console.log("Clicked");
//     });

//     $("p").dblclick(function(){
//         console.log("Double Clicked");
//     });

//     $("p").mouseenter(function(){
//         console.log("Mouse Enter");
//     });

//     $("p").mouseleave(function(){
//         console.log("Mouse Leave");
//     });

//     // Keyboard Events
//     $("#name").keypress(function(){
//         console.log("Key Press");
//     });

//     $("#name").keydown(function(){
//         console.log("Key Down");
//     });

//     $("#name").keyup(function(){
//         console.log("Key Up");
//     });

//     // Keyboard Events
//     $("#fname").focus(function(){
//         console.log("Focus Field")
//     });

//     $("#fname").blur(function(){
//         console.log("Blur Field")
//     });

//     $("#form-id").submit(function(e){
//         console.log("Form Submitted");
//         e.preventDefault(); // this method is used to stop auto reload browser
//     });

//     // Window Events
//     $(window).resize(function(){
//         console.log("Windows Resized");
//     });

// });

// part 3

// jQuery.noConflict();
// jQuery(document).ready(function($){
//     // hide image
//     $("#btn-hide").click(function(){
//         $("#img-id").hide(2000,function(){
//             console.log("image is hide")
//         });
//     });

//     // show
//     $("#btn-show").click(function(){
//         $("#img-id").show(5000,function(){
//             console.log("image is show")
//         });
//     });

//     // show/hide = toggle
//     $("#btn-toggle").click(function(){
//         $("#img-id").toggle(3000,function(){
//             console.log("image is hide/show")
//         });
//     });

//     // fadeout image
//     $("#btn-fadeout").click(function(){
//         $("#img-id").fadeOut();
//     });

//     // fadein image
//     $("#btn-fadein").click(function(){
//         $("#img-id").fadeIn(1000);
//     });

//     // fadetoggle image
//     $("#btn-fadetoggle").click(function(){
//         $("#img-id").fadeToggle(3000);
//     });

//     // fadetoggle image
//     $("#btn-fadeto").click(function(){
//         $("#img-id").fadeTo(1000,0.5);  // 1000 is speed of conversion and 0.5 is opecity
//     });

//     // slideUp image
//     $("#btn-slideup").click(function(){
//         $("#img-id").slideUp(2000);
//     });

//     // slideDown image
//     $("#btn-slidedown").click(function(){
//         $("#img-id").slideDown(2000);
//     });

//     // slidetoggle image
//     $("#btn-slidetoggle").click(function(){
//         $("#img-id").slideToggle(3000);
//     });

//     //  animate perform a custom animation of a set of CSS properties
//     $("#btn-animate").click(function(){
//         $("#zom-id").animate({left: "+=90" }, 2000, function(){
//             console.log("animated")
//         });
//     });

// });

// part 4

jQuery.noConflict();
jQuery(document).ready(function($){
    // get text method 1
    // let textd = $("p").text();
    // console.log(textd);

    // get text using button method 2
    // $("#btn-textg").click(function(){
    //     let te = $("h3").text();
    //     console.log(te);
    // });

    // set Text
    // $("#btn-texts").click(function(){
    //     let newtext = "this is jQuery";
    //     $("p").text(newtext);        
    // });

    // Get Html
    let htmld = $("h3").html();
    console.log(htmld);

    // Set Html
    $("#btn-htmls").click(function(){
        let htmltext = "<b>this is span tag</b>";
        $("span").html(htmltext);        
    });

    // Get Value
     var inputvalue = $("#name").val();
     console.log(inputvalue);

    // Set Value using button
    $("#btn-val").click(function(){
        $("#name").val("New  value");
    });

    // Get Attribute value = this method is used to get Attribute value
    var attrval1 = $("link").attr("href");
    console.log(attrval1);

    var attrval2 = $("#name").attr("data-ne");
    console.log(attrval2);

    //set attribute value = this method is used to set Attribute value
    // example 1
    // $("#btn-setattrval").click(function(){
        //     $("#name").attr("data-ne", "25");        
        // });
        
    // example 2
    $("#btn-setattrval").click(function(){
        // get data
        console.log($("#name").attr("data-ne"));
        
        //set data
        $("#name").attr("data-ne", "25");      
        console.log("data set");
        console.log($("#name").attr("data-ne"));
    });
    // example 2

    $("#btn-setimgattrval").click(function(){
        $("#img-id").attr("src", "images/pex.jpg");
    });
});