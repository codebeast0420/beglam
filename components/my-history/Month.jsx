import React, { useState } from 'react';
import { Pressable, SafeAreaView, ScrollView, Text, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useColorScheme } from 'nativewind';
import DropDownPicker from 'react-native-dropdown-picker';

import Header from '_components/Header';

import { CreditCardIcon, ArrowUpIcon, ArrowDownIcon } from '_components/icons';

const MyHistoryMonth = () => {
  const navigation = useNavigation();
  const { colorScheme } = useColorScheme();

  const data = [
    { date: '06.01.19', time: '14:14', duration: '45', name: 'Esther', services: ['Type of Service', 'Type of Service'], card_number: '53****3232', price: '32' },
    { isCanceled: true, date: '06.01.19', time: '14:14', duration: '45', name: 'Esther', services: ['Type of Service', 'Type of Service'], card_number: '53****3232', price: '32' },
    { date: '06.01.19', time: '14:14', duration: '45', name: 'Esther', services: ['Type of Service', 'Type of Service'], card_number: '53****3232', price: '32' },
    { date: '06.01.19', time: '14:14', duration: '45', name: 'Esther', services: ['Type of Service', 'Type of Service'], card_number: '53****3232', price: '32' },
    { date: '06.01.19', time: '14:14', duration: '45', name: 'Esther', services: ['Type of Service', 'Type of Service'], card_number: '53****3232', price: '32' },
  ];

  const [open, setOpen] = useState(false);
  const [value, setValue] = useState('all');
  const [items, setItems] = useState([
    { label: 'All', value: 'all' },
    { label: 'Canceled', value: 'canceled' },
  ]);

  return (
    <SafeAreaView className="flex-1 bg-[#F1EEED]">
      <Header title="My History" />
      {colorScheme === 'dark' &&
        <View className="px-6">
          <DropDownPicker
            open={open}
            value={value}
            items={items}
            setOpen={setOpen}
            setValue={setValue}
            setItems={setItems}
            showTickIcon={false}
            style={{
              backgroundColor: 'transparent',
              borderColor: 'transparent',
              paddingHorizontal: 12,
              paddingVertical: 0,
              minHeight: 28,
            }}
            ArrowUpIconComponent={ArrowUpIcon}
            ArrowDownIconComponent={ArrowDownIcon}
            containerStyle={{ width: value === 'all' ? 88 : 110, }}
            dropDownContainerStyle={{ borderColor: 'transparent', backgroundColor: '#F1EEED' }}
            labelStyle={{ fontSize: 14, color: '#C4C4C4', }}
            textStyle={{ fontSize: 14, color: '#C4C4C4' }}
            arrowIconStyle={{ width: 14, height: 14, color: '#C4C4C4' }}
          />
        </View>
      }
      <ScrollView>
        <View className="px-9 pt-20 pb-12 gap-y-8">
          {data.map((item, i) => (
            <Pressable
              key={i}
              className={`bg-secondary-100 rounded-3xl ${!item?.isCanceled && ' dark:bg-secondary-300'}`}
              onPress={() => navigation.navigate(colorScheme === 'light' ? 'ClientMyHistoryDetail' : 'ProMyHistoryDetail')}
            >
              <View className="flex-row justify-between px-5 pt-3 pb-2">
                <Text className="text-[#ffffff] text-xs font-gilroy-bold">{item.time}</Text>
                <Text className="text-[#ffffff] text-xs font-gilroy-bold">{item.date}</Text>
                <Text className="text-[#ffffff] text-xs font-gilroy-bold text-center w-[25px]">{(colorScheme === 'dark' && item.isCanceled) ? '-' : `${item.duration}m`}</Text>
              </View>
              <View className="rounded-3xl bg-[#ffffff] px-5 pt-2 pb-5">
                <Text className="text-primary-200 dark:text-primary-300 text-base font-gilroy-bold mb-3">{item.name}</Text>
                {item.services.map((service, j) => (
                  <Text key={j} className="text-base text-primary-200 dark:text-primary-300 font-gilroy mb-2">{service}</Text>
                ))}
                <View className="mt-2 flex-row justify-between">
                  {colorScheme === 'light' &&
                    <View className="flex-row items-center">
                      <CreditCardIcon />
                      <Text className="ml-2 text-xs text-secondary-200 font-gilroy">{item.card_number}</Text>
                    </View>
                  }
                  {colorScheme === 'dark' && item.isCanceled &&
                    <Text className="text-base text-secondary-200 font-gilroy">
                      Canceled
                    </Text>
                  }
                  <Text className={`text-base text-secondary-200 font-gilroy-bold ml-auto ${(!item?.isCanceled && colorScheme === 'dark') && 'text-secondary-300'}`}>${item.price}</Text>
                </View>
              </View>
            </Pressable>
          ))}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default MyHistoryMonth;
