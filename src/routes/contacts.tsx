import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import Avatar from "@mui/material/Avatar";
import WorkIcon from "@mui/icons-material/Work";
import { Container } from "@mui/system";
import { Button, ListItemButton, Paper, Typography } from "@mui/material";
import { Form, Link, redirect, useLoaderData } from "react-router-dom";
import { Contact, createContact, listContacts } from "../data/contacts";

async function loader() {
    const contacts = await listContacts();
    return { contacts };
}

async function action() {
    const contact = await createContact({
        id: "new",
        name: "New contact",
        email: "new@contact"
    });
    return redirect(`/contacts/${contact.id}/edit`);
}


export function ContactsPage() {
    const { contacts } = useLoaderData() as { contacts: Contact[] };

    return (
        <Container>
            <Typography variant={"h3"}>Contacts</Typography>
            <Paper elevation={3}>
                <List sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}>
                    {contacts.map((contact) => (

                        <ListItem key={contact.id}>
                            <ListItemAvatar>
                                <Avatar>
                                    <WorkIcon />
                                </Avatar>
                            </ListItemAvatar>
                            <Link to={`/contacts/${contact.id}`}>
                                <ListItemText primary={contact.name} secondary={contact.email} />
                            </Link>
                            <Form
                                method="post"
                                action={`/contacts/${contact.id}/destroy`}
                                onSubmit={(event) => {
                                    if (
                                        !confirm(
                                            "Please confirm you want to delete this record."
                                        )
                                    ) {
                                        event.preventDefault();
                                    }
                                }}
                            >
                                <Button type="submit">Delete</Button>
                            </Form>
                        </ListItem>
                    ))}
                </List>
                <Form method="post">
                    <button type="submit">New</button>
                </Form>
            </Paper>
        </Container >
    );
}

ContactsPage.loader = loader;
ContactsPage.action = action;
