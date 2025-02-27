import { View, Text, StyleSheet } from "react-native";

const NoteItem = ({ note }) => {
    return (
        <View style={styles.noteItem}>
            <Text style={styles.title}>{note.title}</Text>
            <Text style={styles.content}>{note.content}</Text>
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
    }
});

export default NoteItem;
