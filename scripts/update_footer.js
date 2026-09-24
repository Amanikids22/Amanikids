const fs = require('fs');
const path = require('path');

const newFooter = `  <!-- FOOTER -->
  <footer class="site-footer" role="contentinfo">
    <div class="container">
      <div class="footer-compact-grid">
        
        <!-- Brand & Mission & Socials -->
        <div class="footer-brand">
          <a href="index.html" class="footer-logo-card notranslate" translate="no" aria-label="AMANI KIDS Home">
            <img src="images/amani_logo.png" alt="AMANI KIDS - Peace Love and Joy" class="site-logo-img">
          </a>
          <p>
            Connecting African refugee, immigrant, and newcomer families with trusted resources, cultural belonging, and educational support to help them thrive in Charlotte, NC.
          </p>
          <div class="footer-status notranslate" translate="no">
            <span class="pulse-dot"></span>
            System Operational • 501(c)(3) Nonprofit
          </div>
        
          <!-- Official Social Media Channels -->
          <div class="footer-social-strip">
            <h5 class="footer-social-heading">Follow Our Journey</h5>
            <div class="social-links" aria-label="Official Social Media Links">
              <a href="https://www.facebook.com/profile.php?id=100085364216384" target="_blank" rel="noopener noreferrer" class="social-link-btn facebook" aria-label="Facebook (Amani Kids)">
                <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
              </a>
              <a href="https://www.instagram.com/amaniikids/" target="_blank" rel="noopener noreferrer" class="social-link-btn instagram" aria-label="Instagram (@amaniikids)">
                <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
              </a>
              <a href="https://www.linkedin.com/company/105801002/" target="_blank" rel="noopener noreferrer" class="social-link-btn linkedin" aria-label="LinkedIn (Amani Kids)">
                <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
              </a>
              <a href="https://x.com/amanikidssocial" target="_blank" rel="noopener noreferrer" class="social-link-btn x-twitter" aria-label="X Twitter (@amanikidssocial)">
                <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
              </a>
              <a href="https://www.youtube.com/@AmanikidsCharlotte" target="_blank" rel="noopener noreferrer" class="social-link-btn youtube" aria-label="YouTube (@AmanikidsCharlotte)">
                <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg>
              </a>
            </div>
          </div>
        </div>

        <!-- Official Coordinates Card -->
        <div class="footer-contact-card notranslate" translate="no">
          <div class="footer-contact-card-title">
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>
            <span>Headquarters & Contacts</span>
          </div>
          
          <div class="footer-contact-items">
            <!-- Address -->
            <div class="footer-contact-item">
              <span class="footer-contact-icon" aria-hidden="true">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>
              </span>
              <div>
                <span class="footer-contact-label">Our Address</span>
                <span class="footer-contact-val">3400 Shamrock Dr., Suite D, Charlotte, NC 28215</span>
              </div>
            </div>

            <!-- Phone -->
            <div class="footer-contact-item">
              <span class="footer-contact-icon" aria-hidden="true">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
              </span>
              <div>
                <span class="footer-contact-label">Direct Phone</span>
                <a href="tel:+17049129379" class="footer-contact-val">+1 (704) 912-9379</a>
              </div>
            </div>

            <!-- Email -->
            <div class="footer-contact-item">
              <span class="footer-contact-icon" aria-hidden="true">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>
              </span>
              <div>
                <span class="footer-contact-label">Official Email</span>
                <a href="mailto:info@amanikidsnc.org" class="footer-contact-val">info@amanikidsnc.org</a>
              </div>
            </div>
          </div>
        </div>

      </div>

      <!-- Legal & Copyright -->
      <div class="footer-bottom">
        <div>
          &copy; <span class="current-year">2026</span> AMANI KIDS INC. All rights reserved. 501(c)(3) Nonprofit.
        </div>
        <div class="footer-bottom-links">
          <a href="get-support.html">Privacy & Dignity</a>
          <a href="get-involved.html">Financial Transparency</a>
          <a href="contact.html">Contact Us</a>
        </div>
      </div>
    </div>
  </footer>`;

const htmlFiles = [
  'index.html',
  'about.html',
  'team.html',
  'programs.html',
  'events.html',
  'impact.html',
  'stories.html',
  'album.html',
  'blog.html',
  'get-support.html',
  'get-involved.html',
  'contact.html'
];

htmlFiles.forEach(file => {
  const filePath = path.join(__dirname, '..', file);
  if (!fs.existsSync(filePath)) return;
  let content = fs.readFileSync(filePath, 'utf8');

  // Replace <footer class="site-footer" ...> ... </footer>
  const footerRegex = /<!-- FOOTER -->\s*<footer class="site-footer"[\s\S]*?<\/footer>|<footer class="site-footer"[\s\S]*?<\/footer>/;
  if (footerRegex.test(content)) {
    content = content.replace(footerRegex, newFooter);
    fs.writeFileSync(filePath, content, 'utf8');
    console.log(`Updated footer in: ${file}`);
  } else {
    console.warn(`Footer NOT found in: ${file}`);
  }
});
