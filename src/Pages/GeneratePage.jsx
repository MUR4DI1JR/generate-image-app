import React, {useState} from 'react';
import defaultImage from '../assets/image/default-image.jpg';
import axios from "../axios";
import {useDispatch} from "react-redux";
import {addImageItem} from "../redux/slices/image";
import {toast} from "react-toastify";

const GeneratePage = () => {
    const [prompt, setPrompt] = useState('');
    const [imageUrl, setImageUrl] = useState('');
    const [loader, setLoader] = useState(false);
    const [name, setName] = useState('');
    const [description, setDescription] = useState('');
    const dispatch = useDispatch();

    const generateHandler = async () =>{
        try {
            setLoader(true);

            const response = await axios.post('/generate-image', {prompt});
            const image = response.data.image;

            setTimeout(async () =>{
                setImageUrl(image);
                await setLoader(false);
            }, 3000);
        }catch (e) {
            console.log(e);
        }
    }

    const addHandler = () =>{
        const newItem = {
            id: Date.now(),
            name,
            imageUrl,
            description
        }

        // const newItems = JSON.parse(localStorage.getItem('items')) || [];
        // newItems.push(newItem);
        //
        // localStorage.setItem('items', JSON.stringify(newItems));
        // dispatch(addImageItem(newItem));

        axios.post('https://63ee03d35e9f1583bdba5eda.mockapi.io/items', newItem).then(() => {
            toast.success("item added");
        })

    }


    return (
        <div className="flex justify-center pt-10 mx-auto">
            <div className="flex w-[60%] rounded-3xl border shadow-2xl relative">
                {
                    loader ?
                        <div className="absolute top-[50%] left-[30%]" role="status">
                            <svg aria-hidden="true"
                                 className="inline w-8 h-8 mr-2 text-gray-200 animate-spin dark:text-gray-600 fill-red-600"
                                 viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                                    fill="currentColor"/>
                                <path
                                    d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                                    fill="currentFill"/>
                            </svg>
                            <span className="sr-only">Loading...</span>
                        </div>
                        :
                        null
                }
                <img className="w-[450px] rounded-bl-3xl rounded-tl-3xl mr-2" src={imageUrl ? imageUrl : defaultImage} alt="car"/>
                <div className="py-2 mr-2">
                    <p>Prompt</p>
                    <div className="flex mb-2">
                        <input
                            value={prompt}
                            onChange={(e) => setPrompt(e.target.value)}
                            className="w-full outline-0 py-2 px-4 border mr-2 border-gray-600 rounded" type="text"
                        />
                        <button
                            onClick={generateHandler}
                            className={`uppercase text-white py-2 px-4 rounded-3xl ${prompt ? 'bg-red-600' : 'bg-gray-600'}`}
                            disabled={!prompt}
                        >generate</button>
                    </div>
                    <div>
                        <input
                            type="text"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            className="w-full mb-2 outline-0 py-2 px-4 border border-gray-600 rounded"
                            placeholder="Enter name image..."
                        />
                        <textarea
                            value={description}
                            onChange={(e) => setDescription(e.target.value)}
                            className="w-full outline-0 border border-gray-600 rounded"
                            placeholder="Description..."
                            name=""
                            id=""
                            cols="30"
                            rows="10"
                        />
                        <button
                            disabled={!name}
                            onClick={addHandler}
                            className={`uppercase text-white py-2 px-4 rounded-3xl ${name ? 'bg-red-600' : 'bg-gray-600'}`}>add</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default GeneratePage;