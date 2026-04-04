import React, { useRef, useEffect, useState } from 'react';
import Hero from '../components/Hero';
import Header from '../components/Header';
import G189 from "../assets/Group 189.png";
import '@google/model-viewer';
import glb from "../components/baby_bed.glb";
import "./HAR.css"; 
import WhyAyla from '../components/whyAyla';
import Button from '../components/Button';
import PureCSSGallery from '../components/PureCSSGallery';
import care from "../assets/4285 6.png";
import activity from "../assets/4285 8.png";
import shops from "../assets/4285 1.png";
import illu from "../assets/illu.png";
import img1 from '../assets/10918 1.svg'; 
import img2 from '../assets/10918 1-1.svg';
import img3 from '../assets/10918 1-2.svg';
import img4 from '../assets/10918 1-1.svg';
import StoryCard from '../components/StoryCard';
import tc1 from '../assets/trusticon-1.svg'; 
import tc2 from '../assets/trusticon-2.svg'; 
import tc3 from '../assets/trusticon-3.svg'; 
import careg from '../assets/careg3.png'; 
import ppl from '../assets/ppl.png'; 
import huda from '../assets/huda2.png'; 
import huda2 from '../assets/huda.png'; 
import im1 from '../assets/im1.svg'; 
import im2 from '../assets/im2.svg'; 
import Footer from '../components/Footer';

const testimonials = [
  {
    img: huda,
    text: "“أعشق كيف يساعدني آيلا في فهم مراحل تطور طفلي بشكل أعمق!”",
    author: "~ هدى عبد السلام"
  },
  {
    img: huda2,
    text: "“قسم مقدمي الرعاية في التطبيق ممتاز حقاً، أشعر بالأمان والراحة الآن لمعرفتي بكل تفصيلة تحدث مع أطفالي”",
    author: "~ سارة أحمد"
  }
];

