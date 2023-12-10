import { Text, View, Image } from 'react-native';
import { Button } from 'react-native-web';

export function Home({navigation}){

    function goFish(){
        navigation.navigate('Fish')
    }

    function goProfile(){
        navigation.navigate('Profile')
    }

    return(
        <View>
        <Image
            style={{width: 'auto', height: '80vh'}}
            source={require('../../../assets/images/map.jpg')}
        />
            <Text>Debug Navegation </Text>
            <Button title="GO PACU TEST" onPress={() => goFish()} />
            <Button title="GO MY PROFILE" onPress={() => goProfile()} />
        </View>
    )
}