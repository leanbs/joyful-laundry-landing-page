interface AnalyticsModule {
  init: () => void;
  gaAll: any;
}

let analyticsModule: AnalyticsModule;

export const baseAnalytics = async () => {
  if (!analyticsModule) {
    analyticsModule = await import(
      /* webpackChunkName: "analytics" */ './base.js'
    );
  }

  return analyticsModule;
};
