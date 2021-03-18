import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, TextInput, View , Image, TouchableOpacity, Text} from 'react-native';

const Home = () => {
}
return(
<View style={styles.scren}>
    <View style={styles.turmas}>
        <TouchableOpacity>
        <Text style={styles.texto}>
                Turma 1 DEV
            </Text>
            <Image source={require('../img/Dev.png')}style={styles.img}/>
        </TouchableOpacity>
    </View>
    <View style={styles.turmas}>
        <TouchableOpacity>
        <Text style={styles.texto}>
                Turma 1 Redes
            </Text>
            <Image source={require('../img/Redes.png')}style={styles.img}/>
        </TouchableOpacity>
    </View>
    <View style={styles.turmas}>
        <TouchableOpacity>
            <Text style={styles.texto}>
                Turma 1 Multimídia
            </Text>
            <Image source={require('../img/Multimídia.png')}style={styles.img}/>
        </TouchableOpacity>
    </View>
</View>
);

const styles = StyleSheet.create({
    scren: {
        flex: 1,
        backgroundColor: '#6C9ECF',
        alignItems: 'center',
        justifyContent: 'center',
    },
    turmas:{
        flex: 1,
        width: 220,
        height: 125,
        backgroundColor: '6B9FD2',
        justifyContent: 'center',
    },
    texto:{
      fontWeight: 'bold',
      fontSize: 13      
    },
    img:{
      flex: 1,
      width: 200,
      height: 80,
      alignItems: 'flex-end',
      paddingEnd: 5,
    },  
});




export default Home;