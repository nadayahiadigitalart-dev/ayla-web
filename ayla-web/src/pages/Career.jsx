// import React from 'react';
import React, { useEffect, useState } from 'react';
import './Career.css';

import { Link } from 'react-router-dom';
import { Supabase } from '../Supabase';



import Header from '../components/Header';
import career_bg from '../assets/workwithus_.svg';
import Footer from '../components/Footer';

const Career = () => {
  const caregiverRoles = [
    "Babysitters", "Home helpers", "Housekeepers", "Nannies", "Special care providers"
  ];

  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchJobs = async () => {
      const { data, error } = await Supabase
        .from('Careers') 
        .select('*')
        .eq('is_open', true);

      if (error) {
        console.error('Error fetching jobs:', error);
      } else {
        setJobs(data);
      }
      setLoading(false);
    };

    fetchJobs();
  }, []);

  if (loading) return <div className="loader">Loading opportunities...</div>;

  // const corporateRoles = [
  //   { title: "Backend Developer", type: "Full-time", location: "Remote or on-site" },
  //   { title: "AR Developers", type: "Part-time", location: "On-site" },
  //   { title: "Operations Managers", type: "Full-time", location: "On-site" },
  //   { title: "Partnerships Managers", type: "Full-time", location: "On-site" },
  //   { title: "Parenting experts", type: "Full-time", location: "On-site" },
  //   { title: "Health advisors", type: "Full-time or Part-time", location: "On-site" },
  //   { title: "Community moderators", type: "Full-time", location: "On-site or remote" },
  // ];

  return (<>
  <div >
    <img className='absol_career' src={career_bg} alt='carer_bg'/>

    <Header />
    <div className="career_container">
     
      <section className="hero_section">
        <h1 className="mf">Work with us</h1>
        <p className="pppf">Careers in care, service, and support, built on trust, respect, and impact.</p>
        <p className="hero_description">
          Join a platform that values people, professionalism, and purpose, 
          whether you care for families or build the systems that support them.
        </p>
        <div className="button_group">
          <button className="btn_primary">Apply</button>
          <button className="btn_secondary">View Open Roles</button>
        </div>
      </section>

  
      <section className="care_section">
        <h2 className="mff2">Caregiving Opportunities</h2>
        <p className="hero_description">
          We connect involved caregivers with families who value safety, respect, and professionalism. 
          We don't just fill positions; we build trusted care relationships.
        </p>
        <div className="role_tags_container">
          {caregiverRoles.map((role) => (
            <span key={role} className="role_tag">{role}</span>
          ))}
        </div>
        <button className="btn_primary">Apply as a Caregiver</button>
      </section>

     
      <section className="how_it_works">
        <br></br>
        <br></br>

        <h2 className="mff2">How it works?</h2>
        <br></br>

        <div className="steps_timeline">
          <div className="step_card pink_step">
            {/* <img src='' alt='icon'/> */}
            <span className="check_icon">✓</span>

            <p className='pinf'>Apply</p>
            
            <p className='midf'>Create your profile and submit your information.</p>
          </div>
          <div className="step_card yellow_step">
            <span className="check_icon">✓</span>
            
            <p className='pinf'>Verification</p>

            <p className='midf'>We verify identity, experience, and background.</p>
          </div>
          <div className="step_card green_step">
            <span className="check_icon">✓</span>
            
            <p className='pinf'>Screening</p>

            <p>Interviews, references, and skill checks.</p>
          </div>
          <div className="step_card pink_step">
            <span className="check_icon">✓</span>
            
            <p className='pinf'>Approval</p>

            <p className='midf'>Once approved, your profile becomes visible to families.</p>
          </div>
        </div>
      </section>

     
      <section className="trust_section2">
        <h2 className="mff2">Trust Comes First</h2>
        <p className="pinf">We protect families and caregivers.</p>
        <div className="trust_grid">
          <ul>
            <li className='f'>Identity verification</li>
            <li className='f'>Background checks</li>
            <li className='f'>Profile screening</li>
            <li className='f'>Family feedback system</li>
          </ul>
          <ul>
            <li className='f'>Behavior monitoring</li>
            <li className='f'>Safety protocols</li>
            <li className='f'>Quality standards</li>
            <li className='f'>Continuous evaluation</li>
          </ul>
        </div>
      </section>

    
      <section className="corporate_section">
        <h2 className="section_heading">Build ayla</h2>
        <p>We're building a system that supports families at scale — and we need passionate people to build it with us.</p>
       <div className="job_grid">
          {jobs.map((job) => (
            <Link 
              to={`/jobdetails/${job.id}`} 
              key={job.id} 
              className="job_card_link"
              style={{ textDecoration: 'none', color: 'inherit' }}
            >
              <div className="job_card">
                <h4 className="job_title">{job.jobname}</h4>
                <p className="job_details">
                  • {job.type} <br />
                  • {job.location}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </section>

     
      <section className="footer_cta">
        <h2 className="mff2">Didn't find your role?</h2>
        <p className='f' >We're always open to talent. Send us your CV and we'll reach out when a match opens.</p>
        <button className="btn_primary">Apply Now</button>
      </section>
    </div>
    </div>
    <Footer />
  </>
  );
};

export default Career;