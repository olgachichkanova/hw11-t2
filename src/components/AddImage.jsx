import { useState } from "react";
import { useDispatch } from "react-redux";
import { addImage } from "../slices/images";

const AddImage = () => {
    const [data, setData] = useState('')
    const dispatch = useDispatch();
    const handleAdd = (e) => {
        e.preventDefault();
        dispatch(addImage(data))
    }
    return (
        <div className="container add_img">
         <input type="file" id="file-input" name="img" onChange={e => setData(URL.createObjectURL(e.target.files[0]))}/>
         <button onClick={(e) => handleAdd(e)}>Add</button>
        </div>
    )
}

export default AddImage;