import { DrizzleAdapter } from "@auth/drizzle-adapter";
import NextAuth from "next-auth";
import { db } from "./drizzle";
import Credentials from "next-auth/providers/credentials";
import Bcrypt from "bcryptjs";

export const { handlers, auth, signIn, signOut } = NextAuth({
  adapter: DrizzleAdapter(db),
  pages: {
    signIn: "/login",
  },
  secret: process.env.NEXTAUTH_SECRET,
  providers: [
    Credentials({
      credentials: {
        email: { label: "email", type: "text" },
        password: { label: "password", type: "password" },
      },
      async authorize(credentials) {
        if (!credentials?.email || !credentials.password) {
          return null;
        }

        const userData = await db.query.user.findFirst({
          where: (user, { eq }) => eq(user.email, String(credentials.email)),
        });

        if (
          !userData ||
          !(await Bcrypt.compare(
            String(credentials.password),
            userData.password!,
          ))
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

  events: {
    signIn: async (message) => {
      console.log("signIn", message);
    },
  },
});
