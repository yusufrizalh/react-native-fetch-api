/* eslint-disable react/no-unstable-nested-components */
import React, {useState, useEffect, useCallback} from 'react';
import {
  View,
  Text,
  FlatList,
  StyleSheet,
  TouchableOpacity,
  RefreshControl,
} from 'react-native';
import {FAB} from '@rneui/themed';
import {useFocusEffect} from '@react-navigation/native';

const EmployeesList = ({navigation}) => {
  const EmployeeCard = ({employee}) => (
    <TouchableOpacity
      style={styles.card}
      onPress={() => {
        //* Open Employee Detail
        console.log('EMPLOYEE DETAIL: ', employee);
        navigation.navigate('EmployeeDetail', {
          data: employee,
          msg: 'Open Detail',
        });
      }}>
      <Text style={styles.empName}>{employee.name}</Text>
      <Text>{employee.email}</Text>
    </TouchableOpacity>
  );

  const [employees, setEmployees] = useState([]);
  const [refresh, setRefresh] = useState(false);
  const [visible, setVisible] = useState(true);

  const onRefresh = useCallback(() => {
    setRefresh(true);
    setTimeout(() => {
      getAllEmployees();
      setRefresh(false);
    }, 3000);
  }, []);

  useEffect(() => {
    // navigation.addListener('focus', () => getAllEmployees());
  });

  useFocusEffect(
    useCallback(() => {
      getAllEmployees();
    }, []),
  );

  const getAllEmployees = () => {
    fetch('http://192.168.4.139/react-native-api/get_all_employees.php')
      .then(response => response.json())
      .then(data => {
        console.log('RESPONSE: ', data);
        setEmployees(data);
      })
      .catch(error => {
        console.log('ERROR FETCHING EMPLOYEES: ', error);
      });
  };

  const renderItems = ({item}) => <EmployeeCard employee={item} />;

  return (
    <View style={styles.container}>
      <TouchableOpacity
        onPress={() => {
          console.log('Employee Create');
          navigation.navigate('EmployeeCreate');
        }}>
        <Text>Create New Employee</Text>
      </TouchableOpacity>
      <FlatList
        refreshControl={
          <RefreshControl refreshing={refresh} onRefresh={onRefresh} />
        }
        data={employees}
        extraData={employees}
        keyExtractor={item => item.id.toString()}
        renderItem={renderItems}
        numColumns={2}
      />
      {/* <FAB
        visible={visible}
        icon={{name: 'add', color: 'white'}}
        size="large"
        placement="right"
        onPress={() => {
          console.log('Employee Create');
          navigation.navigate('EmployeeCreate');
        }}
      /> */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 12,
    backgroundColor: '#f0f0f0',
  },
  card: {
    flex: 1,
    width: '100%',
    backgroundColor: '#cccccc',
    borderRadius: 12,
    padding: 12,
    marginVertical: 6,
    marginHorizontal: 6,
  },
  empName: {
    color: '#000000',
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 8,
  },
});

export default EmployeesList;
