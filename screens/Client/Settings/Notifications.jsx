import React from 'react';

import SwitchList from '_components/settings/SwitchList';

const Notifications = () => {
  const options = [
    { title: 'Regular service' },
    { title: 'Purple service' },
    { title: 'Red service' },
    { title: '1h Alert' },
    { title: '15m alert' },
    { title: 'Last moment alert' },
  ];

  return (
    <SwitchList title="Notifications" options={options} />
  );
};

export default Notifications;
