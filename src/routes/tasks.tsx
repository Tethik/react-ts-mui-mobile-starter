import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import Avatar from "@mui/material/Avatar";
import WorkIcon from "@mui/icons-material/Work";
import { Container } from "@mui/system";
import { Paper, Typography } from "@mui/material";
import { Form, useLoaderData } from "react-router-dom";

export function TaskPage() {  
  const { tasks } = useLoaderData() as { tasks: string[] };

  return (
    <Container>
      <Typography variant={"h3"}>Tasks</Typography>
      <Paper elevation={3}>
        <List sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}>
          {tasks.map((task) => (
            <ListItem>
              <ListItemAvatar>
                <Avatar>
                  <WorkIcon />
                </Avatar>
              </ListItemAvatar>
              <ListItemText primary={task} secondary="123 points" />
            </ListItem>
          ))}
        </List>
        <Form method="post">
          <button type="submit">New</button>
        </Form>
      </Paper>
    </Container>
  );
}
