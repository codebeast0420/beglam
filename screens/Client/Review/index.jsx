import React, { useRef, useState } from 'react';
import { Image, Pressable, SafeAreaView, Text, TextInput, View } from 'react-native';
import MapView, { PROVIDER_GOOGLE } from 'react-native-maps';
import * as RNImagePicker from 'expo-image-picker';
import Modal from "react-native-modal";

import Header from '_components/home/Header';
import Button from '_components/Button';
import CheckBox from '_components/CheckBox';

import { StarIcon, StarOutlineIcon, TimesIcon } from '_components/icons';

const AvatarClient = require('_assets/images/avatar-service-client.png');
const MyService = require('_assets/images/my-service.png');
const Email = require('_assets/images/auth/email.gif');

const Review = ({ navigation }) => {
  const [step, setStep] = useState(0);
  const inputRef = useRef(null);
  const [tips, setTips] = useState([]);
  const [openModal, setOpenModal] = useState(false);

  const handleSelectTip = tip => () => {
    setTips(prev => {
      let index = prev.indexOf(tip);
      if (index > -1) {
        prev.splice(index, 1);
      } else {
        prev.push(tip);
      }

      return [...prev];
    });
  };

  const handleNext = () => {
    if (step > 1) {
      return setOpenModal(true);
    }
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
        <View className={`p-6 pb-9 rounded-t-3xl bg-[#ffffff]`}>
          <View className="flex-row mb-8">
            <Image source={AvatarClient} className="rounded-3xl w-14 h-14" />
            <View className="ml-8 flex-1">
              <Text className={`text-2xl text-primary-100 font-gilroy-bold ${step > 7 ? 'max-w-[100px]' : ''}`}>
                Esther Howard
              </Text>
              <View className="flex-row">
                <StarOutlineIcon />
                <Text className="text-xl text-secondary-200 font-gilroy ml-1">4.8</Text>
              </View>
            </View>
          </View>

          {step === 0 &&
            <View className="items-center mb-8">
              <Text className="text-xs text-black font-gilroy">
                How was the last time? Rate please
              </Text>
              <Rating />
              <Text className="text-xs text-black font-gilroy mb-3">
                Share photos to help with feedback (optional)
              </Text>
              <ImagePicker />
            </View>
          }
          {step === 1 &&
            <View className="mb-14">
              <Text className="text-xs text-black font-gilroy mb-4">Why did you mark this qualification?</Text>
              <View className="flex-row mb-2">
                <CheckBox type="circle" />
                <Text className="ml-4 text-lg text-primary-100 font-gilroy">Smells Bad</Text>
              </View>
              <View className="flex-row mb-2">
                <CheckBox type="circle" />
                <Text className="ml-4 text-lg text-primary-100 font-gilroy">Long Work</Text>
              </View>
              <View className="flex-row mb-2">
                <CheckBox type="circle" />
                <Text className="ml-4 text-lg text-primary-100 font-gilroy">Bad Service</Text>
              </View>
              <View className="flex-row mb-2">
                <CheckBox type="circle" />
                <Text className="ml-4 text-lg text-primary-100 font-gilroy">Dirty Workplace</Text>
              </View>
              <View className="flex-row mb-2">
                <CheckBox type="circle" />
                <Text className="ml-4 text-lg text-primary-100 font-gilroy">Nop Profesional</Text>
              </View>
            </View>
          }
          {step === 2 &&
            <View className="mb-8">
              <Text className="text-xs text-black font-gilroy mb-2">Leave a tip for the professional (optional)</Text>

              <View className="flex-row justify-between">
                <Button
                  title="$1"
                  variant={tips.includes(1) ? 'fill' : 'outline'}
                  type="client-secondary"
                  textClassName="text-xl font-gilroy"
                  containerClassName="w-[18%] py-3 px-0"
                  onPress={handleSelectTip(1)}
                />
                <Button
                  title="$2"
                  variant={tips.includes(2) ? 'fill' : 'outline'}
                  type="client-secondary"
                  textClassName="text-xl font-gilroy"
                  containerClassName="w-[18%] py-3 px-0"
                  onPress={handleSelectTip(2)}
                />
                <Button
                  title="$3"
                  variant={tips.includes(3) ? 'fill' : 'outline'}
                  type="client-secondary"
                  textClassName="text-xl font-gilroy"
                  containerClassName="w-[18%] py-3 px-0"
                  onPress={handleSelectTip(3)}
                />
                <Button
                  title="$5"
                  variant={tips.includes(5) ? 'fill' : 'outline'}
                  type="client-secondary"
                  textClassName="text-xl font-gilroy"
                  containerClassName="w-[18%] py-3 px-0"
                  onPress={handleSelectTip(5)}
                />
                <Button
                  title="$10"
                  variant={tips.includes(10) ? 'fill' : 'outline'}
                  type="client-secondary"
                  textClassName="text-xl font-gilroy"
                  containerClassName="w-[18%] py-3 px-0"
                  onPress={handleSelectTip(10)}
                />
              </View>
              <Text className="text-xs text-black font-gilroy mb-2 mt-9">How did it happen? Have something to share?</Text>
              <Pressable
                className="border border-primary-100 rounded-3xl py-3 px-6 h-24"
                onPress={() => inputRef?.current?.focus()}
              >
                <TextInput
                  ref={inputRef}
                  multiline
                  placeholder="Comment..."
                  className="text-base text-primary-100 font-gilroy"
                />
              </Pressable>
            </View>
          }
          <Button
            title={step === 2 ? 'Submit' : 'Next'}
            type="client-primary"
            textClassName="text-base"
            onPress={handleNext}
          />
        </View>
      </Modal>
      <Modal isVisible={openModal}>
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
            Thank you for using
          </Text>
          <Text className="text-center text-primary-100 text-2xl font-gilroy-bold">BeGlam.</Text>
        </View>
      </Modal>
    </SafeAreaView>
  );
};

