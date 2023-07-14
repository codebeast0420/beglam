import React, { useState } from 'react';
import DropDownPicker from 'react-native-dropdown-picker';

import { ArrowUpIcon, ArrowDownIcon } from '_components/icons';

const Dropdown = ({ defaultValue, defaultItems, ...rest }) => {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(defaultValue || '');
  const [items, setItems] = useState(defaultItems || []);

  return (
    <DropDownPicker
      open={open}
      value={value}
      items={items}
      setOpen={setOpen}
      setValue={setValue}
      setItems={setItems}
      ArrowUpIconComponent={ArrowUpIcon}
      ArrowDownIconComponent={ArrowDownIcon}
      showTickIcon={false}
      closeAfterSelecting={true}
      closeOnBackPressed={true}
      listMode="SCROLLVIEW"
      style={{
        backgroundColor: '#ffffff',
        borderColor: 'transparent',
        borderRadius: 16,
        borderTopEndRadius: 16,
        borderTopStartRadius: 16,
        borderBottomEndRadius: 16,
        borderBottomStartRadius: 16,
        paddingHorizontal: 26,
        paddingVertical: 16,
        minHeight: 28,
      }}
      dropDownContainerStyle={{
        maxHeight: 120,
        borderWidth: 0,
        borderTopStartRadius: 16,
        borderTopEndRadius: 16,
        borderBottomStartRadius: 16,
        borderBottomEndRadius: 16,
        paddingHorizontal: 18,
        marginTop: 8,
        marginBottom: 8
      }}
      labelStyle={{ fontSize: 16, color: '#60EAC0', }}
      textStyle={{ fontSize: 16, color: '#4E819B' }}
      selectedItemLabelStyle={{ color: '#60EAC0' }}
      arrowIconStyle={{ color: '#60EAC0' }}
      {...rest}
    />
  );
};

export default Dropdown;
