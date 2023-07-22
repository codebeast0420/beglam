import React, { useState } from 'react';
import { ImageBackground, Image, View, Pressable, ScrollView } from 'react-native';
import { formatWithMask, Masks } from 'react-native-mask-input';

import Text from '_components/Text';
import Button from '_components/Button';
import Input, { PasswordInput } from '_components/Input';
import { LockIcon, WarningIcon } from '_components/icons';
import { useColorScheme } from 'nativewind';

const Background = require('_assets/images/auth/signup-bg.png');
const Logo = require('_assets/images/logo.png');

const Register = ({ navigation }) => {
  const [data, setData] = useState({
    username: '',
    email: '',
    phone_number: '',
    password: '',
    confirm_password: '',
  });
  const [errors, setErrors] = useState(null);
  const [errorMsg, setErrorMsg] = useState('');
  const { setColorScheme } = useColorScheme();

  const handleInput = name => value => {
    if (name === 'phone_number') {
      const { masked } = formatWithMask({
        text: value,
        mask: Masks.BRL_PHONE,
      });
      value = masked;
    }
    setData(prev => ({ ...prev, [name]: value }));
  };

  const register = () => {
    if (!validate()) return;
    setColorScheme('light');

    navigation.navigate('ConfirmAccount');
  };

  const validate = () => {
    let _errors = {};
    let _data = { ...data };

    const { unmasked } = formatWithMask({
      text: _data.phone_number,
      mask: Masks.BRL_PHONE,
    });
    _data.phone_number = unmasked;
    if (!_data.password) _errors.password = true;
    if (!_data.username) _errors.username = true;
    if (!_data.email) _errors.email = true;
    if (!_data.phone_number) _errors.phone_number = true;
    setErrorMsg('Complete all the fields correctly');

    if (_data.phone_number === '1234567890') {
      _errors.phone_number = true;
      setErrorMsg('This phone number is already registered');
    };

    if (_data.password !== _data.confirm_password) {
      _errors.confirm_password = true;
      setErrorMsg('Passwords don\'t match');
    };

    if (Object.keys(_errors).length > 0) {
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
              value={data.username}
              onChangeText={handleInput('username')}
              error={errors?.username}
            />
            <Input
              placeholder="Email"
              className="mb-2"
              value={data.email}
              onChangeText={handleInput('email')}
              error={errors?.email}
            />
            <Input
              placeholder="Telephone"
              className="mb-2"
              value={data.phone_number}
              onChangeText={handleInput('phone_number')}
              error={errors?.phone_number}
              keyboardType="phone-pad"
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
              value={data.confirm_password}
              onChangeText={handleInput('confirm_password')}
              error={errors?.confirm_password}
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

export default Register;
