import { useNavigation } from "@react-navigation/core";

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
  TouchableOpacity,
} from "react-native";

import styles from "./styles";

export default function SignInScreen({ setToken }) {
  const navigation = useNavigation();
  return (
    <View style={styles.textStyle}>
      <View>
        <Text>Name: </Text>
        <TextInput placeholder="Username" />
        <Text>Password: </Text>
        <TextInput placeholder="Password" secureTextEntry={true} />
        <Button
          title="Sign in"
          onPress={async () => {
            const userToken = "secret-token";
            setToken(userToken);
          }}
        />
        <TouchableOpacity
          onPress={() => {
            navigation.navigate("SignUp");
          }}
        >
          <Text>Create an account</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
