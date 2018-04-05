document.addEventListener("DOMContentLoaded", enableAutoplay) {
    
    var play = document.getElementById("contactVideo");
    
    function enableAutoplay() {
        play.autoplay = true;
        play.load();
    }
    
}

document.getElementById("shoppingCart").addEventListener("change", estimateTotal);


function estimateTotal() {
    
    
    var itemCupcake = parseInt(document.getElementById("cupcakes").value, 10 || 0,
        itemPie = parseInt(document.getElementById("pies").value, 10 || 0,
        itemCake = parseInt(document.getElementById("cakes").value, 10 || 0,
        itemBread = parseInt(document.getElementById("breads").value, 10 || 0,
        itemPastry = parseInt(document.getElementById("pastries").value, 10 || 0,
        itemMacaroon = parseInt(document.getElementById("macaroons").value, 10 || 0;
                           
    var totalCost = (3 * itemCupcake) + (8 * itemPie) + (18 * itemCake) + (6 * itemBread) + (4 * itemPastry) + (1.5 * itemMacaroon);
        estimate = "$" + totalCost.toFixed(2);
                             
    var display = document.querySelector('#orderTotal');
        estimate(display);
};
                             
}