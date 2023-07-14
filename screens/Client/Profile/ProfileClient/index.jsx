import React from 'react';
import { Image, SafeAreaView, ScrollView, Text, View, Pressable } from 'react-native';
import { useColorScheme } from 'nativewind';

import Header from '_components/Header';

import { EditIcon, FacebookIcon, StarOutlineIcon, MapMarkerAreaIcon, PhoneIcon } from '_components/icons';

const Avatar = require('_assets/images/avatar.png');

const ProfileClient = ({ navigation }) => {
  const { colorScheme } = useColorScheme();

  return (
    <SafeAreaView className="flex-1 bg-[#ffffff]">
      <ScrollView>
        <Header className="items-start">
          {colorScheme === 'light' &&
            <Pressable
              onPress={() => navigation.navigate('ProfileClientEdit')}
              className="ml-auto w-11 h-11 bg-secondary-200 rounded-2xl justify-center items-center"
            >
              <EditIcon />
            </Pressable>
          }
        </Header>

        <View className="p-9 pb-20">
          <View className="flex-row justify-center items-end absolute -top-[85px] left-9 right-9">
            <View className="w-40 h-36 rounded-[48px] overflow-hidden border-4 border-secondary-200 dark:border-secondary-300">
              <Image source={Avatar} className="w-40 h-36" />
            </View>
          </View>
          <View className="flex-row mb-14">
            <StarOutlineIcon color={colorScheme === 'light' ? '#4D509E' : '#4E819B'} />
            <Text className="ml-1 text-xl text-primary-100 dark:text-primary-300 font-gilroy">4.8</Text>
          </View>
          <Text className="text-center text-2xl text-primary-100 dark:text-primary-300 font-gilroy-bold mb-3">
            Stella Stewart
          </Text>
          <Text className="text-base text-primary-100 dark:text-primary-300 font-gilroy font-light mb-16">
            Lorem ipsum dolor sit amet, consectetur, sseew adipiscing elit. Cum tincidunt lorem aliquam in massa est odio turpis egestas felis. Enim.
          </Text>
          <View className="flex-row items-start mb-5">
            <MapMarkerAreaIcon color={colorScheme === 'light' ? '#EEA4A7' : '#60EAC0'} />
            <View className="flex-1 ml-4">
              <Text className="text-base text-primary-100 dark:text-primary-300 font-gilroy-bold">Adress:</Text>
              <Text className="text-base text-primary-100 dark:text-primary-300 font-gilroy">Ranchview Dr. Richardson, California</Text>
            </View>
          </View>
          <View className="flex-row items-start mb-5">
            <PhoneIcon color={colorScheme === 'light' ? '#EEA4A7' : '#60EAC0'} />
            <View className="flex-1 ml-4">
              <Text className="text-base text-primary-100 dark:text-primary-300 font-gilroy-bold">Phone</Text>
              <Text className="text-base text-primary-100 dark:text-primary-300 font-gilroy">1:+380 50 840 48 68</Text>
            </View>
          </View>
          {colorScheme === 'light' &&
            <View className="flex-row items-start">
              <PhoneIcon color="#C4C4C4" />
              <View className="flex-1 ml-4">
                <Text className="text-base text-[#C4C4C4] font-gilroy-bold">Phone</Text>
                <Text className="text-base text-[#C4C4C4] font-gilroy">1:+380 50 840 48 68</Text>
              </View>
            </View>
          }
          <View className="flex-row items-center mt-24">
            <FacebookIcon color={colorScheme === 'light' ? '#4D509E' : '#4E819B'} />
            <Text className="ml-4 text-lg text-primary-100 dark:text-primary-300 font-gilroy-bold">Stella Stewart</Text>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default ProfileClient;
