import { Link, useLocation } from "react-router-dom";
import { Tooltip, IconButton, MenuItem } from '@mui/material';
import { Box, Hidden, Typography } from "@mui/material";
import homeIcon from "../../assets/icons/icon-nav-home.svg";
import scienceIcon from "../../assets/icons/icon-nav-science.svg";
import historyIcon from "../../assets/icons/icon-nav-history.svg";
import languageIcon from "../../assets/icons/icon-nav-language.svg";
import listingIcon from "../../assets/icons/icon-nav-listing.svg";

const navLinks = [
    {
        name: "Home",
        icon: homeIcon,
        link: "/",
    },
    {
        name: "Reading List",
        icon: listingIcon,
        link: "/readingList",
    },
    {
        name: "Science Books",
        icon: scienceIcon,
        link: "/scienceBooks",
    },
    {
        name: "History Books",
        icon: historyIcon,
        link: "/historyBooks",
    },
    {
        name: "Languages Books",
        icon: languageIcon,
        link: "/languages",
    },
];

const SideNavigation = () => {
    const { pathname } = useLocation();

    return (
        <Box
            sx={{
                backgroundColor: "#28B8B8",
                padding: 2,
                borderRadius: 2,
                display: "flex",
                flexDirection: {
                    xs: "row",
                    lg: "column",
                },
                alignItems: "center",
                justifyContent: "space-between",
                width: {
                    sm: "100%",
                    lg: 200,
                },
            }}
        >
            <Box
                sx={{
                    display: "flex",
                    flexDirection: {
                        xs: "row",
                        lg: "column",
                    },
                    gap: 5,
                    alignItems: {
                        xs: "center",
                        lg: "start",
                    },
                    width: "100%",
                }}
            >
                <Hidden smDown>
                    <Typography
                        variant="h5"
                        component="h1"
                        my={2}
                        fontWeight={400}
                        fontSize={18}
                    >
                        Ello Books Portal
                    </Typography>
                </Hidden>

                <Box
                    sx={{
                        py: {
                            xs: "0px",
                            lg: "16px",
                        },
                        display: "flex",
                        flexDirection: {
                            xs: "row",
                            lg: "column",
                        },
                        gap: 4,
                    }}
                >
                    {navLinks.map((item) => (
                        <Link
                            key={item.name}
                            to={item.link}
                            style={{ textDecoration: "none" }}
                        >
                            <Box
                                sx={{
                                    display: "flex",
                                    alignItems: "center",
                                    gap: 2,
                                    color: "white",
                                    textDecoration: "none",
                                }}
                            >
                                <Tooltip sx={{fontSize: "20px"}} title={item.name}>
                                    <img
                                        src={item.icon}
                                        alt={item.name}
                                        style={{
                                            width: "18px",
                                            filter: `${
                                                pathname === item.link
                                                    ? "#FABD33"
                                                    : "invert(84%)"
                                            }`,
                                        }}
                                    />
                                </Tooltip>
                                <Hidden mdDown>
                                    <Typography>{item.name}</Typography>
                                </Hidden>
                            </Box>
                        </Link>
                    ))}
                </Box>
            </Box>
        </Box>
    );
};

export default SideNavigation;
