// pages/api/auth/[...nextauth].js
import NextAuth, { ISODateString } from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import { googlelogin } from "../../../components/api/index";
import {JWT} from 'next-auth/jwt'

export type CustomSession = {
    user ?: CustomUser;
    expires: ISODateString;
}

export type CustomUser = {
    email?: string | null;
    token?: string | null;
}

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
        async signIn({user} : {user: CustomUser}){
           
            const response = await googlelogin({
                emailId : user.email
            })

            if(response.status === 201){
                user.token = response.data.authData.token;
                // console.log(user)
                return true;
            }else{
                return false;
            }
        },

        async jwt({user, token} : {user : CustomUser, token: JWT}){
            console.log(user)

            if(user !== undefined){
                token.user = user;
            }
            
            console.log(token)    
            return token;
        },

        async session({session, user, token } : {session : CustomSession ,user : CustomUser, token: JWT}) {
           

           session.user = token.user as CustomUser

           console.log(session);

            return session;
          },

    },
});
