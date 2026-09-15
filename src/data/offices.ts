/**
 * Sub-Registrar offices in Ghaziabad district.
 *
 * TO BE FILLED BY THE CHAMBER. Addresses and timings are not published here
 * from memory — a wrong address on an advocate's website sends a client to the
 * wrong building. Fill `address` for each office and the table appears on the
 * page automatically. Offices with an empty address are skipped.
 */
export interface Office {
  tehsil: string;
  tehsilHi: string;
  /** Leave empty until confirmed on the ground or from the department portal. */
  address: string;
  addressHi: string;
  covers: string;
  coversHi: string;
}

export const OFFICES: Office[] = [
  { tehsil: 'Ghaziabad (Sadar)', tehsilHi: 'गाज़ियाबाद (सदर)', address: '', addressHi: '', covers: '', coversHi: '' },
  { tehsil: 'Loni', tehsilHi: 'लोनी', address: '', addressHi: '', covers: '', coversHi: '' },
  { tehsil: 'Modinagar', tehsilHi: 'मोदीनगर', address: '', addressHi: '', covers: '', coversHi: '' },
  { tehsil: 'Muradnagar', tehsilHi: 'मुरादनगर', address: '', addressHi: '', covers: '', coversHi: '' },
];

export const publishedOffices = () => OFFICES.filter((o) => o.address.trim().length > 0);
