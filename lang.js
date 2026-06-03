// Language switcher utility
const LANG_KEY = 'fnhub_lang';

function getLang() {
  return localStorage.getItem(LANG_KEY) || 
    (navigator.language.startsWith('zh') ? 'zh' : 'en');
}

function setLang(lang) {
  localStorage.setItem(LANG_KEY, lang);
  applyLang(lang);
}

function applyLang(lang) {
  document.querySelectorAll('[data-zh]').forEach(el => {
    el.innerHTML = lang === 'zh' ? el.dataset.zh : el.dataset.en;
  });
  document.querySelectorAll('[data-zh-placeholder]').forEach(el => {
    el.placeholder = lang === 'zh' ? el.dataset.zhPlaceholder : el.dataset.enPlaceholder;
  });
  // Update switcher button
  const btn = document.getElementById('lang-btn');
  if (btn) btn.textContent = lang === 'zh' ? 'EN' : '中文';
  // Update html lang attr
  document.documentElement.lang = lang === 'zh' ? 'zh-CN' : 'en';
}

function initLang() {
  const lang = getLang();
  applyLang(lang);
}

document.addEventListener('DOMContentLoaded', initLang);
