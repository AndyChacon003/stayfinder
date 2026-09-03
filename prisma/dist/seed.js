"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const client_1 = require("@prisma/client");
const prisma = new client_1.PrismaClient();
async function main() {
    await prisma.alojamiento.deleteMany();
    await prisma.alojamiento.createMany({
        data: [
            {
                tipo: "Cabaña",
                titulo: "Cabaña Alpina",
                calificacion: "4.9",
                ubicacion: "Mazamitla, Jalisco",
                precio: "1,500",
                imagen: "https://images.unsplash.com/photo-1542718610-a1d656d1884c?q=80&w=1000",
                url_airbnb: "#"
            },
            {
                tipo: "Cabaña",
                titulo: "Refugio en el Bosque",
                calificacion: "4.8",
                ubicacion: "Tingambato, Michoacán",
                precio: "1,200",
                imagen: "https://images.unsplash.com/photo-1449158743715-0a90ebb6d2d8?q=80&w=1000",
                url_airbnb: "#"
            },
            {
                tipo: "Departamento",
                titulo: "Penthouse Céntrico",
                calificacion: "4.9",
                ubicacion: "Morelia, Michoacán",
                precio: "2,100",
                imagen: "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?q=80&w=1000",
                url_airbnb: "#"
            },
            {
                tipo: "Loft",
                titulo: "Loft Moderno Industrial",
                calificacion: "4.7",
                ubicacion: "Guadalajara, Jalisco",
                precio: "1,800",
                imagen: "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?q=80&w=1000",
                url_airbnb: "#"
            },
            {
                tipo: "Mansión",
                titulo: "Villa de Lujo con Alberca",
                calificacion: "5.0",
                ubicacion: "Valle de Bravo, Estado de México",
                precio: "4,500",
                imagen: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=1000",
                url_airbnb: "#"
            },
            {
                tipo: "Glamping",
                titulo: "Domo Geodésico Estelar",
                calificacion: "4.9",
                ubicacion: "Tapalpa, Jalisco",
                precio: "1,650",
                imagen: "https://images.unsplash.com/photo-1510312305653-8ed496efae75?q=80&w=1000",
                url_airbnb: "#"
            }
        ]
    });
    console.log('¡Alojamientos restaurados con éxito!');
}
main()
    .catch((e) => {
    console.error(e);
    process.exit(1);
})
    .finally(async () => {
    await prisma.$disconnect();
});
