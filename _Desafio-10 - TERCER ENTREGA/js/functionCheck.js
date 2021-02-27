function checkCotizacion() {
    // Get the checkbox
    var checkBox = document.getElementById("textoCheck");
    // Get the output text
    var text = document.getElementById("text");
  
    // If the checkbox is checked, display the output text
    if (checkBox.checked == true){
      text.style.display = "block";
    } else {
      text.style.display = "none";
    }
}


$("#dolar").ready(mostrar)
function mostrar(){
    $.ajax({
        url: "https://www.dolarsi.com/api/api.php?type=valoresprincipales",
        type: "GET",
        dataType: "json"
    }).done( function(resultadoJson) {
    console.log(resultadoJson);
        var dolarHoyCompra = document.createTextNode("COMPRA: " + " $ " + resultadoJson[0].casa.compra);
        $("#valorCompra").append(dolarHoyCompra).slideDown(5000);
        var dolarHoyVenta = document.createTextNode("VENTA: " + " $ " + resultadoJson[0].casa.venta);
        $("#valorVenta").append(dolarHoyVenta); 
    }).fail( function(xhr, status, error){         
        console.log(xhr);
        console.log(status);
        console.log(error);
    }) 
             

}
