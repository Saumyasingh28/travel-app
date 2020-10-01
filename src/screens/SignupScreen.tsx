import * as React from 'react';
import {
  SafeAreaView,
  Image,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import styled from 'styled-components/native';

const Header = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 20px;
`;

const InputFields = styled.View`
  display: flex;
  justify-content: space-between;
`;

const SignUpButton = styled.TouchableOpacity`
  background: #88c425;
  border-radius: 8px;
  margin: 20px;
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const SignUpScreen = ({ navigation }: any) => {
  const [username, onChangeUsername] = React.useState('');
  const [password, onChangePassword] = React.useState('');
  const [confPassword, onChangeConfPassword] = React.useState('');
  const [email, onChangeEmail] = React.useState('');
  return (
    <SafeAreaView style={{ backgroundColor: '#FFFFFF', flex: 1 }}>
      <Image source={require('../assets/images/image1.png')} />
      <Header>
        <Text style={styles.signUpText}>Sign Up</Text>
        <TouchableOpacity onPress={() => navigation.navigate('Login')}>
          <Text style={styles.loginText}>Login</Text>
        </TouchableOpacity>
      </Header>
      <InputFields>
        <TextInput
          style={styles.textInput}
          onChangeText={(text) => onChangeUsername(text)}
          value={username}
          placeholder="Username"
        />
        <TextInput
          style={styles.textInput}
          onChangeText={(text) => onChangePassword(text)}
          value={password}
          secureTextEntry={true}
          placeholder="Password"
        />
        <TextInput
          style={styles.textInput}
          onChangeText={(text) => onChangeConfPassword(text)}
          value={confPassword}
          secureTextEntry={true}
          placeholder="Re-type password"
        />
        <TextInput
          style={styles.textInput}
          onChangeText={(text) => onChangeEmail(text)}
          value={email}
          placeholder="E-mail"
        />
      </InputFields>
      <SignUpButton onPress={() => navigation.navigate('TabNavigator')}>
        <Text style={styles.signUpButtonText}>Create Account</Text>
      </SignUpButton>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  signUpText: {
    color: '#323B45',
    fontSize: 28,
    fontWeight: 'bold',
  },

  loginText: {
    color: '#88C425',
    fontSize: 16,
  },

  textInput: {
    margin: 20,
    height: 50,
    borderRadius: 8,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.2,
    shadowRadius: 6.68,
    elevation: 5,
    backgroundColor: '#fff',
  },

  forgotPasswordDiv: {
    display: 'flex',
    width: '100%',
    alignItems: 'flex-end',
    padding: 20,
  },

  forgotPasswordText: {
    fontSize: 16,
    fontWeight: 'bold',
  },

  signUpButtonText: {
    fontSize: 16,
    color: '#ffffff',
    fontWeight: 'bold',
  },
});

export default SignUpScreen;
