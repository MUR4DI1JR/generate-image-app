import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {replaceState, selectItems} from "../redux/slices/image";
import {toast} from "react-toastify";

const HomePage = () => {
    const {items} = useSelector(selectItems);
    const dispatch = useDispatch();

    useEffect(() => {
        if (localStorage.getItem('items')){
            dispatch(replaceState(JSON.parse(localStorage.getItem('items'))));
        }
    }, []);

    const onRemoveItem = (id) =>{
        const newItems = items.filter(item => item.id !== id);

        localStorage.setItem('items', JSON.stringify(newItems));
        dispatch(replaceState(newItems));
        toast.success("item delete")
    }

    if (items.length === 0){
        return <p className="text-center">no items</p>
    }

    return (
        <div className="container flex flex-wrap my-4 mx-auto w-[80%]">
            {
                items.map(item => {
                    return(
                        <div key={item.id} className="relative max-w-sm mx-2 my-2 border border-gray-600 rounded overflow-hidden shadow-lg">
                            <img className="w-full" src={item.imageUrl} alt="thi is image"/>
                            <div className="px-6 py-4">
                                <div className="font-bold text-xl mb-2">{item.name}</div>
                                <p className="text-gray-700 text-base">
                                    {item.description}
                                </p>
                            </div>
                            <button onClick={() => onRemoveItem(item.id)} className="absolute right-[15px] rounded-[50%] bg-red-600 py-2 px-4 text-white top-[10px]">x</button>
                        </div>
                    )
                })
            }
        </div>
    );
};

export default HomePage;