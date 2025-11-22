import React, { useState } from "react";
import { View, Text, TouchableOpacity, Modal, StyleSheet } from "react-native";

const CounterScreen = () => {
  const [count, setCount] = useState(2);
  const [modalVisible, setModalVisible] = useState(false);

  return (
    <View style={styles.container}>
      <Text style={styles.countText}>Counter: {count}</Text>
      <View style={styles.row}>
        <TouchableOpacity
          style={styles.btn}
          onPress={() => setCount(count + 1)}
        >
          <Text style={styles.btnText}>Increase</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.btn}
          onPress={() => setCount(count - 1)}
        >
          <Text style={styles.btnText}>Decrease</Text>
        </TouchableOpacity>
      </View>

      <TouchableOpacity
        style={styles.modalBtn}
        onPress={() => setModalVisible(true)}
      >
        <Text style={styles.modalBtnText}>Show Modal</Text>
      </TouchableOpacity>

      <Modal visible={modalVisible} transparent animationType="slide">
        <View style={styles.modalOverlay}>
          <View style={styles.modalCard}>
            <Text style={styles.modalText}>Hello from the Modal!</Text>

            <TouchableOpacity
              style={styles.closeBtn}
              onPress={() => setModalVisible(false)}
            >
              <Text style={styles.closeBtnText}>Close</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </View>
  );
};

export default CounterScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#EEF2F3",
  },

  countText: {
    fontSize: 28,
    marginBottom: 30,
  },

  row: {
    flexDirection: "row",
    marginBottom: 25,
  },

  btn: {
    backgroundColor: "#1E88E5",
    paddingVertical: 12,
    paddingHorizontal: 22,
    borderRadius: 10,
    marginHorizontal: 10,
  },

  btnText: {
    color: "white",
    fontSize: 16,
  },

  modalBtn: {
    marginTop: 10,
    backgroundColor: "#43A047",
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 10,
  },

  modalBtnText: {
    color: "white",
    fontSize: 17,
  },

  modalOverlay: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0,0,0,0.3)",
  },

  modalCard: {
    width: 500,
    backgroundColor: "white",
    padding: 25,
    borderRadius: 14,
    elevation: 10,
  },

  modalText: {
    fontSize: 20,
    marginBottom: 20,
    textAlign: "center",
  },

  closeBtn: {
    backgroundColor: "#E53935",
    paddingVertical: 12,
    borderRadius: 10,
  },

  closeBtnText: {
    color: "white",
    textAlign: "center",
    fontSize: 16,
  },
});
