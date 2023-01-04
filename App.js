
import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';

import TelaInicial from '../ScrollView/Tela Inicial/index';
import Planetas from '../ScrollView/Paginas/Planetas/index';
import Galaxias from '../ScrollView/Paginas/Galaxias/index';
import Buraco from '../ScrollView/Paginas/Buraco Negro/index';
const Stack = createStackNavigator();


export default function App() {
  return (
 <NavigationContainer>
  <Stack.Navigator>
  <Stack.Screen name= 'Tela Inicial' component ={TelaInicial} />
  <Stack.Screen name= 'Planetas' component ={Planetas} />
  <Stack.Screen name= 'Galáxias' component ={Galaxias} />
  <Stack.Screen name= 'Buraco Negro' component ={Buraco}/>
  </Stack.Navigator>
 </NavigationContainer>
  );
}

