import React, { useState } from 'react';
import { Image, Pressable, SafeAreaView, ScrollView, Text, View } from 'react-native';
import Modal from 'react-native-modal';
import { useColorScheme } from 'nativewind';

import Header from '_components/Header';
import Button from '_components/Button';
import { CheckboxCircleIcon, TimesIcon } from '_components/icons';

const Email = require('_assets/images/auth/email.gif');

const Language = () => {
  const { colorScheme } = useColorScheme();
  const [openModal, setOpenModal] = useState(false);
  const [displayLang, setDisplayLang] = useState('English');
  const [selectedLang, setSelectedLang] = useState('English');
  const languages = [
    'Spanish',
    'French',
    'Portuguese',
    'Italian',
    'German',
    'Russian',
    'English',
    'Mandarin',
    'Japaneses',
  ];

  const save = () => {
    setOpenModal(true);
    setDisplayLang((selectedLang));
  };

  return (
    <SafeAreaView className="flex-1">
      <Header title="Language" />

      <ScrollView>
        <View className="px-9 pt-5 pb-12">
          <View className="gap-y-2">
            {languages.map((lang, i) => (
              <Pressable
                key={i}
                className="rounded-2xl bg-[#ffffff] flex-row justify-between items-center py-3 px-6"
                onPress={() => setSelectedLang(lang)}
              >
                <Text className="text-2xl font-gilroy text-primary-200 dark:text-primary-300">{lang}</Text>
                {selectedLang === lang && <CheckboxCircleIcon color={colorScheme === 'light' ? '#EEA4A7' : '#60EAC0'} />}
              </Pressable>
            ))}
          </View>
          {selectedLang !== displayLang &&
            <Button
              title="Save"
              type="pro-secondary"
              textClassName="text-base"
              containerClassName="mt-10"
              onPress={save}
            />
          }
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
          <Text className="text-center text-2xl font-gilroy mt-3">Language changed to</Text>
          <Text className="text-center text-2xl font-gilroy-bold text-primary-100">{selectedLang}</Text>
        </View>
      </Modal>
    </SafeAreaView>
  );
};

export default Language;
