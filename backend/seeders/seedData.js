const mongoose = require('mongoose');
const Leader = require('../models/Leader');
const Award = require('../models/Award');
const connectDB = require('../mongodb-connection');
require('dotenv').config();

const leadersData = [
  {
    name: "General Upendra Dwivedi",
    rank: "PVSM AVSM",
    position: "Chief of the Army Staff",
    tenure: "30 June 2024 to Till Date",
    image: "/uploads/leaders/chief.jpg",
    bio: "Current Chief of the Indian Army Staff.",
    achievements: [
      "Param Vishisht Seva Medal",
      "Ati Vishisht Seva Medal",
      "Three GOC-in-C Commendation cards"
    ],
    details: `General Upendra Dwivedi assumed command of the Indian Army on 30 Jun 24. Prior to this, he was Vice Chief of the Army Staff from Feb 24 onwards. He is the recipient of Param Vishisht Seva Medal, Ati Vishisht Seva Medal and three GOC-in-C Commendation cards.

    He hails from Madhya Pradesh and has studied in Sainik School Rewa (MP). He joined the prestigious National Defence Academy in January 1981 and was commissioned into the 18th Battalion of the Jammu and Kashmir Rifles on 15 Dec 1984, which he later commanded in the Kashmir valley and the deserts of Rajasthan. From his school days, he was an outstanding sportsman and excelled in both NDA and IMA, where he was awarded the Blue in Physical Training. He continued to excel post commissioning and was awarded the gold medal in the Physical Training Course.`
  },
  {
    name: "General Manoj Pande",
    rank: "PVSM, AVSM, VSM, ADC",
    position: "Chief of the Army Staff",
    tenure: "30 Apr 2022 to 30 Jun 2024",
    image: "/uploads/leaders/generalmanojpande.jpg",
    bio: "Former Chief of the Army Staff",
    achievements: [
      "Param Vishisht Seva Medal",
      "Ati Vishisht Seva Medal",
      "Vishisht Seva Medal"
    ],
    details: `General Manoj Pande, PVSM, AVSM, VSM, ADC an alumnus of the National Defence Academy, was commissioned in December 1982 in the Corps of Engineers (The Bombay Sappers). The General Officer has commanded an Engineer Regiment during Operation PARAKRAM in the sensitive Pallanwala Sector of Jammu and Kashmir, along the Line of Control. The General Officer is a graduate of Staff College, Camberley (United Kingdom) and attended the Higher Command (HC) and National Defence College (NDC) Courses.`
  },
  {
    name: "General MM Naravane",
    rank: "PVSM, AVSM, SM, VSM, ADC",
    position: "Chief of the Army Staff",
    tenure: "31 Dec 2019 to 30 Apr 2022",
    image: "/uploads/leaders/generalmmnaravane.jpg",
    bio: "Former Chief of the Army Staff",
    achievements: [
      "Param Vishisht Seva Medal",
      "Ati Vishisht Seva Medal",
      "Sena Medal",
      "Vishisht Seva Medal"
    ],
    details: `General MM Naravane, PVSM, AVSM, SM, VSM, ADC did his schooling at Jnana Prabodhini Prashala, Pune. An alumnus of the National Defence Academy and the Indian Military Academy, he was commissioned in The Sikh Light Infantry Regiment in Jun 1980. He is an alumni of the Defence Services Staff College, Wellington and Higher Command Course, Mhow.`
  },
  {
    name: "General Deepak Kapoor",
    rank: "PVSM, AVSM, SM, VSM, ADC",
    position: "Chief of the Army Staff",
    tenure: "30 Sep 2007 to 30 Mar 2010",
    image: "/uploads/leaders/generaldeepakkapoor.jpg",
    bio: "Former Chief of the Army Staff",
    achievements: [
      "Param Vishisht Seva Medal",
      "Ati Vishisht Seva Medal",
      "Sena Medal",
      "Vishisht Seva Medal"
    ],
    details: `General Deepak Kapoor, PVSM, AVSM, SM, VSM, ADC was commissioned from the Indian Military Academy into the Indian Army and the Regiment of Artillery on 11 June 1967. He took over as the Chief of Army Staff on 30 September 2007 and as Chairman, Chiefs of Staff Committee on 31 August 2009.`
  },
  {
    name: "General Joginder Jaswant Singh",
    rank: "PVSM, AVSM, VSM, ADC",
    position: "Chief of the Army Staff",
    tenure: "01 Feb 2005 to 30 Sep 2007",
    image: "/uploads/leaders/generaljjsingh.jpg",
    bio: "Former Chief of the Army Staff",
    achievements: [
      "Param Vishisht Seva Medal",
      "Ati Vishisht Seva Medal",
      "Vishisht Seva Medal"
    ],
    details: `General (Retd) Joginder Jaswant Singh, PVSM, AVSM, VSM was born on 17 Sep 1945 in Bahawalpur (now in Pakistan). An alumnus of the National Defence Academy and was commissioned in The 9 MARATHA Light Infantry on 02 Aug 1964.`
  }
];

const awardsData = [
  {
    name: "Param Vir Chakra",
    type: "Gallantry",
    description: "The Param Vir Chakra (PVC) is India's highest military decoration, awarded for displaying distinguished acts of valour during wartime.",
    recipients: [
      {
        name: "Major Som Nath Sharma",
        rank: "Major",
        unit: "4th Battalion, Kumaon Regiment",
        date: new Date("1947-11-03"),
        citation: "For conspicuous bravery in the face of the enemy during the Battle of Badgam"
      }
    ],
    image: "/images/awards/param-vir-chakra.jpg"
  },
  {
    name: "Maha Vir Chakra",
    type: "Gallantry",
    description: "The Maha Vir Chakra (MVC) is the second highest military decoration in India, awarded for acts of conspicuous gallantry in the presence of the enemy.",
    recipients: [
      {
        name: "General Arunkumar Shridhar Vaidya",
        rank: "General",
        unit: "Armoured Corps",
        date: new Date("1965-09-01"),
        citation: "For conspicuous bravery in the Khemkaran Sector"
      }
    ],
    image: "/images/awards/maha-vir-chakra.jpg"
  }
];

const seedDatabase = async () => {
  try {
    // Connect to MongoDB using the connection module
    await connectDB();
    console.log('Connected to MongoDB');

    // Clear existing data
    await Leader.deleteMany({});
    await Award.deleteMany({});
    console.log('Cleared existing leaders and awards data');

    // Insert new data
    await Leader.insertMany(leadersData);
    await Award.insertMany(awardsData);
    console.log('Successfully seeded leaders and awards data');

    // Close the connection
    await mongoose.connection.close();
    console.log('Database connection closed');
  } catch (error) {
    console.error('Error seeding database:', error);
    process.exit(1);
  }
};

// Run the seeder
seedDatabase(); 