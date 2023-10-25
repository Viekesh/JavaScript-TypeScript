import React from 'react';
import Notification from './components/Notification'; // Requires messages: Array
import NumberedButtons from './components/NumberedButtons'; // Requires num: Number
import StudentCard from './components/StudentCard'; // Requires student: Shape

const App = () => {
  return <div className="main">
    {/* <Notification messages={["Please renew your account", "you have three notification"]} /> */}
    <NumberedButtons num={"some buttons"} />
  </div>;
};

export default App;
