import React, { useCallback, useState } from 'react';
import { Image, Pressable, SafeAreaView, ScrollView, Text, View } from 'react-native';
import { useFocusEffect } from '@react-navigation/native';
import { useColorScheme } from 'nativewind';
import MapView, { PROVIDER_GOOGLE } from 'react-native-maps';
import Switch from 'react-native-switch-toggles';

import {
  SearchIcon,
  MakeoverIcon,
  WaxIcon,
  HairDressIcon,
  MassageIcon,
  ManicureIcon,
  PedicureIcon,
  NutritionistIcon,
  TattooIcon,
  PiercingIcon,
  StarOutlineIcon,
} from '_components/icons';
import Button from '_components/Button';
import Header from '_components/home/Header';

import SearchModal from './SearchModal';
import { useEffect } from 'react';

const AvatarServiceClient = require('_assets/images/avatar-service-client.png');

const Home = ({ navigation }) => {
  useEffect(() => {
    console.log("test");
  }, [])
  
  const { setColorScheme } = useColorScheme();
  const [isUrgent, setIsUrgent] = useState(false);
  const [openSearchModal, setOpenSearchModal] = useState(false);
  const [selectedServices, setSelectedServices] = useState([]);

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

  const pros = [
    { avatar: AvatarServiceClient, name: 'Esther Howard', rate: '4.8', service: { icon: <MassageIcon />, title: 'Nails' }, price: { from: '1.5', to: '6.5' } },
    { avatar: AvatarServiceClient, name: 'Esther Howard', rate: '4.8', service: { icon: <MassageIcon />, title: 'Nails' }, price: { from: '1.5', to: '6.5' } },
    { avatar: AvatarServiceClient, name: 'Esther Howard', rate: '4.8', service: { icon: <MassageIcon />, title: 'Nails' }, price: { from: '1.5', to: '6.5' } },
    { avatar: AvatarServiceClient, name: 'Esther Howard', rate: '4.8', service: { icon: <MassageIcon />, title: 'Nails' }, price: { from: '1.5', to: '6.5' } },
  ];

  useFocusEffect(useCallback(() => {
    setColorScheme('light');
  }, []));

  const renderIcon = (title, Icon) => {
    let color = undefined;
    if (isUrgent) {
      color = selectedServices.includes(title) ? '#FFFFFF60' : '#FFFFFF';
    } else {
      color = selectedServices.includes(title) ? '#EEA4A7' : undefined;
    }
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
      <MapView
        provider={PROVIDER_GOOGLE}
        style={{
          width: '100%',
          height: '100%'
        }}
      />
      <View className="absolute top-10 left-9 right-9">
        <Header />
        <View className="mt-7 flex-row">
          <View className="flex-1 flex-row justify-between bg-[#ffffff] rounded-3xl p-4">
            <Text className="text-secondary-200 text-base font-gilroy">I need it urgently</Text>
            <Switch
              activeTrackColor={'#ED6960'}
              value={isUrgent}
              onChange={(value) => setIsUrgent(value)}
            />
          </View>
          <Pressable
            onPress={() => setOpenSearchModal(true)}
            className=" bg-[#ffffff] rounded-3xl p-4 ml-3"
          >
            <SearchIcon />
          </Pressable>
        </View>
        <ScrollView horizontal showsHorizontalScrollIndicator={false} className="-mx-9 mt-5">
          <View className="px-9 flex-row">
            {services.map(({ title, icon, price }, i) => (
              <Pressable
                key={i}
                onPress={handleSelectServices(title)}
                className={`
                  rounded-3xl p-4 mr-2 items-center w-[105px] border
                  ${isUrgent ? 'bg-secondary-100' : 'bg-[#ffffff]'}
                  ${selectedServices.includes(title) ? ' border-secondary-200' : 'border-transparent'}
                `}
              >
                {renderIcon(title, icon)}
                <Text className={`text-xs font-light font-gilroy ${isUrgent ? 'text-white' : ''}`}>
                  {title}
                </Text>
                <Text className={`text-[10px] font-light font-gilroy ${isUrgent ? 'text-white' : 'text-primary-200'}`}>
                  {price}
                </Text>
              </Pressable>
            ))}
          </View>
        </ScrollView>
      </View>
      <View className="absolute bottom-8 left-9 right-9">
        <ScrollView horizontal showsHorizontalScrollIndicator={false} className="-mx-9 mt-5">
          <View className="px-9 flex-row">
            {pros.map((pro, i) => (
              <View
                key={i}
                className="rounded-3xl p-4 pt-7 mr-2 bg-[#ffffff] w-[295px] max-w-[295px]"
              >
                <View className="flex-row justify-between mb-4">
                  <View className="flex-row flex-1">
                    <Image source={pro.avatar} className="rounded-3xl mr-4 w-14 h-14" />
                    <Text className="text-primary-100 text-2xl font-gilroy-bold flex-1 flex-wrap">
                      {pro.name}
                    </Text>
                  </View>
                  <View className="flex-row">
                    <StarOutlineIcon />
                    <Text className="ml-1 text-xl text-secondary-200 font-gilroy">{pro.rate}</Text>
                  </View>
                </View>
                <View className="flex-row justify-between items-center mb-4">
                  <View className="flex-row items-center">
                    {pro.service.icon}
                    <Text className="ml-2 text-primary-100 text-base font-gilroy">
                      {pro.service.title}
                    </Text>
                  </View>
                  <Text className="text-base text-primary-100 font-gilroy-bold">
                    ${pro.price.from} - {pro.price.to}
                  </Text>
                </View>
                <View className="flex-row justify-between">
                  <Button
                    title="Know More"
                    variant="outline"
                    type="client-primary"
                    textClassName="text-base"
                    containerClassName="py-4 px-5 mr-3"
                    onPress={() => navigation.navigate('ProfilePro', { showBookNow: true })}
                  />
                  <Button
                    title="Book Now"
                    type="client-secondary"
                    textClassName="text-base"
                    containerClassName="py-4 px-5"
                    onPress={() => navigation.navigate('BookNow')}
                  />
                </View>
              </View>
            ))}
          </View>
        </ScrollView>
      </View>
      <SearchModal isVisible={openSearchModal} hideModal={() => setOpenSearchModal(false)} />
    </SafeAreaView>
  );
};

export default Home;
