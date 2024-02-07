"use client";
import { useState } from 'react'
import UserNameEmail from './UserNameEmail'
import DobGender from './DobGender'
import Address from './Address'

const MainForm = () => {
    const [data, setData] = useState({
        name: "",
        email: "",
        dob: "",
        gender: "male",
        address: "",
    })

    const handleChange = (event) => {
        const { name, value } = event.target;
        setData({
            ...data,
            [name]: value,
        });
    };

    const [activeTab, setActiveTab] = useState(0)

    const formElements = [
        <UserNameEmail data={data} handleChange={handleChange} />,
        <DobGender data={data} handleChange={handleChange} />,
        <Address data={data} setData={setData} />
    ]

    return (
        <div className='min-h-screen flex flex-col justify-center bg-white'>
            
            
            <div>
                {
                    formElements[activeTab]
                }
            </div>
            <div className='flex flex-wrap gap-x-6 mx-auto mb-10'>
                <button
                    disabled={activeTab === 0 ? "disabled" : ""}
                    onClick={() => setActiveTab(prev => prev - 1)}
                    className={`px-4 py-2 rounded-xl bg-blue-600 text-white ${activeTab === 0 ? "opacity-50 bg-slate-600" : "opacity-100"}`}>
                    Back
                </button>
                <button
                    disabled={activeTab === formElements.length - 1 ? "disabled" : ""}
                    onClick={() => setActiveTab(prev => prev + 1)}
                    className={`px-4 py-2 rounded-xl bg-blue-600 text-white ${activeTab === formElements.length - 1 ? "opacity-50 bg-slate-600" : "opacity-100"}`}>Next</button>
                {
                    activeTab === formElements.length - 1 ? <button className='px-4 py-2 rounded-xl bg-blue-600 text-white' onClick={() => console.log(data)}>Submit</button> : null
                }
            </div>
        </div>
    )
}

export default MainForm
