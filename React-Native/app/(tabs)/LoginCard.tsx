import React, { useState, useRef } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Animated,
  Modal,
} from "react-native";

const LoginCard = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [showModal, setShowModal] = useState(false);

  const slideAnim = useRef(new Animated.Value(300)).current; 

  const handleSignIn = () => {
    setShowModal(true);
    Animated.timing(slideAnim, {
      toValue: 0,
      duration: 300,
      useNativeDriver: false,
    }).start();

    setTimeout(() => {
      Animated.timing(slideAnim, {
        toValue: 300,
        duration: 300,
        useNativeDriver: false,
      }).start(() => setShowModal(false));
    }, 1500);
  };

  const handleCancel = () => {
    setUsername("");
    setPassword("");
  };

  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <Text style={styles.title}>Login</Text>

        <TextInput
          style={styles.input}
          placeholder="Username"
          value={username}
          onChangeText={setUsername}
        />

        <TextInput
          style={styles.input}
          placeholder="Password"
          secureTextEntry
          value={password}
          onChangeText={setPassword}
        />

        <View style={styles.buttonRow}>
          <TouchableOpacity style={styles.cancelBtn} onPress={handleCancel}>
            <Text style={styles.cancelText}>Cancel</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.signInBtn} onPress={handleSignIn}>
            <Text style={styles.signInText}>Sign In</Text>
          </TouchableOpacity>
        </View>
      </View>

      <Modal transparent visible={showModal} animationType="none">
        <View style={styles.modalOverlay}>
          <Animated.View style={[styles.popupCard, { bottom: slideAnim }]}>
            <Text style={styles.popupText}>Signed in successfully</Text>
          </Animated.View>
        </View>
      </Modal>
    </View>
  );
};

export default LoginCard;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#EEF2F3",
  },
  card: {
    width: "20%",
    padding: 20,
    backgroundColor: "white",
    borderRadius: 12,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  title: { fontSize: 24, textAlign: "center", marginBottom: 20 },
  input: {
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 10,
    paddingVertical: 10,
    paddingHorizontal: 15,
    fontSize: 16,
    marginBottom: 15,
    backgroundColor: "#F8F8F8",
  },
  buttonRow: { flexDirection: "row", justifyContent: "space-between" },
  cancelBtn: {
    flex: 1,
    marginRight: 8,
    paddingVertical: 12,
    borderWidth: 1.5,
    borderColor: "#1E88E5",
    borderRadius: 10,
    alignItems: "center",
  },
  cancelText: { color: "#1E88E5", fontSize: 16 },
  signInBtn: {
    flex: 1,
    marginLeft: 8,
    paddingVertical: 12,
    backgroundColor: "#1E88E5",
    borderRadius: 10,
    alignItems: "center",
  },
  signInText: { color: "white", fontSize: 16 },
  modalOverlay: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "center",
    backgroundColor: "transparent",
  },
  popupCard: {
    width: "90%",
    backgroundColor: "white",
    padding: 15,
    borderRadius: 12,
    alignItems: "center",
    elevation: 5,
  },
  popupText: { color: "green", fontSize: 16 },
});
