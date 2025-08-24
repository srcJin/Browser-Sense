import { useEffect } from 'react'
import Head from 'next/head'

const content = {
  title: "موقع تجريبي",
  leftColumn: "هذا النص مكتوب باللغة العربية من اليمين إلى اليسار. يجب أن يظهر التخطيط بشكل صحيح مع النص المحاذي إلى اليمين والتصميم المناسب للغة العربية.",
  rightColumn: "النص العربي يتطلب معالجة خاصة في التصميم. يجب أن تكون الخطوط واضحة والمسافات مناسبة لقراءة مريحة وجميلة.",
  leftButton: "نص طويل متعدد الأسطر",
  rightButton: "زر"
}

export default function ArabicPage() {
  useEffect(() => {
    document.documentElement.dir = 'rtl'
    document.documentElement.lang = 'ar'
  }, [])

  return (
    <>
      <Head>
        <title>{content.title}</title>
        <meta name="description" content="النسخة العربية من الموقع التجريبي" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="container ar rtl">
        <header className="header">
          <div className="logo-section">
            <div className="logo-diamond"></div>
            <h1 className="title">{content.title}</h1>
          </div>
          <nav className="language-nav">
            <a href="/en">English</a> | 
            <a href="/zh"> 中文</a> | 
            <a href="/ar" className="active"> العربية</a>
          </nav>
        </header>

        <div className="content-section">
          <div className="column left-column">
            <p>{content.leftColumn}</p>
          </div>
          <div className="column right-column">
            <p>{content.rightColumn}</p>
          </div>
        </div>

        <div className="divider"></div>

        <div className="button-section">
          <button className="action-button left-button">
            {content.leftButton}
          </button>
          <button className="action-button right-button">
            {content.rightButton}
          </button>
        </div>
      </main>
    </>
  )
}