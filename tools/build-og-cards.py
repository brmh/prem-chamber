#!/usr/bin/env python3
"""
Build the 1200x630 cards shown when a page is shared on WhatsApp or Facebook.

Every value is read out of src/data/site.ts rather than typed here, because the
year and the address are baked into the image as pixels — if they were written
twice they would drift apart the first time one of them changed.

    python3 tools/build-og-cards.py && \\
      npx --yes sharp-cli -i /tmp/og-en.svg -o public/og-en.png --format png
"""
import re
import subprocess
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent
site = (ROOT / 'src' / 'data' / 'site.ts').read_text()


def field(name):
    m = re.search(rf"\b{name}:\s*'([^']*)'", site)
    return m.group(1) if m else ''


BRAND, BRAND_HI = field('brand'), field('brandHi')
LINE1, LINE1_HI = field('line1'), field('line1Hi')
CITY, CITY_HI = field('city'), field('cityHi')
YEAR = field('practisingSince')

emblem = subprocess.run(
    ['python3', str(ROOT / 'tools' / 'build-emblem.py'), '--turn', '3'],
    capture_output=True, text=True, check=True).stdout
vb = re.search(r'viewBox="([^"]+)"', emblem).group(1)
art = emblem[emblem.index('>', emblem.index('<svg')) + 1: emblem.rindex('</svg>')].strip().replace('fill="CLR"', '')

DEVA = '&apos;Devanagari Sangam MN&apos;, &apos;Noto Sans Devanagari&apos;, sans-serif'


def card(out, brand, role, place, since, latin):
    fam = 'Georgia, serif' if latin else DEVA
    sans = 'Helvetica, Arial, sans-serif' if latin else DEVA
    rule = f'<rect x="513" y="415" width="62" height="2" fill="#a8804a"/>' if since else ''
    line = f'<text x="513" y="463" font-family="{sans}" font-size="26" fill="#d4b483">{since}</text>' if since else ''
    Path(out).write_text(f'''<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="630" viewBox="0 0 1200 630">
  <rect width="1200" height="630" fill="#0a2f24"/>
  <rect x="0" y="0" width="1200" height="8" fill="#a8804a"/>
  <svg x="118" y="150" width="330" height="330" viewBox="{vb}" fill="#d4b483" fill-rule="evenodd">{art}</svg>
  <text x="510" y="262" font-family="{fam}" font-size="80" fill="#ffffff">{brand}</text>
  <text x="513" y="320" font-family="{sans}" font-size="29" letter-spacing="2" fill="#d4b483">{role}</text>
  <text x="513" y="381" font-family="{sans}" font-size="28" fill="#a9b8b1">{place}</text>
  {rule}
  {line}
</svg>''')
    print(out)


card('/tmp/og-en.svg', BRAND, 'ADVOCATES', f'{LINE1}, {CITY}',
     f'Practising since {YEAR}' if YEAR else '', True)
card('/tmp/og-hi.svg', BRAND_HI, 'अधिवक्ता', f'{LINE1_HI}, {CITY_HI}',
     f'{YEAR} से प्रैक्टिस' if YEAR else '', False)
