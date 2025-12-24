import Head from 'next/head';
import Link from 'next/link';
import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

export default function Home() {
  const { t } = useTranslation('common');

  return (
    <>
      <Head>
        <title>{t('systemName')}</title>
        <meta name="description" content={t('shopDescription')} />
      </Head>

      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content text-center">
          <div className="max-w-md">
            <h1 className="text-5xl font-bold">{t('heroBannerTitle')}</h1>
            <p className="py-6">
              {t('heroBannerDescription')}
            </p>
            <Link href="/repairs" className="btn btn-primary">
              {t('heroBannerButton')}
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

export async function getStaticProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ['common'])),
    },
  };
}