import React from 'react';

import SwitchList from '_components/settings/SwitchList';

const Watermarks = () => {
  const options = [
    { title: 'Your Name' },
    { title: 'Facebook' },
    { title: 'Pinterest' },
    { title: 'Twitter' },
    { title: 'Instagram' },
    { title: 'Tik Tok' },
  ];

  return (
    <SwitchList title="Watermarks" options={options} />
  );
};

export default Watermarks;
