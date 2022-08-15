import LOGO from "../assets/images/web/logo.jpg";
import SEPARATING_IMAGE from "../assets/images/web/separating.jpg";
import VOLTAGE_IMAGE from "../assets/images/web/voltage.jpg";
import SOAP_IMAGE from "../assets/images/web/soap.jpg";
import METHOD_WATER from "../assets/images/soap/screen1/water.png";
import METHOD_SOAP from "../assets/images/soap/screen1/soap.png";
import METHOD_WATER_RED from "../assets/images/soap/screen1/waterRed.png";
import METHOD_SOAP_RED from "../assets/images/soap/screen1/soapRed.png";

import FLOW_SOAP_10_A from "../assets/images/soap/screen2/soap10/flowA.mp4";
import FLOW_SOAP_10_B from "../assets/images/soap/screen2/soap10/flowB.mp4";
import FLOW_SOAP_10_C from "../assets/images/soap/screen2/soap10/flowC.mp4";
import FLOW_SOAP_10_D from "../assets/images/soap/screen2/soap10/flowD.mp4";
import FLOW_SOAP_10_E from "../assets/images/soap/screen2/soap10/flowE.jpg";

import FLOW_SOAP_20_A from "../assets/images/soap/screen2/soap20/flowA.mp4";
import FLOW_SOAP_20_B from "../assets/images/soap/screen2/soap20/flowB.mp4";
import FLOW_SOAP_20_C from "../assets/images/soap/screen2/soap20/flowC.mp4";
import FLOW_SOAP_20_D from "../assets/images/soap/screen2/soap20/flowD.mp4";
import FLOW_SOAP_20_E from "../assets/images/soap/screen2/soap20/flowE.jpg";

import FLOW_SOAP_30_A from "../assets/images/soap/screen2/soap30/flowA.mp4";
import FLOW_SOAP_30_B from "../assets/images/soap/screen2/soap30/flowB.mp4";
import FLOW_SOAP_30_C from "../assets/images/soap/screen2/soap30/flowC.mp4";
import FLOW_SOAP_30_D from "../assets/images/soap/screen2/soap30/flowD.mp4";
import FLOW_SOAP_30_E from "../assets/images/soap/screen2/soap30/flowE.jpg";

import FLOW_WATER_10_A from "../assets/images/soap/screen2/water10/flowA.mp4";
import FLOW_WATER_10_B from "../assets/images/soap/screen2/water10/flowB.mp4";
import FLOW_WATER_10_C from "../assets/images/soap/screen2/water10/flowC.mp4";
import FLOW_WATER_10_D from "../assets/images/soap/screen2/water10/flowD.mp4";
import FLOW_WATER_10_E from "../assets/images/soap/screen2/water10/flowE.jpg";

import FLOW_WATER_20_A from "../assets/images/soap/screen2/water20/flowA.mp4";
import FLOW_WATER_20_B from "../assets/images/soap/screen2/water20/flowB.mp4";
import FLOW_WATER_20_C from "../assets/images/soap/screen2/water20/flowC.mp4";
import FLOW_WATER_20_D from "../assets/images/soap/screen2/water20/flowD.mp4";
import FLOW_WATER_20_E from "../assets/images/soap/screen2/water20/flowE.jpg";

import FLOW_WATER_30_A from "../assets/images/soap/screen2/water30/flowA.mp4";
import FLOW_WATER_30_B from "../assets/images/soap/screen2/water30/flowB.mp4";
import FLOW_WATER_30_C from "../assets/images/soap/screen2/water30/flowC.mp4";
import FLOW_WATER_30_D from "../assets/images/soap/screen2/water30/flowD.mp4";
import FLOW_WATER_30_E from "../assets/images/soap/screen2/water30/flowE.jpg";

import SEPARATING_DISSOLVING from "../assets/images/separating/2A.mp4";
import SEPARATING_FILTRATION from "../assets/images/separating/2B.mp4";
import SEPARATING_EVAPORATION from "../assets/images/separating/2C.mp4";

import frame1a from "../assets/images/voltage/Q1(input3).mp4";
import frame1b from "../assets/images/voltage/frame3.png";
import frame2a from "../assets/images/voltage/Q2(input6).mp4";
import frame2b from "../assets/images/voltage/frame5.png";
import frame4 from "../assets/images/voltage/frame4.png";
import frame5 from "../assets/images/voltage/frame5.png";
import frame6 from "../assets/images/voltage/frame6.png";

import START_VOLTAGE from "../assets/images/voltage/index.png";
import END_VOLTAGE from "../assets/images/voltage/summary.png";
const TYPE_QUESTION_ONE = "TYPE_ONE";
const TYPE_QUESTION_TWO = "TYPE_TWO";
const TYPE_QUESTION_THREE = "TYPE_THREE";

