import React, { useState, useEffect } from "react";
import "./UpdatesPage.css";
import { useNavigate } from 'react-router-dom';


const UpdateCard = ({ update }) => {
  const handleViewPDF = () => {
    if (update.pdfUrl) {
      window.open(update.pdfUrl, "_blank"); // Open the PDF in a new tab
    } else {
      alert("No PDF available for this update.");
    }
  };

  return (
    <div className="update-card">
      <h3>{update.title}</h3>
      <p>
        <strong>Date:</strong> {update.date}
      </p>
      <button className="view-pdf-button" onClick={handleViewPDF}>
        View PDF
      </button>
    </div>
  );
};

const UpdatesPage = () => {
  const [updates, setUpdates] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [updatesPerPage] = useState(2); // Display 2 updates per page
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    const data = [
      {
        id: 1,
        title: "MESSAGE OF THE DEFENCE MINISTER ON THE OCCASION OF ARMY DAY 2025",
        date: "15-01-2025",
        pdfUrl: "/pdfs/First.pdf",
      },
      {
        id: 2,
        title: "MESSAGE OF THE PRESIDENT ON THE OCCASION OF ARMY DAY 2025",
        date: "15-01-2025",
        pdfUrl: "/pdfs/Second.pdf",
      },
      {
        id: 3,
        title: "MESSAGE OF THE COAS ON THE OCCASION OF ARMY DAY 2025",
        date: "15-01-2025",
        pdfUrl: "/pdfs/Third.pdf",
      },
      {
        id: 4,
        title: "MESSAGE OF THE CDS ON THE OCCASION OF ARMY DAY 2025",
        date: "15-01-2025",
        pdfUrl: "/pdfs/Fourth.pdf",
      },
      {
        id: 5,
        title: "DGR EX-SERVICEMEN JOB FAIR - GOA ON 17 JANUARY 2025",
        date: "10-01-2025",
        pdfUrl: "/pdfs/Fifth.pdf",
      },
      {
        id: 6,
        title: "CUNPK NEWS LETTER JAN 2025",
        date: "7-01-2025",
        pdfUrl: "/pdfs/Sixth.pdf",
      },
      {
        id: 7,
        title: "REGISTRATION OF VENDORS AS AN APPROVED ASC CONTRACTOR FOR SUPPLY OF FRESH ARTICLES TO THE INDIAN ARMY FM HQ NORTHERN COMMAND",
        date: "19-11-2024",
        pdfUrl: "/pdfs/Seventh.pdf",
      },
      {
        id: 8,
        title: "DGR EX - SERVICEMEN JOB FAIR - KOLKATA ON 29 NOVEMBER 2024",
        date: "19-11-2024",
        pdfUrl: "/pdfs/Eight.pdf",
      },
      {
        id: 9,
        title: "REGISTRATION OF VENDORS AS AN APPROVED ASC CONTRACTOR FOR SUPPLY OF FRESH ARTICLES TO THE INDIAN ARMY FM HQ WESTERN COMMAND",
        date: "19-11-2024",
        pdfUrl: "/pdfs/Ninth.pdf",
      },
      {
        id: 10,
        title: "ADVERTISEMNT UNDER DEPUTATION FOR THE POST OF 188 X SENIOR MATERIAL ASSITANT",
        date: "9-11-2024",
        pdfUrl: "/pdfs/Tenth.pdf",
      },
      {
        id: 11,
        title: "DGR EX - SERVICEMEN JOB FAIR - JAIPUR ON 25 OCT 2024",
        date: "18-10-2024",
        pdfUrl: "/pdfs/Eleventh.pdf",
      },
      {
        id: 12,
        title: "ADVERTISEMENT OF RFP DEVELOPMENT OF CONSTRUCTIVE SIMULATION SOFTWARE FOR INDIAN ARMY",
        date: "10-10-2024",
        pdfUrl: "/pdfs/Twelfth.pdf",
      },
      {
        id: 13,
        title: "REGISTRATION OF VENDORS AS AN APPROVED ASC CONTRACTOR FOR SUPPLY OF FRESH ARTICLES FOR THE ARMY FM HQ SOUTHERN COMMAND",
        date: "27-09-2024",
        pdfUrl: "/pdfs/Thirteenth.pdf",
      },
      {
        id: 14,
        title: "DEFENCE DEPARTMENT QUOTA ON VARIOUS TRAINS",
        date: "10-09-2024",
        pdfUrl: "/pdfs/Fourteenth.pdf",
      },
      {
        id: 15,
        title: "ADVERTISEMENT FOR FILLING UP OF ONE POST OF ADMINISTRATIVE OFFICER AT NATIONAL DEFENCE ACADEMY KHADAKWASLA, PUNE",
        date: "6-09-2024",
        pdfUrl: "/pdfs/Fifteenth.pdf",
      },
      {
        id: 16,
        title: "ADVERTISEMENT FOR CONDUCT OF ONLINE SCREENING TEST FOR TEACHERS IN ARMY PUBLIC SCHOOLS",
        date: "6-09-2024",
        pdfUrl: "/pdfs/Fifteenth.pdf",
      },
      {
        id: 17,
        title: "DGR EX-SERVICEMEN JOB FAIR - RANCHI ON 06 SEP 2024",
        date: "28-08-2024",
        pdfUrl: "/pdfs/Seventeenth.pdf",
      },
      {
        id: 18,
        title: "LIST OF HONOURS AND AWARDS ON THE OCCASION OF INDEPENDENCE DAY 2024",
        date: "14-08-2024",
        pdfUrl: "/pdfs/Eighteenth.pdf",
      },
      {
        id: 19,
        title: "LIST OF PERSONNEL BEING AWARDED COAS AND VCOAS COMMENDATION ON THE OCCASION OF INDEPENDENCE DAY 2024",
        date: "14-08-2024",
        pdfUrl: "/pdfs/Nineteenth.pdf",
      },
      {
        id: 20,
        title: "AWARD OF DGAFMS APPRECIATION CARD TO AFMS PERS AND COMMENDATION TO DEF CIV EMP INDEPENDENCE DAY 2024",
        date: "14-08-2024",
        pdfUrl: "/pdfs/Twenty.pdf",
      },

    ];
    setUpdates(data);
  }, []);

  const filteredUpdates = updates.filter((update) =>
    update.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const indexOfLastUpdate = currentPage * updatesPerPage;
  const indexOfFirstUpdate = indexOfLastUpdate - updatesPerPage;
  const currentUpdates = filteredUpdates.slice(indexOfFirstUpdate, indexOfLastUpdate);

  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(filteredUpdates.length / updatesPerPage); i++) {
    pageNumbers.push(i);
  }

  const handleNextPage = () => {
    if (currentPage < pageNumbers.length) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handlePrevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const handlePageClick = (pageNumber) => {
    setCurrentPage(pageNumber);
  };
      const navigate = useNavigate();

  return (
    <div className="updates-page">
              <div className="home-button-container">
        <button className="home-button" onClick={() => navigate("/")}>
        🏠︎
        </button>
      </div>
      <h1>Indian Army Updates</h1>
      {/* Search Bar */}
      <input
        type="text"
        placeholder="Search updates..."
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        className="search-bar"
      />
      <div className="updates-list">
        {currentUpdates.map((update) => (
          <UpdateCard key={update.id} update={update} />
        ))}
      </div>

      {/* Pagination */}
      <div className="pagination">
        <button className="prev-button" onClick={handlePrevPage}>
          Previous
        </button>
        {pageNumbers.map((number) => (
          <button
            key={number}
            className={`pagination-button ${currentPage === number ? "active" : ""}`}
            onClick={() => handlePageClick(number)}
          >
            {number}
          </button>
        ))}
        <button className="next-button" onClick={handleNextPage}>
          Next
        </button>
      </div>
    </div>
  );
};

export default UpdatesPage;

