import { ref, getDownloadURL, StorageError } from 'firebase/storage';
import { storage } from './FireBaseConfig';
import notFoundImage from '@/assets/images/notFoundImg.jpg';
export const handleGetImageFromFirebase = async (path: string) => {
  try {
    const imageUrl = await getDownloadURL(ref(storage, path));
    return imageUrl;
  } catch (error) {
    if (error instanceof StorageError && error.code === 'storage/object-not-found') {
      return notFoundImage;
    } else {
      throw error;
    }
  }
};
