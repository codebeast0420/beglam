import React, { useState } from 'react';
import { ScrollView, Text, View, Pressable } from 'react-native';

import CheckBox from '_components/CheckBox';

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
  TimesIcon,
} from '_components/icons';

const SelectServiceSecond = ({ step }) => {
  const [checked, setChecked] = useState(false);
  const [selectedServices, setSelectedServices] = useState([]);
  const services = [
    { title: 'Make over', icon: MakeoverIcon, count: 2 },
    { title: 'Wax', icon: WaxIcon, count: 3 },
    { title: 'Hair Dress', icon: HairDressIcon, count: 8 },
    { title: 'Massage', icon: MassageIcon, count: 2 },
    { title: 'Manicure', icon: ManicureIcon, count: 3 },
    { title: 'Pedicure', icon: PedicureIcon, count: 8 },
    { title: 'Nutritionist', icon: NutritionistIcon, count: 2 },
    { title: 'Tattoo', icon: TattooIcon, count: 3 },
    { title: 'Piercing', icon: PiercingIcon, count: 8 },
  ];

  const renderIcon = (index, Icon) => {
    let color = undefined;
    color = selectedServices.includes(index) ? '#EEA4A7' : undefined;
    return <Icon color={color} />;
  };

  const handleSelectServices = serviceIndex => () => {
    setSelectedServices(prev => {
      let index = prev.indexOf(serviceIndex);
      if (index > -1) {
        prev.splice(index, 1);
      } else {
        prev.push(serviceIndex);
      }

      return [...prev];
    });
  };


  return (
    <>
      <View className="flex-row justify-between">
        <Text className="text-[32px] text-secondary-200 font-gilroy mb-3">What service?</Text>
        {step === 2 &&
          <Text className="text-[32px] text-primary-200 font-gilroy-bold">{checked ? '$9' : '$0'}</Text>
        }
      </View>
      {step === 1 &&
        <View className="mb-10">
          <ScrollView horizontal showsHorizontalScrollIndicator={false} className="-mx-9 mt-5">
            <View className="px-9 flex-row">
              {services.map(({ title, icon, count }, i) => (
                <Pressable
                  key={i}
                  onPress={handleSelectServices(i)}
                  className="shadow-sm shadow-secondary-200 rounded-3xl pb-1 mr-2"
                >
                  <View
                    className={`
                      rounded-3xl p-4 items-center w-[105px] border bg-[#ffffff]
                      ${selectedServices.includes(i) ? ' border-secondary-200' : 'border-transparent'}
                    `}
                  >
                    {renderIcon(i, icon)}
                    <Text className={`text-xs font-light font-gilroy text-black`}>
                      {title}
                    </Text>
                    <Text className={`text-[10px] font-light font-gilroy `}>
                      {count}
                    </Text>
                  </View>
                </Pressable>
              ))}
            </View>
          </ScrollView>
          <View className="mt-8">
            {selectedServices.map((serviceIndex) => (
              <View key={serviceIndex} className="flex-row items-center">
                <Pressable className="mr-4 bg-secondary-200/25 rounded-full p-2">
                  <TimesIcon color="#ffffff" width="10" height="10" />
                </Pressable>
                <WaxIcon />
                <Text className="ml-4 text-xs text-black font-gilroy">Wax</Text>
              </View>
            ))}
          </View>
        </View>
      }
      {step === 2 &&
        <View className="h-[50%]">
          <ScrollView>
            <View className="flex-row items-center mb-4">
              <WaxIcon />
              <Text className="ml-4 text-xs text-black font-gilroy">Wax</Text>
            </View>
            <View className="flex-row mb-4">
              <CheckBox onCheck={checked => setChecked(checked)} />
              <Text className="ml-4 flex-1 text-lg text-primary-100 font-gilroy">Lorem ipsum dolor sit amet</Text>
              <Text className="text-lg text-secondary-200 font-gilroy-bold">$20</Text>
            </View>
            <View className="flex-row mb-11">
              <CheckBox onCheck={checked => setChecked(checked)} />
              <Text className="ml-4 flex-1 text-lg text-primary-100 font-gilroy">Lorem ipsum dolor sit amet</Text>
              <Text className="text-lg text-secondary-200 font-gilroy-bold">$12</Text>
            </View>

            <View className="flex-row items-center mb-4">
              <PedicureIcon />
              <Text className="ml-4 text-xs text-black font-gilroy">Pedicure</Text>
            </View>
            <View className="flex-row mb-4">
              <CheckBox onCheck={checked => setChecked(checked)} />
              <Text className="ml-4 flex-1 text-lg text-primary-100 font-gilroy">Lorem ipsum dolor sit amet</Text>
              <Text className="text-lg text-secondary-200 font-gilroy-bold">$20</Text>
            </View>
            <View className="flex-row">
              <CheckBox onCheck={checked => setChecked(checked)} />
              <Text className="ml-4 flex-1 text-lg text-primary-100 font-gilroy">Lorem ipsum dolor sit amet</Text>
              <Text className="text-lg text-secondary-200 font-gilroy-bold">$12</Text>
            </View>
          </ScrollView>
        </View>
      }
    </>
  );
};

export default SelectServiceSecond;
