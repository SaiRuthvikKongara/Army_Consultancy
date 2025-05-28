import React, { useState, useEffect } from 'react';
import { getLeaders } from '../services/api';
import { Link } from 'react-router-dom';
import '../styles/Leaders.css';

const Leaders = () => {
    const [leaders, setLeaders] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchLeaders = async () => {
            try {
                const data = await getLeaders();
                setLeaders(data);
                setLoading(false);
            } catch (err) {
                setError('Failed to fetch leaders data');
                setLoading(false);
            }
        };

        fetchLeaders();
    }, []);

    if (loading) return <div className="loading">Loading...</div>;
    if (error) return <div className="error">{error}</div>;

    return (
        <div className="leaders-container">
            <h1>Indian Army Chiefs</h1>
            <div className="leaders-grid">
                {leaders.map((leader) => (
                    <div key={leader._id} className="leader-card">
                        <img 
                            src={`http://localhost:5000${leader.image}`} 
                            alt={leader.name} 
                            className="leader-image"
                        />
                        <div className="leader-info">
                            <h2>{leader.name}</h2>
                            <p className="rank">{leader.rank}</p>
                            <p className="tenure">{leader.tenure}</p>
                            <p className="bio">{leader.bio}</p>
                            <Link to={`/leaders/${leader._id}`} className="read-more">
                                Read More
                            </Link>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Leaders; 