import 'dotenv/config'
import { Pool } from 'pg'
import { PrismaPg } from '@prisma/adapter-pg'
import { PrismaClient } from '@prisma/client'

const pool = new Pool({ connectionString: process.env.DATABASE_URL })
const adapter = new PrismaPg(pool)
const prisma = new PrismaClient({ adapter })

async function main() {
    const alojamiento = await prisma.alojamiento.create({
        data: {
            tipo: "Cabaña",
            titulo: "Cabaña en el bosque",
            calificacion: "4.8",
            ubicacion: "Mazamitla, Jalisco",
            precio: "1,200",
            imagen: "https://images.unsplash.com/photo-1542718610-a1d656d1884c?w=800&q=80",
            url_airbnb: "https://airbnb.com"
        },
    })
    console.log('Alojamiento creado:', alojamiento)
}

main()
    .then(async () => {
        await prisma.$disconnect()
    })
    .catch(async (e) => {
        console.error(e)
        await prisma.$disconnect()
        process.exit(1)
    })