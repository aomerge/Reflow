import { useCallback, useEffect } from 'react';

export function useCache() {
    const create = useCallback(async (request: RequestInfo, response: Response) => {
        const cache = await caches.open('app-cache');
        await cache.put(request, response);
    }, []);

    const remove = useCallback(async (request: RequestInfo) => {
        const cache = await caches.open('app-cache');
        await cache.delete(request);
    }, []);

    const get = useCallback(async (request: RequestInfo) => {
        const cache = await caches.open('app-cache');
        const response = await cache.match(request);
        return response;
    }, []);    

    return { create, remove, get };
}

// // Example 1: Create a cache entry
// const { create } = useCache();
// useEffect(() => {
//     const storeData = async () => {
//         const response = new Response(JSON.stringify({ data: 'Sample Data' }), {
//             headers: { 'Content-Type': 'application/json' },
//         });
//         await create('/api/data', response);
//     };
//     storeData();
// }, []);

// // Example 2: Retrieve a cache entry
// const { get } = useCache();
// useEffect(() => {
//     const fetchData = async () => {
//         const response = await get('/api/data');
//         if (response) {
//             const data = await response.json();
//             console.log(data);
//         } else {
//             console.log('No data found in cache.');
//         }
//     };
//     fetchData();
// }, []);

// // Example 3: Remove a cache entry
// const { remove } = useCache();
// useEffect(() => {
//     const deleteData = async () => {
//         await remove('/api/data');
//     };
//     deleteData();
// }, []);

// // Example 4: Create a cache entry with an image
// const { create: createImageCache } = useCache();
// useEffect(() => {
//     const storeImage = async () => {
//         const response = await fetch('https://via.placeholder.com/150');
//         if (response.ok) {
//             await createImageCache('/images/sample', response);
//         }
//     };
//     storeImage();
// }, []);

// // Example 5: Retrieve a cache entry with an image
// const { get: getImageCache } = useCache();
// useEffect(() => {
//     const fetchImage = async () => {
//         const response = await getImageCache('/images/sample');
//         if (response) {
//             const blob = await response.blob();
//             const imageUrl = URL.createObjectURL(blob);
//             const img = document.createElement('img');
//             img.src = imageUrl;
//             document.body.appendChild(img);
//         } else {
//             console.log('No image found in cache.');
//         }
//     };
//     fetchImage();
// }, []);