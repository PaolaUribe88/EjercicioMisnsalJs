let mostrarPagina = ()=>{
    //CREAMOS EL HEADER 1
    let elHeader = document.createElement('header');
    elHeader.setAttribute('class', 'text-danger text-center elHeader');
   
    //CREAMOS UN PARRAFO DINAMICO 2
    let parrafoHeader = document.createElement ('p');
    parrafoHeader.innerHTML='Soy el Navegador';
    

    //ASOCIAMOS/ANIDAMOS/AÑADIMOS/anexamos el parrafoHeader a elHeader
    elHeader.appendChild(parrafoHeader);

    //CREAMOS UN CONTENEDOR VACIO 3
    let contenedorVacioHtml = document.getElementById('contenedorCompleto');

    //ASOCIAMOS/ANIDAMOS/AÑADIMOS/anexamos el contenedorVacioHtml a elHeader
    contenedorVacioHtml.appendChild(elHeader);

    //CREAMOS EL MAIN 4 CON SET ATRIBUTE
    let elMain = document.createElement('main');
    elMain.setAttribute('class', 'container','text-primary bg-warning');

    //CREAMOS LA VARIABLE DE UNA FILA 5
    let FilaMain = document.createElement('div');
    FilaMain.setAttribute('class','row bg-danger p-1');

    //------------COLUMNA IZQUIERDA---------------------------------------------6
    //CREAMOS UNA VARIABLE PARA LA COLUMNA IZQUIERDA MAIN
    let columnaIzquierdaMain = document.createElement('section');
    columnaIzquierdaMain.setAttribute('class', 'text-warning col-md-8');
    
    
    //CREAMOS LA VARIABLE PARA EL PARRAFO DE LA COLUMNA IZQUIERDA main 7
    let parrafoIzquierdoMain = document.createElement('p');
    parrafoIzquierdoMain.innerHTML= 'Parrafo Izquierdo';

    //ASOCIAMOS/ columnaIzquierdaMain a parrafoIzquierdoMain
    columnaIzquierdaMain.appendChild(parrafoIzquierdoMain);

    //------------COLUMNA DERECHA-----------------------------------------------
    //CREAMOS UNA VARIABLE PARA LA COLUMNA DERECHA 8
    let columnaDerechaMain = document.createElement('article');
    columnaDerechaMain.setAttribute('class','col-md-4');
    
    //CREAMOS LA VARIABLE PARA EL PARRAFO DE LA COLUMNA DERECHA 9
    let parrafoDerechoMain = document.createElement('p');
    parrafoDerechoMain.innerHTML = 'Parrafo derecho';

    //ASOCIAMOS/ columnaDerechaMain a parrafoDerechoMain
    columnaDerechaMain.appendChild(parrafoDerechoMain);
    //-----------FIN COLUMNA DERECHA---------------------------

    //ASOCIAMOS---------------------------------------------------------
    //ASOCIAMOS/ FilaMain a columnaIzquierdaMain
    FilaMain.appendChild(columnaIzquierdaMain);

    //ASOCIAMOS/ FilaMain a columnaDerechaMain
    FilaMain.appendChild(columnaDerechaMain);

    //ASOCIAMOS/ FilaMain con el contenedor padre de la clase container
    elMain.appendChild(FilaMain);

    // asociamos/anidamos/añadimos/anexamos elMain al contenedor vacio del HTML
    contenedorVacioHtml.appendChild(elMain);
    // --------------------------------------------------------FIN ASOCIACION

    //CREAMOS PRIMERFILA IZQUIERDA DEL CONTENIDO-----------------------------------------10
    let primerFilaIzqContenido = document.createElement('div');
    primerFilaIzqContenido.setAttribute('class', 'row');

    //CREAMOS LA COLUMNA DE columnaPrimerFilaIzqContenido 11
    let columnaPrimerFilaIzqContenido = document.createElement('div');
    columnaPrimerFilaIzqContenido.setAttribute ('class','col-md-12');

    //CREAMOS LA ETIQUETA IMG DEL Fila DE LA PRIMERA IZQUIERDA Fila 12
    let imagenColumnaPrimerFilaIzqContenido= document.createElement('img');
    imagenColumnaPrimerFilaIzqContenido.setAttribute('src','assets/img/vacunate.png');
    imagenColumnaPrimerFilaIzqContenido.setAttribute('alt','Vacunate');

    //CREAMOS LA ETIQUETA IMG DEL Fila DE LA PRIMERA IZQUIERDA Fila 12.1
    let imagenColumnaPrimerFilaIzqContenidoDos= document.createElement('img');
    imagenColumnaPrimerFilaIzqContenidoDos.setAttribute('src','assets/img/puntos.png');
    imagenColumnaPrimerFilaIzqContenidoDos.setAttribute('alt','Puntos');

    //ASOCIAMOS LA IMAGEN A LA COLUMNApRIMERAIZQUIERDAFila
    columnaPrimerFilaIzqContenido.appendChild(imagenColumnaPrimerFilaIzqContenido);
    columnaPrimerFilaIzqContenido.appendChild(imagenColumnaPrimerFilaIzqContenidoDos);

    //ASOCIAMOS COLUMNApRIMERAIZQUIERDAFila con IMAGEN A LA fila
    primerFilaIzqContenido.appendChild(columnaPrimerFilaIzqContenido);
   
    columnaIzquierdaMain.appendChild(primerFilaIzqContenido);


    //CREAMOS LA SEGUNDA FILA IZQUIERDA MAIN________________________________________________________________13
    let segundoFilaIzqContenido= document.createElement('div');
    segundoFilaIzqContenido.setAttribute('class', 'row');

    //CREAMOS EL CONTENEDOR PARA LA SEGUNDAFILA segundoFilaIzqContenido 14
    let contenedorSegundaFilaIzq= document.createElement('div');
    contenedorSegundaFilaIzq.setAttribute('class','container');

    //CREAMOS LA FILA SUP DEL CONTENEDOR 15
    let filaSupContenedorSegundaFilaIzq= document.createElement('div');
    filaSupContenedorSegundaFilaIzq.setAttribute('class', 'row');

    //CREAMOS LA COLUMNADE LA FILA SUPERIOR QUE TENDRA LA IMAGEN 16
    let columnaFilaSupContenedorSegundaFilaIzq= document.createElement('div');
    columnaFilaSupContenedorSegundaFilaIzq.setAttribute('class','col-md-12');

    // CREAMOS EL PARRAFO ULTIMAS NOTICIAS QUE VA ARRIBA DE LA IMAGEN DE LAS NOTICIAS 17
    let parrafoColumnaFilaSupcontenedorSegundaFilaIzq= document.createElement('p');
    parrafoColumnaFilaSupcontenedorSegundaFilaIzq.innerHTML = 'Últimas Noticias';
    parrafoColumnaFilaSupcontenedorSegundaFilaIzq.style.color='rgb(66, 64, 64)';
    
    // CREAMOS LA IMAGEN QUE CONTIENE LA IMAGEN DE LA NOTICIA 18
    let imgColumnaFilaSupcontenedorSegundaFilaIzq= document.createElement('img');
    imgColumnaFilaSupcontenedorSegundaFilaIzq.setAttribute('src','assets/img/campañarefuerzo.jpg');
    imgColumnaFilaSupcontenedorSegundaFilaIzq.setAttribute('alt', 'Portada');

    //ASOCIAMOS columnaFilaSupcontenedorSegundaFilaIzqcon parrafoColumnaFilaSupcontenedorSegundaFilaIzqDE LA COLUMNA
    columnaFilaSupContenedorSegundaFilaIzq.appendChild(parrafoColumnaFilaSupcontenedorSegundaFilaIzq);

    // asociamos/anidamos/añadimos/anexamos la imagen con  la columna correspondiente
    columnaFilaSupContenedorSegundaFilaIzq.appendChild(imgColumnaFilaSupcontenedorSegundaFilaIzq);

    // asociamos/anidamos/añadimos/anexamos la columna a la fila correspondiente
    filaSupContenedorSegundaFilaIzq.appendChild(columnaFilaSupContenedorSegundaFilaIzq);

    // asociamos/anidamos/añadimos/anexamos la fila al contenedor correspondiente
    contenedorSegundaFilaIzq.appendChild(filaSupContenedorSegundaFilaIzq);
//______________________________________________________________________________________________________________________________________
   //CREAMOS LA FILA INFERIOR DEL CONTENEDOR 19
   let filaInfcontenedorSegundaFilaIzq = document.createElement('div');
   filaInfcontenedorSegundaFilaIzq .setAttribute('class', 'row');
  
   //CREAMOS LA COLUMNA ISQUIERDA DE LA FILA INFERIOR QUE TENDRA LOS TITULOS 20
   let colIzqFilaInfcontenedorSegundaFilaIzq = document.createElement('div');
   colIzqFilaInfcontenedorSegundaFilaIzq.setAttribute('class', 'col-md-6');
   colIzqFilaInfcontenedorSegundaFilaIzq.style.color='blue';

   //CREAMOS LOS PARRAFOS CON LOS TITULOS 21
   let parrafoColIzqFilaInfcontenedorSegundaFilaIzq = document.createElement('p')
   parrafoColIzqFilaInfcontenedorSegundaFilaIzq.innerHTML='Campaña de invierno, Minsal refuerza red asistencial frente al aumento y adelanto en la circulación de virus respiratorios.';


   //ASOCIAMOS EL PARRAFO A LA COLUMNA IZQ DE LA FILA SUP A LA COLUMNA
   colIzqFilaInfcontenedorSegundaFilaIzq.appendChild(parrafoColIzqFilaInfcontenedorSegundaFilaIzq);

   //ASOCIAMOS  LA COLUMNA IZQ CON TITULOS A LA FILA SUP 
   filaInfcontenedorSegundaFilaIzq.appendChild(colIzqFilaInfcontenedorSegundaFilaIzq);

   //CREAMOS LA COLUMNA DERECHA DE LA FILA SUP IZQ QUE TENDRA EL CONTENIDO DERECHO 22
   let colDerFilaInfcontenedorSegundaFilaIzq = document.createElement('div');
   colDerFilaInfcontenedorSegundaFilaIzq.setAttribute('class','col-md-6');
   colDerFilaInfcontenedorSegundaFilaIzq.style.color='rgb(66, 64, 64)';

   //CREAMOS EL PARRAFO DERECHO DE LA COLUMNA DERECHA DE LA FILA SUP IZQUIERDA QUE CONTIENE CONTENIDO 23
   let parrafoColDerFilaInfcontenedorSegundaFilaIzq = document.createElement('p');
   parrafoColDerFilaInfcontenedorSegundaFilaIzq.innerHTML='La autoridad se refirió al anuncio de la Organización Mundial del Salud (OMS), que declaró esta mañana el término de la emergencia sanitaria mundial por Covid-19. La Ministra Aguilera fue enfática en señalar que esta no es una enfermedad que haya desaparecido, sino más bien, que el virus ya vive entre nosotros.';

   //ASOCIAMOS EL PARRAFO A LA COLUMNA DERECHA DE LA COLUMNA IZQ DE LA FILA SUP DEL CONTENEDOR
   colDerFilaInfcontenedorSegundaFilaIzq.appendChild(parrafoColDerFilaInfcontenedorSegundaFilaIzq);

   //ASOCIAMOS LA COLUMNA DERECHA DE LA COLUMNA IZQ DE LA FILA SUP  CON CONTENIDOS AL CONTENEDOR
   filaInfcontenedorSegundaFilaIzq.appendChild(colDerFilaInfcontenedorSegundaFilaIzq);

   //ASOCIAMOS EL PARRAFO A LA COLUMNA DERECHA DE LA COLUMNA IZQ DE LA FILA SUP DEL CONTENEDOR
   contenedorSegundaFilaIzq.appendChild(filaInfcontenedorSegundaFilaIzq);

   //ASOCIAMOS EL CONTAINER A LA SEGUNDA FILA PRINCIPAL DE LA IZQUIERDA
   segundoFilaIzqContenido.appendChild(contenedorSegundaFilaIzq);

   //ASOCIAMOS LA SEGUNDA FILA PRINCIPAL IZQUIERDA AL ELEMENTO PRINCIPAL DE LA IZQUIERDA
   columnaIzquierdaMain.appendChild(segundoFilaIzqContenido);
    //______________________________________________________________________________________________________fin error

    // creamos la primer fila derecha de contenido
    let primeraFilaDereha = document.createElement('div');
    primeraFilaDereha.setAttribute('class', 'row');

    // creamos la columna de la primera fila derecha de contenido 
    let columnaPrimeraFilaDerecha = document.createElement('div');
    columnaPrimeraFilaDerecha.setAttribute('class', 'col-md-12');

    let espacioImagenes= document.createElement('br')

    //CREAMOS IMAGEN 1 FILA DERECHA COLUMNA DERECHA
    let imgUnoColumnaDerechaMain = document.createElement('img');
    imgUnoColumnaDerechaMain.setAttribute('src', 'assets/img/dupla.png');
    imgUnoColumnaDerechaMain.setAttribute('alt','Dupla');

    //CREAMOS IMAGEN 2 FILA DERECHA COLUMNA DERECHA
    let imgDosColumnaDerechaMain = document.createElement('img');
    imgDosColumnaDerechaMain.setAttribute('src','assets/img/nonos.png');
    imgDosColumnaDerechaMain.setAttribute('alt','No nos Confiemos');

    //CREAMOS IMAGEN 3 FILA DERECHA COLUMNA DERECHA
    let imgTresColumnaDerechaMain = document.createElement('img');
    imgTresColumnaDerechaMain.setAttribute('src', 'assets/img/const.png')
    imgTresColumnaDerechaMain.setAttribute('alt','Construyendo');

    //CREAMOS IMAGEN 4 FILA DERECHA COLUMNA DERECHA
    let imgCuatroColumnaDerechaMain = document.createElement('img');
    imgCuatroColumnaDerechaMain.setAttribute('src', 'assets/img/viruela.png')
    imgCuatroColumnaDerechaMain.setAttribute('alt','Viruela');

    //CREAMOS IMAGEN 5 FILA DERECHA COLUMNA DERECHA
    let imgCincoColumnaDerechaMain = document.createElement('img');
    imgCincoColumnaDerechaMain.setAttribute('src', 'assets/img/paso.png')
    imgCincoColumnaDerechaMain.setAttribute('alt','Paso a Paso');

    //CREAMOS IMAGEN 6 FILA DERECHA COLUMNA DERECHA
    let imgSeisColumnaDerechaMain = document.createElement('img');
    imgSeisColumnaDerechaMain.setAttribute('src', 'assets/img/univer.png')
    imgSeisColumnaDerechaMain.setAttribute('alt','Universalizacion');

    //CREAMOS IMAGEN 7 FILA DERECHA COLUMNA DERECHA
    let imgSieteColumnaDerechaMain = document.createElement('img');
    imgSieteColumnaDerechaMain.setAttribute('src', 'assets/img/copago.png')
    imgSieteColumnaDerechaMain.setAttribute('alt','Copago');

    //CREAMOS IMAGEN 8 FILA DERECHA COLUMNA DERECHA
    let imgOchoColumnaDerechaMain = document.createElement('img');
    imgOchoColumnaDerechaMain.setAttribute('src', 'assets/img/cnrp.png')
    imgOchoColumnaDerechaMain.setAttribute('alt','Cnrp');

    //CREAMOS IMAGEN 9 FILA DERECHA COLUMNA DERECHA
    let imgNueveColumnaDerechaMain = document.createElement('img');
    imgNueveColumnaDerechaMain.setAttribute('src', 'assets/img/fondo.png')
    imgNueveColumnaDerechaMain.setAttribute('alt','Fondo Nacional');

    //CREAMOS IMAGEN 10 FILA DERECHA COLUMNA DERECHA
    let imgDiezColumnaDerechaMain = document.createElement('img');
    imgDiezColumnaDerechaMain.setAttribute('src', 'assets/img/prev.png')
    imgDiezColumnaDerechaMain.setAttribute('alt','Prevencion');

    //CREAMOS IMAGEN 11 FILA DERECHA COLUMNA DERECHA
    let imgOnceColumnaDerechaMain = document.createElement('img');
    imgOnceColumnaDerechaMain.setAttribute('src', 'assets/img/campañas.png')
    imgOnceColumnaDerechaMain.setAttribute('alt','Campañas Sanitarias');

    //CREAMOS IMAGEN 12 FILA DERECHA COLUMNA DERECHA
    let imgDoceColumnaDerechaMain = document.createElement('img');
    imgDoceColumnaDerechaMain.setAttribute('src', 'assets/img/tuber.png')
    imgDoceColumnaDerechaMain.setAttribute('alt','Tuberculosis');

    //ASOCIAMOS LA IMAGEN 1 A LA COLUMNA DERECHA
    columnaPrimeraFilaDerecha.appendChild(imgUnoColumnaDerechaMain);

    //ASOCIAMOS LA IMG 2 A LA COLUMNA DERECHA
    columnaPrimeraFilaDerecha.appendChild(imgDosColumnaDerechaMain);

    //ASOCIAMOS LA IMG 3 A LA COLUMNA DERECHA
    columnaPrimeraFilaDerecha.appendChild(imgTresColumnaDerechaMain);

    //ASOCIAMOS LA IMG 4 A LA COLUMNA DERECHA
    columnaPrimeraFilaDerecha.appendChild(imgCuatroColumnaDerechaMain);

    //ASOCIAMOS LA IMG 5 A LA COLUMNA DERECHA
    columnaPrimeraFilaDerecha.appendChild(imgCincoColumnaDerechaMain);

    //ASOCIAMOS LA IMG 6 A LA COLUMNA DERECHA
    columnaPrimeraFilaDerecha.appendChild(imgSeisColumnaDerechaMain);

    //ASOCIAMOS LA IMG 7 A LA COLUMNA DERECHA
    columnaPrimeraFilaDerecha.appendChild(imgSieteColumnaDerechaMain);

    //ASOCIAMOS LA IMG 8 A LA COLUMNA DERECHA
    columnaPrimeraFilaDerecha.appendChild(imgOchoColumnaDerechaMain);

    //ASOCIAMOS LA IMG 9 A LA COLUMNA DERECHA
    columnaPrimeraFilaDerecha.appendChild(imgNueveColumnaDerechaMain);

    //ASOCIAMOS LA IMG 10 A LA COLUMNA DERECHA
    columnaPrimeraFilaDerecha.appendChild(imgDiezColumnaDerechaMain);

    //ASOCIAMOS LA IMG 11 A LA COLUMNA DERECHA
    columnaPrimeraFilaDerecha.appendChild(imgOnceColumnaDerechaMain);

    //ASOCIAMOS LA IMG 12 A LA COLUMNA DERECHA
    columnaPrimeraFilaDerecha.appendChild(imgDoceColumnaDerechaMain);

    //ASOCIAMOS LA COLUMNA A LA FILA
    primeraFilaDereha.appendChild(columnaPrimeraFilaDerecha);

    //ASOCIAMOS ESA PRIMELA FILA AL CONTENEDORPADRE DERECHA MAIN
    columnaDerechaMain.append(primeraFilaDereha);
}