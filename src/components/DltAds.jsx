import axios from 'axios';
import React, { useEffect, useState } from 'react'
import bg from '../assets/bg.webp'
function DltHoneymoon() {
    const [honeymoon, setHoneymoon] = useState([]);

    const fetchHoneymoon = async () => {
        const response = await axios.get('https://wings-52gz.onrender.com/ads')
        setHoneymoon(response.data)

    }

    const handleDelete = (id) => {
        fetch(`https://wings-52gz.onrender.com/ads/${id}`, {
            method: "DELETE"
        })
            .then((response) => response.json())
            .then((result) => {
                // Remove the deleted item from the data array
                setHoneymoon(honeymoon.filter((item) => item.id !== id));
            })
            .catch((error) => console.error(error));
    }

    useEffect(() => {
        fetchHoneymoon();

    }, [])


    return (
        <div className=' w-full min-h-screen h-auto bg-cover bg-gray-900 py-10' style={{ backgroundImage: `url(${bg})` }}>
 
            <div className=' w-[1150px] h-auto  px-10'>

                {honeymoon.map((items,index) => {
                    return (
                        <div key={index} className=' my-[100px] flex justify-start gap-10 '>
                            <div className=' rounded-3xl w-80 h-80 bg-white'>
                                <img className=' rounded-3xl w-full h-full object-cover' src={`${items.picUrl}`} alt="" />
                            </div>
                            <div className=' my-auto'>
                              
                                <button onClick={()=>{
                                    console.log(items._id);
                                    handleDelete(items._id)
                                    
                                }} className=' rounded-3xl w-auto px-10 py-2 bg-red-500 text-lg'>Delete</button>
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default DltHoneymoon