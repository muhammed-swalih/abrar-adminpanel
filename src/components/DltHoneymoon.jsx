import axios from 'axios';
import React, { useEffect, useState } from 'react'
import bg from '../assets/bg.webp'
function DltHoneymoon() {
    const [honeymoon, setHoneymoon] = useState([]);

    const fetchHoneymoon = async () => {
        const response = await axios.get('https://flygreenzholidays.onrender.com/packages/getpackages')
        setHoneymoon(response.data)

    }

    const handleDelete = (id) => {
        fetch(`https://flygreenzholidays.onrender.com/packages/deletepackages/${id}`, {
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
        <div className=' w-full min-h-screen h-auto bg-cover bg-gray-900 pt-10' style={{ backgroundImage: `url(${bg})` }}>
            <div className='  py-1'>
                <h1 className=' text-3xl uppercase text-white text-center'>delete tour packages</h1>
                <hr className=' w-80 mx-auto my-4' />
            </div>

            <div className=' w-[1150px] h-auto py-10 px-10'>

                {honeymoon.map((items) => {
                    const base64String = btoa(
                        String.fromCharCode(...new Uint32Array((items.image.data.data)))
                    )
                    return (
                        <div className=' my-10 flex justify-start gap-[220px]'>
                            <div className=' rounded-3xl w-2/5 h-60 bg-white'>
                                <img className=' rounded-3xl w-full h-full object-cover' src={`data:image/jpeg;base64,${base64String}`} alt="" />
                            </div>
                            <div className=' my-auto'>
                                <h1 className=' my-2 text-white text-4xl'>{items ? items.place : "place"}</h1>
                                <h1 className=' my-2 text-white text-2xl'>{items ? items.price : "price"}</h1>
                                <button onClick={() => {
                                    console.log(items._id);
                                    handleDelete(items._id)
                                }} className=' rounded-3xl w-auto px-5 py-2 bg-red-500 text-lg'>Delete</button>
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default DltHoneymoon