import React, { useState } from 'react';
import { Pressable, SafeAreaView, ScrollView, Text, View } from 'react-native';

import Header from '_components/Header';
import Button from '_components/Button';
import Dropdown from '_components/Dropdown';

import {
  AboutCreditIcon,
  CheckboxCircleIcon,
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

import Step from './Step';

const AboutCredit = ({ navigation }) => {
  const services = [
    { title: 'Make over', icon: MakeoverIcon },
    { title: 'Wax', icon: WaxIcon },
    { title: 'Hair Dress', icon: HairDressIcon },
    { title: 'Massage', icon: MassageIcon },
    { title: 'Manicure', icon: ManicureIcon },
    { title: 'Pedicure', icon: PedicureIcon },
    { title: 'Nutritionist', icon: NutritionistIcon },
    { title: 'Tattoo', icon: TattooIcon },
    { title: 'Piercing', icon: PiercingIcon },
  ];
  const items = [
    'All-Purpose Shears',
    'Curling Iron',
    'Razor',
    'Paddle Brush',
    'The Right Combs',
    'Water Bottle',
    'Blow Dryer',
    'Round Brush',
  ];
  const [selectedServices, setSelectedServices] = useState([]);
  const [selectedItems, setSelectedItems] = useState([]);
  const [selectedType, setSelectedType] = useState('yes');

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

  const handleSelectItem = title => () => {
    setSelectedItems(prev => {
      let index = prev.indexOf(title);
      if (index > -1) {
        prev.splice(index, 1);
      } else {
        prev.push(title);
      }

      return [...prev];
    });
  };

  const renderIcon = (title, Icon) => {
    let color = undefined;
    color = selectedServices.includes(title) ? '#60EAC0' : '#4E819B';
    return <Icon color={color} />;
  };

  return (
    <SafeAreaView className="flex-1">
      <ScrollView>
        <Header title="Credit" />
        <View className="items-center my-10">
          <AboutCreditIcon />
          <Text className="text-2xl text-secondary-300 font-gilroy-bold">About credit</Text>
        </View>
        <Step step={3} />

        <View className="mt-16 px-9 pb-20">
          <Text className="text-base text-primary-300 font-gilroy mb-3">What products do you envision investing the financing with?</Text>
          <ScrollView horizontal showsHorizontalScrollIndicator={false} className="-mx-9 mt-6 mb-12">
            <View className="px-9 flex-row">
              {services.map(({ title, icon, price }, i) => (
                <View
                  key={i}
                  className="rounded-3xl shadow-sm shadow-gray-500 pb-[1px] mr-2">
                  <Pressable
                    onPress={handleSelectServices(title)}
                    className={`
                    rounded-3xl p-4 items-center w-[105px] border bg-[#ffffff]
                    ${selectedServices.includes(title) ? ' border-secondary-300' : 'border-transparent'}
                  `}
                  >
                    {renderIcon(title, icon)}
                    <Text className="text-xs text-black font-light font-gilroy">
                      {title}
                    </Text>
                  </Pressable>
                </View>
              ))}
            </View>
          </ScrollView>
          {selectedServices?.length > 0 &&
            <>
              <Text className="text-base text-secondary-300 font-gilroy-bold mb-1">Hair Dress</Text>
              {items.map((item, i) => (
                <Pressable
                  key={i}
                  className="flex-row justify-between items-center py-4 px-6 mb-3 bg-[#ffffff] rounded-2xl min-h-[58px]"
                  onPress={handleSelectItem(item)}
                >
                  <Text className="text-base text-primary-300 font-gilroy">{item}</Text>
                  {selectedItems.includes(item) &&
                    <CheckboxCircleIcon color="#60EAC0" />
                  }
                </Pressable>
              ))}
              <Text className="text-base text-primary-300 font-gilroy mt-7 mb-2">How long do you expect to buy these products?</Text>
              <Dropdown
                defaultValue="Immediately"
                defaultItems={[
                  { label: 'Immediately', value: 'Immediately' },
                  { label: '1 week', value: '1 week' },
                  { label: '1 month', value: '1 month' },
                  { label: '2 months', value: '2 months' },
                ]}
                zIndex={3000}
                zIndexInverse={1000}
              />

              <Text className="text-base text-primary-300 font-gilroy mt-10 mb-3">Would you like to receive a list of partners to buy items at a discount?</Text>
              <Pressable
                className="flex-row justify-between items-center bg-[#ffffff] rounded-2xl py-4 px-6 mb-3 min-h-[58px]"
                onPress={() => setSelectedType('yes')}
              >
                <Text className="text-base text-primary-300 font-gilroy">I want to enjoy the benefit</Text>
                {selectedType === 'yes' &&
                  <CheckboxCircleIcon color="#60EAC0" />
                }
              </Pressable>
              <Pressable
                className="flex-row justify-between items-center bg-[#ffffff] rounded-2xl py-4 px-6 mb-6 sm:mb-10 min-h-[58px]"
                onPress={() => setSelectedType('no')}
              >
                <Text className="text-base text-primary-300 font-gilroy">No, I go without a discount</Text>
                {selectedType === 'no' &&
                  <CheckboxCircleIcon color="#60EAC0" />
                }
              </Pressable>
            </>
          }
          <Button
            title="Next"
            type="pro-secondary"
            textClassName="text-base"
            containerClassName="mt-14"
            onPress={() => navigation.navigate('ProCreditOrderSummary')}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default AboutCredit;
