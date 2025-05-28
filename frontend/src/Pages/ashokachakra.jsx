import React from 'react';

const AshokaChakraList = () => {
  const awardees = [
    { sno: 1, pno: 1870, rank: 'HAV', name: 'BACHITTAR SINGH', occa: 1952, remarks: 'POSTHUMOUS' },
    { sno: 2, pno: 10341, rank: 'NK', name: 'NARBAHADUR THAPA', occa: 1952, remarks: '' },
    { sno: 3, pno: 15103, rank: 'L/NK', name: 'SUNDAR SINGH', occa: 1956, remarks: '' },
    { sno: 4, pno: 'IC-3472', rank: 'LT COL', name: 'JR CHITNIS', occa: 1957, remarks: 'POSTHUMOUS' },
    { sno: 5, pno: 'IC-7415', rank: '2/LT', name: 'PM RAMAN', occa: 1957, remarks: 'POSTHUMOUS' },
    { sno: 6, pno: 18576, rank: 'HAV', name: 'JOGINDER SINGH', occa: 1957, remarks: 'POSTHUMOUS' },
    { sno: 7, pno: 'IC-5034', rank: 'CAPT', name: 'ERIC JAMES TUCKER', occa: 1958, remarks: 'POSTHUMOUS' },
    { sno: 8, pno: 'IC-5261', rank: 'CAPT', name: 'MAN BAHADUR RAI, MC, IDSM', occa: 1962, remarks: '' },
    { sno: 9, pno: 30305, rank: 'SUB MAJ', name: 'KHARKA BAHADUR LINIBU, MC', occa: 1962, remarks: 'POSTHUMOUS' },
    { sno: 10, pno: 'EC-53763', rank: 'CAPT', name: 'JAS RAM SINGH', occa: 1969, remarks: '' },
    { sno: 11, pno: 'IC-17696', rank: 'CAPT', name: 'UMMED SINGH MAHRA', occa: 1972, remarks: 'POSTHUMOUS' },
    { sno: 12, pno: 'JC-47692', rank: 'NB SUB', name: 'GURNAM SINGH', occa: 1974, remarks: 'POSTHUMOUS' },
    { sno: 13, pno: 'SS-30122', rank: '2/LT', name: 'CYRUS ADDIE PITHAWALLA', occa: 1981, remarks: '' },
    { sno: 14, pno: 'IC-22479', rank: 'MAJ', name: 'BHUKANT MISRA', occa: 1985, remarks: 'POSTHUMOUS' },
    { sno: 15, pno: 'IC-37068', rank: 'CAPT', name: 'JASBIR SINGH RAINA', occa: 1985, remarks: '' },
    { sno: 16, pno: 'IC-39994', rank: 'LT', name: 'RAM PRAKASH ROPERIA', occa: 1985, remarks: 'POSTHUMOUS' },
    { sno: 17, pno: 4050561, rank: 'NK', name: 'BHAWANI DATT JOSHI', occa: 1985, remarks: 'POSTHUMOUS' },
    { sno: 18, pno: 4167546, rank: 'NK', name: 'NIRBHAY SINGH', occa: 1985, remarks: 'POSTHUMOUS' },
    { sno: 19, pno: 9920311, rank: 'L/HAV', name: 'CHHERING MUTUP', occa: 1985, remarks: '' },
    { sno: 20, pno: 'IC-40956', rank: 'CAPT', name: 'SANDEEP SANKHLA', occa: 1992, remarks: 'POSTHUMOUS' },
    { sno: 21, pno: 'IC-51242', rank: '2/LT', name: 'RAKESH SINGH', occa: 1993, remarks: 'POSTHUMOUS' },
    { sno: 22, pno: 'IC-25070', rank: 'COL', name: 'N JAYACHANDRAM NAIR, KC', occa: 1994, remarks: 'POSTHUMOUS' },
    { sno: 23, pno: 'IC-36177', rank: 'LT COL', name: 'HARSH UDAY SINGH GAUR', occa: 1995, remarks: 'POSTHUMOUS' },
    { sno: 24, pno: 'JC-216611', rank: 'NB SUB', name: 'SUJJAN SINGH', occa: 1995, remarks: 'POSTHUMOUS' },
    { sno: 25, pno: 'IC-50443', rank: 'MAJ', name: 'RAJIV KUMAR JOON, SC', occa: 1995, remarks: 'POSTHUMOUS' },
    { sno: 26, pno: 'IC-48171', rank: 'CAPT', name: 'ARUN KUMAR JASROTIA, SM', occa: 1996, remarks: 'POSTHUMOUS' },
    { sno: 27, pno: 'IC-34425', rank: 'LT COL', name: 'SHANTI SWRUP RANA', occa: 1997, remarks: 'POSTHUMOUS' },
    { sno: 28, pno: 'IC-53987', rank: '2/LT', name: 'PUNEET NATH DATT', occa: 1997, remarks: 'POSTHUMOUS' },
    { sno: 29, pno: 'IC-47623', rank: 'MAJ', name: 'SUDHIR KUMAR, SM', occa: 2000, remarks: 'POSTHUMOUS' },
    { sno: 30, pno: 4183850, rank: 'NK', name: 'RAMBEER SINGH TOMAR', occa: 2002, remarks: 'POSTHUMOUS' },
    { sno: 31, pno: 'JC-498232', rank: 'SUB', name: 'SURINDER SINGH', occa: 2002, remarks: 'POSTHUMOUS' },
    { sno: 32, pno: 9423984, rank: 'PTR', name: 'SANJOG CHETRI', occa: 2003, remarks: 'POSTHUMOUS' },
    { sno: 33, pno: 'IC-61417', rank: 'LT', name: 'TRIVENI SINGH', occa: 2004, remarks: 'POSTHUMOUS' },
    { sno: 34, pno: 'IC-62541', rank: 'CAPT', name: 'HARSHAN R', occa: 2007, remarks: 'POSTHUMOUS' },
    { sno: 35, pno: 'JC-593527', rank: 'NB SUB', name: 'CHUNI LAL, VRC, SM', occa: 2007, remarks: 'POSTHUMOUS' },
    { sno: 36, pno: 'IC-48714', rank: 'COL', name: 'VASANTH VENUGOPAL', occa: 2007, remarks: 'POSTHUMOUS' },
    { sno: 37, pno: 'IC-59263', rank: 'MAJ', name: 'DINESH RAGHU RAMAN', occa: 2008, remarks: 'POSTHUMOUS' },
    { sno: 38, pno: 'IC-45618', rank: 'COL', name: 'JOJAN THOMAS', occa: 2009, remarks: 'POSTHUMOUS' },
    { sno: 39, pno: 'IC-58660', rank: 'MAJ', name: 'SANDEEP UNNIKRISHNAN', occa: 2009, remarks: 'POSTHUMOUS' },
    { sno: 40, pno: 4073611, rank: 'HAV', name: 'GAJENDER SINGH', occa: 2009, remarks: 'POSTHUMOUS' },
    { sno: 41, pno: 13621503, rank: 'HAV', name: 'BAHADUR SINGH BOHRA', occa: 2009, remarks: 'POSTHUMOUS' },
    { sno: 42, pno: 'IC-59066', rank: 'MAJ', name: 'MOHIT SHARMA, SM, PARA', occa: 2009, remarks: 'POSTHUMOUS' },
    { sno: 43, pno: 'SS-40576', rank: 'MAJ', name: 'D SREERAM KUMAR', occa: 2009, remarks: '' },
    { sno: 44, pno: 2890262, rank: 'HAV', name: 'RAJESH KUMAR', occa: 2010, remarks: 'POSTHUMOUS' },
    { sno: 45, pno: 'MR-08609', rank: 'MAJ', name: 'LAISHRAM JYOTIN SINGH', occa: 2010, remarks: 'POSTHUMOUS' },
    { sno: 46, pno: 'SS-44448A', rank: 'LT', name: 'NAVDEEP SINGH', occa: 2012, remarks: 'POSTHUMOUS' },
    { sno: 47, pno: 'IC-72861M', rank: 'MAJ', name: 'MUKUND VARADARAJAN', occa: 2014, remarks: 'POSTHUMOUS' },
    { sno: 48, pno: '16012114A', rank: 'NAIK', name: 'NEERAJ KUMAR SINGH', occa: 2014, remarks: 'POSTHUMOUS' },
    { sno: 49, pno: '13625566W', rank: 'L/NK', name: 'MOHAN NATH GOSWAMI', occa: 2016, remarks: 'POSTHUMOUS' },
    { sno: 50, pno: '13622536N', rank: 'HAV', name: 'HANGPAN DADA, ASSAM', occa: 2016, remarks: 'POSTHUMOUS' },
    { sno: 51, pno: '12974389N', rank: 'L/NK', name: 'NAZIR AHMAD WANI, SM', occa: 2019, remarks: 'POSTHUMOUS' }
  ];

  return (
    <div>
      <h2 style={{ color: 'white' }}><center>Ashoka Chakra Awardees</center></h2><br />
      <table border="1" cellPadding="10">
        <thead>
          <tr>
            <th>SNO</th>
            <th>PNO</th>
            <th>RANK</th>
            <th>NAME</th>
            <th>OCCA</th>
            <th>REMARKS</th>
          </tr>
        </thead>
        <tbody>
          {awardees.map((awardee, index) => (
            <tr key={index}>
              <td>{awardee.sno}</td>
              <td>{awardee.pno}</td>
              <td>{awardee.rank}</td>
              <td>{awardee.name}</td>
              <td>{awardee.occa}</td>
              <td>{awardee.remarks}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AshokaChakraList;
