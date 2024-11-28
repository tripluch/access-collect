import { DrizzleAdapter } from "@auth/drizzle-adapter";
import NextAuth from "next-auth";
import { db } from "./drizzle";
import Bcrypt from "bcryptjs";
import CredentialsProvider from "@auth/core/providers/credentials";
import { getUserDataWithEmail } from "./userQuery";

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
          throw new Error("Wrongs credentials");
        }

        const userData = await getUserDataWithEmail(email);

        if (
          !userData ||
          (await Bcrypt.compare(password, userData.password)) === false
        ) {
          throw new Error("Wrong password");
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
