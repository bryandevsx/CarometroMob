import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, TextInput, View , Image, TouchableOpacity, Text} from 'react-native';

const Login = ( {navigation} ) => {

    const salvar = async (value) => {
        try {
          await AsyncStorage.setItem('@jwt', value)
        } catch (e) {
          // saving error
        }
    }

    const Logar = () => {
        
        const corpo = {
            email : email,
            senha : senha
        }

        fetch('', {
            method: 'POST',
            headers :{
                'Content-Type' : 'application/json'
            },
            body : JSON.stringify(corpo)
        })
        .then(response => response.json())
        .then(data => {
            console.log(data);
            if(data.status != 404){
                alert('Seja bem vindo');
                console.log(data.token);
                
                salvar(data.token);
                navigation.navigate('Autenticado');
            }else{
                alert('Email ou senha inválidos! :( ');
            }
        })

    }
    return (
      <View style={styles.container}>
        <Image
        source={require('../img/Logo.png')}
        style={styles.logo} 
        />
        <TextInput 
        style={styles.Input} 
        placeholder="Digite seu Email"
        />
        <TextInput 
        style={styles.Input} 
        secureTextEntry={true}
        placeholder="Digite sua Senha"
        />
  
        <TouchableOpacity style={styles.botao}>
          <Text style={styles.botaotext}>
            Entrar
          </Text>
        </TouchableOpacity>
  
  
      </View>
    );
  }
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#6C9ECF',
      alignItems: 'center',
      justifyContent: 'center',
    },
    logo: {
      width: 150,
      height: 150,
      borderRadius: 100
    },
    Input: {
      marginTop: 25,
      paddingLeft: 85,
      width: 300,
      height: 30,
      backgroundColor: '#FFFFFF',
      fontSize: 13,
      fontWeight: 'bold',
      borderRadius: 3,
    },
    botao:{
      width: 80,
      height: 45,
      backgroundColor: '#FB980D',
      borderRadius: 4,
      marginTop: 25,
      alignItems: 'center',
      justifyContent: 'center'
    },
    botaotext:{
      fontWeight: 'bold',
      fontSize: 13
    }
  
  
  });

  export default Login;