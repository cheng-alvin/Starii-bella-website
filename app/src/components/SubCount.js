//Importing packages
import React, { useEffect, useState } from "react";
import MediaLink from "./MediaLink.js";

//SubCount component
const SubCount = () => {
  //SubCount variable
  let [subCount, setSubCount] = useState(0);
  //Useffect hook
  useEffect(() => {
    //Get data from youtube API
    fetch(
      `https://www.googleapis.com/youtube/v3/channels?part=statistics&id=UCXc3hzORGb-osun3RcY0oOw&key=${process.env.API_KEY}`
    )
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setSubCount(data.items[0].statistics.subscriberCount);
      })
      .catch((err) => console.log(err));
  }, []);
  //Render component
  return (
    <div style={{ backgroundColor: "#4b95df", padding: "7.5% 15% 15% 15%" }}>
      {/*Tittle*/}
      <h1
        style={{
          fontFamily: "Bebas Neue, cursive",
          color: "#ffff",
          fontSize: "4vw",
        }}
      >
        Total subscribers:
      </h1>
      {/*Subscription count*/}
      <h1 style={{ color: "#ffff" }}>{subCount}</h1>
      {/*Subscibe link*/}
      <MediaLink
        style={{ paddingTop: "2rem" }}
        borderColor="#ffff"
        textColor="black"
        borderRad="0.5rem"
        backgroundColor="#ffff"
        text="SUBSCRIBE NOW!"
        link="https://www.youtube.com/channel/UCXc3hzORGb-osun3RcY0oOw"
      />
    </div>
  );
};

//Export component
export default SubCount;
