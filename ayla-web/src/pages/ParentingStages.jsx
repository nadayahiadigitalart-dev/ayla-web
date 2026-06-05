import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './ParentingStages.css';


import ph from '../assets/toddler.png';
import berryWaveShape from '../assets/waveberry.png'; 
import Button from '../components/Button';
import toddlerMainImg from '../assets/Rectangle.png'; 

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

    return (
        <div className="parenting_layout_container">
           
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
                {/* <button className="explore_stage_btn">Explore stage</button> */}
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

                    {/* Mid-Grid Content Frame */}
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
        </div>
    );
};

export default ParentingStages;