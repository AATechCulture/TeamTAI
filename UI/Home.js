
import React, {useState} from 'react';
import { TouchableOpacity, Dimensions, View, Text, StyleSheet, ImageBackground, Image, ScrollView, Linking} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import Ionicons from '@expo/vector-icons/Ionicons';
import BottomNavigation from './bottomnav';
import CancelledScreen from './Cancelled';


const word = "If you are traveling November 5, 2023, please wait until \n23 hours before scheduled departure to check-in."
const word2 = "Earn 50,000 bonus miles \nPlus, first checked bag is free on domestic American Airlines itineraries \n\nTerms apply.\n \nLearn more ->"
const screenWidth = Dimensions.get('window').width;
const shiftPercentage = 59.5;
const shiftPercentage_savings = 90.5;


const HomeScreen = () => {
    const phoneNumber = '8447380449'; // Replace with the desired phone number

    const handleCallClick = () => {
        Linking.openURL(`tel:${phoneNumber}`);
        
        setTimeout(() => {
          setShowScreen(true);
        }, 10000);
      };
    const [done, setDone] = useState(true)
    let toggle = 0

    if(done){
       return( <ScrollView>
        <ImageBackground
            source={require('../assets/american_bg.jpg')}
            style={styles.backgroundImage}
        >
            <View style={styles.headerContainer}>
                <Text style={styles.headerText}>American</Text>
                <Image
                    source={require('../assets/american_logo1.png')}
                    style={styles.logo} />
                <TouchableOpacity style={styles.icons}>
                    <Icon name="comments" size={24} color="#FFFFFF" />
                </TouchableOpacity>
                <TouchableOpacity style={styles.icons}>
                    <Icon name="envelope" size={24} color="#FFFFFF" />
                </TouchableOpacity>
            </View>

            <TouchableOpacity style={styles.userInfoContainer}>
                <Text style={styles.userName}>Opeyeoluwa Olanipekun</Text>
                <Text style={styles.memberStatus}>AAdvantage member</Text>
                <Text style={styles.awardMiles}>Available Award miles : 45,000</Text>
            </TouchableOpacity>

            <View style={styles.daylightSavings}>
                <View style={{
                    backgroundColor: "#ff4d01", padding: 10, width: (screenWidth * shiftPercentage_savings) / 100, borderTopLeftRadius: 10, borderTopRightRadius: 10
                }}>
                    <Text style={styles.daylightHeaderText}>Daylight Savings Time is Ending</Text>
                </View>
                <Text style={styles.daylightText}>{word}</Text>
            </View>
     <View>
            <View style={styles.planeHeader}>
                <Text style={styles.planeInfo}>AA 4853</Text>
                <View style={{ backgroundColor: 'green', width: 100, height: 30, marginLeft: (screenWidth * shiftPercentage) / 100, marginTop: -30, marginBottom: 15 }}>
                    <Text style={{ margin: 7, color: 'white', textAlign: 'center', fontSize: 12, fontWeight: '600' }}>ON TIME</Text>
                </View>
                <Text style={styles.planetext}>DFW -> HSV</Text>
                <View style={styles.line}></View>
                <Text style={styles.planetext}>Departs Sunday, 4:52 PM</Text>
                <Text style={styles.date}>SUNDAY, NOVEMBER 5, 2023. LUXEVU</Text>
            </View>
            
            <View style={{margin: 20, flex: 1, backgroundColor:'rgba(255, 255, 255, 0.5)', height:400, alignItems: 'center', justifyContent:'center', padding: 20, borderRadius: 10}}>
            <Ionicons name="airplane-outline" size={54} color="black" style = {{marginTop: 20, alignContent: 'center'}} />
            <View style={{ marginTop: 10,marginLeft: 0,flexDirection: "row",flexWrap: "wrap",flexBasis: "auto",flexGrow: 1, alignContent:'flex-start', justifyContent: 'flex-start'}}>
                <Text style={styles.screen2_text}> Departs {'\n'} DFW {'\n'} 7:00am </Text>
                <View>
                <Ionicons name="alarm-outline" size={24} color="black" style={{marginLeft: 19, marginTop: 10}}/>
                    <Text style={{fontSize: 15, textAlign: 'center', color: 'black', marginRight: 2}}> {'\n'} 2h 50min</Text>
                </View>
                <Text style={styles.screen2_text}>Arrives {'\n'} HSV {'\n'} 9:50am</Text>
            </View> 
            <View style={{ marginTop: 10,marginLeft: 15,flexDirection: "row",flexWrap: "wrap",flexBasis: "auto",flexGrow: 1, alignContent:'flex-start', justifyContent: 'flex-start'}}>
                <Text style={styles.gate_text}> GATE {'\n'} A </Text>
                <Text style={styles.gate_text}> Terminal {'\n'} A 20 </Text>
                <Text style={styles.gate_text}> GATE {'\n'} C</Text>
                <Text style={styles.gate_text}> Terminal {'\n'} C 20 </Text>
            </View> 
            </View>
        <TouchableOpacity style = {{backgroundColor: '#0096fe', margin: 20, marginTop: 0, padding: 10}}>
        <Text style={{color: 'white', fontSize: 20, textAlign: 'center'}}> CHECK IN </Text>
        </TouchableOpacity>
        <TouchableOpacity style ={{backgroundColor: 'green', margin: 20, marginTop: 0, padding: 10}} onPress={()=>{toggle+=1, setDone(false); handleCallClick() }}>
        <Text style={{color: 'white', fontSize: 20, textAlign: 'center'}}> Call SkAI </Text>
        </TouchableOpacity>
        <View style={styles.promotionContainer}>
            <Text style={styles.promotionText}>{word2}</Text>
        </View>
        </View> 
        </ImageBackground>
            
            </ScrollView>
        )
    } else {
       return( <CancelledScreen/>)
    }

};

