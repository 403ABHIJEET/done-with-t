import { StyleSheet, Text, View, TouchableOpacity } from "react-native";

export default function Navbar({ navigation }: any) {
  return (
    <View>
      <View style={styles.commonTop} ></View>
      <View style={styles.container}>
        <TouchableOpacity onPress={() => navigation.navigate("Home")}>
          <Text style={styles.text}>Home</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate("Login")}>
          <Text style={styles.text}>Login</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 20,
    backgroundColor: "#6200EE",
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "center",
    height: 40,
  },
  text: {
    color: "white",
    fontSize: 18,
    fontWeight: "bold",
  },
  commonTop: {
    height: 30
  }
});
