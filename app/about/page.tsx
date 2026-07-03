'use client';

import { useState } from 'react';

export default function AboutPage() {
  const [lang, setLang] = useState('en');
  const toggleLanguage = () => setLang(lang === 'en' ? 'ar' : 'en');

  const styles = {
    container: { padding: '40px 20px', maxWidth: '800px', margin: '0 auto', fontFamily: "'Segoe UI', sans-serif", lineHeight: '1.6', color: '#333' },
    card: { background: '#f9f9f9', padding: '25px', borderRadius: '12px', marginBottom: '20px', boxShadow: '0 2px 10px rgba(0,0,0,0.05)' },
    header: { color: '#0056b3', marginBottom: '10px' },
    subHeader: { color: '#555', fontWeight: '600', marginBottom: '15px' },
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
          <div style={styles.card}>
            <h1 style={styles.header}>Dr. Ahmad Hamdi Azzam</h1>
            <h3 style={styles.subHeader}>Consultant of Orthopedic Surgery & Traumatology, PhD, MD</h3>
            <p>
              Dr. Ahmad Hamdi Azzam (Born in 1983; Married) is a highly accomplished Consultant of Orthopedic Surgery and Traumatology. With 18 years of dedicated experience across Cairo University Hospitals, private hospitals, and international institutes, Dr. Azzam has refined a high-end standard of care, blending clinical excellence with rigorous scientific research and commitment to educating both undergraduate and postgraduate students.
            </p>
          </div>

          <div style={styles.card}>
            <h2 style={styles.header}>Professional Trajectory & Clinical Expertise</h2>
            <p>Dr. Azzam’s clinical expertise is centered on Pelvis and Geriatric Trauma surgeries and Arthroplasty, with extended interest in Trauma & Deformity correction. His current & past professional appointments & posts include:</p>
            <ul>
              <li>Consultant at Cairo University Faculty of Medicine</li>
              <li>Armed Forces College of Medicine</li>
              <li>Cairo University Faculty of Physical Therapy</li>
              <li>Sinai University Faculty of Physical Therapy</li>
              <li>Technical Nursing Institute Cairo</li>
              <li>Al-Razi Hospital, Kuwait</li>
              <li>Muhayel General Hospital, KSA</li>
              <li>Head of Orthopedic Emergency Department</li>
              <li>Manager of Ortho-Geriatric Unit</li>
            </ul>
          </div>

          <div style={styles.card}>
            <h2 style={styles.header}>International Fellowships & Global Perspective</h2>
            <p>Dr. Azzam has actively pursued international surgical mastery:</p>
            <ul>
              <li><strong>Austria:</strong> Fellowship in Total Knee Replacement under Prof. Siegfried Hofmann, Stolzalpe (May 2019).</li>
              <li><strong>Germany:</strong> Fellowship in Hip and Knee Arthroplasty under Prof. Lindner, Paderborn (May 2016).</li>
              <li><strong>Czech Republic:</strong> Ophthalmology Undergraduate Observership, Pekarska Hospital, Brno (August 2005).</li>
            </ul>
          </div>

          <div style={styles.card}>
            <h2 style={styles.header}>Academic, Research, & Mentorship Contributions</h2>
            <p>
              Dr. Azzam maintains a prolific academic and research record. His teaching duties include undergraduate and postgraduate courses at Cairo University (2014–Present), AFCM (2019–2021), the Faculty of Physical Therapy (Standard, Credit Hour, and PhD tracks), and the Technical Nursing Institute (2014–2017). He also served as an organizer and lecturer for the Orthopedic Department’s Monthly Journal Club (2015–2016).
            </p>
            <p>
              His research portfolio is extensive, covering over 40 articles on topics such as shockwave phonophoresis, patellofemoral pain syndrome, chronic lateral ankle instability, hip arthroscopy, surgical dislocation of the hip, smartphone applications in clinical settings, and various biomechanical/musculoskeletal studies published in journals including <em>Clinical Rehabilitation</em>, <em>Journal of Taibah University Medical Sciences</em>, <em>Teikyo Medical Journal</em>, <em>Fizjoterapia Polska</em>, <em>The Egyptian Journal of Hospital Medicine</em>, and the <em>Medical Journal of Cairo University</em>, among others.
            </p>
          </div>

          <div style={styles.card}>
            <h2 style={styles.header}>Awards, Memberships, & Certifications</h2>
            <ul>
              <li><strong>Awards:</strong> Kasr Al Aini Shield for management of 2011 casualties, Honor Graduation (MBBCh 2006), and Highest Score Prizes in Ophthalmology (2004) and Parasitology (2003).</li>
              <li><strong>Memberships & Registrations:</strong> Egyptian Medical Syndicate (Reg. 189769), AO Association (since 2015), Egyptian Orthopedic Association (since 2011), and Egyptian Pelvis & Hip Society (since 2013).</li>
              <li><strong>Certificates:</strong> AO Basics of Orthopedic Fixation (2015), BLS (April 2025), and ACLS (May 2025).</li>
            </ul>
          </div>

          <div style={styles.card}>
            <h2 style={styles.header}>Conferences, Professional Development, & Skills</h2>
            <p>
              Dr. Azzam is a frequent contributor to scientific congresses, including ICJR Egypt (2017, 2024), International Geriatrics Conferences (2019), and Kasr Al Aini Symposia. He has completed extensive FLDC training in Blended Learning, Research Ethics, Conflict/Time Management, and University Code of Ethics, among other modules.
            </p>
            <p>
              He possesses excellent communication and leadership skills, with demonstrated crisis management abilities during the 2011 political events. Linguistically and technically proficient, he holds an OET (2019), TOEFL (2011, score 565), and ICDL (2007), with strong command of Windows, MacOS, and Microsoft Office.
            </p>
          </div>

          <div style={styles.card}>
            <h2 style={styles.header}>Personal Profile</h2>
            <p>
              Outside of his clinical and academic endeavors, Dr. Azzam enjoys sketch drawing, clay sculpture, and reading. He is an avid traveler who has visited Austria, the Netherlands, Germany, the Czech Republic, Turkey, KSA, Kuwait, and Egypt, valuing the opportunity to engage with diverse cultures.
            </p>
          </div>
        </div>
      ) : (
        // ARABIC VERSION
        <div>
          <div style={styles.card}>
            <h1 style={styles.header}>دكتور أحمد حمدي عزام</h1>
            <h3 style={styles.subHeader}>استشاري جراحة العظام والإصابات، دكتوراه، دكتور في الطب</h3>
            <p>
              دكتور أحمد حمدي عزام (مواليد 1983؛ متزوج) هو استشاري جراحة عظام وإصابات بارز. بفضل خبرته التي تمتد لـ 18 عاماً في مستشفيات جامعة القاهرة، والمستشفيات الخاصة، والمؤسسات الدولية، ارتقى دكتور عزام بمعايير الرعاية الطبية، جامعاً بين التميز السريري والبحث العلمي الصارم، مع التزام بتعليم الطلاب الجامعيين وطلاب الدراسات العليا[cite: 1].
            </p>
          </div>

          <div style={styles.card}>
            <h2 style={styles.header}>المسار المهني والخبرة السريرية</h2>
            <p>تتركز خبرة دكتور عزام السريرية في جراحات الحوض وإصابات كبار السن وجراحات المفاصل، مع اهتمام واسع بتصحيح التشوهات والإصابات. تشمل مناصبه المهنية الحالية والسابقة[cite: 1]:</p>
            <ul>
              <li>استشاري بكلية الطب - جامعة القاهرة</li>
              <li>كلية الطب بالقوات المسلحة</li>
              <li>كلية العلاج الطبيعي - جامعة القاهرة</li>
              <li>كلية العلاج الطبيعي - جامعة سيناء</li>
              <li>المعهد الفني للتمريض بالقاهرة</li>
              <li>مستشفى الرازي، الكويت</li>
              <li>مستشفى محايل العام، المملكة العربية السعودية</li>
              <li>رئيس قسم طوارئ العظام</li>
              <li>مدير وحدة جراحة عظام المسنين</li>
            </ul>
          </div>

          <div style={styles.card}>
            <h2 style={styles.header}>الزمالات الدولية والرؤية العالمية</h2>
            <p>سعى دكتور عزام بجدية نحو التميز الجراحي الدولي[cite: 1]:</p>
            <ul>
              <li><strong>النمسا:</strong> زمالة في استبدال مفصل الركبة تحت إشراف البروفيسور سيغفريد هوفمان، ستولزالبي (مايو 2019).</li>
              <li><strong>ألمانيا:</strong> زمالة في جراحة مفاصل الورك والركبة تحت إشراف البروفيسور ليندنر، بادربورن (مايو 2016).</li>
              <li><strong>جمهورية التشيك:</strong> تدريب مراقب في طب العيون، مستشفى بيكارسكا، برنو (أغسطس 2005).</li>
            </ul>
          </div>

          <div style={styles.card}>
            <h2 style={styles.header}>المساهمات الأكاديمية والبحثية</h2>
            <p>يتمتع دكتور عزام بسجل أكاديمي وبحثي حافل. تشمل مهامه التدريسية دورات للطلاب الجامعيين والدراسات العليا في جامعة القاهرة (2014-الحاضر)، كلية الطب بالقوات المسلحة (2019-2021)، كلية العلاج الطبيعي، والمعهد الفني للتمريض (2014-2017). كما عمل كمنظم ومحاضر في نادي مجلة قسم العظام (2015-2016)[cite: 1].</p>
            <p>تمتد محفظته البحثية لتشمل أكثر من 40 مقالاً في موضوعات مثل الموجات التصادمية، متلازمة الألم الفخذي الرضفي، عدم استقرار الكاحل المزمن، تنظير مفصل الورك، والعديد من الدراسات في المجلات الطبية المرموقة، بما في ذلك مجلة التأهيل السريري، ومجلة جامعة طيبة للعلوم الطبية، ومجلة تيكيو الطبية، ومجلة العلاج الطبيعي البولندية، والمجلة المصرية للطب، والمجلة الطبية لجامعة القاهرة، وغيرها[cite: 1].</p>
          </div>

          <div style={styles.card}>
            <h2 style={styles.header}>الجوائز والعضويات والشهادات</h2>
            <ul>
              <li><strong>الجوائز:</strong> درع قصر العيني، مرتبة الشرف (2006)، وجوائز التفوق في طب العيون والطفيليات[cite: 1].</li>
              <li><strong>العضويات:</strong> نقابة الأطباء المصرية، جمعية AO، الجمعية المصرية لجراحة العظام، والجمعية المصرية للحوض ومفصل الورك[cite: 1].</li>
              <li><strong>الشهادات:</strong> أساسيات تثبيت العظام (2015)، BLS (أبريل 2025)، و ACLS (مايو 2025)[cite: 1].</li>
            </ul>
          </div>

          <div style={styles.card}>
            <h2 style={styles.header}>المؤتمرات والمهارات</h2>
            <p>يشارك دكتور عزام بانتظام في المؤتمرات العلمية، بما في ذلك مؤتمرات ICJR مصر (2017، 2024)، ومؤتمرات طب المسنين الدولية (2019)، وندوات قصر العيني. أكمل تدريبات مكثفة في التعلم المدمج وأخلاقيات البحث وإدارة النزاعات والوقت[cite: 1].</p>
            <p>يتمتع دكتور عزام بمهارات قيادية وتواصل متميزة، مع خبرة في إدارة الأزمات، ويجيد استخدام تقنيات الحاسب واللغات (OET 2019, TOEFL 2011, ICDL 2007)[cite: 1].</p>
          </div>

          <div style={styles.card}>
            <h2 style={styles.header}>الملف الشخصي</h2>
            <p>خارج نطاق العمل، يهوى دكتور عزام الرسم والنحت والقراءة. وهو مسافر شغوف زار النمسا، هولندا، ألمانيا، التشيك، تركيا، السعودية، والكويت، ومصر، ويقدر فرصة التعرف على الثقافات المختلفة[cite: 1].</p>
          </div>
        </div>
      )}
    </main>
  );
}