import { Text, View, Image } from 'react-native';
import { Button } from 'react-native-web';

export function Home({navigation}){

    function goFish(){
        navigation.navigate('Fish')
    }

    return(
        <View>
        <Image
            style={{width: 'auto', height: '80vh'}}
            source={require('../../../assets/images/map.jpg')}
        />
            <Text>GO FISH: </Text>
            <Button title="ENTER" onPress={() => goFish()} />
        </View>
    )
}