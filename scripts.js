
//console.log("hello world");
/* var turnoff ={
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
*/


/* function removeID(){
  var elem = document.getElementById('remove');
  elem.style.display = 'none';
} */

function toggleIDremoval(elems){
    if (elems.style.display === 'none') {
        
        elems.style.display = 'block';
    }else{
       elems.style.display = 'none'; 
    }
}

function Elementals(id, htmlClass) {
    //easier way of hiding classes
    //IF you want to use classes call it with var x = new Elementals(undefined, 'myClasses');
    this.id = id;
    this.class = htmlClass;
    this.remove = function () {
        if (this.class != undefined) {
            elems = document.getElementsByClassName(this.class);
            for( var i = 0; i < elems.length;i++){
                toggleIDremoval(elems[i]);
            }
        }
        else if (this.id != undefined) {
            elems = document.getElementById(this.id);
            
            toggleIDremoval(elems);

        }
        else {
            id = document.getElementById(this.id);
            htmlClass = document.getElementsByClassName(this.class);
            console.log("ID: " + id + " Class: " + htmlClass);
        }

    }
}

var pink = new Elementals('remove');
var blue = new Elementals(undefined, 'blue');

//pink.remove();


