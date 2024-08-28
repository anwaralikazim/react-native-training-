

import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Button } from 'react-native';

const Screen = () => {
    const [text, onChangeText] = useState("Write something");
    const [number, onChangeNumber] = useState("");

    return (
        <View style={{ flex: 1, backgroundColor: "gray", justifyContent: 'center' }}>
            <View style={{ flex: 0.1, justifyContent: 'center', alignItems: 'center', backgroundColor: 'yellow' }}>
                <Text style={{ fontSize: 25, color: 'black' }}>Screen No 1</Text>
            </View>

            <View style={{ flex: 1, backgroundColor: "gray" }}>
                <TextInput
                    style={{
                        height: 40,
                        margin: 12,
                        borderWidth: 1,
                        padding: 10,
                        color: 'purple',
                        fontSize: 20
                    }}
                    onChangeText={onChangeText}
                    value={text}
                />
                <TextInput
                    style={{
                        height: 40,
                        margin: 12,
                        borderWidth: 1,
                        padding: 10,
                        color: 'white',
                        fontSize: 20
                    }}
                    onChangeText={onChangeNumber} // Corrected this to `onChangeText`
                    value={number}
                    keyboardType="numeric"
                />
                <TouchableOpacity
                    style={{
                        justifyContent: "center",
                        backgroundColor: "green",
                        padding: 10,
                        margin: 20
                    }}
                    
                >
                    <Text style={{ color: 'white', textAlign: 'center' }}>Click Me</Text>
                </TouchableOpacity>
            </View>

            

            <View style={{
                backgroundColor: 'yellow', flex: 0.1, justifyContent: 'center', alignItems: 'center'
            }}>
                <Text style={{ fontSize: 20, color: 'black' }}>All about screen</Text>
            </View>
        </View>
    );
};

export default Screen;
















/*import React, { useState } from 'react';
import { View, Text,TextInput,ImageBackground ,TouchableOpacity} from 'react-native';



const Screen = ({ navigation }) => {
    const [text,onChangeText]=React.useState("Write some things");
        const [number,onChangeNumber]=React.useState("");
        
  return (
    <View style={{ flex: 1, backgroundColor: "gray", justifyContent: 'center' }}>
      <View style={{ flex: 0.1, justifyContent: 'center',alignItems:'center', backgroundColor: 'yellow' }}>
        <Text style={{  fontSize: 25, color: 'black' }}>Screen No 1</Text>
      </View>
     
      <View style={{ flex: 1, backgroundColor: "gray" }}>
        
        
        <TextInput style={{ height: 40,
                            margin: 12,
                            borderWidth: 1,
                            padding: 10,
                            color:'purple ',
                            fontSize:20

                           }}
                          onChangeText={onChangeText}
                           value={text}/>
                             
                            <TextInput style={{ height: 40,
                            margin: 12,
                            borderWidth: 1,
                            padding: 10,
                            color:'white',
                            fontSize:20
                           }}
                          onChangeNumber={onChangeNumber}
                           value={number}/>
            <TouchableOpacity style={{ justifyContent: "center", backgroundColor: "green", padding: 10, margin: 20}}>
          <Text style={{ color: 'white', textAlign: 'center' }}>Click Me</Text>
        </TouchableOpacity>
           </View>
           <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Home Screen</Text>
      <Button
        title="Go to Next Screen"
        onPress={() => navigation.navigate('footer')}
      />
    </View>

      <View style={{ 
        backgroundColor: 'yellow', flex: 0.1, justifyContent: 'center' ,alignItems: 'center'}}>
        <Text style={{ fontSize: 20, color: 'black'  }}>All about screen</Text>
      </View>
    </View>
  );
};

export default Screen;











*/





/*import { View, Text } from 'react-native';
import React from 'react';

const Screen = () => {
  const header = () => {
    return (
      <View style={{ flex: 0.1, justifyContent: 'flex-start', backgroundColor: 'yellow' }}>
        <Text style={{ padding: 20, fontSize: 30, color: 'black' }}>Screen</Text>
      </View>
    );
  };

  const middle =()=>{
    return(
         <View style={{flex:0.5,backgroundColor:"gray"}}>

           <Text></Text>
          </View>
    )
    


  };

  const footer = () => {
    return (
      <View style={{ 
        backgroundColor: 'yellow', flex: 1,justifyContent:'flex-end'}}>
        <Text style={{ fontSize: 20, color: 'black' }}>All about screen</Text>
      </View>
    );
  };

  return (
    <View style={{ flex:1, backgroundColor:"gray" }}>
      {header()}
      {middle()}
      {footer()}
    </View>
  );
};

export default Screen;
*/

