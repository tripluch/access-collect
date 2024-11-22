import { DrizzleAdapter } from "@auth/drizzle-adapter";
import NextAuth from "next-auth";
import { db } from "./drizzle";
import Bcrypt from "bcryptjs";
import CredentialsProvider from "@auth/core/providers/credentials";

export const { handlers, auth, signIn, signOut } = NextAuth({
  adapter: DrizzleAdapter(db),
  // pages: {
  //   signIn: "/login",
  // },
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
        console.log("coucou");
        console.log(credentials);

        const userData = await db.query.user.findFirst({
          where: (user, { eq }) => eq(user.email, email),
        });

        if (
          !userData ||
          !(await Bcrypt.compare(password, userData.password!))
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
