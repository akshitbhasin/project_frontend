import React from 'react';
import { Card, CardContent, Box, Typography, Grid } from "@material-ui/core";
import ProfileTable from './ProfileTable';
import BaseCard from '../../components/BaseCard/BaseCard';

const Settings = () => {

    const profile = {name : "akshit", age : 24, gender : "male", profession : "software dev"}

    return (
        <Box>
            <Card variant='outlined'>
                <CardContent>
                    <Typography variant='h3'>Settings</Typography>
                    <Box
                        sx={{
                            overflow: {
                                xs: "auto",
                                sm: "unset",
                            },
                        }}
                    ></Box>
                    <Grid container spacing={3}>
                        <Grid item xs>
                        </Grid>
                        <Grid item xs={8}>
                            <BaseCard title="Profile">
                            <ProfileTable profile={profile} />
                            </BaseCard>
                            
                        </Grid>
                        <Grid item xs>
                        </Grid>
                    </Grid>
                </CardContent>
            </Card>

        </Box>
    )
}

export default Settings