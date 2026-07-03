'use client';

import { useState } from 'react';

export default function ServicesPage() {
  const [lang, setLang] = useState('en');
  const toggleLanguage = () => setLang(lang === 'en' ? 'ar' : 'en');

  const styles = {
    container: { padding: '40px 20px', maxWidth: '800px', margin: '0 auto', fontFamily: "'Segoe UI', sans-serif", lineHeight: '1.8', color: '#333' },
    card: { background: '#ffffff', padding: '30px', borderRadius: '12px', marginBottom: '25px', boxShadow: '0 4px 15px rgba(0,0,0,0.1)', borderLeft: '6px solid #0056b3' },
    header: { color: '#0056b3', marginBottom: '15px' },
    subHeader: { color: '#0056b3', fontSize: '1.4rem', marginBottom: '15px', fontWeight: 'bold' },
    listItem: { marginBottom: '10px' },
    toggleBtn: { padding: '10px 20px', cursor: 'pointer', backgroundColor: '#0056b3', color: 'white', border: 'none', borderRadius: '5px', marginBottom: '20px', display: 'block' }
  };

  return (
    <main style={{ ...styles.container, direction: lang === 'en' ? 'ltr' : 'rtl', textAlign: lang === 'en' ? 'left' : 'right' }}>
      <button onClick={toggleLanguage} style={styles.toggleBtn}>
        {lang === 'en' ? 'العربية' : 'English'}
      </button>

      {lang === 'en' ? (
        // ENGLISH VERSION
        <div>
          <h1 style={styles.header}>Our Clinical Services</h1>
          <p style={{ marginBottom: '30px' }}>
            At the clinic of Dr. Ahmad Hamdi Azzam, Consultant of Orthopedic Surgery and Traumatology, we combine 17 years of clinical excellence with a patient-centered approach to ensure a seamless recovery journey. 
            Below is our modern, comprehensive presentation of the services provided to support your orthopedic health:
          </p>

          <div style={styles.card}>
            <h3 style={styles.subHeader}>1. Consultations & Diagnostic Clarity</h3>
            <p>We believe that effective treatment begins with understanding. Dr. Azzam personally guides every stage of your diagnostic process.</p>
            <ul style={{ paddingLeft: '20px' }}>
              <li style={styles.listItem}><strong>Personalized Consultations:</strong> Your care journey begins with a one-on-one assessment conducted personally by Dr. Azzam.</li>
              <li style={styles.listItem}><strong>Advanced Imaging & Lab Interpretation:</strong> We provide expert analysis and interpretation of your imaging studies and laboratory reports, ensuring you have total clarity regarding your diagnosis.</li>
              <li style={styles.listItem}><strong>Collaborative Decision-Making:</strong> We view you as the most important member of your healthcare team. We facilitate a transparent dialogue, actively involving you in decision-making, addressing your concerns, and clarifying every aspect of your treatment plan.</li>
            </ul>
          </div>

          <div style={styles.card}>
            <h3 style={styles.subHeader}>2. Precision Clinical Procedures</h3>
            <p>Our approach to clinical care is defined by technical precision and a strict commitment to your physical comfort.</p>
            <ul style={{ paddingLeft: '20px' }}>
              <li style={styles.listItem}><strong>Fracture Management:</strong> We offer expert reduction and stabilization of fractures using state-of-the-art casting and slab techniques.</li>
              <li style={styles.listItem}><strong>Comfort-Focused Removal:</strong> Experience our painless cast removal process, designed to restore your mobility with minimal discomfort.</li>
              <li style={styles.listItem}><strong>Targeted Therapeutic Interventions:</strong> We perform precise joint injections and aspirations to effectively manage pain and restore joint function.</li>
              <li style={styles.listItem}><strong>Advanced Wound Care:</strong> From routine wound dressings to the professional removal of surgical stitches and metal staples, we ensure your recovery is clean, comfortable, and infection-free.</li>
            </ul>
          </div>

          <div style={styles.card}>
            <h3 style={styles.subHeader}>3. The Surgical Continuum of Care</h3>
            <p>Surgery is more than an operation; it is a full-cycle experience. We manage every detail to ensure you feel prepared, supported, and followed-up.</p>
            <ul style={{ paddingLeft: '20px' }}>
              <li style={styles.listItem}><strong>Pre-Surgical Preparation:</strong> We guide you through the preparation process, ensuring all instructions are clear and your questions are answered.</li>
              <li style={styles.listItem}><strong>Seamless Scheduling:</strong> We handle the logistics, efficiently booking your surgical appointments to suit your needs.</li>
              <li style={styles.listItem}><strong>Post-Surgical Excellence:</strong> Our commitment extends well beyond the operating theater. We provide attentive post-surgical management and structured follow-up care to monitor your recovery and long-term health outcomes.</li>
            </ul>
          </div>

          <p>
            Dr. Azzam’s practice is built on a foundation of professional integrity and a dedication to the highest standards of orthopedic care, drawing from his extensive tenure at Cairo University Hospitals and international surgical experience.
          </p>
        </div>
      ) : (
        // ARABIC VERSION
        <div>
          <h1 style={styles.header}>خدمات العيادة</h1>
          <p style={{ marginBottom: '30px' }}>
            في عيادة الدكتور أحمد حمدي عزام، استشاري جراحة العظام والإصابات، نجمع بين 17 عاماً من التميز السريري ونهج يركز على المريض لضمان رحلة تعافي سلسة. 
            فيما يلي عرضنا الحديث والشامل للخدمات المقدمة لدعم صحة عظامك:
          </p>

          <div style={styles.card}>
            <h3 style={styles.subHeader}>١. الاستشارات والوضوح التشخيصي</h3>
            <p>نؤمن بأن العلاج الفعال يبدأ بالفهم. يقوم الدكتور عزام بتوجيه كل مرحلة من مراحل التشخيص بنفسه.</p>
            <ul style={{ paddingRight: '20px' }}>
              <li style={styles.listItem}><strong>استشارات مخصصة:</strong> تبدأ رحلتك العلاجية بتقرير وتقييم فردي يجريه الدكتور عزام شخصياً.</li>
              <li style={styles.listItem}><strong>تحليل الأشعة والتحاليل:</strong> نقدم تحليلاً وتفسيراً دقيقاً لدراسات التصوير والتقارير المخبرية، لنضمن لك الوضوح التام فيما يتعلق بتشخيصك.</li>
              <li style={styles.listItem}><strong>اتخاذ القرار التشاركي:</strong> نعتبرك أهم عضو في فريق الرعاية الصحية الخاص بك. نحن نسهل حواراً شفافاً، ونشركك بفعالية في اتخاذ القرار، ونعالج مخاوفك، ونوضح كل جانب من جوانب خطتك العلاجية.</li>
            </ul>
          </div>

          <div style={styles.card}>
            <h3 style={styles.subHeader}>٢. الإجراءات السريرية الدقيقة</h3>
            <p>نهجنا في الرعاية السريرية يحدده الدقة الفنية والالتزام الصارم براحتك الجسدية.</p>
            <ul style={{ paddingRight: '20px' }}>
              <li style={styles.listItem}><strong>علاج الكسور:</strong> نقدم خبرة في رد وتثبيت الكسور باستخدام أحدث تقنيات الجبائر والقوالب.</li>
              <li style={styles.listItem}><strong>إزالة الجبس المريحة:</strong> جرب عملية إزالة الجبس بدون ألم، والمصممة لاستعادة حركتك بأقل قدر من الانزعاج.</li>
              <li style={styles.listItem}><strong>التدخلات العلاجية الموجهة:</strong> نقوم بحقن وسحب سوائل المفاصل بدقة للتحكم بفعالية في الألم واستعادة وظيفة المفصل.</li>
              <li style={styles.listItem}><strong>العناية المتقدمة بالجروح:</strong> من غيارات الجروح الروتينية إلى إزالة الغرز الجراحية والدبابيس المعدنية باحترافية، نضمن تعافيك بشكل نظيف ومريح وخالٍ من العدوى.</li>
            </ul>
          </div>

          <div style={styles.card}>
            <h3 style={styles.subHeader}>٣. الرعاية الجراحية المتكاملة</h3>
            <p>الجراحة أكثر من مجرد عملية؛ إنها تجربة متكاملة. نحن ندير كل تفصيل لضمان شعورك بالاستعداد والدعم والمتابعة.</p>
            <ul style={{ paddingRight: '20px' }}>
              <li style={styles.listItem}><strong>التحضير قبل الجراحة:</strong> نرشدك خلال عملية التحضير، لضمان وضوح جميع التعليمات والإجابة على أسئلتك.</li>
              <li style={styles.listItem}><strong>تنظيم المواعيد السلس:</strong> نتولى الجوانب اللوجستية، ونحجز مواعيدك الجراحية بكفاءة لتناسب احتياجاتك.</li>
              <li style={styles.listItem}><strong>الرعاية بعد الجراحة:</strong> التزامنا يمتد إلى ما هو أبعد من غرفة العمليات. نحن نقدم رعاية يقظة بعد الجراحة ومتابعة منظمة لمراقبة تعافيك ونتائجك الصحية طويلة المدى.</li>
            </ul>
          </div>

          <p>
            بُنيت ممارسة الدكتور عزام على أساس من النزاهة المهنية والتفاني في تحقيق أعلى معايير رعاية العظام، مستندة إلى خبرته الواسعة في مستشفيات جامعة القاهرة والخبرة الجراحية الدولية.
          </p>
        </div>
      )}
    </main>
  );
}