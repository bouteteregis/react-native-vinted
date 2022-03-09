import { createDrawerNavigator } from "@react-navigation/drawer";
import { MaterialIcons, Ionicons } from "@expo/vector-icons";

import HomeNavigator from "./HomeNav";
import SignUpNavigator from "./SignUpNav";
import SignInNavigator from "./SignInNav";
import ProfileNavigator from "./ProfileNav";
import PaymentsNavigator from "./PaymentsNav";
import SettingsNavigator from "./SettingsNav";

const Drawer = createDrawerNavigator();

export const DrawerNavigator = () => {
  return (
    <Drawer.Navigator>
      <Drawer.Screen
        name="Home"
        component={HomeNavigator}
        options={{
          title: "Catalogue",
          drawerIcon: () => (
            <MaterialIcons name="menu-book" size={24} color="black" />
          ),
        }}
      />

      <Drawer.Screen
        name="SignUp"
        component={SignUpNavigator}
        options={{
          title: "SignUp",
          drawerIcon: () => (
            <MaterialIcons name="shopping-cart" size={24} color="black" />
          ),
        }}
      />

      <Drawer.Screen
        name="SignIn"
        component={SignInNavigator}
        options={{
          title: "SignIn",
          drawerIcon: () => (
            <MaterialIcons name="shopping-cart" size={24} color="black" />
          ),
        }}
      />

      <Drawer.Screen
        name="Profile"
        component={ProfileNavigator}
        options={{
          title: "Profile",
          drawerIcon: () => (
            <MaterialIcons name="shopping-cart" size={24} color="black" />
          ),
        }}
      />

      <Drawer.Screen
        name="Payments"
        component={PaymentsNavigator}
        options={{
          title: "Payments",
          drawerIcon: () => (
            <MaterialIcons name="credit-card" size={24} color="black" />
          ),
        }}
      />

      <Drawer.Screen
        name="Settings"
        component={SettingsNavigator}
        options={{
          title: "Settings",
          drawerIcon: () => (
            <MaterialIcons name="mic" size={24} color="black" />
          ),
        }}
      />
    </Drawer.Navigator>
  );
};
