'use client';

import { useState } from 'react';

interface HostFormProps {
  title?: string;
  buttonText?: string;
}

export function HostForm({ title = "Apply to Become a Host", buttonText = "Submit Application" }: HostFormProps) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phoneNumber: '',
    country: '',
    gender: '',
    message: '',
  });
  
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');

    try {
      const res = await fetch('/api/host-application', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (res.ok) {
        setStatus('success');
        setFormData({
          name: '',
          email: '',
          phoneNumber: '',
          country: '',
          gender: '',
          message: '',
        });
      } else {
        setStatus('error');
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      setStatus('error');
    }
  };

  return (
    <div className="bg-surface dark:bg-[#1F0233] border border-outline-variant/20 dark:border-white/10 p-stack-lg md:p-16 rounded-[18px] reveal-on-scroll">
      {status === 'success' ? (
        <div className="text-center flex flex-col items-center justify-center min-h-[400px]">
          <div className="w-20 h-20 bg-green-500/20 rounded-full flex items-center justify-center mb-6">
            <span className="material-symbols-outlined text-4xl text-green-500" aria-hidden="true">check_circle</span>
          </div>
          <h2 className="text-3xl font-bold mb-4 text-on-surface dark:text-white">Application Received!</h2>
          <p className="text-on-surface-variant dark:text-[#94A3B8] mb-8">
            Thank you for applying. Our talent scouts will review your profile and get back to you shortly.
          </p>
          <button
            onClick={() => setStatus('idle')}
            className="btn-gradient px-8 py-3 text-white rounded-full font-bold shadow-lg"
          >
            Submit Another Application
          </button>
        </div>
      ) : (
        <>
          <h2 className="text-3xl font-bold mb-stack-lg text-on-surface dark:text-white">{title}</h2>
      
      {status === 'error' && (
        <div className="mb-6 p-4 bg-red-500/10 border border-red-500/20 rounded-xl text-red-500 text-sm">
          Something went wrong while submitting your application. Please try again.
        </div>
      )}

      <form className="space-y-stack-lg" onSubmit={handleSubmit}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-stack-lg">
          <div className="space-y-2">
            <label className="text-sm font-semibold text-on-surface-variant dark:text-[#94A3B8] px-1">
              Full Name *
            </label>
            <input
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full bg-white dark:bg-[#0B0114] border border-outline-variant/30 dark:border-white/10 rounded-[18px] p-4 text-base focus:ring-2 focus:ring-primary focus:border-primary transition-all outline-none text-on-surface dark:text-white placeholder:text-gray-400 dark:placeholder:text-gray-600"
              placeholder="John Doe"
              type="text"
              required
            />
          </div>
          <div className="space-y-2">
            <label className="text-sm font-semibold text-on-surface-variant dark:text-[#94A3B8] px-1">
              Email Address *
            </label>
            <input
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full bg-white dark:bg-[#0B0114] border border-outline-variant/30 dark:border-white/10 rounded-[18px] p-4 text-base focus:ring-2 focus:ring-primary focus:border-primary transition-all outline-none text-on-surface dark:text-white placeholder:text-gray-400 dark:placeholder:text-gray-600"
              placeholder="john@company.com"
              type="email"
              required
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-stack-lg">
          <div className="space-y-2">
            <label className="text-sm font-semibold text-on-surface-variant dark:text-[#94A3B8] px-1">
              Phone Number
            </label>
            <input
              name="phoneNumber"
              value={formData.phoneNumber}
              onChange={handleChange}
              className="w-full bg-white dark:bg-[#0B0114] border border-outline-variant/30 dark:border-white/10 rounded-[18px] p-4 text-base focus:ring-2 focus:ring-primary focus:border-primary transition-all outline-none text-on-surface dark:text-white placeholder:text-gray-400 dark:placeholder:text-gray-600"
              placeholder="+1 (555) 000-0000"
              type="tel"
            />
          </div>
          <div className="space-y-2">
            <label className="text-sm font-semibold text-on-surface-variant dark:text-[#94A3B8] px-1">
              Country
            </label>
            <input
              name="country"
              value={formData.country}
              onChange={handleChange}
              className="w-full bg-white dark:bg-[#0B0114] border border-outline-variant/30 dark:border-white/10 rounded-[18px] p-4 text-base focus:ring-2 focus:ring-primary focus:border-primary transition-all outline-none text-on-surface dark:text-white placeholder:text-gray-400 dark:placeholder:text-gray-600"
              placeholder="e.g. United States"
              type="text"
            />
          </div>
        </div>

        <div className="space-y-2">
          <label className="text-sm font-semibold text-on-surface-variant dark:text-[#94A3B8] px-1">
            Gender
          </label>
          <div className="relative">
            <select
              name="gender"
              value={formData.gender}
              onChange={handleChange}
              className="w-full bg-white dark:bg-[#0B0114] border border-outline-variant/30 dark:border-white/10 rounded-[18px] p-4 text-base focus:ring-2 focus:ring-primary focus:border-primary transition-all outline-none appearance-none text-on-surface dark:text-white"
            >
              <option value="" disabled>Select Gender (Optional)</option>
              <option value="Male">Male</option>
              <option value="Female">Female</option>
              <option value="Other">Other</option>
              <option value="Prefer not to say">Prefer not to say</option>
            </select>
            <div className="absolute inset-y-0 right-4 flex items-center pointer-events-none text-on-surface-variant dark:text-gray-400">
              <span className="material-symbols-outlined" aria-hidden="true">
                expand_more
              </span>
            </div>
          </div>
        </div>

        <div className="space-y-2">
          <label className="text-sm font-semibold text-on-surface-variant dark:text-[#94A3B8] px-1">
            Message *
          </label>
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            className="w-full bg-white dark:bg-[#0B0114] border border-outline-variant/30 dark:border-white/10 rounded-[18px] p-4 text-base focus:ring-2 focus:ring-primary focus:border-primary transition-all outline-none resize-y min-h-[150px] text-on-surface dark:text-white placeholder:text-gray-400 dark:placeholder:text-gray-600"
            placeholder="Tell us about yourself..."
            rows={6}
            required
          ></textarea>
        </div>
        
        <button
          className={`btn-gradient w-full md:w-auto px-12 py-5 text-white rounded-full font-bold text-lg flex items-center justify-center gap-2 group transition-all shadow-lg dark:shadow-[0_0_20px_rgba(124,58,237,0.3)] ${
            status === 'loading' ? 'opacity-70 cursor-not-allowed' : 'hover:scale-105 active:scale-95'
          }`}
          type="submit"
          disabled={status === 'loading'}
        >
          {status === 'loading' ? 'Sending...' : buttonText}
          {status !== 'loading' && (
            <span className="material-symbols-outlined text-xl group-hover:translate-x-1 transition-transform" aria-hidden="true">
              send
            </span>
          )}
        </button>
      </form>
      </>
      )}
    </div>
  );
}
