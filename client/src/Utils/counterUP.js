import { CountUp } from "countup.js";

const counterUP = () => {
  const counters = [
    { id: "counter1", start: 0, end: 250 },
    { id: "counter2", start: 0, end: 250 },
    { id: "counter3", start: 0, end: 250 },
  ];

  counters.forEach(({ id, start, end }) => {
    const counter = new CountUp(id, end, {
      startVal: start,
      
      duration: 3,
      separator: ",",
      decimal: ".",
      decimals: 0,
    });


    if (!counter.error) {
      counter.start();
    } else {
      console.error(`Error on #${id}:`, counter.error);
    }
  });
};

export default counterUP;
