import React from 'react';
import { SafeAreaView, ScrollView, Text, View } from 'react-native';

import Header from '_components/Header';
import Button from '_components/Button';
import Dropdown from '_components/Dropdown';

import { PersonalDataIcon } from '_components/icons';

import Step from './Step';

const PersonalData = ({ navigation }) => {

  return (
    <SafeAreaView className="flex-1">
      <ScrollView>
        <Header title="Credit" />
        <View className="items-center my-10">
          <PersonalDataIcon />
          <Text className="text-2xl text-secondary-300 font-gilroy-bold">Personal data</Text>
        </View>
        <Step step={1} />

        <View className="mt-14 px-9 pb-20">
          <Text className="text-base text-primary-300 font-gilroy mb-2">Civil status</Text>
          <Dropdown
            defaultValue="Married"
            defaultItems={[
              { label: 'Being single', value: 'Being single' },
              { label: 'Married', value: 'Married' },
              { label: 'Separated', value: 'Separated' },
              { label: 'Divorced', value: 'Divorced' },
              { label: 'Widowed', value: 'Widowed' },
            ]}
            zIndex={3000}
            zIndexInverse={1000}
          />

          <Text className="text-base text-primary-300 font-gilroy mt-6 sm:mt-11 mb-2">Education levels</Text>
          <Dropdown
            defaultValue="Early_childhood"
            defaultItems={[
              { label: 'No schooling', value: 'No_schooling' },
              { label: 'Early childhood education', value: 'Early_childhood' },
              { label: 'Primary education', value: 'Primary' },
              { label: 'Lower secondary education', value: 'Lower_secondary' },
              { label: 'Upper secondary education', value: 'Upper_secondary' },
            ]}
            zIndex={2000}
            zIndexInverse={2000}
          />
          <Text className="text-base text-primary-300 font-gilroy mt-6 sm:mt-11 mb-2">Gender</Text>
          <Dropdown
            defaultValue="Feminine"
            defaultItems={[
              { label: 'Masculine', value: 'Masculine' },
              { label: 'Feminine', value: 'Feminine' },
            ]}
            zIndex={1000}
            zIndexInverse={3000}
          />
          <Button
            title="Next"
            type="pro-secondary"
            textClassName="text-base"
            containerClassName="mt-16"
            onPress={() => navigation.navigate('ProCreditBankAccount')}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default PersonalData;
