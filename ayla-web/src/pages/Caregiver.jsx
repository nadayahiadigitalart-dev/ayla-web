// import React, { PureComponent } from 'react';
import React, { useState } from 'react';

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

import { Supabase } from '../Supabase';
import Footer from '../components/Footer';





// import Caree from './Caregiver.svg';


const Caregiver = () => {
    const [name, setName] = useState("");
    const [phone, setPhone] = useState("");
    const [email, setEmail] = useState("");
    const [service, setService] = useState("");
    const [nationality, setNationality] = useState("");
    const [message, setMessage] = useState("");

        async function sendMsg() {
  const { data, error } = await Supabase
    .from("caregiver_responses")
    .insert([
      {
        // sender_name: sender_name,
        // sender_email: sender_email,
        // subject: sub,
        // message: msg,

        "Name": name,           
        "email": email,           
        "services_needed": service,
        "nationality": nationality, 
        "message": message,        
        "phone_number": phone
      }
    ]);

//   if (error) {
//     console.error("Supabase error:", error);
//     alert("Message failed ❌");
//   } else {
//     console.log("Inserted data:", data);
//     alert("Message sent successfully ✅");
//   }
// }


if (error) {
    console.error("Supabase error:", error.message);
    alert(`Error: ${error.message}`); // This will tell you if a column is missing
  } else {
    alert("Message sent successfully ✅");
    // Clear form
    setName("");
    setEmail("");
    setPhone("");
    setService("");
    setNationality("");
    setMessage("");
  }}




    return ( <>
    <div className='all'>
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
<div className='care_col'>
<div className='care_form_row'>
    <div className='col_input'>

        <p className='fff'>Name</p>
        <input className='ayla_css' 
        value={name} 
        onChange={(e) => setName(e.target.value)}
         type='text' 
         
         />
    </div>
    

    <div className='col_input'>

<p className='fff'>Phone Number</p>
<input 
    className='ayla_css' 
    type='email' 
    value={phone} 
    onChange={(e) => setPhone(e.target.value)} 
/>
</div>

</div>

    <div className='col_input2'>

<p className='fff'>Email</p>
<input 
    className='ayla_css' 
    type='email' 
    value={email} 
    onChange={(e) => setEmail(e.target.value)} 
/>
</div>


    <div className='col_input2'>

<p className='fff'>Service Needed</p>
<select 
    className='ayla_css' 
    value={service} 
    onChange={(e) => setService(e.target.value)}
>
    <option value="">Select a service</option>
    <option value="Babysitter">Babysitter</option>
    <option value="Nurse">Nurse</option>
    <option value="Tutor">Tutor</option>
    <option value="Special Needs Care">Special Needs Care</option>
    <option value="Home Cook">Home Cook</option>
    <option value="Housekeeper">Housekeeper</option>
</select>
</div>


<div className='col_input2'>
    <p className='fff'>Caregiver Nationality</p>
    <select 
        className='ayla_css' 
        value={nationality} 
        onChange={(e) => setNationality(e.target.value)}
    >
        <option value="">Select Nationality</option>
        <option value="Egyptian">Egyptian</option>
        <option value="Filipino">Filipino</option>
        <option value="Ethiopian">Ethiopian</option>
        <option value="African">African (Other)</option>
        <option value="Sudanese">Sudanese</option>
        <option value="Asian">Asian (Other)</option>
    </select>
</div>

<div className='col_input2'>
<p className='fff'>Message</p>

    <input
    className='messag' 
    rows="4"               
    placeholder="Write your message here"
    type='textarea' 
    value={message} 
    onChange={(e) => setMessage(e.target.value)} 
/>
</div>



        {/* <input 
                className='ayla_css' 
                type='text' 
                value={name}
                onChange={(e) => setName(e.target.value)} 
            />  */}
</div>

            {/* <input className='ayla_css'></input> */}

        </form>


        {/* <button className='buu' onClick={()=>{console.log(sender_name)}}>
Send</button> */}

{/* <Button bu='Submit' onClick={sendMsg}/> */}
<button className='main_button'  onClick={sendMsg}  >
  Submit
</button>



</section>

<Footer/>
</div>




    
    
    
    
    </> );
}
 
export default Caregiver;