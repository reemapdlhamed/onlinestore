// import {
//     CalendarToday,
//     LocationSearching,
//     MailOutline,
//     PermIdentity,
//     PhoneAndroid,
//     Publish,
//   } from "@material-ui/icons";
import { Link, useLocation } from "react-router-dom";
import Sidebar from '../../components/sidebar/Sidebar';
import { useSelector } from "react-redux";
import { useState, useEffect } from "react";
import { updateProduct } from "../../redux/apiCalls";
import { useDispatch } from "react-redux";
import "./product.scss"
import { ImageList } from "@mui/material";

export default function Product() {
    const location = useLocation();
    const productId = location.pathname.split("/")[2];
    const dispatch = useDispatch();
    // const [productEdit, setProductEdit] = useState({ name: "", price: "", quantity: "", description: "", rating: "", properties: {} });
    const [productEdit, setProductEdit] = useState({});
    const [image,setImage] = useState("");
    const handleChange = (e) => {
        setProductEdit((prev) => {
            return { ...prev, [e.target.name]: e.target.value };
        });
    };

    const handleImageChange = (e) =>{
        setImage(e.target.value);
        // setProductEdit({...productEdit,images:[e.target.value]})
    }


    const product = useSelector((state) =>
        state.product.products.data.find((product) => product._id === productId)
    );

    useEffect(() => {
        console.log("product", product);
        setProductEdit(product);
        setImage(product.images[0]);
    }, [productId]);


    let handleSubmit = async (e) => {
        e.preventDefault();
        // let product = { ...inputs, category_id: category, properties: properties, images: [image] };
        console.dir(productEdit);
        let product = {...productEdit,images:[image]};
        console.log("finalPro",product)

        try {
            updateProduct(product._id, product, dispatch);
        } catch (err) {
            console.log(err);
        }
    };




    return (
        <div className="list">
            <Sidebar />
            <div className="dataContainer">
                <div className="user">
                    <div className="userContainer">
                        <div className="userShow">

                            <div className="userShowBottom">
                                <span className="userShowTitle">Product Details</span>
                                <div className="userShowInfo">
                                <img src={product.images[0]} style={{height:"150px"}} alt="" />
                                </div>
                                <div className="userShowInfo">
                                    <span className="userShowInfoTitle"><strong>Name: </strong>{product.name}</span>
                                </div>
                                <div className="userShowInfo">
                                    <span className="userShowInfoTitle"><strong>Brand: </strong>{product.brand}</span>
                                </div>
                                <div className="userShowInfo">
                                    <span className="userShowInfoTitle"><strong>Description: </strong>{product.description}</span>
                                </div>
                                <div className="userShowInfo">
                                    <span className="userShowInfoTitle"><strong>Price: </strong>{product.price}</span>
                                </div>
                                <div className="userShowInfo">
                                    <span className="userShowInfoTitle"><strong>Quantity: </strong>{product.quantity}</span>
                                </div>
                                <div className="userShowInfo">
                                    <span className="userShowInfoTitle"><strong>Rating: </strong>{product.rating}</span>
                                </div>
                                <span className="userShowInfoTitle"><strong>Properties: </strong></span>
                                <div className="userShowInfo productProperties">

                                    <div className="productProperties">
                                        {Object.keys(product.properties).map(p => {
                                            return <p><strong>{p}: </strong> {product.properties[p]}</p>
                                        })}
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="userUpdate">
                            <span className="userUpdateTitle">Edit</span>
                            <form className="userUpdateForm">
                                <div className="userUpdateLeft">
                                    <div className="userUpdateItem">
                                        <label>Name</label>
                                        <input
                                            type="text"
                                            className="userUpdateInput"
                                            value={productEdit.name}
                                            onChange={handleChange}
                                            name="name"
                                        />
                                    </div>
                                    <div className="userUpdateItem">
                                        <label>Brand</label>
                                        <input
                                            type="text"
                                            className="userUpdateInput"
                                            value={productEdit.brand}
                                            onChange={handleChange}
                                            name="brand"
                                        />
                                    </div>
                                    <div className="userUpdateItem">
                                        <label>Description</label>
                                        <input
                                            type="text"
                                            className="userUpdateInput"
                                            value={productEdit.description}
                                            onChange={handleChange}
                                            name="description"
                                        />
                                    </div>
                                    <div className="userUpdateItem">
                                        <label>Price</label>
                                        <input
                                            type="text"
                                            className="userUpdateInput"
                                            value={productEdit.price}
                                            onChange={handleChange}
                                            name="price"
                                        />
                                    </div>
                                    <div className="userUpdateItem">
                                        <label>Quantity</label>
                                        <input
                                            type="text"
                                            className="userUpdateInput"
                                            value={productEdit.quantity}
                                            onChange={handleChange}
                                            name="quantity"
                                        />
                                    </div>
                                    <div className="userUpdateItem">
                                        <label>Rating</label>
                                        <input
                                            type="text"
                                            className="userUpdateInput"
                                            value={productEdit.rating}
                                            onChange={handleChange}
                                            name="rating"
                                        />
                                    </div>

                                    <div className="userUpdateItem">
                                        <label>Image URL</label>
                                        <input
                                            type="text"
                                            className="userUpdateInput"
                                            value={image}
                                            onChange={handleImageChange}
                                            name="quantity"
                                        />
                                    </div>


                                    <button className="userUpdateButton" onClick={handleSubmit}>Update</button>
                                </div>

                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
