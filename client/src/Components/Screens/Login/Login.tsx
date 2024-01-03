import {useState} from 'react';
import {View, Text, TextInput, StyleSheet} from 'react-native';
import { Button } from "native-base";

const Login = () => {
  const [ username, setUsername] = useState('')
  const [ password, setPassword] = useState('')


  return (
    <View style={styles.layout}>
      <View>
        <Text style={styles.title}>Login</Text>
        <View style={styles.loginContainer}>
          <View style={styles.inputContainer}>
            <Text>Username</Text>
            <TextInput
              style={styles.textInput}
              maxLength={20}
             />
          </View>
          <View style={styles.inputContainer}>
            <Text>Password</Text>
            <TextInput style={styles.textInput} />
            <Button size="sm" variant="ghost">Tester Button</Button>
          </View>
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  layout: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    maxWidth: '100%'
  },
  loginContainer: {
    position: 'relative',
    top: '50%'
  },

  title: {
    textAlign: 'center',
    fontSize: 50,
    marginTop: 30

  },
  inputContainer: {
    width: "80%"
  },
  textInput: {
    borderWidth: 2,
    borderRadius: 5,
    maxWidth: '80%',
    backgroundColor: "grey"
  },
});

export default Login;