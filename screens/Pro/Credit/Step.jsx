import React from 'react';
import { View } from 'react-native';
import StepIndicator from 'expo-step-indicator';

import { CheckIcon } from '_components/icons';

const Step = ({ step }) => {
  const customStyles = {
    stepIndicatorSize: 25,
    currentStepIndicatorSize: 25,
    separatorStrokeWidth: 2,
    currentStepStrokeWidth: 1,
    stepStrokeCurrentColor: '#60EAC0',
    stepStrokeWidth: 1,
    stepStrokeFinishedColor: '#60EAC0',
    stepStrokeUnFinishedColor: '#DDDDDD',
    separatorFinishedColor: '#60EAC0',
    separatorUnFinishedColor: '#DDDDDD',
    stepIndicatorFinishedColor: '#60EAC0',
    stepIndicatorUnFinishedColor: '#DDDDDD',
    stepIndicatorCurrentColor: '#F1EEED',
  };

  const renderStepIndicator = (position) => {
    return (
      <View>
        {position?.stepStatus === 'finished' &&
          <CheckIcon />
        }
      </View>
    );
  };
  return (
    <View className="mx-7">
      <StepIndicator
        customStyles={customStyles}
        currentPosition={step}
        stepCount={4}
        renderStepIndicator={renderStepIndicator}
      />
    </View>
  );
};

export default Step;
