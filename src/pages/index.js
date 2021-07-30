import * as React from "react"
import "../styles/index.css"
// styles
const pageStyles = {
  color: "#232129",
  fontFamily: "-apple-system, Roboto, sans-serif, serif",
}

const listStyles = {
  paddingLeft: 0,
}

const linkStyle = {
  color: "black",
  // fontWeight: "bold",
  fontSize: 16,
  verticalAlign: "5%",
}

const docLinkStyle = {
  ...linkStyle,
  listStyleType: "none",
  marginBottom: 24,
}
const businessContentListStyle = {
  ...linkStyle,
  marginBottom: 24,
}

const footerStyle = {
  marginTop: 50
}
const footerText = {
  textAlign: 'center'
}
// markup
const IndexPage = () => {
  return (
    <main style={pageStyles}>
       <title>Alphaville, Inc.</title>
      <div>
        <div className="pt-2 pl-2">
        <p className="text-base">Alphaville, Inc.</p>
        </div>
      </div>
      <div className="flex justify-center mb-10">
        <div className="mt-10" style={{width: '50vw'}}>
          <h1 className="text-5xl font-bold">Alphaville, Inc.</h1>
          <h1 className="text-2xl font-bold mt-10">会社情報</h1>

          <ul className="mt-5">
            <li style={docLinkStyle}>
              <h3 className="text-xl font-bold">会社名</h3>
              <p className="text-base font-light mt-2">Alphaville株式会社</p>
            </li>
            <li style={docLinkStyle}>
              <h3 className="text-xl font-bold">所在地</h3>
              <p className="text-base font-light mt-2">391-0115 長野県諏訪郡原村17217-2157</p>
            </li>
            <li style={docLinkStyle}>
              <h3 className="text-xl font-bold">設立</h3>
              <p className="text-base font-light mt-2">2020年6月25日</p>
            </li>
            <li style={docLinkStyle}>
              <h3 className="text-xl font-bold">資本金</h3>
              <p className="text-base font-light mt-2">300万円（2021年7月1日現在）</p>
            </li>
            <li style={docLinkStyle}>
              <h3 className="text-xl font-bold">役員</h3>
              <p className="text-base font-light mt-2">代表取締役CEO 石井啓介</p>
            </li>
          </ul>
          <h3 className="text-xl font-bold">事業内容</h3>
          <ul className="list-disc pl-10">
            <li className="text-base font-light mt-2">ソフトウェア開発</li>
            <li className="text-base font-light mt-2">ITサポート</li>
          </ul>
          <div style={footerStyle}>
            <p className="text-sm text-center">© Alphaville, Inc. All rights reserved.</p>
          </div>
        </div>
      </div>
    </main>
  )
}

export default IndexPage
