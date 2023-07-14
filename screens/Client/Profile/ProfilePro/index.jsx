import React, { useState } from 'react';
import { Image, SafeAreaView, ScrollView, Text, View, Pressable } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Accordion from 'react-native-collapsible/Accordion';
import { LinearGradient } from 'expo-linear-gradient';
import { useColorScheme } from 'nativewind';

import Header from '_components/Header';
import Button from '_components/Button';

import { StarIcon, EditIcon, StarOutlineIcon, MapMarkerAreaIcon, MakeoverIcon, PhoneIcon, ArrowDownIcon, ArrowUpIcon } from '_components/icons';

const AvatarServiceClient = require('_assets/images/avatar-service-client.png');
const Gallery1 = require('_assets/images/gallery1.png');
const Gallery2 = require('_assets/images/gallery2.png');
const Gallery3 = require('_assets/images/gallery3.png');
const Review = require('_assets/images/review.png');

const ProfilePro = ({ navigation, route }) => {
  const showBookNow = route.params?.showBookNow;
  const { colorScheme } = useColorScheme();

  return (
    <SafeAreaView className="flex-1 bg-[#ffffff]">
      <ScrollView>
        <Header>
          {showBookNow &&
            <View className="ml-auto w-11 h-11 bg-secondary-200 rounded-2xl justify-center items-center">
              <StarOutlineIcon color="#ffffff" />
            </View>
          }
          {colorScheme === 'dark' &&
            <Pressable
              onPress={() => navigation.navigate('ProfileProEdit')}
              className="ml-auto w-11 h-11 bg-secondary-300 rounded-2xl justify-center items-center"
            >
              <EditIcon />
            </Pressable>
          }
        </Header>

        <View className="px-9 pt-28 pb-40">
          <View className="flex-row justify-between items-end absolute -top-20 left-9 right-9">
            <View className="flex-row">
              <StarOutlineIcon color={colorScheme === 'light' ? '#EEA4A7' : '#4E819B'} />
              <Text className="ml-1 text-xl text-secondary-200 dark:text-primary-300 font-gilroy">4.8</Text>
            </View>
            <View className="w-40 h-36 rounded-[48px] overflow-hidden border-4 border-secondary-200 dark:border-secondary-300">
              <Image source={AvatarServiceClient} className="w-40 h-36" />
            </View>
            <Text className="text-base text-primary-100 dark:text-primary-300 font-gilroy-bold">
              $1.5 - 6.5
            </Text>
          </View>
          <Text className="text-center text-2xl text-primary-100 dark:text-primary-300 font-gilroy-bold mb-3">
            Esther Howard
          </Text>
          <Text className="text-base text-primary-100 dark:text-primary-300 font-gilroy font-light mb-7">
            Lorem ipsum dolor sit amet, consectetur, sseew adipiscing elit. Cum tincidunt lorem aliquam in massa est odio turpis egestas felis. Enim.
          </Text>
          <View className="flex-row items-start mb-5">
            <MapMarkerAreaIcon color={colorScheme === 'light' ? '#EEA4A7' : '#60EAC0'} />
            <View className="flex-1 ml-4">
              <Text className="text-base text-secondary-200 dark:text-primary-300 font-gilroy-bold">Adress:</Text>
              <Text className="text-base text-primary-100 dark:text-primary-300 font-gilroy">Ranchview Dr. Richardson, California</Text>
            </View>
            <Button
              title="Show"
              variant="outline"
              type={colorScheme === 'light' ? 'client-secondary' : 'pro-primary'}
              textClassName="text-base"
              containerClassName="w-20 py-3"
              onPress={() => { }}
            />
          </View>
          <View className="flex-row items-start mb-5">
            <PhoneIcon color={colorScheme === 'light' ? '#EEA4A7' : '#60EAC0'} />
            <View className="flex-1 ml-4">
              <Text className="text-base text-secondary-200 dark:text-primary-300 font-gilroy-bold">Phone</Text>
              <Text className="text-base text-primary-100 dark:text-primary-300 font-gilroy">1:+380 50 840 48 68</Text>
            </View>
            <Button
              title="Call"
              variant="outline"
              type={colorScheme === 'light' ? 'client-secondary' : 'pro-primary'}
              textClassName="text-base"
              containerClassName="w-20 py-3"
              onPress={() => { }}
            />
          </View>
          <View className="flex-row items-start mb-5">
            <PhoneIcon color={colorScheme === 'light' ? '#EEA4A7' : '#60EAC0'} />
            <View className="flex-1 ml-4">
              <Text className="text-base text-secondary-200 dark:text-primary-300 font-gilroy-bold">Phone</Text>
              <Text className="text-base text-primary-100 dark:text-primary-300 font-gilroy">1:+380 50 840 48 68</Text>
            </View>
            <Button
              title="Call"
              variant="outline"
              type={colorScheme === 'light' ? 'client-secondary' : 'pro-primary'}
              textClassName="text-base"
              containerClassName="w-20 py-3"
              onPress={() => { }}
            />
          </View>

          <CustomAccordion sections={['Section 1', 'Section 2', 'Section 3', 'Section 4']} />
        </View>
      </ScrollView>
      {showBookNow &&
        <LinearGradient
          colors={['#ffffff00', '#ffffff']}
          locations={[0, 0.4]}
          className="absolute bottom-0 left-0 right-0 px-9 pt-20 pb-10"
        >
          <Button
            title="BOOK NOW"
            type="client-secondary"
            textClassName="text-base"
            onPress={() => { }}
          />
        </LinearGradient>
      }
    </SafeAreaView>
  );
};

