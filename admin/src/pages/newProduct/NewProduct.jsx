import "./newProduct.scss";
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import DriveFolderUploadOutlinedIcon from "@mui/icons-material/DriveFolderUploadOutlined";
import { useState } from "react";
import { addProduct } from "../../redux/apiCalls";
import { useDispatch } from "react-redux";

const NewProduct = () => {
    const [file, setFile] = useState("");
    const [name, setName] = useState("");
    const [brand, setBrand] = useState("");
    const [inputs, setInputs] = useState({});
    const dispatch = useDispatch();

    const handleChange = (e) => {
        setInputs((prev) => {
            return { ...prev, [e.target.name]: e.target.value };
        });
    };

    let handleSubmit = async (e) => {
        let product = {...inputs,properties:{Memory:"128 GB"},images:["https://m.media-amazon.com/images/I/717nsZxgMaL._AC_SX569_.jpg"]};
        console.log(product);
        e.preventDefault();
        try {
            addProduct(product, dispatch);
        } catch (err) {
            console.log(err);
        }
    };

    return (
        <div className="new">
            <Sidebar />
            <div className="newContainer">
                <Navbar />
                <div className="top">
                    <h1>Add new Product</h1>
                </div>
                <div className="bottom">
                    <div className="left">
                        <img
                            src={
                                file
                                    ? URL.createObjectURL(file)
                                    : "https://icon-library.com/images/no-image-icon/no-image-icon-0.jpg"
                            }
                            alt=""
                        />
                    </div>
                    <div className="right">
                        <form onSubmit={handleSubmit}>
                            <div className="formInput">
                                <label htmlFor="file">
                                    Image: <DriveFolderUploadOutlinedIcon className="icon" />
                                </label>
                                <input
                                    type="file"
                                    id="file"
                                    onChange={(e) => setFile(e.target.files[0])}
                                    style={{ display: "none" }}
                                />
                            </div>

                            <div className="formInput">
                                <label>Name</label>
                                <input type="text" placeholder="Galaxy S22" name="name"  onChange={handleChange}/>
                            </div>

                            <div className="formInput">
                                <label>Brand</label>
                                <input type="text" placeholder="Samsung" name="brand"   onChange={handleChange}/>
                              
                            </div>

                            <div className="formInput">
                                <label>Description</label>
                                <input type="text" name="description"  onChange={handleChange}/>
                            </div>

                            <div className="formInput">
                                <label>Properties</label>
                                <input type="text" name="properties"  onChange={handleChange}/>
                            </div>

                            <div className="formInput">
                                <label>Category Id</label>
                                <input type="text" name="category_id"  onChange={handleChange}/>
                            </div>

                            <div className="formInput">
                                <label>Quantity</label>
                                <input type="number" placeholder="1" name="quantity"  onChange={handleChange}/>
                            </div>


                            <div className="formInput">
                                <label>Price</label>
                                <input type="number" placeholder="999" name="price"  onChange={handleChange}/>
                            </div>

                            <div className="formInput">
                                <label>image url</label>
                                <input type="text" name="image"  onChange={handleChange}/>
                            </div>




                            <button type="submit">Add</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default NewProduct;
