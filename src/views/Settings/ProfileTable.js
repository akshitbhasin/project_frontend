import { Table, TableBody, TableCell, TableHead, TableRow, Typography } from '@material-ui/core'
import React from 'react'

const ProfileTable = ({ profile }) => {
    function print(){
        console.log("Called Print");
    }
    return (
        <Table
            aria-label="simple table"
            sx={{
                mt: 3,
                whiteSpace: "nowrap",
            }}>
            <TableBody>
                <TableHead>
                    <TableRow>
                        
                    </TableRow>
                </TableHead>
                {Object.keys(profile).map((attribute) => (
                    <TableRow key={attribute}>
                        <TableCell>
                            <Typography
                                sx={{
                                    fontSize: "15px",
                                    fontWeight: "500",
                                }}
                                color="textSecondary" variant="h2"
                                align='center'
                            >
                                {attribute}
                            </Typography>
                        </TableCell>

                        <TableCell onClick={print}>
                            <Typography
                                variant="h6"
                                sx={{
                                    fontWeight: "600",
                                }}
                                align='center'
                            >
                                {profile[`${attribute}`]}
                            </Typography>
                        </TableCell>
                    </TableRow>
                ))}
            </TableBody>
        </Table>
    )
}

export default ProfileTable;