import React from 'react';
import './southernCommand.css';
import KonarkCorpsImage from '../Images/XII_Corps.png'; // Import the image
import SudershanCorpsImage from '../Images/Sudarshan_Chakra_Corps.png'; // Import the image

function SouthernCommand() {
    return (
        <div className="southern-command-container">
            {/* Header Section */}
            <header className="header">
                <h1>Southern Command - Indian Army</h1>
            </header>

            {/* Main Content Section */}
            <main className="content">
                <section className="content-section justify-text">
                    <h2>Historical Background</h2>
                    <p>
                        The Great Indian Rebellion of 1857 led to the transfer of power from the East India Company
                        to the British Crown and a reorganization of the military. On April 1, 1895, the Presidency
                        Armies were replaced by the Indian Army, with four commands – Bombay, Bengal, Punjab, and Madras.
                        Bombay Command, headquartered in Pune, was established on the same day.
                    </p>
                </section>

                <section className="content-section justify-text">
                    <h2>Reorganization and Role During WWII</h2>
                    <p>
                        By 1908, the Indian Army was reorganized into two commands – Northern Army at Rawalpindi
                        and Southern Army at Poona. In the 1920s, four commands were reinstated: Southern Command in Poona,
                        Northern at Rawalpindi, Eastern at Nainital, and Western at Quetta. During WWII, Southern Command
                        briefly shifted to Bangalore to defend against potential attacks from Germany and Japan.
                        Southern Command, the oldest field formation, retains its 1895 structure.
                    </p>
                </section>

                <section className="content-section justify-text">
                    <h2>Symbolism of the Southern Command</h2>
                    <p>
                        The Southern Command's formation sign, the Crux or Southern Cross, is inspired by the four
                        brightest stars in the Crux constellation, known in Hindu mythology as Trishanku.
                    </p>
                </section>

                <section className="content-section justify-text">
                    <h2>Modern-Day Southern Command</h2>
                    <p>
                        Today, Southern Command oversees two corps, headquartered in Jodhpur and Bhopal. It spans 11 states
                        and 4 union territories, covering 41% of India’s landmass. Static formations include Maharashtra,
                        Gujarat, and Goa Area (Mumbai HQ), and Dakshin Bharat Area (Chennai HQ).
                    </p>
                </section>

                <section className="content-section justify-text">
                    <h2>Post-Independence Contributions</h2>
                    <p>
                        Post-independence, Southern Command has engaged in overseas operations, joint exercises,
                        and disaster relief. With a strong history and operational excellence, it remains a formidable
                        field army prepared for future challenges.
                    </p>
                </section>

                {/* New Section for Organisation */}
                <section className="content-section justify-text">
                    <h2>Organisation</h2>
                    <p>
                        The Konark Corps, raised on 26 February 1987, draws its name from the Konark Sun Temple and safeguards
                        India's vast desert sector, international borders, and cultural heritage. Known for its valor in battles
                        like Laungewala and contributions in disaster relief, it thrives in extreme terrains and adopts cutting-edge
                        military technologies.
                    </p>
                    <img src={KonarkCorpsImage} alt="Konark Corps" className="corps-image" />

                    <p>
                        The Sudershan Corps, raised on 15 December 1965, has played a critical role in India's defense, especially
                        during the 1965 and 1971 wars. The Corps was instrumental in securing the western borders and safeguarding
                        India’s interests in the region.
                    </p>
                    <img src={SudershanCorpsImage} alt="Sudershan Corps" className="corps-image" />
                    <p>
                    <div>
                        <h2> Dakshin bharat area</h2>
        <p><strong>Raising of Madras Area:</strong> Madras Area was raised on 15 Aug 1947, with Maj Gen SM Shrinagesh as the first Indian officer to command it. It later became Madras Sub Area, and in 1974, was re-designated as ATNK & K Area.</p>

        <p><strong>Re-designation of ATNK & K Area:</strong> On 12 Oct 1988, it was re-designated as ATNKK & G Area after Goa's inclusion, and in 2004, it reverted to ATNK & K Area after Goa was moved to MG & G Area.</p>

        <p><strong>Present Designation as Dakshin Bharat Area:</strong> After the bifurcation of Andhra Pradesh in 2015, the ATNK & K Area was re-designated as Dakshin Bharat Area (DB Area), covering Andhra Pradesh, Telangana, Tamil Nadu, Karnataka, Kerala, and the Union Territories of Puducherry and Lakshadweep.</p>
    </div>
    <h2> HQ Maharashtra ,gujarat and goa</h2>
    <p><strong> In 1675, British Governor Gerald Aungier took possession of Colaba from the Portuguese for military use, and it later became a military station; in 1770, it was used as a health resort for sick troops, now INHS Ashvini. The Bombay District HQ was raised at Colaba in 1889, renamed the ‘Bombay Brigade’ in 1900, and post-independence, became HQ Maharashtra and Gujarat Area in 1960, later adding Goa in 2004. </strong></p>
    <p> <strong> The HQ was re-designated as HQ Maharashtra, Gujarat & Goa Area, and after Goa's jurisdiction shift in 2004, it continued as HQ Maharashtra, Gujarat & Goa Area, later evolving into HQ Maharashtra and Gujarat Area after the division of Bombay State into Maharashtra and Gujarat.
    
</strong></p>
                    </p>
                </section>
                <section>
                    <h2> Insitutions and establishments</h2>
                    <p> <u> Armoured Corps School and Centre (ACC & S)</u></p>
                     <p> <u>  Army Institute of Physical Training (AIPT) </u></p>
                     <p> <u> College of Military Engineering (CME)</u></p>
                     <p>  <u> Combat Army Aviation Training School</u> </p>
                    <p>  <u> Army Service Corps Centre College</u></p>
                    <p>  <u> College of Defence Management (CDM)</u></p>
                    <p> <u> CMP Centre and School</u></p>
                     <p> <u> Electrical and Mechanical Engineering School</u></p>
                     <p> <u>Foreign Training Node</u></p> 
                      <p> <u> Military Intelligence Training School and Depot (MINTSD)</u></p> 
                      <p> <u> Officers Training Academy (OTA) </u>
                      </p>

                </section>
                <section>
                    <h2> Operations</h2>
                    <p> 1.  Junagadh 1947 </p>
                    <p>   
                    2.     Hyderabad 1948 </p>
                    <p>  3.     Goa 1961(Operation VIJAY) </p>
                    <p>   4.     Kutch 1965 </p>
                    <p>  5.     Rajasthan 1965</p>
                    <p>  6.    Sri Lanka 1987-89 : Operation PAWAN</p>
                    <p>  7.     Rajasthan 1971</p>
                    <p>   8.Maldives – 1988</p>
                    <p>  9.  Operation VIJAY – 1999 </p>
                    <p> 10.     Operation PARAKRAM – 2002</p>
                </section>
                <h2> Aid to Civ Authorities</h2>
                <p> 1.OPERATION VARSHA-21.</p>
                <p>  2.OPERATION PALAKKAD.</p>
                <p>3.       OPERATION VISPHOTAK MUKT BANDARGAH.</p>
                <h2> Command Activities</h2>
                <p> 1. TRAINING.</p>
                <p>  2.     WELFARE ACTIVITIES.</p>
<h2> Adventure/ Sports</h2>
<p> NARVEER TANHAJI RUN. </p>
<p>  TREKKING EXPEDITION.     </p>
<p>     FUN RUN. </p>
<h2> War memories</h2>
<p> SOUTHERN COMMAND, WAR MEMORIAL, PUNE</p>
<h2> Army Guest Houses/ Holiday Homes</h2>
<p>1.     SHIRDI
 
 2.     AURANGABAD
  
 3.     TIRUPATI
  
 4.     OOTY
  
 5.     MOUNT ABU
  
 6.     GOA
  </p>
            </main>

            {/* Footer Section */}
            <footer className="footer">
                <p>© 2025 Indian Army | Southern Command | All Rights Reserved</p>
            </footer>
        </div>
    );
}

export default SouthernCommand;
