import React, { useState, useEffect, useRef } from "react";
import "./History.css"; // Make sure this CSS file contains the scoped styles
import { useNavigate } from 'react-router-dom';

const History = () => {
  const timelineData = [
    {
      year: "1895",
      title: "Formation of the Indian Army",
      image: "formation.jpg",
      details: [
        "The Indian Army traces its origins to the colonial forces of the British East India Company in the 18th century, evolving into the British Indian Army after 1858. It was officially formed on April 1, 1895, and played a significant role in both World Wars.",
        "After India's independence in 1947, the Army was divided between India and Pakistan, with General Sir Robert Lockhart as the first post-independence Commander-in-Chief. In 1949, General K.M. Cariappa became the first Indian Commander-in-Chief. Since then, the Indian Army has transformed into a modern, professional force, undertaking key operations such as the 1947-48 Kashmir conflict and adapting to meet conventional and asymmetric challenges, including counter-insurgency operations and disaster relief efforts.",
        "The Indian Army is now one of the largest and most powerful armies in the world, with a strength exceeding 1.2 million active personnel. It continues to play a vital role in safeguarding India's sovereignty, contributing to peacekeeping missions globally, and embracing modern technologies to enhance its capabilities."
      ],
    },
    {
      year: "1914",
      title: "World Wars",
      image: "sino_indian_war.jpg",
      details: [
        "During World War I (1914-1918), over 1.3 million Indian soldiers served under British command, participating in key battles across Europe, the Middle East, and Africa. They played a significant role in campaigns like Gallipoli, Mesopotamia, and the Western Front, enduring harsh conditions and earning more than 13,000 gallantry awards, including 11 Victoria Crosses. Despite their sacrifices, many soldiers faced racial discrimination and limited recognition.",  
        "In World War II (1939-1945), the Indian Army grew to over 2.5 million personnel, making it the largest volunteer force of the time. Indian troops were pivotal in campaigns across North Africa, Italy, and Southeast Asia, including the critical Burma campaign against Japan. They also contributed to the liberation of Axis-occupied regions and earned numerous honors for their bravery. The war, however, sparked rising nationalist sentiments, leading to events like the Indian National Army (INA) movement under Subhas Chandra Bose, which sought independence from British rule. Both wars significantly shaped India's military legacy and its path to independence."
      ],
    },
    {
      year: "1947",
      title: "Indian Independence",
      image: "bangladesh_liberation.jpg",
      details: [
        "The Indian Army played a dual role during India’s independence movement, initially serving as an instrument of British colonial control but later contributing to the growing nationalist sentiment. During World Wars I and II, over 2.5 million Indian soldiers fought under British command, showcasing bravery in global campaigns. However, the discriminatory treatment and exploitation they endured during these wars highlighted colonial injustices, sparking discontent among soldiers and fueling nationalist movements. The experiences of Indian troops exposed them to democratic ideals, further intensifying calls for self-rule.",
        "A pivotal moment came with the formation of the Indian National Army (INA) by Subhas Chandra Bose during World War II. The INA’s efforts to fight for India’s liberation inspired widespread nationalist fervor, while events like the Naval Mutiny of 1946 demonstrated shifting allegiances within the armed forces. These developments, along with growing political pressure from leaders like Gandhi and Nehru, weakened British control. By the time of independence in 1947, the Indian Army had transitioned from being a colonial force to a key symbol of national pride and unity."
      ],
    },
    {
      year: "1947",
      title: "First Kashmir War",
      image: "kargil_war.jpg",
      details: [
        "The First Kashmir War (1947-1948) was the first armed conflict between India and Pakistan after their independence and partition in 1947. The war began when tribal militias from Pakistan, backed by the Pakistani government, invaded the princely state of Jammu and Kashmir in October 1947. The invasion aimed to force the state's ruler, Maharaja Hari Singh, to accede to Pakistan. Faced with the invasion, the Maharaja sought India's assistance and signed the Instrument of Accession, officially making Jammu and Kashmir a part of India.",
        "India responded by airlifting troops to Srinagar, the capital of Jammu and Kashmir, and launched a counteroffensive to repel the invaders. Fierce battles ensued, with the Indian Army recapturing key territories such as Baramulla and Uri. The conflict escalated into a full-scale war, with both nations deploying their military forces. After months of fighting, a United Nations-brokered ceasefire came into effect on January 1, 1949. The ceasefire left the state divided, with Pakistan controlling what it termed Azad Kashmir and the northern territories, while the remaining part, including the Kashmir Valley, Jammu, and Ladakh, stayed with India. The war laid the foundation for the protracted Kashmir conflict and continues to shape India-Pakistan relations to this day."
      ],
    },
    {
      year: "1948",
      title: "Annexation of Hyderabad",
      image: "galwan_clash.jpg",
      details: [
        "After the partition of India, Hyderabad State, a princely state under the rule of the Nizam of Hyderabad, chose to remain independent. The ensuing stand-off between the Government of India and the Nizam ended on 12 September 1948, when India's then Deputy Prime Minister Sardar Vallabhbhai Patel ordered Indian troops to secure Hyderabad State. During five days of fighting, the Indian Army, backed by an Indian Air Force squadron of Hawker Tempest aircraft, routed the Hyderabad State forces. Five Indian Army infantry battalions and one armoured squadron were engaged in the operation. The following day, Hyderabad was proclaimed part of India. Major General Joyanto Nath Chaudhuri, who led the operation, and accepted the surrender of the Nizam's forces on 18 September 1948, was appointed the military governor of Hyderabad, to restore law and order, and served until 1949."
      ],
    },
    {
      year: "1961",
      title: "Annexation of Goa",
      image: "modernization.jpg",
      details: [
        "Even though the British and French vacated all their colonial possessions in the Indian subcontinent, Portugal refused to relinquish control of its colonies of Goa, Daman, and Diu. After repeated attempts by India to negotiate were spurned by Portuguese prime minister and dictator, António de Oliveira Salazar, on 12 December 1961 India launched Operation Vijay to capture the Portuguese colonies, which was accomplished by small contingents of Indian troops. After a brief conflict that lasted twenty-six hours—during which 31 Portuguese soldiers were killed, the Portuguese Navy frigate NRP Afonso de Albuquerque was destroyed, and over 3,000 Portuguese were captured—Portuguese General Manuel António Vassalo e Silva surrendered to Major General Kunhiraman Palat Kandoth of the Indian Army. Goa, Daman, and Diu became a part of the Republic of India."
      ],
    },
    {
      year: "1962",
      title: "Sino-Indian War",
      image: "sinoindian.jpg",
      details: [
        "The Sino-Indian War of 1962 was a brief but intense conflict between China and India, primarily centered around a territorial dispute in the Himalayan region. The war was sparked by unresolved border issues between the two countries, particularly the Aksai Chin region in the north and the North East Frontier Agency (NEFA), which is now known as Arunachal Pradesh, in the east. The conflict escalated after a series of skirmishes along the border and a Chinese offensive in October 1962. China's strategic interest in the region was partly due to Aksai Chin, which was crucial for its connectivity with Tibet. India, on the other hand, claimed the entire Aksai Chin region and the territory of Arunachal Pradesh.",
        "The war resulted in a decisive victory for China, with Indian forces suffering heavy casualties and a significant loss of territory. China advanced deep into NEFA and Aksai Chin, although it declared a unilateral ceasefire after about a month of fighting, and withdrew from some of the captured territories. The war exposed India's military weaknesses, particularly in terms of preparedness, equipment, and infrastructure in the border areas. The conflict had long-lasting political and military consequences for both nations, leading to a significant shift in India's defense policies, including a focus on improving its military capabilities and border infrastructure."
      ],
    },
    {
      year: "1965",
      title: "Indo-Pakistani War",
      image: "indopak.jpg",
      details: [
        "The Indian Army played a pivotal role in the Indo-Pakistani War of 1965, swiftly responding to Pakistan's Operation Gibraltar, which aimed to infiltrate Kashmir and incite an insurgency. Indian forces, despite facing initial challenges, effectively defended key positions along the Line of Control (LoC), especially in areas like Akhnoor, where Pakistani forces sought to gain ground. Indian infantry and artillery were instrumental in holding the line, and the Indian Army's armored divisions, notably the 1st and 2nd Armored Divisions, launched successful counteroffensives into Pakistani territory, particularly around the Sialkot region. These advances helped India regain lost territory and inflicted significant damage on Pakistani forces.",
        "The Indian Army’s efforts were further supported by the Indian Air Force, which provided crucial air strikes, aiding in the defense and offense operations. Though the war ended in a stalemate with a UN-brokered ceasefire and the Tashkent Agreement, it highlighted the Indian Army’s strategic capabilities and its ability to maintain a defensive stance while launching effective counterattacks. The conflict also exposed areas for improvement in terms of logistics and coordination, but the Army's performance in 1965 bolstered India's military prestige and laid the groundwork for its enhanced readiness in future conflicts, especially during the 1971 war."
      ],
    },
    {
      year: "1971",
      title: "Bangladesh Liberation War",
      image: "bangladeshliberation.jpg",
      details: [
        "The Bangladesh Liberation War of 1971 was a critical struggle for independence by East Pakistan, driven by long-standing political and economic discrimination by the West Pakistani government. In the 1970 general elections, Sheikh Mujibur Rahman’s Awami League won a majority, but the ruling authorities in West Pakistan, led by General Yahya Khan, refused to transfer power. Tensions escalated, and on March 25, 1971, the Pakistani military launched Operation Searchlight, a violent crackdown on East Pakistani civilians in Dhaka and other cities. This led to widespread atrocities, including mass killings, rapes, and the displacement of millions, while the Bengali population increasingly sought autonomy and independence.",
        "The war for independence, marked by significant resistance from Bengali freedom fighters, became a full-scale conflict involving India in December 1971. As the violence escalated, millions of refugees fled to India, leading to the Indo-Pakistani War of 1971. India provided military support to the Bangladeshi independence movement, culminating in the victory of the Bangladesh Liberation Army. On December 16, 1971, Pakistani forces surrendered to Indian and Bangladeshi troops, leading to the creation of Bangladesh as an independent nation. The war resulted in tremendous loss of life and had profound implications for the region's geopolitical landscape."
      ],
    },
    {
      year: "1999",
      title: "Kargil War",
      image: "kargil",
      details: [
        "The Kargil War of 1999 was a brief but intense conflict between India and Pakistan, triggered by Pakistan's infiltration into the Kargil district of Jammu and Kashmir. Pakistani forces, including military personnel and militants, seized strategic high-altitude posts along the Line of Control (LoC), threatening India's control over key supply routes to Ladakh. In response, India launched Operation Vijay, a large-scale military operation to reclaim the territory. The conflict was marked by fierce combat in the harsh mountainous terrain, where Indian troops faced challenging conditions, including extreme altitudes and difficult weather. Despite these obstacles, India employed its military strength, including specialized forces and air support, to push back the intruders.",
        "The war ended in July 1999 with Pakistan's withdrawal after suffering heavy casualties, and India successfully secured the Kargil heights. The Kargil War was a significant chapter in the history of the Indian Army, showcasing the bravery and sacrifices of its soldiers. The conflict also had profound strategic and political implications, highlighting the risks of nuclear escalation between India and Pakistan. In its aftermath, India strengthened its defense posture along the LoC, and the war reshaped military strategies in the region."
      ],
    },
    {
      year: "2016",
      title: "Surgical Strikes on Kashmir",
      image: "kashmir.jpg",
      details: [
        "The 2016 Surgical Strikes on Kashmir were a significant military operation carried out by the Indian Army in response to a terrorist attack on an Indian Army base in Uri, Jammu and Kashmir, on September 18, 2016, which killed 19 Indian soldiers. The attack was attributed to militants from Pakistan-based terror groups, escalating tensions between India and Pakistan. In retaliation, on September 29, the Indian Army launched a covert operation across the Line of Control (LoC) targeting terrorist launch pads in Pakistan-occupied Kashmir (PoK). The operation aimed to destroy terrorist infrastructure and neutralize militants before they could infiltrate Indian territory.",
        "The surgical strikes were a highly successful and precise military operation, with the Indian Army claiming that they inflicted significant casualties on the enemy. The operation was kept highly secretive and executed with minimal loss to Indian forces. It marked a significant shift in India's approach to countering terrorism, as the country chose to strike directly at the source of militant infiltration. The strikes were widely praised within India as a show of strength and a message to Pakistan, though Pakistan denied the scale of the operation, claiming there was no evidence of such strikes. The 2016 Surgical Strikes have since been remembered as a key moment in India's military strategy and have had a lasting impact on India-Pakistan relations."
      ],
    },
    {
      year: "2019",
      title: "India–Pakistan border skirmishes",
      image: "indiapakistan.jpg",
      details: [
        "Pakistan, primarily following the February 14, 2019, suicide bombing of a convoy of Indian paramilitary soldiers in Pulwama, Jammu and Kashmir, which killed 40 CRPF personnel. The attack was claimed by the Pakistan-based militant group Jaish-e-Mohammed, further escalating tensions between the two nuclear-armed neighbors. In retaliation, on February 26, 2019, India conducted an airstrike on a terrorist training camp in Balakot, Pakistan, marking the first time in decades that Indian aircraft crossed into Pakistani territory for a combat operation. The airstrike was presented as a surgical strike targeting the militants involved in the Pulwama attack, though Pakistan denied that there were any significant casualties.",
        "The airstrike led to a military standoff between India and Pakistan, with both countries engaging in heavy artillery exchanges and air combat. On February 27, Pakistan retaliated by attempting to target Indian military installations, resulting in a dogfight where an Indian Air Force pilot, Wing Commander Abhinandan Varthaman, was captured. He was later released by Pakistan as a peace gesture, helping to de-escalate the situation. Despite this, the skirmishes worsened tensions between India and Pakistan, raising concerns of a broader conflict."
      ]
    }
  ];

  const [currentYear, setCurrentYear] = useState(timelineData[0].year);
  const sectionRefs = useRef([]);

  useEffect(() => {
    sectionRefs.current = sectionRefs.current.slice(0, timelineData.length);

    const observerOptions = {
      root: null, // Uses viewport
      threshold: 0.71, // Trigger when 50% of the section is visible
    };

    const observerCallback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const index = sectionRefs.current.indexOf(entry.target);
          setCurrentYear(timelineData[index].year);
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    sectionRefs.current.forEach((section) => {
      if (section) observer.observe(section);
    });

    return () => {
      observer.disconnect();
    };
  }, [timelineData]);
    const navigate = useNavigate();

  return (
    <div className="history-root">
      <div className="home-button-container">
        <button className="home-button" onClick={() => navigate("/")}>
        🏠︎
        </button>
      </div>
      <header class="army-history-header">History of the Indian Army</header>
      <div className="current-year">{currentYear}</div>

      <main>
        {timelineData.map((item, index) => (
         <section
         key={index}
         className="timeline-section"
         ref={(el) => (sectionRefs.current[index] = el)}
       >
         <div className="timeline-item">
           <h1>{item.title}</h1>
           {item.details.map((paragraph, i) => (
             <p key={i}>{paragraph}</p>
           ))}
         </div>
       </section>
       
        ))}
      </main>
    </div>
  );
};

export default History;