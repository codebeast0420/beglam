import React, { useState } from 'react';
import { Pressable, View } from 'react-native';

import { CheckboxEmptyIcon, CheckboxIcon, CheckboxCircleIcon } from './icons';

const CheckBox = ({ type = 'square', onChecked, onCheck }) => {
  const [checked, setChecked] = useState(false);

  const handlePress = () => {
    setChecked(prev => {
      onChecked && onChecked(!prev);
      onCheck && onCheck(!prev);
      return !prev;
    });
  };

  return (
    <Pressable
      onPress={handlePress}
    >
      {type === 'square' &&
        <>
          {checked ? <CheckboxIcon /> : <CheckboxEmptyIcon />}
        </>
      }
      {type === 'circle' &&
        <>
          {checked
            ? <CheckboxCircleIcon color="#4D509E" />
            : <View className="w-[26px] h-[26px] border border-primary-100 rounded-full" />
          }
        </>
      }
    </Pressable>
  );
};

export default CheckBox;