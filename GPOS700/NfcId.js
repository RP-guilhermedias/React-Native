import React, { Fragment, Component } from "react";
import { SafeAreaView, Text, StatusBar,View,StyleSheet,Button,DeviceEventEmitter ,FlatList} from "react-native";
import {NativeModules} from 'react-native';



var ToastExample = NativeModules.ToastExample;



export default class NfcGedi extends Component{
  constructor(props) {    
    super(props);
    
    this.state = {
      
      arrayId: []
    }
  }
  async componentDidMount(){
       
    DeviceEventEmitter.addListener("eventId",event=>{
      
      this.setState({
        arrayId: [...this.state.arrayId, event.id] 
      })
      
    }
  );

}


  render(){
    return(
      <SafeAreaView>
          <View >
            <Text style={{fontSize: 30, fontWeight:'bold', marginLeft:60, marginRight:15}}>
              Leitura do cartão 
            </Text>
          </View>
      
      <View style={{ marginTop:40, marginStart:40, marginEnd:40, marginBottom: 30}}>
         <Button
            color= 'blue'
            title="Ler cartão"
            onPress={() =>ToastExample.nfcId()}

        />

      </View>
      <View style={{ height: 0.5, width: "100%", backgroundColor: "#000" }} />
      <FlatList
              data={this.state.arrayId}
              width='100%'
              extraData={this.state.arrayId}
              keyExtractor={(index) => index.toString()}
              ItemSeparatorComponent={this.FlatListItemSeparator}
              renderItem={({item}) => <Text style={{fontSize: 16, fontWeight: 'bold', color: 'gray', marginStart: 20}} > {item} </Text>}
        />

      </SafeAreaView>
      
    );
  }
}
 