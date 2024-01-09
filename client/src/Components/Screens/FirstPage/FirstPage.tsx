import {View, Text, StyleSheet} from 'react-native';
import { VStack, Center, Button, Heading } from 'native-base';
// import {useNavigation } from '@react-navigation/native';

const FirstPage = () => {

    // const nav = useNavigation();
    return (

        <View>
            <VStack>
                <View style={styles.upperView}>
                    <Center>
                        <Heading>Musician Friend</Heading>
                    </Center>
                </View>
                <View style={styles.lowerView}>
                    <Center>
                        <VStack space={10}>
                            <Text>Connect With Local Musicians and Live Out Your Dreams</Text>
                            {/* <Button onPress={()=> nav.navigate('login')} >Log In</Button> */}
                            <Button>SignUp</Button>
                        </VStack>
                    </Center>
                </View>
            </VStack>
        </View>
)};


const styles = StyleSheet.create({
    upperView: {
        height: '45%',
        position: 'relative',
        top: '25%'
    },
    lowerView: { 
        height: '55%',
        marginTop: 50
    }
})

export default FirstPage;