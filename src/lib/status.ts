export type ProjectStatus = 'live' | 'field-testing' | 'prototype' | 'in-progress' | 'archived';

interface StatusEntry {
  label: string;
  /** Tailwind color token name (matches --color-* in global.css), not a raw hex. */
  color: 'signal' | 'amber' | 'status-gray';
}

/**
 * `status` decides badge color — it's the honesty mechanism of the site,
 * not decoration. `live`/`field-testing` get the signal colors; everything
 * else reads as gray so unfinished work never gets dressed up as shipped.
 */
export const STATUS: Record<ProjectStatus, StatusEntry> = {
  live: { label: 'En producción', color: 'signal' },
  'field-testing': { label: 'En pruebas de campo', color: 'amber' },
  prototype: { label: 'Prototipo', color: 'amber' },
  'in-progress': { label: 'En desarrollo', color: 'status-gray' },
  archived: { label: 'Archivado', color: 'status-gray' },
};
