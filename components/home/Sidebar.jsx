import React, { useCallback, useState } from 'react';
import { Image, Pressable, Text, View, ScrollView } from 'react-native';
import { useFocusEffect, useNavigation } from '@react-navigation/native';
import { useColorScheme } from 'nativewind';
import Modal from 'react-native-modal';

import { HamburgerIcon, TimesIcon, SettingsIcon, SwitchIcon, CreditCardPrintIcon } from '_components/icons';

const Avatar = require('_assets/images/avatar.png');
const AvatarPro = require('_assets/images/avatar-pro.png');

const Sidebar = () => {
  const { colorScheme } = useColorScheme();
  const navigation = useNavigation();
  const [openModal, setOpenModal] = useState(false);
  const menus = [
    { title: 'Schedule', href: 'ClientSchedule' },
    { title: 'Favorites', href: 'ClientFavorites' },
    { title: 'Contacts', href: 'ClientContacts' },
    { title: 'Loyalty', href: 'Loyalty' },
    { title: 'My History', href: 'ClientMyHistory' },
  ];
  const proMenus = [
    { title: 'Schedule', href: 'ProSchedule' },
    { title: 'Portfólio', href: 'ProPortfolio' },
    { title: 'Action Center', href: 'ProActionCenter' },
    { title: 'Work Time', href: 'ProWorkTime' },
    { title: 'Finances', href: 'ProFinances' },
    { title: 'Contacts', href: 'ProContacts' },
    { title: 'Rewards', href: 'Rewards' },
    { title: 'My History', href: 'ProMyHistory' },
  ];

  useFocusEffect(useCallback(() => {
    setOpenModal(false);
  }, []));

  return (
    <View>
      <Pressable
        className={'rounded-3xl p-3 bg-secondary-200 dark:bg-secondary-300'}
        onPress={() => setOpenModal(true)}
      >
        <HamburgerIcon />
      </Pressable>
      <Modal
        isVisible={openModal}
        hasBackdrop={false}
        animationIn="fadeInLeft"
        animationOut="fadeOutLeft"
        style={{ justifyContent: 'flex-start' }}
      >
        <View className="rounded-3xl h-[85%] bg-primary-100 dark:bg-secondary-300 pb-10 -mt-1">
          <View className="p-8 flex-row justify-between items-center">
            <Pressable
              className="rounded-[20px] p-3 bg-white"
              onPress={() => setOpenModal(false)}
            >
              <TimesIcon width="28" height="28" color={colorScheme === 'light' ? '#EEA4A7' : '#4E819B'} />
            </Pressable>
            <Pressable onPress={() => navigation.navigate(colorScheme === 'light' ? 'ClientSettings' : 'ProSettings')}>
              <SettingsIcon color={colorScheme === 'light' ? '#F1EEED' : '#2B2847'} />
            </Pressable>
          </View>
          <ScrollView className="flex-1">
            <View className="px-8 my-12 dark:my-0">
              {(colorScheme === 'light' ? menus : proMenus).map((menu, i) => (
                <Pressable
                  key={i}
                  onPress={() => navigation.navigate(menu.href)}
                  className="py-2 mb-1"
                >
                  <Text className="text-2xl text-white font-gilroy-bold">{menu.title}</Text>
                </Pressable>
              ))}
            </View>
            <View className="px-4">
              {colorScheme === 'dark' &&
                <Pressable
                  className="border border-[#ffffff] rounded-2xl px-5 py-4 my-11 flex-row items-center"
                  onPress={() => navigation.navigate('ProCredit')}
                >
                  <CreditCardPrintIcon />
                  <Text className="text-2xl text-[#ffffff] font-gilroy-bold ml-5">Apply for credit</Text>
                </Pressable>
              }
              <View className="flex-row justify-between">
                <View className="flex-row">
                  <Image source={colorScheme === 'light' ? Avatar : AvatarPro} className="w-10 h-10 rounded-full" />
                  <View className="ml-3">
                    <Text className="text-white dark:text-black text-base font-gilroy-bold">Stella Stewart</Text>
                    <Text className="text-white dark:text-black font-gilroy-bold">{colorScheme === 'light' ? 'Client' : 'Professional'}</Text>
                  </View>
                </View>
                {/* <Pressable
                  onPress={() => navigation.navigate(colorScheme === 'light' ? 'ProHome' : 'ClientHome')}
                  className="w-32 flex-row items-center py-2 px-4 rounded-2xl border border-secondary-200 dark:border-[#ffffff]"
                > */}
                  <Pressable
                  onPress={() => navigation.navigate('ClientHome')}
                  className="w-32 flex-row items-center py-2 px-4 rounded-2xl border border-secondary-200 dark:border-[#ffffff]"
                >
                  <SwitchIcon color={colorScheme === 'light' ? '#EEA4A7' : 'white'} />
                  <Text className="ml-2 text-secondary-200 dark:text-[#ffffff] font-gilroy-bold text-xs">Switch to professional</Text>
                </Pressable>
              </View>
            </View>
          </ScrollView>
        </View>
      </Modal>
    </View>
  );
};

export default Sidebar;
