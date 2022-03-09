import { createStackNavigator } from "@react-navigation/stack";

import SignUpScreen from "../screens/SignUp";

import globalStyles from "../styles/globalStyles";

const SignUpStackNavigator = createStackNavigator();

export const SignUpNavigator = () => {
  return (
    <SignUpStackNavigator.Navigator
      screenOptions={({ navigation }) => ({
        headerStyle: { backgroundColor: globalStyles.green },
        headerTitleStyle: { fontWeight: "bold" },
        headerTintColor: globalStyles.white,
        headerRight: () => (
          <HeaderButtons HeaderButtonComponent={CustomHeaderIcon}>
            <Item
              title="SellNow"
              iconName="shopping-cart"
              onPress={() => navigation.navigate("SellNow")}
            />
          </HeaderButtons>
        ),
        headerLeft: () => (
          <HeaderButtons HeaderButtonComponent={CustomHeaderIcon}>
            <Item
              title="Menu"
              iconName="menu"
              onPress={() => navigation.openDrawer()}
            />
          </HeaderButtons>
        ),
      })}
    >
      <CoursesStackNavigator.Screen
        name="SignUpScreen"
        component={SignUpScreen}
        options={{ title: "SignUpScreen" }}
      />
    </SignUpStackNavigator.Navigator>
  );
};
