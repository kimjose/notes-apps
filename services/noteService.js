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
        return {data: response}
    },
    async createNote(data) {
        return await databaseService.createDocument(dbId, colId, data)
    },
    async updateNote(noteId, data) {
        return await databaseService.updateDocument(dbId, colId, noteId, data)
    },
    async deleteNote(noteId) {
        return await databaseService.deleteDocument(dbId, colId, noteId)
    }
}
