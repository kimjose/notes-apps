import { Text, View, StyleSheet, Image, TouchableOpacity } from "react-native";
import PosterImage from "@/assets/images/poster.png";
import { router, useRouter } from "expo-router";


const HomeScreen = () => {
  const router = useRouter();
  return (
    <View
      style={styles.container}
    >
      <image source={PosterImage} style={styles.image} />
      <Text style={styles.title}>Welcome to Notes App</Text>
      <Text style={styles.subtitle}>Capture your thoughts</Text>
      <TouchableOpacity onPress={() => router.push("/notes")}
        style={styles.button}
        >
          <Text style={styles.buttonText}>Get Started</Text>
      </TouchableOpacity>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
    backgroundColor: '#f8f9fa'
  },
  image: {
    width: 200,
    height: 200,
    marginBottom: 20,
    borderRadius: 10
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 10
  },
  subtitle: {
    fontSize: 18,
    color: "#666"
  },
  button: {
    backgroundColor: "#f4511e",
    padding: 10,
    borderRadius: 5,
    marginTop: 20
  },
  buttonText: {
    color: "#fff",
    fontWeight: "bold",
    textAlign: "center"
  }
});

export default HomeScreen;
