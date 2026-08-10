export type ProjectCategory = 'hardware-software' | 'web-app' | 'ecommerce' | 'security' | 'site';

export const CATEGORY_LABEL: Record<ProjectCategory, string> = {
  'hardware-software': 'Hardware + software',
  'web-app': 'Aplicación web',
  ecommerce: 'E-commerce',
  security: 'Seguridad',
  site: 'Sitio web',
};
