import Image from "next/image";
import { getServerAuthSession } from "~/server/auth";
import { redirect } from "next/navigation";
import { AuthButton } from "../_components/auth-button";

export default async function LoginPage() {
    const session = await getServerAuthSession();

    if (session && session.user) {
        redirect("/");
    }

    return (
        <main className="login h-full flex flex-col items-center justify-center">
            <Image
                    src="/underscore.svg"
                    width={500}
                    height={100}
                    alt="UNDERSCORE logo"
                    className="mb-6"
                />
            <p className="mb-10 text-2xl w-1/3 text-center">Une connection à Discord est nécessaire pour accéder à l'application.</p>
            <AuthButton type="discord" className="flex h-fit py-2 px-6 bg-primary-highlight text-white text-3xl hover:bg-primary-highlight-hover"/>
        </main>
    )
}