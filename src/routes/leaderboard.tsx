
import { Paper, Typography } from "@mui/material";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import ListItemText from "@mui/material/ListItemText";
import { Container } from "@mui/system";
import { useLoaderData } from "react-router-dom";

async function loader() {
  const players = ["bob", "alice", "eve", "mallory", "steve"];
  return { players };
}

export function Leaderboard() {
  const cool = ["🥇", "🥈", "🥉"];

  const { players } = useLoaderData() as { players: string[] };

  return (
    <Container>
      <Typography variant={"h3"}>Leaderboard</Typography>
      <Paper elevation={3}>
        <List sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}>
          {players.map((player, i) => (
            <ListItem>
              <ListItemAvatar>{cool.at(i) || ""}</ListItemAvatar>
              <ListItemText primary={player} secondary="123 points" />
            </ListItem>
          ))}
        </List>
      </Paper>
    </Container>
  );
}

Leaderboard.loader = loader;
