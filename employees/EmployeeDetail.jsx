/* eslint-disable react-native/no-inline-styles */
import React, {useState} from 'react';
import {View, Alert} from 'react-native';
import {Input, Button} from '@rneui/themed';

const EmployeeDetail = ({route, navigation}) => {
  const {data, msg} = route.params;
  const [id, setId] = useState(data.id);
  const [name, setName] = useState(data.name);
  const [email, setEmail] = useState(data.email);
  const [phone, setPhone] = useState(data.phone);
  const [address, setAddress] = useState(data.address);

  const updateEmployee = () => {
    fetch('http://192.168.4.139/react-native-api/update_employee.php', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        id: id,
        name: name,
        email: email,
        phone: phone,
        address: address,
      }),
    })
      .then(response => response.json())
      .then(output => {
        console.log('OUTPUT: ', output);
        Alert.alert('Employee Updated Successfully');
        navigation.navigate('EmployeesList');
      })
      .catch(error => {
        console.log('ERROR: ', error);
      });
  };

  const deleteEmployee = () => {
    fetch('http://192.168.4.139/react-native-api/delete_employee.php', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        id: id,
      }),
    })
      .then(response => response.json())
      .then(output => {
        console.log('OUTPUT: ', output);
        Alert.alert('Employee Deleted Successfully');
        navigation.navigate('EmployeesList');
      })
      .catch(error => {
        console.log('ERROR: ', error);
      });
  };

  return (
    <View>
      <Input
        placeholder="Enter employee name"
        leftIcon={{
          type: 'font-awesome',
          name: 'chevron-right',
          size: 18,
          color: 'black',
        }}
        value={name}
        onChangeText={textInputValue => setName(textInputValue)}
      />
      <Input
        placeholder="Enter employee email"
        leftIcon={{
          type: 'font-awesome',
          name: 'chevron-right',
          size: 18,
          color: 'black',
        }}
        value={email}
        onChangeText={textInputValue => setEmail(textInputValue)}
      />
      <Input
        placeholder="Enter employee phone"
        leftIcon={{
          type: 'font-awesome',
          name: 'chevron-right',
          size: 18,
          color: 'black',
        }}
        value={phone}
        onChangeText={textInputValue => setPhone(textInputValue)}
      />
      <Input
        placeholder="Enter employee address"
        leftIcon={{
          type: 'font-awesome',
          name: 'chevron-right',
          size: 18,
          color: 'black',
        }}
        value={address}
        onChangeText={textInputValue => setAddress(textInputValue)}
      />
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'center',
          marginVertical: 12,
          marginHorizontal: 12,
        }}>
        <Button
          type="solid"
          radius={'sm'}
          onPress={updateEmployee}
          buttonStyle={{
            backgroundColor: 'blue',
            borderRadius: 3,
          }}
          containerStyle={{
            width: 200,
            marginHorizontal: 12,
            marginVertical: 12,
          }}>
          UPDATE
        </Button>
        <Button
          type="solid"
          radius={'sm'}
          onPress={deleteEmployee}
          buttonStyle={{
            backgroundColor: 'red',
            borderRadius: 3,
          }}
          containerStyle={{
            width: 200,
            marginHorizontal: 12,
            marginVertical: 12,
          }}>
          DELETE
        </Button>
      </View>
    </View>
  );
};

export default EmployeeDetail;