export default ProfilePro;

const CustomAccordion = ({ sections = [] }) => {
  const [activeSections, setActiveSections] = useState([]);
  const navigation = useNavigation();
  const { colorScheme } = useColorScheme();

  const renderHeader = (section, i) => {
    let isOpened = activeSections.includes(i);
    return (
      <View className={`
        flex-row items-center mt-4 p-4 border border-secondary-200 dark:border-secondary-300 rounded-2xl
        ${isOpened ? 'border-b-0 rounded-b-none' : ''}
      `}>
        <View className="flex-row items-center flex-1">
          <MakeoverIcon color={colorScheme === 'light' ? '#4D509E' : '#4E819B'} />
          <Text className="ml-2 text-base text-primary-100 dark:text-primary-300 font-gilroy-bold">
            Make over
          </Text>
        </View>
        <Text className="text-base text-secondary-200 dark:text-secondary-300 font-gilroy-bold mr-6">
          $1.5 - 6.5
        </Text>
        {isOpened ? <ArrowUpIcon color={colorScheme === 'light' ? '#4D509E' : '#4E819B'} /> : <ArrowDownIcon color={colorScheme === 'light' ? '#4D509E' : '#4E819B'} />}
      </View>
    );
  };

  const renderContent = (section) => {
    return (
      <View className="p-4 border border-t-0 border-secondary-200 dark:border-secondary-300 rounded-b-2xl">
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          className="flex-row gap-x-1 mb-9"
        >
          <Pressable onPress={() => navigation.navigate(colorScheme === 'light' ? 'ProfileProGallery' : 'ProPortfolio')}>
            <Image source={Gallery1} className="rounded-3xl" />
          </Pressable>
          <Pressable onPress={() => navigation.navigate(colorScheme === 'light' ? 'ProfileProGallery' : 'ProPortfolio')}>
            <Image source={Gallery2} className="rounded-3xl" />
          </Pressable>
          <Pressable onPress={() => navigation.navigate(colorScheme === 'light' ? 'ProfileProGallery' : 'ProPortfolio')}>
            <Image source={Gallery3} className="rounded-3xl" />
          </Pressable>
        </ScrollView>
        <View className="flex-row justify-between items-center mb-5">
          <Text className="text-base text-secondary-200 dark:text-secondary-300 font-gilroy-bold">Reviews (321)</Text>
          <View className="flex-row">
            <StarOutlineIcon color={colorScheme === 'light' ? '#EEA4A7' : '#60EAC0'} />
            <Text className="ml-1 text-xl text-secondary-200 dark:text-secondary-300 font-gilroy">4.8</Text>
          </View>
        </View>
        <View className="flex-row mb-5">
          <Image source={Review} className="rounded-2xl w-10 h-10 mr-4" />
          <View>
            <Text className="text-sm text-primary-100 dark:text-primary-300 font-gilroy-bold mb-1">Jane Cooper</Text>
            <View className="flex-row">
              <StarIcon color={colorScheme === 'light' ? '#EEA4A7' : '#60EAC0'} />
              <StarIcon color={colorScheme === 'light' ? '#EEA4A7' : '#60EAC0'} />
              <StarIcon color={colorScheme === 'light' ? '#EEA4A7' : '#60EAC0'} />
              <StarOutlineIcon color={colorScheme === 'light' ? '#EEA4A7' : '#60EAC0'} />
              <StarOutlineIcon color={colorScheme === 'light' ? '#EEA4A7' : '#60EAC0'} />
            </View>
          </View>
        </View>
        <View className="relative pb-2">
          <Text className="text-sm font-gilroy">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet tellus aliquam at.</Text>
          <LinearGradient
            colors={['#ffffff00', '#ffffff']}
            className="absolute left-0 right-0 top-0 bottom-0"
          />
        </View>
        <Button
          title="View All"
          variant="outline"
          type={colorScheme === 'light' ? 'client-secondary' : 'pro-secondary'}
          textClassName="text-base"
          containerClassName="mt-3"
          onPress={() => navigation.navigate('ProfileProDetail')}
        />
      </View>
    );
  };

  const updateSections = (_activeSections) => {
    setActiveSections(_activeSections);
  };

  return (
    <Accordion
      expandMultiple
      underlayColor="none"
      activeSections={activeSections}
      sections={sections}
      renderHeader={renderHeader}
      renderContent={renderContent}
      onChange={updateSections}
    />
  );
};
