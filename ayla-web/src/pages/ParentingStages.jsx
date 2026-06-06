import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './ParentingStages.css';


import ph from '../assets/toddler.png';
import ph1 from '../assets/adhd.png';
import ph2 from '../assets/specialneed.png';
import ph3 from '../assets/learnindis.png';

import berryWaveShape from '../assets/waveberry.png'; 
import Button from '../components/Button';
import toddlerMainImg from '../assets/Rectangle.png'; 
import Header from '../components/Header';

import Footer from '../components/Footer';


const STAGES_DATA = [
    { id: 'baby', label: 'Baby', path: '/baby' },
    { id: 'toddler', label: 'Toddler', path: '/parenting' },
    { id: 'preschool', label: 'Preschool', path: '/baby' },
    { id: 'school-age', label: 'School Age', path: '/baby' },
    { id: 'teenagers', label: 'Teenagers', path: '/baby' }
];

const ParentingStages = () => {
    const navigate = useNavigate();
    const [currentStage, setCurrentStage] = useState('toddler');

    const handleMilestoneClick = (stage) => {
        setCurrentStage(stage.id);
        navigate(stage.path);
    };

    return (<>
        <div className="parenting_layout_container">
        <Header />
           
            <div className="base_hero_layer">
                <img src={ph} alt="Background Kid Frame" className="layer_media_asset" />
            </div>
            
            <div className="berry_wave_layer">
                <img src={berryWaveShape} alt="Wave Vector Mask" className="layer_media_asset" />
            </div>

            <section className="textt">
            
            <header className="hero_text_header">
                <p className="main_stage_title">Understanding Your<br />Toddler's World</p>
                <p className="main_stage_subtitle">
                    Toddlers are curious explorers learning independence, emotions, and communication. 
                    Understanding how they think and feel helps you guide them with patience and confidence.
                </p>
               
                <Button bu="Explore stage"/>
            </header>

             <nav className="arc_timeline_wrapper">

                <div className="col_time">
              
                <div className="timeline_helper_tag">Click to experience your child age</div>
                {/* <br></br> */}
                {/* <p className="text_f">Click to experience your child age</p> */}
                
                <div className="arc_timeline_row">
                    {STAGES_DATA.map((stage) => (
                        <div 
                            key={stage.id} 
                            className={`timeline_node_group stage_${stage.id} ${currentStage === stage.id ? 'active' : ''}`}
                            onClick={() => handleMilestoneClick(stage)}
                        >
                            <span className="node_label">{stage.label}</span>
                            <div className="node_clickable_dot">
                                <div className="inner_core_dot" />
                            </div>
                        </div>
                    ))}
                </div>
                </div>
            </nav>

            </section>
            
            <main className="stage_insight_section">
                <h2 className="section_headline">Toddlers are discovering the<br />world for the first time.</h2>
                <p className="section_subtext">
                    Every drawer, toy, spoon, or shoe is something exciting to explore. They want to touch things, 
                    open things, and see what happens, so you may notice your toddler:
                </p>

                <div className="grid_showcase_layout">
                    
                    <div className="metric_cards_column left_col">
                        <div className="insight_card Box3">
                            <span className="card_index_num">3</span>
                            <p>Think in very simple cause-and-effect ways</p>
                        </div>
                        <div className="insight_card Box4">
                            <span className="card_index_num">4</span>
                            <p>Have limited ability to understand rules or consequences</p>
                        </div>
                    </div>

                    
                    <div className="center_image_frame">
                        <img src={toddlerMainImg} alt="Toddler playing" />
                    </div>

                    
                    <div className="metric_cards_column right_col">
                        <div className="insight_card Box1">
                            <span className="card_index_num">1</span>
                            <p>Learn through touching, testing, and repeating actions</p>
                        </div>
                        <div className="insight_card Box2">
                            <span className="card_index_num">2</span>
                            <p>Begin developing independence</p>
                        </div>
                    </div>
                </div>
            </main>

          
<section className="body_brain_section">
   
    {/* <div className="section_bg_layer wave_pink_underlay">
        <img src={berryWaveShape} alt="Pink section blend shape" className="layer_media_asset" />
    </div> */}

  
    <div className="section_foreground_content centered_development_layout">
        <div className="development_text_card">
            <h3 className="card_main_heading">Body & Brain Development</h3>
            <p className="card_intro_phrase">During the toddler years, children develop rapidly:</p>
            
            <h4 className="card_sub_heading">Physical development:</h4>
            <ul className="development_bullet_list">
                <li>Walking, running, climbing</li>
                <li>Improved coordination</li>
                <li>Learning to feed themselves</li>
            </ul>

            <h4 className="card_sub_heading">Brain development:</h4>
            <ul className="development_bullet_list">
                <li>Vocabulary grows quickly</li>
                <li>Beginning to form short sentences</li>
                <li>Understanding simple instructions</li>
            </ul>
            
            <p className="card_footer_note">
                Their brain is learning how to control emotions and impulses, but this skill is still developing.
            </p>
        </div>
    </div>
</section>



<section className="parents_awareness_section">
    <div className="section_foreground_content split_awareness_layout">
        <div className="awareness_left_block">
            <h3 className="awareness_headline">What Parents<br />Should Be Aware Of</h3>
            <p className="awareness_subtext">
                Toddlers learn more from how you react than from what you say.
            </p>
        </div>
        <div className="awareness_right_block">
            <h4 className="focus_list_title">Important things to focus on during this stage:</h4>
            <ul className="focus_bullet_list">
                <li>Encourage safe exploration</li>
                <li>Build consistent routines</li>
                <li>Support language development</li>
                <li>Respond calmly during emotional moments</li>
                <li>Avoid harsh punishment and focus on guidance</li>
            </ul>
        </div>
    </div>
</section>



<section className="special_needs_section">
   
    <div className="section_bg_layer organic_shape_underlay">
      
        <img src={berryWaveShape} alt="Organic background vector layout decoration" className="layer_media_asset mirror_flip" />
    </div>

    <div className="section_foreground_content text_center_align">
        <h3 className="special_headline">Special Development & Needs</h3>
        <p className="special_subtitle">
            Every child develops differently. Some children may need additional understanding and support.
        </p>

        
        <div className="special_cards_grid">
            <div className="condition_feature_card">
                <div className="card_thumbnail_placeholder">
                    <img src={ph1} alt="ADHD support interface screenshot" />
                </div>
                <div className="condition_card_body">
                    <h5>ADHD</h5>
                    <p>Understanding attention challenges and supporting active minds.</p>
                    <button className="card_arrow_action" type="button">➔</button>
                </div>
            </div>

            <div className="condition_feature_card">
                <div className="card_thumbnail_placeholder">
                    <img src={ph2} alt="Special needs care guidance framework" />
                </div>
                <div className="condition_card_body">
                    <h5>Special Needs Care</h5>
                    <p>Guidance for supporting children who require additional care.</p>
                    <button className="card_arrow_action" type="button">➔</button>
                </div>
            </div>

            <div className="condition_feature_card">
                <div className="card_thumbnail_placeholder">
                    <img src={ph3} alt="Learning difficulties assistance panel" />
                </div>
                <div className="condition_card_body">
                    <h5>Learning Difficulties</h5>
                    <p>Helping children overcome educational challenges.</p>
                    <button className="card_arrow_action" type="button">➔</button>
                </div>
            </div>
        </div>
    </div>
</section>




        </div>

        <Footer />
    </>
    );
};

export default ParentingStages;