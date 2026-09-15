import math

CX = CY = 100.0

def leaf(bx, by, ang, L, W):
    a = math.radians(ang)
    ux, uy = math.cos(a), math.sin(a)
    px, py = -uy, ux
    P = lambda al, ac: (bx + ux*al + px*ac, by + uy*al + py*ac)
    tip, b1, b2 = P(L, 0), P(0, W*0.09), P(0, -W*0.09)
    c1, c2 = P(L*0.32,  W*0.60), P(L*0.80,  W*0.30)
    c3, c4 = P(L*0.80, -W*0.30), P(L*0.32, -W*0.60)
    return (f"M{b1[0]:.1f},{b1[1]:.1f} C{c1[0]:.1f},{c1[1]:.1f} {c2[0]:.1f},{c2[1]:.1f} {tip[0]:.1f},{tip[1]:.1f} "
            f"C{c3[0]:.1f},{c3[1]:.1f} {c4[0]:.1f},{c4[1]:.1f} {b2[0]:.1f},{b2[1]:.1f} Z")

def branch(a0, a1, n, R, L, W, tilt):
    out = []
    d = 1 if a1 > a0 else -1
    for i in range(n):
        t = a0 + (a1 - a0) * i / (n - 1)
        a = math.radians(t)
        bx, by = CX + R*math.cos(a), CY + R*math.sin(a)
        out.append(leaf(bx, by, t + tilt * d, L, W))   # radial, tilted along the branch
    return out

def arc(a0, a1, r):
    x0, y0 = CX + r*math.cos(math.radians(a0)), CY + r*math.sin(math.radians(a0))
    x1, y1 = CX + r*math.cos(math.radians(a1)), CY + r*math.sin(math.radians(a1))
    return f"M{x0:.1f},{y0:.1f} A{r},{r} 0 {1 if abs(a1-a0)>180 else 0} {1 if a1>a0 else 0} {x1:.1f},{y1:.1f}"

R, N, L, W, TILT = 62, 19, 25, 8.2, 64
upper = branch(190, 350, N, R, L, W, TILT)    # left → over the top → right
lower = branch(170,  10, N, R, L, W, TILT)    # left → under the bottom → right

print(f'''  <g class="wreath">
    <path d="{arc(190, 350, R)}" fill="none" stroke-width="2.2" stroke-linecap="round" />
    <path d="{arc(170, 10, R)}" fill="none" stroke-width="2.2" stroke-linecap="round" />
    <path d="{' '.join(upper)}" stroke="none" />
    <path d="{' '.join(lower)}" stroke="none" />
    <path d="M23,86 L44,104 M23,114 L44,96" fill="none" stroke-width="2.2" stroke-linecap="round" />
  </g>

  <g class="bow">
    <!-- upper limb: half-disc bulging left, flat edge on the right -->
    <path d="M99,46 C77,52 69,64 69,75 C69,87 80,95 99,98 Z" stroke="none" />
    <!-- lower limb, mirrored, with a clear gap for the arrow -->
    <path d="M99,154 C77,148 69,136 69,125 C69,113 80,105 99,102 Z" stroke="none" />
    <!-- limb tips drawn back to the nocks -->
    <path d="M99,46 L134,72 M99,98 L134,72 M99,154 L134,128 M99,102 L134,128"
          fill="none" stroke-width="2.4" stroke-linecap="round" />
    <circle cx="134" cy="72" r="4.2" stroke="none" />
    <circle cx="134" cy="128" r="4.2" stroke="none" />
    <path d="M134,72 L134,128" fill="none" stroke-width="2.4" stroke-linecap="round" />
  </g>

  <g class="arrow">
    <path d="M44,100 L152,100" fill="none" stroke-width="3.6" stroke-linecap="round" />
    <path d="M28,100 L56,89 L50,100 L56,111 Z" stroke="none" />
    <g fill="none" stroke-width="2.8" stroke-linecap="round">
      <path d="M126,100 L136,90 M126,100 L136,110" />
      <path d="M135,100 L145,90 M135,100 L145,110" />
      <path d="M144,100 L153,91 M144,100 L153,109" />
    </g>
  </g>''')
