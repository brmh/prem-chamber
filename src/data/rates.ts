/**
 * Government charges used by the calculator.
 * These are set by state notification and change. Update them here, in one
 * place, and bump `verifiedOn` — the site shows that date to visitors.
 */
export const RATES = {
  /** Stamp duty on a sale deed, per cent of the chargeable value. */
  stampDutyPct: 7,

  /** Registration fee, per cent of the chargeable value. */
  registrationPct: 1,
  /** Ceiling on the registration fee. VERIFY against the current notification. */
  registrationCap: 30_000,

  /** Rebate where the buyer is a woman: 1% on value up to ₹10,00,000. */
  womenRebatePct: 1,
  womenRebateUpto: 1_000_000,

  verifiedOn: '2026-09-15',
} as const;

/** Area units people actually quote in Ghaziabad, converted to square metres. */
export const AREA_UNITS = [
  { id: 'sqm', sqm: 1, en: 'square metre', hi: 'वर्ग मीटर' },
  { id: 'sqyd', sqm: 0.83612736, en: 'square yard (gaj)', hi: 'वर्ग गज' },
  { id: 'sqft', sqm: 0.09290304, en: 'square foot', hi: 'वर्ग फुट' },
] as const;
