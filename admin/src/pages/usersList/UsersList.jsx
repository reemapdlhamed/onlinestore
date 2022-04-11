import React from 'react'
import Sidebar from '../../components/sidebar/Sidebar';
import { Link } from "react-router-dom";
import { DataGrid } from "@mui/x-data-grid";
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { getUsers } from '../../redux/apiCalls';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import { Button } from '@mui/material';
import { display } from '@mui/system';


const UsersList = () => {

    const dispatch = useDispatch();
    const users = useSelector((state) => state.users.users);

    useEffect(() => {
        getUsers(dispatch);
    }, [dispatch]);

    const handleDelete = (id) => {
        // deleteOrder(id, dispatch);
    };

    const columns = [
        { field: "_id", headerName: "ID", width: 220 },
        { field: "name", headerName: "Name", width: 220 },
        { field: "email", headerName: "email", width: 220 },
        { field: "role", headerName: "role", width: 220 },
    
        {
            field: "action",
            headerName: "Action",
            width: 150,
            renderCell: (params) => {
                return (
                    <>
                        <Link to={"/orders/" + params.row._id}>
                            <button className="productListEdit">Edit</button>
                        </Link>
                        <DeleteOutlineIcon
                            className="productListDelete"
                            onClick={() => handleDelete(params.row._id)}
                        />
                    </>
                );
            },
        },
    ];

    return (
        <div className="list">
            <Sidebar />
            <div className="listContainer">
                <DataGrid
                    rows={users}
                    disableSelectionOnClick
                    columns={columns}
                    getRowId={(row) => row._id}
                    pageSize={8}
                    rowsPerPageOptions={[8]}
                    rowHeight={120}
                    sx={{

                        boxShadow: 2,
                        border: 2,
                        borderColor: 'rgb(230, 227, 227);',
                        margin: '1em',
                    }}
                />

            </div>
        </div>
    )
}

export default UsersList