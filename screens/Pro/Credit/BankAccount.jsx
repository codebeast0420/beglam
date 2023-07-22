import React, { useState } from 'react';
import { Pressable, SafeAreaView, ScrollView, Text, TextInput, View } from 'react-native';

import Header from '_components/Header';
import Button from '_components/Button';
import Dropdown from '_components/Dropdown';

import { BankAccountIcon, CheckboxCircleIcon } from '_components/icons';

import Step from './Step';

const BankAccount = ({ navigation }) => {
  const [selectedType, setSelectedType] = useState('legal');

  return (
    <SafeAreaView className="flex-1">
      <ScrollView>
        <Header title="Credit" />
        <View className="items-center my-10">
          <BankAccountIcon />
          <Text className="text-2xl text-secondary-300 font-gilroy-bold">Bank account</Text>
        </View>
        <Step step={2} />

        <View className="mt-14 px-9 pb-20">
          <Text className="text-base text-primary-300 font-gilroy mb-2">In which bank do you have an account?</Text>
          <Dropdown
            defaultValue="NOVO"
            defaultItems={[
              { label: 'SANTANDER TOTTA, SA', value: 'SANTANDER' },
              { label: 'COMERCIAL PORTUGUÊS, SA', value: 'COMERCIAL' },
              { label: 'NOVO BANCO, SA', value: 'NOVO' },
              { label: 'BANKINTER, SA', value: 'BANKINTER' },
              { label: 'BILBAO VIZCAYA ARGENTARIA', value: 'BILBAO' },
            ]}
            zIndex={3000}
            zIndexInverse={1000}
          />
          <Text className="text-base text-primary-300 font-gilroy mt-10 mb-2">Type of person</Text>
          <Pressable
            className="flex-row justify-between items-center bg-[#ffffff] rounded-2xl py-3 sm:py-5 px-6 mb-3 min-h-[51px]"
            onPress={() => setSelectedType('legal')}
          >
            <Text className="text-base text-primary-300 font-gilroy">Legal person</Text>
            {selectedType === 'legal' &&
              <CheckboxCircleIcon color="#60EAC0" />
            }
          </Pressable>
          <Pressable
            className="flex-row justify-between items-center bg-[#ffffff] rounded-2xl py-3 sm:py-5 px-6 mb-6 sm:mb-10 min-h-[51px]"
            onPress={() => setSelectedType('juridical')}
          >
            <Text className="text-base text-primary-300 font-gilroy">Juridical person</Text>
            {selectedType === 'juridical' &&
              <CheckboxCircleIcon color="#60EAC0" />
            }
          </Pressable>
          {selectedType === 'legal' &&
            <>
              <Text className="text-base text-primary-300 font-gilroy mb-2">CPF</Text>
              <TextInput
                placeholder="xxx.xxx.xxx-xx"
                placeholderTextColor="#4E819B"
                className="flex-1 bg-[#ffffff] rounded-2xl py-3 sm:py-5 px-6 mb-6 sm:mb-10 text-base text-primary-300 font-gilroy"
              />
            </>
          }
          {selectedType === 'juridical' &&
            <>
              <Text className="text-base text-primary-300 font-gilroy mb-2">CNPJ</Text>
              <TextInput
                placeholder="xx.xxx.xxx/xxxx-xx"
                placeholderTextColor="#4E819B"
                className="flex-1 bg-[#ffffff] rounded-2xl py-3 sm:py-5 px-6 mb-6 sm:mb-10 text-base text-primary-300 font-gilroy"
              />
              <Text className="text-base text-primary-300 font-gilroy mb-2">Simples Nacional</Text>
              <TextInput
                placeholder="xxxxxxxxxx"
                placeholderTextColor="#4E819B"
                className="flex-1 bg-[#ffffff] rounded-2xl py-3 sm:py-5 px-6 mb-6 sm:mb-10 text-base text-primary-300 font-gilroy"
              />
            </>
          }
          <Text className="text-base text-primary-300 font-gilroy mb-2">Agência</Text>
          <TextInput
            placeholder="xxxxxx"
            placeholderTextColor="#4E819B"
            className="flex-1 bg-[#ffffff] rounded-2xl py-3 sm:py-5 px-6 mb-6 sm:mb-10 text-base text-primary-300 font-gilroy"
          />
          <Text className="text-base text-primary-300 font-gilroy mb-2">Conta</Text>
          <TextInput
            placeholder="xxxxxx"
            placeholderTextColor="#4E819B"
            className="flex-1 bg-[#ffffff] rounded-2xl py-3 sm:py-5 px-6 mb-6 sm:mb-10 text-base text-primary-300 font-gilroy"
          />
          <Text className="text-base text-primary-300 font-gilroy mb-2">PIX</Text>
          <Dropdown
            defaultValue="CPF"
            defaultItems={[
              { label: 'Celular', value: 'Celular' },
              { label: 'CPF', value: 'CPF' },
              { label: 'CNPJ', value: 'CNPJ' },
              { label: 'E-mail', value: 'E-mail' },
              { label: 'Código', value: 'Código' },
            ]}
            zIndex={3000}
            zIndexInverse={1000}
          />
          <TextInput
            placeholder="xxx.xxx.xxx-xx"
            placeholderTextColor="#4E819B"
            className="flex-1 bg-[#ffffff] rounded-2xl py-3 sm:py-5 px-6 mt-3 text-base text-primary-300 font-gilroy"
          />
          <Button
            title="Next"
            type="pro-secondary"
            textClassName="text-base"
            containerClassName="mt-14"
            onPress={() => navigation.navigate('ProCreditAboutCredit')}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default BankAccount;
