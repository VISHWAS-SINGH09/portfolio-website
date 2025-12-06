import { useState } from 'react';

interface ContactFormProps {
  accessKey: string;
}

export function ContactForm({ accessKey }: ContactFormProps) {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    const formData = new FormData(e.currentTarget);
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
