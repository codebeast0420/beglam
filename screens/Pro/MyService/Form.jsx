import React, { useState } from 'react';
import { Image, Pressable, SafeAreaView, ScrollView, Text, TextInput, View } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import Accordion from 'react-native-collapsible/Accordion';

import Header from '_components/Header';

import { ArrowUpIcon, ArrowDownIcon, MakeoverIcon, PlusIcon, RemoveIcon } from '_components/icons';

const MyService = require('_assets/images/my-service.png');

const Form = () => {
  const [images, setImages] = useState([]);
  const [sections, setSections] = useState([
    'section 1'
  ]);

  const handleAddPhoto = async () => {
    // No permissions request is necessary for launching the image library
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    setImages(prev => {
      if (!result.canceled) {
        prev.push(result.assets[0].uri);
      } else {
        prev.push(MyService);
      }
      return [...prev];
    });
  };

  const handleAddSection = () => {
    setSections(prev => {
      prev.push('section 1');
      return [...prev];
    });
  };

  return (
    <SafeAreaView className="flex-1">
      <ScrollView>
        <Header title="My service" />

        <View className="px-9 pt-11 pb-10">
          <View className="flex-row">
            <MakeoverIcon color="#4E819B" />
            <Text className="text-2xl text-primary-300 font-gilroy-bold ml-5 flex-1">Make over</Text>
            {/* <TextInput
              placeholder="$--"
              className="text-2xl text-secondary-300 font-gilroy-bold"
            /> */}
            <Text className="text-2xl text-secondary-300 font-gilroy-bold">$--</Text>
          </View>
          <View className="flex-row gap-x-2 mt-11 mb-14">
            {images.map((image, i) => (
              <Image key={i} source={image} className="w-[30%] aspect-square rounded-3xl" />
            ))}
            {images.length < 3 &&
              <Pressable
                onPress={handleAddPhoto}
                className="w-[30%] aspect-square items-center justify-center border-dashed rounded-3xl"
                style={{
                  borderWidth: 1,
                  borderColor: '#4E819B',
                }}
              >
                <Text className="text-xl text-primary-300 text-center font-gilroy">Add Photo</Text>
              </Pressable>
            }
          </View>
          <Text className="text-xl text-primary-300 font-gilroy mb-4">Describe the service</Text>
          <CustomAccordion sections={sections} />
          <Pressable
            className="ml-auto mt-4 bg-secondary-300 rounded-2xl flex-row items-center py-2 px-5"
            onPress={handleAddSection}
          >
            <PlusIcon />
            <Text className="ml-3 text-base text-[#ffffff] font-gilroy">Add Section</Text>
          </Pressable>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Form;

const CustomAccordion = ({ sections = [] }) => {
  const [activeSections, setActiveSections] = useState(['section 1']);
  const [services, setServices] = useState([]);

  const handleAddService = () => {
    setServices(prev => {
      prev.push('service 1');
      return [...prev];
    });
  };

  const handleRemoveService = index => () => {
    setServices(prev => {
      prev.splice(index, 1);
      return [...prev];
    });
  };

  const renderHeader = (section, i) => {
    let isOpened = activeSections.includes(i);
    return (
      <View className={`
        flex-row items-center mt-4 p-4 rounded-2xl bg-[#ffffff]
        ${isOpened ? 'rounded-b-none' : ''}
      `}>
        <TextInput
          defaultValue="Title 1"
          className="flex-1 text-xl text-primary-300 font-gilroy-bold"
        />
        {isOpened ? <ArrowUpIcon color="#4E819B" /> : <ArrowDownIcon color="#4E819B" />}
      </View>
    );
  };

  const renderContent = () => {
    return (
      <View className="p-4 bg-[#ffffff] rounded-b-2xl">
        <View className="mb-4">
          {services.map((service, i) => (
            <View key={i} className="flex-row items-center mb-2">
              <Pressable onPress={handleRemoveService(i)}>
                <RemoveIcon />
              </Pressable>
              <TextInput
                defaultValue="Global Coloring"
                className="ml-4 flex-1 text-base text-primary-300 font-gilroy"
              />
              <TextInput
                defaultValue="1h"
                className="ml-4 text-base text-primary-300 font-gilroy"
              />
              <TextInput
                defaultValue="$9"
                className="ml-4 text-base text-primary-300 font-gilroy"
              />
            </View>
          ))}
        </View>
        <Pressable
          className="ml-auto flex-row items-center py-2 px-5"
          onPress={handleAddService}
        >
          <PlusIcon color="#60EAC0" />
          <Text className="ml-3 text-base text-secondary-300 font-gilroy">Add Service</Text>
        </Pressable>
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
