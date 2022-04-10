import React from 'react'
import Sidebar from '../../components/sidebar/Sidebar';
import Navbar from '../../components/navbar/Navbar';
import { Link } from "react-router-dom";
import { DataGrid } from "@mui/x-data-grid";
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { getOrders,deleteOrder} from '../../redux/apiCalls';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';

const OrdersList = () => {

    const dispatch = useDispatch();
    const orders = useSelector((state) => state.order.orders);

    useEffect(() => {
        getOrders(dispatch);
    }, [dispatch]);

    const handleDelete = (id) => {
        deleteOrder(id, dispatch);
    };


    const columns = [
        { field: "_id", headerName: "ID", width: 220 },
        { field: "customerName", headerName: "Customer", width: 160, },
        { field: "phoneNumber", headerName: "Phone", width: 220 },
        { field: "orderStatus", headerName: "Order Status", width: 220 },
        { field: "totalPrice", headerName: "Price", width: 160, },
        { field: "paymentType", headerName: "Payment Type", width: 160, },
        { field: "paymentStatus", headerName: "Payment Status", width: 160, },
        {
            field: "orderItems", headerName: "items", width: 200,
            renderCell: (params) => {
                return (
                    <div className="productListItem">
                        {params.row.orderItems}

                    </div>
                );
            },
        },
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
                <Navbar />
                <DataGrid
                    rows={orders}
                    disableSelectionOnClick
                    columns={columns}
                    getRowId={(row) => row._id}
                    pageSize={10}
                    rowsPerPageOptions={[10]}

                />
            </div>
        </div>
    )
}

export default OrdersList