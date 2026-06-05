import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Supabase } from '../Supabase';
import Header from '../components/Header';

import './ProductDetails.css';

const ProductDetails = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const [product, setProduct] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchProductData = async () => {
            setLoading(true);
            const { data, error } = await Supabase
                .from('store')
                .select('*')
                .eq('id', id)
                .order('id', { ascending: true})
                .single();

            if (data) {
                setProduct(data);
            } else if (error) {
                console.error("Error fetching product details:", error);
            }
            setLoading(false);
        };

        fetchProductData();
    }, [id]);

    if (loading) {
        return <div className="product_loading">Loading product parameters...</div>;
    }

    if (!product) {
        return (
            <div className="product_loading">
                <p>Product not found.</p>
                <button onClick={() => navigate('/store')}>Back to Store</button>
            </div>
        );
    }

    return (
        <div className="product_details_wrapper">
            <Header />
            
            {/* 3D Model Section Viewport */}
      <div className="model_viewer_container">
    {product.glb_url ? (
        <model-viewer
            src={product.glb_url}
            ar
            ar-modes="scene-viewer webxr quick-look"
            camera-controls
            tone-mapping="neutral"
            poster={product.image_url} /* Uses the image url from your database table */
            shadow-intensity="1"
            auto-rotate
            style={{ width: '100%', height: '100%' }}
        >
            {/* Dynamically loops and renders hotspots directly from your Supabase row */}
            {product.hotspots && Array.isArray(product.hotspots) && product.hotspots.map((spot, index) => (
                <button 
                    key={index}
                    className="Hotspot" 
                    slot={spot.slot} 
                    data-position={spot.position} 
                    data-normal={spot.normal} 
                    data-visibility-attribute="visible"
                >
                    <div className="HotspotAnnotation">{spot.annotation}</div>
                </button>
            ))}

            <button slot="ar-button" id="ar-button" className="ar_mobile_button">
                View in your space
            </button>
        </model-viewer>
    ) : (
        /* Fallback if glb_url column happens to be empty */
        <div className="no_model_fallback">
            <img src={product.image_url} alt={product.name} />
        </div>
    )}
</div>

            {/* Split Details Section Container */}
            <main className="info_split_section">
                {/* Left Side: Metadata column */}
                <div className="metadata_column">
                    <h1 className="product_detail_title">{product.name}</h1>
                    <p className="product_detail_desc">{product.description}</p>
                    <div className="product_detail_price">
                        EGP {product.best_offer || product.price_min}
                    </div>
                </div>

                {/* Right Side: Augmented Reality column */}
                <div className="ar_column">
                    {product.qr_code_url ? (
                        <>
                            <h2 className="ar_title">Try in AR</h2>
                            <div className="qr_frame">
                                <img src={product.qr_code_url} alt={`${product.name} AR Code`} />
                            </div>
                        </>
                    ) : (
                        <div className="ar_coming_soon">AR Mode Preview Coming Soon</div>
                    )}
                </div>
            </main>
        </div>
    );
};

export default ProductDetails;