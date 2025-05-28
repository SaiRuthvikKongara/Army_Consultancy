import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { getLeaderById } from '../services/api';
import '../styles/LeaderDetail.css';

const LeaderDetail = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const [leader, setLeader] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchLeader = async () => {
            try {
                const data = await getLeaderById(id);
                setLeader(data);
                setLoading(false);
            } catch (err) {
                setError('Failed to fetch leader details');
                setLoading(false);
            }
        };

        fetchLeader();
    }, [id]);

    if (loading) return <div className="loading">Loading...</div>;
    if (error) return <div className="error">{error}</div>;
    if (!leader) return <div className="error">Leader not found</div>;

    return (
        <div className="leader-detail-container">
            <button className="back-button" onClick={() => navigate('/leaders')}>
                ← Back to Leaders
            </button>
            <div className="leader-detail-content">
                <div className="leader-image-container">
                    <img 
                        src={`http://localhost:5000${leader.image}`} 
                        alt={leader.name} 
                        className="leader-detail-image"
                    />
                </div>
                <div className="leader-detail-info">
                    <h1>{leader.name}</h1>
                    <p className="rank">{leader.rank}</p>
                    <p className="position">{leader.position}</p>
                    <p className="tenure">{leader.tenure}</p>
                    <div className="achievements">
                        <h2>Achievements</h2>
                        <ul>
                            {leader.achievements.map((achievement, index) => (
                                <li key={index}>{achievement}</li>
                            ))}
                        </ul>
                    </div>
                    <div className="details">
                        <h2>Biography</h2>
                        <p>{leader.details}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LeaderDetail; 