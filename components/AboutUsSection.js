import React from 'react';
import { useTranslation } from 'next-i18next';
import Image from 'next/image';
import { getAboutUsData } from '../utils/getAboutUsData';

const AboutUsSection = () => {
  const { t } = useTranslation('common');
  const { history, team, values, testimonials } = getAboutUsData();

  return (
    <section className="bg-gradient-to-b from-gray-50 to-white py-20">
      <div className="container mx-auto px-4">

        {/* Hero Section */}
        <div className="flex flex-col md:flex-row items-center gap-12 mb-20">
          <div className="w-full md:w-1/2 relative h-[400px] rounded-2xl overflow-hidden shadow-2xl">
            <Image
              src="/assets/images/about-us.jpg"
              alt="Our Team"
              fill
              style={{ objectFit: 'cover' }}
              className="hover:scale-105 transition-transform duration-700"
            />
          </div>
          <div className="w-full md:w-1/2 space-y-6">
            <h2 className="text-4xl md:text-5xl font-extrabold text-slate-800 tracking-tight">
              {t('aboutUsTitle')}
            </h2>
            <div className="h-1 w-20 bg-primary-600 rounded-full"></div>
            <p className="text-lg text-gray-600 leading-relaxed">
              {history}
            </p>
          </div>
        </div>

        {/* Our Values */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-slate-800 mb-4">{t('ourValues')}</h3>
            <p className="text-gray-500 max-w-2xl mx-auto">We are committed to these core principles in every service we provide.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {values.map((value) => (
              <div
                key={value.id}
                className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 flex flex-col items-center text-center group"
              >
                <div className="w-16 h-16 bg-primary-50 rounded-full flex items-center justify-center mb-6 group-hover:bg-primary-600 transition-colors duration-300">
                  {value.icon && (
                    <Image
                      src={value.icon}
                      alt={value.name}
                      width={32}
                      height={32}
                      className="group-hover:brightness-0 group-hover:invert transition duration-300"
                    />
                  )}
                </div>
                <h4 className="text-xl font-bold text-slate-800 mb-2">{value.name}</h4>
              </div>
            ))}
          </div>
        </div>

        {/* Our Team */}
        <div className="mb-20">
          <h3 className="text-3xl font-bold text-center text-slate-800 mb-12">{t('ourTeam')}</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {team.map((member) => (
              <div key={member.id} className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 group">
                <div className="h-4 bg-primary-600"></div>
                <div className="p-8 text-center">
                  {member.image ? (
                    <div className="w-32 h-32 mx-auto mb-6 relative rounded-full overflow-hidden border-4 border-gray-50 shadow-inner">
                      <Image
                        src={member.image}
                        alt={member.name}
                        fill
                        style={{ objectFit: 'cover', objectPosition: 'top' }}
                        className="group-hover:scale-110 transition-transform duration-500"
                      />
                    </div>
                  ) : (
                    <div className="w-24 h-24 mx-auto bg-gray-200 rounded-full mb-4 flex items-center justify-center text-3xl font-bold text-gray-400">
                      {member.name.charAt(0)}
                    </div>
                  )}
                  <h4 className="text-xl font-bold text-slate-800 mb-1">{member.name}</h4>
                  <p className="text-primary-600 font-medium">{member.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Testimonials */}
        <div className="bg-primary-900 rounded-3xl p-12 text-white relative overflow-hidden">
          <div className="absolute top-0 right-0 rounded-full bg-white/5 w-64 h-64 -mr-16 -mt-16 blur-2xl"></div>
          <div className="absolute bottom-0 left-0 rounded-full bg-primary-500/20 w-80 h-80 -ml-20 -mb-20 blur-3xl"></div>

          <h3 className="text-3xl font-bold text-center mb-12 relative z-10">{t('testimonialsTitle')}</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 relative z-10">
            {testimonials.map((testimonial) => (
              <div key={testimonial.id} className="bg-white/10 backdrop-blur-md p-6 rounded-xl border border-white/10 hover:bg-white/20 transition-colors duration-300">
                <p className="text-gray-100 mb-6 italic">"{testimonial.content}"</p>
                <div className="flex items-center">
                  <div className="w-12 h-12 relative mr-4 rounded-full overflow-hidden border-2 border-white/50">
                    <Image
                      src={testimonial.image}
                      alt={testimonial.name}
                      fill
                      style={{ objectFit: 'cover' }}
                    />
                  </div>
                  <div>
                    <h4 className="font-bold text-white">{testimonial.name}</h4>
                    <p className="text-primary-200 text-xs uppercase tracking-wider">{testimonial.company}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUsSection;