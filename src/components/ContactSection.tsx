import React, { useState } from 'react';
import {
  MapPin,
  Phone,
  Mail,
  Send,
  CheckCircle2,
  AlertCircle,
  Clock,
  Compass,
} from 'lucide-react';
import { INSTITUTION_INFO } from '../data/institutionData';
import { Language } from '../types';

interface ContactSectionProps {
  currentLang: Language;
}

export const ContactSection: React.FC<ContactSectionProps> = ({ currentLang }) => {
  const [formData, setFormData] = useState({
    name: '',
    mobile: '',
    email: '',
    subject: '',
    message: '',
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const validate = () => {
    const errs: Record<string, string> = {};
    if (!formData.name.trim()) {
      errs.name = currentLang === 'bn' ? 'নাম প্রদান করুন' : 'Please provide your name';
    }
    if (!formData.mobile.trim()) {
      errs.mobile = currentLang === 'bn' ? 'মোবাইল নম্বর প্রদান করুন' : 'Please provide mobile number';
    } else if (!/^01[3-9]\d{8}$/.test(formData.mobile.trim().replace(/-/g, '')) && formData.mobile.length < 10) {
      errs.mobile =
        currentLang === 'bn' ? 'সঠিক মোবাইল নম্বর লিখুন' : 'Please enter a valid mobile number';
    }
    if (!formData.message.trim()) {
      errs.message = currentLang === 'bn' ? 'বার্তা লিখুন' : 'Please enter your message';
    }
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);
    // Simulate immediate successful processing
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      setFormData({
        name: '',
        mobile: '',
        email: '',
        subject: '',
        message: '',
      });
    }, 600);
  };

  return (
    <section id="contact" className="py-20 bg-white border-b border-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-emerald-800 mb-3">
            <Compass className="w-4 h-4 text-amber-500" />
            <span>{currentLang === 'bn' ? 'যোগাযোগ' : 'Get In Touch'}</span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900 mb-4">
            {currentLang === 'bn' ? 'যোগাযোগ ও সরাসরি সাক্ষাৎ' : 'Contact & Campus Location'}
          </h2>

          <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
            {currentLang === 'bn'
              ? 'ভর্তি বা যেকোনো প্রয়োজনীয় তথ্যের জন্য আমাদের সাথে সরাসরি অফিসে যোগাযোগ করুন অথবা বার্তা পাঠান।'
              : 'For admissions or any institutional inquiry, visit our campus directly or leave us a message below.'}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
          {/* Institution Contact Information Cards (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-emerald-950 text-white rounded-2xl p-7 shadow-lg relative overflow-hidden">
              <div className="absolute inset-0 bg-islamic-pattern opacity-10 pointer-events-none" />

              <h3 className="text-xl font-bold text-amber-300 mb-1">
                {currentLang === 'bn' ? INSTITUTION_INFO.nameBn : INSTITUTION_INFO.nameEn}
              </h3>
              <p className="text-xs text-emerald-200 mb-6 font-medium">
                {currentLang === 'bn' ? INSTITUTION_INFO.nameEn : INSTITUTION_INFO.nameBn}
              </p>

              <div className="space-y-5 text-sm">
                {/* Address */}
                <div className="flex items-start gap-3.5">
                  <div className="p-2.5 rounded-xl bg-emerald-900/90 text-amber-400 shrink-0 mt-0.5">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs text-emerald-300 block font-medium">
                      {currentLang === 'bn' ? 'ঠিকানা:' : 'Address:'}
                    </span>
                    <p className="text-white font-medium leading-relaxed">
                      {currentLang === 'bn' ? INSTITUTION_INFO.addressBn : INSTITUTION_INFO.addressEn}
                    </p>
                  </div>
                </div>

                {/* Mobile */}
                <div className="flex items-start gap-3.5">
                  <div className="p-2.5 rounded-xl bg-emerald-900/90 text-amber-400 shrink-0 mt-0.5">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs text-emerald-300 block font-medium">
                      {currentLang === 'bn' ? 'মোবাইল:' : 'Mobile:'}
                    </span>
                    <a
                      href={`tel:${INSTITUTION_INFO.phone}`}
                      className="text-white font-bold hover:text-amber-300 transition-colors text-base"
                    >
                      {INSTITUTION_INFO.phone}
                    </a>
                  </div>
                </div>

                {/* Email */}
                <div className="flex items-start gap-3.5">
                  <div className="p-2.5 rounded-xl bg-emerald-900/90 text-amber-400 shrink-0 mt-0.5">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs text-emerald-300 block font-medium">
                      {currentLang === 'bn' ? 'ইমেইল:' : 'Email:'}
                    </span>
                    <a
                      href={`mailto:${INSTITUTION_INFO.email}`}
                      className="text-white font-medium hover:text-amber-300 transition-colors break-all"
                    >
                      {INSTITUTION_INFO.email}
                    </a>
                  </div>
                </div>

                {/* Hours */}
                <div className="flex items-start gap-3.5 pt-3 border-t border-emerald-900">
                  <div className="p-2.5 rounded-xl bg-emerald-900/90 text-amber-400 shrink-0 mt-0.5">
                    <Clock className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs text-emerald-300 block font-medium">
                      {currentLang === 'bn' ? 'অফিস সময়:' : 'Office Hours:'}
                    </span>
                    <p className="text-emerald-100 text-xs sm:text-sm">
                      {currentLang === 'bn'
                        ? INSTITUTION_INFO.officeHoursBn
                        : INSTITUTION_INFO.officeHoursEn}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Google Maps Location Preview */}
            <div className="rounded-2xl overflow-hidden border border-stone-200 bg-stone-100 shadow-sm">
              <div className="p-3 bg-stone-50 border-b border-stone-200 text-xs font-semibold text-slate-700 flex items-center justify-between">
                <span className="flex items-center gap-1.5">
                  <MapPin className="w-3.5 h-3.5 text-emerald-700" />
                  {currentLang === 'bn' ? 'ক্যাম্পাসের অবস্থান মানচিত্র' : 'Campus Location Map'}
                </span>
                <span className="text-slate-500 font-normal">কোনাবাড়ী, গাজীপুর</span>
              </div>
              <div className="h-56 w-full relative">
                <iframe
                  title="Campus Location Map"
                  src="https://maps.google.com/maps?q=Konabari,+Gazipur,+Bangladesh&t=&z=14&ie=UTF8&iwloc=&output=embed"
                  className="w-full h-full border-0"
                  loading="lazy"
                  referrerPolicy="no-referrer"
                />
              </div>
            </div>
          </div>

          {/* Contact Form (7 cols) */}
          <div className="lg:col-span-7 bg-stone-50 rounded-2xl p-7 sm:p-8 border border-stone-200/90 shadow-sm">
            <h3 className="text-xl font-bold text-slate-900 mb-2">
              {currentLang === 'bn' ? 'যোগাযোগের জন্য বার্তা পাঠান' : 'Send an Inquiry Message'}
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 mb-6">
              {currentLang === 'bn'
                ? 'আপনার প্রশ্ন বা তথ্য জানার জন্য নিচের ফরমটি পূরণ করুন। আমরা দ্রুত আপনার সাথে যোগাযোগ করব।'
                : 'Fill out the form below with your inquiry, and our office will get in touch promptly.'}
            </p>

            {isSubmitted ? (
              <div className="p-6 bg-emerald-50 border border-emerald-200 rounded-xl text-center space-y-3">
                <div className="w-12 h-12 bg-emerald-100 text-emerald-800 rounded-full flex items-center justify-center mx-auto">
                  <CheckCircle2 className="w-7 h-7" />
                </div>
                <h4 className="text-base font-bold text-emerald-950">
                  {currentLang === 'bn'
                    ? 'আপনার বার্তা সফলভাবে পাঠানো হয়েছে!'
                    : 'Your message has been sent successfully!'}
                </h4>
                <p className="text-xs sm:text-sm text-emerald-800">
                  {currentLang === 'bn'
                    ? 'কোনাবাড়ী দারুল উলূম কমপ্লেক্সের পক্ষ থেকে শীঘ্রই আপনার সাথে যোগাযোগ করা হবে।'
                    : 'The administration of Konabari Darul Uloom Complex will respond to you soon.'}
                </p>
                <button
                  type="button"
                  onClick={() => setIsSubmitted(false)}
                  className="mt-3 px-4 py-2 bg-emerald-800 hover:bg-emerald-900 text-white rounded-lg text-xs font-semibold transition-colors"
                >
                  {currentLang === 'bn' ? 'আরেকটি বার্তা পাঠান' : 'Send Another Message'}
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} noValidate className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Name */}
                  <div>
                    <label
                      htmlFor="contact-name"
                      className="block text-xs font-semibold text-slate-700 mb-1.5"
                    >
                      {currentLang === 'bn' ? 'আপনার নাম *' : 'Your Name *'}
                    </label>
                    <input
                      id="contact-name"
                      type="text"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder={currentLang === 'bn' ? 'যেমন: মোহাম্মদ আব্দুল্লাহ' : 'e.g. Mohammad Abdullah'}
                      className={`w-full px-4 py-3 rounded-xl border bg-white text-base sm:text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-emerald-700 transition-colors ${
                        errors.name ? 'border-red-400' : 'border-stone-300'
                      }`}
                    />
                    {errors.name && (
                      <p className="text-xs text-red-600 mt-1 flex items-center gap-1">
                        <AlertCircle className="w-3 h-3" />
                        <span>{errors.name}</span>
                      </p>
                    )}
                  </div>

                  {/* Mobile Number */}
                  <div>
                    <label
                      htmlFor="contact-mobile"
                      className="block text-xs font-semibold text-slate-700 mb-1.5"
                    >
                      {currentLang === 'bn' ? 'মোবাইল নম্বর *' : 'Mobile Number *'}
                    </label>
                    <input
                      id="contact-mobile"
                      type="tel"
                      value={formData.mobile}
                      onChange={(e) => setFormData({ ...formData, mobile: e.target.value })}
                      placeholder="01XXXXXXXXX"
                      className={`w-full px-4 py-3 rounded-xl border bg-white text-base sm:text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-emerald-700 transition-colors ${
                        errors.mobile ? 'border-red-400' : 'border-stone-300'
                      }`}
                    />
                    {errors.mobile && (
                      <p className="text-xs text-red-600 mt-1 flex items-center gap-1">
                        <AlertCircle className="w-3 h-3" />
                        <span>{errors.mobile}</span>
                      </p>
                    )}
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Email */}
                  <div>
                    <label
                      htmlFor="contact-email"
                      className="block text-xs font-semibold text-slate-700 mb-1.5"
                    >
                      {currentLang === 'bn' ? 'ইমেইল (ঐচ্ছিক)' : 'Email (Optional)'}
                    </label>
                    <input
                      id="contact-email"
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="example@mail.com"
                      className="w-full px-4 py-3 rounded-xl border border-stone-300 bg-white text-base sm:text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-emerald-700 transition-colors"
                    />
                  </div>

                  {/* Subject */}
                  <div>
                    <label
                      htmlFor="contact-subject"
                      className="block text-xs font-semibold text-slate-700 mb-1.5"
                    >
                      {currentLang === 'bn' ? 'বিষয়' : 'Subject'}
                    </label>
                    <input
                      id="contact-subject"
                      type="text"
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      placeholder={
                        currentLang === 'bn' ? 'যেমন: ভর্তি সংক্রান্ত তথ্য' : 'e.g. Admission Inquiry'
                      }
                      className="w-full px-4 py-3 rounded-xl border border-stone-300 bg-white text-base sm:text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-emerald-700 transition-colors"
                    />
                  </div>
                </div>

                {/* Message */}
                <div>
                  <label
                    htmlFor="contact-message"
                    className="block text-xs font-semibold text-slate-700 mb-1.5"
                  >
                    {currentLang === 'bn' ? 'আপনার বার্তা *' : 'Your Message *'}
                  </label>
                  <textarea
                    id="contact-message"
                    rows={4}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder={
                      currentLang === 'bn'
                        ? 'আপনার প্রশ্ন বা বিস্তারিত বার্তা লিখুন...'
                        : 'Write your inquiry or question here...'
                    }
                    className={`w-full px-4 py-3 rounded-xl border bg-white text-base sm:text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-emerald-700 transition-colors ${
                      errors.message ? 'border-red-400' : 'border-stone-300'
                    }`}
                  />
                  {errors.message && (
                    <p className="text-xs text-red-600 mt-1 flex items-center gap-1">
                      <AlertCircle className="w-3 h-3" />
                      <span>{errors.message}</span>
                    </p>
                  )}
                </div>

                {/* Submit button */}
                <div>
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl text-sm font-semibold text-white bg-emerald-800 hover:bg-emerald-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-emerald-700 transition-colors shadow-sm disabled:opacity-70"
                  >
                    <Send className="w-4 h-4" />
                    <span>
                      {isSubmitting
                        ? currentLang === 'bn'
                          ? 'পাঠানো হচ্ছে...'
                          : 'Sending...'
                        : currentLang === 'bn'
                        ? 'বার্তা পাঠান'
                        : 'Send Message'}
                    </span>
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
