import React, { useState } from 'react';
import { ImageBackground, Image, View, Pressable, ScrollView } from 'react-native';
import { formatWithMask, Masks } from 'react-native-mask-input';

import Text from '_components/Text';
import Button from '_components/Button';
import Input, { PasswordInput } from '_components/Input';
import { LockIcon, WarningIcon, PlusSquareIcon, MinusIcon } from '_components/icons';

const Background = require('_assets/images/auth/signup-bg.png');
const Logo = require('_assets/images/logo.png');

const RegisterPro = ({ navigation }) => {
  const [data, setData] = useState({
    fullName: '',
    email: '',
    country: '',
    telephone: ['1 210'],
    userType: 'client',
    mailVerified: 'true',
    invitationCode: '',
    password: '',
    confirmationCode: '',
  });
  const [phoneNumbers, setPhoneNumbers] = useState(['']);
  const [errors, setErrors] = useState(null);
  const [errorMsg, setErrorMsg] = useState('');

  const handleInput = name => value => {
    setData(prev => ({ ...prev, [name]: value }));
  };

  const handlePhoneInput = index => value => {
    setPhoneNumbers(prev => {
      const { masked } = formatWithMask({
        text: value,
        mask: Masks.BRL_PHONE,
      });
      value = masked;
      console.log('value', value);
      prev[index] = value;
      return [...prev];
    });
  };

  const addPhoneNumber = i => () => {
    if(phoneNumbers.length > 1) return;
    setPhoneNumbers(prev => {
      if (i === prev.length - 1) {
        prev.push('');
      } else {
        prev.splice(i, 1);
      }
      return [...prev];
    });
  };

  const register = async () => {
    if (!validate()) return;
    const body = {
			data: data,
		};
    // await fetch("http://95.216.115.245:8001/api/user/addUser", {
		// 	method: "POST",
		// 	headers: {
		// 		"Content-Type": "application/json",
		// 	},
		// 	body: JSON.stringify(body),
		// })
    // .then(async (res) => {
    //   let result = await res.json();
    //   console.log('register result', result);
    // });

    // console.log('result', response);

    navigation.navigate('ConfirmAccount');
  };

  const validate = () => {
    let _errors = {};
    let phoneNumberErrors = [];
    let _data = { ...data };

    ['fullName', 'email', 'country', 'invitationCode', 'password'].map(item => {
      if (!_data[item]) _errors[item] = true;
    });
    setErrorMsg('Complete all the fields correctly');

    if (_data.password !== _data.confirmationCode) {
      _errors.confirmationCode = true;
      setErrorMsg('Passwords don\'t match');
    };

    phoneNumbers.map((phone, i) => {
      const { unmasked } = formatWithMask({
        text: phone,
        mask: Masks.BRL_PHONE,
      });
      let phoneNumber = unmasked;

      if (phoneNumber === '1234567890') {
        phoneNumberErrors[i] = true;
        setErrorMsg('This phone number is already registered');
      };
      if (!phoneNumber) phoneNumberErrors[i] = true;
    });

    if (Object.keys(_errors).length > 0 || phoneNumberErrors.length > 0) {
      _errors.phone_number = phoneNumberErrors;
      setErrors(_errors);
      return false;
    }
    setErrors(null);
    setErrorMsg('');
    return true;
  };

  return (
    <View className="flex-1">
      <ImageBackground source={Background} resizeMode="cover" className="flex-1">
        <ScrollView>
          <View className="px-9 pt-28 pb-[120px]">
            <View className="flex items-center">
              <Image source={Logo} className="w-[199px] h-44 mb-6" />
              <Text type="h1" className="mb-9">Signup</Text>
            </View>

            {errors &&
              <View className="flex-row items-center mb-2">
                <WarningIcon />
                <Text className="ml-2 text-[12px] text-secondary-100">{errorMsg}</Text>
              </View>
            }
            <Input
              placeholder="Name & Lastname"
              className="mb-2"
              value={data.fullName}
              onChangeText={handleInput('fullName')}
              error={errors?.fullName}
            />
            <Input
              placeholder="Email"
              className="mb-2"
              value={data.email}
              onChangeText={handleInput('email')}
              error={errors?.email}
            />
            <Input
              placeholder="Country"
              className="mb-2"
              value={data.country}
              onChangeText={handleInput('country')}
              error={errors?.country}
            />
            {phoneNumbers.map((phoneNumber, i) => (
              <Input
                key={i}
                placeholder="Telephone"
                className="mb-2"
                value={phoneNumber}
                onChangeText={handlePhoneInput(i)}
                error={errors?.phone_number?.[i]}
                keyboardType="phone-pad"
                append={
                  <Pressable onPress={addPhoneNumber(i)}>
                    {i === phoneNumbers.length - 1 ? <PlusSquareIcon /> : <MinusIcon />}
                  </Pressable>
                }
              />
            ))}
            <Input
              placeholder="Invitation code"
              className="mb-2"
              value={data.invitationCode}
              onChangeText={handleInput('invitationCode')}
              error={errors?.invitationCode}
            />
            <PasswordInput
              PrependIcon={LockIcon}
              placeholder="Password"
              className="mb-2"
              value={data.password}
              onChangeText={handleInput('password')}
              error={errors?.password}
            />
            <PasswordInput
              PrependIcon={LockIcon}
              placeholder="Repeat Password"
              value={data.confirmationCode}
              onChangeText={handleInput('confirmationCode')}
              error={errors?.confirmationCode}
            />
            <Button
              title="Register"
              type="client-primary"
              textClassName="text-2xl"
              containerClassName="mt-7 mb-9"
              onPress={register}
            />
            <View className="flex-row justify-center">
              <Text>have an account?</Text>
              <Pressable onPress={() => navigation.navigate('Login')}>
                <Text className="font-extrabold text-primary-100"> Login</Text>
              </Pressable>
            </View>
          </View>
        </ScrollView>
      </ImageBackground>
    </View>
  );
};

export default RegisterPro;
