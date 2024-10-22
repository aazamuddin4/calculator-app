import React, { useState } from 'react';
import {
  SafeAreaView,
  View,
  Text,
  TextInput,
  StyleSheet,
  Alert,
  TouchableOpacity,
} from 'react-native';

const CalculatorApp = () => {
  const [firstNumber, setFirstNumber] = useState<string>('');
  const [secondNumber, setSecondNumber] = useState<string>('');
  const [total, setTotal] = useState<number | null>(null);

  const handleAdd = () => {
    if (!firstNumber || !secondNumber) {
      Alert.alert(
        "Input Required",
        "Please enter both numbers to calculate the sum."
      );
      return;
    }

    const sum = parseFloat(firstNumber) + parseFloat(secondNumber);
    setTotal(sum);
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.wrapper}>
        <Text style={styles.heading}>Adding Two Numbers</Text>
        <TextInput
          style={styles.input}
          placeholder="First Number"
          keyboardType="numeric"
          value={firstNumber}
          onChangeText={setFirstNumber}
        />
        <TextInput
          style={styles.input}
          placeholder="Second Number"
          keyboardType="numeric"
          value={secondNumber}
          onChangeText={setSecondNumber}
        />
        <TouchableOpacity style={styles.button} onPress={handleAdd}>
          <Text style={styles.buttonText}>
            Add Two Numbers
          </Text>
        </TouchableOpacity>
        <Text style={styles.resultText}>
          {total !== null ? `Total: ${total}` : 'Total:'}
        </Text>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  wrapper: {
    width: '80%',
    padding: 20,
    backgroundColor: '#f8f8f8',
    borderRadius: 10,
  },
  heading: {
    fontSize: 24,
    marginBottom: 20,
    textAlign: 'center',
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 20,
    paddingHorizontal: 10,
    borderRadius: 5,
  },
  resultText: {
    marginTop: 20,
    fontSize: 20,
    textAlign: 'center',
  },
  button: {
    borderColor: 'blue',
    borderWidth: 1,
    borderRadius: 5,
    padding: 10
  },
  buttonText: {
    fontSize: 14,
    color: 'blue',
    textAlign: 'center'
  }
});

export default CalculatorApp