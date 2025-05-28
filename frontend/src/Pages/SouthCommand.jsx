import React, { useState } from "react";
import "./SouthCommand.css";

const data = [
  {
    id: 1,
    title: "History",
    content: [
      {
        type: "text",
        value: `The Great Indian Rebellion of 1857 resulted in the transfer of power from the East India Company to the British Crown The Great Indian Rebellion of 1857 not just resulted in the transfer of power from the East India Company to the British Crown but also a reorganisation of existing military formations. With effect from April 1, 1895 the Presidency Armies were abolished to form the Indian Army. Four separate commands, Bombay, Bengal, Punjab and Madras came into existence with the Bombay Command being headquartered in Pune since April 1, 1895, the day which marks the raising of the command in Pune.

        2.Around 1908, the Indian Army further reorganised with four Commands being replaced by two Armies. The Northern Army headquartered at Rawalpindi and the Southern Army at Poona. In the early 1920s, the four commands were reintroduced with Southern Command headquartered in Poona, Northern Command at Rawalpindi, Eastern Command at Nainital and a Western Independent District with the status of a Command headquartered at Quetta. During World War II, the Southern Command was briefly shifted to Bangalore primarily for the defence of ports, airfields and also to prepare for an offensive if required in response to the anticipated advances from Germany and Japan. At the time of independence, the Southern Command was and still remains the oldest field formation of the Indian Army by virtue of retaining the structure as at the earliest phase of reorganisation in 1895    The formation sign of the Southern Command is the Crux commonly known as the Southern Cross. The sign is based on the four brightest star of the Crux constellation which has been a standard of navigation for millennia. As per Hindu astronomy, the Crux is referred to as Trishanku, a character in Hindu mythology.

        4.Today, the Southern Command comprises of two Corps with their Headquarters, located at Jodhpur and Bhopal. Amongst the static formations are the Maharashtra, Gujarat and Goa Area, with its HQ at Mumbai and the Dakshin Bharat Area with its HQ at Chennai.  Southern Command encompasses eleven States and four Union Territories covering nearly 41 percent of the country’s landmass. Its formations, establishments and units are spread over 19 cantonments and 36 military stations.

        5.In the post-Independence era, Southern Command carved its own identity and redefined its roles and aspirations. It is the only Command to have been engaged in overseas operations, it has participated extensively with other armies in exercises while also performing yeoman service in disaster relief, both within its confines and beyond the nation’s borders. With its strong foundation of two centuries of growth, it has consolidated and built itself into a formidable field army - one of the finest in the world. Having proved itself repeatedly in battle, Southern Command stands poised in the new millennia, geared up to undertake even more diverse roles - both operational and humanitarian`
      },
      {
        type: "image",
        src: "/images/History0710222.jpg",
        alt: "Konark Corps insignia",
      },
    ]
  },

  {
    id: 2,
    title: "Army Commanders",
    description: "Photos of Army Commanders",
    images: [
      { id: 1, src: "/images/1ac.jpg" },
      { id: 2, src: "/images/ac2.jpg" },
      { id: 3, src: "/images/ac3.jpg" },
      { id: 4, src: "/images/ac4.jpg" },
      { id: 5, src: "/images/ac5.jpg" },
      { id: 6, src: "/images/ac6.jpg" },
      { id: 7, src: "/images/ac7.jpg" },
      { id: 8, src: "/images/ac8.jpg" },
      { id: 9, src: "/images/ac9.jpg" },
      { id: 10, src: "/images/ac10.jpg" },
      { id: 11, src: "/images/ac11.jpg" },
      { id: 12, src: "/images/ac12.jpg" },
      { id: 13, src: "/images/ac13.jpg" },
      { id: 14, src: "/images/ac14.jpg" },
      { id: 15, src: "/images/ac15.jpg" },
      { id: 16, src: "/images/ac16.jpg" },
      { id: 17, src: "/images/ac17.jpg" },
      { id: 18, src: "/images/ac18.jpg" },
      { id: 19, src: "/images/ac19.jpg" },
      { id: 20, src: "/images/ac20.jpg" },
      { id: 21, src: "/images/ac21.jpg" },
      { id: 22, src: "/images/ac22.jpg" },
      { id: 23, src: "/images/ac23.jpg" },
      { id: 24, src: "/images/ac24.jpg" },
      { id: 25, src: "/images/ac25.jpg" },
      { id: 26, src: "/images/ac26.jpg" },
      { id: 27, src: "/images/ac27.jpg" },
      { id: 28, src: "/images/ac28.jpg" },
      { id: 29, src: "/images/ac29.jpg" },
      { id: 30, src: "/images/ac30.jpg" },
      { id: 31, src: "/images/ac31.jpg" },
      { id: 32, src: "/images/ac32.jpg" },
      { id: 33, src: "/images/ac33.jpg" },
      { id: 34, src: "/images/ac34.jpg" },
      { id: 35, src: "/images/ac35.jpg" },
      { id: 36, src: "/images/ac36.jpg" },
      { id: 37, src: "/images/ac37.jpg" },
      { id: 38, src: "/images/ac38.jpg" },
    ],
  },
  {
    id: 3,
    title: "Organisation",
    content: [
      {
        type: "text",
        value: `
          With the experience gained during 1971 Indo – Pak War and increasing operational importance of the vast desert sector, ‘Konark Corps’ was raised on the auspicious day of Shivratri on 26 February 1987 under Lieutenant General A K Chatterjee, Param Vishisht Seva Medal, Vishisht Seva Medal during Operation Trident.

          Though the Corps was raised in 1987, the constituting formations have already earned laurels and accolades in battles of 1965 and 1971. The famous battle of Laungewala fought in 1971 embodies the grit and determination as well as the spirit of valour and sacrifice of Konark Corps. Post the Parliament attack, the Konark Corps distinguished itself in Operation Parakram and has been intimately involved in providing succour to citizens of India in times of natural calamities such as Earthquakes and Floods most noteworthy being Bhuj Earthquake, Floods in Rajasthan and Gujarat as well as the floods in Southern State of Kerala.

          Konark Corps safeguards the largest extent of Nation’s International Border encompassing the uniqueness of the Thar, the Rann, Creek and Coastal areas. In addition, it preserves the rich bio-diversity and cultural heritage in the states of Rajasthan and Gujarat.

          The harsh terrain accentuated by extreme temperatures and scarcity of water poses the biggest challenge. Consequentially, physical fitness, robust cognitive ability, survival training and optimum maintenance of equipment functionality are benchmark disciplines which exemplify Konark Corps. Besides the operational responsibility, Konark Corps is closely associated with absorption of latest generation equipment as well as adoption of new concepts by the Indian Army.

          Also referred to as ‘Desert Corps’ within the Indian Army, the Corps adopted “Konark” as its formation insignia after Konark Sun Temple of Puri, as a symbolic representation of the radiation of sun in eight cardinal directions, thereby establishing a spiritual link with the Sun City – Jodhpur.
        `,
      },
      {
        type: "image",
        src: "/images/Konark_Corps101022.jpg",
        alt: "Konark Corps insignia",
      },
      {
        type: "description",
        value: `SUDERSHAN CHAKRA`,
      },
      {
        type: "text",
        value: `
          1.Corps was first raised on 12 Aug 1917 for operations in the Middle East against the Turko-German coalition during World War I. The Corps was demobilized in 1918 at the end of the War. The formation sign of the Corps then had a “Four-Leaved Shamrock” symbolizing luck, with the Roman Figure VII repeated thrice for 21.
 
          2.The Corps was raised once again in Feb 1942 for operations in the Middle East. Corps was again de-mobilized at the end of the Second World War. For the duration of the second phase, the Corps bore as its badge the truncated Heraldic of a Horse, symbolizing swiftness.

          3.A HQ was organized at Madras in July 1987 based on the nucleus provided under elements of HQ Southern Command. This HQ under Lt Gen AS Kalkat, SYSM, PVSM, VSM directed operations in the Sri Lanka. Since the operations were inter-Services in nature, the emblem of the three Services along with the tricolour constituted the formation flag.
        `,
      },
      // {
      //   type: "image",
      //   src: "/images/SCcorps.jpg",
      //   alt: "Konark Corps insignia",
      // },
      {
        type: "description",
        value: `DAKSHIN BHARAT AREA`,
      },
      {
        type: "text",
        value: `
          1.RAISING OF MADRAS AREA.    
            On Independence, Madras Area was raised on 15 Aug 1947. Maj Gen SM Shrinagesh (later COAS) was the first Indian officer to command the Area. The garrison was subsequently re-designated as Madras Sub Area. In 1974, it was re-designated as ATNK & K Area with three sub areas under its command – Tamil Nadu & Kerala, Karnataka and Andhra Pradesh.
 
          2.RE-DESIGNATION OF ATNKK & G AREA.   
            The ATNK & K Area was re-designated as ATNKK & G Area on 12 Oct 1988 consequent to placement of Union Territory of Goa under its jurisdiction with two sub areas namely Andhra Pradesh Sub Area and Karnataka & Kerala Sub Area. Effectively, Tamil Nadu Sub Area that existed from 1974 was disbanded in 1988. On 09 Feb 2004, the State of Goa was re-orbatted to MG & G Area and the Area HQ reverted to its previous designation of ATNK & K Area.  
 
          3.PRESENT DESIGNATION AS DAKSHIN BHARAT AREA. 
            Post bifurcation of Andhra Pradesh into the states of Andhra Pradesh and Telangana, the ATNK & K Area has now been re-designated as Dakshin Bharat Area (DB Area) since 13 Jan 2015. It comprises the states of Andhra Pradesh, Telangana, Tamil Nadu, Karnataka and Kerala and the Union Territories of Puducherry and Lakshadweep & Minicoy Islands. 
        `,
      },

      {
        type: "image",
        src: "/images/HQDBArea1010221.jpg",
        alt: "SC Corps insignia",
      },
      {
        type: "description",
        value: ``,
      },

      {
        type: "text",
        value: `
          In 1675, British Governor Gerald Aungier took over the possession of Colaba and Old Woman’s Land (Little Colaba) from Portuguese on behalf of the East India Company. Thereafter, Colaba was solely reserved for military purpose and thus started its history as a Military Station. 
 
          2.During 1770, the isle (island) was used as a health resort for sick troops. It was considered a very healthy place with sea all around and the buildings created were called Sick Bungalows, now INHS Ashvini. 
 
          3.Military History of Area Headquarter dates back to the 18th Century when a Coastal Artillery Battery was located at Mumbai. In order to administer the garrison and troops location in the erstwhile Bombay State, a formation HQ was raised at Colaba on 25 Jan 1889. The formation was named the ‘Bombay District’ with Brig Gen WT Buden, DSO, as the first commander.  
 
          4.During the year 1900, certain operation responsibilities were assigned to the HQ and it was re-named the ‘Bombay Brigade’ on 10 Oct 1900. Comd of the formation was also upgraded and Maj Gen AG Greagh, CB, was designated as the first GOC.  
 
          5.Post-Independence, Maj Gen DS Brar, OBE took over as the first GOC of the formation. Consequent to the division of Bombay State into Maharashtra and Gujarat States, the name of the formation HQ was changed to HQ Maharashtra and Gujarat (M&G) Area on 01 May 1960.  Goa State was placed under the jurisdiction of M&G Area wef 09 Feb 2004 and thereafter HQ Maharashtra & Gujarat Area was re-designated as HQ Maharashtra, Gujarat & Goa Area. ..
        `,
      },
      {
        type: "image",
        src: "/images/HQMGGArea1010221.jpg",
        alt: "SC Corps insignia",
      },
    ],
  },
  {
    id: 4,
    title: "Operations",
    content: [
      {
        type: "description",
        value: "Junagadh 1947"
      },
      {
        type: "text",
        value: `
          Junagadh was a princely state in Gujarat. The Nawab of Junagadh, Mahabhat Khanji, acceded to Pakistan, leading to unsettled conditions and trade cessation with India. The Nawab fled to Karachi, and a brigade-sized force was dispatched to Junagadh. On 16 November 1947, 2 SIKH LI moved into Junagadh without resistance to secure the area.
        `
      },
      {
        type: "image",
        src: "/images/Op0710221.jpg",
        alt: "Junagadh Operation"
      },
      {
        type: "description",
        value: "Hyderabad 1948"
      },
      {
        type: "text",
        value: `
          The Nizam of Hyderabad, Osman Ali Khan, refused to sign the Instrument of Accession, backed by armed militia called Razakars. On 17 September 1948, the Indian Army entered Bidar. By 24 November 1948, the Nizam signed the Instrument of Accession, marking the first large-scale offensive action by Southern Command.
        `
      },
      {
        type: "image",
        src: "/images/Op0710222.jpg",
        alt: "Hyderabad Operation"
      },
      {
        type: "description",
        value: "Goa 1961 (Operation VIJAY)"
      },
      {
        type: "text",
        value: `
          Portugal refused to transfer its Indian Settlements even 14 years after independence. Operation VIJAY was launched in 1961 to liberate Goa. On 18 December, the advance began, and by 19 December, Goa, Daman, and Diu were secured, with the Portuguese surrendering without much resistance.
        `
      },
      {
        type: "image",
        src: "/images/Op0710223.jpg",
        alt: "Goa Operation"
      },
      {
        type: "description",
        value: "Kutch 1965"
      },
      {
        type: "text",
        value: `
          The Rann of Kutch dispute arose over boundary delineation. Pakistani forces attacked Sardar Post on 9 April 1965 but were repulsed. Kilo Force reorganized the defense and repelled further attacks until a ceasefire on 1 May 1965. An International Tribunal restored the January 1965 positions.
        `
      },
      {
        type: "image",
        src: "/images/Op0710224.jpg",
        alt: "Kutch Operation"
      },
      {
        type: "description",
        value: "Rajasthan 1965"
      },
      {
        type: "text",
        value: `
          During the 1965 war, Southern Command managed operations in the Barmer Sector, Rajasthan. Despite initial gains, positions couldn't be held. The experience in desert warfare was invaluable for future conflicts.
        `
      },
      {
        type: "image",
        src: "/images/Op0710225.jpg",
        alt: "Rajasthan 1965 Operation"
      },
      {
        type: "description",
        value: "Rajasthan 1971"
      },
      {
        type: "text",
        value: `
          Known for the Battle of Laungewala, Indian forces repelled Pakistan's attacks and captured significant territory, including Islamgarh and Bhai Khanewala Khu. Approximately 9,000 square kilometers were captured in the Barmer Sector during the war.
        `
      },
      {
        type: "image",
        src: "/images/Op0710226.jpg",
        alt: "Rajasthan 1971 Operation"
      },
      {
        type: "description",
        value: "Sri Lanka 1987-89: Operation PAWAN"
      },
      {
        type: "text",
        value: `
          The Indian Peace Keeping Force (IPKF) aimed to implement the Accord in Sri Lanka. Offensive operations against the LTTE commenced on 11 October 1987. Despite fierce resistance, Jaffna Peninsula was under control by 30 November 1987. The IPKF facilitated elections and was de-inducted by January 1990.
        `
      },
      {
        type: "image",
        src: "/images/Op0710228.jpg",
        alt: "Sri Lanka Operation"
      },
      {
        type: "description",
        value: "Maldives 1988"
      },
      {
        type: "text",
        value: `
          On 3 November 1988, President Gayoom of Maldives sought India's help after a coup attempt. Paratroopers secured Hulule airfield and Male, ensuring Gayoom's safety within 24 hours of receiving the call.
        `
      },
      {
        type: "image",
        src: "/images/Op0710229.jpg",
        alt: "Maldives Operation"
      },
      {
        type: "description",
        value: "Operation VIJAY – 1999"
      },
      {
        type: "text",
        value: `
          In response to intrusions in the Kargil Sector, Southern Command mobilized formations and logistic bases by June 1999, ensuring Pakistan couldn't reinforce its positions in Kashmir.
        `
      },
      {
        type: "image",
        src: "/images/Op07102210.jpg",
        alt: "Kargil Operation"
      },
      {
        type: "description",
        value: "Operation PARAKRAM – 2002"
      },
      {
        type: "text",
        value: `
          After the Indian Parliament attack in December 2001, the Army mobilized under Operation PARAKRAM. Southern Command rapidly deployed formations to operational locations and established logistic bases.
        `
      },
      {
        type: "image",
        src: "/images/Op07102211.jpg",
        alt: "Operation PARAKRAM"
      }
    ]
  }
  ,
  {
    "id": 6,
    "title": "Aid to Civil Authority & Disaster Relief Operations",
    "content": [
      {
        "type": "description",
        "value": "Historical Role"
      },
      {
        "type": "text",
        "value": "The Command has been actively involved in aid to civil authority during major calamities and natural disasters in its area of responsibility. This includes providing assistance & relief during the Earthquake in Koyna near Satara (Maharashtra) in 1960, Khadakwasla dam burst in 1961, Earthquakes at Latur in 1993 and Bhuj in 2001, the Tsunami of 2004, and various flood rescue and relief operations. Some of the recent natural disasters where the Southern Command played a prominent role include the Chennai floods of 2015, Gujarat & Rajasthan floods in 2017, and floods in Kerala in 2018."
      },
      // {
      //   "type": "image",
      //   "src": "/mages/AidCivAuth0710221.jpg",
      //   "alt": "Historical Role in Civil Authority Aid"
      // },
      {
        "type": "description",
        "value": "Operation Varsha-21"
      },
      {
        "type": "text",
        "value": "With the unprecedented rains and resultant overflowing of various rivers, a number of areas in Ratnagiri, Kohlapur, Sangli, and other Districts of Maharashtra were inundated. Upon request of the civil administration, Southern Command mobilized flood relief and rescue teams to assist the locals in flood-affected areas. 15 columns were involved in rescuing local villagers stranded in submerged areas and in restoring normalcy in these inundated areas. Over 100 persons were rescued from the affected areas to safe locations."
      },
      // {
      //   "type": "image",
      //   "src": "/images/AidCivAuth0710223.jpg",
      //   "alt": "Operation Varsha-21 Flood Relief"
      // },
      {
        "type": "description",
        "value": "Operation Palakkad"
      },
      {
        "type": "text",
        "value": "In a daring mission, teams from the MADRAS Regimental Centre and Para Regimental Training Centre under the aegis of Southern Command undertook a spectacular rescue operation to extricate a stranded trekker, Mr. Babu, stuck in a steep gorge in the Malampuzha mountains, Kerala. When rescue efforts by locals and the administration failed, the Indian Army was requisitioned by the State Government. Army specialist teams reached the location and the rescue operation commenced at first light on 09 February 2022. The trekker was rescued in a safe and healthy state by around 10:15 AM on the same day."
      },
      {
        "type": "image",
        "src": "/images/AidCivAuth0710225.jpg",
        "alt": "Operation Palakkad Rescue Mission"
      },
      {
        "type": "description",
        "value": "Operation Visphotak Mukt Bandargah"
      },
      {
        "type": "text",
        "value": "Operation 'Visphotak Mukt Bandargah' involved the disposal of 1600 Metric Tonnes of unexploded ordnance that had possibly been collected inadvertently by some factories and steel scrap yards over the past few years in multiple locations, including Mumbai, Gujarat, Kanpur, Jaipur, and Jodhpur. The Indian Army launched this operation on the directions of the Ministry of Defence to ensure a safe environment for all citizens settled in and around the identified locations."
      },
      {
        "type": "image",
        "src": "/images/AidCivAuth0710227.jpg",
        "alt": "Operation Visphotak Mukt Bandargah"
      }
    ]
  },
  {
    "id": 7,
    "title": "Training & Welfare Activities",
    "content": [
      {
        "type": "description",
        "value": "Exercise Dakshin Shakti"
      },
      {
        "type": "text",
        "value": "The Pune-based Southern Command launched a military exercise in Rajasthan and Gujarat, aptly named Dakshin Shakti. This exercise with troops aims to validate the battle readiness and operational effectiveness of Southern Army troops in an integrated and futuristic battlefield scenario."
      },
      {
        "type": "image",
        "src": "/images/CommdAct0710221.jpg",
        "alt": "Exercise Dakshin Shakti"
      },
      {
        "type": "description",
        "value": "Exercise Sagar Shakti"
      },
      {
        "type": "text",
        "value": "A Multi-Agency Exercise, 'Sagar Shakti', involving force components from Indian Army, Indian Navy, Indian Airforce, Indian Coast Guard, Border Security Force and Gujarat State Security apparatus including Gujarat State Police, Marine Police, and Fisheries Department was conducted in the Creek Sector of Kutch Peninsula."
      },
      {
        "type": "image",
        "src": "/images/CommdAct0710223.jpg",
        "alt": "Exercise Sagar Shakti"
      },
      {
        "type": "description",
        "value": "Exercise PANEX 21"
      },
      {
        "type": "text",
        "value": "PANEX-21, a trans-national, multi-agency exercise was organised at Pune from 20-22 Dec 2021 with a focused aim to foster jointness and develop capabilities in Disaster Management aspects for the BIMSTEC nations. The Exercise was witnessed by Hon’ble Raksha Mantri Shri Rajnath Singh and Gen Manoj Mukund Naravane, COAS."
      },
      {
        "type": "image",
        "src": "/images/CommdAct0710225.jpg",
        "alt": "Exercise PANEX 21"
      },
      {
        "type": "description",
        "value": "Exercise Dharma Guardian"
      },
      {
        "type": "text",
        "value": "Indo-Japan Joint Training Exercise DHARMA GUARDIAN-2022 was conducted from 27 Feb 22 to 10 Mar 22 at Foreign Training Node, Belagavi. The contingent comprising of 40 personnel each from the Indian Army and Japanese Ground Self Defence Forces (JGSDF) participated in the Exercise."
      },
      {
        "type": "image",
        "src": "/images/CommdAct0710227.jpg",
        "alt": "Exercise Dharma Guardian"
      },
      {
        "type": "description",
        "value": "India-Seychelles Joint Military Exercise LAMITIYE - 2022"
      },
      {
        "type": "text",
        "value": "The Ninth India-Seychelles Joint Training Exercise LAMITIYE-2022, was conducted from 22 March 22 to 31 March 22 at Seychelles Defence Academy, Seychelles and culminated successfully with a 48-hour Validation Exercise. The contingent comprising 45 personnel each from Indian Army and Seychelles Defence Forces (SDF) participated in the Exercise."
      },
      {
        "type": "image",
        "src": "/images/CommdAct0710229.jpg",
        "alt": "India-Seychelles Joint Military Exercise"
      },
      {
        "type": "description",
        "value": "Welfare Activities"
      },
      {
        "type": "description",
        "value": "Oxygen Generation Plant at AICTS"
      },
      {
        "type": "text",
        "value": "A high-capacity Oxygen Generation Plant, capable of producing 1600 liters per minute, was installed at the Army Institute of Cardio Thoracic Sciences, Pune. The plant is established as a CSR initiative by Tech Mahindra."
      },
      {
        "type": "image",
        "src": "/images/CommdAct07102211.jpg",
        "alt": "Oxygen Generation Plant at AICTS"
      },
      {
        "type": "description",
        "value": "Palliative Care Centre"
      },
      {
        "type": "text",
        "value": "A Palliative Care Centre for providing emotional support and succor to terminally ill patients with cancer and neurodegenerative disorders was inaugurated at Command Hospital, Pune by Mrs. Anita Nain, Regional AWWA."
      },
      {
        "type": "image",
        "src": "/images/CommdAct07102214.jpg",
        "alt": "Palliative Care Centre"
      },
      {
        "type": "description",
        "value": "Army Law College Boys Hostel"
      },
      {
        "type": "text",
        "value": "Lt Gen JS Nain, Army Cdr Southern Command, and Mrs. Anita Nain, Regional President AWWA, inaugurated the Boys Hostel at Army Law College, a state-of-the-art facility created to ameliorate the residential problems of wards of veterans and serving Soldiers."
      },
      {
        "type": "image",
        "src": "/images/CommdAct07102215.jpg",
        "alt": "Army Law College Boys Hostel"
      },
    ]
  },

  {
    "id": 8,
    "title": "Adventure and Sports",
    "content": [
      {
        "type": "description",
        "value": "Narveer Tanhaji Run"
      },
      {
        "type": "text",
        "value": "Presiding over the ceremony, Lt Gen JS Nain, GOC-in-C, Southern Command complimented participants for completing the challenging Narveer Tanhaji Run successfully. He exhorted all to draw inspiration from the unmatched valour of Narveer Tanhaji and conquer obstacles with courage."
      },
      {
        "type": "image",
        "src": "/images/AdvAct0710222.jpg",
        "alt": "Narveer Tanhaji Run"
      },
      {
        "type": "description",
        "value": "Trekking Expedition"
      },
      {
        "type": "text",
        "value": "White Tiger Division organised a trekking expedition for children to Orchha Reserve Forest, inculcating the spirit of josh, togetherness, and camaraderie."
      },
      // {
      //   "type": "image",
      //   "src": "/images/AdvAct0710223.jpg",
      //   "alt": "Trekking Expedition"
      // },
      {
        "type": "description",
        "value": "Fun Run"
      },
      {
        "type": "text",
        "value": "To commemorate 75 glorious years of independence and promote health awareness, HQ Southern Command organised a ‘Fun Run’ for ladies of Army families at Pune. The run witnessed enthusiastic participation in all age groups."
      },
      {
        "type": "image",
        "src": "/images/AdvAct0710226.jpg",
        "alt": "Fun Run"
      }
    ]
  },
  {
    "id": 9,
    "title": "Southern Command, War Memorial, Pune",
    "content": [
      {
        "type": "description",
        "value": "Southern Command, War Memorial, Pune"
      },
      {
        "type": "text",
        "value": "The National War Memorial is one of the most prominent amongst the War Memorials in Pune. Constructed at Morwada junction, within the Cantonment by the People of Pune, it was dedicated to the Nation by the Governor of Maharashtra, Shri P C Alexander, on 16 December 1998. The National War Memorial presently houses a museum showcasing the history of the Indian Army and acts of valour of various Gallant warriors of the nation. The National War Memorial also conducts various activities, which include weekly wreath laying ceremony, honouring of Veer Naris and motivational talks by gallantry award winners. The Light and Sound display at the National War Memorial provides a unique experience and rekindles the patriotic spirit."
      },
      {
        "type": "image",
        "src": "/images/WarMemo0710222.jpg",
        "alt": "Southern Command, War Memorial, Pune"
      }
    ]
  },
  {
    "id": 10,
    "title": "ESM Corner",
    "content": [
      {
        "type": "description",
        "value": "ESM Corner"
      },
      {
        "type": "text",
        "value": "A Veterans’ Node has been created at Headquarters Southern Command. The aim of this node is to provide a single point access to the veterans of Pune Station for addressing their concerns. It’s a state of the art complex with tailor made workstations to facilitate easy access and to expeditiously provide information on various benefits and entitlements."
      },
      {
        "type": "image",
        "src": "/images/EsmCor0710221.jpg",
        "alt": "ESM Corner"
      }
    ]
  },


  {
    "id": 11,
    "title": "AWWA",
    "content": [
      {
        "type": "description",
        "value": "International Women’s Day Celebration"
      },
      {
        "type": "text",
        "value": "Southern Command celebrated International Women’s Day on 05 and 06 March 2022 at SGS mall, Pune. It was organised to support women artists and entrepreneurs in an endeavour to celebrate women’s achievements and equality."
      },
      {
        "type": "image",
        "src": "/images/AWWA Act0710222.jpg",
        "alt": "International Women’s Day Celebration"
      },
      {
        "type": "description",
        "value": "Bal Vikas Samaroh Initiative"
      },
      {
        "type": "text",
        "value": "Mrs Anita Nain, Regional President Southern Command AWWA launched the Bal Vikas Samaroh initiative for baby boys. This post office recurring deposit scheme is akin to Sukanya Samriddhi Yojana."
      },
      {
        "type": "image",
        "src": "/images/AWWA Act0710223.jpg",
        "alt": "Bal Vikas Samaroh Initiative"
      },
      {
        "type": "description",
        "value": "Visit to Asha School Gwalior"
      },
      {
        "type": "text",
        "value": "Mrs Anita Nain, Regional President AWWA visited Asha School Gwalior, wherein she appreciated the efforts of Shahbaaz Division in ensuring the overall development of differently abled children."
      },
      {
        "type": "image",
        "src": "/images/AWWA Act0710225.jpg",
        "alt": "Visit to Asha School Gwalior"
      }
    ]
  },
  {
    "id": 12,
    "title": "Army Guest Houses/ Holiday Homes",
    "content": [
      {
        "type": "text",
        "value": "1. SHIRDI\n\n2. AURANGABAD\n\n3. TIRUPATI\n\n4. OOTY\n\n5. MOUNT ABU\n\n6. GOA"
      }
    ]
  },
];


