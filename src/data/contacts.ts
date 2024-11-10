export type Contact = {
    id: string;
    name: string;
    email: string;    
};

let cId = 2;
const contacts = [
    {
        id: "1",
        name: "Alice",
        email: "alice@example.example",        
    },
    {
        id: "2",
        name: "Bob",
        email: "bob@example.example"
    },
];

export async function getContact(id: string) {
    return contacts.find((c) => c.id === id);
}

export async function listContacts() {
    return contacts;
}

export async function updateContact(id: string, updates: Partial<Contact>) {
    const contact = await getContact(id);
    if (!contact) {
        throw new Error(`Contact not found: ${id}`);
    }
    Object.assign(contact, updates);
}

export async function createContact(contact: Contact) {
    contacts.push({
        ...contact,
        id: String(++cId)
    });
    return contacts[contacts.length - 1];
}

export async function deleteContact(id: string) {
    const index = contacts.findIndex((c) => c.id === id);
    if (index !== -1) {
        contacts.splice(index, 1);
    }
}



