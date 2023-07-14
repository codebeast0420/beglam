import React from 'react';
import { Image, Pressable, SafeAreaView, ScrollView, Text, View } from 'react-native';

import Header from '_components/Header';
import { SearchInput } from '_components/Input';

const AvatarClient = require('_assets/images/avatar-action-center.png');

const Contacts = ({ navigation }) => {
  const contacts = [
    { avatar: AvatarClient, name: 'Esther Howard', service: 'Hairdresser' },
    { avatar: AvatarClient, name: 'Esther Howard', service: 'Hairdresser' },
    { avatar: AvatarClient, name: 'Esther Howard', service: 'Hairdresser' },
    { avatar: AvatarClient, name: 'Esther Howard', service: 'Hairdresser' },
  ];

  return (
    <SafeAreaView className="flex-1">
      <ScrollView>
        <Header title="Contacts" />

        <View className="px-9 py-10">
          <SearchInput placeholder="Search" iconColor="#60EAC0" containerClassName="mb-14" />

          {contacts.map((contact, i) => (
            <Pressable
              key={i}
              className="flex-row p-4 bg-[#ffffff] rounded-3xl mb-4"
              onPress={() => navigation.navigate('ProContactsDetail')}
            >
              <Image source={contact.avatar} className="w-14 h-14 rounded-3xl mr-8" />
              <View className="-mt-1">
                <Text className="text-2xl text-primary-300 font-gilroy-bold">{contact.name}</Text>
                <Text className="text-base text-primary-300 font-gilroy">{contact.service}</Text>
              </View>
            </Pressable>
          ))}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Contacts;
