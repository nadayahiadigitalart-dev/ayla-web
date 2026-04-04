import React, { PureComponent } from 'react';
import Button from '../components/Button';
// import caree from '../assets/care_bg.svg';
import caree from '../assets/Group 201.png';


import "./Caregiver.css";
import Header from '../components/Header';
import CareCard from '../components/CareCard';

import g1 from '../assets/g1.png';
import g2 from '../assets/g2.png';
import g3 from '../assets/g3.png';
import g4 from '../assets/g4.png';
import g5 from '../assets/g5.png';
import g6 from '../assets/g6.png';

import ic1 from '../assets/question.svg';
import ic2 from '../assets/checkbox.svg';
import ic3 from '../assets/shake-hands-fill.svg';
import ic4 from '../assets/emotion-happy-fill.svg';

import cimg from '../assets/cimg.png';







// import Caree from './Caregiver.svg';


const Caregiver = () => {

        async function sendMsg() {
  const { data, error } = await Supabase
    .from("Caregiver responses")
    .insert([
      {
        // sender_name: sender_name,
        // sender_email: sender_email,
        // subject: sub,
        // message: msg,

        "Namee":Name, "phone_number":phone_number,
        "email": email, "email": email, "services_needed":services_needed,
         "nationality": nationality, "message": message,
      }
    ]);

  if (error) {
    console.error("Supabase error:", error);
    alert("Message failed ❌");
  } else {
    console.log("Inserted data:", data);
    alert("Message sent successfully ✅");
  }
}




    return ( <>
<div className='bg'>

        <img className='c' src={caree} alt='Caregiver_ayla_services'/>

        <Header />

    <div className='car'>
        <div className='car_col'>
            <p className='mfb'>
                Find Trusted Help for Your Home and Kids
            </p>
            <p className='bf'>From babysitters and nannies
                 to housekeepers and home cooks, Ayla 
                 connects families with reliable caregivers
                  you can trust.</p>
            <Button bu="Request a Caregiver" />
        </div>
    </div>

    <section className='care_cards'>
        <p className='mfw'>Available Services</p>
       

        <div className='cards_layout'>
            <CareCard src={g1} alt="babysitter_ayla_care" t="Babysitters" par="Short-term childcare support when you need a few hours to work, rest, or run errands."/>
            <CareCard src={g2} alt="housekeepers_ayla_care" t="Housekeeper" par="Help with cleaning, organizing, laundry, and home tasks."/>
            <CareCard src={g3} alt="nurse_ayla_care" t="Nurse" par="Qualified nurses who can assist with med care, health monitoring, and clinic visits for children.."/>
            <CareCard src={g4} alt="tutors_ayla_care" t="Tutor" par="Educational support for children through, homework help, early learning,skill development."/>
            <CareCard src={g5} alt="homecooks_ayla_care" t="Home Cooks" par="Experienced cooks who prepare healthy meals for families and children, helping parents save time and maintain balanced nutrition at home."/>
            <CareCard src={g6} alt="specialneeds_ayla_care" t="Special Needs Care" par="Experienced caregivers trained to support children with special needs, and attentive care."/>

        </div>

    </section>

    <section className='how'>
        <p className='mfb'>How it works?</p>
        <div className='how_c_col'>
            <div className='how_row'>
                <img className='' src={ic1} alt='icon'/>
                <div className='how_col'>
                <p className='mf2'>1. Tell Us What You Need</p>
                <p className='f'> Contact and tell us what you need and choose the service you are looking for.</p>
                </div>
            </div>

            <div className='how_row'>
                <img className='' src={ic2} alt='icon'/>
                <div className='how_col'>
                <p className='mf2'>2. We Find the Right Match</p>
                <p className='f'> Our team selects trusted caregivers that match your needs and schedule. </p>
                </div>
            </div>

            <div className='how_row'>
                <img className='' src={ic3} alt='icon'/>
                <div className='how_col'>
                <p className='mf2'>3. Meet Your Caregiver</p>
                <p className='f'> For the first time, we arrange a free introduction visit so you can get to know the caregiver.</p>
                </div>
            </div>

            <div className='how_row'>
                <img className='' src={ic4} alt='icon'/>
                <div className='how_col'>
                <p className='mf2'>4. Continue with Confidence</p>
                <p className='f'>If you’re happy with the match, you can schedule future services easily.</p>
                </div>
            </div>
        </div>
    </section>

    

</div>

<section className='fam_safety'>
    <div className='fam_col'>

    <p className='mfb2'>Your Family’s Safety Comes First</p>
    <p className='f'>All caregivers in Ayla gothrough a <br></br>careful selection process including:<br></br>
-Identity verification<br></br>
-Experience review<br></br>
-Reference checks<br></br>
-Interview screening<br></br><br></br>
-Our goal is to connect families with <br></br>
reliable and trusted support.</p>
    </div>

    <img src={cimg} alt=''/>
</section>

<section className='caregiver_contact'>
{/* <form className='form'>

        <div className='row_label'>

<div className='col_l'>
        <label>Name</label>
        <input onChange={(i)=>{setsender_name(i.target.value)}} type='text' />
        </div>
<div className='col_l'>
        
        <label>Email</label>
     
        <input onChange={(i)=>{setsender_email(i.target.value)}} type='text' />
        </div>
        </div>

         <label>Subject</label>
        <input onChange={(i)=>{setSubject(i.target.value)}} type='text' />

        <label >Message</label>
        <textarea className='label' onChange={(i)=>{setMsg(i.target.value)}} />
       
        
        </form> */}


            <div className='care_form_col'>
            <p className='mfb3'>Looking for help at Home?</p>
            <p className='f'>Tell us what kind of support you need and we’ll help you find the right caregiver for your family.</p>
            </div>
        <form className='form'>
<div className='care_form_col'>
            <p className='fff'>Name</p>
        <input className='ayla_css' onChange={(i)=>{Name(i.target.value)}} type='text' />

            {/* <input className='ayla_css'></input> */}
</div>
        </form>

        <br></br>
        <br></br>


        {/* <button className='buu' onClick={()=>{console.log(sender_name)}}>
Send</button> */}

<button className='buu' onClick={sendMsg}>
  Send
</button>



</section>


    
    
    
    
    </> );
}
 
export default Caregiver;