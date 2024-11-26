import { DrizzleAdapter } from "@auth/drizzle-adapter";
import NextAuth from "next-auth";
import { db } from "./drizzle";
import Bcrypt from "bcryptjs";
import CredentialsProvider from "@auth/core/providers/credentials";

export const { handlers, auth, signIn, signOut } = NextAuth({
  adapter: DrizzleAdapter(db),
  secret: process.env.NEXTAUTH_SECRET,
  providers: [
    CredentialsProvider({
      type: "credentials",

      async authorize(credentials) {
        const { email, password } = credentials as {
          email: string;
          password: string;
        };

        if (!email || !password) {
          return null;
        }

        const userData = await db.query.user.findFirst({
          where: (user, { eq }) => eq(user.email, email),
        });
    
        if (
          !userData ||
          (await Bcrypt.compare(password, userData.password)) === false
        ) {
          return null;
        }
        return {
          id: userData.id,
          email: userData.email,
          name: userData.name,
          randomKey: "Hey cool",
        };
      },
    }),
  ],
  callbacks: {},
});
