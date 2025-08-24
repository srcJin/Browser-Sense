import { useEffect } from 'react'
import Head from 'next/head'

const content = {
  title: "My Foo Bar Site",
  leftColumn: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo",
  rightColumn: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.",
  leftButton: "Wrapped Long Text",
  rightButton: "Text"
}

export default function EnglishPage() {
  useEffect(() => {
    document.documentElement.dir = 'ltr'
    document.documentElement.lang = 'en'
  }, [])

  return (
    <>
      <Head>
        <title>{content.title}</title>
        <meta name="description" content="English version of the test website" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="container en">
        <header className="header">
          <div className="logo-section">
            <div className="logo-diamond"></div>
            <h1 className="title">{content.title}</h1>
          </div>
          <nav className="language-nav">
            <a href="/en" className="active">English</a> | 
            <a href="/zh"> 中文</a> | 
            <a href="/ar"> العربية</a>
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