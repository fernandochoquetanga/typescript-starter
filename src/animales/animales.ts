class Animales {
    nombre: string;
    constructor(nombre: string) {
        this.nombre = nombre;
    }

    mover(distancia: number=0) {
        console.log (`${this.nombre} se movio ${distancia}m.`);
    }
}

//instancia
const animal1 = new Animales('Misifu');

animal1.mover();
animal1.mover(5);