const HomeAR = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isReady, setIsReady] = useState(false);
  const modelRef = useRef(null);

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const current = testimonials[currentIndex];

  useEffect(() => {
    setIsReady(true);
  }, []);

  return (
    // Adding dir="rtl" here flips the text and flex direction automatically
    <div className='bg' dir="rtl" style={{ textAlign: 'right' }}>
      
      <div className='absolute_bg'>
        <Header lang="ar" />
        <Hero title="عالم آيلا" />
        <WhyAyla />
      </div>

      <div className='parenting'>
        <img className='absolute_parent' src={G189} alt='صورة الوالدين' />
        <div className='parent_col'>
          <p className='mf'>هل تساءلتِ يوماً كيف تتعاملين مع قرارات التربية الصعبة؟</p>
          <p className='sf'>اكتشفي ما يمر به طفلكِ وتعلمي كيفية دعمه بكل ثقة وطمأنينة.</p>
          <p className='f'>
            من مرحلة الرضاعة إلى سنوات المراهقة، يساعد آيلا الآباء على فهم كيف يفكر ويشعر ويتصرف الأطفال، مع إرشادات من خبراء تطوير الطفل للتعامل مع المواقف التربوية الصعبة.
          </p>
          <Button bu="استكشفي كل مرحلة" />
        </div>
      </div>

      <div className='discover_bg'>
        <div className='shop'>
          <div className='shop_coll'>
            <p className='mfw'>اتخذي قرارات تسوق أفضل وأسرع بزيارة متجر آيلا</p>
            <p className='wf1'>استكشفي مجموعتنا المختارة من أساسيات الطفل، منتجات العناية بالأم، والأجهزة الذكية المرشحة لكِ لتجعل حياتكِ أسهل.</p>
            <Button bu="اذهبي للمتجر" />
          </div>

          <model-viewer 
            id="main-3d-model"
            ref={modelRef}
            loading="lazy"
            src={glb} 
            alt="نموذج ثلاثي الأبعاد للمنتج" 
            auto-rotate 
            shadow-intensity="2"
            exposure="1.5"
            environment-image="neutral"
            style={{ width: "100%", height: "500px", display: 'block' }} 
          >
            <div slot="poster" className="loading_text">جاري تحميل التجربة...</div>
          </model-viewer>
        </div>

        <div className='discover_section'>
          <div style={{ width:'100%', height: '600px', overflow: 'hidden' }}>
             <PureCSSGallery />
          </div>

          <div className='discover_col'>
            <p className='mfw'>جدي كل ما تحتاجه عائلتك في مكان واحد.</p>
            <p className='wf1'>من المطاعم المناسبة للأطفال ومساحات الأنشطة إلى ورش العمل والتجارب. آيلا يساعدكِ في اكتشاف ما هو آمن وممتع ومريح.</p>
            <Button bu="اكتشفي الآن" />
          </div>
        </div>

        <div className='storiess'>
          <div className="story_col1">
             <div className='story_title'>
                <h1 className="mfw">قصص آيلا</h1>
                <p className="wf1">لأن كل أم تحمل قصة، وكل قصة تستحق مساحة للتعبير.</p>
              </div>
              <StoryCard 
                  img={img1} 
                  date="20 فبراير، 2026" 
                  title="توازن العائلة" 
                  par="خلق انسجام بين الرعاية، العمل، وتفاصيل الحياة." 
              />
              <StoryCard 
                  img={img2} 
                  date="4 فبراير، 2026" 
                  title="آيلا توسع مجتمع مقدمي الرعاية" 
                  par="نحن ننمي شبكتنا الموثوقة لدعم المزيد من العائلات..." 
              />
          </div>

          <div className='story_col2'>            
              <StoryCard 
                  img={img3} 
                  date="7 يناير، 2026" 
                  title="ميزة الاتصال المباشر الجديدة" 
                  par="يمكن للأمهات الآن التواصل المباشر مع أطفالهن في أي وقت..." 
              />
              <StoryCard 
                  img={img4}
                  date="28 ديسمبر، 2025" 
                  title="توازن العائلة" 
                  par="كيفية خلق بيئة متناغمة في المنزل." 
              />
              <Button bu="شاهد المزيد"/>
          </div>
        </div>
      </div>

      <section className='caregiver_section'>
        <div className='caregiver_row'>
          <img className='tt22' src={careg} alt='خلفية مقدمي الرعاية' />
          <img className='illus' src={illu} alt='توضيح آيلا' />
          <div className='caregiver_col'>
            <p className='mf'>هل تبحثين عن رعاية موثوقة؟</p>
            <p className='f'>
              البحث عن الرعاية المناسبة لطفلكِ ومنزلكِ لا يجب أن يكون مرهقاً. مع آيلا، يمكنكِ التواصل مع مربيات ومدبرات منزل موثوقات تم التحقق منهن.
            </p>
            <Button bu="طلب مقدم رعاية"/>
          </div>
        </div>

        <div className='trust_section'>
          <div className='tc'>
              <img src={tc1} alt='icon'/>
              <p className='f'>ملفات شخصية موثقة</p>
          </div>
          <div className='tc'>
              <img src={tc2} alt='icon'/>
              <p className='f'>فحص أمني دقيق</p>
          </div>
          <div className='tc'>
              <img src={tc3} alt='icon'/>
              <p className='f'>تقييمات حقيقية</p>
          </div>
        </div>
      </section>

      <section className='wt_ppl_say'>
        <img className='ppl_say' src={ppl} alt='ماذا يقول الناس عن آيلا' />
        <div className='ppl_col'>
          <p className='mf'>ماذا يقول الآخرون؟</p>
          <div className='ppl_box_row'>
            <div className="ppl_img_container">
               <img className='ppl_img' src={current.img} alt={current.author}/>
            </div>
            <div className="ppl_text_content">
               <p className='f'>{current.text}</p>
               <p className='f'>{current.author}</p>
            </div>
          </div>
          <div className='ppl_buttons'>
            {/* Swapping arrows to match RTL flow: Left arrow is "next" in RTL */}
            <button className='ppl_btn' onClick={nextTestimonial}>‹</button>
            <button className='ppl_btn' onClick={prevTestimonial}>›</button>
          </div>
        </div>
      </section>

      <section className='community'>
        <img className='im1' src={im1} alt=''/>
        <div className='community_col' >
            <p className='mf' >انضمي إلى مجتمعنا</p>
            <p className='f'>تواصلي مع أمهات آخرين وشاركي القصص والتجارب معاً.</p>
            <Button bu="انضمي الآن" />
        </div>
        <img className='im2' src={im2} alt=''/>
      </section>

      <Footer/>
    </div>
  );
}

export default HomeAR;