import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { supabase } from './supabaseClient';
import './JobForm.css';

// Import your images/shapes here
import side_shape_left from './assets/shape_left.png'; 
import side_shape_right from './assets/shape_right.png';

const JobForm = () => {
    const [searchParams] = useSearchParams();
    const preselectedJob = searchParams.get('job');

    const [positions, setPositions] = useState([]);
    const [formData, setFormData] = useState({
        full_name: '',
        phone_number: '',
        email: '',
        position: preselectedJob || '',
        linkedin_profile: '',
        city_area: '',
        nationality: '',
        cv_url: '' // For the file path
    });

    const [isSubmitting, setIsSubmitting] = useState(false);

    // Fetch available jobs for the dropdown
    useEffect(() => {
        const fetchPositions = async () => {
            const { data, error } = await supabase
                .from('Careers')
                .select('jobname')
                .eq('is_open', true);
            
            if (data) setPositions(data);
            if (error) console.error("Error fetching positions:", error);
        };
        fetchPositions();
    }, []);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);

        const { error } = await supabase
            .from('apply_form_responses')
            .insert([formData]);

        if (error) {
            alert("Error submitting application: " + error.message);
        } else {
            alert("Application submitted successfully!");
            // Reset form or navigate away
        }
        setIsSubmitting(false);
    };

    return (
        <div className="job_form_row_container">
            {/* Left Image Column */}
            <div className="side_img_column">
                <img src={side_shape_left} alt="" className="floating_shape" />
            </div>

            {/* Middle Form Column */}
            <div className="form_main_column">
                <div className="form_header_text">
                    <h1 className="form_title">Apply to Join Ayla</h1>
                    <p>Thank you for your interest in working with Ayla!</p>
                    <p className="sub_text">Please complete the form below. Our team will review your application and contact you if shortlisted.</p>
                </div>

                <form className="ayla_job_form" onSubmit={handleSubmit}>
                    <div className="form_row">
                        <div className="input_group">
                            <label>Full Name</label>
                            <input type="text" name="full_name" onChange={handleChange} required />
                        </div>
                        <div className="input_group">
                            <label>Phone Number</label>
                            <input type="text" name="phone_number" onChange={handleChange} required />
                        </div>
                    </div>

                    <div className="input_group full_width">
                        <label>Email*</label>
                        <input type="email" name="email" onChange={handleChange} required />
                    </div>

                    <div className="input_group full_width">
                        <label>Position*</label>
                        <select 
                            name="position" 
                            value={formData.position} 
                            onChange={handleChange} 
                            required
                        >
                            <option value="">Select a position</option>
                            {positions.map((pos, idx) => (
                                <option key={idx} value={pos.jobname}>{pos.jobname}</option>
                            ))}
                        </select>
                    </div>

                    <div className="input_group full_width">
                        <label>Linkedin profile*</label>
                        <input type="url" name="linkedin_profile" onChange={handleChange} required />
                    </div>

                    <div className="input_group full_width cv_upload">
                        <label>CV*</label>
                        <div className="file_input_wrapper">
                            <input type="text" placeholder="Upload path or URL" name="cv_url" onChange={handleChange} required />
                            <span className="upload_icon">⏏</span>
                        </div>
                    </div>

                    <div className="form_row">
                        <div className="input_group">
                            <label>City / Area*</label>
                            <input type="text" name="city_area" onChange={handleChange} required />
                        </div>
                        <div className="input_group">
                            <label>Nationality*</label>
                            <input type="text" name="nationality" onChange={handleChange} required />
                        </div>
                    </div>

                    <button type="submit" className="submit_btn" disabled={isSubmitting}>
                        {isSubmitting ? "Submitting..." : "Submit"}
                    </button>
                </form>
            </div>

            {/* Right Image Column */}
            <div className="side_img_column">
                <img src={side_shape_right} alt="" className="floating_shape" />
            </div>
        </div>
    );
};

export default JobForm;