import React from "react";
import { Alert, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

const App = () => {

  const doSomething = () => {
    Alert.alert('WHAT!?','I TOLD YOU NOT TO');
  }

  return(
    <View style={myStyle.container}>
      <TouchableOpacity style={myStyle.btn} onPress={doSomething}>
      <Text style={myStyle.btntext}>Don't Click Me</Text>
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