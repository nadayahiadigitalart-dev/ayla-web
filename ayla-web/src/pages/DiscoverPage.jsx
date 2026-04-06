import React, { PureComponent } from 'react';
import Header from '../components/Header';

import { useEffect, useState } from 'react';
import { Supabase } from '../Supabase';



const Discover = () => {


  const [cards, setCards] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState('Family-friendly'); // Default starting category
  const [loading, setLoading] = useState(true);

  const categories = ['Family-friendly', 'Activities & Experience', 'Shops', 'Baby & Mother Care', 'Clinics'];


  useEffect(() => {
    const fetchFilteredData = async () => {
      setLoading(true);
      
      const { data, error } = await Supabase
        .from('Discover') 
        .select('*')
        .eq('Categories', selectedCategory); 

      if (error) {
        console.error("Fetch error:", error.message);
      } else {
        setCards(data);
      }
      setLoading(false);
    };

    fetchFilteredData();
  }, [selectedCategory]);




    return ( <>

    <div className=''>

        <Header />

        <div className='dis'>
            <p className='mf'>Discover</p>
            {/* <section className='category'>
                <div className='button'>Family-friendly</div>
                <div className='button'>Activities & Experience</div>
                <div className='button'>Shops</div>
                <div className='button'>Baby & Mother Care</div>
                <div className='button'>Clinics</div>

            </section> */}

           {/* <div className='cards_layoutt'>
        {loading ? (
          <p>Loading...</p>
        ) : (
          cards.map((card) => (
            <div className='card_item' key={card.id}>
              <img className='card_img' src={card.image_url} alt={card.title}/>

              <div className='card_dis_col'>
              <p className='blackf'>{card.title}</p>
              <p className='pink_f'>{card.category}</p>
              <p className='f'>{card.description}</p>

              </div>

            </div>
            
          ))
        )} */}

        <section className='category'>
          {categories.map((cat) => (
            <div 
              key={cat}

              className={`button ${selectedCategory === cat ? 'active' : ''}`}
              onClick={() => setSelectedCategory(cat)}
            >
              {cat}
            </div>
          ))}
        </section>

        
        <div className='cards_layoutt'>
          {loading ? (
            <p>Loading...</p>
          ) : cards.length > 0 ? (
            cards.map((card) => (
              <div className='card_item' key={card.id}>
              
                <img className='card_img' src={card.card_image} alt={card.Place_name}/>

                <div className='card_dis_col'>
                  <p className='blackf'>{card.Place_name}</p>
                  <p className='pink_f'>{card.Categories}</p>
                  <p className='f'>{card.place_details}</p>
                </div>
              </div>
            ))
          ) : (
            <p>No results found for {selectedCategory}.</p>
          )}




      </div>

        </div>





    </div>
    
    
    
    
    </> );
}
 
export default Discover;