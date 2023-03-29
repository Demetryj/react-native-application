import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { PostsScreen } from "./PostsScreen";
import { CreatePostsScreen } from "./CreatePostsScreen";
import { ProfileScreen } from "./ProfileScreen";

const HomeTab = createBottomTabNavigator();

export const Home = () => {
  return (
    <HomeTab.Navigator>
      <HomeTab.Screen name="Posts" component={PostsScreen}></HomeTab.Screen>
      <HomeTab.Screen
        name="Create post"
        component={CreatePostsScreen}
      ></HomeTab.Screen>
      <HomeTab.Screen name="Profile" component={ProfileScreen}></HomeTab.Screen>
    </HomeTab.Navigator>
  );
};
