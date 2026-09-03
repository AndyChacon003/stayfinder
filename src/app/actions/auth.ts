'use server'

import { prisma } from "../lib/prisma";
import bcrypt from "bcryptjs";

export async function registrar(formData: FormData) {
    const email = formData.get("email") as string;
    const password = formData.get("password") as string;

    if (!email || !password) return { error: "Faltan datos" };

    const existe = await prisma.usuario.findUnique({ where: { email } });
    if (existe) return { error: "El correo ya está registrado" };

    const hashedPassword = await bcrypt.hash(password, 10);

    await prisma.usuario.create({
        data: {
            email,
            password: hashedPassword
        }
    });

    return { success: "Usuario registrado con éxito en Neon DB" };
}

export async function login(formData: FormData) {
    const email = formData.get("email") as string;
    const password = formData.get("password") as string;

    if (!email || !password) return { error: "Faltan datos" };

    const usuario = await prisma.usuario.findUnique({ where: { email } });
    if (!usuario) return { error: "Usuario no encontrado" };

    const coincide = await bcrypt.compare(password, usuario.password);
    if (!coincide) return { error: "Contraseña incorrecta" };

    return { success: "Sesión iniciada correctamente" };
}