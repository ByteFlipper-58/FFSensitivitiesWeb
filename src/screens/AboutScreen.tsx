import React from 'react';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';
import { Github, Heart, Download, Globe, MessageCircle, Users, Smartphone, Zap, Search, Share2, Shield } from 'lucide-react';
import { LINKS } from '../config/links';
import { LanguageSwitcher } from '../components/LanguageSwitcher';
import { SEO } from '../components/SEO';

export const AboutScreen: React.FC = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();

  return (
    <div className="max-w-4xl mx-auto px-4">
      <SEO 
        title={t('about.title')}
        description={t('about.subtitle')}
        image="https://raw.githubusercontent.com/ByteFlipper-58/FFSensitivities2/master/app/src/main/res/mipmap-xxxhdpi/ic_launcher_round.png"
      />
      {/* Hero Section */}
      <div className="bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl p-8 md:p-12 text-white mb-8">
        <div className="flex flex-col items-center text-center">
          <div className="w-20 h-20 bg-white/20 rounded-2xl flex items-center justify-center mb-6">
            <Smartphone className="w-10 h-10" />
          </div>
          <h1 className="text-3xl md:text-4xl font-bold mb-4">
            {t('about.title')}
          </h1>
          <p className="text-lg text-white/90 max-w-2xl">
            {t('about.subtitle')}
          </p>
        </div>
      </div>

      {/* Features Grid */}
      <div className="grid md:grid-cols-3 gap-6 mb-8">
        <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg border border-gray-100 dark:border-gray-700">
          <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/30 rounded-lg flex items-center justify-center mb-4">
            <Zap className="w-6 h-6 text-blue-600 dark:text-blue-400" />
          </div>
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
            {t('about.features.optimized.title')}
          </h3>
          <p className="text-gray-600 dark:text-gray-400">
            {t('about.features.optimized.description')}
          </p>
        </div>

        <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg border border-gray-100 dark:border-gray-700">
          <div className="w-12 h-12 bg-purple-100 dark:bg-purple-900/30 rounded-lg flex items-center justify-center mb-4">
            <Search className="w-6 h-6 text-purple-600 dark:text-purple-400" />
          </div>
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
            {t('about.features.search.title')}
          </h3>
          <p className="text-gray-600 dark:text-gray-400">
            {t('about.features.search.description')}
          </p>
        </div>

        <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg border border-gray-100 dark:border-gray-700">
          <div className="w-12 h-12 bg-green-100 dark:bg-green-900/30 rounded-lg flex items-center justify-center mb-4">
            <Share2 className="w-6 h-6 text-green-600 dark:text-green-400" />
          </div>
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
            {t('about.features.share.title')}
          </h3>
          <p className="text-gray-600 dark:text-gray-400">
            {t('about.features.share.description')}
          </p>
        </div>
      </div>

      {/* Download Section */}
      <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl p-8 mb-8 text-white">
        <div className="text-center mb-8">
          <h2 className="text-2xl font-bold mb-4">
            {t('about.download.title')}
          </h2>
          <p className="text-gray-300">
            {t('about.download.subtitle')}
          </p>
        </div>
        
        <div className="grid sm:grid-cols-2 gap-4 max-w-xl mx-auto">
          <a
            href={LINKS.stores.googlePlay}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-3 bg-green-600 hover:bg-green-700 rounded-xl p-4 transition-colors"
          >
            <Download className="w-5 h-5" />
            <span className="font-medium">Google Play</span>
          </a>
          <a
            href={LINKS.stores.ruStore}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-3 bg-blue-600 hover:bg-blue-700 rounded-xl p-4 transition-colors"
          >
            <Download className="w-5 h-5" />
            <span className="font-medium">RuStore</span>
          </a>
        </div>
      </div>

      {/* Social Links */}
      <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg border border-gray-100 dark:border-gray-700">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white text-center mb-8">
          {t('about.community.title')}
        </h2>
        
        <div className="grid sm:grid-cols-2 gap-4 max-w-xl mx-auto">
          <a
            href={LINKS.social.telegram}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-3 bg-gradient-to-r from-blue-400 to-blue-500 hover:from-blue-500 hover:to-blue-600 text-white rounded-xl p-4 transition-all transform hover:scale-[1.02]"
          >
            <MessageCircle className="w-5 h-5" />
            <span className="font-medium">{t('about.community.telegram')}</span>
          </a>
          
          <a
            href={LINKS.social.vk}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-3 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white rounded-xl p-4 transition-all transform hover:scale-[1.02]"
          >
            <Users className="w-5 h-5" />
            <span className="font-medium">{t('about.community.vk')}</span>
          </a>
          
          <a
            href={LINKS.social.website}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-3 bg-gradient-to-r from-purple-500 to-purple-600 hover:from-purple-600 hover:to-purple-700 text-white rounded-xl p-4 transition-all transform hover:scale-[1.02]"
          >
            <Globe className="w-5 h-5" />
            <span className="font-medium">{t('about.community.website')}</span>
          </a>
          
          <a
            href={LINKS.social.github}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-3 bg-gradient-to-r from-gray-700 to-gray-800 hover:from-gray-800 hover:to-gray-900 text-white rounded-xl p-4 transition-all transform hover:scale-[1.02]"
          >
            <Github className="w-5 h-5" />
            <span className="font-medium">{t('about.community.github')}</span>
          </a>

          {/* Mobile Support Button */}
          <button
            onClick={() => navigate('/support')}
            className="lg:hidden col-span-2 flex items-center justify-center gap-3 bg-gradient-to-r from-pink-500 to-rose-500 hover:from-pink-600 hover:to-rose-600 text-white rounded-xl p-4 transition-all transform hover:scale-[1.02]"
          >
            <Heart className="w-5 h-5" />
            <span className="font-medium">{t('common.support')}</span>
          </button>
        </div>
      </div>

      {/* Privacy Policy Link */}
      <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 mt-8 shadow-lg border border-gray-100 dark:border-gray-700">
        <button
          onClick={() => navigate('/privacy')}
          className="w-full flex items-center justify-center gap-3 bg-gradient-to-r from-indigo-500 to-indigo-600 hover:from-indigo-600 hover:to-indigo-700 text-white rounded-xl p-4 transition-all transform hover:scale-[1.02]"
        >
          <Shield className="w-5 h-5" />
          <span className="font-medium">{t('common.privacy')}</span>
        </button>
      </div>

      {/* Footer */}
      <div className="text-center mt-8 mb-4">
        <p className="flex items-center justify-center text-sm text-gray-600 dark:text-gray-400">
          {t('about.footer.madeWith')}
          <Heart className="w-4 h-4 mx-1 text-red-500" />
          {t('about.footer.for')}
        </p>
      </div>

      {/* Language Switcher */}
      <div className="flex justify-center mt-8">
        <LanguageSwitcher />
      </div>
    </div>
  );
};