import { ReactNode } from "react";
import { Box } from "@mui/material";
import SideNavigation from "../components/sideNavigation";

const Layout = ({ children }) => {
    return (
        <Box
            sx={{
                backgroundColor: "#5ACCCC",
                display: "flex",
                flexDirection: {
                    xs: "column",
                    lg: "row",
                },
                color: "white",
                padding: 3,
                gap: 3,
                overflowY: "hidden",
                height: "100vh",
            }}
        >
            <SideNavigation />
            <Box sx={{ width: "100%", overflowY: "scroll" }}>{children}</Box>
        </Box>
    );
};

export default Layout;
