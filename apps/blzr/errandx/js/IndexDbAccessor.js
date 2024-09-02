// TypeScript functions to interact with IndexedDB
async function initializeIndexedDb(storeName) {
    const request = indexedDB.open("IndexDB", 1);
    request.onupgradeneeded = (event) => {
        console.log("Initialize Upgrading IndexedDB....");
        const db = event.target.result;
        if (!db.objectStoreNames.contains(storeName)) {
            db.createObjectStore(storeName, { keyPath: "id" });
        }
    };
    request.onerror = () => {
        console.error("Error opening IndexedDB");
    };
}
async function getIndexedDbValue(storeName, id) {
    const db = await openDatabase(storeName);
    return new Promise((resolve, reject) => {
        const transaction = db.transaction([storeName], "readonly");
        const objectStore = transaction.objectStore(storeName);
        const request = objectStore.get(id);
        request.onsuccess = () => {
            resolve(request.result);
        };
        request.onerror = () => {
            reject("Error retrieving value from IndexedDB");
        };
    });
}
async function getAllIndexedDbValues(storeName) {
    const db = await openDatabase(storeName);
    return new Promise((resolve, reject) => {
        const transaction = db.transaction([storeName], "readonly");
        const objectStore = transaction.objectStore(storeName);
        const request = objectStore.getAll();
        request.onsuccess = () => {
            resolve(request.result);
        };
        request.onerror = () => {
            reject("Error retrieving values from IndexedDB");
        };
    });
}
async function addIndexedDbValue(storeName, entity) {
    const db = await openDatabase(storeName);
    const transaction = db.transaction([storeName], "readwrite");
    const objectStore = transaction.objectStore(storeName);
    objectStore.add(entity);
    transaction.onerror = () => {
        console.error("Error adding value to IndexedDB");
    };
}
async function updateIndexedDbValue(storeName, entity) {
    const db = await openDatabase(storeName);
    const transaction = db.transaction([storeName], "readwrite");
    const objectStore = transaction.objectStore(storeName);
    objectStore.put(entity);
    transaction.onerror = () => {
        console.error("Error updating value in IndexedDB");
    };
}
async function deleteIndexedDbValue(storeName, id) {
    const db = await openDatabase(storeName);
    const transaction = db.transaction([storeName], "readwrite");
    const objectStore = transaction.objectStore(storeName);
    objectStore.delete(id);
    transaction.onerror = () => {
        console.error("Error deleting value from IndexedDB");
    };
}
async function openDatabase(storeName) {
    return new Promise((resolve, reject) => {
        const request = indexedDB.open("IndexDB", 1);
        request.onsuccess = () => {
            resolve(request.result);
        };
        request.onerror = (e) => {
            reject(`${e} Error opening database`);
        };
        request.onupgradeneeded = (event) => {
            console.log("Open Upgrading IndexedDB....");
            const db = request.result;
            if (!db.objectStoreNames.contains(storeName)) {
                db.createObjectStore(storeName, { keyPath: "id" });
                console.log("store created....");
            }
        };
    });
}
// Export functions for use with JS interop
export { initializeIndexedDb, getIndexedDbValue, getAllIndexedDbValues, addIndexedDbValue, updateIndexedDbValue, deleteIndexedDbValue };
