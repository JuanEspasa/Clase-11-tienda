

var producto=[{
    imagen:"img/heladera.png",
    nombre:"heladera",
    precio:500.99,
    descrip:"heladera 50 pies con freezer no-frost",
    categoria:"Electro"
},{
  imagen:"img/heladera.png",
  nombre:"heladera2",
  precio:502.99,
  descrip:"heladera2 50 pies con freezer no-frost",
  categoria:"Electro"
},{
  imagen:"img/heladera.png",
  nombre:"heladera3",
  precio:503.99,
  descrip:"heladera3 50 pies con freezer no-frost",
  categoria:"Electro"

}]



for (i=0;i<producto.length;i++){

    document.getElementById("product").innerHTML=`

          <div class="col-lg-4 col-md-6 mb-4">
            <div class="card h-100">
              <a href="#"><img class="card-img-top" src="`+producto[i].imagen+`" alt=""></a>
              <div class="card-body">
                <h4 class="card-title">
                  <a href="#">`+producto[i].nombre+`</a>
                </h4>
                <h5>`+producto[i].precio+`</h5>
                <p class="card-text">`+producto[i].descrip+`</p>
              </div>
              <div class="card-footer">
                <small class="text-muted">&#9733; &#9733; &#9733; &#9733; &#9734;</small>
              </div>
            </div>
          </div>
          `
        }