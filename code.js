var box = document.getElementById("outputBox");
box.addText = function(text,endline){this.value+=text;if(endline){this.value+="\n";}};

function enter(text){
  box.addText(text, true);
}

function Handle(e, text){
  if(e.keyCode=13){
    e.preventDefault();
    
    enter(text);
  }
  return false;
}
