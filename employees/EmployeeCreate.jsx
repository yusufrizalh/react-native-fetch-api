/* eslint-disable react-native/no-inline-styles */
import React, {useState} from 'react';
import {View, Alert} from 'react-native';
import {Input, Button} from '@rneui/themed';

const EmployeeCreate = ({navigation}) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [address, setAddress] = useState('');

  const createEmployee = () => {
    fetch('http://192.168.4.139/react-native-api/create_employee.php', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        name: name,
        email: email,
        phone: phone,
        address: address,
      }),
    })
      .then(response => response.json())
      .then(output => {
        console.log('OUTPUT: ', output);
        Alert.alert('Employee Created Successfully');
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
          onPress={createEmployee}
          buttonStyle={{
            backgroundColor: 'blue',
            borderRadius: 3,
          }}
          containerStyle={{
            width: 200,
            marginHorizontal: 12,
            marginVertical: 12,
          }}>
          CREATE
        </Button>
      </View>
    </View>
  );
};
export default EmployeeCreate;
