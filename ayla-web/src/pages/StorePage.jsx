import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Supabase } from '../Supabase';
import './StorePage.css';

import shop from '../assets/Shop.png';
import Header from '../components/Header';

import arrow from '../assets/arrow.svg';

const StorePage = () => {
    const [products, setProducts] = useState([]);
    const [categories, setCategories] = useState([]); 
    const [activeFilter, setActiveFilter] = useState('');
    const [loading, setLoading] = useState(true);
    const navigate = useNavigate();

    useEffect(() => {
        const fetchStoreData = async () => {
            setLoading(true);
            const { data, error } = await Supabase
                .from('store')
                .select('*');
            
           if (data) {
            setProducts(data);
            
            // 1. Get unique categories
            let uniqueCategories = [...new Set(data.map(item => item.category))];

            // 2. Sort so 'Baby Essentials' is always first
            uniqueCategories.sort((a, b) => {
                if (a === 'Baby Essentials') return -1;
                if (b === 'Baby Essentials') return 1;
                return a.localeCompare(b); // Sort the rest alphabetically
            });

            setCategories(uniqueCategories);
            
            // 3. Set the active filter to the first item (Baby Essentials)
            if (uniqueCategories.length > 0) {
                setActiveFilter(uniqueCategories[0]);
            }
        }
        if (error) console.error("Error fetching store:", error);
        setLoading(false);
    };

    fetchStoreData();
}, []);
    const handleProductClick = (id) => {
        navigate(`/product/${id}`);
    };


    const filteredProducts = products.filter(p => p.category === activeFilter);

    return (<>
      <img className='shop_bg' src={shop} alt='background_aylastore'/>
    <Header/>
        <div className="store_wrapper">
            <header className="store_hero_section">
                <h1 className="store_title">Carefully chosen for modern motherhood</h1>
                
                <div className="filter_container">
                   
                    {categories.map((cat) => (
                        <button 
                            key={cat} 
                            className={`filter_tag ${activeFilter === cat ? 'active' : ''}`}
                            onClick={() => setActiveFilter(cat)}
                        >
                            {cat}
                        </button>
                    ))}
                </div>
            </header>

            <main className="product_grid_section">
                {loading ? (
                    <div className="loading_spinner">Loading Store...</div>
                ) : (
                    <div className="grid_layout">
                        {filteredProducts.map((product) => (
                            <div 
                                key={product.id} 
                                className="store_card" 
                                onClick={() => handleProductClick(product.id)}
                            >
                                <div className="product_img_container">
                                    <img src={product.image_url} alt={product.name} />
                                </div>
                                <div className="store_card_footer">
                                    <div className="footer_text">
                                        <h3>{product.name}</h3>
                                        <p>{product.description}</p>
                                    </div>
                                    <button className="go_btn">→
                                      {/* <img src={arrow} alt='arrow'/> */}
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>
                )}
            </main>

            <footer className="store_pagination">
                <button className="page_btn active">1</button>
                <button className="page_btn">2</button>
                <button className="page_btn">3</button>
            </footer>
        </div>
   </> );
};

export default StorePage;