import styles from './addProduct.module.scss';
import classNames from 'classnames/bind';
import { useState } from 'react';
import { storage } from '@/firebase';
import { ref, uploadBytes } from 'firebase/storage';
import { v4 as uuidv4 } from 'uuid';
const cx = classNames.bind(styles);

function AddProduct() {
  const [imageUploads, setImageUploads] = useState<File[]>([]);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    files: [] as File[],
  });

  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };
  const uploadImages = async () => {
    if (imageUploads === null || imageUploads.length === 0) {
      alert('No images Found');
      return;
    }

    try {
      for (const img of imageUploads) {
        const uniqueId = uuidv4();
        const imageRef = ref(storage, `images/${img.name}-${uniqueId}`);
        const result = await uploadBytes(imageRef, img);
        console.log(result);
      }
      setImageUploads([]);
      alert('Upload successfully');
    } catch (error) {
      console.error('Error uploading images:', error);
    }
  };

  const handleFileChange = (e: any) => {
    const files = Array.from(e.target.files);
    setFormData({
      ...formData,
      files: files as File[],
    });
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    // Here you can handle form submission, for now, let's just log the data
    console.log(formData);
  };
  // const displaySpecificImage = async () => {
  //   try {
  //     const imagePath = 'images/Screenshot from 2024-03-27 00-17-25.png-15b1f052-cc84-408c-8722-01ed1c6db359'; // Provide the path to the specific image
  //     const imageUrl = await getDownloadURL(ref(storage, imagePath));
  //     setDisplayImage(imageUrl);
  //   } catch (error) {
  //     console.error('Error retrieving image:', error);
  //   }
  // };

  // useEffect(() => {
  //   // Call displaySpecificImage when component mounts
  //   displaySpecificImage();
  // }, []);

  return (
    <>
      <form onSubmit={handleSubmit} className={cx('form-container')}>
        <div>
          <label>Name:</label>
          <input type="text" name="name" value={formData.name} onChange={handleChange} />
        </div>
        <div>
          <label>Email:</label>
          <input type="email" name="email" value={formData.email} onChange={handleChange} />
        </div>
        <div>
          <label>Upload File:</label>
          <input multiple type="file" name="file" onChange={handleFileChange} />
        </div>
        <button type="submit">Submit</button>
      </form>
    </>
  );
}

export default AddProduct;
