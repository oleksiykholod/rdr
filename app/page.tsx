import { ReactElement } from "react";
import MainBlock from "./components/block/block";
import SignIn from "./components/sign_in";
import { auth } from "@/auth";
import {prisma} from "@/prisma"
import { redirect } from "next/navigation";

export default async function Home() {
    const session = await auth()
    if (!session) {redirect("/auth/login")}else{
      const user = session.user
      if(user){
        const dbUser = await prisma.user.findUnique({
          where: { email: user.email as string},
      }
      );
      return (
        <>
  
          <MainBlock/>
          <h1>{dbUser?.category}</h1>
  
        </>
      );
    }
  }}