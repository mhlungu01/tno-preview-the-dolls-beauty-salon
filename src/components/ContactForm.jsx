import React from 'react';

export default function ContactForm({ b }) {
  return (
    <>
      <section className="contact">
        <div>
          <div className="eyebrow">Start a conversation</div>
          <h2>We would love to hear from you.</h2>
        </div>
        <div className="contact-card">
          <span>CONTACT</span>
          <a href={`tel:${b.phone.replace(/\\D/g, '')}`}>{b.phone}</a>
          {b.email && <a href={`mailto:${b.email}`}>{b.email}</a>}
          <small>{b.location}</small>
        </div>
      </section>
      <section className="tno-terms">
        <div className="eyebrow">Website packages by TNO Digital Services</div>
        <div className="tno-terms-grid">
          <div><strong>R3,000</strong><span>Once-off base implementation</span></div>
          <div><strong>R350 / month</strong><span>Retainer option on a fixed 10-month contract</span></div>
        </div>
        <p>Additional custom features, pages, or booking layouts are quoted separately with itemized fees. Annual domain registration, recurring third-party hosting, and dedicated SSL security renewals are excluded from the base price and remain the client's responsibility.</p>
      </section>
      <style>{`.tno-terms{padding:40px 7vw 52px;background:#f8f6f1;border-top:1px solid #deded5;color:#242b28}.tno-terms .eyebrow{margin-bottom:20px}.tno-terms-grid{display:flex;gap:56px;flex-wrap:wrap}.tno-terms-grid div{display:flex;flex-direction:column;gap:6px}.tno-terms-grid strong{font:600 25px/1.1 Georgia,serif}.tno-terms-grid span,.tno-terms p{font-size:12px;line-height:1.7;color:#68706c}.tno-terms p{max-width:820px;margin:20px 0 0}@media(max-width:600px){.tno-terms{padding:36px 6vw}.tno-terms-grid{gap:20px}}`}</style>
    </>
  );
}
