import { redirect } from "react-router-dom";
import { deleteContact } from "../data/contacts";

export async function destroyContactAction({ params } : { params: Params<string> }) {
    await deleteContact(params.contactId as string);
    return redirect("/contacts");
}