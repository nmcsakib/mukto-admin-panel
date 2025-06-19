const uploadToImgbb = async (imageFile: string | Blob) => {
  const formData = new FormData();
  formData.append('image', imageFile);

  try {
    const res = await fetch(`https://api.imgbb.com/1/upload?key=${import.meta.env.VITE_IMGBB_API_KEY}`, {
      method: 'POST',
      body: formData
    });

    const data = await res.json();
    if (data.success) {
      return data.data.url;
    } else {
      throw new Error("Upload failed");
    }
  } catch (error) {
    console.error("Upload error:", error);
    return null;
  }
};

export default uploadToImgbb;
