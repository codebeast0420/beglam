import React, { useState } from 'react';
import { Image, Pressable, SafeAreaView, ScrollView, Text, View } from 'react-native';

import Header from '_components/Header';
import { SearchInput } from '_components/Input';

import {
  MakeoverIcon,
  WaxIcon,
  HairDressIcon,
  MassageIcon,
  ManicureIcon,
  PedicureIcon,
  NutritionistIcon,
  TattooIcon,
  PiercingIcon,
} from '_components/icons';

const AvatarServiceClient = require('_assets/images/avatar-service-client.png');

const Contacts = ({ navigation }) => {
  const services = [
    { title: 'Make over', icon: MakeoverIcon, price: '235' },
    { title: 'Wax', icon: WaxIcon, price: '235' },
    { title: 'Hair Dress', icon: HairDressIcon, price: '235' },
    { title: 'Massage', icon: MassageIcon, price: '235' },
    { title: 'Manicure', icon: ManicureIcon, price: '235' },
    { title: 'Pedicure', icon: PedicureIcon, price: '235' },
    { title: 'Nutritionist', icon: NutritionistIcon, price: '235' },
    { title: 'Tattoo', icon: TattooIcon, price: '235' },
    { title: 'Piercing', icon: PiercingIcon, price: '235' },
  ];
  const contacts = [
    { avatar: AvatarServiceClient, name: 'Esther Howard', service: 'Hairdresser' },
    { avatar: AvatarServiceClient, name: 'Esther Howard', service: 'Hairdresser' },
    { avatar: AvatarServiceClient, name: 'Esther Howard', service: 'Hairdresser' },
    { avatar: AvatarServiceClient, name: 'Esther Howard', service: 'Hairdresser' },
    { avatar: AvatarServiceClient, name: 'Esther Howard', service: 'Hairdresser' },
    { avatar: AvatarServiceClient, name: 'Esther Howard', service: 'Hairdresser' },
  ];
  const [selectedServices, setSelectedServices] = useState([]);

  const renderIcon = (title, Icon) => {
    let color = undefined;
    color = selectedServices.includes(title) ? '#EEA4A7' : undefined;
    return <Icon color={color} />;
  };

  const handleSelectServices = title => () => {
    setSelectedServices(prev => {
      let index = prev.indexOf(title);
      if (index > -1) {
        prev.splice(index, 1);
      } else {
        prev.push(title);
      }

      return [...prev];
    });
  };

  return (
    <SafeAreaView className="flex-1">
      <ScrollView>
        <Header title="Contacts" />

        <View className="px-9 py-10">
          <SearchInput placeholder="Search" />
          <ScrollView horizontal showsHorizontalScrollIndicator={false} className="-mx-9 mt-6 mb-12">
            <View className="px-9 flex-row">
              {services.map(({ title, icon, price }, i) => (
                <View
                  key={i}
                  className="rounded-3xl shadow-sm shadow-secondary-200 pb-1 mr-2">
                  <Pressable
                    onPress={handleSelectServices(title)}
                    className={`
                    rounded-3xl p-4 items-center w-[105px] border bg-[#ffffff]
                    ${selectedServices.includes(title) ? ' border-secondary-200' : 'border-transparent'}
                  `}
                  >
                    {renderIcon(title, icon)}
                    <Text className="text-xs font-light font-gilroy">
                      {title}
                    </Text>
                    <Text className="text-[10px] font-light font-gilroy text-primary-200">
                      {price}
                    </Text>
                  </Pressable>
                </View>
              ))}
            </View>
          </ScrollView>
          {contacts.map((contact, i) => (
            <Pressable
              key={i}
              className="flex-row p-4 bg-[#ffffff] rounded-3xl mb-4"
              onPress={() => navigation.navigate('ClientContactsDetail')}
            >
              <Image source={contact.avatar} className="w-14 h-14 rounded-3xl mr-8" />
              <View className="-mt-1">
                <Text className="text-2xl text-primary-100 font-gilroy-bold">{contact.name}</Text>
                <Text className="text-base text-primary-100 font-gilroy">{contact.service}</Text>
              </View>
            </Pressable>
          ))}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Contacts;
