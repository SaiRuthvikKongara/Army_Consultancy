import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  text-align: center;
`;

const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  margin: 0 auto;
`;

const TableHeader = styled.th`
  padding: 12px;
  text-align: left;
  background-color: #f4f4f4;
`;

const TableData = styled.td`
  padding: 12px;
  text-align: left;
  border: 1px solid #ddd;
`;

const ParamVirChakraList = () => {
  const awardees = [
    { name: 'Major Somnath Sharma', regiment: '4th Battalion, Kumaon Regiment', date: '3 Nov, 1947, Posthumous' },
    { name: 'Second Lieutenant Rama Raghoba Rane', regiment: 'Bombay Engineers', date: '8, April, 1948' },
    { name: 'Naik Jadu Nath Singh', regiment: '1st Battalion, Rajput Regiment', date: '6 February, 1948, Posthumous' },
    { name: 'Company Havildar Major Piru Singh Shekhawat', regiment: '6th Battalion, Rajputana Rifles', date: '18 July, 1948, Posthumous' },
    { name: 'Lance Naik Karam Singh', regiment: 'Sikh Regiment', date: '13 October, 1948' },
    { name: 'Captain Gurbachan Singh Salaria', regiment: '3/1 Gorkha Rifles', date: '5 December, 1961' },
    { name: 'Major Dhan Singh Thapa', regiment: '1st Battalion, 8th Gorkha Rifles', date: '21 October, 1962' },
    { name: 'Subedar Joginder Singh', regiment: '1st Battalion, Sikh Regiment', date: '23 October, 1962, Posthumous' },
    { name: 'Major Shaitan Singh', regiment: '13th Battalion, Kumaon Regiment', date: '18 November, 1962, Posthumous' },
    { name: 'Company Quarter Master Havildar Abdul Hamid', regiment: '4th Battalion, The Grenadiers', date: '10 September, 1965, Posthumous' },
    { name: 'Lieutenant-Colonel Ardeshir Burzorji Tarapore', regiment: '17th Poona Horse', date: '11 September, 1965, Posthumous' },
    { name: 'Lance Naik Albert Ekka', regiment: '14th Battalion, Brigade of the Guards', date: '4 December, 1971, Posthumous' },
    { name: 'Flying Officer Nirmal Jit Singh Sekhon', regiment: 'No.18 Squadron, Indian Air Force', date: '14 December, 1971, Posthumous' },
    { name: '2/Lieutenant Arun Khetarpal', regiment: '17 Poona Horse', date: '16 December, 1971, Posthumous' },
    { name: 'Major Hoshiar Singh', regiment: '3rd Battalion, The Grenadiers Regiment', date: '17 December, 1971' },
    { name: 'Naib Subedar Bana Singh', regiment: 'Jammu and Kashmir Light Infantry', date: '23 May, 1987' },
    { name: 'Major Ramaswamy Parameshwaran', regiment: '8th Battalion, Mahar Regiment', date: '25 November, 1987, Posthumous' },
    { name: 'Captain Manoj Kumar Pandey', regiment: '1st Battalion, 11th Gorkha Rifles', date: '3 July, 1999, Posthumous' },
    { name: 'Grenadier Yogendra Singh Yadav', regiment: '18th Battalion, The Grenadiers', date: '4 July, 1999' },
    { name: 'Rifleman Sanjay Kumar', regiment: '13th Battalion, Jammu & Kashmir Rifles', date: '4 July, 1999' },
    { name: 'Captain Vikram Batra', regiment: '13th Battalion, Jammu & Kashmir Rifles', date: '7 July, 1999, Posthumous' },
  ];

  return (
    <Container>
<h2 style={{ color: 'white' }}>Param Vir Chakra Awardees</h2>
<br />
      <Table>
        <thead>
          <tr>
            <TableHeader>Name</TableHeader>
            <TableHeader>Regiment</TableHeader>
            <TableHeader>Date</TableHeader>
          </tr>
        </thead>
        <tbody>
          {awardees.map((awardee, index) => (
            <tr key={index}>
              <TableData>{awardee.name}</TableData>
              <TableData>{awardee.regiment}</TableData>
              <TableData>{awardee.date}</TableData>
            </tr>
          ))}
        </tbody>
      </Table>
    </Container>
  );
};

export default ParamVirChakraList;
