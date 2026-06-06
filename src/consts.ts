// サイト全体で使う定数

export const SITE_TITLE = 'ばるでらまの株雑談';
export const SITE_DESCRIPTION =
  'スイングトレード・高配当・デイトレ・銘柄分析の記録ブログ。';

// カテゴリのスラッグ(URL用)とラベルの対応
export const CATEGORY_SLUGS: Record<string, string> = {
  スイングトレード: 'swing',
  高配当: 'high-yield',
  デイトレ: 'day-trade',
  銘柄分析: 'analysis',
};

// スラッグからラベルへの逆引き
export const SLUG_TO_CATEGORY: Record<string, string> = Object.fromEntries(
  Object.entries(CATEGORY_SLUGS).map(([label, slug]) => [slug, label])
);

// カテゴリの補足説明(一覧ページ等で利用)
export const CATEGORY_DESCRIPTIONS: Record<string, string> = {
  スイングトレード: '数日〜数週間の値幅取りに関する記録。',
  高配当: '配当利回りの高い銘柄や配当再投資に関する記録。',
  デイトレ: '一日で完結させる短期売買に関する記録。',
  銘柄分析: '個別銘柄のファンダメンタルズ・業績の分析。',
};
