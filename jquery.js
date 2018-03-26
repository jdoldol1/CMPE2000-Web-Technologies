//these are my jQuery notes

//jQuery method may be sourced from a different file
//jQuery Syntadx $(selector).action()
//jQuery Selector $() examples
// $("p") - selects all <p> elements
// $("#test") - selects all element with ID value = "test"
// $(".class") - selects all elements with specific class

//Actions can fail if methods are exceuted
//before the document is fuller loaded
//document ready event
$(document).ready(function{

  //jQuery methods go here
  //jQuery Events
  $("p.intro").click(function(){
    //action goes here
  });

  //double click event
  $("p.intro").dblclick(function(){
    //action goes here
  });

  $("p.intro").mouseenter(function(){
    //action goes here
  });

  $("p.intro").mouseleave(function(){
    //action goes here
  });

  $("p.intro").mousedown(function(){
    //action goes here
  });

  $("p.intro").mouseup(function(){
    //action goes here
  });

  $("p.intro").hover(function(){
    //action goes here
  });

  $("p.intro").focus(function(){
    //action goes here
  });

  $("p.intro").blur(function(){
    //action goes here
  });

  //jQuery Hide and Show functions
  //Syntax:
  // $(selector).hide(speed, callback fn);
  // $(selector).show(speed, callback fn);
  // speed can take values "slow", "fast", or milliseconds
  //the optional callback function with execute when animation is complete

      //jQuery toggle()
      //allows you to toggle between hiding and showing an HTML element
      // $(selector).toggle(speed,callback);
      // speed can take values "slow", "fast", or milliseconds

  //jQuery Fading effects
  // fadeIn()
    // $(selector).fadeIn(speed, callback fn);
  //fadeOut()
    // $(selector).fadeOut(speed, callback fn);
  //fadeToggle()
    // $(selector).fadeToggle(speed, callback fn);
  //fadeTo() - allows fading to a opacity(between 0 and 1)
    // $(selector).fadeIn(speed, opacity , callback fn);

  //jQuery Sliding
  //slideDown()
    // $(selector).slideDown(speed, callback fn);
  //slideUp()
    // $(selector).slideUp(speed, callback fn);
  //slideToggle()
    // $(selector).slideToggle(speed, callback fn);




});
