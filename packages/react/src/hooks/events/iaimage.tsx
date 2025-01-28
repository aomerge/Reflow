// import { useState, useEffect } from 'react';
// import * as tf from '@tensorflow/tfjs';
// import { pipeline } from '@huggingface/transformers';

// const useImageEnhancement = (imageUrl: string) => {
//     const [enhancedImage, setEnhancedImage] = useState<string | null>(null);
//     const [loading, setLoading] = useState<boolean>(true);

//     useEffect(() => {
//         const enhanceImage = async () => {
//             try {
//                 // Load the model from Hugging Face
//                 const model = await pipeline('image-enhancement', 'huggingface/your-model-name');

//                 // Load the image
//                 const image = new Image();
//                 image.src = imageUrl;
//                 await new Promise((resolve) => {
//                     image.onload = resolve;
//                 });

//                 // Convert the image to a tensor
//                 const tensor = tf.browser.fromPixels(image);

//                 // Enhance the image using the model
//                 const enhancedTensor = await model(tensor);

//                 // Convert the enhanced tensor back to an image
//                 const enhancedImageData = await tf.browser.toPixels(enhancedTensor);
//                 const enhancedImageUrl = URL.createObjectURL(new Blob([enhancedImageData], { type: 'image/png' }));

//                 setEnhancedImage(enhancedImageUrl);
//             } catch (error) {
//                 console.error('Error enhancing image:', error);
//             } finally {
//                 setLoading(false);
//             }
//         };

//         enhanceImage();
//     }, [imageUrl]);

//     return { enhancedImage, loading };
// };

// export default useImageEnhancement;