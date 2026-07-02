"use client";
import Image from "next/image";
import { useState } from "react";

export default function Home() {
  const [lang, setLang] = useState<"en" | "ar">("en");

  const content = {
    en: {
      toggleBtn: "العربية",
      direction: "ltr",
      name: "Dr. Ahmad Hamdi Azzam",
      title: "Consultant of Orthopedic Surgery",
      bookBtn: "Book Now",
      address: "40 Mosaddak St., Dokki, Giza | +20 1020001914",
      servicesHead: "Our Services",
      services: ['Joint Replacement', 'Sports Injuries', 'Trauma Management'],
      adviceHead: "General Advice",
      advice: [
        'Stay hydrated for joint lubrication.', 
        'Maintain good posture during long shifts.', 
        'Warm up before any exercise or sport.', 
        'Regularly shift position or posture every 30 minutes.'
      ],
      faqHead: "FAQs",
      faq1Q: "Do you accept insurance?",
      faq1A: "Please contact our office on WhatsApp to confirm your specific provider.",
      faq2Q: "What should I bring to my first appointment?",
      faq2A: "Please bring any previous X-rays, MRI scans, and relevant medical records.",
      waBtn: "Chat on WhatsApp",
      igBtn: "Instagram",
      googleBtn: "Google Business"
    },
    ar: {
      toggleBtn: "English",
      direction: "rtl",
      name: "د. أحمد حمدي عزام",
      title: "استشاري جراحة العظام",
      bookBtn: "احجز الآن",
      address: "٤٠ شارع مصدق، الدقي، الجيزة | +20 1020001914",
      servicesHead: "خدماتنا",
      services: ['تغيير المفاصل', 'إصابات الملاعب', 'علاج الكسور'],
      adviceHead: "نصائح عامة",
      advice: [
        'حافظ على شرب الماء لترطيب المفاصل.', 
        'حافظ على وضعية جيدة أثناء فترات العمل الطويلة.', 
        'قم بالإحماء قبل أي تمرين أو رياضة.', 
        'قم بتغيير وضعيتك بانتظام كل 30 دقيقة.'
      ],
      faqHead: "الأسئلة الشائعة",
      faq1Q: "هل تقبلون التأمين الطبي؟",
      faq1A: "يرجى التواصل مع عيادتنا عبر الواتساب لتأكيد شركة التأمين الخاصة بك.",
      faq2Q: "ماذا يجب أن أحضر في موعدي الأول؟",
      faq2A: "يرجى إحضار أي أشعة سينية، رنين مغناطيسي، وسجلات طبية سابقة.",
      waBtn: "تواصل عبر الواتساب",
      igBtn: "إنستجرام",
      googleBtn: "جوجل بيزنس"
    }
  };

  const t = content[lang];

  return (
    <main dir={t.direction} style={{ padding: '20px', fontFamily: 'sans-serif', maxWidth: '800px', margin: '0 auto' }}>
      
      {/* Top Toggle Tab */}
      <div style={{ display: 'flex', justifyContent: lang === 'en' ? 'flex-end' : 'flex-start', marginBottom: '20px' }}>
        <button 
          onClick={() => setLang(lang === "en" ? "ar" : "en")}
          style={{ padding: '8px 16px', cursor: 'pointer', borderRadius: '5px', backgroundColor: '#e5e7eb', border: '1px solid #ccc', fontWeight: 'bold', fontSize: '16px' }}
        >
          {t.toggleBtn}
        </button>
      </div>

      {/* 1. Name and Profile */}
      <section style={{ textAlign: 'center', marginBottom: '40px' }}>
        <h1 style={{ fontSize: '32px', fontWeight: 'bold' }}>{t.name}</h1>
        <p style={{ color: '#2563eb', fontSize: '18px' }}>{t.title}</p>
        <div style={{ marginTop: '20px', marginBottom: '30px' }}>
          <Image 
            src="/profile.webp" 
            alt={t.name} 
            width={200} 
            height={200} 
            sizes="200px" 
            priority
            style={{ borderRadius: '50%', margin: '0 auto', objectFit: 'cover' }} 
          />
        </div>
      </section>

      {/* 2. Book Now Button */}
      <section style={{ marginBottom: '40px', textAlign: 'center' }}>
        <a 
          href="https://calendly.com/azzam-ortho-pro" 
          target="_blank" 
          rel="noopener noreferrer"
          style={{ 
            padding: '12px 24px', 
            backgroundColor: '#2563eb', 
            color: 'white', 
            borderRadius: '8px', 
            textDecoration: 'none',
            fontWeight: 'bold',
            display: 'inline-block',
            boxShadow: '0 4px 6px rgba(0,0,0,0.1)'
          }}
        >
          {t.bookBtn}
        </a>
      </section>

      {/* 3. Address */}
      <section style={{ marginBottom: '40px', textAlign: 'center' }}>
        <p style={{ fontSize: '16px', color: '#333' }}>
          {t.address}
        </p>
      </section>

      {/* 4. Services Slider */}
      <section style={{ marginBottom: '40px' }}>
        <h2 style={{ fontSize: '24px', fontWeight: 'bold', marginBottom: '15px' }}>{t.servicesHead}</h2>
        <div style={{ display: 'flex', gap: '15px', overflowX: 'scroll', paddingBottom: '10px' }}>
          {t.services.map((service, i) => (
            <div key={i} style={{ minWidth: '200px', padding: '20px', backgroundColor: '#1e3a8a', color: 'white', borderRadius: '10px', textAlign: 'center', fontWeight: 'bold' }}>
              {service}
            </div>
          ))}
        </div>
      </section>

      {/* 5. General Advice Slider */}
      <section style={{ marginBottom: '40px' }}>
        <h2 style={{ fontSize: '24px', fontWeight: 'bold', marginBottom: '15px' }}>{t.adviceHead}</h2>
        <div style={{ display: 'flex', gap: '15px', overflowX: 'scroll', paddingBottom: '10px' }}>
          {t.advice.map((tip, i) => (
            <div key={i} style={{ minWidth: '200px', padding: '20px', backgroundColor: '#f3f4f6', borderRadius: '10px', border: '1px solid #ddd', textAlign: 'center', color: '#333' }}>
              {tip}
            </div>
          ))}
        </div>
      </section>

      {/* 6. FAQs */}
      <section style={{ marginBottom: '40px' }}>
        <h2 style={{ fontSize: '24px', fontWeight: 'bold', marginBottom: '15px' }}>{t.faqHead}</h2>
        <details style={{ padding: '15px', backgroundColor: '#f9fafb', marginBottom: '10px', borderRadius: '8px', border: '1px solid #ddd' }}>
          <summary style={{ fontWeight: 'bold', cursor: 'pointer' }}>{t.faq1Q}</summary>
          <p style={{ marginTop: '10px', color: '#555' }}>{t.faq1A}</p>
        </details>
        <details style={{ padding: '15px', backgroundColor: '#f9fafb', marginBottom: '10px', borderRadius: '8px', border: '1px solid #ddd' }}>
          <summary style={{ fontWeight: 'bold', cursor: 'pointer' }}>{t.faq2Q}</summary>
          <p style={{ marginTop: '10px', color: '#555' }}>{t.faq2A}</p>
        </details>
      </section>

      {/* 7. Footer & Social Links */}
      <footer style={{ borderTop: '1px solid #ccc', paddingTop: '20px', textAlign: 'center', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '15px', paddingBottom: '40px' }}>
        <a 
          href="https://wa.me/201020001914" 
          target="_blank" 
          rel="noopener noreferrer"
          style={{ display: 'inline-block', padding: '10px 20px', backgroundColor: '#25D366', color: 'white', borderRadius: '8px', textDecoration: 'none', fontWeight: 'bold' }}
        >
          {t.waBtn}
        </a>
        <div style={{ display: 'flex', gap: '20px', marginTop: '10px' }}>
          <a href="https://www.instagram.com/dr.ahmad.azzam.orthopro.clinic/" target="_blank" rel="noopener noreferrer" style={{ color: '#2563eb', textDecoration: 'none', fontWeight: 'bold' }}>{t.igBtn}</a>
          <a href="https://www.google.com/search?q=%D8%AF%D9%83%D8%AA%D9%88%D8%B1+%D8%A3%D8%AD%D9%85%D8%AF+%D8%AD%D9%85%D8%AF%D9%89+%D8%B9%D8%B2%D8%A7%D9%85+Dr+Ahmad+Hamdi+Azzam-OrthoPro+Clinic&oq=%D8%AF%D9%83&gs_lcrp=EgZjaHJvbWUqBggAEEUYOzIGCAAQRRg7MgYIARBFGDsyBggCEEUYOzIGCAMQRRg5MgYIBBBFGD0yBggFEEUYPTIGCAYQRRg90gEIMTk4M2owajSoAgCwAgE&sourceid=chrome&ie=UTF-8" target="_blank" rel="noopener noreferrer" style={{ color: '#2563eb', textDecoration: 'none', fontWeight: 'bold' }}>{t.googleBtn}</a>
        </div>
      </footer>
    </main>
  );
}