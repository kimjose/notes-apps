import databaseService from "./databaseService";
import { ID } from "react-native-appwrite";
import { config } from "./appwrite";

const dbId = config.databaseId
const colId = config.collectionNotesId 

export default {
    async listNotes() {
        const response = await databaseService.listDocuments(dbId, colId)
        if (response.error) {
            return {error: response.error};
        }
        console.log(response)
        return {data: response.documents}
    },
    async createNote(title, content) {
        if (!title || !content) {
            return {error: 'Title and content are required'}
        }
        const data = {
            title,
            content,
            created_at: new Date().toISOString()
        }
        const response = await databaseService.createDocument(dbId, colId, ID.unique(), data)
        if (response.error) {
            return {error: response.error}
        }
        return {data: response}
    },
    async updateNote(noteId, data) {
        return await databaseService.updateDocument(dbId, colId, noteId, data)
    },
    async deleteNote(noteId) {
        return await databaseService.deleteDocument(dbId, colId, noteId)
    }
}
