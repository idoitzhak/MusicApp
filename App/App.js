import React from "react";
import { Alert, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

const App = () => {

  const doSomething = async() => {
    Alert.alert('Songs List','Ready');
    const api = 'https://itunes.apple.com/search?term=metallica';
    const response = await fetch(api, {
      method: 'get'
    });

    const data = await response.json();

    console.log(data);

  }

  return(
    <View style={myStyle.container}>
      <TouchableOpacity style={myStyle.btn} onPress={doSomething}>
      <Text style={myStyle.btntext}>Get Music</Text>
      </TouchableOpacity>
    </View>
  )
}

const myStyle = StyleSheet.create({
  
  container: {flex:1, alignItems:'center', padding:30,
   justifyContent:'center', backgroundColor:'#DEE5E5'
  },

  btn:{width:'100%',paddingVertical:18,
  alignItems:'center',backgroundColor:'#17B890',borderRadius:14
},
  btntext:{color:'#DEE5E5', fontSize:22, fontWeight:'700'},
})

export default App;