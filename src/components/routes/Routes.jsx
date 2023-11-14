import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {Home} from '../../pages/home/Home';
import {Fish} from "../../pages/fish/Fish"

const Stack = createNativeStackNavigator();

export function Routes(){
    return(
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Home">
                <Stack.Screen name="Home" component={Home} 
                    header={() => <></>}
                />
                <Stack.Screen name="Fish" component={Fish} 
                    header={() => <></>}
                />
            </Stack.Navigator>
        </NavigationContainer>
    )
}