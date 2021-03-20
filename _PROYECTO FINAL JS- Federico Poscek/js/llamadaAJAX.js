let dolarCompra;
let dolarVenta;

const obtainData = async () => {
        const data = await fetch('https://www.dolarsi.com/api/api.php?type=valoresprincipales');
        const dolarData = await data.json();
        
 	    let dolarStringVenta = dolarData[0].casa.venta;
         dolarStringVenta = dolarStringVenta.replace(".","");
         dolarStringVenta = dolarStringVenta.replace(",",".");
        let dolarNumberVenta = parseFloat(dolarStringVenta).toFixed(3);
        // console.log("adentro " + dolarNumberVenta);
        dolarVenta = dolarNumberVenta;

        let dolarStringCompra = dolarData[0].casa.compra;
        dolarStringCompra = dolarStringCompra.replace(".","");
        dolarStringCompra = dolarStringCompra.replace(",",".");
        let dolarNumberCompra = parseFloat(dolarStringCompra).toFixed(3);
        // console.log("adentro " + dolarNumberCompra);
        dolarCompra = dolarNumberCompra;


    }
obtainData()//.then((result) => {dolar = result});
setTimeout(() => console.log("var para usar en global: compra " + dolarCompra), 2000);
setTimeout(() => console.log("var para usar en global: venta " + dolarVenta), 2000);



$("#dolar").ready(mostrar)
function mostrar(){
    $.ajax({
        url: "https://www.dolarsi.com/api/api.php?type=valoresprincipales",
        type: "GET",
        dataType: "json",
    }).done(function(resultadoJson) {
    console.log(resultadoJson);
        
        var dolarHoyCompra = document.createTextNode(" COMPRA: " + " $ " + resultadoJson[0].casa.compra);
        $("#valorCompra").append(dolarHoyCompra).slideDown(5000);
        var dolarHoyVenta = document.createTextNode(", VENTA: " + " $ " + resultadoJson[0].casa.venta);
        $("#valorVenta").append(dolarHoyVenta).slideDown(5000); 
        
    }).fail( function(request, status, error){         
        console.log(request);
        console.log(status);
        console.log(error);
    }) 
}