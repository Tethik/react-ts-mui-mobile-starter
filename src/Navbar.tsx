import AssignmentIcon from "@mui/icons-material/Assignment";
import LeaderboardIcon from "@mui/icons-material/Leaderboard";
import LocalGroceryStoreIcon from "@mui/icons-material/LocalGroceryStore";
import { BottomNavigation, BottomNavigationAction } from "@mui/material";
import { useLocation, useNavigate } from "react-router-dom";

export function Navbar() {
  const location = useLocation();
  let navigate = useNavigate();

  return (
    <BottomNavigation
      showLabels
      value={location.pathname}
      onChange={(event, newValue) => {
        navigate(newValue);
      }}
    >
      <BottomNavigationAction label="Home" icon={<AssignmentIcon />} value="/" />
      <BottomNavigationAction label="Tasks" icon={<LocalGroceryStoreIcon />} value="/tasks" />
      <BottomNavigationAction label="Leaderboard" icon={<LeaderboardIcon />} value="/leaderboard" />
    </BottomNavigation>
  );
}
