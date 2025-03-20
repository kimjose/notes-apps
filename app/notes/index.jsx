import { useState, useEffect } from "react";
import {
    Text, View, StyleSheet, TouchableOpacity,
    Alert,
    ActivityIndicator
} from "react-native";
import NoteList from "@/components/NoteList";
import AddNoteModal from "@/components/AddNoteModal";
import noteService from "@/services/noteService";

const NoteScreen = () => {
    const [notes, setNotes] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const [modalVisible, setModalVisible] = useState(false);
    const [newNote, setNewNote] = useState({ title: '', content: '' });

    useEffect(() => {
        const fetchNotes = async () => {
            setLoading(true);
            const response = await noteService.listNotes();
            if (response.error) {
                setError(response.error);
                Alert.alert('Error', response.error);
            } else {
                console.log(response.data);
                setNotes(response.data);
                setError(null);
            }
            setLoading(false);
        }
        fetchNotes();
    }, [])

    const addNote = async () => {
        if (newNote.title === '' || newNote.content === '') {
            return;
        }
        const response = await noteService.createNote(newNote.title, newNote.content);
        if (response.error) {
            Alert.alert('Error', response.error);
            return;
        } else {
            setNotes([...notes, { id: notes.length + 1, ...response.data }]);
        }

        setModalVisible(false);
    }

    const deleteNote = (id) => {
        setNotes(notes.filter(note => note.$id !== id));
    }

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Notes</Text>
            {loading ?
                (<ActivityIndicator size='large' color='#f4511e' />) :
                (
                    <>{error && <Text>Error: {error}</Text>}
                        <NoteList notes={notes} setNewNote={setNewNote} setModalVisible={setModalVisible} deleteNote={deleteNote} />
                    </>)}

            <TouchableOpacity onPress={() => {
                setModalVisible(true)
            }
            }
                style={styles.addNoteButton}
            >
                <Text style={styles.addNoteText}>+ Add Note</Text>
            </TouchableOpacity>

            <AddNoteModal
                modalVisible={modalVisible}
                setModalVisible={setModalVisible}
                newNote={newNote}
                setNewNote={setNewNote}
                addNote={addNote}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
    },
    addNoteButton: {
        position: 'absolute',
        bottom: 20,
        width: '90%',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#f4511e',
        padding: 10,
        fontSize: 16,
        borderRadius: 5,
        marginTop: 20,
    },
    addNoteText: {
        backgroundColor: '#f4511e',
        color: '#fff',
        fontSize: 16,
    },
});

export default NoteScreen;