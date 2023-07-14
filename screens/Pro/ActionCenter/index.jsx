import React, { useState } from 'react';
import { Image, Pressable, SafeAreaView, ScrollView, Text, View } from 'react-native';
import { CountdownCircleTimer } from 'react-native-countdown-circle-timer';

import Header from '_components/Header';
import Button from '_components/Button';

import { MakeoverIcon, ManicureIcon } from '_components/icons';

const AvatarClient = require('_assets/images/avatar-client.png');
const AvatarClient1 = require('_assets/images/avatar-action-center.png');

const ActionCenter = ({ navigation }) => {
  const [active, setActive] = useState(true);
  const [achieved, setAchieved] = useState(false);

  const items = [
    {
      active: true,
      date: '31/08/22',
      time: '14:56',
      avatar: AvatarClient,
      firstname: 'Jane',
      lastname: 'Cooper',
      address: 'Parker Rd. Allentown, 134',
      status: 'Waits for you',
      price: '$80',
      services: [
        { Icon: MakeoverIcon, title: 'Make over', price: '$32' },
        { Icon: ManicureIcon, title: 'Massage', price: '$48' },
      ],
    },
    {
      active: false,
      date: '31/08/22',
      time: '14:56',
      avatar: AvatarClient1,
      firstname: 'Leslie',
      lastname: 'Alexander',
      address: 'Parker Rd. Allentown, 134',
      status: 'Waits for you',
      price: '$12',
      services: [
        { Icon: MakeoverIcon, title: 'Make over', price: '$32' },
        { Icon: ManicureIcon, title: 'Massage', price: '$48' },
      ],
    },
    {
      active: false,
      date: '31/08/22',
      time: '14:56',
      avatar: AvatarClient1,
      firstname: 'Leslie',
      lastname: 'Alexander',
      address: 'Parker Rd. Allentown, 134',
      status: 'Waits for you',
      price: '$12',
      services: [
        { Icon: MakeoverIcon, title: 'Make over', price: '$32' },
        { Icon: ManicureIcon, title: 'Massage', price: '$48' },
      ],
    },
  ];

  return (
    <SafeAreaView className="flex-1">
      <Header title="Action Center" />

      <ScrollView>
        <View className="px-9 pt-8 pb-20">
          <View className="flex-row justify-around mb-12 space-x-4">
            <Button
              title="Active"
              type="pro-primary"
              variant={active ? 'fill' : 'outline'}
              containerClassName="w-[138px]"
              textClassName="text-base"
              onPress={() => setActive(prev => !prev)}
            />
            <Button
              title="Archived"
              variant={achieved ? 'fill' : 'outline'}
              type="pro-primary"
              containerClassName="w-[138px]"
              textClassName="text-base"
              onPress={() => setAchieved(prev => !prev)}
            />
          </View>
          <View className="space-y-9">
            {items.map((item, i) => (
              <View key={i} className={`rounded-3xl ${item.active ? 'bg-secondary-300' : 'bg-primary-300'}`}>
                <View className="flex-row justify-between py-3 pl-8 pr-6">
                  <Text className={`text-xl font-gilroy ${item.active ? 'text-black' : 'text-white'}`}>{item.date}</Text>
                  <Text className={`text-xl font-gilroy ${item.active ? 'text-black' : 'text-white'}`}>{item.time}</Text>
                </View>
                <View className="bg-[#ffffff] rounded-3xl p-9">
                  <View className="flex-row">
                    <Image source={item.avatar} className="rounded-3xl mr-4" />
                    <View className="flex-1">
                      <Text className="text-2xl text-primary-300 font-gilroy-bold">{item.firstname}</Text>
                      <Text className="text-2xl text-primary-300 font-gilroy-bold">{item.lastname}</Text>
                    </View>

                    {item.active &&
                      <CountdownCircleTimer
                        isPlaying={false}
                        duration={60}
                        initialRemainingTime={45}
                        colors="#60EAC0"
                        trailColor="#4E819B"
                        size={59}
                        strokeWidth={3}
                        trailStrokeWidth={1}
                        strokeLinecap="square"
                      >
                        {({ remainingTime, color }) => (
                          <Text className="text-2xl text-primary-300 font-gilroy">
                            {remainingTime}s
                          </Text>
                        )}
                      </CountdownCircleTimer>
                    }
                  </View>
                  <Text className="text-base text-black font-gilroy mt-4">{item.address}</Text>
                  <View className="flex-row items-end">
                    <Text className="text-base text-primary-300 font-gilroy mr-1">Status:</Text>
                    <Text className="text-base text-primary-300 font-gilroy-bold flex-1">{item.status}</Text>
                    <Text className="text-2xl text-primary-300 font-gilroy-bold">{item.price}</Text>
                  </View>
                  <View className="mt-7">
                    {item.services.map(({ Icon, title, price }, i) => (
                      <View key={i} className="flex-row items-center">
                        <Icon color="#4E819B" />
                        <Text className="ml-1 flex-1 text-base text-primary-300 font-gilroy">{title}</Text>
                        <Text className="text-base text-primary-300 font-gilroy">{price}</Text>
                      </View>
                    ))}
                  </View>
                  <View className="flex-row justify-between mt-8">
                    {item.active &&
                      <>
                        <Button
                          title="Refuse"
                          type="pro-primary"
                          variant="outline"
                          containerClassName="w-[48%]"
                          textClassName="text-base"
                          onPress={() => navigation.navigate('ProHome')}
                        />
                        <Button
                          title="Accept"
                          variant="fill"
                          type="pro-secondary"
                          containerClassName="w-[48%]"
                          textClassName="text-base"
                          onPress={() => navigation.navigate('ProHome')}
                        />
                      </>
                    }
                    {!item.active &&
                      <Button
                        title="Cancel"
                        type="pro-primary"
                        variant="outline"
                        containerClassName="w-[48%] ml-auto"
                        textClassName="text-base"
                        onPress={() => navigation.navigate('ProHome')}
                      />
                    }
                  </View>
                </View>
              </View>
            ))}
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default ActionCenter;
