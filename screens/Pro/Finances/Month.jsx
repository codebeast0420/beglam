import React, { useState } from 'react';
import { Pressable, SafeAreaView, ScrollView, Text, View } from 'react-native';
import { useColorScheme } from 'nativewind';

import Header from '_components/Header';

import { CreditCardIcon } from '_components/icons';

const ProFinancesMonth = ({ navigation }) => {
  const { colorScheme } = useColorScheme();

  const data = [
    {
      date: '10.02.19',
      total_price: '$915',
      items: [
        {
          name: 'Stella Stewart',
          time: '12:32',
          services: [
            { title: 'Type of Service', price: '$330' },
            { title: 'Type of Service', price: '$330' },
          ]
        },
        {
          name: 'Stella Stewart',
          time: '12:32',
          services: [
            { title: 'Type of Service', price: '$330' },
            { title: 'Type of Service', price: '$330' },
          ]
        },
      ],
    },
    {
      date: '10.02.19',
      total_price: '$915',
      items: [
        {
          name: 'Stella Stewart',
          time: '12:32',
          services: [
            { title: 'Type of Service', price: '$330' },
            { title: 'Type of Service', price: '$330' },
          ]
        },
        {
          name: 'Stella Stewart',
          time: '12:32',
          services: [
            { title: 'Type of Service', price: '$330' },
            { title: 'Type of Service', price: '$330' },
          ]
        },
      ],
    },
  ];

  return (
    <SafeAreaView className="flex-1">
      <Header title="Finances" />

      <ScrollView>
        <View className="px-9 pt-20 pb-12 gap-y-8">
          {data.map((item, i) => (
            <Pressable
              key={i}
              className="bg-primary-300 rounded-3xl"
              onPress={() => navigation.navigate('ProFinancesDetail')}
            >
              <View className="flex-row justify-between px-5 pt-3 pb-2">
                <Text className="text-[#ffffff] text-xs font-gilroy-bold">{item.date}</Text>
                <Text className="text-[#ffffff] text-xs font-gilroy-bold text-center w-[25px]">{item.total_price}</Text>
              </View>
              <View className="rounded-3xl bg-[#ffffff] px-5 pt-2 pb-5">
                {item.items.map((client, j) => (
                  <>
                    {j > 1 &&
                      <View key={'divider_' + j} className="bg-[#C4C4C4] h-[1px] mt-7 mb-4"></View>
                    }
                    <View key={j}>
                      <View className="flex-row justify-between mb-4">
                        <Text className="text-primary-200 dark:text-primary-300 text-base font-gilroy-bold mb-3">{client.name}</Text>
                        <Text className="text-sm text-[#C4C4C4] font-gilroy">{client.time}</Text>
                      </View>
                      {client.services.map((service, i) => (
                        <View key={i} className="flex-row justify-between mb-3">
                          <Text className="text-sm text-primary-300 font-gilroy">{service.title}</Text>
                          <Text className="text-sm text-secondary-300 font-gilroy-bold">{service.price}</Text>
                        </View>
                      ))}
                    </View>
                  </>
                ))}
              </View>
            </Pressable>
          ))}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default ProFinancesMonth;
