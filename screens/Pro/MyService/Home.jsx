import React, { useState } from 'react';
import { Image, SafeAreaView, ScrollView, Text, View, Pressable } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useColorScheme } from 'nativewind';
import Accordion from 'react-native-collapsible/Accordion';

import Header from '_components/Header';
import Button from '_components/Button';

import { MakeoverIcon, ArrowDownIcon, ArrowUpIcon } from '_components/icons';

const Gallery1 = require('_assets/images/gallery1.png');
const Gallery2 = require('_assets/images/gallery2.png');
const Gallery3 = require('_assets/images/gallery3.png');

const MyService = ({ navigation }) => {

  return (
    <SafeAreaView className="flex-1">
      <ScrollView>
        <Header title="My service" />

        <View className="px-9 pt-16 pb-10">
          <View className="flex-row justify-between">
            <Button
              title="New Package"
              variant="outline"
              type="pro-primary"
              containerClassName="w-[47%]"
              textClassName="text-base"
              onPress={() => navigation.navigate('ProMyService')}
            />
            <Button
              title="New Service"
              type="pro-secondary"
              containerClassName="w-[47%]"
              textClassName="text-base"
              onPress={() => navigation.navigate('ProMyServiceNew')}
            />
          </View>
          <Text className="mt-16 mb-8 text-xl text-primary-300 font-gilroy">Registered services</Text>

          <CustomAccordion sections={['Section 1', 'Section 2', 'Section 3']} />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default MyService;

const CustomAccordion = ({ sections = [] }) => {
  const [activeSections, setActiveSections] = useState([]);
  const navigation = useNavigation();
  const { colorScheme } = useColorScheme();

  const renderHeader = (section, i) => {
    let isOpened = activeSections.includes(i);
    return (
      <View className={`
        flex-row items-center mt-4 p-4 rounded-2xl bg-[#ffffff]
        ${isOpened ? 'rounded-b-none' : ''}
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
      <View className="p-4 bg-[#ffffff] rounded-b-2xl">
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          className="flex-row gap-x-1 mb-7"
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
        <View className="mb-5">
          <Text className="text-base text-primary-300 font-gilroy-bold">Coloring</Text>
          <View className="mt-4 ml-4">
            <View className="flex-row mb-2">
              <Text className="flex-1 text-base text-primary-300 font-gilroy">Global coloring</Text>
              <Text className="mr-4 text-base text-primary-300 font-gilroy">1h</Text>
              <Text className="text-base text-secondary-300 font-gilroy-bold">$9</Text>
            </View>
            <View className="flex-row">
              <Text className="flex-1 text-base text-primary-300 font-gilroy">Californian</Text>
              <Text className="mr-4 text-base text-primary-300 font-gilroy">40m</Text>
              <Text className="text-base text-secondary-300 font-gilroy-bold">$9</Text>
            </View>
          </View>
        </View>
        <View>
          <Text className="text-base text-primary-300 font-gilroy-bold">Cut</Text>
          <View className="mt-4 ml-4">
            <View className="flex-row mb-2">
              <Text className="flex-1 text-base text-primary-300 font-gilroy">Long Bob</Text>
              <Text className="mr-4 text-base text-primary-300 font-gilroy">1h</Text>
              <Text className="text-base text-secondary-300 font-gilroy-bold">$12</Text>
            </View>
            <View className="flex-row">
              <Text className="flex-1 text-base text-primary-300 font-gilroy">Lorem ipsum</Text>
              <Text className="mr-4 text-base text-primary-300 font-gilroy">1h</Text>
              <Text className="text-base text-secondary-300 font-gilroy-bold">$10</Text>
            </View>
          </View>
        </View>
        <Button
          title="Edit"
          variant="outline"
          type="pro-primary"
          textClassName="text-base"
          containerClassName="mt-3"
          onPress={() => navigation.navigate('ProMyServiceForm')}
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
