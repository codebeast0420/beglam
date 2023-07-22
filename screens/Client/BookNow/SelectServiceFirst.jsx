import React, { useState } from 'react';
import { ScrollView, Text, View } from 'react-native';
import Accordion from 'react-native-collapsible/Accordion';

import CheckBox from '_components/CheckBox';

import { ArrowUpIcon, ArrowDownIcon, MakeoverIcon, WaxIcon, ManicureIcon } from '_components/icons';

const SelectServiceFirst = () => {
  const [activeSections, setActiveSections] = useState([]);
  const [checked, setChecked] = useState(false);

  const renderHeader = ({ Icon, title, price }, i) => {
    let isOpened = activeSections.includes(i);
    return (
      <View className={`
        flex-row items-center mt-4 p-2 sm:p-4 border border-secondary-200 rounded-2xl
        ${isOpened ? 'border-b-0 rounded-b-none' : ''}
      `}>
        <View className="flex-row items-center flex-1">
          <Icon color="#4D509E" />
          <Text className="ml-2 text-base text-primary-100 font-gilroy-bold">
            {title}
          </Text>
        </View>
        <Text className="text-base text-secondary-200 font-gilroy-bold mr-6">
          {price}
        </Text>
        {isOpened ? <ArrowUpIcon color="#4D509E" /> : <ArrowDownIcon color="#4D509E" />}
      </View>
    );
  };

  const renderContent = (section) => {
    return (
      <View className="p-4 border border-t-0 border-secondary-200 rounded-b-2xl">
        <Text className="text-base text-primary-100 font-gilroy-bold mb-2">Coloring</Text>
        <View className="flex-row mb-2">
          <Text className="flex-1 text-base text-primary-100 font-gilroy">Global coloring</Text>
          <Text className="text-base text-primary-100 font-gilroy mr-4">1h</Text>
          <Text className="text-base text-secondary-200 font-gilroy-bold mr-4">$9</Text>
          <CheckBox onChecked={() => setChecked(true)} />
        </View>
        <View className="flex-row mb-6">
          <Text className="flex-1 text-base text-primary-100 font-gilroy">Californian</Text>
          <Text className="text-base text-primary-100 font-gilroy mr-4">40m</Text>
          <Text className="text-base text-secondary-200 font-gilroy-bold mr-4">$5</Text>
          <CheckBox onChecked={() => setChecked(true)} />
        </View>

        <Text className="text-base text-primary-100 font-gilroy-bold mb-2">Cut</Text>
        <View className="flex-row mb-2">
          <Text className="flex-1 text-base text-primary-100 font-gilroy">Long Bob</Text>
          <Text className="text-base text-primary-100 font-gilroy mr-4">1h</Text>
          <Text className="text-base text-secondary-200 font-gilroy-bold mr-4">$12</Text>
          <CheckBox onChecked={() => setChecked(true)} />
        </View>
        <View className="flex-row">
          <Text className="flex-1 text-base text-primary-100 font-gilroy">Lorem ipsum</Text>
          <Text className="text-base text-primary-100 font-gilroy mr-4">1h</Text>
          <Text className="text-base text-secondary-200 font-gilroy-bold mr-4">$10</Text>
          <CheckBox onChecked={() => setChecked(true)} />
        </View>
      </View>
    );
  };

  const updateSections = (_activeSections) => {
    setActiveSections(_activeSections);
  };

  return (
    <>
      <View className="flex-row justify-between mb-3">
        <Text className="text-[32px] text-secondary-200 font-gilroy">What service?</Text>
        {checked &&
          <Text className="text-[32px] text-primary-200 font-gilroy-bold">$9</Text>
        }
      </View>

      <View className="h-[48%]">
        <ScrollView>
          <View>
            <Accordion
              underlayColor="none"
              activeSections={activeSections}
              sections={[
                { Icon: MakeoverIcon, title: 'Make over', price: '$9 - 16.5' },
                { Icon: WaxIcon, title: 'Waxing', price: '$5 - 13' },
                { Icon: ManicureIcon, title: 'Manicure', price: '$1.5 - 9' },
              ]}
              renderHeader={renderHeader}
              renderContent={renderContent}
              onChange={updateSections}
            />
          </View>
        </ScrollView>
      </View>
    </>
  );
};

export default SelectServiceFirst;
