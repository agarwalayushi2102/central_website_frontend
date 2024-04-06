import React from 'react'
import { useState } from "react";
import TextField from "@material-ui/core";


const FormTextField = ({ fieldName, label, type, autoCompleteHint, userProfile, setUserProfile , editing }) => {
    console.log('fieldName:', fieldName);
  console.log('userProfile:', userProfile);
    return (
        <div className="mb-6">
        <label className="block text-gray-700 text-sm font-bold mb-2">
            {label}
        </label>
        <TextField
            variant={'standard'}
            fullWidth
            label={label}
            type={type}
            autoComplete={autoCompleteHint}
            value={userProfile[fieldName]}
            onChange={(e) => {setUserProfile({ ...userProfile, [fieldName]: e.target.value })}}
            style={{ marginBlock: 10 }}
            disabled={!editing}
        />
    </div>
    )
}
  
function UserNameEmail({ userProfile , setUserProfile , handleSubmit}) {
  
      const [editing,setEditing] = useState(false)
  
  
      const submitHelper = (e)=>{
  
          e.preventDefault();
  
          if(!editing){
              setEditing(true);
              return;
          }
  
          setEditing(false);
          handleSubmit();
      }

       const handleThemeChange = (e) => {
        setUserProfile({... userProfile,themeDetails : e.target.value})
    }

      
//  const UserNameEmail = (props) => {
//   const {data,handleChange} = props

    return (
        <div><div className="text-4xl font-bold mb-4 text-center">Hi There!</div>
        
        <h3 className='text-2xl font-semi-bold text-dark text-center mb-8'>Lets begin by entering some essential details about your website</h3>
        <div className="max-w-xs md:max-w-lg mx-auto">
        <form onSubmit={submitHelper} className="border-dotted border-2 border-black rounded px-8 pt-6 pb-8 mb-4 bg-gray-100">
    <h2 className="text-2xl font-bold mb-6">Club Information</h2>
        <FormTextField fieldName={'name'} 
                    label={'Club Name'} 
                    type={'text'} 
                    autoCompleteHint={''} 
                    userProfile={userProfile} 
                    setUserProfile={setUserProfile}  
                    editing={editing}/>

        <div className="mb-6">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="clubEmail">
                Club Email Id
            </label>
            <input
                className="appearance-none block w-full  text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                name="clubEmail"
                type="email"
                placeholder="Email..."
                
            />
        </div>
        <div className="mb-6">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="phoneNumber1">
                Phone Number 1
            </label>
            <input
                className="appearance-none block w-full  text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                name="phoneNumber1"
                type="text"
                placeholder="Phone Number 1..."
               
            />
        </div>
        <div className="mb-6">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="phoneNumber2">
                Phone Number 2
            </label>
            <input
                className="appearance-none block w-full  text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                name="phoneNumber2"
                type="text"
                placeholder="Phone Number 2..."
                
            />
        </div>
    </form>
</div>
</div>
    )
}

export default UserNameEmail

                        