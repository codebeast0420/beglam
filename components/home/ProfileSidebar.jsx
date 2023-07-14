import React, { useCallback, useState } from 'react';
import { Image, Pressable, Text, View } from 'react-native';
import { useFocusEffect, useNavigation } from '@react-navigation/native';
import { useColorScheme } from 'nativewind';
import Modal from 'react-native-modal';
import { useDispatch, useSelector } from 'react-redux';

import { TimesIcon } from '_components/icons';
import Button from '_components/Button';
import { useEffect } from 'react';

const Avatar = require('_assets/images/avatar.png');
const AvatarPro = require('_assets/images/avatar-pro.png');

const ProfileSidebar = () => {
  const { colorScheme } = useColorScheme();
  const navigation = useNavigation();
  const [openModal, setOpenModal] = useState(false);
  const [profileState, SetProfileState] = useState(false);

  const userId = useSelector((store) => store.userId.userId);

  useEffect(() => {
    console.log('userIdProfile', userId);
    getProfile();
  }, []);

  const getProfile = async () => {
    await fetch("http://95.216.115.245:8001/api/profile/getProfileByUser", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ userId: userId }),
    }).then(async (res) => {
      let result = await res.json();
      console.log('profile result', result);
      if (result.data) SetProfileState(true);
      else SetProfileState(false);
    })
  }

  useFocusEffect(useCallback(() => {
    setOpenModal(false);
  }, []));

  return (
    <View>
      <Pressable onPress={() => setOpenModal(true)}>
        <Image source={colorScheme === 'light' ? Avatar : AvatarPro} className="rounded-3xl w-14 h-14" />
      </Pressable>
      <Modal
        isVisible={openModal}
        hasBackdrop={false}
        animationIn="fadeInRight"
        animationOut="fadeOutRight"
        style={{ justifyContent: 'flex-start', alignItems: 'flex-end' }}
      >
        <View className="p-6 pb-9 bg-primary-100 dark:bg-secondary-300 rounded-3xl w-4/5">
          <View className="items-end mb-3">
            <Pressable
              className="rounded-[20px] p-3 bg-white"
              onPress={() => setOpenModal(false)}
            >
              <TimesIcon width="28" height="28" color={colorScheme === 'light' ? '#EEA4A7' : '#2B2847'} />
            </Pressable>
          </View>

          <View className="flex-row items-center">
            <Image source={colorScheme === 'light' ? Avatar : AvatarPro} className="w-20 h-20 rounded-3xl" />
            <View className="ml-3">
              <Text className="text-white text-lg font-gilroy-bold">Stella Stewart</Text>
              <Text className="text-white text-xs font-gilroy">Stella.Stewart@gmail.com</Text>
              <Text className="text-white text-xs font-gilroy-bold">{colorScheme === 'light' ? 'Client' : 'Professional'}</Text>
            </View>
          </View>

          <View className="h-[1px] bg-white mt-6 mb-4"></View>

          {/* <Pressable
            className="flex-row items-center bg-primary-200 dark:bg-[#68CBAD] py-3 -mx-6 px-6"
            onPress={() => navigation.navigate(colorScheme === 'light' ? 'ProHome' : 'ClientHome')}
          > */}
          <Pressable
            className="flex-row items-center bg-primary-200 dark:bg-[#68CBAD] py-3 -mx-6 px-6"
            onPress={() => navigation.navigate('ClientHome')}
          >
            <Image source={colorScheme === 'light' ? AvatarPro : Avatar} className="w-14 h-14 rounded-3xl" />
            <View className="ml-3">
              <Text className="text-white text-lg font-gilroy-bold">Stella Stewart</Text>
              <Text className="text-white text-xs font-gilroy-bold">{colorScheme === 'light' ? 'Professional' : 'Client'}</Text>
            </View>
          </Pressable>
          <View className="flex-row justify-between mt-5">
            {profileState ? (
              <Button
                title="Edit"
                type={colorScheme === 'light' ? 'white' : 'black'}
                variant="outline"
                textClassName="text-sm"
                containerClassName="py-2 px-4"
                onPress={() => navigation.navigate(colorScheme === 'light' ? 'ProfileClientEdit' : 'ProfileProEdit')}
              />
            ) : (
              <Button
                title="Create"
                type={colorScheme === 'light' ? 'white' : 'black'}
                variant="outline"
                textClassName="text-sm"
                containerClassName="py-2 px-4"
                onPress={() => navigation.navigate(colorScheme === 'light' ? 'ProfileClientCreate' : 'ProfileProEdit')}
              />
            )}
            <Button
              title="Sign Out"
              type={colorScheme === 'light' ? 'client-secondary' : 'black'}
              textClassName="text-sm"
              containerClassName="py-2 px-6"
              onPress={() => navigation.navigate('Login')}
            />
          </View>
        </View>
      </Modal>
    </View>
  );
};

export default ProfileSidebar;
