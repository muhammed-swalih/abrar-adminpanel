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
        if (place.length == 0 || price.length == 0 || days.length == 0 || highlights1.length == 0 || description.length == 0 || testImage.length == 0) {
            alert('please fill the required fields')
        } else {

            event.preventDefault();
            const formData = new FormData();
            formData.append("place", place);
            formData.append("price", price);
            formData.append("days", days);
            formData.append('description', description)
            formData.append('highlights1', highlights1)
            formData.append('highlights2', highlights2)
            formData.append('highlights3', highlights3)
            formData.append('highlights4', highlights4)
            formData.append('highlights5', highlights5)
            formData.append('highlights6', highlights6)
            formData.append("testImage", testImage);

            try {
                const response = await fetch("https://flygreenzholidays.onrender.com/packages/postpackages", {
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
            <h1 className='uppercase text-2xl font-medium text-white text-center '>add tour package</h1>
            <hr className=' my-3 w-60 mx-auto' />
            <div className=' w-[1150px]  flex flex-col gap-3'>
            <form onSubmit={handleSubmit} className=" shadow-md rounded pl-10  pt-6 pb-8 mb-4">
                    <div className="mb-4 my-2">
                        <label className="block text-lg text-gray-400  font-bold mb-2" htmlFor="place">
                            Place:
                        </label>
                        <input
                            className="h-auto rounded-3xl pl-5 bg-transparent text-lg shadow appearance-none border rounded w-3/6 py-2 px-3 text-white leading-tight focus:outline-none focus:shadow-outline"
                            id="place"
                            type="text"
                            placeholder="Enter place name"
                            value={place}
                            onChange={(event) => setPlace(event.target.value)}
                        />
                    </div>

                    <div className="mb-4 my-2">
                        <label className="block text-gray-400 text-lg font-bold mb-2" htmlFor="price">
                            Price:
                        </label>
                        <input
                            className=" pl-5 h-auto rounded-3xl bg-transparent text-lg shadow appearance-none border rounded w-2/6 py-2 px-3 text-white leading-tight focus:outline-none focus:shadow-outline "
                            id="price"
                            type="text"
                            placeholder="Enter price"
                            value={price}
                            onChange={(event) => setPrice(event.target.value)}
                        />
                    </div>

                    <div className="mb-4 my-2">
                        <label className=" block text-gray-400 text-lg font-bold mb-2" htmlFor="days">
                            Days:
                        </label>
                        <input
                            className="pl-5  rounded-3xl bg-transparent text-lg shadow appearance-none border rounded w-2/6 py-2 px-3 text-white leading-tight focus:outline-none focus:shadow-outline"
                            id="days"
                            type="text"
                            placeholder="Enter number of days"
                            value={days}
                            onChange={(event) => setDays(event.target.value)}
                        />
                    </div>
                    <div className="mb-4 my-2">
                        <label className="block text-gray-400 text-lg font-bold mb-2" htmlFor="days">
                            Hightlight-1:
                        </label>
                        <input
                            className="pl-5  rounded-3xl bg-transparent text-lg shadow appearance-none border rounded w-3/6 py-2 px-3 text-white leading-tight focus:outline-none focus:shadow-outline"
                            id="Hightlights1"
                            type="text"
                            placeholder="Enter the Highlight one"
                            value={highlights1}
                            onChange={(event) => setHighlights1(event.target.value)}
                        />
                    </div>
                    <div className="mb-4 my-2">
                        <label className="block text-gray-400 text-lg font-bold mb-2" htmlFor="days">
                            Hightlight-2:
                        </label>
                        <input
                            className="pl-5  rounded-3xl bg-transparent text-lg shadow appearance-none border rounded w-3/6 py-2 px-3 text-white leading-tight focus:outline-none focus:shadow-outline"
                            id="Hightlights1"
                            type="text"
                            placeholder="Enter the Highlight one"
                            value={highlights2}
                            onChange={(event) => setHighlights2(event.target.value)}
                        />
                    </div>
                    <div className="mb-4 my-2">
                        <label className="block text-gray-400 text-lg font-bold mb-2" htmlFor="days">
                            Hightlight-3:
                        </label>
                        <input
                            className="pl-5  rounded-3xl bg-transparent text-lg shadow appearance-none border rounded w-3/6 py-2 px-3 text-white leading-tight focus:outline-none focus:shadow-outline"
                            id="Hightlights1"
                            type="text"
                            placeholder="Enter the Highlight one"
                            value={highlights3}
                            onChange={(event) => setHighlights3(event.target.value)}
                        />
                    </div>
                    <div className="mb-4 my-2">
                        <label className="block text-gray-400 text-lg font-bold mb-2" htmlFor="days">
                            Hightlight-4:
                        </label>
                        <input
                            className="pl-5  rounded-3xl bg-transparent text-lg shadow appearance-none border rounded w-3/6 py-2 px-3 text-white leading-tight focus:outline-none focus:shadow-outline"
                            id="Hightlights1"
                            type="text"
                            placeholder="Enter the Highlight one"
                            value={highlights4}
                            onChange={(event) => setHighlights4(event.target.value)}
                        />
                    </div>
                    <div className="mb-4 my-2">
                        <label className="block text-gray-400 text-lg font-bold mb-2" htmlFor="days">
                            Hightlight-5:
                        </label>
                        <input
                            className="pl-5  rounded-3xl bg-transparent text-lg shadow appearance-none border rounded w-3/6 py-2 px-3 text-white leading-tight focus:outline-none focus:shadow-outline"
                            id="Hightlights1"
                            type="text"
                            placeholder="Enter the Highlight one"
                            value={highlights5}
                            onChange={(event) => setHighlights5(event.target.value)}
                        />
                    </div>
                    <div className="mb-4 my-2">
                        <label className="block text-gray-400 text-lg font-bold mb-2" htmlFor="days">
                            Hightlight-6:
                        </label>
                        <input
                            className="pl-5  rounded-3xl bg-transparent text-lg shadow appearance-none border rounded w-3/6 py-2 px-3 text-white leading-tight focus:outline-none focus:shadow-outline"
                            id="Hightlights1"
                            type="text"
                            placeholder="Enter the Highlight one"
                            value={highlights6}
                            onChange={(event) => setHighlights6(event.target.value)}
                        />
                    </div>
                    <div className="mb-4 my-2">
                        <label className="block text-gray-400 text-lg font-bold mb-2" htmlFor="days">
                            Description:
                        </label>
                        <input
                            className="pl-5  rounded-3xl bg-transparent text-lg shadow appearance-none border rounded w-3/6 py-2 px-3 text-white leading-tight focus:outline-none focus:shadow-outline"
                            id="description"
                            type="text"
                            placeholder="Enter the Highlight one"
                            value={description}
                            onChange={(event) => setDescription(event.target.value)}
                        />
                    </div>


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