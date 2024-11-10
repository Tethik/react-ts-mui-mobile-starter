import { Typography } from "@mui/material";
import { Container } from "@mui/system";
import { Link, Params, useLoaderData } from "react-router-dom";
import { Contact, getContact } from "../data/contacts";


async function loader({ params }: { params: Params<string> }) {
  const contact = await getContact(params.contactId as string);  
  return { contact };
}

async function action() {  
  return null;
}

export function ContactPage() {  
  const { contact } = useLoaderData() as { contact: Contact };  

  return (
    <Container>
      <Typography variant={"h3"}>{contact?.name}</Typography>
      <Typography variant={"h5"}>{contact?.email}</Typography>

      <Link to={`/contacts/${contact.id}/edit`}>Edit</Link>      
    </Container>
  );
}

ContactPage.loader = loader;
ContactPage.action = action;
