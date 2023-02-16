import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {replaceState, selectItems} from "../redux/slices/image";
import {toast} from "react-toastify";
import axios from "axios";

const HomePage = () => {
    // const {items} = useSelector(selectItems);
    const dispatch = useDispatch();
    const [items, setItems] = useState([]);
    const [counter, setCounter] = useState(0);

    // useEffect(() => {
    //     if (localStorage.getItem('items')){
    //         dispatch(replaceState(JSON.parse(localStorage.getItem('items'))));
    //     }
    // }, []);

    useEffect(() => {
        try{
            axios.get('https://63ee03d35e9f1583bdba5eda.mockapi.io/items').then(res => {
                setItems(res.data);
                dispatch(replaceState(res.data));
            })
        }catch (e){
            console.log(e);
        }
    },[]);

    console.log(items);

    const onRemoveItem = (id) =>{
        const newItems = items.filter(item => item.id !== id);

        axios.delete(`https://63ee03d35e9f1583bdba5eda.mockapi.io/items/${id}`).then(() => {
            dispatch(replaceState(newItems));
            toast.success("item delete");
            setItems(newItems);
        })

        // localStorage.setItem('items', JSON.stringify(newItems));

    }
    //
    // const incrementCounter = async () => {
    //     axios.get('https://63ee03d35e9f1583bdba5eda.mockapi.io/items/1').then((res) => {
    //         const count = res.data.counter + 15;
    //         axios.put('https://63ee03d35e9f1583bdba5eda.mockapi.io/items/1', {counter: count}).then(res => {
    //             console.log(res);
    //             setCounter(counter + 15);
    //             toast.success('ok')
    //         })
    //     })
    //
    // }
    //
    // const newCounter = async () => {
    //     axios.post('https://63ee03d35e9f1583bdba5eda.mockapi.io/items', {
    //         counter,
    //         id: Date.now(),
    //     }).then(() => {
    //         toast.success('created new counter')
    //     })
    // }
    //
    // const deleteCounter = async (number) => {
    //     axios.delete(`https://63ee03d35e9f1583bdba5eda.mockapi.io/items/${number}`).then(() => {
    //         toast.success('delete')
    //     });
    //     axios.delete(`https://63ee03d35e9f1583bdba5eda.mockapi.io/items/2`).then(() => {
    //         toast.success('delete')
    //     });
    //     axios.delete(`https://63ee03d35e9f1583bdba5eda.mockapi.io/items/7`).then(() => {
    //         toast.success('delete')
    //     });
    // }
    //
    // const decrementCounter = async () => {
    //     axios.get('https://63ee03d35e9f1583bdba5eda.mockapi.io/items/1').then((res) => {
    //         const count = res.data.counter - 15;
    //         console.log(count);
    //         axios.put('https://63ee03d35e9f1583bdba5eda.mockapi.io/items/1', {counter: count}).then(res => {
    //             console.log(res);
    //             setCounter(counter - 15);
    //             toast.success('ok')
    //         })
    //     })
    // }

    if (items.length === 0){
        return (
            <p className="text-center">no items</p>
        )
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