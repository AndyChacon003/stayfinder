import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
    const session = request.cookies.get('stayfinder_session')?.value;
    const rol = request.cookies.get('stayfinder_rol')?.value;

    if (request.nextUrl.pathname.startsWith('/admin')) {
        if (!session || rol !== 'ADMIN') {
            return NextResponse.redirect(new URL('/', request.url));
        }
    }

    if (request.nextUrl.pathname.startsWith('/reservas')) {
        if (!session) {
            return NextResponse.redirect(new URL('/login', request.url));
        }
    }

    return NextResponse.next();
}

export const config = {
    matcher: ['/admin/:path*', '/reservas/:path*'],
};