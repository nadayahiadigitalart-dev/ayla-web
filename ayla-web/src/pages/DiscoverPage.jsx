import React, { useEffect, useState } from 'react';
import Header from '../components/Header';
import { Supabase } from '../Supabase';
import './DiscoverPage.css'; 

const DiscoverPage = () => {
  const [allItems, setAllItems] = useState([]);
  const [filteredCards, setFilteredCards] = useState([]);
  const [categories, setCategories] = useState([]);
  const [locations, setLocations] = useState([]);
  
  // Default to 'Kid-friendly' because that matches your database column values exactly
  const [selectedCategory, setSelectedCategory] = useState('Kid-friendly'); 
  const [selectedLocation, setSelectedLocation] = useState('all');
  const [loading, setLoading] = useState(true);

  // 1. Fetch data from Supabase and parse column options
  useEffect(() => {
    const fetchAllData = async () => {
      setLoading(true);
      const { data, error } = await Supabase
        .from('Discover') 
        .select('*');

      if (error) {
        console.error("Fetch error:", error.message);
      } else {
        setAllItems(data || []);

        if (data && data.length > 0) {
          // Pull unique items from 'category' column
          const uniqueCategories = [...new Set(data.map(item => item.category))]
            .filter(Boolean)
            .map(cat => {
              // Custom UI mapping to guarantee beautiful labels like your design image
              let uiLabel = cat;
              if (cat === 'Kid-friendly') uiLabel = 'Family-Friendly Places';
              else if (cat === 'Activities') uiLabel = 'Activities & Experiences';
              else uiLabel = cat.charAt(0).toUpperCase() + cat.slice(1);

              return {
                id: cat, // Keeps 'Kid-friendly' for database filtering
                label: uiLabel
              };
            });
          setCategories(uniqueCategories);

          // Fallback check to avoid breaking UI if default isn't found
          if (uniqueCategories.length > 0 && !uniqueCategories.some(c => c.id === selectedCategory)) {
            setSelectedCategory(uniqueCategories[0].id);
          }

          // Pull unique items from 'locate' column
          const uniqueLocations = [...new Set(data.map(item => item.locate))]
            .filter(Boolean)
            .map(loc => ({
              id: loc,
              label: loc
            }));
          setLocations([{ id: 'all', label: 'All Locations' }, ...uniqueLocations]);
        }
      }
      setLoading(false);
    };

    fetchAllData();
  }, []);

  // 2. Filter system execution
  useEffect(() => {
    let result = allItems;
    
    // Category match
    result = result.filter(item => item.category === selectedCategory);

    if (selectedLocation !== 'all') {
      result = result.filter(item => item.locate === selectedLocation);
    }

    setFilteredCards(result);
  }, [selectedCategory, selectedLocation, allItems]);

  return (
    <div className="discover-page-wrapper">
      <Header />
      
      <div className='discover-main-container'>
        <p className='discover-main-title'>Discover</p>
        
        <section className='discover-category-tabs-row'>
          {categories.map((cat) => (
            <button 
              key={cat.id}
              className={`discover-tab-btn ${selectedCategory === cat.id ? 'active' : ''}`}
              onClick={() => setSelectedCategory(cat.id)}
            >
              {cat.label}
            </button>
          ))}
        </section>

        <div className="discover-split-layout">

          <aside className="discover-sidebar-filter-column">
            <div className="discover-sticky-card-panel">
              <label htmlFor="locationSelect" className="discover-sidebar-label">
                Filter by Location
              </label>
              <div className="discover-select-custom-wrapper">
                <select
                  id="locationSelect"
                  className="discover-native-dropdown"
                  value={selectedLocation}
                  onChange={(e) => setSelectedLocation(e.target.value)}
                >
                  {locations.map((loc) => (
                    <option key={loc.id} value={loc.id}>
                      {loc.label}
                    </option>
                  ))}
                </select>
              </div>
            </div>
          </aside>
          
          
          <div className="discover-cards-grid-column">
            {loading ? (
              <p className="discover-status-msg">Loading authentic spots...</p>
            ) : filteredCards.length > 0 ? (
              <div className='discover-cards-grid-layout'>
                {filteredCards.map((card) => (
                  <div className='discover-card-item' key={card.id}>
                    <div className="discover-card-img-frame">
                      <img 
                        className='discover-card-img' 
                       
                        src={card.imgg || card.img_card || 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=500'} 
                        alt={card.title || 'Discover Spot'}
                      />
                    </div>

                    <div className='discover-card-details-box'>
                      <p className='discover-card-heading-title'>{card.title || card.titleAR}</p>
                      <p className='discover-card-subtag-label'>
                        {card.category === 'Kid-friendly' ? 'Kid-friendly place' : card.category}
                      </p>
                      <p className='discover-card-paragraph-desc'>{card.desc || card.details}</p>
                      <p className="discover-card-meta-footer">
                        📍 {card.locate} {card.km ? `(${card.km})` : ''} • 🕒 {card.time || 'N/A'}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <p className="discover-status-msg">No results found for this selection.</p>
            )}
          </div>

       
          

        </div>
      </div>
    </div>
  );
};

export default DiscoverPage;