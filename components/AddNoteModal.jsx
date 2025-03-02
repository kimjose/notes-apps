import { StyleSheet, Text, View, Modal, TouchableOpacity, TextInput } from "react-native";

const AddNoteModal = ({modalVisible,
    setModalVisible,
    newNote,
    setNewNote,
    addNote}) => {
console.log(newNote)
    return (
        <Modal
            animationType="slide"
            transparent={true}
            visible={modalVisible}
            onRequestClose={() => {
                setNewNote({ title: '', content: '' });
                setModalVisible(false)
            }}
        >
            <View style={styles.modalOverlay}>
                <View style={styles.modalContent}>
                    <Text style={{ fontSize: 20, fontWeight: 'bold', marginBottom: 10 }}>Add Note</Text>
                    <TextInput
                        placeholder="Title"
                        style={{ borderWidth: 1, borderColor: '#ccc', padding: 10, marginBottom: 10 }}
                        value={newNote.title}
                        onChangeText={text => setNewNote({ ...newNote, title: text })}
                    />
                    <TextInput
                        placeholder="Content"
                        style={{ borderWidth: 1, borderColor: '#ccc', padding: 10, marginBottom: 10 }}
                        value={newNote.content}
                        onChangeText={text => setNewNote({ ...newNote, content: text })}
                    />
                    <TouchableOpacity
                        onPress={addNote}
                        style={{ backgroundColor: '#f4511e', padding: 10, borderRadius: 5 }}
                    >
                        <Text style={{ color: '#fff', textAlign: 'center' }}>Add Note</Text>
                    </TouchableOpacity>
                </View>
            </View>

        </Modal>
    );
}

const styles = StyleSheet.create({

    modalOverlay: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
    },
    modalContent: {
        width: '80%',
        padding: 20,
        backgroundColor: '#fff',
        borderRadius: 10
    },
})

export default AddNoteModal;
