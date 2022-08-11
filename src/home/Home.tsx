import React, { useState } from 'react';

import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';

import Toolbar from '@mui/material/Toolbar';
import Container from '@mui/material/Container';
import Handyman from '@mui/icons-material/Handyman';
import Forum from '@mui/icons-material/Forum';
import RocketLaunch from '@mui/icons-material/RocketLaunch';
import Autorenew from '@mui/icons-material/Autorenew';

import Highlight from './Highlight';
import css from './home.css';
import Header from '../header/Header';
import Navigation from '../navigation/Navigation';
import LogoRound from '../header/LogoRound';
import RotateText from '../header/RotateText';
import { solarized } from '../theme/colors';

export default function Home() {
    const [open, setOpen] = useState(false);

    const handleOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    return (
        <Box sx={{ flexGrow: 1, backgroundColor: solarized.base03 }}>
            <Header transparent={true} open={open} handleOpen={handleOpen} handleClose={handleClose} />
            <Navigation open={open} handleOpen={handleOpen} handleClose={handleClose} />
            <Box
                display="flex"
                justifyContent="center"
                alignItems="center"
                minHeight="100vh"
            >
                <Container sx={{ mt: 4 }}>
                    <Toolbar />
                    <Grid
                        container
                        spacing={4}
                    >
                        <Grid sx={{ justifyContent: "center", display: "flex", alignItems: "center", m: 2 }} item xs={12}>
                            <Box sx={{ zIndex: 1, position: "absolute" }}>
                                <LogoRound width="180px" />
                            </Box>
                            <Box className={css.rotate}>
                                <RotateText color={solarized.base01} width="264px" />
                            </Box>
                        </Grid>
                        <Grid item xs={12} md={6}>
                            <Highlight href="/docs/build/build" heading="Build" desc="Build an app for your Tidbyt" icon={<Handyman sx={{ fontSize: 48 }} />} />
                        </Grid>
                        <Grid item xs={12} md={6}>
                            <Highlight href="/docs/publish/publish" heading="Publish" desc="Publish your app for all Tidbyt users" icon={<RocketLaunch sx={{ fontSize: 48 }} />} />
                        </Grid>
                        <Grid item xs={12} md={6}>
                            <Highlight href="/docs/integrate/integrate" heading="Integrate" desc="Integrate with the Tidbyt API" icon={<Autorenew sx={{ fontSize: 48 }} />} />
                        </Grid>
                        <Grid item xs={12} md={6}>
                            <Highlight href="/docs/overview/overview" heading="Socialize" desc="Learn from the Tidbyt Community" icon={<Forum sx={{ fontSize: 48 }} />} />
                        </Grid>
                    </Grid>
                </Container>
            </Box>
        </Box >
    )
}