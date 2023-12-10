import { Text, View, Image } from 'react-native';
import { Button } from 'react-native-web';
import { useEffect, useState } from 'react';
import users from '../../api/users';

export function Profile({navigation}){
    const [user, setUser] = useState({
        name: '',
        email: '',
        image: '',
    });

    const makeRequest = async () => {
        const response = await users.me();
        if(response.status !== 200){
            throw new Error('Erro ao buscar os peixes');
        }
        setUser(response.data);
    }

    useEffect(() => {
        makeRequest();
    }, []);


    return(
        <View
            style={{
                padding: 20,
            }}
        >
            {
                user.name != '' && (
                    <>
                        <Image
                            style={{
                                backgroundSize: 'cover',
                                backgroundPosition: 'right',
                                width: "100%", height: 500}}
                            source={require('../../../'+user.image)}
                        />
                        <View>
                            <Text
                                style={{
                                    fontSize: 30,
                                    fontWeight: 'bold',
                                }}
                            >{user.name || ''}</Text>
                            <Text
                                style={{
                                    fontSize: 20,
                                }}
                            >{user.email || ''}</Text>
                        </View>
                    
                    </>
                    )
            }
            <View
                style={{
                    display: 'flex',
                    flexDirection: 'column',
                    marginTop: 10,
                    marginBottom: 10,
                }}
            >
                <View
                    style={{
                        marginTop: 20,
                        marginBottom: 20,
                        height: 3,
                        backgroundColor: '#ccc',
                    }}
                >
                </View>

                <View style={{
                    display: 'flex',
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    marginTop: 10,
                }}>
                    <Button title="Voltar" onPress={() => navigation.goBack()} />
                </View>
            </View>
        </View>
    )
}