import { Text, View, Image } from 'react-native';
import { Button } from 'react-native-web';
import { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faThumbsUp } from '@fortawesome/free-regular-svg-icons';

import users from '../../api/users';
import fish  from '../../api/fish';

export function Fish({navigation}){
    const [fishs, setFishs] = useState([]);
    const [usersList, setUsersList] = useState([]);

    const makeRequest = async () => {
        const response = await fish.get();
        if(response.status !== 200){
            throw new Error('Erro ao buscar os peixes');
        }
        setFishs(response.data);
    }

    const makeRequestUsers = async () => {
        const response = await users.get();
        if(response.status !== 200){
            throw new Error('Erro ao buscar os usuários');
        }
        setUsersList(response.data);
    }

    useEffect(() => {
        makeRequestUsers();
        makeRequest();
    }, []);


    return(
        <View
            style={{
                padding: 20,
            }}
        >
            {fishs.length != 0 && (
                <View
                    style={{
                        display: 'flex',
                        flexDirection: 'column',
                    }}
                >
                    <View style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center'}}>
                        <Image
                            style={{
                                backgroundSize: 'cover',
                                backgroundPosition: 'right',
                                width: 185, height: "100%"}}
                            source={require(`../../../${fishs[0].image}`)}
                        />
                        <View>
                            <Text
                                style={{
                                    fontSize: 30,
                                    fontWeight: 'bold',
                                }}
                            >Peixe: {fishs[0].name || ''}</Text>
                            <Text
                                style={{
                                    fontSize: 18,
                                }}
                            >{fishs[0].cientificName || ''}</Text>

                            
                            <View style={{
                                flexDirection: 'row',
                                flexWrap: 'wrap',
                                width: 200,
                                wordBreak: 'break-all',
                                justifyContent: 'flex-start', // Ajuste conforme necessário
                                alignItems: 'flex-start', // Ajuste conforme necessário
                            }}>
                            {fishs[0].otherCommonNames.length > 0 && fishs[0].otherCommonNames.map((name, index) => (
                                <View
                                key={index}
                                style={{
                                    fontSize: 9,
                                    padding: 2,
                                    margin: 2,
                                    backgroundColor: '#ccc',
                                    flexShrink: 1,
                                    wordBreak: 'break-all',
                                }}
                                >
                                <Text>{name || ''}</Text>
                                </View>
                            ))}
                            </View>
                        </View>
                    </View>
                    <View style={{
                        display: 'flex', 
                        flexDirection: 'row',
                        justifyContent: 'space-between',
                        gridColumnGap: 10,
                        alignItems: 'center'
                    }}>
                        <Text
                            style={{
                                fontSize: 32,
                                fontWeight: 'bold',
                                color: '#348feb'
                            }}>
                            <FontAwesomeIcon icon={faThumbsUp} /> {fishs[0].like || 0}
                        </Text>
                        <Text
                            style={{
                                fontSize: 32,
                                fontWeight: 'bold',
                                color: '#eb4034'
                            }}>
                            <FontAwesomeIcon icon={faThumbsUp} flip='vertical' rotation={180}/> {fishs[0].dislike || 0}
                        </Text>
                        <View>
                            <Text 
                            style={{
                                textAlign: 'right',
                            }}>
                                X: {fishs[0].x || ''}
                            </Text>
                            <Text 
                            style={{
                                textAlign: 'right',
                            }}>
                                Y: {fishs[0].y || ''}
                            </Text>
                        </View>
                    </View>
                    <View
                        style={{
                            marginTop: 20,
                            marginBottom: 20,
                            height: 3,
                            backgroundColor: '#ccc',
                        }}
                    >
                    </View>
                        {
                            fishs[0].comments.length > 0 && fishs[0].comments.map((comment, index) => (
                                <View
                                    key={index}
                                    style={{
                                        display: 'flex',
                                        flexDirection: 'column',
                                        marginTop: 10,
                                        marginBottom: 10,
                                    }}
                                >
                                    <Text
                                        style={{
                                            fontSize: 24,
                                            fontWeight: 'bold',
                                        }}
                                    >{comment.from && usersList.length != 0 && (
                                        usersList.find((user) => user.id == comment.from).name
                                    )}</Text>
                                    <Text
                                        style={{
                                            fontSize: 18,
                                        }}
                                    >{comment.comment || ''}</Text>
                                </View>
                            ))
                        }
                    <View
                        style={{
                            display: 'flex',
                            flexDirection: 'column',
                            marginTop: 10,
                            marginBottom: 10,
                        }}
                    >
                        <Text
                            style={{
                                fontSize: 24,
                                fontWeight: 'bold',
                            }}
                        >Comentar</Text>
                        <textarea
                            style={{
                                width: '100%',
                                height: 100,
                                fontSize: 18,
                            }}
                        />
                        <View
                            style={{
                                marginTop: 20,
                                marginBottom: 20,
                                height: 3,
                                backgroundColor: '#ccc',
                            }}
                        >
                        </View>
                        <Button title="Enviar" onPress={() => {}} />

                        <View style={{
                            display: 'flex',
                            flexDirection: 'row',
                            justifyContent: 'space-between',
                            marginTop: 10,
                        }}>
                            <Button title="Like" onPress={() => {}} />
                            <Button title="Dislike" onPress={() => {}} />

                            <Button title="Voltar" onPress={() => navigation.goBack()} />

                        </View>
                    </View>
                </View>
            )}
        </View>
    )
}