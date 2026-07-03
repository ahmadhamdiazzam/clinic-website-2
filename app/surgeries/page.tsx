'use client';

import { useState } from 'react';

export default function SurgeriesPage() {
  const [lang, setLang] = useState('en');
  const toggleLanguage = () => setLang(lang === 'en' ? 'ar' : 'en');

  const styles = {
    container: { padding: '40px 20px', maxWidth: '800px', margin: '0 auto', fontFamily: "'Segoe UI', sans-serif", lineHeight: '1.8', color: '#333' },
    card: { background: '#ffffff', padding: '30px', borderRadius: '12px', marginBottom: '25px', boxShadow: '0 4px 15px rgba(0,0,0,0.1)', borderLeft: '6px solid #0056b3' },
    header: { color: '#0056b3', marginBottom: '15px' },
    subHeader: { color: '#0056b3', fontSize: '1.4rem', marginBottom: '15px', fontWeight: 'bold' },
    listItem: { marginBottom: '12px' },
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
          <h1 style={styles.header}>Surgical Specialties: Restoring Function & Quality of Life</h1>
          <p style={{ marginBottom: '30px' }}>
            At the clinic of Dr. Ahmad Hamdi Azzam, we blend advanced surgical techniques with a deep commitment to orthopedic excellence. Our surgical practice is dedicated to restoring structural integrity and mobility, ensuring that patients across all stages of life—from pediatric to geriatric—receive precise, evidence-based care.
          </p>

          <div style={styles.card}>
            <h3 style={styles.subHeader}>1. Comprehensive Fracture Management</h3>
            <p>We provide specialized trauma care tailored to the distinct physiological requirements of our patients.</p>
            <ul style={{ paddingLeft: '20px' }}>
              <li style={styles.listItem}><strong>Adult, Pediatric, & Geriatric Care:</strong> Our approach to fracture management is inclusive and age-specific, ensuring that whether treating a young athlete, an adult, or an elderly patient, the treatment plan is optimized for stability, bone health, and long-term functional recovery.</li>
            </ul>
          </div>

          <div style={styles.card}>
            <h3 style={styles.subHeader}>2. Joint Replacement Arthroplasty</h3>
            <p>We utilize modern joint replacement techniques designed to alleviate chronic pain and significantly improve the quality of daily life.</p>
            <ul style={{ paddingLeft: '20px' }}>
              <li style={styles.listItem}><strong>Hip, Knee, & Shoulder Replacement:</strong> Our surgical suite is equipped to perform precision arthroplasty for the hip, knee, and shoulder, utilizing the latest methodologies to ensure joint durability and a more natural return to motion.</li>
            </ul>
          </div>

          <div style={styles.card}>
            <h3 style={styles.subHeader}>3. Joint Arthroscopy</h3>
            <p>Minimally invasive surgery is at the heart of our diagnostic and therapeutic philosophy.</p>
            <ul style={{ paddingLeft: '20px' }}>
              <li style={styles.listItem}><strong>Diagnostic & Therapeutic Procedures:</strong> We utilize advanced arthroscopic techniques to peer directly into the joint environment. This allows for both the precise identification of complex pathologies and immediate, minimally invasive surgical intervention, reducing recovery time and post-operative discomfort.</li>
            </ul>
          </div>

          <div style={styles.card}>
            <h3 style={styles.subHeader}>4. Deformity Correction</h3>
            <p>We are committed to strategic skeletal reconstruction to restore natural alignment.</p>
            <ul style={{ paddingLeft: '20px' }}>
              <li style={styles.listItem}><strong>Alignment & Function:</strong> Dr. Azzam specializes in the expert correction of bone and joint deformities, focusing on the mechanical realignment of extremities to enhance limb function and alleviate the long-term impact of misalignment (excluding spinal procedures).</li>
            </ul>
          </div>
        </div>
      ) : (
        // ARABIC VERSION
        <div>
          <h1 style={styles.header}>التخصصات الجراحية: استعادة الوظيفة وجودة الحياة</h1>
          <p style={{ marginBottom: '30px' }}>
            في عيادة الدكتور أحمد حمدي عزام، نمزج بين التقنيات الجراحية المتقدمة والالتزام العميق بتميز جراحة العظام. ممارستنا الجراحية مكرسة لاستعادة السلامة الهيكلية والحركة، مما يضمن حصول المرضى في جميع مراحل الحياة - من الأطفال إلى كبار السن - على رعاية دقيقة وقائمة على الأدلة.
          </p>

          <div style={styles.card}>
            <h3 style={styles.subHeader}>١. العلاج الشامل للكسور</h3>
            <p>نقدم رعاية متخصصة لإصابات العظام مصممة خصيصاً لتلبية المتطلبات الفسيولوجية المتميزة لمرضانا.</p>
            <ul style={{ paddingRight: '20px' }}>
              <li style={styles.listItem}><strong>رعاية البالغين والأطفال وكبار السن:</strong> نهجنا في إدارة الكسور شامل ومحدد حسب العمر، مما يضمن أنه سواء كان المريض رياضياً شاباً، أو بالغاً، أو مسناً، فإن خطة العلاج تكون مثالية للاستقرار، وصحة العظام، والتعافي الوظيفي على المدى الطويل.</li>
            </ul>
          </div>

          <div style={styles.card}>
            <h3 style={styles.subHeader}>٢. جراحات استبدال المفاصل</h3>
            <p>نستخدم تقنيات استبدال المفاصل الحديثة المصممة لتخفيف الألم المزمن وتحسين جودة الحياة اليومية بشكل كبير.</p>
            <ul style={{ paddingRight: '20px' }}>
              <li style={styles.listItem}><strong>استبدال مفاصل الورك والركبة والكتف:</strong> جناحنا الجراحي مجهز لإجراء جراحات استبدال المفاصل بدقة للورك والركبة والكتف، باستخدام أحدث المنهجيات لضمان متانة المفصل وعودة أكثر طبيعية للحركة.</li>
            </ul>
          </div>

          <div style={styles.card}>
            <h3 style={styles.subHeader}>٣. منظار المفاصل</h3>
            <p>الجراحة طفيفة التوغل هي جوهر فلسفتنا التشخيصية والعلاجية.</p>
            <ul style={{ paddingRight: '20px' }}>
              <li style={styles.listItem}><strong>إجراءات تشخيصية وعلاجية:</strong> نستخدم تقنيات المنظار المتقدمة للنظر مباشرة إلى بيئة المفصل. وهذا يسمح بالتشخيص الدقيق للأمراض المعقدة والتدخل الجراحي الفوري طفيف التوغل، مما يقلل من وقت التعافي وعدم الراحة بعد الجراحة.</li>
            </ul>
          </div>

          <div style={styles.card}>
            <h3 style={styles.subHeader}>٤. تصحيح التشوهات</h3>
            <p>نحن ملتزمون بإعادة البناء الهيكلي الاستراتيجي لاستعادة المحاذاة الطبيعية.</p>
            <ul style={{ paddingRight: '20px' }}>
              <li style={styles.listItem}><strong>المحاذاة والوظيفة:</strong> يتخصص الدكتور عزام في التصحيح الخبير لتشوهات العظام والمفاصل، مع التركيز على إعادة المحاذاة الميكانيكية للأطراف لتعزيز وظيفة الطرف وتخفيف التأثير طويل المدى لعدم المحاذاة (باستثناء إجراءات العمود الفقري).</li>
            </ul>
          </div>
        </div>
      )}
    </main>
  );
}