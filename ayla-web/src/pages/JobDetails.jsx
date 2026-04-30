import React, { useEffect, useState } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import { Supabase } from '../Supabase';

import { Link } from 'react-router-dom';


import './JobDetails.css';
import Footer from '../components/Footer';

const JobDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [job, setJob] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchJob = async () => {
      const { data, error } = await Supabase
        .from('Careers') 
        .select('*')
        .eq('id', id)
        .single();

      if (error) {
        console.error('Error fetching job:', error);
        navigate('/career');
      } else {
        setJob(data);
      }
      setLoading(false);
    };

    fetchJob();
  }, [id, navigate]);

  if (loading) return <div className="loader_container">Loading details...</div>;

  return (<>
    <div className="details_page_container">
      <div className="content_wrapper">
        <button onClick={() => navigate(-1)} className="back_button">← Back</button>
        
        <h1 className="job_main_title">{job.jobname}</h1>
        
        <section className="info_section">
          <h3 className="sub_heading">About the Role</h3>
          <p className="description_text">
            {job.Details || "Join our team to help build impactful solutions for families."}
          </p>
        </section>

        <section className="info_section">
          <h3 className="sub_heading">Role Details</h3>
          <ul className="details_list">
            <li><strong>Type:</strong> {job.type}</li>
            <li><strong>Location:</strong> {job.location}</li>
          </ul>
        </section>

        <section className="why_join_section">
          <h3 className="sub_heading">Why Join Ayla?</h3>
          <p className='f'>Work on a meaningful product that supports mothers and families. Be part of a creative, user-focused team.</p>
          {/* <p className="arabic_text">فرصة لتصميم تجربة لها تأثير حقيقي في حياة الناس.</p> */}
        </section>
<Link to={`/jobform?job=${job.jobname}`} className="apply_btn">
        <button className="apply_now_btn">Apply Now</button>
</Link>
      </div>
    </div>
    <Footer />
    </>
  );
};

export default JobDetails;