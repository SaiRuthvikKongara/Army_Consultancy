import React from "react";
import "./ImportantLinksPage.css";

const ImportantLinksPage = () => {
  const links = [
    {title: "Ministry of Defence", url:"https://www.mod.gov.in/"},
    {title: "PCDA Pensions", url:"https://pcdapension.nic.in/pcda/index.php"},
    {title:"Indian Navy", url:"https://indiannavy.nic.in/"},
    {title:"CDM", url:"https://cdm.ap.nic.in/"},
    {title:"Indian Air Force", url:"https://indianairforce.nic.in/"},
    {title:"RIMC", url:"https://rimc.gov.in/rimcindex.aspx"},
    {title:"Integrated Defence Staff", url:"https://ids.nic.in/"},
    {title:"DGR", url:"https://www.dgrindia.gov.in/"},
    {title:"Indian Coast Guard", url:"https://joinindiancoastguard.gov.in/"},
    {title:"Border Roads Organisation", url:"http://www.bro.gov.in/"},
    {title:"CDA(O), Pune", url:"https://pcdaopune.gov.in/"},
    { title: "Directorate of Standardisation", url: "https://ddpdos.gov.in/" },
    { title: "ECHS", url: "https://www.echs.gov.in/"},
    { title: "AWPO", url: "https://www.exarmynaukri.com/"},
    { title: "Sainik Samachar", url: "https://sainiksamachar.nic.in/"},
    { title: "Kendriya Sainik Board (KSB)", url: "https://www.desw.gov.in/kendriya_sainik_board"},
    { title: "RODRA.GOV.IN", url: "https://rodra.gov.in/"},
    { title: "NDA", url: "http://ndacivrect.gov.in/"},
    { title: "NDC", url: "https://ndc.nic.in/" },
    { title: "AIT, Pune", url: "https://www.aitpune.com/" },
    { title: "AFMC, Pune", url: "https://afmc.nic.in/" },
    { title: "AWHO", url: "https://awhosena.in/new/" },
    { title: "DGAFMS", url: "https://mod.gov.in/dod/directorate-general-armed-force-medical-services" },
    { title: "National War Memorial", url: "https://nationalwarmemorial.gov.in/" },
    { title: "NCC", url: "https://indiancc.nic.in/" },
    { title: "ARMAAN", url: "https://armaan.gov.in/" },
    { title: "HAMRAAZ Web", url: "https://hamraazmp8.gov.in/Default.aspx" },
    { title: "MES", url: "https://mes.gov.in/" },
    { title: "AWES", url: "https://awesindia.com/" }
  ];

  return (
    <div className="important-links-page">
      <header className="header">
        <h1>External Links</h1>
        <p className="subtitle">
          Explore the key resources and official portals associated with the Indian Army.
        </p>
      </header>
      
      <ul className="links-list">
        {links.map((link, index) => (
          <li key={index} className="link-item">
            <a href={link.url} target="_blank" rel="noopener noreferrer">
              {link.title}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ImportantLinksPage;
