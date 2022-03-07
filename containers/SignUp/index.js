import React, { useState } from "react";
import toto from "./style";
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

export default function SignUpScreen({ setToken }) {
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState(null);

  const handleSubmit = async (event) => {
    console.log(email);
    console.log(password);
    console.log(username);

    axios
      .post("http://localhost:3001/user/signup", {
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
    <View style={toto.textStyle}>
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
  );
}
