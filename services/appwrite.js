import {Client, Databases} from 'react-native-appwrite';

const config = {
    endpoint: process.env.EXPO_PUBLIC_APPWRITE_ENDPOINT,
    projectId: process.env.EXPO_PUBLIC_APPWRITE_PROJECT_ID,
    databaseId: process.env.EXPO_PUBLIC_APPWRITE_DATABASE_ID,
    collectionId: process.env.EXPO_PUBLIC_APPWRITE_COLLECTION_ID,
    col:{
        notes: process.env.EXPO_PUBLIC_APPWRITE_COLLECTION_NOTES_ID
    }
}