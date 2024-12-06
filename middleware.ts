import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export const middleware = (req: NextRequest) => {
    const userCookie = req.cookies.get('user')

    const url = req.nextUrl.clone()

    if (url.pathname === '/login' && userCookie) {
        return NextResponse.redirect(new URL('/shop', req.url))
    }

    if (!userCookie && url.pathname.startsWith('/shop')) {
        return NextResponse.redirect(new URL('/login', req.url))
    }

    return NextResponse.next()
};

export const config = {
    matcher: ['/login', '/shop/:path*'], 
};
