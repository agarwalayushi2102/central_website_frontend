
import React, { useState } from 'react';
import styles from './Address.module.css';

const Address = () => {
  const [imageUrl, setImageUrl] = useState('#');

  const handleImageChange = (evt) => {
    const imgInp = evt.target;
    const [file] = imgInp.files;

    if (file) {
      setImageUrl(URL.createObjectURL(file));
    }
  };

  return (
    <div>
        <div className="text-4xl font-bold mb-4 text-center">Choose Logo</div>
    <div className={styles.container}>
      <form encType="multipart/form-data" className="h-96 w-96 border-dotted border-2 border-black rounded px-8 pt-6 pb-8 mb-4 bg-gray-100 flex flex-col justify-center items-center">

<label htmlFor="imgInp" className={styles.fileInput}>
  Choose File
</label>
        <input
          accept="image/*"
          type="file"
          id="imgInp"
          onChange={handleImageChange}
          style={{ display: 'none' }}
        />
        <div className={imageUrl === '#' ? styles.hidden : styles.imageContainer}>
          <img id="blah" src={imageUrl} alt="your image" className={styles.imgPreview} />
        </div>
        
      </form>
    </div>
    </div>
  );
};

export default Address;

