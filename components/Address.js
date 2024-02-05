import React from 'react';

const DobGender = (props) => {
    const { data, handleChange } = props;

    const imageOptions = [
        { id: 1, url: '/Rectangle 29.png' },
        { id: 2, url: '/Rectangle 30.png'},
        { id: 3, url: '/Rectangle 31.png' },
        { id: 4, url: '/Rectangle 32.png' },
    ];

    return (
        <div>
            <div className="text-4xl font-bold mb-4 text-center">Choose Color Palette</div>
        <div className="max-w-xs md:max-w-lg mx-auto">
        <form className="border-dotted border-2 border-black rounded px-8 pt-6 pb-8 mb-4 bg-gray-100">
                
                <div className="mb-6">
                    
                    <div className="flex">
                        {imageOptions.map((option) => (
                            <div key={option.id} className="mr-4">
                                <div className="text-center text-gray-700">{`Option ${option.id}`}</div>
                                <input
                                    type="radio"
                                    id={`imageOption${option.id}`}
                                    name="profileImage"
                                    value={option.url}
                                    checked={data.profileImage === option.url}
                                    onChange={(e) => handleChange(e, 'profileImage')}
                                    className="hidden"
                                />
                                <label
                                    htmlFor={`imageOption${option.id}`}
                                    className={`cursor-pointer border p-1 rounded ${
                                        data.profileImage === option.url
                                            ? 'border-blue-500 transform scale-105'
                                            : 'border-gray-300'
                                    }`}
                                >
                                    <img src={option.url} alt={`Image ${option.id}`} className="aimg" />
                                </label>
                            </div>
                        ))}
                    </div>
                </div>
            </form>
        </div>
        </div>
    );
};

export default DobGender;