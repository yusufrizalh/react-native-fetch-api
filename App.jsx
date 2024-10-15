import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import EmployeesList from './employees/EmployeesList';
import EmployeeDetail from './employees/EmployeeDetail';
import EmployeeCreate from './employees/EmployeeCreate';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="EmployeesList">
        <Stack.Screen
          name="EmployeesList"
          component={EmployeesList}
          options={{title: 'Employees List'}}
        />
        <Stack.Screen
          name="EmployeeDetail"
          component={EmployeeDetail}
          options={{title: 'Employee Detail'}}
        />
        <Stack.Screen
          name="EmployeeCreate"
          component={EmployeeCreate}
          options={{title: 'Employee Create'}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
