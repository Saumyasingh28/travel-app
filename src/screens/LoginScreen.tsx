import * as React from 'react';
import {
  SafeAreaView,
  Image,
  Text,
  StyleSheet,
  TextInput,
  View,
  TouchableOpacity,
} from 'react-native';
import styled from 'styled-components/native';
import { Divider } from 'react-native-elements';
import { jumpToSwitchNavigatorStack } from '../utils/navigation';

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

const LoginButton = styled.TouchableOpacity`
  background: #88c425;
  border-radius: 8px;
  margin: 20px;
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ContinueButton = styled.TouchableOpacity`
  border: 1px solid #efefef;
  height: 50px;
  margin: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const LoginScreen = ({ navigation }: any) => {
  const [email, onChangeEmail] = React.useState('');
  const [password, onChangePassword] = React.useState('');
  return (
    <SafeAreaView style={{ backgroundColor: '#FFFFFF', flex: 1 }}>
      <Image source={require('../assets/images/image1.png')} />
      <Header>
        <Text style={styles.loginText}>Login</Text>
        <TouchableOpacity onPress={() => navigation.navigate('SignUp')}>
          <Text style={styles.signUpText}>Sign Up</Text>
        </TouchableOpacity>
      </Header>
      <InputFields>
        <TextInput
          style={styles.textInput}
          onChangeText={(text) => onChangeEmail(text)}
          value={email}
          placeholder="Username"
        />
        <TextInput
          style={styles.textInput}
          onChangeText={(text) => onChangePassword(text)}
          value={password}
          secureTextEntry={true}
          placeholder="Password"
        />
      </InputFields>
      <View style={styles.forgotPasswordDiv}>
        <Text style={styles.forgotPasswordText}>Forgot Password?</Text>
      </View>
      <LoginButton onPress={() => jumpToSwitchNavigatorStack('TabNavigator')}>
        <Text style={styles.loginButtonText}>Login</Text>
      </LoginButton>
      <Divider
        style={{ backgroundColor: '#EFEFEF', marginLeft: 20, marginRight: 20 }}
      />
      <ContinueButton>
        <Text style={{ color: '#303D99' }}>Continue with Facebook</Text>
      </ContinueButton>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  loginText: {
    color: '#323B45',
    fontSize: 28,
    fontWeight: 'bold',
  },

  signUpText: {
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

  loginButtonText: {
    fontSize: 16,
    color: '#ffffff',
    fontWeight: 'bold',
  },
});

export default LoginScreen;
