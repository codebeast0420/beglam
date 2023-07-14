import React, { useCallback, useState } from 'react';
import { Image, Pressable, SafeAreaView, Text, View } from 'react-native';
import MapView, { PROVIDER_GOOGLE } from 'react-native-maps';
import { useFocusEffect } from '@react-navigation/native';
import Modal from "react-native-modal";
import { LinearGradient } from 'expo-linear-gradient';
import { CountdownCircleTimer } from 'react-native-countdown-circle-timer';

import Header from '_components/home/Header';
import Button from '_components/Button';

import { ArrowLeftIcon, StarOutlineIcon, TimesIcon } from '_components/icons';

import SelectServiceFirst from './SelectServiceFirst';
import SelectServiceSecond from './SelectServiceSecond';
import SelectTime from './SelectTime';
import SelectLocation from './SelectLocation';
import Note from './Note';
import AdditionalService from './AdditionalService';
import Checking from './Checking';
import CancelBook from './CancelBook';

const AvatarClient = require('_assets/images/avatar-service-client.png');
const Email = require('_assets/images/auth/email.gif');

const BookNow = ({ navigation }) => {
  // 0: service 1, 1: service 2, 2: service 2, 3: time, 4: location, 5: note, 6: AdditionalService, 7: Checking
  const [step, setStep] = useState(0);
  const [disabledNext, setDisabledNext] = useState(false);
  const [countdownPlay, setCountdownPlay] = useState(false);
  const [arrived, setArrived] = useState(false);

  useFocusEffect(useCallback(() => {
    setDisabledNext(step === 3);
    setCountdownPlay(step === 8);
  }, [step]));

  useFocusEffect(useCallback(() => {
    if (!arrived) return;

    setTimeout(() => {
      navigation.navigate('ClientReview');
    }, 2000);
  }, [arrived]));

  const handleBack = () => {
    if (step === 0 || step === 1) {
      return navigation.navigate('ClientHome');
    }

    setStep(prev => --prev);
  };

  const handleNext = () => {
    if (disabledNext) return;

    setStep(prev => {
      prev += 1;

      if (prev === 1) prev += 2;

      return prev;
    });
  };

  const handleCancel = () => {
    setCountdownPlay(false);
    setStep(prev => ++prev);
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

      </View>
      <Modal
        isVisible={true}
        style={{ justifyContent: 'flex-end', margin: 0 }}
        hasBackdrop={step < 8}
        coverScreen={false}
      >
        <View className={`p-6 pb-9 rounded-t-3xl bg-[#ffffff] ${(step === 0 || step === 2) && ' max-h-[72%]'}`}>
          <View>
            <View className="flex-row mb-4">
              <Image source={AvatarClient} className="rounded-3xl w-14 h-14" />
              <View className="ml-8 flex-1">
                <Text className={`text-2xl text-primary-100 font-gilroy-bold ${step > 7 ? 'max-w-[100px]' : ''}`}>
                  Esther Howard
                </Text>
                {step < 8 &&
                  <View className="flex-row">
                    <StarOutlineIcon />
                    <Text className="text-xl text-secondary-200 font-gilroy ml-1">4.8</Text>
                  </View>
                }
              </View>
              {(step > 7 && !arrived) &&
                <CountdownCircleTimer
                  isPlaying={countdownPlay}
                  duration={60}
                  colors="#EEA4A7"
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
              }
            </View>
            <Text className="text-base text-primary-100 font-gilroy mb-7">Ranchview Dr. Richardson, California 62</Text>
            {step === 0 && <SelectServiceFirst />}
            {(step === 1 || step === 2) && <SelectServiceSecond step={step} />}
            {step === 3 && <SelectTime onNext={() => setDisabledNext(false)} />}
            {step === 4 && <SelectLocation />}
            {step === 5 && <Note />}
            {step === 6 && <AdditionalService />}
            {step === 7 && <Checking onBooked={handleNext} />}
            {step > 8 && <CancelBook step={step} />}
          </View>
          {step < 7 &&
            <View className="flex-row -mt-10 pt-10 sm:-mt-16 sm:pt-28 relative">
              <LinearGradient
                colors={['#ffffff55', '#ffffff']}
                className="absolute left-0 right-0 top-0 bottom-10"
              />
              <Pressable onPress={handleBack} className="rounded-2xl bg-primary-200 p-4 mr-2">
                <ArrowLeftIcon color="white" />
              </Pressable>
              <Button
                title={step === 6 ? 'Book now' : 'Next'}
                type="client-secondary"
                textClassName="text-base"
                containerClassName={`flex-1 ${disabledNext && 'opacity-50'}`}
                onPress={handleNext}
              />
            </View>
          }
          {step === 8 &&
            <View className="flex-row justify-between">
              {!arrived &&
                <Button
                  title="Cancel"
                  variant="outline"
                  type="client-secondary"
                  textClassName="text-base"
                  containerClassName="w-[47%]"
                  onPress={handleCancel}
                />
              }
              <Button
                title="Chat"
                type="client-primary"
                textClassName="text-base"
                containerClassName={arrived ? 'flex-1' : 'w-[47%]'}
                onPress={() => navigation.navigate('Chat')}
              />
            </View>
          }
          {step > 8 &&
            <View className="flex-row justify-between">
              <Button
                title="Back"
                variant="outline"
                type="client-primary"
                textClassName="text-base"
                containerClassName="w-[47%]"
                onPress={handleBack}
              />
              <Button
                title="Cancel now"
                type="client-secondary"
                textClassName="text-base"
                containerClassName="w-[47%] bg-secondary-100"
                onPress={handleNext}
              />
            </View>
          }
        </View>
      </Modal>
      <Modal isVisible={step > 11}>
        <View className="p-5 bg-[#ffffff] rounded-3xl">
          <View className="items-end">
            <Pressable onPress={() => navigation.navigate('ClientHome')}>
              <TimesIcon />
            </Pressable>
          </View>
          <View className="items-center">
            <Image source={Email} className="w-56 h-56" />
          </View>
          <Text className="text-center text-[#3A373E] text-2xl font-gilroy mt-3">
            Your scheduled appointment has been successfully cancelled.
          </Text>
        </View>
      </Modal>
      <Modal
        isVisible={arrived}
        hasBackdrop={false}
        coverScreen={false}
        style={{ justifyContent: 'flex-end', marginBottom: 270 }}
      >
        <View className="pt-8 pb-7 pl-10 pr-20 bg-[#ffffff] rounded-3xl">
          <Text className="text-xl text-primary-100 font-gilroy mb-2">The professional has arrived!</Text>
          <Text className="text-base text-secondary-200 font-gilroy">
            It is waiting for you ready to run the service.
          </Text>
        </View>
      </Modal>
    </SafeAreaView>
  );
};

export default BookNow;