const styles = StyleSheet.create({
    gate_text:{
        color: 'black',
        fontSize: 14,
        fontWeight: 'bold',
        padding: 10,
        textAlign: 'center',
        alignContent: 'center',
        marginRight: 3
    },
    screen2_text:{
        color: 'black',
        fontSize: 22,
        fontWeight: 'bold',
        padding: 10,
        textAlign: 'center'
      },
    creditCard: {
        padding: 10,
        width: 100,
        height: 100,
        margin: 0,
        resizeMode: "contain",
    },
    promotionContainer: {
        flexDirection: "row",
        backgroundColor: 'black',
        padding: 20,
        margin: 20,
    },
    promotionText: {
        fontSize: 14,
        color: "white",
        paddingRight: 0,
    },
    planeHeader: {
        backgroundColor: 'white',
        padding: 20,
        margin: 20,
        borderRadius:10
    },
    date: {
        color: 'blue',
    },
    planeInfo: {
        fontSize: 18
    },
    planetext: {
        fontSize: 22,
    },
    backgroundImage: {
        flex: 1,
        width: '100%',
        height: '100%',
    },
    line: {
        borderBottomWidth: 1,
        borderBottomColor: 'grey',
        marginVertical: 10,
    
        marginLeft: -20, // Add this line
        marginRight: -20,
    },
    headerContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 25,
        paddingHorizontal: 10,
        paddingTop: 10,
    },
    headerText: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#FFFFFF',
        marginLeft: 20,
    },
    icons: {
        flexDirection: 'row',
        margin: 10,
        alignItems: "flex-end",
        padding: 20
    },
    logo: {
        marginTop: 10,
        padding: 10,
        width: 70,
        height: 70,
        marginRight: 350
    },
    userInfoContainer: {
        backgroundColor: 'rgba(255, 255, 255, 0.2)',
        padding: 20,
        borderRadius: 10,
        margin: 20,
        alignItems: 'left',
    },
    userName: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#FFFFFF',
    },
    memberStatus: {
        fontSize: 18,
        marginVertical: 10,
        color: '#FFFFFF',
    },
    awardMiles: {
        fontSize: 14,
        color: '#FFFFFF',
    },
    daylightSavings: {
        padding: 20,
        backgroundColor: "#FFFFFF",
        margin: 20,
        alignItems: 'left',
        borderRadius: 10,
        padding: 0,
    },
    daylightHeaderText: {
        fontSize: 18,
        fontWeight: 'bold',
        textAlign: 'center',
        color: '#FFFFFF',
    },
    daylightText: {
        fontSize: 13,
        padding: 10,
        marginVertical: 10,
        color: '#000000',
    },
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 20,
        color: '#FFFFFF', // White text
    },
    detailsContainer: {
        width: '80%',
    },
    detailLabel: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#FF5722', // Red text
    },
    detailText: {
        fontSize: 16,
        marginBottom: 10,
        color: '#FFFFFF', // White text
    },
});

export default HomeScreen;
