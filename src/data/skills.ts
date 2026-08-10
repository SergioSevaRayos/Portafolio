export interface SkillGroup {
  label: string;
  /** Slugs resolved against src/lib/tech.ts */
  items: string[];
}

export const SKILLS: SkillGroup[] = [
  { label: 'Frontend', items: ['astro', 'vue', 'typescript', 'javascript', 'tailwind', 'vite'] },
  { label: 'Backend', items: ['php', 'python', 'fastapi', 'laravel'] },
  { label: 'Datos', items: ['mysql', 'sqlite', 'influxdb'] },
  { label: 'Hardware / IoT', items: ['esp32', 'arduino', 'raspberrypi', 'lora', 'mqtt', 'jsn_sr04t'] },
  { label: 'Infraestructura', items: ['docker', 'nginx', 'git', 'telegraf'] },
  { label: 'Visión por ordenador', items: ['opencv', 'yolov8'] },
];
