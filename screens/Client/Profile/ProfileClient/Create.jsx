import React, { useState, useEffect } from 'react';
import { Image, SafeAreaView, ScrollView, Text, View, Pressable, TextInput } from 'react-native';
import { formatWithMask } from 'react-native-mask-input';
import Modal from 'react-native-modal';
import { useSelector, useDispatch } from 'react-redux';

import Header from '_components/Header';

import { EditIcon, CheckboxCircleIcon, CreditCardIcon, WarningIcon, TimesIcon, FacebookIcon, InstagramIcon, PinterestIcon, TwitterIcon, TikTokIcon } from '_components/icons';

const Avatar = require('_assets/images/avatar.png');
const Email = require('_assets/images/auth/email.gif');

const Create = ({ navigation }) => {
  const [openModal, setOpenModal] = useState(false);
  const [phone, setPhone] = useState('1:+380 50 840 48 68');
  const [error, setError] = useState(false);
  const [checkedPhone, setCheckedPhone] = useState(false);
  const phoneMask = ['+', /\d/, /\d/, /\d/, " ", /\d/, /\d/, " ", /\d/, /\d/, /\d/, " ", /\d/, /\d/, " ", /\d/, /\d/];
  const [data, setData] = useState({
    name: '',
    userId: '',
    description: '',
    address: '',
    phone: '',
    avatarUrl: 'aaa',
  });

  const handleInput = name => value => {
    setData(prev => ({ ...prev, [name]: value }));
  }

  const userId = useSelector((store) => store.userId.userId);

  useEffect(() => {
    setData(prev => ({...prev, 'userId': userId}));
  }, [])

  const handleChangePhone = value => {
    setError(false);
    value = value.slice(2);
    const { masked } = formatWithMask({
      text: value,
      mask: phoneMask,
    });

    setPhone(`1:${masked}`);
  };

  const save = async () => {
    let _phone = phone.slice(2);
    const { unmasked } = formatWithMask({
      text: _phone,
      mask: phoneMask,
    });
    // if (unmasked === '380508404868') {
    //   setError(true);
    //   return;
    // }

    await fetch("http://95.216.115.245:8001/api/profile/addProfile", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ data: data }),
    }).then(async (res) => {
      let result = await res.json();
      console.log('result', result);
    })

    setOpenModal(true);
  };

  return (
    <SafeAreaView className="flex-1 bg-[#ffffff]">
      <ScrollView>
        <Header className="items-start">
          <Pressable
            onPress={save}
            className="ml-auto bg-secondary-200 rounded-2xl p-3 sm:p-4"
          >
            <Text className="text-sm sm:text-base text-[#ffffff] font-gilroy-bold">Save</Text>
          </Pressable>
        </Header>

        <View className="p-9 pt-20 pb-20">
          <View className="flex-row justify-center items-end absolute -top-[85px] left-9 right-9">
            <View className="relative">
              <View className="overflow-hidden w-40 h-36 rounded-[48px] border-4 border-secondary-200">
                <Image source={Avatar} className="w-40 h-36" />
              </View>
              <Pressable
                onPress={() => { }}
                className="bg-secondary-200 rounded-2xl p-2 absolute bottom-0 right-0"
              >
                <EditIcon />
              </Pressable>
            </View>
          </View>
          <Text className="text-base text-primary-100 font-gilroy-bold mb-3">
            Name
          </Text>
          <TextInput
            className="text-base text-primary-100 font-gilroy border-b border-[#C4C4C4] mb-4"
            value={data.name}
            onChangeText={handleInput('name')}
          />

          <Text className="text-base text-primary-100 font-gilroy-bold mb-3">
            Description
          </Text>
          <View className="border-b border-[#C4C4C4] mb-4">
            <TextInput multiline
              className="text-base text-primary-100 font-gilroy"
              value={data.description}
              onChangeText={handleInput('description')}
            />
            <Text className="text-xs text-[#C4C4C4] font-gilroy ml-auto">{data.description.length}/500</Text>
          </View>

          <Text className="text-base text-primary-100 font-gilroy-bold mb-3">
            Adress:
          </Text>
          <TextInput
            className="text-base text-primary-100 font-gilroy border-b border-[#C4C4C4] mb-4"
            value={data.address}
            onChangeText={handleInput('address')}
          />

          <Text className="text-base text-primary-100 font-gilroy-bold mb-3">
            Phone
          </Text>
          <View className="border-b border-[#C4C4C4] mb-4 flex-row">
            <TextInput className="text-base text-primary-100 font-gilroy flex-1 mr-2" />
            <CheckboxCircleIcon />
          </View>

          <Text className="text-base text-primary-100 font-gilroy-bold mb-3">
            Phone
          </Text>
          {error &&
            <View className="flex-row items-center mb-2">
              <WarningIcon />
              <Text className="ml-2 text-[12px] text-secondary-100">This phone number is already registered</Text>
            </View>
          }
          <View className={`border-b ${error ? 'border-secondary-100' : 'border-[#C4C4C4]'} flex-row`}>
            <TextInput
              keyboardType="phone-pad"
              value={data.phone}
              onChangeText={handleInput('phone')}
              className={`flex-1 text-base ${error ? 'text-secondary-100' : 'text-primary-100'} font-gilroy`}
            />
            {!error && checkedPhone &&
              <CheckboxCircleIcon />
            }
            {!error && !checkedPhone &&
              <Pressable onPress={() => navigation.navigate('ConfirmAccount', { checkPhone: () => setCheckedPhone(true) })}>
                <Text className="text-xs text-secondary-100 font-gilroy">Check phone</Text>
              </Pressable>
            }
          </View>

          <View className="flex-row items-center my-24">
            <CreditCardIcon width="51" height="41" color="#4D509E" />
            <Text className="ml-4 text-base text-primary-100 font-gilroy flex-1">5467 **** **** 3467</Text>
            <Pressable onPress={() => navigation.navigate('ProfileClientEditPayment')}>
              <EditIcon color="#EEA4A7" />
            </Pressable>
          </View>

          <View className="flex-row items-center mb-6">
            <FacebookIcon />
            <Text className="ml-4 text-lg text-primary-100 font-gilroy-bold flex-1">Stella Stewart</Text>
            <EditIcon color="#EEA4A7" />
          </View>
          <View className="flex-row items-center mb-6">
            <InstagramIcon />
            <Text className="ml-4 text-base text-[#C4C4C4] font-gilroy">Connect Instagram</Text>
          </View>
          <View className="flex-row items-center mb-6">
            <PinterestIcon />
            <Text className="ml-4 text-base text-[#C4C4C4] font-gilroy">Connect Pinterest</Text>
          </View>
          <View className="flex-row items-center mb-6">
            <TwitterIcon />
            <Text className="ml-4 text-base text-[#C4C4C4] font-gilroy">Connect TikTok</Text>
          </View>
          <View className="flex-row items-center mb-6">
            <TikTokIcon />
            <Text className="ml-4 text-base text-[#C4C4C4] font-gilroy">Connect TikTok</Text>
          </View>
        </View>
      </ScrollView>
      <Modal isVisible={openModal}>
        <View className="p-8 bg-[#ffffff] rounded-3xl">
          <View className="items-end">
            <Pressable onPress={() => setOpenModal(false)}>
              <TimesIcon />
            </Pressable>
          </View>
          <View className="items-center">
            <Image source={Email} className="w-56 h-56" />
          </View>
          <Text className="text-center text-[#3A373E] text-2xl font-gilroy px-10 mt-3">Profile saved successfully</Text>
        </View>
      </Modal>
    </SafeAreaView>
  );
};

export default Create;
