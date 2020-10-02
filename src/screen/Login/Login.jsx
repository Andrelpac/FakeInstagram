import React, {useState} from 'react';
import {Text, View} from 'react-native';
import {TextInput} from 'react-native-gesture-handler';
import Button from '../../components/Button/Button';
import Icon from 'react-native-vector-icons/FontAwesome';

const Login = ({navigation}) => {
  const [password, setPassword] = useState();
  const [login, setLogin] = useState();

  const onPressLogin = () => {
    if (login == 'Andre' && password == 'Andre') {
      navigation.navigate('TabNavigator');
    } else {
      alert('Login ou senha errada');
    }
  };
  const handleChangeLogin = (event) => {
    setLogin(event);
  };
  const handleChangePassword = (event) => {
    setPassword(event);
  };
  return (
    <>
      <View style={{marginBottom: 140}}>
        <Text style={{textAlign: 'center'}}>Português(Brasil)</Text>
      </View>
      <View
        style={{
          flex: 1,
          alignItems: 'center',
        }}>
        <View style={{marginBottom: 50, width: 350}}>
          <Text
            style={{
              textAlign: 'center',
              fontSize: 50,
              fontFamily: 'BillyanaPersonalUseOnly',
            }}>
            Instagram
          </Text>
        </View>
        <View style={{backgroundColor: 'white', marginBottom: 15}}>
          <TextInput
            style={{
              height: 40,
              width: 350,
              borderColor: 'gray',
              borderWidth: 1,
              backgroundColor: 'white',
              borderRadius: 10,
            }}
            onChangeText={handleChangeLogin}
            mode="outlined"
            label="Email"
            placeholderTextColor="black"
            placeholder="Digite seu e-mail"></TextInput>
        </View>
        <View style={{marginBottom: 15}}>
          <TextInput
            style={{
              height: 40,
              width: 350,
              borderColor: 'gray',
              borderWidth: 1,
              backgroundColor: 'white',
              borderRadius: 10,
            }}
            secureTextEntry={true}
            mode="outlined"
            label="Senha"
            placeholder="Digite sua Senha"
            placeholderTextColor="black"
            onChangeText={handleChangePassword}
          />
        </View>
        <View style={{marginBottom: 10}}>
          <Button
            buttonStyle={{
              width: 350,
              height: 50,
              borderRadius: 10,
              alignItems: 'center',
              backgroundColor: 'blue',
            }}
            onPress={onPressLogin}
            title="Login"
          />
        </View>
        <View>
          <Text>Forgot your login details? Get help signing in.</Text>
        </View>
        <View style={{flexDirection: 'row', marginBottom: 15}}>
          <View
            style={{
              marginTop: 50,
              marginRight: 10,
              borderWidth: 1,
              height: 1,
              width: 150,
            }}
          />
          <Text
            style={{
              marginTop: 42,
            }}>
            OR
          </Text>
          <View
            style={{
              marginTop: 50,
              marginLeft: 10,
              borderWidth: 1,
              height: 1,
              width: 150,
            }}
          />
        </View>
        <View style={{flexDirection: 'row', marginBottom: 180}}>
          <Icon name="facebook-square" color="blue" size={20} />
          <Text style={{marginLeft: 10, color: 'blue'}}>
            Log in with Facebook
          </Text>
        </View>
        <View style={{borderTopWidth: 1, width: 600}}>
          <Text style={{textAlign: 'center'}}>
            {' '}
            Don't have an account? Sing Up.
          </Text>
        </View>
      </View>
    </>
  );
};
export default Login;
