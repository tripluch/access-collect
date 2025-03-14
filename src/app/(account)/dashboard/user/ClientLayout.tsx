"use client";

import { SessionProvider } from "next-auth/react";

export default function ClientLayout({
  children,
  session,
}: {
  children: React.ReactNode;
  session: any;
}) {
  return (
    <div>
      <SessionProvider session={session}>{children}</SessionProvider>
    </div>
  );
}
