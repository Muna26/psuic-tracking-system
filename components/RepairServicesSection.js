import React from 'react';
import { useTranslation } from 'next-i18next';
import Image from 'next/image';
import { getRepairServicesData } from '../utils/getRepairServicesData';

const RepairServicesSection = () => {
  const { t } = useTranslation('common');
  const { services, commonIssues, pricing, warranty } = getRepairServicesData();

  return (
    <div className="space-y-20">

      {/* Hero / Intro */}
      <div className="flex flex-col lg:flex-row items-center gap-12">
        <div className="w-full lg:w-1/2 space-y-6">
          <h2 className="text-4xl md:text-5xl font-extrabold text-slate-800 leading-tight">
            {t('repairServicesTitle')}
          </h2>
          <div className="h-1.5 w-24 bg-primary-600 rounded-full"></div>
          <p className="text-lg text-gray-600 leading-relaxed">
            We provide professional diagnostics and repair for all major washing machine brands.
            Our expert technicians are ready to help you get your appliance back in top shape.
          </p>
        </div>
        <div className="w-full lg:w-1/2 h-[400px] relative rounded-3xl overflow-hidden shadow-2xl">
          <Image
            src="/assets/images/repair-services.jpg"
            alt="Repair Services"
            fill
            style={{ objectFit: 'cover' }}
            className="hover:scale-105 transition-transform duration-700"
          />
        </div>
      </div>

      {/* Services Grid */}
      <div>
        <h3 className="text-3xl font-bold text-center text-slate-800 mb-12">{t('ourServices')}</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service) => (
            <div key={service.id} className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 group">
              <div className="w-14 h-14 bg-primary-100 text-primary-600 rounded-xl flex items-center justify-center mb-6 text-2xl group-hover:bg-primary-600 group-hover:text-white transition-colors duration-300">
                🛠️
              </div>
              <h4 className="text-xl font-bold text-slate-800 mb-3">{service.name}</h4>
              <p className="text-gray-600 leading-relaxed">{service.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Common Issues & Info */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* Common Issues */}
        <div className="bg-slate-800 text-white p-10 rounded-3xl relative overflow-hidden">
          <div className="absolute top-0 right-0 -mt-10 -mr-10 w-40 h-40 bg-white/10 rounded-full blur-2xl"></div>
          <h3 className="text-2xl font-bold mb-8 flex items-center gap-3">
            <span className="text-3xl">⚠️</span> {t('commonIssues')}
          </h3>
          <ul className="space-y-4">
            {commonIssues.map((issue) => (
              <li key={issue.id} className="flex items-start gap-3 bg-white/10 p-4 rounded-xl backdrop-blur-sm border border-white/5">
                <span className="text-red-400 mt-1">•</span>
                <span className="text-gray-200">{issue.description}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Pricing & Warranty */}
        <div className="space-y-8">
          <div className="bg-green-50 p-8 rounded-2xl border border-green-100">
            <h3 className="text-2xl font-bold text-green-800 mb-4 flex items-center gap-2">
              💰 {t('pricing')}
            </h3>
            <div className="prose prose-green text-green-700">{pricing}</div>
          </div>

          <div className="bg-blue-50 p-8 rounded-2xl border border-blue-100">
            <h3 className="text-2xl font-bold text-blue-800 mb-4 flex items-center gap-2">
              🛡️ {t('warranty')}
            </h3>
            <div className="prose prose-blue text-blue-700">{warranty}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RepairServicesSection;