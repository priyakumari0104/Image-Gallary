 const Imagekit= require('imagekit');
  const imagekit= new Imagekit({
    privateKey:process.env.IMAGEKIT_PRIVATE_KEY,
    publicKey:process.env.IMAGEKIT_PUBLIC_KEY,
    urlEndpoint:process.env.URL_ENDPOINT
  });
  
  async function uploadFile(buffer){
 try {
        const result = await imagekit.upload({
            file: buffer,          // buffer from multer
            fileName: "image.jpg"  // you can make this dynamic
        });

        return result;
    } catch (error) {
        console.error("ImageKit Upload Error:", error);
        throw error;
    }
    
  }
   module.exports=uploadFile;