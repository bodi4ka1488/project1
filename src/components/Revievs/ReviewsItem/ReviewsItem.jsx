import React, { useEffect } from "react";
import { useState } from "react";
import { CompanyName, Name, Title, Wrapper } from "./Styles";
let arrOfReviewers = [
  { title: "A", author: "CBoris Britva", company: "Afod" },
  { title: "B", author: "GWBoris Britva", company: "DepGrop" },
  { title: "C", author: "BEBoris Ba", company: "100top" },
  { title: "D", author: "BorisLo Britva", company: "robota" },
  { title: "E", author: "Bos Bra", company: "coed" },
  { title: "E", author: "Bos Bra", company: "coed" },
];

export const ReviewsItem = () => {
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    if (counter > 4) {
      setCounter((percounter) => (percounter = 0));
    } else {
      const interval = setInterval(() => {
        setCounter((prevCounter) => prevCounter + 1);
      }, 3000);
      return () => clearInterval(interval);
    }
  }, [counter]);
  return (
    <Wrapper>
      <Title>{arrOfReviewers[counter].title}</Title>
      <Name>{arrOfReviewers[counter].author}</Name>
      <CompanyName>{arrOfReviewers[counter].company}</CompanyName>
    </Wrapper>
  );
};
