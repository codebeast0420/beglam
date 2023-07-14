import React, { useState } from 'react';
import { Image, SafeAreaView, ScrollView, Text, View, Pressable, TextInput } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useColorScheme } from 'nativewind';
import Accordion from 'react-native-collapsible/Accordion';
import { formatWithMask } from 'react-native-mask-input';
import { LinearGradient } from 'expo-linear-gradient';
import Modal from 'react-native-modal';
import { useSelector, useDispatch } from 'react-redux';

import Header from '_components/Header';
import Button from '_components/Button';

import { EditIcon, WarningIcon, TimesIcon, MakeoverIcon, StarIcon, StarOutlineIcon, ArrowDownIcon, ArrowUpIcon } from '_components/icons';
import { useEffect } from 'react';

const Avatar = require('_assets/images/avatar-service-client.png');
const Gallery1 = require('_assets/images/gallery1.png');
const Gallery2 = require('_assets/images/gallery2.png');
const Gallery3 = require('_assets/images/gallery3.png');
const Review = require('_assets/images/review.png');
const Email = require('_assets/images/auth/email.gif');

const Edit = ({ navigation }) => {
  const [openModal, setOpenModal] = useState(false);
  const [description, setDescription] = useState('');
  const [phone, setPhone] = useState('1:+380 50 840 48 68');
  const [error, setError] = useState(false);
  const phoneMask = ['+', /\d/, /\d/, /\d/, " ", /\d/, /\d/, " ", /\d/, /\d/, /\d/, " ", /\d/, /\d/, " ", /\d/, /\d/];

  const userId = useSelector((store) => store.userId.userId);

  useEffect(async () => {
    console.log('userId', userId);
    await fetch("http://95.216.115.245:8001/api/profile/getProfileByUser", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ userId: userId }),
    })
  }, []);

  const handleChangePhone = value => {
    setError(false);
    value = value.slice(2);
    const { masked } = formatWithMask({
      text: value,
      mask: phoneMask,
    });

    setPhone(`1:${masked}`);
  };
  return (
    <SafeAreaView className="flex-1 bg-[#ffffff]">
      <ScrollView>
        <Header className="items-start">
          <Pressable
            onPress={() => navigation.goBack()}
            className="ml-auto bg-secondary-300 rounded-2xl p-3 sm:p-4"
          >
            <Text className="text-sm md:text-base text-[#ffffff] font-gilroy-bold">Save</Text>
          </Pressable>
        </Header>

        <View className="p-9 pt-20 pb-20">
          <View className="flex-row justify-center items-end absolute -top-[85px] left-9 right-9">
            <View className="relative">
              <View className="overflow-hidden w-40 h-36 rounded-[48px] border-4 border-secondary-300">
                <Image source={Avatar} className="w-40 h-36" />
              </View>
              <Pressable
                onPress={() => { }}
                className="bg-secondary-300 rounded-2xl p-2 absolute bottom-0 right-0"
              >
                <EditIcon />
              </Pressable>
            </View>
          </View>
          <Text className="text-base text-primary-300 font-gilroy-bold mb-3">
            Name
          </Text>
          <TextInput className="text-base text-primary-100 font-gilroy border-b border-[#C4C4C4] mb-4" />

          <Text className="text-base text-primary-300 font-gilroy-bold mb-3">
            Description
          </Text>
          <View className="border-b border-[#C4C4C4] mb-4">
            <TextInput multiline className="text-base text-primary-100 font-gilroy" value={description} onChangeText={setDescription} />
            <Text className="text-xs text-[#C4C4C4] font-gilroy ml-auto">{description.length}/500</Text>
          </View>

          <Text className="text-base text-primary-300 font-gilroy-bold mb-3">
            Adress:
          </Text>
          <TextInput className="text-base text-primary-100 font-gilroy border-b border-[#C4C4C4] mb-4" />

          <Text className="text-base text-primary-300 font-gilroy-bold mb-3">
            Phone
          </Text>
          <View className="border-b border-[#C4C4C4] mb-4 flex-row">
            <TextInput className="text-base text-primary-100 font-gilroy flex-1 mr-2" />
          </View>

          <Text className="text-base text-primary-300 font-gilroy-bold mb-3">
            Phone
          </Text>
          {error &&
            <View className="flex-row items-center mb-2">
              <WarningIcon />
              <Text className="ml-2 text-[12px] text-secondary-100">This phone number is already registered</Text>
            </View>
          }
          <View className={`border-b ${error ? 'border-secondary-100' : 'border-[#C4C4C4]'} flex-row mb-16`}>
            <TextInput
              keyboardType="phone-pad"
              value={phone}
              onChangeText={handleChangePhone}
              className={`flex-1 text-base ${error ? 'text-secondary-100' : 'text-primary-100'} font-gilroy`}
            />
          </View>

          <CustomAccordion sections={['Section 1', 'Section 2', 'Section 3', 'Section 4']} />
        </View>
      </ScrollView>
      <Modal isVisible={openModal}>
        <View className="p-8 bg-[#ffffff] rounded-3xl">
          <View className="items-end">
            <Pressable onPress={() => setOpenModal(false)}>
              <TimesIcon />
            </Pressable>
          </View>
          <View className="items-center">
            <Image source={Email} className="w-56 h-56" />
          </View>
          <Text className="text-center text-[#3A373E] text-2xl font-gilroy px-10 mt-3">Profile saved successfully</Text>
        </View>
      </Modal>
    </SafeAreaView>
  );
};

export default Edit;

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

