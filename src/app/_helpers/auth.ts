import { redirect } from "next/navigation";
import { getServerAuthSession } from "~/server/auth";

export async function checkUser() {
    const session = await getServerAuthSession();

    console.log(session);

    if (!session || !session.user) {
        try {
            redirect("https://fr.wikipedia.org/wiki/Wikip%C3%A9dia:Accueil_principal");
        } catch (error) {
            console.log(error);
        }
    }
}