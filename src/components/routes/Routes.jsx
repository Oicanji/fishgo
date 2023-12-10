import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {Home} from '../../pages/home/Home';
import {Fish} from "../../pages/fish/Fish"
import { Profile } from '../../pages/profile/Profile';

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
                <Stack.Screen name="Profile" component={Profile} 
                    header={() => <></>} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}