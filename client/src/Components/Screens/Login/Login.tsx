import {useState} from 'react';
import {View, TextInput, StyleSheet} from 'react-native';
import {Button, Input, Center, Box, Heading, VStack, FormControl, Link, HStack, Text} from 'native-base';

const Login = () => {
  const [ username, setUsername] = useState('');
  const [ password, setPassword] = useState('');


  const onSubmit = (e) => {

  }

  return (
    //I took this from Native Base and added some slight changes. Might change it up a bit more though

    <Center w="100%">
      <Box safeArea p="2" py="8" w="90%" maxW="290">
        <Heading size="lg" fontWeight="600" color="coolGray.800" _dark={{
        color: "warmGray.50"
      }}>
          Musician Finder
        </Heading>
        <Heading mt="1" _dark={{
        color: "warmGray.200"
      }} color="coolGray.600" fontWeight="medium" size="xs">
          Sign in to continue!
        </Heading>

        <VStack space={5} mt="5">
          <FormControl>
            <FormControl.Label>Email ID</FormControl.Label>
            <Input 
              placeholder='Email'              
              variant="rounded"
              onChange={e => setUsername(e.target.value)} />
          </FormControl>
          <FormControl>
            <FormControl.Label>Password</FormControl.Label>
            <Input 
              variant="rounded"
              placeholder='Password' 
              type="password"
              onChange={e => setPassword(e.target.value)} />
            <Link _text={{
            fontSize: "xs",
            fontWeight: "500",
            color: "indigo.500"
          }} alignSelf="flex-end" mt="1">
              Forget Password?
            </Link>
          </FormControl>
          <Button mt="2" colorScheme="indigo">
            Sign in
          </Button>
          <HStack mt="6" justifyContent="center">
            <Text fontSize="sm" color="coolGray.600" _dark={{
            color: "warmGray.200"
          }}>
              I'm a new user.{" "}
            </Text>
            <Link _text={{
            color: "indigo.500",
            fontWeight: "medium",
            fontSize: "sm"
          }} href="#">
              Sign Up
            </Link>
          </HStack>
        </VStack>
      </Box>
    </Center>


//Was originally trying this. Might go with the round ended inputs still but
    // <View style={styles.layout}>
    //     <Text style={styles.title}>Login</Text>
    //     <View style={styles.loginContainer}>
    //       <Input 
    //           maxLength={20} 
    //           variant="rounded"
    //           placeholder="Username"
    //           onChange={(e)=>setUsername(e.target.value)} />
    //       <Input 
    //           maxLength={20} 
    //           variant="rounded"
    //           placeholder="Username"
    //           onChange={(e)=>setUsername(e.target.value)} />
          
    //         <Button size="sm" variant="ghost">Tester Button</Button>
          
    //     </View>
    // </View>
  )
}

const styles = StyleSheet.create({
  layout: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    width: '100%'
  },
  loginContainer: {
    position: 'relative',
    backgroundColor: 'grey',
    width: '80%',
    height: '80%'
    
  },

  title: {
    textAlign: 'center',
    fontSize: 50,
    marginTop: 70

  },
  inputContainer: {
    width: "80%",
    flex: 1,

  },
  textInput: {
    borderWidth: 2,
    borderRadius: 5,
    maxWidth: '80%',
    backgroundColor: "grey"
  },
});

export default Login;