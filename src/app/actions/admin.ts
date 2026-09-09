'use server'

import { prisma } from "../lib/prisma";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { cookies } from "next/headers";

async function verificarAdmin() {
    const cookieStore = await cookies();
    const rol = cookieStore.get("stayfinder_rol")?.value;
    if (rol !== "ADMIN") throw new Error("No autorizado");
}

export async function borrarAlojamiento(formData: FormData) {
    await verificarAdmin();
    const id = parseInt(formData.get("id") as string);

    await prisma.alojamiento.delete({
        where: { id }
    });

    revalidatePath("/");
    revalidatePath("/admin");
}

export async function crearAlojamiento(formData: FormData) {
    await verificarAdmin();

    const tipo = formData.get("tipo") as string;
    const titulo = formData.get("titulo") as string;
    const calificacion = formData.get("calificacion") as string;
    const ubicacion = formData.get("ubicacion") as string;
    const precio = formData.get("precio") as string;
    const imagen = formData.get("imagen") as string;

    await prisma.alojamiento.create({
        data: {
            tipo,
            titulo,
            calificacion,
            ubicacion,
            precio,
            imagen,
            url_airbnb: "#"
        }
    });

    revalidatePath("/");
    revalidatePath("/admin");
    redirect("/admin");
}