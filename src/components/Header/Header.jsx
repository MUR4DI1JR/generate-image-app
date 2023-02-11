import React, {useEffect, useState} from 'react';
import {Link} from "react-router-dom";
import car from '../../assets/image/8972b4027a714c091719a3b878079e46.jpg';
import {useDispatch, useSelector} from "react-redux";
import {searchItems, selectItems} from "../../redux/slices/image";

const Header = () => {
    const {items} = useSelector(selectItems);
    const [name, setName] = useState('');
    const dispatch = useDispatch();

    const searchItem = (text) => {
        setName(text);
        dispatch(searchItems(text));
    };

    console.log(items);

    // const searchItems = items.filter(item => {
    //     return item.name.toLowerCase().includes(name.toLowerCase())
    // });
    //
    // console.log(searchItems);

    return (
        <div className="h-[50px] bg-red-600 text-white container mx-auto py-[12px] px-4">
            <div className="w-[80%] mx-auto flex justify-between items-center">
                <div className="font-bold">
                    <img className="w-[30px] h-[20px]" src={car} alt="logo"/>
                </div>
                <nav>
                    <Link className="no-underline hover:underline mr-2" to="/">Home</Link>
                    <Link className="no-underline hover:underline" to="/generate-image">Generate Image</Link>
                </nav>
                <div>
                    <input
                        type="text"
                        value={name}
                        onChange={(e) => searchItem(e.target.value)}
                        className="py-[5px] rounded-[5px] outline-0 text-black "
                    />
                </div>
            </div>
        </div>
    );
};

export default Header;