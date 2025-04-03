import React from 'react';
import { Heart, Coffee, Wallet } from 'lucide-react';
import { SUPPORT_CONFIG } from '../config/support';
import { SEO } from '../components/SEO';
import { useTranslation } from 'react-i18next';

export const SupportScreen: React.FC = () => {
  const { t } = useTranslation();

  return (
    <div className="max-w-3xl mx-auto px-4">
      <SEO 
        title={t('support.title')}
        description={t('support.subtitle')}
      />
      <div className="space-y-8">
        {/* Header */}
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            {t('support.title')}
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-300">
            {t('support.subtitle')}
          </p>
        </div>

        {/* Buy Coffee Section */}
        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg overflow-hidden">
          <div
            style={{
              boxSizing: 'border-box',
              backgroundColor: '#00A862',
              padding: '16px',
              borderRadius: '16px',
              boxShadow: '0 0 rgba(0,0,0,0), 0 0 rgba(0,0,0,0), 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -4px rgba(0, 0, 0, 0.1)',
              width: '100%',
              color: '#FFFFFF',
              textAlign: 'center',
            }}
          >
            <h3 style={{ fontSize: '15px', fontWeight: 600, lineHeight: 1.5, margin: 0 }}>
              Postaw kawę za:
            </h3>
          </div>
          
          <div style={{ display: 'flex', gap: '8px', marginTop: '12px', justifyContent: 'center', padding: '16px' }}>
            {[
              { size: 'small', price: '5 zł', icon: 'coffee-small-primary' },
              { size: 'medium', price: '10 zł', icon: 'coffee-medium-primary' },
              { size: 'large', price: '15 zł', icon: 'coffee-large-primary' }
            ].map((coffee) => (
              <a
                key={coffee.size}
                href={`https://buycoffee.to/byteflipper?coffeeSize=${coffee.size}`}
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'center',
                  alignItems: 'center',
                  padding: '16px',
                  borderRadius: '16px',
                  boxShadow: '0 0 rgba(0,0,0,0), 0 0 rgba(0,0,0,0), 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -4px rgba(0, 0, 0, 0.1)',
                  width: '100%',
                  textAlign: 'center',
                  backgroundColor: '#00A862',
                  color: '#FFFFFF',
                  textDecoration: 'none',
                }}
                target="_blank"
                rel="noopener noreferrer"
                title={`Postaw kawę za: ${coffee.price}`}
              >
                <img 
                  src={`https://buycoffee.to/img/${coffee.icon}.svg`}
                  alt={`${coffee.size} coffee icon`}
                  style={{ width: '36px', height: '36px' }}
                />
                <span style={{ fontSize: '15px', fontWeight: 700, marginTop: '8px', lineHeight: 1.5 }}>
                  {coffee.price}
                </span>
              </a>
            ))}
          </div>
        </div>

        {/* Other Donation Methods */}
        <div className="grid gap-6 md:grid-cols-2">
          {/* DonationAlerts */}
          <div className="bg-gradient-to-br from-purple-500 to-indigo-600 rounded-2xl p-6 text-white">
            <Heart className="w-8 h-8 mb-4" />
            <h2 className="text-xl font-semibold mb-2">{t('support.methods.donationalerts.title')}</h2>
            <p className="mb-4 text-white/90">
              {t('support.methods.donationalerts.description')}
            </p>
            <a
              href={SUPPORT_CONFIG.donationAlerts.url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-white/20 hover:bg-white/30 transition-colors rounded-xl px-6 py-3 text-sm font-medium"
            >
              {t('support.methods.donationalerts.button')}
            </a>
          </div>

          {/* Crypto Wallets */}
          <div className="bg-gradient-to-br from-blue-500 to-cyan-600 rounded-2xl p-6 text-white">
            <Wallet className="w-8 h-8 mb-4" />
            <h2 className="text-xl font-semibold mb-2">{t('support.methods.crypto.title')}</h2>
            <div className="space-y-3 mb-4">
              <div>
                <p className="text-sm font-medium text-white/90 mb-1">
                  {t('support.methods.crypto.usdt')} ({SUPPORT_CONFIG.cryptoWallets.usdt.network})
                </p>
                <code className="block bg-white/10 rounded-lg p-2 text-sm break-all">
                  {SUPPORT_CONFIG.cryptoWallets.usdt.address}
                </code>
              </div>
              <div>
                <p className="text-sm font-medium text-white/90 mb-1">{t('support.methods.crypto.ton')}</p>
                <code className="block bg-white/10 rounded-lg p-2 text-sm break-all">
                  {SUPPORT_CONFIG.cryptoWallets.ton.address}
                </code>
              </div>
            </div>
          </div>
        </div>

        {/* Thank You Message */}
        <div className="text-center bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg">
          <div className="inline-flex items-center justify-center w-12 h-12 bg-red-100 dark:bg-red-900/30 rounded-full mb-4">
            <Heart className="w-6 h-6 text-red-500 dark:text-red-400" />
          </div>
          <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
            {t('support.thankYou.title')}
          </h3>
          <p className="text-gray-600 dark:text-gray-400">
            {t('support.thankYou.description')}
          </p>
        </div>
      </div>
    </div>
  );
};