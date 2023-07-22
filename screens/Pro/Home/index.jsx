import React, { useCallback, useState } from 'react';
import { Image, SafeAreaView, Text, View } from 'react-native';
import { useFocusEffect } from '@react-navigation/native';
import { useColorScheme } from 'nativewind';
import MapView, { PROVIDER_GOOGLE } from 'react-native-maps';
import Switch from 'react-native-switch-toggles';
import Modal from 'react-native-modal';
import { CountdownCircleTimer } from 'react-native-countdown-circle-timer';

import {
  StarOutlineIcon,
} from '_components/icons';
import Button from '_components/Button';
import Header from '_components/home/Header';

const AvatarClient = require('_assets/images/avatar-client.png');

const Home = ({ navigation }) => {
  const { setColorScheme } = useColorScheme();
  const [isUrgent, setIsUrgent] = useState(false);
  const [started, setStarted] = useState(false);
  const [openModal, setOpenModal] = useState(false);
  const [accepted, setAccepted] = useState(false);
  const [arrived, setArrived] = useState(false);

  useFocusEffect(useCallback(() => {
    setColorScheme('dark');
    setAccepted(false);
    setOpenModal(false);
    setStarted(false);
    setArrived(false);
  }, []));

  useFocusEffect(useCallback(() => {
    if (!started) return setOpenModal(false);

    setTimeout(() => {
      setOpenModal(true);
    }, 1000);
  }, [started]));

  const acceptOrder = () => {
    setOpenModal(false);
    setAccepted(true);
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
        {!(openModal || accepted) &&
          <View className="mt-7 flex-row">
            <View className="flex-1 flex-row justify-between bg-[#ffffff] rounded-3xl p-4">
              <Text className="text-primary-300 text-base font-gilroy">Receive urgent orders</Text>
              <Switch
                activeTrackColor={'#60EAC0'}
                value={isUrgent}
                onChange={(value) => setIsUrgent(value)}
              />
            </View>
          </View>
        }
      </View>
      {!accepted &&
        <View className="absolute bottom-8 left-9 right-9">
          {!started &&
            <Button
              title="Start"
              type="pro-secondary"
              textClassName="text-base"
              containerClassName="mb-7 px-16 mx-auto"
              onPress={() => setStarted(true)}
            />
          }
          {started &&
            <Button
              title="Stop"
              type=""
              textClassName="text-base"
              containerClassName="bg-primary-400 mb-7 px-16 mx-auto"
              onPress={() => setStarted(false)}
            />
          }
        </View>
      }
      {accepted &&
        <View className="absolute bottom-0 left-0 right-0 bg-[#ffffff] rounded-t-3xl p-9 pt-8">
          <View className="flex-row">
            <Image source={AvatarClient} className="rounded-3xl mr-4" />
            <View className="mr-auto">
              <Text className="text-2xl text-primary-300 font-gilroy-bold">Jane</Text>
              <Text className="text-2xl text-primary-300 font-gilroy-bold">Cooper</Text>
            </View>
            <CountdownCircleTimer
              isPlaying={accepted}
              duration={60}
              colors="#60EAC0"
              trailColor="#4E819B"
              size={59}
              strokeWidth={3}
              trailStrokeWidth={1}
              strokeLinecap="square"
              onComplete={() => setArrived(true)}
            >
              {({ remainingTime, color }) => (
                <Text className="text-2xl text-primary-300 font-gilroy">
                  {remainingTime}s
                </Text>
              )}
            </CountdownCircleTimer>
          </View>
          {arrived &&
            <Button
              title="Chat"
              type="pro-secondary"
              textClassName="text-base"
              containerClassName="flex-1 mt-5"
              onPress={() => navigation.navigate('Chat')}
            />
          }
        </View>
      }

      <Modal
        isVisible={openModal}
        hasBackdrop={false}
        coverScreen={false}
        animationInTiming={1000}
        animationOutTiming={1000}
        style={{ justifyContent: 'flex-end', marginBottom: 55, marginHorizontal: 55 }}
      >
        <View className="bg-[#ffffff] rounded-3xl px-4 pt-8 pb-5">
          <View className="flex-row mb-4">
            <Image source={AvatarClient} className="rounded-3xl mr-4" />
            <Text className="text-primary-300 text-2xl font-gilroy-bold flex-1">Jane Cooper</Text>
            <View className="flex-row">
              <StarOutlineIcon color="#2B2847" />
              <Text className="ml-1 text-xl text-black font-gilroy">4.8</Text>
            </View>
          </View>
          <View className="flex-row justify-between">
            <Text className="text-base text-black font-gilroy">Parker Rd. Allentown, 134</Text>
            <Text className="text-base text-black font-gilroy">45s</Text>
          </View>
          <View className="flex-row items-center">
            <Text className="text-base text-primary-300 font-gilroy">Status:</Text>
            <Text className="text-base text-primary-300 font-gilroy-bold flex-1 ml-1">Waits for you</Text>
            <Text className="text-2xl text-primary-300 font-gilroy-bold">$80</Text>
          </View>
          <View className="flex-row justify-between mt-5">
            <Button
              title="Refuse"
              variant="outline"
              type=""
              textClassName="text-base text-primary-300"
              containerClassName="border-primary-300 w-[47%]"
              onPress={() => setOpenModal(false)}
            />
            <Button
              title="Accept"
              type="pro-secondary"
              textClassName="text-base"
              containerClassName="py-4 w-[47%]"
              onPress={acceptOrder}
            />
          </View>
        </View>
      </Modal>
      <Modal
        isVisible={arrived}
        hasBackdrop={false}
        coverScreen={false}
        style={{ justifyContent: 'flex-end', marginBottom: 230 }}
      >
        <View className="pt-8 pb-7 pl-10 pr-20 bg-[#ffffff] rounded-3xl">
          <Text className="text-xl text-primary-400 font-gilroy mb-2">The client has arrived!</Text>
          <Text className="text-base text-primary-300 font-gilroy">
            It is waiting for you ready to run the service.
          </Text>
        </View>
      </Modal>
    </SafeAreaView>
  );
};

export default Home;
