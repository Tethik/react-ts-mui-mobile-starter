import { Box, Paper } from "@mui/material";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import { HomePage } from "./HomePage";
import { Leaderboard } from "./Leaderboard";
import { Navbar } from "./Navbar";
import { SampleListPage } from "./SampleListPage";

function App() {
  return (
    <Box>
      <BrowserRouter>
        <Routes>
          <Route path="/">
            <Route index element={<HomePage />} />
            <Route path="/leaderboard" element={<Leaderboard />} />
            <Route path="/tasks" element={<SampleListPage />} />
            {/* //   <Route path=":teamId" element={<Team />} />
            //   <Route path="new" element={<NewTeamForm />} />
            //   <Route index element={<LeagueStandings />} />
            // </Route> */}
          </Route>
        </Routes>
        <Paper sx={{ position: "fixed", bottom: 0, left: 0, right: 0 }} elevation={3}>
          <Navbar />
        </Paper>
      </BrowserRouter>
    </Box>
  );
}

export default App;
