import { initializeIndexedDb, getIndexedDbValue, getAllIndexedDbValues, addIndexedDbValue, updateIndexedDbValue, deleteIndexedDbValue } from '../IndexDbAccessor';
describe('IndexDbAccessor', () => {
    const storeName = 'testStore';
    const testEntity = { id: '1', name: 'Test Entity' };
    beforeAll(async () => {
        await initializeIndexedDb(storeName);
    });
    it('should add a value to IndexedDB', async () => {
        await addIndexedDbValue(storeName, testEntity);
        const result = await getIndexedDbValue(storeName, '1');
        expect(result).toEqual(testEntity);
    });
    it('should retrieve a value from IndexedDB', async () => {
        const result = await getIndexedDbValue(storeName, '1');
        expect(result).toEqual(testEntity);
    });
    it('should retrieve all values from IndexedDB', async () => {
        const results = await getAllIndexedDbValues(storeName);
        expect(results).toContainEqual(testEntity);
    });
    it('should update a value in IndexedDB', async () => {
        const updatedEntity = { id: '1', name: 'Updated Entity' };
        await updateIndexedDbValue(storeName, updatedEntity);
        const result = await getIndexedDbValue(storeName, '1');
        expect(result).toEqual(updatedEntity);
    });
    it('should delete a value from IndexedDB', async () => {
        await deleteIndexedDbValue(storeName, '1');
        const result = await getIndexedDbValue(storeName, '1');
        expect(result).toBeUndefined();
    });
});
