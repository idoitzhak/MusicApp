import React, {useState} from "react";
import { Alert, StyleSheet, Text, TouchableOpacity, View,
  TextInput, ActivityIndicator,FlatList } from 'react-native';

const App = () => {

  const [searchName, setSearchName] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [results,setResults] = useState({});

  const doSomething = async() => {
    setIsLoading(true);
    //Alert.alert('Songs List','Ready');
    const api = `https://itunes.apple.com/search?term=${searchName}`;
    const response = await fetch(api, {
      method: 'get'
    });

    const data = await response.json();
    setResults(data.results);
    console.log(results);
    setIsLoading(false);
    
  }

  return(
    <View style={myStyle.container}>

      <View style={{width:'100%', flexDirection:'row', height:'10%'}}>
        
        <View style = {{width:'75%', justifyContent:'center'}}>
          <TextInput
          style={{
            width:'98%',
            paddingVertical:10,
            borderRadius:6,
            fontSize:18,
            padding:10,
            backgroundColor:'#fff'
          }}
           value={searchName}
           onChangeText={x => {setSearchName(x)}}
           keyboardType="default"
           placeholder="Type search..."
           autoCapitalize='none'
           secureTextEntry={false}
          />
        </View>

      <View style = {{width:'25%', justifyContent:'center',alignItems:'center'}}>
      
      {
        isLoading ? (<ActivityIndicator size='large' color={'#17B890'}/>) 
        : (
          <TouchableOpacity style={myStyle.btn} onPress={doSomething}>
        <Text style={myStyle.btntext}>Search</Text>
        </TouchableOpacity>
        )
      }
        </View>
      </View>

      <View style={{width: '100%', height:'90%'}}>

        {
          results?.results ? (
            <FlatList
            data={results}
            keyExtractor={item => item.trackId}
            renderItem={itemRow =>
            <View>
              <Text>{itemRow.item.artistName}</Text>
            </View>}
            />
          ) : (
            <Text> No results</Text>
          )
        }
      </View>
    </View>
      
  )
}

const myStyle = StyleSheet.create({
  
  container: {flex:1, alignItems:'center', padding:20,
   justifyContent:'center', backgroundColor:'#DEE5E5'
  },

  btn:{width:'100%',paddingVertical:10,
  alignItems:'center',backgroundColor:'#17B890',borderRadius:14
},
  btntext:{color:'#DEE5E5', fontSize:20, fontWeight:'700'},
})

export default App;