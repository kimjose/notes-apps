import { database } from './appwrite'

const databaseService = {

    async listDocuments(databaseId, collectionId) {
        try {
            return await database.listDocuments(databaseId, collectionId) || []
        } catch (error) {
            console.log('Error fetching documents', error.message)
            return { error: error.message }
        }
    },
    async createDocument(databaseId, collectionId, id = null, data) {
        try {
            return await database.createDocument(databaseId, collectionId, id || undefined, data) || []
        } catch (error) {
            console.log('Error creating document', error.message)
            return { error: error.message }
        }
    }
}

export default databaseService