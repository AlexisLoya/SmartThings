import React from 'react'
import {
    StyleSheet,
    Text,
    View,
    ImageBackground,
    TouchableOpacity,

} from 'react-native';
import { Header, Col, Grid, Icon } from 'native-base'

const GardenScreen = ({ navigation }) => {
    const image = require('../img/three.png')
    const [camarasIsPress, setcamarasIsPress] = React.useState(false)
    const [aspersoresIsPress, setaspersoresIsPress] = React.useState(false)
    const [garageIsPress, setgarageIsPress] = React.useState(false)
    const [lucesIsPress, setlucesIsPress] = React.useState(false)

    return (

        <View style={styles.container}>
            <ImageBackground source={image} style={styles.image}>
                <Header
                    style={{ marginTop: 200, flexDirection: 'row', }}
                    transparent
                    androidStatusBarColor="transparent"
                >
                    <View
                        style={{ alignSelf: 'center', flex: 1 }}
                    >
                        <TouchableOpacity onPress={() => navigation.goBack()}
                            style={{ alignSelf: 'flex-start' }}
                        >
                            <Icon
                                name="arrowleft"
                                style={{
                                    color: "#000",
                                    fontSize: 30,
                                }}
                                type="AntDesign"
                            />
                        </TouchableOpacity>

                    </View>
                    <View style={{ alignSelf: 'center', flex: 1 }}>
                        <View
                            style={{ alignSelf: 'flex-start' }}
                        >
                            <Text style={styles.text2}>Jardín</Text>
                        </View>

                    </View>
                </Header>
                <Grid style={{ marginTop: 150 }}>
                    <Col>
                        <TouchableOpacity onPress={() => {
                            setcamarasIsPress(!camarasIsPress)
                        }}

                            style={camarasIsPress ? styles.cardBodyPress : styles.cardBody}
                        >
                            <View style={styles.cardConted}>
                                <Text style={styles.cardTitle}>
                                    {camarasIsPress ? "Apagar camaras" : "Encender camaras"}
                                </Text>

                            </View>

                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => setgarageIsPress(!garageIsPress)}
                            style={garageIsPress ? styles.cardBodyPress : styles.cardBody}
                        >
                            <View style={styles.cardConted}>
                                <Text style={styles.cardTitle}>
                                    {garageIsPress ? "Cerrar puerta del garage" : "Abrir puerta del garage"}

                                </Text>

                            </View>

                        </TouchableOpacity>
                    </Col>
                    <Col>
                        <TouchableOpacity onPress={() => setaspersoresIsPress(!aspersoresIsPress)}
                            style={aspersoresIsPress ? styles.cardBodyPress : styles.cardBody}
                        >
                            <View style={styles.cardConted}>
                                <Text style={styles.cardTitle}>
                                    {aspersoresIsPress ? "Apagar    aspersores" : "Encender aspersores"}
                                </Text>

                            </View>

                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => setlucesIsPress(!lucesIsPress)}
                            style={lucesIsPress ? styles.cardBodyPress : styles.cardBody}
                        >
                            <View style={styles.cardConted}>
                                <Text style={styles.cardTitle}>
                                    {lucesIsPress ? "Apagar luces" : "Encender luces"}
                                </Text>

                            </View>

                        </TouchableOpacity>
                    </Col>
                </Grid>
            </ImageBackground>
        </View>
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
        marginLeft: -65,
        alignSelf: 'center',
        color: "black",
        fontSize: 42,
        fontWeight: "bold",
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
    cardBodyPress: {
        backgroundColor: 'rgba(86, 176, 50, 0.8)',
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

export default GardenScreen;