const Section = ({ section }) => {
  if (!section) return <div>Section not found</div>;

  return (
    <div className="section">
      <h2>{section.title}</h2>
      {section.content &&
        section.content.map((item, index) => {
          if (item.type === "text") return <p key={index}>{item.value}</p>;
          if (item.type === "image") return <img key={index} src={item.src} alt={item.alt} className="content-image" />;
          return null;
        })}
      {section.images && (
        <div className="image-grid army-commanders">
          {section.images.map((image) => (
            <img key={image.id} src={image.src} alt={`Image ${image.id}`} className="image" />
          ))}
        </div>
      )}
    </div>
  );
};

const South = () => {
  const [selectedSection, setSelectedSection] = useState(data[0] || null);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  return (
    <div className="south-container">
      <div className="dropdown-container">
        <div className="dropdown">
          <button className="dropbtn" onClick={() => setDropdownOpen(!dropdownOpen)}>
            Select Section
          </button>
          {dropdownOpen && (
            <div className="dropdown-content">
              {data.map((item) => (
                <button key={item.id} onClick={() => { setSelectedSection(item); setDropdownOpen(false); }}>
                  {item.title}
                </button>
              ))}
            </div>
          )}
        </div>
      </div>
      {selectedSection && <Section section={selectedSection} />}
    </div>
  );
};

export default South;
