import Link from 'next/link';
import { useTranslation } from 'next-i18next';

const Footer = () => {
  const { t } = useTranslation('common');

  return (
    <footer className="bg-slate-900 text-slate-300 py-12 mt-auto">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div className="col-span-1 md:col-span-2">
            <Link href="/" className="font-bold text-2xl text-white block mb-4">{t('systemName')}</Link>
            <p className="text-slate-400 max-w-sm mb-6">
              {t('shopDescription')}
            </p>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4 text-lg">Menu</h4>
            <ul className="space-y-2">
              {[
                { href: "/", label: "home" },
                { href: "/repairs", label: "reportIssue" },
                { href: "/dashboard", label: "dashboard" },
              ].map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-slate-400 hover:text-white transition-colors duration-200 block">
                    {t(link.label)}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

        </div>


        <div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-slate-500">
          <p>{t('copyright')}</p>
          <div className="flex gap-4 mt-4 md:mt-0">
            <span>Privacy Policy</span>
            <span>Terms of Service</span>
          </div>
        </div>
      </div>
    </footer >
  );
};

export default Footer;