export default Review;

const Rating = () => {
  const [rating, setRating] = useState(0);

  const handleRating = value => () => {
    setRating(value);
  };

  return (
    <View className="flex-row mt-4 mb-7">
      <Pressable onPress={handleRating(1)}>
        {rating > 0 ? <StarIcon size={34} /> : <StarOutlineIcon size={34} />}
      </Pressable>
      <Pressable onPress={handleRating(2)}>
        {rating > 1 ? <StarIcon size={34} /> : <StarOutlineIcon size={34} />}
      </Pressable>
      <Pressable onPress={handleRating(3)}>
        {rating > 2 ? <StarIcon size={34} /> : <StarOutlineIcon size={34} />}
      </Pressable>
      <Pressable onPress={handleRating(4)}>
        {rating > 3 ? <StarIcon size={34} /> : <StarOutlineIcon size={34} />}
      </Pressable>
      <Pressable onPress={handleRating(5)}>
        {rating > 4 ? <StarIcon size={34} /> : <StarOutlineIcon size={34} />}
      </Pressable>
    </View>
  );
};

const ImagePicker = () => {
  const [images, setImages] = useState([]);

  const handleAddPhoto = async () => {
    // No permissions request is necessary for launching the image library
    let result = await RNImagePicker.launchImageLibraryAsync({
      mediaTypes: RNImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    setImages(prev => {
      if (!result.canceled) {
        prev.push(result.assets[0].uri);
      } else {
        prev.push(MyService);
      }
      return [...prev];
    });
  };

  return (
    <View className="w-full flex-row justify-between">
      {images.map((image, i) => (
        <Image key={i} source={image} className="w-[30%] aspect-square rounded-3xl" />
      ))}
      {images.length < 3 &&
        <Pressable
          onPress={handleAddPhoto}
          className="w-[30%] aspect-square items-center justify-center border-dashed rounded-3xl"
          style={{
            borderWidth: 1,
            borderColor: '#4D509E',
          }}
        >
          <Text className="text-xl text-primary-100 text-center font-gilroy">Add Photos</Text>
        </Pressable>
      }
      {images.length < 1 &&
        <View
          className="w-[30%] aspect-square items-center justify-center border border-[#C4C4C4] rounded-3xl"
        />
      }
      {images.length < 2 &&
        <View
          className="w-[30%] aspect-square items-center justify-center border border-[#C4C4C4] rounded-3xl"
        />
      }
    </View>
  );
};
