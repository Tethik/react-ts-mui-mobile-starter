import PersonIcon from "@mui/icons-material/Person";
import AssignmentIcon from "@mui/icons-material/Assignment";
import HomeIcon from "@mui/icons-material/Home";
import LeaderboardIcon from "@mui/icons-material/Leaderboard";
import { BottomNavigation, BottomNavigationAction } from "@mui/material";
import { useLocation, useNavigate } from "react-router-dom";

const buttonSx = {
  color: "#ffffff",
  ":active": {
    color: "#fff",
  },
  ":hover": {
    color: "rgba(255, 255, 255, 0.16)",
  },
  "&.Mui-selected": {
    color: "rgba(255, 255, 255, 0.40)",
  },
};

export function Navbar() {
  const location = useLocation();
  const navigate = useNavigate();

  return (
    <BottomNavigation
      showLabels
      value={location.pathname}
      onChange={(_, newValue) => {
        navigate(newValue);
      }}
      sx={{
        bgcolor: "#121212",
      }}
    >
      {/* Find icons here: https://mui.com/material-ui/material-icons/ */}
      <BottomNavigationAction label="Home" icon={<HomeIcon />} value="/" sx={buttonSx} />
      <BottomNavigationAction label="Contacts" icon={<PersonIcon />} value="/contacts" sx={buttonSx} />
      <BottomNavigationAction label="Tasks" icon={<AssignmentIcon />} value="/tasks" sx={buttonSx} />
      <BottomNavigationAction label="Leaderboard" icon={<LeaderboardIcon />} value="/leaderboard" sx={buttonSx} />
    </BottomNavigation>
  );
}
