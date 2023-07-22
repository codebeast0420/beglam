import React from 'react';
import { Image, Pressable, ScrollView, Text, View } from 'react-native';
import Modal from 'react-native-modal';

import { TimesIcon } from '_components/icons';
import { SearchInput } from '_components/Input';

const Avatar = require('_assets/images/avatar-service-client.png');

const SearchModal = ({ isVisible, hideModal }) => {
  const searchResults = [
    { avatar: Avatar, name: 'Esther Howard' },
    { avatar: Avatar, name: 'Esther Howard' },
    { avatar: Avatar, name: 'Esther Howard' },
  ];
  const lastSearches = [
    { avatar: Avatar, name: 'Esther Howard' },
    { avatar: Avatar, name: 'Esther Howard' },
  ];

  return (
    <Modal
      isVisible={isVisible}
      hasBackdrop={false}
      animationIn="fadeIn"
      animationOut="fadeOut"
      statusBarTranslucent
      style={{ margin: 0 }}
    >
      <View className="w-full h-full bg-[#ffffff] p-9">
        <View className="items-end mb-9">
          <Pressable
            className="rounded-[20px] p-3"
            onPress={hideModal}
          >
            <TimesIcon width="28" height="28" color="#EEA4A7" />
          </Pressable>
        </View>
        <SearchInput placeholder="Search" />
        <ScrollView className="mt-9">
          <View className="flex-1">
            {searchResults.map((item, i) => (
              <Pressable key={i} className="flex-row items-center mb-2">
                <Image source={item.avatar} className="rounded-3xl mr-5 w-14 h-14" />
                <Text className="text-base text-black font-gilroy">{item.name}</Text>
              </Pressable>
            ))}
            <Text className="mt-10 mb-3 text-base font-gilroy text-primary-200">Last researches</Text>
            {lastSearches.map((item, i) => (
              <Pressable key={i} className="flex-row items-center mb-2">
                <Image source={item.avatar} className="rounded-3xl mr-5 w-14 h-14" />
                <Text className="text-base text-black font-gilroy">{item.name}</Text>
              </Pressable>
            ))}
          </View>
        </ScrollView>
      </View>
    </Modal>
  );
};

export default SearchModal;
