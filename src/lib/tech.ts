import {
  siAstro,
  siPhp,
  siMysql,
  siStripe,
  siTailwindcss,
  siVuedotjs,
  siPython,
  siFastapi,
  siInfluxdb,
  siMqtt,
  siEspressif,
  siArduino,
  siRaspberrypi,
  siOpencv,
  siDocker,
  siGit,
  siJavascript,
  siTypescript,
  siNginx,
  siLaravel,
  siVite,
  siLeaflet,
  siSqlite,
  siChartdotjs,
  siReact,
  siThreedotjs,
  siRedis,
} from 'simple-icons';

export interface TechEntry {
  label: string;
  /** simple-icons entry ({ path, hex }), or omitted for tech without a brand mark. */
  icon?: { path: string; hex: string };
}

/**
 * Slug registry resolved by `tech[]` in project frontmatter — add a
 * technology here once and it propagates to every card automatically.
 * Entries without a simple-icons match render as a plain mono chip.
 */
export const TECH: Record<string, TechEntry> = {
  astro: { label: 'Astro', icon: siAstro },
  php: { label: 'PHP', icon: siPhp },
  mysql: { label: 'MySQL', icon: siMysql },
  sqlite: { label: 'SQLite', icon: siSqlite },
  stripe: { label: 'Stripe', icon: siStripe },
  tailwind: { label: 'Tailwind CSS', icon: siTailwindcss },
  vue: { label: 'Vue 3', icon: siVuedotjs },
  python: { label: 'Python', icon: siPython },
  fastapi: { label: 'FastAPI', icon: siFastapi },
  influxdb: { label: 'InfluxDB', icon: siInfluxdb },
  mqtt: { label: 'MQTT', icon: siMqtt },
  esp32: { label: 'ESP32', icon: siEspressif },
  arduino: { label: 'Arduino', icon: siArduino },
  raspberrypi: { label: 'Raspberry Pi', icon: siRaspberrypi },
  opencv: { label: 'OpenCV', icon: siOpencv },
  docker: { label: 'Docker', icon: siDocker },
  git: { label: 'Git', icon: siGit },
  javascript: { label: 'JavaScript', icon: siJavascript },
  typescript: { label: 'TypeScript', icon: siTypescript },
  nginx: { label: 'Nginx', icon: siNginx },
  laravel: { label: 'Laravel', icon: siLaravel },
  vite: { label: 'Vite', icon: siVite },
  leaflet: { label: 'Leaflet', icon: siLeaflet },
  chartjs: { label: 'Chart.js', icon: siChartdotjs },
  react: { label: 'React', icon: siReact },
  threejs: { label: 'Three.js', icon: siThreedotjs },
  redis: { label: 'Redis', icon: siRedis },

  // Sin icono de marca en simple-icons — chip mono-tipo.
  lora: { label: 'LoRa 868MHz' },
  yolov8: { label: 'YOLOv8' },
  verifactu: { label: 'VeriFactu / AEAT' },
  telegraf: { label: 'Telegraf' },
  starlark: { label: 'Starlark' },
  jsn_sr04t: { label: 'JSN-SR04T' },
  mediapipe: { label: 'MediaPipe' },
  aos: { label: 'AOS' },
  motion: { label: 'Motion' },
  mpu6050: { label: 'MPU6050' },
  pt100: { label: 'PT100' },
};

export function resolveTech(slug: string): TechEntry {
  return TECH[slug] ?? { label: slug };
}
