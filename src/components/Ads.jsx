import React, { useState } from 'react'
import bg from '../assets/bg.png'
function HoneyMoon() {

    const [place, setPlace] = useState("");
    const [price, setPrice] = useState("");
    const [days, setDays] = useState("");
    const [highlights1, setHighlights1] = useState("");
    const [highlights2, setHighlights2] = useState("");
    const [highlights3, setHighlights3] = useState("");
    const [highlights4, setHighlights4] = useState("");
    const [highlights5, setHighlights5] = useState("");
    const [highlights6, setHighlights6] = useState("");
    const [description, setDescription] = useState("");
    const [testImage, setImage] = useState(null);

    const handleSubmit = async (event) => {
        if(testImage.length ==0){
            alert ('please fill the required fields')
        }else {

            event.preventDefault();
            const formData = new FormData();
            formData.append("testImage", testImage);
    
            try {
                const response = await fetch("https://flygreenzholidays.onrender.com/packages/ads", {
                    method: "POST",
                    body: formData,
                });
                const data = await response.json();
                console.log(data);
                alert('New Destiantion Added Successfully')
            } catch (error) {
                console.error(error);
            }
            console.log(formData);
        }
    };

    const rows = Math.max(3, Math.ceil(description.length / 50))
    return (
        <div className=' w-full min-h-screen h-auto bg-gray-900 bg-cover pt-16' style={{ backgroundImage: `url(${bg})` }}>
            <h1 className='uppercase text-2xl font-medium text-white text-center '>add ads </h1>
            <hr className=' my-3 w-60 mx-auto' />
            <div className=' w-6/6  flex flex-col gap-3'>
            <form onSubmit={handleSubmit} className=" shadow-md rounded pl-10  pt-6 pb-8 mb-4">
                   


                    <div className="mb-4 my-2">
                        <label className="block text-gray-400 text-lg font-bold mb-5" htmlFor="image">
                            Image:
                        </label>
                        <input
                            className="pl-10  rounded-3xl bg-transparent text-lg shadow appearance-none border rounded w-3/6 py-2 px-3 text-white leading-tight focus:outline-none focus:shadow-outline"
                            id="image"
                            type="file"
                            accept="image/*"
                            onChange={(event) => setImage(event.target.files[0])}
                        />
                    </div>

                    <div className=" my-2  flex items-center justify-between">
                        <button
                            className="bg-blue-500 rounded-3xl w-auto text-lg hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                            type="submit"
                        >
                            Submit
                        </button>
                    </div>
                </form>
            </div>
            
        </div>
    )
}

export default HoneyMoon