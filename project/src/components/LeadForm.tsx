import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, Check } from 'lucide-react';

const LeadForm: React.FC = () => {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    business: '',
    submitted: false,
    loading: false
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormState(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormState(prev => ({ ...prev, loading: true }));
    
    // Simulate form submission
    setTimeout(() => {
      setFormState(prev => ({ ...prev, submitted: true, loading: false }));
    }, 1500);
  };

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Get a Free AI Strategy Session
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Discuss your business challenges with our experts and receive a custom automation roadmap tailored to your needs.
            </p>
            <div className="w-20 h-1 bg-gradient-to-r from-blue-400 to-cyan-300 mx-auto mt-8"></div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-gradient-to-br from-white to-blue-50 rounded-xl p-8 md:p-10 shadow-md border border-gray-100"
          >
            {formState.submitted ? (
              <div className="text-center py-10">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Check className="w-8 h-8 text-green-500" />
                </div>
                <h3 className="text-2xl font-bold mb-3">Thank You!</h3>
                <p className="text-gray-600 mb-6">
                  Your request for a strategy session has been received. Our team will contact you within 24 hours to schedule your consultation.
                </p>
                <button
                  onClick={() => setFormState(prev => ({ ...prev, submitted: false }))}
                  className="text-blue-500 underline"
                >
                  Submit another request
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit}>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                      Full Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formState.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-blue-400 focus:ring-2 focus:ring-blue-100 outline-none transition-all"
                      placeholder="Your name"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                      Email Address
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formState.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-blue-400 focus:ring-2 focus:ring-blue-100 outline-none transition-all"
                      placeholder="your.email@company.com"
                    />
                  </div>
                  <div className="md:col-span-2">
                    <label htmlFor="business" className="block text-sm font-medium text-gray-700 mb-1">
                      Business/Organization
                    </label>
                    <input
                      type="text"
                      id="business"
                      name="business"
                      value={formState.business}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-blue-400 focus:ring-2 focus:ring-blue-100 outline-none transition-all"
                      placeholder="Company name"
                    />
                  </div>
                </div>
                <div className="mt-8">
                  <button
                    type="submit"
                    disabled={formState.loading}
                    className={`w-full bg-gradient-to-r from-amber-300 to-amber-400 hover:from-amber-400 hover:to-amber-500 py-4 rounded-lg font-medium text-gray-800 shadow-md hover:shadow-lg transition-all flex items-center justify-center ${
                      formState.loading ? 'opacity-80' : ''
                    }`}
                  >
                    {formState.loading ? (
                      <div className="w-6 h-6 border-2 border-gray-800 border-t-transparent rounded-full animate-spin mr-2"></div>
                    ) : (
                      <Send className="w-5 h-5 mr-2" />
                    )}
                    {formState.loading ? 'Processing...' : 'Claim My Strategy Session'}
                  </button>
                </div>
                <p className="text-center text-gray-500 text-sm mt-4">
                  We respect your privacy and will never share your information.
                </p>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default LeadForm;