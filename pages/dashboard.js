import React from 'react';
import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

const Dashboard = () => {
    const { t } = useTranslation('common');

    return (
        <div className="container mx-auto px-4 py-8">
            <h1 className="text-3xl font-bold mb-6">{t('dashboard')}</h1>
            <p>IT Dashboard - Tickets View (Coming Soon)</p>
        </div>
    );
};

export default Dashboard;

export async function getStaticProps({ locale }) {
    return {
        props: {
            ...(await serverSideTranslations(locale, ['common'])),
        },
    };
}
