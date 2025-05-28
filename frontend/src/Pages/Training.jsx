import React, { useState } from "react";
import "./Training.css";

const Training = () => {
  const [activeSection, setActiveSection] = useState("Inter Services Establishments");
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const sections = {
    "Inter Services Establishments": (
      <>
        <h2>Inter Services Establishments in Indian Army Training</h2>
        <p>
          The Indian Armed Forces operate several <strong>Inter Services Establishments</strong> to foster collaboration, synergy, and joint training among the Army, Navy, and Air Force. These institutions play a crucial role in preparing personnel for integrated operations in a multi-domain warfare environment.
        </p>
        <h3>1. National Defence Academy (NDA), Khadakwasla</h3>
        <p>
          <strong>Objective:</strong> The NDA trains cadets of the Indian Army, Navy, and Air Force together, focusing on their foundational years to promote joint operational ethos and camaraderie.
          <br />
          <strong>Special Features:</strong>
          <ul>
            <li>Comprehensive academic and physical training.</li>
            <li>Emphasis on discipline, leadership, and inter-service coordination.</li>
          </ul>
        </p>

        <h3>2. National Defence College (NDC), New Delhi</h3>
        <p>
          <strong>Objective:</strong> The NDC prepares senior officers from the Armed Forces and civil services for strategic-level responsibilities in national security and international relations.
          <br />
          <strong>Special Features:</strong>
          <ul>
            <li>Integrated training for tri-service and civilian leadership.</li>
            <li>Courses led by national and international experts in security and diplomacy.</li>
          </ul>
        </p>

        <h3>3. Defence Services Staff College (DSSC), Wellington</h3>
        <p>
          <strong>Objective:</strong> DSSC focuses on joint operational planning and staff functions, preparing officers for command and staff appointments in tri-service environments.
          <br />
          <strong>Special Features:</strong>
          <ul>
            <li>Emphasis on joint operations in land, sea, air, and cyber domains.</li>
            <li>Multi-national participation in training programs.</li>
          </ul>
        </p>

        <h3>4. College of Defence Management (CDM), Secunderabad</h3>
        <p>
          <strong>Objective:</strong> CDM provides mid-career officers with specialized training in organizational and resource management for tri-service efficiency.
          <br />
          <strong>Special Features:</strong>
          <ul>
            <li>Courses on decision-making, strategic resource allocation, and leadership.</li>
            <li>Focus on joint logistics and operations management.</li>
          </ul>
        </p>

        <h3>5. Armed Forces Medical College (AFMC), Pune</h3>
        <p>
          <strong>Objective:</strong> AFMC trains medical professionals to serve the Armed Forces Medical Services, addressing the unique challenges of military medicine.
          <br />
          <strong>Special Features:</strong>
          <ul>
            <li>Specialized courses in aviation, naval, and trauma medicine.</li>
            <li>Multi-disciplinary training for tri-service medical readiness.</li>
          </ul>
        </p>

        <h3>6. National Cadet Corps (NCC)</h3>
        <p>
          <strong>Objective:</strong> The NCC is a youth development organization that instills leadership, discipline, and patriotic values in young cadets, preparing them for future roles in the Armed Forces.
          <br />
          <strong>Special Features:</strong>
          <ul>
            <li>Nationwide training for school and college students in tri-service modules.</li>
            <li>Adventure activities and camps promoting inter-service understanding.</li>
          </ul>
        </p>

        <h3>7. Military Institute of Technology (MILIT), Pune</h3>
        <p>
          <strong>Objective:</strong> MILIT focuses on equipping officers of the three services with advanced technical knowledge for operational efficiency.
          <br />
          <strong>Special Features:</strong>
          <ul>
            <li>Training on emerging technologies like cyber warfare, AI, and communication systems.</li>
            <li>Courses tailored for tri-service operational needs.</li>
          </ul>
        </p>

        <h3>8. Centre for Joint Warfare Studies (CENJOWS), New Delhi</h3>
        <p>
          <strong>Objective:</strong> CENJOWS researches and develops joint warfare doctrines, focusing on integration and multi-domain operations.
          <br />
          <strong>Special Features:</strong>
          <ul>
            <li>Training on modern warfare strategies.</li>
            <li>Collaboration on cyber, space, and information warfare integration.</li>
          </ul>
        </p>

        <h3>9. Integrated Defence Staff Training Institutes (IDSTIs)</h3>
        <p>
          <strong>Objective:</strong> These institutes train officers from all three services in joint operational planning and interoperability.
          <br />
          <strong>Special Features:</strong>
          <ul>
            <li>Focus on logistics, joint operations, and technology-driven warfare.</li>
            <li>Hands-on training for operations under the Integrated Defence Staff (IDS).</li>
          </ul>
        </p>
      </>
    ),
    "Army Establishments": (
      <>
        <p>
          The Indian Army operates specialized establishments to provide in-depth training for its personnel. These institutions ensure readiness for diverse operational environments, offering courses in infantry tactics, engineering, logistics, and advanced technologies.
        </p>

        <h3>1. Infantry School, Mhow</h3>
        <p>
          <strong>Objective:</strong> Trains officers and soldiers in infantry tactics, weapons, and fieldcraft.
        </p>

        <h3>2. Armoured Corps Centre and School (ACC&S), Ahmednagar</h3>
        <p>
          <strong>Objective:</strong> Focuses on training personnel in armored warfare and modern mechanized tactics.
        </p>

        <h3>3. Artillery School, Deolali</h3>
        <p>
          <strong>Objective:</strong> Provides training in the use of advanced artillery systems and precision firepower.
        </p>

        <h3>4. Corps of Engineers Training Establishments</h3>
        <p>
          <strong>Objective:</strong> Offers training in combat engineering, bridging, and mine warfare.
        </p>

        <h3>5. Army Service Corps (ASC) Centre and College, Bangalore</h3>
        <p>
          <strong>Objective:</strong> Specialized logistics training, including supply chain and transport management.
        </p>

        <h3>6. College of Military Engineering (CME), Pune</h3>
        <p>
          <strong>Objective:</strong> Trains personnel in advanced military engineering and technology integration.
        </p>

        <h3>7. Army Medical Corps (AMC) Centre and School, Lucknow</h3>
        <p>
          <strong>Objective:</strong> Focuses on trauma care, field medicine, and disaster response.
        </p>

        <h3>8. Military Intelligence Training School and Depot (MINTSD), Pune</h3>
        <p>
          <strong>Objective:</strong> Offers training in intelligence gathering, cyber warfare, and counter-intelligence.
        </p>

        <h3>9. Corps of Signals Training Establishments</h3>
        <p>
          <strong>Objective:</strong> Trains personnel in communication systems, satellite communications, and cybersecurity.
        </p>

        <h3>10. High Altitude Warfare School (HAWS), Gulmarg</h3>
        <p>
          <strong>Objective:</strong> Provides specialized training in mountain and high-altitude warfare.
        </p>

        <h3>11. Counter Insurgency and Jungle Warfare School (CIJWS), Vairengte</h3>
        <p>
          <strong>Objective:</strong> Prepares personnel for counter-insurgency and unconventional warfare.
        </p>

        <h3>12. Army Air Defence College (AADC), Gopalpur</h3>
        <p>
          <strong>Objective:</strong> Focuses on air defence tactics, missile systems, and radar technology.
        </p>
      </>
    ),
    "Training Teams": (
      <>
        <p>Training Teams provide specialized skills to enhance operational preparedness of personnel in diverse and challenging environments. These teams focus on equipping soldiers with expertise in unconventional warfare, commando operations, and special forces tactics.</p>

        <h3>1. Wangchuk Lo Dzong Military School (WLDMS), Bhutan</h3>
        <p>
          <strong>Objective:</strong> To impart military training to the personnel of the Royal Bhutan Army and Royal Bodyguards.
          <br />
          <strong>Type of Training:</strong>
          <ul>
            <li>Pre-Courses</li>
            <li>Refresher Courses</li>
            <li>Promotion Cadres</li>
            <li>Miscellaneous Training</li>
          </ul>
          <strong>Training Infrastructure:</strong>
          <ul>
            <li>Sand Model Rooms</li>
            <li>Conference Hall</li>
            <li>Field Engineering Model Room</li>
            <li>Improvised Explosive Device Model Room</li>
            <li>Signal Model Room</li>
            <li>Computer Room</li>
            <li>Long Range and Jungle Lane Shooting Range</li>
            <li>Rock Climbing Area and Assault Course</li>
            <li>Unarmed Combat Pit</li>
            <li>Physical Training and Sports Training Area</li>
            <li>Field Engineering Demonstration Area</li>
            <li>Rural and Urban Insurgency Mock-ups</li>
            <li>Computer Training Lab</li>
            <li>Training Library</li>
          </ul>
        </p>

        <h3>2. Indo-Bhutan Friendship Hospital (IBFH), Bhutan</h3>
        <p>
          <strong>Objective:</strong> To provide comprehensive medical facilities to both military personnel and civilians in the Haa region.
          <br />
          <strong>Facilities:</strong>
          <ul>
            <li>Outpatient Department (OPD) Complex</li>
            <li>Operation Theatre (OT)</li>
            <li>Intensive Care Unit (ICU)</li>
            <li>30-bed Ward Complex</li>
            <li>Specialist Services: Medical, Surgical, Gynecology, Pediatrics, Pathology, and Dental Care</li>
          </ul>
          <strong>Additional Features:</strong>
          <ul>
            <li>Mobile Clinic for remote areas, equipped with a minor OT, lab, dispensary, portable X-ray unit, and dental chair</li>
            <li>State-of-the-art equipment, including Ultrasound, ECG, X-Ray, Ventilators, and Neonatal Incubators</li>
            <li>Free medical services to civilians, treating approximately 100 patients daily</li>
          </ul>
        </p>
      </>
    ),

    "Rashtriya Indian Military College": "The Rashtriya Indian Military College is a premier institute preparing young cadets for leadership roles in the armed forces.",
    "Rashtriya Military Schools": "Rashtriya Military Schools emphasize academic excellence, physical training, and discipline to groom future leaders.",
    "Sainik Schools": (
      <>
        <h2>Indian Army Sainik Schools</h2>

        <section>
          <h3>Overview</h3>
          <p>
              Sainik Schools are a network of premier educational institutions established under the Ministry of Defence (MoD), Government of India. They aim to prepare young students academically, physically, and mentally for entry into the National Defence Academy (NDA), Indian Naval Academy (INA), and other prestigious officer-training academies. These schools imbibe the spirit of discipline, leadership, and patriotism in their students while providing high-quality education.
          </p>
        </section>

        <section>
          <h3>Objectives</h3>
          <ul>
            <li><strong>Military Career Orientation:</strong> To groom young boys and girls for a career in the Armed Forces by preparing them for entry into NDA, INA, and other military institutions.</li>
            <li><strong>Holistic Development:</strong> To provide a balanced curriculum integrating academics, sports, discipline, and co-curricular activities.</li>
            <li><strong>Nation Building:</strong> To inculcate the values of leadership, integrity, courage, and national pride in students.</li>
            <li><strong>Social Equality:</strong> To offer opportunities to talented students from rural and semi-urban areas by making military education accessible.</li>
          </ul>
        </section>

        <section>
          <h3>Historical Background</h3>
          <p>
            Sainik Schools were established in 1961 as part of the initiative of then Defence Minister, V.K. Krishna Menon. The goal was to address the regional and social disparities in officer cadre recruitment by preparing students from diverse backgrounds for leadership roles in the Armed Forces.
          </p>
        </section>

        <section>
          <h3>Key Features</h3>
          <ul>
            <li><strong>Military-Style Discipline:</strong> Focus on physical fitness, discipline, and time management, with regular drills, parades, and structured daily routines akin to military life.</li>
            <li><strong>Academic Excellence:</strong> Affiliation with CBSE ensures a robust academic foundation, with emphasis on STEM (Science, Technology, Engineering, and Mathematics) education for competitive advantage.</li>
            <li><strong>Co-Curricular and Leadership Development:</strong> Training in public speaking, group discussions, and leadership tasks, as well as NCC (National Cadet Corps) training for instilling values of patriotism and teamwork.</li>
            <li><strong>Sports and Physical Training:</strong> Facilities for football, hockey, basketball, athletics, and adventure sports, with regular participation in national and inter-school tournaments to develop sportsmanship.</li>
            <li><strong>Scholarship Programs:</strong> State and central government scholarships for deserving students from economically weaker sections, as well as concessions on tuition fees for wards of Armed Forces personnel.</li>
            <li><strong>Infrastructure:</strong> State-of-the-art academic blocks, hostels, sports grounds, and laboratories, along with libraries and computer labs equipped with modern resources for student learning.</li>
          </ul>
        </section>

        <section>
          <h3>Admission Process</h3>
          <ul>
            <li><strong>Eligibility:</strong> Admission is open to boys and girls in Classes VI and IX.</li>
            <li><strong>Entrance Exam:</strong> Conducted annually as the All India Sainik Schools Entrance Examination (AISSEE), focusing on Mathematics, English, and General Knowledge.</li>
            <li><strong>Interview and Medical Examination:</strong> Shortlisted candidates undergo a personality interview and medical examination to assess their fitness for military education.</li>
          </ul>
        </section>

        <section>
          <h3>Special Initiatives</h3>
          <ul>
            <li><strong>Girl Cadet Program:</strong> Sainik Schools started admitting girl students in 2021 to ensure gender parity and equal opportunities in the Armed Forces.</li>
            <li><strong>Digital Learning:</strong> Integration of e-learning platforms and smart classrooms for modern education delivery.</li>
            <li><strong>Focus on Emerging Technologies:</strong> Encouraging students to explore AI, robotics, coding, and cyber security in alignment with future military requirements.</li>
          </ul>
        </section>

        <section>
          <h3>Achievements</h3>
          <ul>
            <li>Sainik Schools have produced numerous officers for the Indian Armed Forces, contributing significantly to the officer cadre of the Army, Navy, and Air Force.</li>
            <li>Alumni have excelled in diverse fields such as administration, sports, and academics, representing the values instilled in them during their time at Sainik Schools.</li>
            <li>Consistent high performance in NDA and INA entrance examinations.</li>
          </ul>
        </section>

        <section>
          <h3>List of Sainik Schools</h3>
          <ul>
            <li>Sainik School, Kapurthala (Punjab)</li>
            <li>Sainik School, Ghorakhal (Uttarakhand)</li>
            <li>Sainik School, Satara (Maharashtra)</li>
            <li>Sainik School, Rewa (Madhya Pradesh)</li>
            <li>Sainik School, Kazhakootam (Kerala)</li>
            <li><strong>(Include the full list of Sainik Schools with relevant links for further information)</strong></li>
          </ul>
        </section>

        <section>
          <h3>Vision for the Future</h3>
          <ul>
            <li>Expand the network of Sainik Schools across underserved regions to ensure inclusive education.</li>
            <li>Introduce advanced training modules and programs to prepare students for emerging challenges in modern warfare and leadership.</li>
            <li>Promote public-private partnerships to enhance the quality and reach of Sainik Schools.</li>
          </ul>
        </section>
      </>
    ),

  };
  

  return (
    <div className="training-container">
      <div className="main-content">
        <h1>{activeSection}</h1>
        {sections[activeSection]}
      </div>

      {/* Sidebar with Dropdown */}
      <div className="sidebar">
      
        
        <div className="dropdown">
          <button className="dropbtn" onClick={() => setDropdownOpen(!dropdownOpen)}>
            {dropdownOpen ? "Hide Links" : "Related Links"}
          </button>
          
          {dropdownOpen && (
            <ul className="dropdown-content">
              {Object.keys(sections).map((section) => (
                <li
                  key={section}
                  className={activeSection === section ? "active" : ""}
                  onClick={() => {
                    setActiveSection(section);
                    setDropdownOpen(false); // Close dropdown on selection
                  }}
                >
                  {section}
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </div>
  );
};

export default Training;