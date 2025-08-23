import { useState } from 'react'
import Head from 'next/head'

interface Content {
  title: string
  leftColumn: string
  rightColumn: string
  leftButton: string
  rightButton: string
}

const content = {
  en: {
    title: "My Foo Bar Site",
    leftColumn: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo",
    rightColumn: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.",
    leftButton: "Wrapped Long Text",
    rightButton: "Text"
  },
  zh: {
    title: "我的测试网站",
    leftColumn: "滚滚长江东逝水，浪花淘尽英雄。是非成败转头空，青山依旧在，几度夕阳红。白发渔樵江渚上，惯看秋月春风。",
    rightColumn: "缺月挂疏桐，漏断人初静。谁见幽人独往来？缥缈孤鸿影。惊起却回头，有恨无人省。拣尽寒枝不肯栖，寂寞沙洲冷。",
    leftButton: "多行文字多行文字",
    rightButton: "按钮"
  }
}

export default function Home() {
  const [language, setLanguage] = useState<'en' | 'zh'>('en')
  const currentContent = content[language]

  const toggleLanguage = () => {
    setLanguage(prev => prev === 'en' ? 'zh' : 'en')
  }

  return (
    <>
      <Head>
        <title>{currentContent.title}</title>
        <meta name="description" content="A beautiful bilingual website" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={`container ${language}`}>
        <header className="header">
          <div className="logo-section">
            <div className="logo-diamond"></div>
            <h1 className="title">{currentContent.title}</h1>
          </div>
          <button className="language-toggle" onClick={toggleLanguage}>
            EN/中文
          </button>
        </header>

        <div className="content-section">
          <div className="column left-column">
            <p>{currentContent.leftColumn}</p>
          </div>
          <div className="column right-column">
            <p>{currentContent.rightColumn}</p>
          </div>
        </div>

        <div className="divider"></div>

        <div className="button-section">
          <button className="action-button left-button">
            {currentContent.leftButton}
          </button>
          <button className="action-button right-button">
            {currentContent.rightButton}
          </button>
        </div>
      </main>
    </>
  )
}