import React from 'react'
import {
    StyleSheet,
    Text,
    View,
    ImageBackground,
    TouchableOpacity,
} from 'react-native';
import { Header, Col, Grid, Icon } from 'native-base'

const BedRoomScreen = ({ navigation }) => {
    const image = require('../img/five.png')
    const [cortinasIsPress, setcortinasIsPress] = React.useState(false)
    const [ventiladorIsPress, setventiladorIsPress] = React.useState(false)
    const [puertaIsPress, setpuertaIsPress] = React.useState(false)
    const [luzIsPress, setluzIsPress] = React.useState(false)

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
                            <Text style={styles.text2}>Recamara</Text>
                        </View>

                    </View>
                </Header>
                <Grid style={{ marginTop: 150 }}>
                    <Col>
                        <TouchableOpacity onPress={() => {
                            setcortinasIsPress(!cortinasIsPress)
                        }}

                            style={cortinasIsPress ? styles.cardBodyPress : styles.cardBody}
                        >
                            <View style={styles.cardConted}>
                                <Text style={styles.cardTitle}>
                                    {cortinasIsPress ? "Cerrar las cortinas" : "Abrir las cortinas"}
                                </Text>

                            </View>

                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => setpuertaIsPress(!puertaIsPress)}
                            style={puertaIsPress ? styles.cardBodyPress : styles.cardBody}
                        >
                            <View style={styles.cardConted}>
                                <Text style={styles.cardTitle}>
                                    {puertaIsPress ? "Cerrar la puerta" : "Abrir la puerta"}

                                </Text>

                            </View>

                        </TouchableOpacity>
                    </Col>
                    <Col>
                        <TouchableOpacity onPress={() => setventiladorIsPress(!ventiladorIsPress)}
                            style={ventiladorIsPress ? styles.cardBodyPress : styles.cardBody}
                        >
                            <View style={styles.cardConted}>
                                <Text style={styles.cardTitle}>
                                    {ventiladorIsPress ? "Apagar    ventilador" : "Encender ventilador"}
                                </Text>

                            </View>

                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => setluzIsPress(!luzIsPress)}
                            style={luzIsPress ? styles.cardBodyPress : styles.cardBody}
                        >
                            <View style={styles.cardConted}>
                                <Text style={styles.cardTitle}>
                                    {luzIsPress ? "Apagar la luz" : "Encender la luz"}
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
        marginLeft: -95,
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

export default BedRoomScreen;