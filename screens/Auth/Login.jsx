import React, { useState } from 'react';
import { ImageBackground, Image, View, Pressable, SafeAreaView, ScrollView } from 'react-native';

import Text from '_components/Text';
import Button from '_components/Button';
import Input, { PasswordInput } from '_components/Input';
import { UserIcon, LockIcon, WarningIcon } from '_components/icons';
import { useSelector, useDispatch } from 'react-redux';
import { login } from '../../redux/actions/signAction';

const Background = require('_assets/images/auth/login-bg.png');
const Logo = require('_assets/images/logo.png');

const Login = ({ navigation }) => {
  const dispatch = useDispatch();
  const userId = useSelector((store) => store.userId.userId);
  const [data, setData] = useState({
    email: '',
    password: '',
  });
  const [errors, setErrors] = useState(null);

  const handleInput = email => value => {
    setData(prev => ({ ...prev, [email]: value }));
  };

  const handleLogin = async () => {
    setErrors(null);
    let _errors = {};
    if (!data.email) _errors.email = true;
    if (!data.password) _errors.password = true;

    if (Object.keys(_errors).length > 0) {
      setErrors(_errors);
      return;
    }
    const body = {
			data: data,
		};
    let email = '';
    let name = '';
    await fetch("http://15.236.221.187:5000/api/user/signIn", {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify(body),
		})
    .then(async (res) => {
      let result =  await res.json();
      console.log('result', result);
      // email = result.data.userData._doc.email;
      // name = result.data.userData._doc.fullName;
    });

    dispatch(login(data.email, data.name));

    // console.log('result', response.data)

    navigation.navigate('ClientHome');
  };

  return (
    <SafeAreaView className="flex-1">
      <Image source={Background} className="absolute top-0 bottom-0 left-0 right-0 w-full h-full" />
      <ScrollView>
        <View className="px-9 pt-28 pb-[120px]">
          <View className="flex items-center">
            <Image source={Logo} className="w-[130px] h-28 mb-10" />
            <Text type="h1" className="mb-9">Login</Text>
          </View>

          {errors &&
            <View className="flex-row items-center mb-2">
              <WarningIcon />
              <Text className="ml-2 text-[12px] text-secondary-100">Complete all the fields correctly</Text>
            </View>
          }
          <Input
            PrependIcon={UserIcon}
            placeholder="User"
            className="mb-2"
            value={data.email}
            onChangeText={handleInput('email')}
            error={errors?.email}
          />
          <PasswordInput
            PrependIcon={LockIcon}
            placeholder="Password"
            value={data.password}
            onChangeText={handleInput('password')}
            error={errors?.password}
          />
          <Button
            title="Login"
            type="client-secondary"
            textClassName="text-2xl"
            containerClassName="mt-6 mb-9"
            onPress={handleLogin}
          />
          <View className="flex-row justify-center">
            <Text>Don't have an account?</Text>
            <Pressable onPress={() => navigation.navigate('SelectAccountType')}>
              <Text className="font-extrabold text-primary-100"> Register</Text>
            </Pressable>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Login;
