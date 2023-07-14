import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { Pressable, SafeAreaView, ScrollView, Text, View } from 'react-native';

import Header from '_components/Header';

const Settings = ({ options }) => {
  const navigation = useNavigation();

  return (
    <SafeAreaView className="flex-1">
      <Header title="Options" />

      <ScrollView>
        <View className="px-9 pt-5 pb-12 gap-y-2">
          {options.map((option, i) => (
            <Pressable
              key={i}
              className="rounded-2xl bg-[#ffffff] flex-row justify-between items-center py-3 px-6"
              onPress={() => navigation.navigate(option.href)}
            >
              <Text className="text-2xl font-gilroy text-primary-200 dark:text-primary-300">{option.title}</Text>
              {option?.value &&
                <Text className="text-base font-gilroy text-[#C4C4C4]">{option.value}</Text>
              }
            </Pressable>
          ))}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Settings;
