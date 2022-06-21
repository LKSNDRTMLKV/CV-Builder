import { Grid, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material';
import axios from 'axios';
import React, { useContext, useEffect } from 'react';
import { Context } from '../context/Context';
import { UserActions } from '../actions/UserActions';
import { UserServices } from '../services/UserServices';

const AdminDashboard = (props) => {

    const { users, setUsers } = useContext(Context);



    useEffect(() => {
        LoadPage();

    }, [])

    const LoadPage = (args) => {
        async function fetchData() {
            let responses = await UserActions.GetAllUsersAsync();
            if (!responses.error) {
                const allUsers = responses[0].data
                setUsers(allUsers);
            }
        }
        fetchData();
    }


    return (
        <Grid container sx={{ mt: 10 }}>
            <TableContainer>
                <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell>ID</TableCell>
                            <TableCell>Full Name</TableCell>
                            <TableCell>Username</TableCell>
                            <TableCell>Email</TableCell>
                            <TableCell>Date</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody >

                        {users && users.map((user, idx) => {
                            return (
                                <TableRow key={idx}>
                                    <TableCell>{user._id}</TableCell>
                                    <TableCell>{user.fullName}</TableCell>
                                    <TableCell>{user.username}</TableCell>
                                    <TableCell>{user.email}</TableCell>
                                    <TableCell>{user.date}</TableCell>
                                </TableRow>
                            )
                        })}
                    </TableBody>
                </Table>
            </TableContainer>


        </Grid>
    );
};

export default AdminDashboard;