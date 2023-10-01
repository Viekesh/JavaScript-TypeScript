import React from "react";
import Notification from "./components/Notification"; // Requires messages: Array
import NumberedButtons from "./components/NumberedButtons"; // Requires num: Number
import StudentCard from "./components/StudentCard"; // Requires student: Shape

const App = () => {
  return (
    <div className="main">
      <Notification
      // As you can see it renders an unordered list of messages but what if we pass string instead of an array?
      // Naturally the component would failed to iterate over an array and it gives an error.
        messages={["Please renew your account", "You have 2 notifications"]}
      />
      <NumberedButtons num={5} />
      <StudentCard
        student={{
          name: "Richie Samson",
          id: 1209,
          active: true,
          courses: [
            "Deep Learning Fundamentals - 2019",
            "Python - Intermediate"
          ]
        }}
      />
    </div>
  );
};

export default App;
