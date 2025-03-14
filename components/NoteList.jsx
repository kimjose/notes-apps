import { FlatList, TouchableOpacity, View } from "react-native";
import NoteItem from "./NoteItem";

const NoteList = ({ notes, setNewNote, setModalVisible, deleteNote }) => {
    return (
        <View>
            <FlatList
                data={notes}
                keyExtractor={item => item.$id}
                renderItem={({ item }) => (
                    <TouchableOpacity key={item.$id} onPress={(item) => {
                        console.log(item.title);
                        setNewNote(item)
                        setModalVisible(true)
                    }}>
                        <NoteItem note={item} deleteNote={deleteNote} />
                    </TouchableOpacity>
                )}
            />
        </View>
    );
}

export default NoteList;
