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

export default SignInScreen = ({ setToken }) => {
  const navigation = useNavigation();
  return (
    <ScrollView>
      <View style={styles.formContainer}>
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
