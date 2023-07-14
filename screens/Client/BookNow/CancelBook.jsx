import React, { useRef, useState } from 'react';
import { Pressable, Text, TextInput, View } from 'react-native';

import Button from '_components/Button';

const CancelBook = ({ step }) => {
  const inputRef = useRef(null);
  const [selectedReasons, setSelectedReasons] = useState([]);

  const handleSelectReason = type => () => {
    setSelectedReasons(prev => {
      let index = prev.indexOf(type);
      if (index > -1) {
        prev.splice(index, 1);
      } else {
        prev.push(type);
      }

      return [...prev];
    });
  };

  return (
    <View>
      {step === 9 &&
        <View className="items-center border-dashed rounded-2xl pt-4 pb-2 px-5 mb-8"
          style={{
            borderWidth: 1,
            borderColor: '#ED6960',
          }}>
          <Text className="text-lg text-black font-gilroy">Important warning!</Text>
          <Text className="text-lg text-secondary-100 font-gilroy text-center">By canceling, you agree to pay the fine in the amount of</Text>
          <Text className="text-[30px] text-secondary-100 font-gilroy-bold">$3</Text>
        </View>
      }
      {step === 10 &&
        <View className="mb-10">
          <Text className="text-lg text-secondary-100 font-gilroy mb-5">Why are you canceling?</Text>
          <Button
            title="Withdrew from the service"
            variant={selectedReasons.includes('withdrew') ? 'fill' : 'outline'}
            type={selectedReasons.includes('withdrew') ? 'client-secondary' : 'client-primary'}
            textClassName="text-base"
            containerClassName="mb-2 border border-secondary-200"
            onPress={handleSelectReason('withdrew')}
          />
          <Button
            title="Travel time was too long"
            variant={selectedReasons.includes('long') ? 'fill' : 'outline'}
            type={selectedReasons.includes('long') ? 'client-secondary' : 'client-primary'}
            textClassName="text-base"
            containerClassName="mb-2 border border-secondary-200"
            onPress={handleSelectReason('long')}
          />
          <Button
            title="I couldn't get in touch with the professional"
            variant={selectedReasons.includes('touch') ? 'fill' : 'outline'}
            type={selectedReasons.includes('touch') ? 'client-secondary' : 'client-primary'}
            textClassName="text-base"
            containerClassName="mb-2 px-0 border border-secondary-200"
            onPress={handleSelectReason('touch')}
          />
          <Button
            title="I had a unforeseen"
            variant={selectedReasons.includes('unforeseen') ? 'fill' : 'outline'}
            type={selectedReasons.includes('unforeseen') ? 'client-secondary' : 'client-primary'}
            textClassName="text-base"
            containerClassName="mb-2 border border-secondary-200"
            onPress={handleSelectReason('unforeseen')}
          />
        </View>
      }
      {step === 11 &&
        <View>
          <Text className="mb-2 text-lg text-secondary-200 font-gilroy">Your order was canceled</Text>
          <Text className="mb-8 text-base text-primary-100 font-gilroy">What went wrong? Tell us the reason for your cancellation and help us improve our service.</Text>
          <Pressable
            className="border border-primary-100 rounded-3xl p-6 h-40 mb-11"
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
    </View>
  );
};

export default CancelBook;
