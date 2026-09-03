'use server'

import { prisma } from "../lib/prisma";
import bcrypt from "bcryptjs";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

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

    cookies().set("stayfinder_session", "true", { path: "/" });

    return { success: "Registrado exitosamente" };
}

export async function login(formData: FormData) {
    const email = formData.get("email") as string;
    const password = formData.get("password") as string;

    if (!email || !password) return { error: "Faltan datos" };

    const usuario = await prisma.usuario.findUnique({ where: { email } });
    if (!usuario) return { error: "Usuario no encontrado" };

    const coincide = await bcrypt.compare(password, usuario.password);
    if (!coincide) return { error: "Contraseña incorrecta" };

    cookies().set("stayfinder_session", "true", { path: "/" });

    return { success: "Sesión iniciada correctamente" };
}

export async function logout() {
    cookies().delete("stayfinder_session");
    redirect("/");
}