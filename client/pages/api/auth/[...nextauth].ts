import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import { googlelogin } from "../../../components/api/index";

export default NextAuth({
    providers: [
        GoogleProvider({
            clientId: process.env.GOOGLE_CLIENT_ID!,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
            httpOptions: {
                timeout: 40000,
            },
            authorization: {
                params: {
                    prompt: "consent",
                    access_type: "offline",
                    response_type: "code",
                },
            },
        }),
    ],
    
    secret: process.env.NEXTAUTH_SECRET as string,
    callbacks: {
        async jwt({ token, account, user } : any) {
            console.log(process.env.NEXTAUTH_SECRET)
                console.log(user);
                console.log(account);
                console.log(token);

                googlelogin({
                    emailId : user.email
                }).then(response => {
                    console.log(response)
                    if (response.status === 201) {
                        localStorage.setItem('token', response.data.authData.token)
                        // dispatch(loginAdmin())
                    }
                })
        },

        async session({ session, token }: any) {
            session.accessToken = token.accessToken;
            session.idToken = token.idToken;
            session.oktaId = token.oktaId;
            return session;
        }
    },
});