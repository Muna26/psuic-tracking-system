import React from 'react';
import { useTranslation } from 'next-i18next';
import Image from 'next/image';
import { getRepairServicesData } from '../utils/getRepairServicesData';

const RepairServicesSection = () => {
  const { t } = useTranslation('common');
  const { services, commonIssues, pricing, warranty } = getRepairServicesData();

  return (
    <section className="bg-gray-100 py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8">{t('repairServicesTitle')}</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h3 className="text-2xl font-bold mb-4">{t('ourServices')}</h3>
            <ul className="list-disc text-gray-600">
              {services.map((service) => (
                <li key={service.id}>
                  <h4 className="font-bold">{service.name}</h4>
                  <p className="text-gray-600">{service.description}</p>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-2xl font-bold mb-4">{t('commonIssues')}</h3>
            <ul className="list-disc text-gray-600">
              {commonIssues.map((issue) => (
                <li key={issue.id}>
                  <p className="text-gray-600">{issue.description}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <h3 className="text-2xl font-bold mb-4">{t('pricing')}</h3>
        <div className="prose prose-lg text-gray-600 mb-8">{pricing}</div>
        <h3 className="text-2xl font-bold mb-4">{t('warranty')}</h3>
        <div className="prose prose-lg text-gray-600">{warranty}</div>
      </div>
    </section>
  );
};

export default RepairServicesSection;