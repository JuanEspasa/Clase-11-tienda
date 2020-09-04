

var producto=[{
    imagen:"img/heladera.png",
    nombre:"heladera1",
    precio:111.99,
    descrip:"heladera1 11 pies con freezer no-frost",
    categoria:"Electro"
},{
  imagen:"img/heladera.png",
  nombre:"heladera2",
  precio:222.99,
  descrip:"heladera2 22 pies con freezer no-frost",
  categoria:"Electro"
},{
  imagen:"img/heladera.png",
  nombre:"heladera3",
  precio:333.99,
  descrip:"heladera3 33 pies con freezer no-frost",
  categoria:"Electro"
},{
  imagen:"img/heladera.png",
  nombre:"heladera4",
  precio:444.99,
  descrip:"heladera4 44 pies con freezer no-frost",
  categoria:"Electro"
},{
  imagen:"img/heladera.png",
  nombre:"heladera5",
  precio:555.99,
  descrip:"heladera5 55 pies con freezer no-frost",
  categoria:"Electro"
},{
  imagen:"img/heladera.png",
  nombre:"heladera6",
  precio:666.99,
  descrip:"heladera6 66 pies con freezer no-frost",
  categoria:"Electro"
}]


// defino la variable que lleva el monto total de carrito de comprar
var sumacarro = 0;

for (i=0;i<producto.length;i++){
    var listado = document.getElementById("product");
    var codigo = document.createElement("div");
    //var objeto={"nombre":producto[i].nombre,"precio":producto[i].precio};
    codigo.innerHTML =`
          
            <div class="card h-100">
              <a href="#"><img class="card-img-top" src="`+producto[i].imagen+`" alt=""></a>
              <div class="card-body">
                <h4 class="card-title">
                  <a href="#">`+producto[i].nombre+`</a>
                </h4>
                <h5>`+producto[i].precio+`</h5>
                <p class="card-text">`+producto[i].descrip+`</p>
              </div>
              <button class="links" onclick="agregar(producto[`+i+`])">Comprar</button>
              <div class="card-footer">
                <small class="text-muted">&#9733; &#9733; &#9733; &#9733; &#9734;</small>
              </div>
            </div>
          
          `;

//\'' + result.name + '\'



    listado.appendChild(codigo);
    codigo.className = "col-lg-4 col-md-6 mb-4";

}
    
function agregar(producto){
  alert(producto);
  sumacarro +=producto.precio;
  alert("se agrego: "+producto.nombre+" precio: "+producto.precio+" la suma del carro es: "+sumacarro);
}