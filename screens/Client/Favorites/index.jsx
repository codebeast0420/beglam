import React, { useState } from 'react';
import { Image, Pressable, SafeAreaView, ScrollView, Text, View } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import DropDownPicker from 'react-native-dropdown-picker';

import Header from '_components/Header';

import {
  MakeoverIcon,
  StarIcon,
} from '_components/icons';

const AvatarServiceClient = require('_assets/images/avatar-service-client.png');

const Favorites = ({ navigation }) => {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState('all');
  const [items, setItems] = useState([
    { label: 'All', value: 'all' },
    { label: 'Make over', value: 'make_over1' },
    { label: 'Make over', value: 'make_over2' },
    { label: 'Make over', value: 'make_over3' },
    { label: 'Make over', value: 'make_over4' },
  ]);
  const contacts = [
    { avatar: AvatarServiceClient, name: 'Esther Howard', service: 'Hairdresser' },
    { avatar: AvatarServiceClient, name: 'Esther Howard', service: 'Hairdresser' },
    { avatar: AvatarServiceClient, name: 'Esther Howard', service: 'Hairdresser' },
    { avatar: AvatarServiceClient, name: 'Esther Howard', service: 'Hairdresser' },
    { avatar: AvatarServiceClient, name: 'Esther Howard', service: 'Hairdresser' },
    { avatar: AvatarServiceClient, name: 'Esther Howard', service: 'Hairdresser' },
  ];

  return (
    <SafeAreaView className="flex-1">
      <Header title="Favorites" />

      <View className="px-9 py-10">
        <View className="items-end mb-10">
          <DropDownPicker
            open={open}
            value={value}
            items={items}
            setOpen={setOpen}
            setValue={setValue}
            setItems={setItems}
            style={{
              backgroundColor: 'transparent',
              borderRadius: 11,
              borderColor: '#4D509E',
              paddingHorizontal: 12,
              paddingVertical: 0,
              minHeight: 28,
            }}
            containerStyle={{ width: 148, }}
            dropDownContainerStyle={{ maxHeight: 100 }}
            labelStyle={{ fontSize: 16, color: '#4D509E', }}
            textStyle={{ fontSize: 16, color: '#4D509E' }}
          />
        </View>
        <ScrollView className="mb-48">
          <View className="flex-row flex-wrap justify-between gap-x-3 gap-y-14 mt-10">
            {contacts.map((contact, i) => (
              <Pressable
                key={i}
                className="relative p-4 pt-3 bg-[#ffffff] rounded-2xl w-[45%] min-w-[150px] flex-1"
                onPress={() => navigation.navigate('ProfilePro')}
              >
                <View className="absolute -top-10 left-0 right-0 items-center">
                  <View className="w-20 h-20 rounded-[30px] overflow-hidden border-4 border-secondary-200">
                    <Image source={contact.avatar} className="w-full h-full" />
                  </View>
                </View>
                <View className="items-end">
                  <StarIcon />
                </View>
                <View className="mt-7">
                  <Text className="text-base text-primary-100 font-gilroy">{contact.name}</Text>
                  <Text className="text-sm text-secondary-200 font-gilroy-bold">$1.5 - 6.5</Text>
                </View>
                <View className="relative -mx-4 mt-4">
                  <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                    <View className="px-4 flex-row">
                      <View className="flex-row items-center border border-primary-100 rounded-xl py-3 px-2 mr-3">
                        <MakeoverIcon width={22} height={22} />
                        <Text className="ml-1 text-xs text-primary-200 font-gilroy-bold">Make over</Text>
                      </View>
                      <View className="flex-row items-center border border-primary-100 rounded-xl py-3 px-2">
                        <MakeoverIcon width={22} height={22} />
                        <Text className="ml-1 text-xs text-primary-200 font-gilroy-bold">Make over</Text>
                      </View>
                    </View>
                  </ScrollView>
                  <LinearGradient
                    colors={['#ffffff00', '#ffffff']}
                    start={[0, 0.5]}
                    end={[1, 0.5]}
                    locations={[0, 1]}
                    className="absolute right-0 top-0 bottom-0 left-2/3"
                  />
                </View>
              </Pressable>
            ))}
          </View>
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};

export default Favorites;