const Constant = {
  BASE_URL: "https://localhost:7071",
  LOGO: LOGO,
  SEPARATING_IMAGE: SEPARATING_IMAGE,
  VOLTAGE_IMAGE: VOLTAGE_IMAGE,
  SOAP_IMAGE: SOAP_IMAGE,

  METHOD_WATER: METHOD_WATER,
  METHOD_SOAP: METHOD_SOAP,
  METHOD_SOAP_REd: METHOD_SOAP_RED,
  METHOD_WATER_RED: METHOD_WATER_RED,

  METHOD_TEXT_WATER: "METHOD WATER",
  METHOD_TEXT_SOAP: "METHOD ANTISEPTIC SOAP + WATER",

  FLOW_SOAP_10: {
    A: {
      description: "Streaking of agar plate with unwashed finger",
      type: "video",
      url: FLOW_SOAP_10_A,
    },
    B: {
      description: "Washing of hands with water for 10 S with soap",
      type: "video",
      url: FLOW_SOAP_10_B,
    },
    C: {
      description: "Streaking of a new agar plate with washed finger",
      type: "video",
      url: FLOW_SOAP_10_C,
    },
    D: {
      description: "Incubate for 24hrs",
      type: "video",
      url: FLOW_SOAP_10_D,
    },
    E: {
      description: "Compare no of colonies on both agar plates",
      type: "image",
      url: FLOW_SOAP_10_E,
    },
  },
  FLOW_SOAP_20: {
    A: {
      description: "Streaking of agar plate with unwashed finger",
      type: "video",
      url: FLOW_SOAP_20_A,
    },
    B: {
      description: "Washing of hands with water for 20 S with soap",
      type: "video",
      url: FLOW_SOAP_20_B,
    },
    C: {
      description: "Streaking of a new agar plate with washed finger",
      type: "video",
      url: FLOW_SOAP_20_C,
    },
    D: {
      description: "Incubate for 24hrs",
      type: "video",
      url: FLOW_SOAP_20_D,
    },
    E: {
      description: "Compare no of colonies on both agar plates",
      type: "image",
      url: FLOW_SOAP_20_E,
    },
  },
  FLOW_SOAP_30: {
    A: {
      description: "Streaking of agar plate with unwashed finger",
      type: "video",
      url: FLOW_SOAP_30_A,
    },
    B: {
      description: "Washing of hands with water for 30 S with soap",
      type: "video",
      url: FLOW_SOAP_30_B,
    },
    C: {
      description: "Streaking of a new agar plate with washed finger",
      type: "video",
      url: FLOW_SOAP_30_C,
    },
    D: {
      description: "Incubate for 24hrs",
      type: "video",
      url: FLOW_SOAP_30_D,
    },
    E: {
      description: "Compare no of colonies on both agar plates",
      type: "image",
      url: FLOW_SOAP_30_E,
    },
  },
  FLOW_WATER_10: {
    A: {
      description: "Streaking of agar plate with unwashed finger",
      type: "video",
      url: FLOW_WATER_10_A,
    },
    B: {
      description: "Washing of hands with water for 10 S",
      type: "video",
      url: FLOW_WATER_10_B,
    },
    C: {
      description: "Streaking of a new agar plate with washed finger",
      type: "video",
      url: FLOW_WATER_10_C,
    },
    D: {
      description: "Incubate for 24hrs",
      type: "video",
      url: FLOW_WATER_10_D,
    },
    E: {
      description: "Compare no of colonies on both agar plates",
      type: "image",
      url: FLOW_WATER_10_E,
    },
  },
  FLOW_WATER_20: {
    A: {
      description: "Streaking of agar plate with unwashed finger",
      type: "video",
      url: FLOW_WATER_20_A,
    },
    B: {
      description: "Washing of hands with water for 20 S",
      type: "video",
      url: FLOW_WATER_20_B,
    },
    C: {
      description: "Streaking of a new agar plate with washed finger",
      type: "video",
      url: FLOW_WATER_20_C,
    },
    D: {
      description: "Incubate for 24hrs",
      type: "video",
      url: FLOW_WATER_20_D,
    },
    E: {
      description: "Compare no of colonies on both agar plates",
      type: "image",
      url: FLOW_WATER_20_E,
    },
  },
  FLOW_WATER_30: {
    A: {
      description: "Streaking of agar plate with unwashed finger",
      type: "video",
      url: FLOW_WATER_30_A,
    },
    B: {
      description: "Washing of hands with water for 30 S",
      type: "video",
      url: FLOW_WATER_30_B,
    },
    C: {
      description: "Streaking of a new agar plate with washed finger",
      type: "video",
      url: FLOW_WATER_30_C,
    },
    D: {
      description: "Incubate for 24hrs",
      type: "video",
      url: FLOW_WATER_30_D,
    },
    E: {
      description: "Compare no of colonies on both agar plates",
      type: "image",
      url: FLOW_WATER_30_E,
    },
  },

  METHOD_SEPARATING_DISSOLVING: {
    text: "dissolving",
    video: SEPARATING_DISSOLVING,
  },

  METHOD_SEPARATING_FILTRATION: {
    text: "filtration",
    video: SEPARATING_FILTRATION,
  },

  METHOD_SEPARATING_EVAPORATION: {
    text: "evaporation",
    video: SEPARATING_EVAPORATION,
  },

  QUESTIONS: [
    {
      id: 1,
      name: "Circuit 1",
      question:
        "CLICK on to points on the circuit to measure the voltage acrros the two points with a voltmeter. Fill the blanks with the voltage measurements obtained for the stated parts of circuit.",
      type: TYPE_QUESTION_ONE,
      addition: [frame1a],
      additionType: ["video"],
      choice: [
        {
          text: "Voltage across <b>lamp A<b> =",
          unit: "V",
        },
        {
          text: "Voltage across <b>lamp B </b> =",
          unit: "V",
        },
        {
          text: "Voltage across <b>power source</b> =",
          unit: "V",
        },
      ],
      additionWide: [],
      key: ["3", "3", "3"],
    },
    {
      id: 2,
      name: "Circuit 1",
      question:
        "Select the correct symbol for each blank to show the relationship between the voltage across power source, voltage across lamp A, and voltage across lamp B. You may use each other option more than once.",
      type: TYPE_QUESTION_TWO,
      addition: [frame1b],
      additionType: ["image"],
      known: [
        "Voltage across <b>lamp A</b> = 30 V",
        "Voltage across <b>lamp B</b> = 30 V ",
        "Voltage across <b>power source</b> = 30 V",
      ],
      hint: [
        "voltage across power source",
        "voltage across lamp A",
        "voltage across lamp B",
      ],
      additionWide: [],
      key: ["=", "="],
      choice: ["+", "-", ":", "×", "="],
    },
    {
      id: 3,
      name: "Circuit 2",
      question:
        "CLICK on to points on the circuit to measure the voltage across the two points with a voltmeter. Fill the blanks with the voltage measurements obtained for the stated parts of circuit.",
      type: TYPE_QUESTION_ONE,
      addition: [frame2a],
      additionType: ["video"],
      choice: [
        {
          text: "Voltage across <b>lamp<b> =",
          unit: "V",
        },
        {
          text: "Voltage across <b>variable resistor</b> =",
          unit: "V",
        },
        {
          text: "Voltage across <b>power source</b> =",
          unit: "V",
        },
      ],
      additionWide: [],
      key: ["6", "6", "6"],
    },
    {
      id: 4,
      name: "Circuit 2",
      question:
        "SELECT the correct symbol for each blank to show the relationship between the voltage across power source, voltage across lamp, and voltage across variable resistor. You may use each other option more than once.",
      type: TYPE_QUESTION_TWO,
      addition: [frame2b],
      additionType: ["image"],
      known: [
        "Voltage across <b>lamp</b> = 6.0 V",
        "Voltage across <b>variable resistor</b> = 6.0 V ",
        "Voltage across <b>power source</b> = 6.0 V",
      ],
      hint: [
        "voltage across power source",
        "voltage across lamp",
        "voltage across variable resistor",
      ],
      additionWide: [],
      key: ["=", "="],
      choice: ["+", "-", ":", "×", "="],
    },
    {
      id: 5,
      name: "Comparison",
      question:
        "COMPARE the voltage readings. Select the correct answer that describes the voltage across separate branches of a parallel circuit.",
      type: TYPE_QUESTION_THREE,
      addition: [frame6],
      additionType: ["image"],
      additionWide: [0],
      hint: ["The voltage accross seperate branches of a parallel circuit is"],
      choice: ["the same", "different"],
      key: "the same",
    },
  ],
  START_VOLTAGE: START_VOLTAGE,
  END_VOLTAGE: END_VOLTAGE,
};
const COURSE = [
  {
    name: "Voltage in a Paralel Circuit",
    thumbnail: Constant.VOLTAGE_IMAGE,
    link: "/voltage",
    description:
      "Manipulate interactive to make measurements and deduce the relationship between voltage across separate branches of a parallel circuit.",
  },
  {
    name: "Staying Healthy - Effect of Soap",
    thumbnail: Constant.SOAP_IMAGE,
    link: "/soap",
    description:
      "Investigate the effects of anti-microbial agents (e.g. antiseptics, disinfectants) on the population growth of micro-organisms (e.g. bacteria, fungi)",
  },
  {
    name: "Separating Mixture Salt and Rice Grains",
    thumbnail: Constant.SEPARATING_IMAGE,
    link: "/separating",
    description:
      "Manipulative interactive allows students to observe how separation techniques in different sequences affect the separation of salt and rice grains.",
  },]
Object.freeze(Constant);
export {
  Constant as default,
  TYPE_QUESTION_ONE,
  COURSE,
  TYPE_QUESTION_TWO,
  TYPE_QUESTION_THREE,
};

