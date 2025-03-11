import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

const NoteItem = ({ note, deleteNote }) => {
    return (
        <View style={styles.noteItem}>
            <Text style={styles.title}>{note.title}</Text>
            <Text style={styles.content}>{note.content}</Text>
            {/* */}
            <TouchableOpacity  onPress={() => deleteNote(note.id)} >
                <Text style={styles.deleteText}>Delete</Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    noteItem: {
        padding: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#ccc',
    },
    title: {
        fontSize: 16,
        fontWeight: 'bold',
    },
    content: {
        fontSize: 14,
    },
    deleteText: {
        color: '#f4511e',
        textAlign: 'right',
    }
});

export default NoteItem;
