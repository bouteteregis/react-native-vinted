import { createStackNavigator } from "@react-navigation/stack";

import globalStyles from "../styles/globalStyles";

const CatalogueStackNavigator = createStackNavigator();

export const CatalogueNavigator = () => {
  return (
    <CatalogueStackNavigator.Navigator
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
        name="Catalogue"
        component={Catalogue}
        options={{ title: "Catalogue" }}
      />
      <CoursesStackNavigator.Screen
        name="Details"
        component={OfferDetails}
        options={({ route }) => ({
          title: route.params.title,
        })}
      />
    </CatalogueStackNavigator.Navigator>
  );
};
