import { NavigationContainer } from '@react-navigation/native';
import './global.css';
import { AppStack, AuthNavigator } from '@constants/router';
import { View, ActivityIndicator } from 'react-native';
import { UserProvider } from 'context/userContext';
import { UserContext } from '@utils/helpers';

export default function App() {
  return (
    <UserProvider>
      <NavigationContainer>
        <UserContext.Consumer>
          {({ user, loading }) =>
            loading ? (
              <View className="flex-1 justify-center items-center">
                <ActivityIndicator size="large" />
              </View>
            ) : user ? (
              <AppStack />
            ) : (
              <AuthNavigator />
            )
          }
        </UserContext.Consumer>
      </NavigationContainer>
    </UserProvider>
  );
}
