import axios from "axios";
import NextAuth from "next-auth";
import CredentialsProviders from "next-auth/providers/credentials";
import { useRouter } from "next/router";
import { signIn } from "next-auth/react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default NextAuth({
  session: {
    strategy: "jwt",
    maxAge: 2000,
  },
  providers: [
    CredentialsProviders({
      name: "Custom Provider",
      async authorize(credentials) {
        let { email, password } = credentials;

        let data = { email: email, password: password };

        let response = await axios.post(
          "https://api.orthomatri.com/api/v1/auth/login",
          data
        );

        let user = response.data;

        let token = response.data.data;

        if (!(response.status == 200)) {
          throw new Error("Invalid Credentials" + email);
        }

        if (response.status == 200) {
          return (user = {
            name: token,
            email: email,
          });
        }
      },
    }),
  ],
});
