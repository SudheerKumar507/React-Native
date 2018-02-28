import React from "react";
import { Text, View, Button, Image, Alert } from "react-native";
//import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

export default class firstScreen extends React.Component {
    _onPressButton() {
        Alert.alert('You tapped the button!')
    }

    static navigationOptions = {
        tabBarLabel: 'screen1',
        // drawerIcon: ({tintColor}) =>{
        //     return(
        //     <MaterialIcons 
        //     name = "card-membership"
        //     size={24}
        //     style={{color: tintColor}}>
        //     </MaterialIcons>
        //     );
        // }
    }
    render() {
        return <View style={
            {
                flex: 1,
                justifyContent: 'center',
                alignItems: 'center'
            }
        }>
            <Text style={{ fontSize: 30, color: 'green' }}>
                Screen 1
            </Text>


            <Button
                onPress={this._onPressButton}
                title="Press Me"
                color="#841584"
            />


        </View>

    }
}