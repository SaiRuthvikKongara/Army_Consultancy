import React from 'react';

const data = [
  {"sno": 1, "rank": "MAJ", "name": "PS GAHOON", "regiment": "PUNJAB"},
  {"sno": 2, "rank": "2/LT", "name": "M THULASIRAM", "regiment": "ENGINEERS"},
  {"sno": 3, "rank": "SUB", "name": "KARTAR SINGH, MC", "regiment": "PUNJAB"},
  {"sno": 4, "rank": "JEM", "name": "SAMANDAR SINGH", "regiment": "GRS"},
  {"sno": 5, "rank": "L/NK", "name": "MILKHA SINGH", "regiment": "PUNJAB"},
  {"sno": 6, "rank": "L/NK", "name": "BISHAN SINGH", "regiment": "PUNJAB"},
  {"sno": 7, "rank": "SEP", "name": "SHANKAR DASS", "regiment": "PUNJAB"},
  {"sno": 8, "rank": "LT COL", "name": "R.A SHEBBEARE", "regiment": "GRENADIERS"},
  {"sno": 9, "rank": "MAJ", "name": "S.L MENEZES", "regiment": "GRENADIERS"},
  {"sno": 10, "rank": "MAJ", "name": "AT STEPHENSON", "regiment": "GARH RIF"},
  {"sno": 11, "rank": "SUB MAJ", "name": "DHAN SINGH", "regiment": "ARTILLERY"},
  {"sno": 12, "rank": "HAV", "name": "NARANJAN SINGH", "regiment": "SIKH"},
  {"sno": 13, "rank": "L/DFDR", "name": "SULTAN SINGH", "regiment": "POONA HORSE"},
  {"sno": 14, "rank": "RFMN", "name": "BAKHTAWAR SINGH BHANDARI", "regiment": "GARH RIF"},
  {"sno": 15, "rank": "SEP", "name": "HARCHAND SINGH", "regiment": "SIKH"},
  {"sno": 16, "rank": "SEP", "name": "RICHHPAL SINGH", "regiment": "GRENADIERS"},
  {"sno": 17, "rank": "SEP", "name": "RAM SINGH", "regiment": "PARA, KUMAON"},
  {"sno": 18, "rank": "SUB", "name": "TEK BAHADUR SAHI", "regiment": "9 GORKHA RIF"},
  {"sno": 19, "rank": "RFMN", "name": "TIL BAHADUR GURUNG", "regiment": "ASSAM"},
  {"sno": 20, "rank": "SEP", "name": "THAKUR SINGH", "regiment": "ASC"},
  {"sno": 21, "rank": "JEM", "name": "KULBIR THAPA", "regiment": "8 GORKHA RIF"},
  {"sno": 22, "rank": "RFN", "name": "GANESH BAHADUR JAMANG", "regiment": "5 GORKHA RIF"},
  {"sno": 23, "rank": "HAV", "name": "S S BHARDWAJ", "regiment": "AOC"},
  {"sno": 24, "rank": "SCOUT", "name": "CHATRA RAM", "regiment": "BORDER SCOUTS"},
  {"sno": 25, "rank": "SCOUT", "name": "TARA CHAND", "regiment": "BORDER SCOUT"},
  {"sno": 26, "rank": "SCOUT", "name": "SAUDAGAR SINGH", "regiment": "BORDER SCOUT"},
  {"sno": 27, "rank": "CAPT", "name": "GS GREWAL", "regiment": "BIHAR"},
  {"sno": 28, "rank": "SUB", "name": "KHEM CHAND", "regiment": "GRENADIERS"},
  {"sno": 29, "rank": "SUB", "name": "MEGH SINGH", "regiment": "DOGRA"},
  {"sno": 30, "rank": "GEM", "name": "RABE GURUNG", "regiment": "4 GORKHA RIF"},
  {"sno": 31, "rank": "HAV", "name": "TEK BAHADUR GURUNG", "regiment": "4 GORKHA RIF"},
  {"sno": 32, "rank": "L/HAV", "name": "BALWANT SINGH", "regiment": "SIKH"},
  {"sno": 33, "rank": "NK", "name": "RAGHUNATH DANGE", "regiment": "PARA"},
  {"sno": 34, "rank": "SEP", "name": "HANS RAJ", "regiment": "PUNJAB"},
  {"sno": 35, "rank": "SEP", "name": "NARBIR SINGH", "regiment": "RAJPUT"},
  {"sno": 36, "rank": "SEP", "name": "SHANKER HEMBROM", "regiment": "BIHAR"},
  {"sno": 37, "rank": "HAV", "name": "MURLI RAM", "regiment": "GRS"},
  {"sno": 38, "rank": "SEP", "name": "GANAK SINGH", "regiment": "J&K INFANTRY"},
  {"sno": 39, "rank": "SUB", "name": "MOHAR SINGH", "regiment": "SIKH"},
  {"sno": 40, "rank": "GEM", "name": "MOHINDER SINGH", "regiment": "SIKH"},
  {"sno": 41, "rank": "GEM", "name": "TEK BAHADUR GURUNG", "regiment": "8 GORKHA RIF"},
  {"sno": 42, "rank": "NK", "name": "SUGAM SINGH", "regiment": "RAJPUT"},
  {"sno": 43, "rank": "NK", "name": "PADAM SINGH GURUNG", "regiment": "8 GORKHA RIF"},
  {"sno": 44, "rank": "SEP", "name": "MEWA SINGH", "regiment": "SIKH"},
  {"sno": 45, "rank": "SEP", "name": "RANJIT SINGH", "regiment": "SIKH"},
  {"sno": 46, "rank": "L/NK", "name": "GANGA PRASAD THAPA", "regiment": "ASSAM RIF"},
  {"sno": 47, "rank": "RFN", "name": "PURAN BAHADUR RANA", "regiment": "ASSAM RIF"},
  {"sno": 48, "rank": "RFN", "name": "GOGESHWAR KUMAR", "regiment": "ASSAM RIF"},
  {"sno": 49, "rank": "2/LT", "name": "JK GROVER", "regiment": "SIGNALS"},
  {"sno": 50, "rank": "2/LT", "name": "VR DANI", "regiment": "8 GORKHA RIF"},
  {"sno": 51, "rank": "2/LT", "name": "RAM LABHAYA", "regiment": "JAT"},
  {"sno": 52, "rank": "GEM", "name": "DALIP SINGH", "regiment": "SIKH"},
  {"sno": 53, "rank": "GEM", "name": "BAJIRAO SAKPAL", "regiment": "MARATHA LI"},
  {"sno": 54, "rank": "HAV", "name": "GANPATIRAO SARDESAI", "regiment": "MARATHA LI"},
  {"sno": 55, "rank": "NK", "name": "NAKI", "regiment": "RAJPUT"},
  {"sno": 56, "rank": "NK", "name": "HARDIAL SINGH", "regiment": "PUNJAB"},
  {"sno": 57, "rank": "L/NK", "name": "SURENDER SINGH NEGI", "regiment": "GARH RIF"},
  {"sno": 58, "rank": "L/NK", "name": "PUTLAGI SHINDE", "regiment": "MARATHA LI"},
  {"sno": 59, "rank": "SPR", "name": "DHANI RAM", "regiment": "J&K INFANTRY"},
  {"sno": 60, "rank": "SEP", "name": "GURBHAN SINGH", "regiment": "PUNJAB"},
  {"sno": 61, "rank": "SEP", "name": "MEGH SINGH", "regiment": "PUNJAB"},
  {"sno": 62, "rank": "MAJ", "name": "NAND LAL JAMWAL", "regiment": "9 GORKHA RIF"},
  {"sno": 63, "rank": "LT", "name": "PREM NARAIN KAIKER", "regiment": "9 GORKHA RIF"},
  {"sno": 64, "rank": "HAV", "name": "TRILOK SINGH KATHAIT", "regiment": "3 GORKHA RIF"},
  {"sno": 65, "rank": "NK", "name": "GULAB SINGH NEGI", "regiment": "3 GORKHA RIF"},
  {"sno": 66, "rank": "NK", "name": "PREM SINGH NEGI", "regiment": "3 GORKHA RIF"},
  {"sno": 67, "rank": "RFN", "name": "RUDRA BAHADUR THAPA", "regiment": "9 GORKHA RIF"},
  {"sno": 68, "rank": "GEM", "name": "BALBIR SINGH", "regiment": "PARA"},
  {"sno": 69, "rank": "HAV", "name": "DEWAN SINGH", "regiment": "PARA"},
  {"sno": 70, "rank": "NK", "name": "PURAN CHAND", "regiment": "PARA"},
  {"sno": 71, "rank": "SEP", "name": "BEG RAJ", "regiment": "PARA"},
  {"sno": 72, "rank": "SUR", "name": "GILBERT SPEED", "regiment": " "},
  {"sno": 73, "rank": "2/LT", "name": "R NARASIMHAN", "regiment": "JAT"},
  {"sno": 74, "rank": "HAV", "name": "DAULET RAM", "regiment": " "},
  {"sno": 75, "rank": "NK", "name": "RENUGOPAL", "regiment": "ENGINEERS"},
  {"sno": 76, "rank": "LT COL", "name": "ID NADIRSHAW, VRC", "regiment": " "},
  {"sno": 77, "rank": "GDR", "name": "SARDARI LAL", "regiment": "GRENADIER"},
  {"sno": 78, "rank": "L/HAV", "name": "BOM BAHADU THAPA", "regiment": "8 GORKHA RIF"},
  {"sno": 79, "rank": "NK", "name": "LAL BAHADUR THAPA", "regiment": "8 GORKHA RIF"},
  {"sno": 80, "rank": "2/LT", "name": "SAMAR SINGH CHANDEL", "regiment": "J&K REGT"},
  {"sno": 81, "rank": "JEM", "name": "PIRTHI SINGH", "regiment": "PUNJAB"},
  {"sno": 82, "rank": "L/NK", "name": "TIRATH SINGH", "regiment": "SIKH LI"},
  {"sno": 83, "rank": "SEP", "name": "DARA SINGH", "regiment": "SIKH LI"},
  {"sno": 84, "rank": "L/NK", "name": "KALU RAI", "regiment": "ASSAM RIF"},
  {"sno": 85, "rank": "L/NK", "name": "ALBY D' CRUZ", "regiment": "ASSAM RIF"},
  {"sno": 86, "rank": "RFN", "name": "BEVELA LUSHAI", "regiment": "ASSAM RIF"},
  {"sno": 87, "rank": "SHRI", "name": "JAGDISH LAL", "regiment": "N/A"},
  {"sno": 88, "rank": "LT", "name": "H B KALA", "regiment": "JAT"},
  {"sno": 89, "rank": "HAV", "name": "BALWANT SINGH", "regiment": "PUNJAB"},
  {"sno": 90, "rank": "NK", "name": "KEHAR SINGH", "regiment": "SIKH LI"},
  {"sno": 91, "rank": "NK", "name": "DHARAM SINGH", "regiment": "JAT"},
  {"sno": 92, "rank": "NK", "name": "SARDAR SINGH", "regiment": "JAT"},
  {"sno": 93, "rank": "L/NK", "name": "M LAKSHMANAN", "regiment": "PARA"},
  {"sno": 94, "rank": "JEM", "name": "BHIM BAHADUR GURUNG", "regiment": "ASSAM RIF"},
  {"sno": 95, "rank": "L/NK", "name": "PREM SINGH", "regiment": "DOGRA"},
  {"sno": 96, "rank": "MAJ", "name": "MAL SINGH", "regiment": "RAJPUT"},
  {"sno": 97, "rank": "L/HAV", "name": "SHISPAL SINGH", "regiment": "RAJPUT"},
  {"sno": 98, "rank": "SEP", "name": "HUKAM SINGH", "regiment": "RAJPUT"},
  {"sno": 99, "rank": "LT", "name": "SC CHADHA", "regiment": "GUARDS"},
  {"sno": 100, "rank": "2LT", "name": "DD BHALLA", "regiment": "RAJPUT"},
  {"sno": 101, "rank": "2LT", "name": "UDHE SINGH", "regiment": "MADRAS"},
  {"sno": 102, "rank": "NK", "name": "KESAR SINGH", "regiment": "PUNJAB"},
  {"sno": 103, "rank": "2LT", "name": "HARDIP SINGH GUMAN", "regiment": "PUNJAB"},
  {"sno": 104, "rank": "NK", "name": "GOVIND RAJ", "regiment": "ENGINEERS"},
  {"sno": 105, "rank": "JEM", "name": "BAGH SINGH", "regiment": "RAJ RIF"},
  {"sno": 106, "rank": "MAJ", "name": "PRITAM SINGH GREWAL", "regiment": "8 GORKHA RIF"},
  {"sno": 107, "rank": "RFN", "name": "SURBIR", "regiment": "ASSAM RIF"},
  {"sno": 108, "rank": "L/NK", "name": "SAL BAHADUR LIMBU", "regiment": "ASSAM RIF"},
  {"sno": 109, "rank": "SAPPER", "name": "JIBAKUMAR PATHAK", "regiment": "ASSAM RIF"},
  {"sno": 110, "rank": "JEM", "name": "NEKI RAM", "regiment": "ASSAM RIF"},
  {"sno": 111, "rank": "RFN", "name": "KHEM SINGH", "regiment": "ASSAM RIF"},
  {"sno": 112, "rank": "L/NK", "name": "MUDABAR CHIDAMBARAM", "regiment": "ENGINEERS"},
  {"sno": 113, "rank": "SAPPER", "name": "GIAN SINGH", "regiment": "ENGINEERS"},
  {"sno": 114, "rank": "SEP", "name": "HARBANS SINGH", "regiment": "SIKH"},
  {"sno": 115, "rank": "SHRI", "name": "AMRIT LAL", "regiment": "NCC"},
  {"sno": 116, "rank": "NK", "name": "ATRA BAHADUR RAI", "regiment": "ASSAM"},
  {"sno": 117, "rank": "JEM", "name": "KISHAN LAL", "regiment": "EME"},
  {"sno": 118, "rank": "CAPT", "name": "MAHENDER SINGH", "regiment": "RAJRIF"},
  {"sno": 119, "rank": "SUB", "name": "SHER SINGH", "regiment": "RAJRIF"},
  {"sno": 120, "rank": "HAV", "name": "DAMAR BAHADUR", "regiment": "ASSAM"},
  {"sno": 121, "rank": "2LT", "name": "JP JOSHI", "regiment": "ARTILLERY"},
  {"sno": 122, "rank": "SGL", "name": "PRATAP SINGH", "regiment": "NCC"},
  {"sno": 123, "rank": "NB SUB", "name": "LAHORA SINGH", "regiment": "ENGINEERS"},
  {"sno": 124, "rank": "CIV DVR", "name": "KANSHI RAM", "regiment": "ASC"},
  {"sno": 125, "rank": "CIV DVR", "name": "SHRI KANWAL NAIN", "regiment": "INFANTRY BDE"},
  {"sno": 126, "rank": "CIV DVR", "name": "SHRI ROSHAN LAL", "regiment": "N/A"},
  {"sno": 127, "rank": "MAJ", "name": "ASHOK ANAND", "regiment": "BIHAR"},
  {"sno": 128, "rank": "CAPT", "name": "NARENDRA NATH SHARMA", "regiment": "AMC"},
  {"sno": 129, "rank": "NB SUB", "name": "BAHUDHAN GURUNG", "regiment": "ASSAM RIF"},
  {"sno": 130, "rank": "NB SUB", "name": "DAN BAHADUR GURUNG", "regiment": "4 GORKHA RIF"},
  {"sno": 131, "rank": "CAPT", "name": "DIWAN SINGH", "regiment": "ASSAMRIF"},
  {"sno": 132, "rank": "SUB", "name": "MOHAN LAL", "regiment": "KUMAON"},
  {"sno": 133, "rank": "SUB", "name": "AMAR BAHADUR RANA", "regiment": "ASSAM RIF"},
  {"sno": 134, "rank": "HAV", "name": "SEWA SINGH", "regiment": "JAK RIF"},
  {"sno": 135, "rank": "L HAV", "name": "PIARA SINGH", "regiment": "SIKH"},
  {"sno": 136, "rank": "NK", "name": "ARABINDER CHOUDHARY", "regiment": "ASSAM RIF"},
  {"sno": 137, "rank": "L/NK", "name": "TEK BAHADUR MALLA", "regiment": "ASSAM RIF"},
  {"sno": 138, "rank": "RFN", "name": "HARKA BAHADUR DAMAI", "regiment": "ASSAM RIF"},
  {"sno": 139, "rank": "RFN", "name": "BIR BAHADUR GURUNG", "regiment": "ASSAM RIF"},
  {"sno": 140, "rank": "SEP", "name": "SURJIT SINGH", "regiment": "SIKH"},
  {"sno": 141, "rank": "2LT", "name": "PRATAP RANA", "regiment": "BIHAR"},
  {"sno": 142, "rank": "HAV", "name": "HORKA BAHADUR THAPA", "regiment": "ASSAM RIF"},
  {"sno": 143, "rank": "NB SUB", "name": "MAN SINGH", "regiment": "JAT"},
  {"sno": 144, "rank": "NK", "name": "URKA DUTTA CHHETRI", "regiment": "ASSAM RIF"},
  {"sno": 145, "rank": "NK", "name": "JATIA RAM", "regiment": "GRENADIERS"},
  {"sno": 146, "rank": "SEP", "name": "RAJI", "regiment": "MADRAS"},
  {"sno": 147, "rank": "GNR", "name": "KESHAV DAYAL", "regiment": "ARTILLERY"},
  {"sno": 148, "rank": "MAJ", "name": "KULDIP SINGH", "regiment": "DOGRA"},
  {"sno": 149, "rank": "CAPT", "name": "SAUMITRA RAY", "regiment": "RAJPUT"},
  {"sno": 150, "rank": "L/HAV", "name": "MUKHTIAR SINGH", "regiment": "ENGINEERS"},
  {"sno": 151, "rank": "L/NK", "name": "PREM RAM", "regiment": "AMC"},
  {"sno": 152, "rank": "RFN", "name": "JAGAT BAHADUR CHHETRI", "regiment": "ASSAM RIF"},
  {"sno": 153, "rank": "RFN", "name": "BHIM PRASAD JAISHI", "regiment": "ASSAM RIF"},
  {"sno": 154, "rank": "AEE", "name": "RAMESHWAR PRASAD", "regiment": "N/A"},
  {"sno": 155, "rank": "MAJ", "name": "MAN MOHAN SINGH BAJAJ", "regiment": "11 GORKHA RIF"},
  {"sno": 156, "rank": "MAJ", "name": "CHAND NARAYEN KAUL", "regiment": "SIKH"},
  {"sno": 157, "rank": "CAPT", "name": "MOHINDER SINGH", "regiment": "KUMAON"},
  {"sno": 158, "rank": "CAPT", "name": "YOGESHWAR BAHL", "regiment": "1 GORKHA RIF"},
  {"sno": 159, "rank": "CAPT", "name": "MANJINDER SINGH", "regiment": "JAT"}
];


  
  
  
const tableStyle = {
    width: '100%',
    borderCollapse: 'collapse',
  };
  
  const headerStyle = {
    backgroundColor: '#b71c1c',
    color: 'white',
    padding: '12px',
    textAlign: 'left',
  };
  
  const cellStyle = {
    border: '1px solid #b71c1c',
    padding: '8px',
    textAlign: 'left',
  };
  
  const headingStyle = {
    color: '#ffffff',
    textAlign: 'center',
  };
  
  const ShauryaChakraList = () => {
    return (
      <div>
        <h2 style={headingStyle}>Shaurya Chakra Awardees</h2><br />
        <table style={tableStyle}>
          <thead>
            <tr>
              <th style={headerStyle}>SNO</th>
              <th style={headerStyle}>RANK</th>
              <th style={headerStyle}>NAME</th>
              <th style={headerStyle}>REGIMENT</th>
            </tr>
          </thead>
          <tbody>
            {data.map((item, index) => (
              <tr key={index}>
                <td style={cellStyle}>{item.sno}</td>
                <td style={cellStyle}>{item.rank}</td>
                <td style={cellStyle}>{item.name}</td>
                <td style={cellStyle}>{item.regiment}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  };
  
  export default ShauryaChakraList;
  
  
