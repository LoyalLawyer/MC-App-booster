// Shared site shell — injected by each page
const SITE = {
  nav(active) {
    return `
    <div class="topbar">
      <div class="topbar-inner">
        <span>🇬🇧 Updated daily for law applicants &nbsp;·&nbsp; <span id="topdate"></span></span>
        <div class="topbar-right">
          <a href="index.html">Home</a>
          <a href="deadlines.html">TC Deadlines</a>
          <a href="#newsletter">Newsletter</a>
        </div>
      </div>
    </div>
    <header>
      <div class="header-inner">
        <a href="index.html" class="logo">Magic<span>Circle</span>Hub</a>
        <nav>
          <a href="index.html"        class="nav-link ${active==='news'?'active':''}">News</a>
          <a href="firms.html"        class="nav-link ${active==='firms'?'active':''}">Firm Profiles</a>
          <a href="compare.html"      class="nav-link ${active==='compare'?'active':''}">Compare</a>
          <a href="deadlines.html"    class="nav-link ${active==='deadlines'?'active':''}">TC Deadlines</a>
          <a href="salaries.html"     class="nav-link ${active==='salaries'?'active':''}">Salaries</a>
          <a href="interview.html"    class="nav-link ${active==='interview'?'active':''}">Interview Intel</a>
          <a href="match.html"        class="nav-link ${active==='match'?'active':''}" style="color:var(--fresh);font-weight:600;">⚡ Find My Firm</a>
        </nav>
      </div>
    </header>`;
  },

  footer() {
    return `
    <footer>
      <div class="footer-inner">
        <div>
          <div class="footer-logo">MagicCircleHub</div>
          <div class="footer-desc">Daily intelligence on the five Magic Circle law firms — built for law students navigating the TC application process. Free, forever.</div>
        </div>
        <div class="footer-col">
          <h4>Firms</h4>
          <a href="firms.html#ao">A&O Shearman</a>
          <a href="firms.html#cc">Clifford Chance</a>
          <a href="firms.html#fresh">Freshfields</a>
          <a href="firms.html#link">Linklaters</a>
          <a href="firms.html#slaughter">Slaughter and May</a>
        </div>
        <div class="footer-col">
          <h4>Tools</h4>
          <a href="compare.html">Firm Comparison</a>
          <a href="deadlines.html">TC Deadlines</a>
          <a href="salaries.html">Salary Guide</a>
          <a href="interview.html">Interview Intel</a>
        </div>
        <div class="footer-col">
          <h4>Site</h4>
          <a href="index.html">Latest News</a>
          <a href="#newsletter">Newsletter</a>
          <a href="mailto:hello@magiccirclehub.co.uk">Submit a Tip</a>
        </div>
      </div>
      <div class="footer-bottom">
        <span>© 2026 MagicCircleHub — Not affiliated with any law firm. For educational purposes.</span>
        <span>Built for future lawyers.</span>
      </div>
    </footer>`;
  },

  initDate() {
    const el = document.getElementById('topdate');
    if (el) el.textContent = new Date().toLocaleDateString('en-GB', {weekday:'long', day:'numeric', month:'long', year:'numeric'});
  }
};
