import React, { useState } from "react";
import axios from "axios";

import {
  StyleSheet,
  Text,
  TextInput,
  ScrollView,
  View,
  Button,
  Image,
  Platform,
} from "react-native";

export default SignUpScreen = () => {
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState(null);

  const [isLoading, setIsLoading] = useState(true);
  const [userToken, setUserToken] = useState(null);

  const setToken = async (token) => {
    if (token) {
      await AsyncStorage.setItem("userToken", token);
    } else {
      await AsyncStorage.removeItem("userToken");
    }

    setUserToken(token);
  };

  useEffect(() => {
    // Fetch the token from storage then navigate to our appropriate place
    const bootstrapAsync = async () => {
      // We should also handle error for production apps
      const userToken = await AsyncStorage.getItem("userToken");

      // This will switch to the App screen or Auth screen and this loading
      // screen will be unmounted and thrown away.
      setUserToken(userToken);

      setIsLoading(false);
    };

    bootstrapAsync();
  }, []);

  if (isLoading === true) {
    // We haven't finished checking for the token yet
    return null;
  }

  const handleSubmit = async (event) => {
    console.log(email);
    console.log(password);
    console.log(username);

    axios
      .post("http://192.168.1.11:3001/user/signup", {
        email: email,
        password: password,
        username: username,
      })
      .then(function (response) {
        setToken(response.data.token);
      })
      .catch(function (error) {
        console.log("response");
        console.log(error);
      });
  };

  return (
    <ScrollView>
      <View style={styles.formContainer}>
        <View>
          <Text>Email: </Text>
          <TextInput placeholder="Email" onChangeText={setEmail} />
          <Text>Name: </Text>
          <TextInput placeholder="Username" onChangeText={setUsername} />
          <Text>Password: </Text>
          <TextInput
            placeholder="Password"
            secureTextEntry={true}
            onChangeText={setPassword}
          />
          <Button title="Sign up" onPress={handleSubmit} />
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  formContainer: {
    backgroundColor: globalStyles.white,
    borderRadius: 9,
    padding: 20,
    margin: 20,
  },
});
