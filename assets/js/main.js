//Adding click listener to li to strike through and turn grey when checked off. Easiest way to do this is to just create a class with the attributes, and use toggle class on click.

//when creating new LI's, you can't use the li selector with on because it only works on elements that were already created when the page loaded. So, you select the UL, and pass an LI as the second argument.
$("ul").on("click", "li", function(){
  $(this).toggleClass("completed")
});

$("ul").on("click","span",function(event){
  //this gives us the parent element, as a jquery element,which then allows us to delete the entire li
  $(this).parent().fadeOut(500,function(){
    $(this).remove()
  });
  event.stopPropagation();
})

//adding a new item to the todo list by hitting enter.

$("input").keypress(function(event){
  //check if character code is 13, which is enter key.
  if(event.which === 13){
    //grabbing new todo text from input
  var todoText = $(this).val();
  //this clears the input text back to blank after keypress
  $(this).val("");
  //appending the new todo to the ul.
  $("ul").append("<li><span><i class='fa fa-trash'></i></span> " + todoText + "</li>")
  }
});

//creating a click event that shows / hides the input box.

$(".fa-plus").click(function(){
  $("input").fadeToggle(600)
})
