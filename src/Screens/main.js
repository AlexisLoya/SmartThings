import React from 'react'
import {
    StyleSheet,
    Text,
    View,
    ImageBackground,
    TouchableOpacity,
} from 'react-native';
import { Container, Header, Col, Grid, Icon } from 'native-base'

const mainScreen = ({ navigation }) => {
    const image = require('../img/two.png')
    return (
        <Container style={styles.container}>
            <ImageBackground source={image} style={styles.image}>
                <Header
                    style={{ marginTop: 200, flexDirection: 'column' }}
                    transparent
                    androidStatusBarColor="transparent"
                >
                    <Text style={styles.text}>Mi hogar</Text>
                    <Text style={styles.text2}>Alexis Loya García</Text>
                </Header>
                <Grid style={{ marginTop: 150 }}>
                    <Col>
                        <TouchableOpacity onPress={() => navigation.navigate("kitchenScreen")}
                            style={styles.cardBody}
                        >
                            <View style={styles.cardConted}>
                                <Text style={styles.cardTitle}>
                                    Cocina
                                </Text>
                                <Icon
                                    name="lemon-o"
                                    style={{
                                        color: "#fff",
                                        fontSize: 25,
                                    }}
                                    type="FontAwesome"
                                />
                            </View>

                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => navigation.navigate("GardenScreen")}
                            style={styles.cardBody}
                        >
                            <View style={styles.cardConted}>
                                <Text style={styles.cardTitle}>
                                    Jardín
                                </Text>
                                <Icon
                                    name="baidu"
                                    style={{
                                        color: "#fff",
                                        fontSize: 25,
                                    }}
                                    type="Entypo"
                                />
                            </View>

                        </TouchableOpacity>
                    </Col>
                    <Col>
                        <TouchableOpacity onPress={() => navigation.navigate("LivingRoomScreen")}
                            style={styles.cardBody}
                        >
                            <View style={styles.cardConted}>
                                <Text style={styles.cardTitle}>
                                    Sala
                                </Text>
                                <Icon
                                    name="tv-outline"
                                    style={{
                                        color: "#fff",
                                        fontSize: 25,
                                    }}
                                    type="Ionicons"
                                />
                            </View>

                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => navigation.navigate("BedRoomScreen")}
                            style={styles.cardBody}
                        >
                            <View style={styles.cardConted}>
                                <Text style={styles.cardTitle}>
                                    Recamara
                                </Text>
                                <Icon
                                    name="bed"
                                    style={{
                                        color: "#fff",
                                        fontSize: 25,
                                    }}
                                    type="Ionicons"
                                />
                            </View>

                        </TouchableOpacity>
                    </Col>
                </Grid>

            </ImageBackground>
        </Container>
    )

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: "column"
    },
    image: {
        flex: 1,
        resizeMode: "cover",
        justifyContent: "center"
    },
    text: {
        alignSelf: 'center',
        color: "black",
        fontSize: 42,
        fontWeight: "bold",
        textAlign: "center",
    },
    text2: {
        alignSelf: 'center',
        color: "black",
        fontSize: 14,
        textAlign: "center",
    },
    cardBody: {
        backgroundColor: 'rgba(52, 52, 52, 0.8)',
        height: 100,
        width: 160,
        borderRadius: 20,
        marginRight: 10,
        marginLeft: 17,
        marginBottom: 20,
        marginTop: 20,
        alignItems: 'center'
    },
    cardConted: {
        alignItems: "center",
        alignSelf: "center",
        marginTop: 20,
    },
    cardTitle: {
        textAlign: "center",
        alignItems: 'center',
        paddingHorizontal: 10,
        fontWeight: "bold",
        fontSize: 16,
        color: "#fff"
    }
});

export default mainScreen;
