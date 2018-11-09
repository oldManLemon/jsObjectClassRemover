
//console.log("hello world");
var turnoff ={
    class: '',
    id: '',
    function(){
        if (this.class != undefined){
            elems = document.getElementsByClassName(this.class);
            console.log(elems);
        }
        else if(this.id != undefined){
            elems = document.getElementById(this.id);
            console.log(elems);
        }
        else{
            id = document.getElementById(this.id);
            htmlClass = document.getElementsByClassName(this.class);
            console.log("ID: "+ id + " Class: "+ htmlClass);
        }
        
    }
}


function removeID(){
  var elem = document.getElementById('remove');
  elem.style.display = 'none';
}

var 