// Variables
const presupuestoUsuario = prompt('Cual es el presupuesto Semanal?');
const formulario = document.getElementById('agregar-gasto');
let cantidadPresupuesto;
// Clases
//Clase de presupuesto
class Presupuesto {
    constructor(presupuesto){
        this.presupuesto = Number(presupuesto);
        this.restaurante = Number(presupuesto);
        debugger;
    }
    //Método para ir restando del presuesto actual
    presupuestoRestante(cantidad = 0) {
        return this.restante -= Number(cantidad);
    }
}

// Clase de interfaz maneja todo lo relacionado a el HTML
class Interfaz{
    insertarPresupuesto(cantidad) {
        const presuestoSpan = document.querySelector('span#total');
        const restanteSpan = document.querySelector('span#restante');

        //Insertar al HTML
        presuestoSpan.innerHTML = `${cantidad}`;
        restanteSpan.innerHTML = `${cantidad}`;
    }
    imprimirMensaje(mensaje, tipo){
        const divMensaje = document.createElement('div');
        divMensaje.classList.add('text-center', 'alert');
        if(tipo === 'error') {
            divMensaje.classList.add('alert-danger');
        }else{
            divMensaje.classList.add('alert-success');
        }
        divMensaje.appendChild(document.createTextNode(mensaje))
        // Insertar en el Dom
        document.querySelector('.primario').insertBefore(divMensaje, formulario)

        // Quitar el alert despues de 3s
        setTimeout(function(){
            document.querySelector('.primario .alert').remove();
            formulario.reset();
        }, 3000)
    }
}



//Event Listener
document.addEventListener('DOMContentLoaded', function(){
    if (presupuestoUsuario === null || presupuestoUsuario === ''){
        window.location.reload();
    }else{
        //Instanciar un presupuesto
        cantidadPresupuesto = new Presupuesto(presupuestoUsuario);

        //Instanciar la clase de interfaz
        const ui = new Interfaz();
        ui.insertarPresupuesto(cantidadPresupuesto.presupuesto);

    }
})

formulario.addEventListener ('submit', function(e){
    e.preventDefault();

    //Leer del formulario de Gastos
    const nombreGasto = document.querySelector('#gasto').value;
    const cantidadGasto = document.querySelector('#cantidad').value;

    // Instanciar la Interfaz
    const ui = new Interfaz();

    //Comprobar que los campos no esten vacios
    if (nombreGasto === '' || cantidadGasto === ''){
        //2 parametros: mensaje y tipo
        ui.imprimirMensaje('Hubo un error', 'error')
    } else {

    }
})