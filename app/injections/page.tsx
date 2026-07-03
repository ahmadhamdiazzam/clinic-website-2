'use client';

import { useState } from 'react';

export default function InjectionsPage() {
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
        // ENGLISH VERSION (Verbatim)
        <div>
          <h1 style={styles.header}>Orthopedic Joint Injections</h1>
          <p style={{ marginBottom: '30px' }}>
            Our philosophy of orthopedic joint injections is rooted in targeted, minimally invasive symptom management and diagnostic precision. Instead of relying solely on systemic medications (like oral anti-inflammatories) or jumping to invasive surgery, these injections deliver therapeutics directly to the source of pain and inflammation.
            The fundamental principles governing this approach include:
          </p>

          <div style={styles.card}>
            <h3 style={styles.subHeader}>1. The Therapeutic Ladder (Bridging to Function)</h3>
            <p>Orthopedic philosophy views joint injections as a bridge rather than a standalone "cure". They are designed to rapidly reduce pain and inflammation so the patient can engage in physical therapy and rehabilitation. The goal is to restore mobility and strengthen the surrounding muscles, creating long-term joint stability.</p>
          </div>

          <div style={styles.card}>
            <h3 style={styles.subHeader}>2. Diagnostic Precision</h3>
            <p>Injections aren't just for treatment; they serve as a diagnostic tool to confirm exactly which structure is causing a patient's pain. If injecting a precise local anesthetic into a specific joint space immediately relieves the patient's symptoms, the clinician can confirm the origin of the pain with high certainty.</p>
          </div>

          <div style={styles.card}>
            <h3 style={styles.subHeader}>3. Modality Selection (Matching the Path to the Patient)</h3>
            <p>Orthopedists tailor injections to the specific underlying condition and the patient's goals:</p>
            <ul style={{ paddingLeft: '20px' }}>
              <li style={styles.listItem}><strong>Corticosteroids:</strong> Used to rapidly reduce acute inflammation and severe pain in conditions like arthritis flare-ups, bursitis, or tendinitis.</li>
              <li style={styles.listItem}><strong>Viscosupplementation (Hyaluronic Acid):</strong> Utilized for osteoarthritis. This philosophy focuses on restoring the joint's natural lubrication and shock-absorption, reducing friction and delaying further cartilage deterioration.</li>
              <li style={styles.listItem}><strong>Orthobiologics (PRP, Stem Cells):</strong> A regenerative philosophy that uses the patient's own blood or tissue components to promote healing and tissue repair in chronic injuries or early-stage degeneration.</li>
            </ul>
          </div>

          <div style={styles.card}>
            <h3 style={styles.subHeader}>4. Maximizing Tissue Preservation</h3>
            <p>By managing pain and inflammation locally, joint injections allow physicians to delay or minimize the need for major surgical interventions, such as joint arthroplasty. They respect the body's natural anatomy by treating the joint from the inside without altering its structure.</p>
          </div>
        </div>
      ) : (
        // ARABIC VERSION
        <div>
          <h1 style={styles.header}>حقن مفاصل العظام</h1>
          <p style={{ marginBottom: '30px' }}>
            فلسفتنا في حقن مفاصل العظام متجذرة في إدارة الأعراض الموجهة وطفيفة التوغل والدقة التشخيصية. بدلاً من الاعتماد فقط على الأدوية الجهازية (مثل مضادات الالتهاب الفموية) أو القفز إلى الجراحة الغازية، تقوم هذه الحقن بتوصيل العلاجات مباشرة إلى مصدر الألم والالتهاب.
            المبادئ الأساسية التي تحكم هذا النهج تشمل:
          </p>

          <div style={styles.card}>
            <h3 style={styles.subHeader}>١. سلم العلاج (الجسور نحو الوظيفة)</h3>
            <p>وجهة نظر العظام ترى حقن المفاصل كجسر وليس "علاجاً" مستقلاً. إنها مصممة لتقليل الألم والالتهاب بسرعة حتى يتمكن المريض من المشاركة في العلاج الطبيعي وإعادة التأهيل. الهدف هو استعادة الحركة وتقوية العضلات المحيطة، مما يخلق استقراراً طويل الأمد للمفصل.</p>
          </div>

          <div style={styles.card}>
            <h3 style={styles.subHeader}>٢. الدقة التشخيصية</h3>
            <p>الحقن ليست فقط للعلاج؛ بل تعمل كأداة تشخيصية لتأكيد الهيكل الذي يسبب ألم المريض بالضبط. إذا أدى حقن مخدر موضعي دقيق في مساحة مفصلية معينة إلى تخفيف أعراض المريض على الفور، يمكن للطبيب تأكيد مصدر الألم بيقين عالٍ.</p>
          </div>

          <div style={styles.card}>
            <h3 style={styles.subHeader}>٣. اختيار النمط (مطابقة المسار للمريض)</h3>
            <p>يصمم أخصائيو العظام الحقن وفقاً للحالة الأساسية وأهداف المريض:</p>
            <ul style={{ paddingRight: '20px' }}>
              <li style={styles.listItem}><strong>الكورتيكوستيرويدات:</strong> تُستخدم لتقليل الالتهاب الحاد والألم الشديد بسرعة في حالات مثل نوبات التهاب المفاصل، التهاب الجراب، أو التهاب الأوتار.</li>
              <li style={styles.listItem}><strong>التزييت اللزج (حمض الهيالورونيك):</strong> يُستخدم لالتهاب المفاصل العظمي. تركز هذه الفلسفة على استعادة التزييت الطبيعي للمفصل وامتصاص الصدمات، مما يقلل الاحتكاك ويؤخر تدهور الغضروف.</li>
              <li style={styles.listItem}><strong>العلاجات الحيوية (البلازما الغنية بالصفائح، الخلايا الجذعية):</strong> فلسفة تجددية تستخدم مكونات دم أو أنسجة المريض نفسه لتعزيز الشفاء وإصلاح الأنسجة في الإصابات المزمنة أو التدهور في مراحل مبكرة.</li>
            </ul>
          </div>

          <div style={styles.card}>
            <h3 style={styles.subHeader}>٤. تعظيم الحفاظ على الأنسجة</h3>
            <p>من خلال إدارة الألم والالتهاب محلياً، تسمح حقن المفاصل للأطباء بتأخير أو تقليل الحاجة إلى التدخلات الجراحية الكبرى، مثل استبدال المفاصل. إنها تحترم التشريح الطبيعي للجسم من خلال علاج المفصل من الداخل دون تغيير هيكله.</p>
          </div>
        </div>
      )}
    </main>
  );
}