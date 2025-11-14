document.addEventListener('DOMContentLoaded', () =>{ 
    
    // OBTENER DATOS DE LOS DOLARES
    const dolarPrincipal = document.getElementById('dolar-principal')
    const containerDolar = document.querySelector('.container-dolar')

    async function obtenerDolar(){
        try {
            const res = await fetch('https://dolarapi.com/v1/ambito/dolares');
            if(!res.ok) throw new Error('Error al obtener datos')
            const data = await res.json()
            console.log('Dolar:', data)
            dolarPrincipal.innerHTML = `<b>$${data[0].venta}</b>`

            // Ultima Actualizacion
            function formatearFecha(fechaISO){
                const fecha = new Date(fechaISO);
                return fecha.toLocaleString('es-AR', {
                    day:'2-digit',
                    month: '2-digit',
                    year:'numeric',
                    hour:'2-digit',
                    minute: '2-digit'
                })
            }

            const actualizacionOficial = formatearFecha(data[0].fechaActualizacion);
            const actualizacionBlue = formatearFecha(data[1].fechaActualizacion);
            const actualizacionTarjeta = formatearFecha(data[6].fechaActualizacion);
            const actualizacionCripto = formatearFecha(data[5].fechaActualizacion);

            
            // DOLAR OFICIAL
            const containerOficial = document.createElement('div');
            const oficialValor = document.createElement('div');
            let dolarOficial = document.createElement('div');
            const compraOficial = document.createElement('div');
            const ventaOficial = document.createElement('div');
            const oficialActualizacion = document.createElement('div');

            containerOficial.classList.add('col', 'gap-5')

            dolarOficial.classList.add('card')
            dolarOficial.innerHTML = `<h4>Dolar Oficial</h4>`
            compraOficial.innerHTML = `<p>Compra: </p><b>$${data[0].compra}</b>`
            ventaOficial.innerHTML = `<p>Venta: </p><b>$${data[0].venta}</b>`
            oficialActualizacion.innerHTML = `<p>Ultima Actualizacion</p><b>${actualizacionOficial}</b>`

            compraOficial.classList.add('card-column')
            ventaOficial.classList.add('card-column')
            oficialValor.classList.add('card-values')
            oficialActualizacion.classList.add('date-actualizacion')

            oficialValor.appendChild(compraOficial)
            oficialValor.appendChild(ventaOficial)
            dolarOficial.appendChild(oficialValor)
            dolarOficial.appendChild(oficialActualizacion)
            containerOficial.appendChild(dolarOficial)

            // DOLAR BLUE
            const containerBlue = document.createElement('div');
            const blueValor = document.createElement('div');
            let dolarBlue = document.createElement('div');
            const compraBlue = document.createElement('div');
            const ventaBlue = document.createElement('div');
            const blueActualizacion = document.createElement('div');

            containerBlue.classList.add('col', 'gap-5')

            dolarBlue.classList.add('card')
            dolarBlue.innerHTML = `<h4>Dolar Blue</h4>`
            compraBlue.innerHTML = `<p>Compra: </p><b>$${data[1].compra}</b>`
            ventaBlue.innerHTML = `<p>Venta: </p><b>$${data[1].venta}</b>`
            blueActualizacion.innerHTML = `<p>Ultima Actualizacion</p><b>${actualizacionBlue}</b>`

            compraBlue.classList.add('card-column');
            ventaBlue.classList.add('card-column');
            blueValor.classList.add('card-values')
            blueActualizacion.classList.add('date-actualizacion')

            blueValor.appendChild(compraBlue)
            blueValor.appendChild(ventaBlue)
            dolarBlue.appendChild(blueValor)
            dolarBlue.appendChild(blueActualizacion)
            containerBlue.appendChild(dolarBlue)

            // DOLAR TARJETA
            const containerTarjeta = document.createElement('div');
            const TarjetaValor = document.createElement('div');
            let dolarTarjeta = document.createElement('div');
            const compraTarjeta = document.createElement('div');
            const ventaTarjeta = document.createElement('div');
            const tarjetaActualizacion = document.createElement('div');

            containerTarjeta.classList.add('col', 'gap-5')

            dolarTarjeta.classList.add('card')
            dolarTarjeta.innerHTML = `<h4>Dolar Tarjeta</h4>`
            compraTarjeta.innerHTML = `<p>Compra: </p><b>$${data[6].compra}</b>`
            ventaTarjeta.innerHTML = `<p>Venta: </p><b>$${data[6].venta}</b>`
            tarjetaActualizacion.innerHTML = `<p>Ultima Actualizacion</p><b>${actualizacionTarjeta}</b>`

            compraTarjeta.classList.add('card-column')
            ventaTarjeta.classList.add('card-column')
            TarjetaValor.classList.add('card-values')
            tarjetaActualizacion.classList.add('date-actualizacion')

            TarjetaValor.appendChild(compraTarjeta)
            TarjetaValor.appendChild(ventaTarjeta)
            dolarTarjeta.appendChild(TarjetaValor)
            dolarTarjeta.appendChild(tarjetaActualizacion)
            containerTarjeta.appendChild(dolarTarjeta)

            // DOLAR CRIPTO
            const containerCripto = document.createElement('div');
            const CriptoValor = document.createElement('div');
            let dolarCripto = document.createElement('div');
            const compraCripto = document.createElement('div');
            const ventaCripto = document.createElement('div');
            const criptoActualizacion = document.createElement('div');

            containerCripto.classList.add('col', 'gap-5')

            dolarCripto.classList.add('card')
            dolarCripto.innerHTML = `<h4>Dolar Cripto</h4>`
            compraCripto.innerHTML = `<p>Compra: </p><b>$${data[5].compra}</b>`
            ventaCripto.innerHTML = `<p>Venta: </p><b>$${data[5].venta}</b>`
            criptoActualizacion.innerHTML = `<p>Ultima Actualizacion</p><b>${actualizacionCripto}</b>`

            compraCripto.classList.add('card-column')
            ventaCripto.classList.add('card-column')
            CriptoValor.classList.add('card-values')
            criptoActualizacion.classList.add('date-actualizacion')

            CriptoValor.appendChild(compraCripto)
            CriptoValor.appendChild(ventaCripto)
            dolarCripto.appendChild(CriptoValor)
            dolarCripto.appendChild(criptoActualizacion)
            containerCripto.appendChild(dolarCripto)

            /* Todos los container */
            containerDolar.appendChild(containerOficial)
            containerDolar.appendChild(containerBlue)        
            containerDolar.appendChild(containerTarjeta)      
            containerDolar.appendChild(containerCripto)        
            

        } catch(error) {
            console.error('Ocurrio un error:', error)
        }
    }

    obtenerDolar()

    // OBTENER DATOS DE SENADORES
    const hoy = new Date()
    async function obtenerSenadores(){
        try{
            const res = await fetch('https://api.argentinadatos.com/v1/senado/senadores')
            if(!res.ok) throw new Error('Error al obtener los datos');
            const data = await res.json()

            const senadoresActuales = data.filter(sen => {
                const finPeriodo = new Date(sen.periodoReal?.fin || sen.periodoLegal.fin) 

                return finPeriodo >= hoy;
            })

            console.log(senadoresActuales)
            
            const porPartido = {}

            senadoresActuales.forEach(sen => {
                if(porPartido[sen.partido]){
                    porPartido[sen.partido] +=1
                } else {
                    porPartido[sen.partido] = 1
                }
            })

            const senadoresOrdenados = Object.fromEntries(
                Object.entries(porPartido).sort((a, b) => b[1] - a[1])
            )

            console.log(senadoresOrdenados)
            
            const partidos = Object.keys(senadoresOrdenados)
            const cantidad = Object.values(senadoresOrdenados)

            console.log(partidos)
            
            // GRAFICO SENADORES
            let ctx = document.getElementById('myChart').getContext('2d');
            let myChart = new Chart(ctx, {
                type: 'bar',
                data: {
                    labels: partidos,
                    datasets: [{
                        label: 'Cantidad de Senadores por Partido',
                        data: cantidad,
                        backgroundColor:[
                            'rgb(0, 65, 149)',
                            'rgb(255, 215, 0)',
                            'rgb(0, 80, 140)',
                            'rgb(108, 76, 153)',
                            'rgb(200, 20, 40)',
                            'rgb(0, 100, 80)',
                            'rgb(0, 100, 120)',
                            'rgb(255, 200, 50)',
                            'rgb(10, 60, 140)',
                            'rgb(0, 130, 70)',
                            'rgb(255, 100, 0)',
                            'rgb(30, 120, 200)',
                            'rgb(255, 220, 50)',
                            'rgb(0, 90, 160)',
                            'rgb(0, 70, 150)',
                            'rgb(0, 110, 90)'

                        ]
                    }]
                },
                // Empieza desde cero
                options:{
                    scales: {
                        yAxes:[{
                            ticks:{
                                beginAtZaero: true
                            }
                        }]
                    }
                }
            })
        } catch(error){
            console.error('Ocurrio un error:', error.message)
        }
    }

    obtenerSenadores()

    // ACTAS SENADORES
    async function actasSenadores(){
        try{
            //Obtenemos las actas
            const res = await fetch('https://api.argentinadatos.com/v1/senado/actas/2025');
            if(!res.ok) throw new Error('Error al obtener los datos');
            const data = await res.json()
            console.log('Actas:')
            console.log(data)

            // Creamos la tabla para mostrar las actas
            const container = document.querySelector('.actas-senadores');
            const tituloContenedor = document.createElement('p');
            const table = document.createElement('table');
            table.classList.add('table-scroll')
            const columnas = document.createElement('thead');
            const seccionColumnas = document.createElement('tr');
            const primerColumna = document.createElement('th');
            primerColumna.textContent = 'ID'
            const segundaColumna = document.createElement('th');
            segundaColumna.textContent = 'Fecha'
            const terceraColumna = document.createElement('th');
            terceraColumna.textContent = 'Resultado'
            const cuartaColumna = document.createElement('th');
            cuartaColumna.textContent = 'Titulo'
            const cuerpoTabla = document.createElement('tbody');

            container.appendChild(tituloContenedor)
            container.appendChild(table)
            tituloContenedor.textContent = 'Seleccionar Acta de Votación';
            table.appendChild(columnas)
            columnas.appendChild(seccionColumnas)
            seccionColumnas.appendChild(primerColumna)
            seccionColumnas.appendChild(segundaColumna)
            seccionColumnas.appendChild(terceraColumna)
            seccionColumnas.appendChild(cuartaColumna)
            table.appendChild(cuerpoTabla)

            // Cambios el formato de las fechas de las actas
            function formatearFecha(fechaISO){
                const fecha = new Date(fechaISO)
                return fecha.toLocaleString('es-AR', {
                    day: '2-digit',
                    month: '2-digit',
                    year: 'numeric'
                })
            }

            // Ordenamos las actas por ID
            data.sort((a, b) => b.actaId - a.actaId);


            // Recorremos las actas y asignamos los valores a cada fila de la tabla forEach(actaActual, index, array completo)
            data.forEach((actas, index) => {
                const filaActa = document.createElement('tr');
                const filaID = document.createElement('td');
                const filaFecha = document.createElement('td');
                const filaResultado = document.createElement('td');
                const filaTitulo = document.createElement('td');

                filaID.textContent = actas.actaId
                filaFecha.textContent = formatearFecha(actas.fecha)
                filaResultado.textContent = actas.resultado
                filaTitulo.textContent = actas.titulo

                // le asignamos el index del elemento actual
                filaActa.dataset.index = index;

                filaActa.addEventListener('click', (e) => {
                    if(window.chartSen && typeof window.chartSen.destroy === 'function'){
                        window.chartSen.destroy()
                    }
                    // Obtenemos el index del elemento
                    const indexSeleccionada = e.currentTarget.dataset.index;

                    const elemento = e.currentTarget
                    document.querySelectorAll('tr').forEach(elm => {
                        elm.style.backgroundColor = ''
                    })
                    elemento.style.backgroundColor = '#006321'

                    //Obtenemos el elemento por su index
                    const dataSeleccionada = data[indexSeleccionada];
                    console.log(dataSeleccionada)

                    const votaciones = {
                        afirmativo: dataSeleccionada.afirmativos,
                        negativos: dataSeleccionada.negativos,
                        abstenciones: dataSeleccionada.abstenciones
                    }

                    const votacion = Object.keys(votaciones)
                    const cantidad = Object.values(votaciones)

                    const ctx = document.getElementById('chartSen').getContext('2d');
                    window.chartSen = new Chart(ctx,{
                        type: 'doughnut',
                        data: {
                            labels: votacion,
                            datasets: [{
                                data: cantidad,
                                backgroundColor:[
                                    'rgb(0, 65, 149)',
                                    'rgb(255, 215, 0)',
                                    'rgb(0, 80, 140)'
                                ]
                            }]
                        }
                    })
                })

                cuerpoTabla.appendChild(filaActa)
                filaActa.appendChild(filaID)
                filaActa.appendChild(filaFecha)
                filaActa.appendChild(filaResultado)
                filaActa.appendChild(filaTitulo)
            })
        } catch(error){
            console.error('Ocurrio un error:', error.message)
        }
    }
    
    actasSenadores()

    // OBTENER DATOS DE DIPUTADOS

    async function obtenerDiputados(){
        try{
            const res = await fetch('https://api.argentinadatos.com/v1/diputados/diputados')
            if(!res.ok) throw new Error('Ocurrio un error al obtener los datos');
            const data = await res.json()

            const diputadosActuales = data.filter(dip => {
                const finPeriodo = new Date(dip.periodoMandato.fin)

                return finPeriodo > hoy
            })

            const mapaDiputados = new Map();
            diputadosActuales.forEach(dip => {
                const existente = mapaDiputados.get(dip.id);
                if(!existente || new Date(dip.periodoMandato.fin > new Date(existente.periodoMandato.fin))){
                    mapaDiputados.set(dip.id, dip)
                }
            })

            const diputadosUnicos = Array.from(mapaDiputados.values());
            console.log(diputadosUnicos)

            const porPartido = {}

            diputadosUnicos.forEach(dip => {
                if(porPartido[dip.bloque]){
                    porPartido[dip.bloque] += 1
                } else {
                    porPartido[dip.bloque] = 1
                }
            })

            const porPartidoOrdenado = Object.fromEntries(
                Object.entries(porPartido).sort((a, b) => b[1] - a[1])
            )

            const partido = Object.keys(porPartidoOrdenado);
            const cantidad = Object.values(porPartidoOrdenado);
            
            ctx = document.getElementById('cantDip').getContext('2d');
            let myChart = new Chart(ctx, {
                type: 'bar',
                data: {
                    labels: partido,
                    datasets:[{
                        label: 'Cantidad',
                        data: cantidad
                    }]
                }
            })

            // Obtener actas diputados
            async function actasDiputados(){
               try{
                    const res = await fetch('https://api.argentinadatos.com/v1/diputados/actas/2025');
                    if(!res.ok) throw new Error('Ocurrio un error al obtener los datos');
                    const data = await res.json()
                    console.log('data actas diputados')
                    console.log(data)

                    data.sort((a, b) => b.id - a.id)
                    console.log('data actas diputados ordenada')
                    console.log(data)

                    function formatearFecha(fechaISO){
                        const fecha = new Date(fechaISO);
                        return fecha.toLocaleString('es-AR', {
                            day: '2-digit',
                            month: '2-digit',
                            year: 'numeric'
                        })
                    }

                    const contenedor = document.querySelector('.actas-diputados')
                    const titulo = document.createElement('p')
                    titulo.innerHTML = 'Seleccionar Acta de Votacion'
                    const table = document.createElement('table');
                    table.classList.add('table-scroll')
                    const columnas = document.createElement('thead');
                    const body = document.createElement('tbody');
                    columnas.innerHTML = `
                        <tr>
                            <th scope="col">ID</th>
                            <th scope="col">Fecha</th>
                            <th scope="col">Resultado</th>
                            <th scope="col">Titulo</th>
                        </tr>
                    `

                    contenedor.appendChild(titulo)
                    contenedor.appendChild(table);
                    table.appendChild(columnas)
                    table.appendChild(body);

                    data.forEach((actas, index) => {
                        const filaActa = document.createElement('tr');
                        filaActa.innerHTML = `
                            <td>${actas.id}</td>
                            <td>${formatearFecha(actas.fecha)}</td>
                            <td>${actas.resultado}</td>
                            <td>${actas.titulo}</td>
                        `
                        filaActa.dataset.index = index

                        filaActa.addEventListener('click', (e) => {
                            if(window.chartDip && typeof window.chartDip.destroy === 'function'){
                                window.chartDip.destroy()
                            }
                            const indexSeleccionado = e.currentTarget.dataset.index
                            const elemento = e.currentTarget
                            document.querySelectorAll('tr').forEach(elm => {
                                elm.style.backgroundColor = '';
                            })

                            elemento.style.backgroundColor = '#006321'

                            const dataSeleccionada = data[indexSeleccionado]

                            const votaciones = {
                                afirmativos: dataSeleccionada.votosAfirmativos,
                                negativos: dataSeleccionada.votosNegativos,
                                abstenciones: dataSeleccionada.abstenciones
                            }

                            const votacion = Object.keys(votaciones);
                            const cantidad = Object.values(votaciones);
                            
                            const ctx = document.getElementById('chartDip').getContext('2d');
                            window.chartDip = new Chart(ctx, {
                                type: 'doughnut',
                                data: {
                                    labels: votacion,
                                    datasets: [{
                                        data: cantidad,
                                        backgroundColor:[
                                            'rgb(0, 65, 149)',
                                            'rgb(255, 215, 0)',
                                            'rgb(0, 80, 140)'
                                        ]
                                    }]
                                }
                            })
                        })

                        body.appendChild(filaActa)
                    })
                } catch(error){
                    console.error('Ocurrio un error:', error.message)
                }
            } 

            actasDiputados()

        } catch(error){
            console.error('Ocurrio un error', error.message)
        }
    }

    obtenerDiputados()

})