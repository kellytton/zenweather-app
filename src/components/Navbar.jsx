import { Box, Typography } from "@mui/material";
import React from "react";

function Navbar() {
    // Handle minimize action
    const handleMinimize = () => {
        window.electron.minimizeApp(); // Minimize the window
    };

    // Handle close action
    const handleClose = () => {
        window.electron.closeApp(); // Close the window
    };

    return (
        <Box
            sx={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                position: 'relative',
            }}
            className="drag"
        >
            {/* Title - Left */}
            <Typography variant="h1"
                sx={(theme) => ({
                    color: theme.palette.text.primary
                })}
            >
                sunnyside
            </Typography>

            {/* Centered Nav */}
            <Box
                sx={(theme) => ({
                    position: 'absolute',
                    left: '50%',
                    transform: 'translateX(-50%)',
                    display: 'flex',
                    gap: "30px",
                    backgroundColor: theme.palette.background.paper,
                })}
                className="nav"
            >
                <a href="Home" className="nav-buttons no-drag">
                    <Typography
                        variant="h3"
                        sx={(theme) => ({
                            color: theme.palette.text.primary
                        })}
                    >
                        Home
                    </Typography>
                </a>
                <a href="Forecast" className="nav-buttons no-drag">
                    <Typography
                        variant="h3"
                        sx={(theme) => ({
                            color: theme.palette.text.primary
                        })}
                    >
                        Forecast
                    </Typography>
                </a>
            </Box>

            {/* Window Buttons - Right */}
            <Box
                sx={{
                    display: 'flex',
                    gap: '15px'
                }}
            >
                <a href="" className="minimize-button no-drag" onClick={handleMinimize}>
                    <p className="minimize-button-text">_</p>
                </a>
                <a href="" className="exit-button no-drag" onClick={handleClose}>
                    <p className="exit-button-text">X</p>
                </a>
            </Box>
        </Box>
    );
}

export default Navbar;
