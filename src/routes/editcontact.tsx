import { Box, Button, Paper, TextField, Typography } from "@mui/material";
import { Container, Stack } from "@mui/system";
import { Form, Params, redirect, useLoaderData } from "react-router-dom";
import { Contact, getContact, updateContact } from "../data/contacts";

async function loader({ params }: { params: Params<string> }) {
  const contact = await getContact(params.contactId as string);  
  console.log(params, contact);
  return { contact };
}

async function action({ request, params }: { request: Request; params: Params<string> }) {
  const formData = await request.formData();
  const updates = Object.fromEntries(formData);
  await updateContact(params.contactId!, updates);
  return redirect(`/contacts/${params.contactId}`);
}

export function EditContactPage() {  
  const { contact } = useLoaderData() as { contact: Contact };

  return (
    <Container>
      <Typography variant={"h3"}>Edit Contact</Typography>
      <Paper elevation={3}>
        <Form method="post" id="contact-form">
          <Stack>            
            <Box>
              <TextField name="name" label="Name" defaultValue={contact?.name} />
            </Box>
            <Box>
              <TextField name="email" label="Email" defaultValue={contact?.email} />
            </Box>            
            <Button type="submit">Save</Button>          
          </Stack>
        </Form>
      </Paper>      
    </Container>
  );
}

EditContactPage.action = action;
EditContactPage.loader = loader;
