import { deleteKey, getKeyByUserId } from "@/lib/keyQuery";
import { NextRequest, NextResponse } from "next/server";

export async function GET(
    req: NextRequest,
    { params }: { params: { userId: string; key: string } }
  ) {
    const url = req.nextUrl.clone();
    if (!params) {
      url.pathname = "/forgotten-password/on-failed";
      return NextResponse.redirect(url);
    }
    
    const userId = params.userId;
    const key = params.key;

    console.log(userId)
    console.log(key)

    if (!userId || !key) {
        url.pathname = "/forgotten-password/on-failed";
        return NextResponse.redirect(url);
      }
    
      const foundKey = await getKeyByUserId(userId);
      if (!foundKey) {
        return NextResponse.redirect(url);
      }
    
      let now = new Date();
      let hasTokenExpired : boolean= foundKey.expirationDate.getHours() < now.getHours()
  
      if (hasTokenExpired) {
        await deleteKey(key);
        url.pathname = "/forgotten-password/on-token-expired";
        return NextResponse.redirect(url);
      } else {
        const continueUrl = new URL(
          "/reset-password",
          req.url
        );
        continueUrl.searchParams.set("userId", userId);
        continueUrl.searchParams.set("userKey", key);
        return NextResponse.redirect(continueUrl);
      }
    }
