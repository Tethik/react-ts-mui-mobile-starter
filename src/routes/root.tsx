import { Box, Paper } from "@mui/material";
import { Outlet } from "react-router-dom";
import { Navbar } from "./Navbar";
import "./root.css";


export function Root() {
  return (    
    <Box> 
      <Outlet />       
        <Paper sx={{ position: "fixed", bottom: 0, left: 0, right: 0 }} elevation={3}>
          <Navbar />
        </Paper>        
    </Box>    
  );
}


