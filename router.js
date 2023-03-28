import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { LoginScreen } from "./Screens/auth/LoginScreen";
import { RegistrationScreen } from "./Screens/auth/RegistrationScreen";

const StackAuth = createNativeStackNavigator();

export const useRoute = (isAuth) => {
  if (!isAuth) {
    return (
      <StackAuth.Navigator>
        <StackAuth.Screen
          options={{ headerShown: false }}
          name="LoginScreen"
          component={LoginScreen}
        ></StackAuth.Screen>

        <StackAuth.Screen
          options={{ headerShown: false }}
          name="RegistrationScreen"
          component={RegistrationScreen}
        ></StackAuth.Screen>
      </StackAuth.Navigator>
    );
  }
};
