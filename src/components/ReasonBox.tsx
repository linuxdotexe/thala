// import { useState } from "react";
"use client";

import { useState, useId } from "react";
import Trick from "@/components/Trick";

export default function ReasonBox() {

    const id = useId();

    const [formData, setFormData] = useState({
        reason: ""
    });
    const [submitData, setSubmitData] = useState({
        reason: ""
    });

    function handleChange(event: React.ChangeEvent<HTMLInputElement>) {
        setFormData(prevFormData => {
            return {
                ...prevFormData,
                [event.target.name]: event.target.value
            }
        })
    }

    function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
        event.preventDefault();
        setSubmitData(() => ({
            ...formData,
            reason: formData.reason.trim()
        }));
        console.log(submitData);
    }

    return (
        <>
        <form
            className="flex flex-col justify-center border-2 border-yellow-600 p-10 m-3 rounded-3xl"
            onSubmit={handleSubmit}
        >
            <label
                htmlFor={id + "-reason"}
                className="text-3xl text-center m-3"
            >
                Go ahead, say something...
            </label>
            <div className="w-screen max-w-[70vw] flex justify-center
                transition duration-300
                border-4 border-transparent
                rounded-lg
                focus-within:border-amber-800
                focus-within:bg-amber-800">
                <input
                    type="text"
                    placeholder="type your reason..."
                    className="w-2/3
                    text-xl m-0 p-3
                    placeholder-gray-200
                    placeholder-opacity-50
                    rounded-l-lg
                    bg-transparent
                    border-2 border-yellow-500

                    hover:bg-yellow-500
                    hover:border-transparent
                    hover:shadow-amber-800
                    hover:text-black
                    hover:shadow-md
                    hover:placeholder-gray-700
                    focus:outline-none"
                    onChange={handleChange}
                    value={formData.reason}
                    name="reason"
                    id={id + "-reason"}
                />
                {/* <div className="w-0.5 bg-white"></div> */}
                <button
                    type="submit"
                    className="w-1/3 m-0 p-3
                    rounded-r-lg text-xl
                    border-2 border-blue-500
                    border-l-0
                    bg-sky-700
                    hover:bg-blue-500
                    hover:border-transparent
                    hover:shadow-sky-800
                    hover:shadow-md
                    hover:placeholder-gray-700
                    overflow-clip"
                >
                    Submit
                </button>
            </div>
        </form>
        {submitData.reason &&
        <Trick
            text={submitData.reason}
        />}
        </>
    )
}