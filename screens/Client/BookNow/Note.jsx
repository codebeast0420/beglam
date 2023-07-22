import React, { useRef } from 'react';
import { Pressable, Text, TextInput } from 'react-native';

const Note = () => {
  const inputRef = useRef(null);

  return (
    <>
      <Text className="text-[32px] text-secondary-200 font-gilroy mb-8">Want to leave a note?</Text>
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
    </>
  );
};

export default Note;
