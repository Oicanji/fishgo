import { Text, View } from 'react-native';
import { Button } from 'react-native-web';

export function Fish({navigation}){

    function goHome(){
        navigation.navigate('Home')
    }

    return(
        <View>
            <Text>GO HOME: </Text>
            <Button title="ENTER" onPress={() => goHome()} />

        </View>
    )
}