var pizza_array = ["Veg Extravaganza", "Indi Tandoori Paneer", "Non-Veg Supreme", "Chicken Fiesta", "Chicken Dominator"];

document.getElementById("piz1").style.display= "inline-block";
    document.getElementById("piz2").style.display= "inline-block";
    document.getElementById("piz3").style.display= "inline-block";
    document.getElementById("piz4").style.display= "inline-block";
    document.getElementById("piz5").style.display= "inline-block";
    document.getElementById("menu_list").style.display= "none";
    document.getElementById("hide_list").style.display= "inline-block";

function hide_menu() {
    document.getElementById("piz1").style.display= "none";
    document.getElementById("piz2").style.display= "none";
    document.getElementById("piz3").style.display= "none";
    document.getElementById("piz4").style.display= "none";
    document.getElementById("piz5").style.display= "none";
    document.getElementById("menu_list").style.display= "inline-block";
    document.getElementById("hide_list").style.display= "none";
} 


function getmenu(){
    var htmldata;
    htmldata="<ol class='menulist'>"
    pizza_array.sort();
    for(var i=0;i<pizza_array.length;i++){
        htmldata=htmldata+'<li>' + pizza_array[i] + '</li>'
    }

    htmldata=htmldata+"</ol>"
    document.getElementById("display_menu").innerHTML=htmldata;

    
}

function add_item() {
    var pizzaval;
    var item = document.getElementById("add_item").value;
    pizza_array.push(item);
    pizza_array.sort();
    pizzaval = "<section class='cards'>";
    for(var i=0;i<pizza_array.length;i++) {

        
        pizzaval=pizzaval+'<div class="card">' + '<img src="pizzalmg.png">' + pizza_array[i] + '</div>'
    }
    pizzaval=pizzaval+"</section>"
    document.getElementById("display_addedmenu").innerHTML = pizzaval;
    
    
}

