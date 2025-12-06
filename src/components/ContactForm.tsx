import { useState } from 'react';

interface ContactFormProps {
  accessKey: string;
}

export function ContactForm({ accessKey }: ContactFormProps) {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error' | 'invalid-email'>('idle');

  // List of allowed professional email domains
  const allowedDomains = [
    // Professional email providers
    'gmail.com', 'yahoo.com', 'outlook.com', 'hotmail.com', 'live.com',
    'icloud.com', 'protonmail.com', 'zoho.com', 'aol.com',
    // Corporate domains (common TLDs)
    '.com', '.org', '.net', '.edu', '.gov', '.co', '.io', '.tech', '.ai'
  ];

  // Blocked/suspicious domains
  const blockedDomains = [
    'tempmail', 'throwaway', 'guerrillamail', 'mailinator', 
    '10minutemail', 'fakeinbox', 'trashmail', 'yopmail',
    'temp-mail', 'disposable', 'burner'
  ];

  const isValidEmail = (email: string): boolean => {
    const emailLower = email.toLowerCase();
    const domain = emailLower.split('@')[1];
    
    if (!domain) return false;

    // Check if email is from blocked domain
    for (const blocked of blockedDomains) {
      if (domain.includes(blocked)) {
        return false;
      }
    }

    // Check if email is from allowed domain
    for (const allowed of allowedDomains) {
      if (domain === allowed || domain.endsWith(allowed)) {
        return true;
      }
    }

    return false;
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    const formData = new FormData(e.currentTarget);
    const email = formData.get('email') as string;

    // Validate email domain
    if (!isValidEmail(email)) {
      setSubmitStatus('invalid-email');
      setIsSubmitting(false);
      return;
    }

    formData.append('access_key', accessKey);

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        body: formData,
      });

      const data = await response.json();

      if (data.success) {
        setSubmitStatus('success');
        (e.target as HTMLFormElement).reset();
        setTimeout(() => setSubmitStatus('idle'), 5000);
      } else {
        setSubmitStatus('error');
      }
    } catch (error) {
      console.error('Form submission error:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="contact-form">
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <input 
            type="text" 
            name="name"
            placeholder="Your Name" 
            required 
            disabled={isSubmitting}
          />
        </div>
        <div className="form-group">
          <input 
            type="email" 
            name="email"
            placeholder="Your Email" 
            required 
            disabled={isSubmitting}
          />
        </div>
        <div className="form-group">
          <textarea 
            name="message"
            placeholder="Your Message" 
            rows={5} 
            required
            disabled={isSubmitting}
          ></textarea>
        </div>
        
        {submitStatus === 'success' && (
          <div className="form-message success">
            ✓ Thank you! Your message has been sent successfully.
          </div>
        )}
        
        {submitStatus === 'error' && (
          <div className="form-message error">
            ✗ Something went wrong. Please try again or email directly.
          </div>
        )}
        
        {submitStatus === 'invalid-email' && (
          <div className="form-message error">
            ✗ Please use a valid professional email address. Temporary/disposable emails are not allowed.
          </div>
        )}
        
        <button 
          type="submit" 
          className="btn btn-primary"
          disabled={isSubmitting}
        >
          {isSubmitting ? 'Sending...' : 'Send Message'}
        </button>
      </form>
    </div>
  );
}
