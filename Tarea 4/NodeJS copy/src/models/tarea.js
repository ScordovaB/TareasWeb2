const { PromiseProvider } = require("mongoose");

const Tarea = {
    buscar:(filtros)=>{ //Aqui unicamente el modelo NO funcion de req y res

        const tareas = [
            {titulo:'Tarea 1', status:'nueva'},
            {titulo:'Tarea 2', status:'nueva'},
            {titulo:'Tarea 3', status:'en progreso'},
            {titulo:'Tarea 4', status:'en progreso'},
            {titulo:'Tarea 5', status:'en progreso'},
            {titulo:'Tarea 6', status:'terminada'},
            {titulo:'Tarea 7', status:'terminado'},
            {titulo:'Tarea 12', status:'terminado'},
        ]

        return new Promise((resolve,reject)=>{    
            setTimeout(() => {
                resolve(tareas);
            }, 1000);
        })
    }
    
}

module.exports = Tarea;
