import React from 'react';
import { useTranslation } from 'next-i18next';
import Image from 'next/image';
import { getAboutUsData } from '../utils/getAboutUsData';

const AboutUsSection = () => {
  const { t } = useTranslation('common');
  const { history, team, values, testimonials } = getAboutUsData();

  return (
    <section className="bg-gray-100 py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8">{t('aboutUsTitle')}</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h3 className="text-2xl font-bold mb-4">{t('ourHistory')}</h3>
            <p className="text-gray-600 mb-4">{history}</p>
          </div>
          <div>
            <h3 className="text-2xl font-bold mb-4">{t('ourTeam')}</h3>
            <ul className="list-disc text-gray-600">
              {team.map((member) => (
                <li key={member.id}>
                  <h4 className="font-bold">{member.name}</h4>
                  <p className="text-gray-600">{member.role}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <h3 className="text-2xl font-bold mb-4">{t('ourValues')}</h3>
        <div className="flex flex-wrap justify-center gap-4 mb-8">
          {values.map((value) => (
            <div
              key={value.id}
              className="bg-white p-4 rounded-lg shadow-md text-center"
            >
              {value.icon && (
                <Image
                  src={value.icon}
                  alt={value.name}
                  width={48}
                  height={48}
                  className="mb-2"
                />
              )}
              <p className="text-gray-600">{value.name}</p>
            </div>
          ))}
        </div>
        <h3 className="text-2xl font-bold mb-4">{t('testimonialsTitle')}</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <div key={testimonial.id} className="bg-white p-6 rounded-lg shadow-md">
              <p className="text-gray-600 mb-4">{testimonial.content}</p>
              <div className="flex items-center">
                <Image
                  src={testimonial.image}
                  alt={testimonial.name}
                  width={48}
                  height={48}
                  className="rounded-full mr-4"
                />
                <div>
                  <h4 className="font-bold text-lg">{testimonial.name}</h4>
                  <p className="text-gray-500 text-sm">{testimonial.company}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutUsSection;