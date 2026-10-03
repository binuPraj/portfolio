'use client';

import { useState, useRef, useEffect } from 'react';
import { Mail, Linkedin, Github, MapPin, Send, Check, Copy, Sparkles, MessageSquare } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import styles from './ContactPage.module.css';
import emailjs from '@emailjs/browser';

export default function ContactPage() {
  const form = useRef<HTMLFormElement>(null);
  const [copied, setCopied] = useState(false);

  const SERVICE_ID = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID || '';
  const TEMPLATE_ID = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID || '';
  const PUBLIC_KEY = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY || '';

  useEffect(() => {
    if (PUBLIC_KEY) {
      try {
        emailjs.init({ publicKey: PUBLIC_KEY });
      } catch (err) {
        console.warn('EmailJS initialization warning:', err);
      }
    }
  }, [PUBLIC_KEY]);

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [status, setStatus] = useState<'' | 'sending' | 'success' | 'error'>('');

  const handleCopyEmail = () => {
    navigator.clipboard.writeText('binupr203@gmail.com');
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('sending');

    const templateParams = {
      name: formData.name,
      from_name: formData.name,
      user_name: formData.name,
      email: formData.email,
      from_email: formData.email,
      user_email: formData.email,
      reply_to: formData.email,
      subject: formData.subject,
      message: formData.message,
      to_name: 'Binu Prajapati'
    };

    let sent = false;

    // 1. Try Client-side EmailJS
    if (SERVICE_ID && TEMPLATE_ID && PUBLIC_KEY) {
      try {
        await emailjs.send(SERVICE_ID, TEMPLATE_ID, templateParams, { publicKey: PUBLIC_KEY });
        sent = true;
      } catch (clientErr) {
        console.warn('Client-side EmailJS blocked or failed, attempting server route...', clientErr);
      }
    }

    // 2. Try Server-side API route (bypasses browser adblockers and CORS restrictions)
    if (!sent) {
      try {
        const res = await fetch('/api/contact', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(formData),
        });
        if (res.ok) {
          sent = true;
        }
      } catch (serverErr) {
        console.warn('Server contact API attempt failed:', serverErr);
      }
    }

    // 3. If sent successfully
    if (sent) {
      setStatus('success');
      setFormData({ name: '', email: '', subject: '', message: '' });
      return;
    }

    // 4. If direct APIs failed, fallback to client mailto
    try {
      window.location.href = `mailto:binupr203@gmail.com?subject=${encodeURIComponent(formData.subject || 'Portfolio Inquiry')}&body=${encodeURIComponent(`From: ${formData.name} (${formData.email})\n\n${formData.message}`)}`;
      setStatus('success');
      setFormData({ name: '', email: '', subject: '', message: '' });
    } catch {
      setStatus('error');
    }
  };

  const handleMailtoFallback = () => {
    window.location.href = `mailto:binupr203@gmail.com?subject=${encodeURIComponent(formData.subject || 'Portfolio Inquiry')}&body=${encodeURIComponent(`From: ${formData.name} (${formData.email})\n\n${formData.message}`)}`;
  };

  return (
    <main className={styles.main}>
      <Navbar />
      <section className={styles.section}>
        <div className={`container ${styles.container}`}>
          <div className="sectionHeader animate-fade-in">
            <div className="sectionBadge">
              <Sparkles size={14} />
              <span>Let&apos;s Connect</span>
            </div>
            <h1 className="sectionTitle">
              Get in <span className="sectionTitleGradient">Touch</span>
            </h1>
            <p className="sectionSubtitle">
              Have a project inquiry, research collaboration, or software engineering role in mind? Send me a message and I&apos;ll get back promptly.
            </p>
          </div>

          <div className={styles.gridContainer}>
            {/* Direct Contact Cards */}
            <div className={styles.infoCol}>
              <div className={styles.infoCard}>
                <div className={styles.infoIconWrap}>
                  <Mail size={20} />
                </div>
                <div className={styles.infoBody}>
                  <h3>Email Directly</h3>
                  <p className={styles.emailText}>binupr203@gmail.com</p>
                  <button 
                    onClick={handleCopyEmail} 
                    className={`${styles.copyPillBtn} ${copied ? styles.copiedPill : ''}`}
                  >
                    {copied ? <Check size={13} /> : <Copy size={13} />}
                    <span>{copied ? 'Copied to Clipboard!' : 'Copy Email Address'}</span>
                  </button>
                </div>
              </div>

              <div className={styles.infoCard}>
                <div className={styles.infoIconWrap}>
                  <MapPin size={20} />
                </div>
                <div className={styles.infoBody}>
                  <h3>Location &amp; Availability</h3>
                  <p>Bhaktapur / Kathmandu, Nepal</p>
                  <span className={styles.subtext}>Available for hybrid &amp; remote global roles</span>
                </div>
              </div>

              <div className={styles.infoCard}>
                <div className={styles.infoIconWrap}>
                  <MessageSquare size={20} />
                </div>
                <div className={styles.infoBody}>
                  <h3>Professional Profiles</h3>
                  <div className={styles.socialBtnRow}>
                    <a 
                      href="https://github.com/binuPraj" 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className={styles.socialPill}
                    >
                      <Github size={15} />
                      <span>GitHub</span>
                    </a>
                    <a 
                      href="https://www.linkedin.com/in/binu-prajapati-793290305" 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className={styles.socialPill}
                    >
                      <Linkedin size={15} />
                      <span>LinkedIn</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Modern Contact Form */}
            <div className={styles.formCol}>
              <form ref={form} className={styles.formCard} onSubmit={handleSubmit}>
                <h3 className={styles.formTitle}>Send a Message</h3>
                
                <div className={styles.inputRow}>
                  <div className={styles.inputGroup}>
                    <label htmlFor="name">Your Name</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      placeholder="e.g. Alex Johnson"
                      className={styles.input}
                    />
                  </div>

                  <div className={styles.inputGroup}>
                    <label htmlFor="email">Email Address</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      placeholder="alex@company.com"
                      className={styles.input}
                    />
                  </div>
                </div>

                <div className={styles.inputGroup}>
                  <label htmlFor="subject">Subject</label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    placeholder="Project Inquiry / Opportunity"
                    className={styles.input}
                  />
                </div>

                <div className={styles.inputGroup}>
                  <label htmlFor="message">Message</label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    value={formData.message}
                    onChange={handleChange}
                    required
                    placeholder="Tell me about your project, timeline, or opportunity..."
                    className={styles.textarea}
                  />
                </div>

                <button
                  type="submit"
                  className={styles.submitBtn}
                  disabled={status === 'sending'}
                  id="contact-form-submit"
                >
                  <Send size={16} />
                  <span>{status === 'sending' ? 'Sending Message...' : 'Send Message'}</span>
                </button>

                {status === 'success' && (
                  <div className={styles.successAlert}>
                    <Check size={16} />
                    <span>Thank you! Your message has been sent successfully.</span>
                  </div>
                )}

                {status === 'error' && (
                  <div className={styles.errorAlert}>
                    <p>Something went wrong sending via EmailJS. You can click below to send directly via your mail client or write to binupr203@gmail.com:</p>
                    <button
                      type="button"
                      onClick={handleMailtoFallback}
                      className={styles.copyPillBtn}
                      style={{ marginTop: '0.6rem' }}
                    >
                      <Mail size={14} />
                      <span>Send with Default Mail Client</span>
                    </button>
                  </div>
                )}
              </form>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}
