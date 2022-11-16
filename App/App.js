import React, {useState} from "react";
import { Alert, StyleSheet, Text, TouchableOpacity, View,
  TextInput, ActivityIndicator,FlatList,Image } from 'react-native';

const App = () => {

  const [searchName, setSearchName] = useState('characters');
  const [isLoading, setIsLoading] = useState(false);
  const [results,setResults] = useState([]);

  const doSomething = async() => {
    setIsLoading(true);
    //Alert.alert('Songs List','Ready');
    const api = `https://www.breakingbadapi.com/api/${searchName}`;
    const response = await fetch(api, {
      method: 'get'
    });

    const data = await response.json();
    setResults(data);
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
          results ? (
            <FlatList
            data={results}
            keyExtractor={item => item.char_id}
            renderItem={itemRow =>
              <View style={myStyle.fullCont}>
              <View style={myStyle.dataCont}>
              <Image style={myStyle.imgContainer} source={{uri:itemRow.item.img}}/>
              <View style={myStyle.textContainer}>
              <Text style={myStyle.bigName}>{itemRow.item.name}</Text>
              <Text style={myStyle.nickName}>{itemRow.item.nickname}</Text>
              <Text>______________________________</Text>
              <Text style={myStyle.occup}>{itemRow.item.occupation}</Text>
             </View>
             </View>
             </View>
            }/>
          ) : (
            <Text> No results</Text>
          )
        }
      </View>
    </View>
      
  )
}

const myStyle = StyleSheet.create({
  fullCont:{padding:7},
  dataCont:{width:'100%', height:120, flexDirection:'row',
  backgroundColor:'white',borderRadius:10},
  textContainer:{width:'70%', height:'100%', padding:7,},
  bigName:{fontSize:22,fontWeight:'700', color:'#17B890'},
  nickName:{fontSize:16,fontWeight:'700'},
  occup:{fontSize:11,fontWeight:'650',},
  imgContainer: {width:'35%', height:'100%',borderRadius:10},

  container: {flex:1, alignItems:'center', padding:20,
   justifyContent:'center', backgroundColor:'#DEE5E5'
  },

  btn:{width:'100%',paddingVertical:10,
  alignItems:'center',backgroundColor:'#17B890',borderRadius:14
},
  btntext:{color:'#DEE5E5', fontSize:20, fontWeight:'700'},
})

export default App;