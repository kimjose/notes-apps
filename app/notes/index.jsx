import { useState } from "react";
import {
    Text, View, StyleSheet, TouchableOpacity
} from "react-native";
import NoteList from "@/components/NoteList";
import AddNoteModal from "@/components/AddNoteModal";

const NoteScreen = () => {
    const [notes, setNotes] = useState([
        { id: 1, title: 'Note 1', content: 'This is the first note' },
        { id: 2, title: 'Note 2', content: 'This is the second note' },
        { id: 3, title: 'Note 3', content: 'This is the third note' }
    ]);

    const [modalVisible, setModalVisible] = useState(false);
    const [newNote, setNewNote] = useState({ title: '', content: '' });

    const addNote = () => {
        if (newNote.title === '' || newNote.content === '') {
            return;
        }
        setNotes([...notes, { id: notes.length + 1, ...newNote }]);
        setNewNote({ title: '', content: '' });
        setModalVisible(false);
    }

    const deleteNote = (id) => {
        setNotes(notes.filter(note => note.id !== id));
    }

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Notes</Text>
            <NoteList notes={notes} setNewNote={setNewNote} setModalVisible={setModalVisible} deleteNote={deleteNote} />

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