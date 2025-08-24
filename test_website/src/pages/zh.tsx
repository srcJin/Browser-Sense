import { useEffect } from 'react'
import Head from 'next/head'

const content = {
  title: "我的测试网站",
  leftColumn: "滚滚长江东逝水，浪花淘尽英雄。是非成败转头空，青山依旧在，几度夕阳红。白发渔樵江渚上，惯看秋月春风。",
  rightColumn: "缺月挂疏桐，漏断人初静。谁见幽人独往来？缥缈孤鸿影。惊起却回头，有恨无人省。拣尽寒枝不肯栖，寂寞沙洲冷。",
  leftButton: "多行文字多行文字",
  rightButton: "按钮"
}

export default function ChinesePage() {
  useEffect(() => {
    document.documentElement.dir = 'ltr'
    document.documentElement.lang = 'zh'
  }, [])

  return (
    <>
      <Head>
        <title>{content.title}</title>
        <meta name="description" content="中文版测试网站" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="container zh">
        <header className="header">
          <div className="logo-section">
            <div className="logo-diamond"></div>
            <h1 className="title">{content.title}</h1>
          </div>
          <nav className="language-nav">
            <a href="/en">English</a> | 
            <a href="/zh" className="active"> 中文</a> | 
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