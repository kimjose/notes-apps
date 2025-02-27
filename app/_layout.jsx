import { Stack } from "expo-router";

const RootLayout = ()=> {
  return <Stack 
    screenOptions={{
      gestureEnabled: true,
      headerStyle: {
        backgroundColor: '#f4511e',
      },
      headerTintColor: '#fff',
      headerTitleStyle: {
        fontSize: 20,
        fontWeight: 'bold',
      },
      contentStyle: {
        backgroundColor: 'white',
        paddingTop: 10,
        paddingHorizontal: 10,
      },
    }}
  >
    <Stack.Screen name="index" options={{title: 'Home'}} />
    <Stack.Screen name="notes" options={{headerTitle: 'Notes'}} />
  </Stack>;
}

export default RootLayout;
