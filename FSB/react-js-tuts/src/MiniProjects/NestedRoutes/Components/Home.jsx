import React from "react";



const Home = () => {
  return (
    <>
      <div className="home">
        <h3>Personal Recipe Organizer</h3>
        <div className="cards">

          <div className="card">
            <div className="title">Super Fun</div>
            <div className="description">
              iCanCook! is a super easy way to organize your recipes. You can view your recipe cards by logging in to the system!
            </div>
          </div>

          <div className="card">
            <div className="title">Cooking Is Fun</div>
            <div className="description">
              Whether you're home alone, or organizing a party for your friends and
              family, cooking is always fun but given the quantum of opportunities
              you get to impress your guests, you need to be particularly handy with
              awesome recipes! That's where iCanCook! comes in!
            </div>
          </div>

          <div className="card">
            <div className="title">Always Free</div>
            <div className="description">
              iCanCook! is always free! We feel cooking is for everyone and to that
              end, we will always keep this service free!
            </div>
          </div>

        </div>
      </div>
    </>
  );
};

export default Home;
