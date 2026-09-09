'use server'

import { prisma } from "../lib/prisma";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export async function crearReserva(formData: FormData) {
    const cookieStore = await cookies();
    const nombre = cookieStore.get("stayfinder_nombre")?.value;

    if (!nombre) {
        redirect("/login");
    }

    const usuario = await prisma.usuario.findFirst({
        where: { nombre }
    });

    if (!usuario) {
        redirect("/login");
    }

    const alojamientoId = parseInt(formData.get("alojamientoId") as string);
    const fechaInicio = new Date(formData.get("fechaInicio") as string);
    const fechaFin = new Date(formData.get("fechaFin") as string);

    const precioCrudo = formData.get("precioTotal") as string;
    const precioTotal = parseFloat(precioCrudo.replace(/,/g, ''));

    await prisma.reserva.create({
        data: {
            usuarioId: usuario.id,
            alojamientoId,
            fechaInicio,
            fechaFin,
            total: precioTotal
        }
    });

    redirect("/");
}