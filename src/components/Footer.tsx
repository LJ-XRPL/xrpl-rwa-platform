export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-content">
        <div className="footer-disclaimer">
          <h4>&#x26A0; Investment Risk Disclaimer</h4>
          <p>
            Past performance is not indicative of future results. Tokenized real-world assets involve significant risks
            including but not limited to: market volatility, liquidity risk, regulatory uncertainty, counterparty risk,
            and potential loss of principal. Investors should carefully consider their investment objectives, risk
            tolerance, and consult with qualified financial advisors before investing. This platform does not provide
            investment advice.
          </p>
        </div>
        <div className="footer-bottom">
          <div className="footer-copyright">&copy; 2025 Ripple. All rights reserved. XRPL is a trademark of Ripple.</div>
          <div className="footer-powered">
            <span>Powered by XRPL</span>
          </div>
        </div>
      </div>
    </footer>
  )
}
