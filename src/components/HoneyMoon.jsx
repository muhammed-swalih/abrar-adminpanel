import React, { useState } from "react";
import bg from "../assets/bg.png";
function HoneyMoon() {
  const [title, setTitle] = useState("");
  const [price, setPrice] = useState("");
  const [days, setDays] = useState("");
  const [special, setSpecial] = useState("");
  const [description, setDescription] = useState("");
  const [testImage, setImage] = useState(null);

  const handleSubmit = async (event) => {
    if (
      title.length === 0 ||
      price.length === 0 ||
      days.length === 0 ||
      special.length === 0 ||
      description.length === 0 ||
      testImage.length === 0
    ) {
      alert("please fill the required fields");
    } else {
      event.preventDefault();
      const formData = new FormData();
      formData.append("title", title);
      formData.append("price", price);
      formData.append("days", days);
      formData.append("pic", testImage);
      formData.append("special", special);
      formData.append("description", description);

      try {
        const response = await fetch(
          "https://wings-52gz.onrender.com/packages",
          {
            method: "POST",
            body: formData,
          }
        );
        const data = await response.json();
        console.log(data);
        alert("New Destiantion Added Successfully");
      } catch (error) {
        console.error(error);
      }
      console.log(formData);
    }
  };

  return (
    <div
      className=" w-full min-h-screen h-auto bg-gray-900 bg-cover pt-16"
      style={{ backgroundImage: `url(${bg})` }}
    >
      <h1 className="uppercase text-2xl font-medium text-white text-center ">
        add tour package
      </h1>
      <hr className=" my-3 w-60 mx-auto" />
      <div className=" w-[1150px]  flex flex-col gap-3">
        <form
          onSubmit={handleSubmit}
          className=" shadow-md rounded pl-10  pt-6 pb-8 mb-4"
        >
          <div className="mb-4 my-2">
            <label
              className="block text-lg text-gray-400  font-bold mb-2"
              htmlFor="place"
            >
              Place:
            </label>
            <input
              className="h-auto rounded-3xl pl-5 bg-transparent text-lg shadow appearance-none border rounded w-3/6 py-2 px-3 text-white leading-tight focus:outline-none focus:shadow-outline"
              id="place"
              type="text"
              placeholder="Enter place name"
              value={title}
              onChange={(event) => setTitle(event.target.value)}
            />
          </div>
          <div className="mb-4 my-2">
            <label
              className="block text-lg text-gray-400  font-bold mb-2"
              htmlFor="place"
            >
              Special Destination:
            </label>
            <input
              className="h-auto rounded-3xl pl-5 bg-transparent text-lg shadow appearance-none border rounded w-3/6 py-2 px-3 text-white leading-tight focus:outline-none focus:shadow-outline"
              id="place"
              type="text"
              placeholder="Enter place name"
              value={special}
              onChange={(event) => setSpecial(event.target.value)}
            />
          </div>

          <div className="mb-4 my-2">
            <label
              className="block text-gray-400 text-lg font-bold mb-2"
              htmlFor="price"
            >
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
            <label
              className=" block text-gray-400 text-lg font-bold mb-2"
              htmlFor="days"
            >
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
            <label
              className="block text-gray-400 text-lg font-bold mb-2"
              htmlFor="days"
            >
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
            <label
              className="block text-gray-400 text-lg font-bold mb-5"
              htmlFor="image"
            >
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
  );
}

export default HoneyMoon;
