// Pixel fish for the fishing pages (fishing.html on the pier, fishing-art.html for the big alerts).
// One letter per pixel: o outline, k black, w white, a / b / c the fish's own colors (casino.py FISH), y crown.
// Rarity colors, cheapest to dearest: white, light blue, blue (plain catches), dark purple and bright pink (a small
// alert), red (the dearest ones that can be caught again and again: a big alert in the middle of the stream) and
// gold: only the one-of-a-kind fish, each caught once ever (the biggest alert).

const SHAPES = {
  fish: [
    ".....occo.......",
    "...oooaaooo..oo.",
    "..oaaaaaaaaooco.",
    ".oawkaaaaaaaocco",
    "oaaaaaaaaaaaacco",
    ".obbbbbbbbbbocco",
    "..obbbbbbbbo.oco",
    "...oooccooo...oo"],
  small: [
    "...oooo.....",
    ".ooaaaaoo.o.",
    "okaaaaaaaoco",
    "obbbbbbbbocc",
    ".oobbbboo.o.",
    "...oooo....."],
  tall: [
    "....oc......",
    "...oaco.....",
    "..oaaaao....",
    ".oaaaaaao...",
    "owkaaaaaaooo",
    "oaaaaaaaaocc",
    "obbbbbbbbocc",
    ".obbbbbbbooo",
    "..obbbbbo...",
    "...obcbo....",
    "....oco....."],
  long: [
    "..oooooooooooooooo.....",
    ".okaaaaaaaaaaaaaaaoo.o.",
    "oaaaaaaaaaaaaaaaaaaaoco",
    "obbbbbbbbbbbbbbbbbbbocc",
    ".oobbbbbbbbbbbbbbboo.o.",
    "...ooooooooooooooo....."],
  boot: [
    "..oooooo....",
    "..occcco....",
    "..oaaaao....",
    "..oaaaao....",
    "..oaaaao....",
    "..oaaaao....",
    "..oaaaaooooo",
    ".oaaaaaaaaao",
    ".oaaaaaaaaao",
    ".obbbbbbbbbo",
    "..ooooooooo."],
  can: [
    ".oooooo.",
    "obbbbbbo",
    "oaaaaaao",
    "oacccaao",
    "oacccaao",
    "oaaaaaao",
    "oaaaaaao",
    "obbbbbbo",
    ".oooooo."],
  bottle: [
    "..oo..",
    "..cc..",
    "..oo..",
    ".oaao.",
    "oaaaao",
    "oabaao",
    "oabaao",
    "oaaaao",
    "oaaaao",
    ".oooo."],
  round: [
    "...c.c.c....",
    "..oooooooo..",
    ".oaaaaaaaao.",
    "okwaaaaaaaao",
    "oaaaaaaaaaaoc",
    "oaabbbbbbaaocc",
    "oabbbbbbbbaoc",
    ".obbbbbbbbo.",
    "..oooooooo..",
    "...c.c.c...."],
  flat: [
    ".......oo.......",
    ".....ooaaoo.....",
    "...ooaaaaaaoo...",
    ".ooaakaaaakaaoo.",
    "oaaaaaaaaaaaaaao",
    ".ooaaaaaaaaaaoo.",
    "...oobbbbbboo...",
    ".......oo.......",
    ".......c........",
    "........c......."],
  crab: [
    ".oo........oo.",
    "oaao......oaao",
    "oao........oao",
    ".oa.oooooo.ao.",
    "..oaakaakaao..",
    ".oaaaaaaaaaao.",
    "..oabbbbbbao..",
    ".o.o.o..o.o.o.",
    "o..o......o..o"],
  star: [
    ".....o.....",
    "....oao....",
    "....oao....",
    "oooooaooooo",
    ".oaaaaaaao.",
    "..oakakao..",
    "..oaaaaao..",
    ".oaaoooaao.",
    ".oao...oao.",
    "oo.......oo"],
  squid: [
    "....oo....",
    "...oaao...",
    "..oaaaao..",
    ".oaaaaaao.",
    ".oaaaaaao.",
    ".okaaaakao",
    ".oaaaaaao.",
    ".obbbbbbo.",
    ".oaoaaoao.",
    ".oa.oo.ao.",
    ".o..oa..o.",
    "....o....."],
  chest: [
    "..oooooooooo..",
    ".oaaaaaaaaaao.",
    "oaaaaaaaaaaaao",
    "occcccccccccco",
    "oaaaaabbaaaaao",
    "oaaaaobboaaaao",
    "oaaaaabbaaaaao",
    "oaaaaaaaaaaaao",
    "occcccccccccco",
    ".oooooooooooo."],
  key: [
    ".ooo..........",
    "oaaao.........",
    "oabaoooooooooo",
    "oaaaoaaaaaaaao",
    ".ooo.ooooaoaoo",
    ".........o.o.."],
  // more junk and tiddlers (2026-11-04)
  hook: [
    "...oo...",
    "...oao..",
    "...oao..",
    "...oao..",
    "...oao..",
    "o..oao..",
    "oo.oao..",
    "oao.oao.",
    ".oaaaao.",
    "..oooo.."],
  seaweed: [
    "....o.....",
    "...oao.o..",
    "...oaoobo.",
    "..oao.obo.",
    "..oao.obo.",
    "..oaoobo..",
    "...oaobo..",
    "..oaoobo..",
    "..oao.obo.",
    "..ocooocc.",
    ".occcccccc"],
  stick: [
    "...oooooooo...",
    "..oaaabaaaaoo.",
    ".oaabaaaabaaao",
    "oaaaaaabaaaao.",
    ".oocooooooo..."],
  shell: [
    "....oo....",
    "..ooaaoo..",
    ".oabababo.",
    "oababababo",
    "oababababo",
    ".oabababo.",
    "..occcco..",
    "...oooo..."],
  frog: [
    "..oo....oo..",
    ".owko..okwo.",
    ".oaaaooaaao.",
    "oaaaaaaaaaao",
    "oabbbbbbbbao",
    ".oaaaaaaaao.",
    "oao.oooo.oao",
    "oo........oo"],
  // bonus items: an XP scroll, a four-leaf clover, a rod upgrade kit (a box with a rod)
  scroll: [
    ".oooooooooo.",
    "occcccccccco",
    ".oaaaaaaaao.",
    ".oabbbbbbao.",
    ".oaaaaaaaao.",
    ".oabbbbbaao.",
    ".oaaaaaaaao.",
    ".oabbbbbbao.",
    "occcccccccco",
    ".oooooooooo."],
  clover: [
    "...oo.oo...",
    "..oaaoaao..",
    "..oaaaaao..",
    "oo.oaaao.oo",
    "oaaoaaaoaao",
    "oaaaaaaaaao",
    "oaaoaaaoaao",
    "oo.oaaao.oo",
    "...oobo....",
    "....ob.....",
    "....ob....."],
  rodkit: [
    "..........oo..",
    ".........oco..",
    "........oco...",
    ".......oco....",
    "..oooooooooo..",
    ".oaaaaaaaaaao.",
    "oaaaaabbaaaaao",
    "oaaaaabbaaaaao",
    "oaaaaaaaaaaaao",
    "oooooooooooooo"],
  // the easter-egg legends
  sock: [
    "..oooooo....",
    "..obbbbo....",
    "..oaaaao....",
    "..obbbbo....",
    "..oaaaao....",
    "..oaaaao....",
    "..oaaaao....",
    "..oaaaaoooo.",
    ".oaaaaaaaaao",
    ".oaaaaaaaccco",
    ".occcaaaaccco",
    "..ooooooooo."],
  stare: [
    "....oooooooo....",
    "..ooaaaaaaaaoo.o",
    ".owwwwawwwwaaooc",
    "owwkkwwwkkwwaocc",
    "owwkkwwwkkwwaocc",
    ".owwwwawwwwaaooc",
    "..obbbbbbbbbbo.o",
    "...ooookkoooo..."],
  duck: [
    "...oooo.......",
    "..oaaaao......",
    "..oakaao......",
    "oocoaaao......",
    "occcaaao..oo..",
    ".oooaaaooooao.",
    "...oaaaaaaaaao",
    "..oaabbbbbaaao",
    "..oaaaaaaaaao.",
    "...ooooooooo.."],
  pad: [
    "..oooooooooooo..",
    ".oaaaaaaaaaaaao.",
    "oaaboaaaaaaccaao",
    "oabbboaaaacaacao",
    "oaaboaaaaaaccaao",
    "oaaaaaaaaaaaaaao",
    "oaaaooooooooaaao",
    ".oaao......oaao.",
    "..oo........oo.."],
};
// the boss fish (shown big over the pier) and the bucket by every angler
const BOSS_ROWS = [
  "..........oo................",
  ".........oaao...............",
  "........oaaaao..............",
  "....ooooaaaaaaoooooooo...oo.",
  "..ooaaaaaaaaaaaaaaaaaaoo.oao",
  ".oaaraaaaaaaaaaaaaaaaaaaooaao",
  "oawwaaaaaaaaaaaaaaaaaaaaaaao.",
  ".owbwbbbbbbbbbbbbbbbbbbbaooao",
  "..oobbbbbbbbbbbbbbbbbboo.oao",
  "....oooooooooooooooooo....oo"];
const BOSS_PAL = { o: "#05070a", a: "#22323e", b: "#5a7a8a", r: "#ff3b3b", w: "#f3efe8" };
const BUCKET_ROWS = [
  ".oooooo.",
  "oggggggo",
  ".oaaaao.",
  ".oaaaao.",
  ".oaaaao.",
  "..oooo.."];
const BUCKET_PAL = { o: "#1b1d22", g: "#a9b4c2", a: "#6a7078" };
// the thief gull: the same little gull as on the pier (facing left), two frames where only the wing moves a pixel
// (fishing-art.html flies it over the whole screen)
const GULL_FLY = [
  ["...ooo....",
   "..owwwo...",
   ".yowkwo...",
   "..owwwwo..",
   "..owwgggo.",
   "...owwgggo",
   "....owwwo.",
   ".....oyo.."],
  ["...ooo....",
   "..owwwo...",
   ".yowkwo...",
   "..owwgggo.",
   "..owwwgggo",
   "...owwwwo.",
   "....owwwo.",
   ".....oyo.."]];
const GULL_FLY_PAL = { o: "#1b1d22", w: "#ffffff", g: "#a9b4c2", k: "#14161a", y: "#f08a3c" };
const CROWN = ["..y.y.y.", "..yyyyy."];  // drawn over one-of-a-kind fish
const BASE = { o: "#1b1d22", k: "#14161a", w: "#ffffff" };
const RARITY = { white: "#e8e8e8", lightblue: "#8fd0ff", blue: "#4f7bff", purple: "#7b3cff", pink: "#ff4fd8", red: "#ff3b3b",
  gold: "#f0c030" };
const TIERS = Object.keys(RARITY);

const fishPal = (f) => ({ ...BASE, a: f.colors[0], b: f.colors[1], c: f.colors[2] });
const width = (rows) => Math.max(...rows.map((r) => r.length));
// gold = one of a kind; the rest by price: red 500+, pink 100+, purple 30+, blue 10+, light blue 3+, white
// bonus items (casino.py "bonus:<color>": a perk instead of coins) carry their color in the tier
const tierOf = (f) => (f.tier === "unique" ? "gold" : (f.tier || "").startsWith("bonus:") ? f.tier.slice(6)
  : f.price >= 500 ? "red" : f.price >= 100 ? "pink" : f.price >= 30 ? "purple"
  : f.price >= 10 ? "blue" : f.price >= 3 ? "lightblue" : "white");
const BIG = new Set(["red", "gold"]);  // these get the big alert in the middle of the stream
// how long one catch plays, ms: the cast, the strip, then the result stays. With 2+ more catches waiting a plain
// one goes fast, so the screen keeps up with the chat; red and gold always get their full show.
// fishing.html (the pier), fishing-art.html (the alerts) and duel.html (full-screen duels) all use this, so they stay in step.
// a fishing duel (duel.html): the preview with both sides and the odds ("cast"), six slot reels stopping one by one
// 2.2 s apart, bait re-spins ("spin"), then the result, UPSET and red fish ("hold")
const DUEL_REEL_GAP = 2200, DUEL_BAIT_SPIN = 3500;
function duelTimes(e) {
  const bait = (e.bait || []).some(Boolean), red = (e.fish || []).flat().some((f) => BIG.has(tierOf(f)));
  return { cast: e.sides ? 6000 : 0, spin: 15000 + (bait ? DUEL_BAIT_SPIN : 0), hold: 6000 + (red ? 3000 : 0) };
}
function playTimes(e, waiting) { return e.type === "fishduel" ? duelTimes(e) : catchTimes(e.fish, waiting); }
function catchTimes(fish, waiting) {
  const tier = tierOf(fish);
  if (tier === "gold") return { cast: 900, spin: 3500, hold: 12000 };
  if (tier === "red") return { cast: 900, spin: 3500, hold: 7000 };
  return waiting >= 2 ? { cast: 400, spin: 1800, hold: 800 } : { cast: 900, spin: 3500, hold: 1800 };
}
const priceColor = (f) => RARITY[tierOf(f)];
// "2–5", "300", and for gold "500–?" (nobody knows how much the dearest one is worth)
function tierRange(tier) {
  const p = (window.FISH || []).filter((f) => tierOf(f) === tier).map((f) => f.price);
  if (!p.length) return "";
  const lo = Math.min(...p), hi = Math.max(...p);
  return tier === "gold" ? `${lo}–?` : lo === hi ? `${lo}` : `${lo}–${hi}`;
}
// a tier's fish silhouette: one color with a darker outline, a "?" goes on top in the page
function silhouette(tier, scale) {
  const c = RARITY[tier];
  const dark = "#" + [1, 3, 5].map((i) => Math.round(parseInt(c.slice(i, i + 2), 16) * 0.45).toString(16).padStart(2, "0")).join("");
  return spriteCanvas(SHAPES.fish, { o: dark, k: c, w: c, a: c, b: c, c: c }, scale);
}

function drawRows(ctx, rows, pal, x, y, flip = false, scale = 1) {
  const w = width(rows);
  rows.forEach((r, j) => {
    for (let i = 0; i < r.length; i++) {
      const col = pal[r[i]];
      if (!col) continue;
      ctx.fillStyle = col;
      ctx.fillRect((x + (flip ? w - 1 - i : i)) * scale, (y + j) * scale, scale, scale);
    }
  });
}
function spriteCanvas(rows, pal, scale) {
  const c = document.createElement("canvas");
  c.className = "px";
  c.style.imageRendering = "pixelated";
  c.width = width(rows) * scale;
  c.height = rows.length * scale;
  drawRows(c.getContext("2d"), rows, pal, 0, 0, false, scale);
  return c;
}
// ---- anglers: 16x24, facing right (the pier mirrors the left side) ----
// The free one is built from parts: the body (s skin, h hair, k eyes, m mouth, c coat, d its shade, z belt,
// p pants, b boots), then a hat; every chatter gets a look from their login. Bought skins (casino.py
// ANGLER_SKINS, !skin) are whole sprites of the same size, the hand that holds the rod at (13, 13).
const BODY = [
  "................",
  "................",
  "................",
  ".....hhhhhh.....",
  "....hhhhhhhh....",
  "....hsssssss....",
  "....hssksssk....",
  "....hsssssss....",
  "....hssssssss...",
  ".....sssssms....",
  "......ssss......",
  ".....cccccc.....",
  "....cccccccc....",
  "...dccccccccss..",
  "...dcccccccsss..",
  "...dcccccccc....",
  "....cccccccc....",
  "....zzzzzzzz....",
  "....pppppppp....",
  "....ppp..ppp....",
  "....ppp..ppp....",
  "....bbb..bbb....",
  "...bbbb..bbbb...",
  "................"];
const HATS = {
  hardhat: ["", "......yyyy......", ".....yyyyyy.....", "....yyyyyyyy....", "...yyyyyyyyyyy.."],
  cap: ["", "", ".....aaaaaa.....", "....aaaaaaaa....", "....aaaaaaaaaaa."],
  beanie: ["", ".......w........", ".....aaaaaa.....", "....aaaaaaaa....", "....wwwwwwww...."],
  bucket: ["", "", ".....aaaaaa.....", ".....aaaaaa.....", "...aaaaaaaaaa..."],
  none: [],
};
const SKIN_TONES = ["#f1c27d", "#ffdbac", "#e0ac69", "#c68642", "#8d5524"];
const HAIRS = ["#3a2a1a", "#7a4a24", "#d8b060", "#1b1d22", "#b84a2a", "#9aa3ad"];
const HAT_KINDS = ["hardhat", "cap", "beanie", "bucket", "none"];
const COATS = ["#f5c542", "#e8553d", "#3d8fe8", "#4fbf6a", "#b06bd6", "#f08a3c", "#e86ab0", "#5fd3d3"];
const shade = (hex) => "#" + [1, 3, 5].map((i) => Math.round(parseInt(hex.slice(i, i + 2), 16) * 0.72).toString(16).padStart(2, "0")).join("");
const hashOf = (s) => [...s].reduce((h, c) => (h * 31 + c.charCodeAt(0)) >>> 0, 7);
function lookOf(login) {  // the same login always gets the same look
  let h = hashOf(login);
  const pick = (arr) => { const v = arr[h % arr.length]; h = Math.floor(h / arr.length) + 13; return v; };
  return { coat: pick(COATS), skin: pick(SKIN_TONES), hair: pick(HAIRS), hat: pick(HAT_KINDS), hatColor: pick(COATS) };
}
const SKIN_SPRITES = {
  cat: {
    rows: [
      "................",
      "................",
      "................",
      "....o......o....",
      "...oao....oao...",
      "...oaaoooooaao..",
      "...oaaaaaaaaao..",
      "...oaaawaaawao..",
      "...oaaakaaakao..",
      "...oaaaapaaaao..",
      "....oaaawwaao...",
      ".....oaaaaao....",
      "....oaaaaaaao...",
      "...oaaabbbaaaa..",
      "...oaaabbbaaaa..",
      "...oaaabbbaao...",
      "....oaaaaaao....",
      "....oaaaaaao..o.",
      "....oaao.oaaooao",
      "....oaao.oao.oa.",
      "....oaao.oao....",
      "...oaaao.oaao...",
      "...ooooo.oooo...",
      "................"],
    pal: { o: "#3a2a1a", a: "#f08a3c", b: "#ffd8b0", w: "#ffffff", k: "#14161a", p: "#ff8fa0" },
  },
  donutdad: {  // a bald yellow dad in a white shirt
    rows: [
      "................",
      "................",
      "......k.k.......",
      ".....ssssss.....",
      "....ssssssss....",
      "....sssswwsww...",
      "....ssssswkswk..",
      "....sssssssssss.",
      "....ssssssssss..",
      "....sbbbbbbbs...",
      "....bbbmmmbb....",
      ".....bbbbbb.....",
      "....wwwwwwww....",
      "...wwwwwwwwwss..",
      "...wwwwwwwwsss..",
      "...wwwwwwwww....",
      "....wwwwwwww....",
      "....pppppppp....",
      "....pppppppp....",
      "....ppp..ppp....",
      "....ppp..ppp....",
      "....ppp..ppp....",
      "...kkkk..kkkk...",
      "................"],
    pal: { s: "#ffd90f", b: "#c8a878", w: "#ffffff", k: "#14161a", m: "#8a3a3a", p: "#4a7ad8" },
  },
  darklord: {  // a black helmet, a cape and the blinking chest panel
    rows: [
      "................",
      "................",
      ".....oooooo.....",
      "....ohkkkkko....",
      "...ohhkkkkkko...",
      "...okkgkkgkko...",
      "...okkkkkkkko...",
      "...okkkmmkkko...",
      "..okkkkmmkkkko..",
      "..okkkkkkkkkko..",
      "...oooooooooo...",
      "..cckkkkkkkkcc..",
      ".cckkkkkkkkkkcc.",
      ".ckkkrvbkkkkkss.",
      ".ckkkkkkkkkkkss.",
      ".ckkkkzzzzkkkc..",
      ".cckkkkkkkkkkc..",
      ".cc.kkkkkkkk.c..",
      "....kkk..kkk....",
      "....kkk..kkk....",
      "....kkk..kkk....",
      "...kkkk..kkkk...",
      "...kkkk..kkkk...",
      "................"],
    pal: { o: "#000000", k: "#1b1d22", h: "#4a5060", g: "#3a3f48", m: "#5a6068", c: "#2a1a24", r: "#e8402a",
      v: "#4fbf6a", b: "#3d8fe8", z: "#a9b4c2", s: "#3a3f48" },
  },
};
SKIN_SPRITES.skeleton = {  // bones, dark eye holes, a grin
  rows: [
    "................",
    "................",
    "................",
    ".....owwwwo.....",
    "....owwwwwwo....",
    "....owkkwkkwo...",
    "....owkkwkkwo...",
    "....owwwkwwwo...",
    ".....wkwkwkw....",
    "......owwwo.....",
    ".......ww.......",
    ".....wwwwww.....",
    "....w.wwww.w....",
    "...w..wwww..ww..",
    "...w.wwwwww.ww..",
    "...w..wwww......",
    "......wwww......",
    ".....ww..ww.....",
    ".....ww..ww.....",
    ".....w....w.....",
    ".....w....w.....",
    ".....w....w.....",
    "....ww....ww....",
    "................"],
  pal: { o: "#8a8f99", w: "#f3efe8", k: "#14161a" },
};
SKIN_SPRITES.seagull = {  // a big upright gull, wing for an arm, orange beak and legs
  rows: [
    "................",
    "................",
    "................",
    "......oooo......",
    ".....owwwwo.....",
    "....owwwwwwo....",
    "....owwwkwwoyy..",
    "....owwwwwwoyyy.",
    "....owwwwwwo....",
    ".....owwwwo.....",
    "....owwwwwwo....",
    "...ogwwwwwwwo...",
    "...oggwwwwwwyy..",
    "...ogggwwwwwyy..",
    "...ogggwwwwwwo..",
    "....oggwwwwwo...",
    ".....owwwwwo....",
    "......owwwo.....",
    "......y...y.....",
    "......y...y.....",
    "......y...y.....",
    "......y...y.....",
    ".....yy..yy.....",
    "................"],
  pal: { o: "#2a2f38", w: "#ffffff", g: "#a9b4c2", k: "#14161a", y: "#f08a3c" },
};
SKIN_SPRITES.fishman = {  // a fish on legs, a fin for a hand
  rows: [
    "................",
    "................",
    "......oooo......",
    ".....oaaaao.....",
    "....oaaaaaao....",
    "...oaaaaaaaao...",
    "...oaawkaaaao...",
    "...oaakkaaaao...",
    "...oaaaaaaaao...",
    "...okkkaaaaao...",
    "...oaaaaaaaaocc.",
    "...obbbbbbbbocc.",
    "...oaaaaaaaao...",
    "...obbbbbbbbo...",
    "....oaaaaaao....",
    ".....oaaaao.....",
    "......oaao......",
    ".....occcco.....",
    "....oc.oo.co....",
    "......p..p......",
    "......p..p......",
    "......p..p......",
    ".....pp..pp.....",
    "................"],
  pal: { o: "#1b2a3a", a: "#3d8fe8", b: "#8fd0ff", c: "#f08a3c", w: "#ffffff", k: "#14161a", p: "#f08a3c" },
};
SKIN_SPRITES.detective = {  // a boy detective: spiky hair, big round glasses, blue blazer, red bow tie, shorts
  rows: [
    "................",
    ".......h........",
    "......hh........",
    ".....hhhhhh.....",
    "....hhhhhhhh....",
    "...hhhhhhhhhh...",
    "...hhshhshhsh...",
    "...hgggsgggsh...",
    "...hgwkgwkgs....",
    "...hgggsgggs....",
    "....ssssmsss....",
    ".....sssss......",
    "....cwwwwwc.....",
    "...ccrrqrrccss..",
    "...ccrwwwrccss..",
    "...cccwwwccc....",
    "....cccwcccc....",
    "....pppppppp....",
    "....ppp..ppp....",
    "....sss..sss....",
    "....www..www....",
    "....www..www....",
    "...bbbb..bbbb...",
    "................"],
  pal: { h: "#2a2a34", s: "#ffdbac", g: "#4a5262", w: "#ffffff", k: "#14161a", m: "#a0504a",
    c: "#2f5fb8", r: "#e8302a", q: "#9a1a18", p: "#5a6070", b: "#6a3a22" },
};
// rods (casino.py RODS, !rod buy): body, handle and a glint, the same on the pier, the duel and the shop
const ROD_LOOK = {
  stick: { b: "#6a4422", h: "#4a2e14" },
  bamboo: { b: "#d8c070", h: "#7a5a22", n: "#8a7a3a" },  // n: bamboo knots
  fiberglass: { b: "#5fd3ff", h: "#ffffff" },
  carbon: { b: "#2a2d36", h: "#e8553d", n: "#6a7080" },
  golden: { b: "#f5c542", h: "#b8862a", n: "#fff3a0" },
};
const rodLook = (id) => ROD_LOOK[id] || ROD_LOOK.stick;
// a 12x12 rod icon: the rod from the handle (bottom left) to the tip, a reel, the line and the bobber
const ROD_ICON = [
  "...........b",
  "..........nl",
  ".........b.l",
  "........b..l",
  ".......n...l",
  "......b....l",
  ".....b.....o",
  "....n......w",
  "...brr......",
  "..h.rr......",
  ".h..........",
  "h..........."];
function rodIcon(id, scale) {
  const L = rodLook(id);
  return spriteCanvas(ROD_ICON, { b: L.b, n: L.n || L.b, h: L.h, r: "#a9b4c2", l: "#dfe6ee", o: "#e8553d", w: "#ffffff" }, scale);
}
// ---- the angler in 3 parts (casino.py ANGLER_PARTS, !head / !torso / !legs): head = sprite rows 0-10,
// torso = 11-17 (the hand that holds the rod at (13, 13)), legs = 18-23. "angler" in a slot = the free part in the
// viewer's own colors; the old whole skins are cut into parts; NEW_PARTS are drawn for one slot only. ----
const PART_ROWS = { head: [0, 11], torso: [11, 18], legs: [18, 24] };
const SKIN = "#ffdbac";
const NEW_PARTS = {
  head: {
    robot: { rows: ["................", ".......a........", ".......o........", "....oooooooo....", "....obbbbbbo....", "....obebbebo....",
      "....obbbbbbo....", "....obrrrrbo....", "....obbbbbbo....", "....oooooooo....", "......oooo......"],
      pal: { o: "#2a2f38", b: "#a9b4c2", a: "#e8553d", e: "#5fd3ff", r: "#3a3f48" } },
    alien: { rows: ["................", "...o........o...", "....o......o....", "....oaaaaaao....", "...oaaaaaaaao...", "...okkaaaakko...",
      "...okkaaaakko...", "...oaaaaaaaao...", "....oaaaaaao....", ".....oaaaao.....", "......oaao......"],
      pal: { a: "#7fd18b", k: "#14161a", o: "#2a5a2a" } },
    pumpkin: { rows: [".......gg.......", "......g.........", "....oooooooo....", "...oaaaaaaaao...", "..oaakaaaakaao..", "..oaakkaakkaao..",
      "..oaaaaaaaaaao..", "..oakakakakaao..", "...oaakakakao...", "....oooooooo....", "......ssss......"],
      pal: { a: "#f08a3c", k: "#3a1a0a", o: "#a04a1a", g: "#4fbf6a", s: SKIN } },
    frog: { rows: ["................", "................", "...ooo....ooo...", "..owkwo..owkwo..", "..oaaaooooaaao..", "..oaaaaaaaaaao..",
      "..oaaaaaaaaaao..", "..oammmmmmmmao..", "...oaaaaaaaao...", "....oooooooo....", "......aaaa......"],
      pal: { a: "#5aa83a", w: "#ffffff", k: "#14161a", m: "#c0504a", o: "#2a5a1a" } },
    wizard: { rows: [".......o........", "......oho.......", ".....ohhho......", "....ohhyhho.....", "...ohhhhhhho....", "..ooooooooooo...",
      "....ssssssss....", "....skssskss....", "....wwssssww....", "....wwwwwwww....", ".....wwwwww....."],
      pal: { h: "#5a3aa8", y: "#f5c542", o: "#2a1a4a", s: SKIN, k: "#14161a", w: "#e8e8e8" } },
    viking: { rows: ["................", "..w..........w..", "..ww........ww..", "...wyyyyyyyyw...", "...oyyyyyyyyo...", "....ssssssss....",
      "....skssskss....", "....ssssssss....", "....rrrrrrrr....", "....rrrrrrrr....", ".....rrrrrr....."],
      pal: { w: "#f3efe8", o: "#6a7080", y: "#a9b4c2", s: SKIN, k: "#14161a", r: "#b84a2a" } },
    astronaut: { rows: ["................", "....oooooooo....", "...owwwwwwwwo...", "..owwggggggwwo..", "..owghggggggwo..", "..owggggggggwo..",
      "..owggggggggwo..", "..owwggggggwwo..", "...owwwwwwwwo...", "....oooooooo....", "......wwww......"],
      pal: { o: "#6a7080", w: "#f3efe8", g: "#2a5aa8", h: "#a8d8ff" } },
    clown: { rows: ["................", "..gg........gg..", ".gggg......gggg.", ".ggg.wwwwww.ggg.", "....wwwwwwww....", "....wbwwwwbw....",
      "....wkwwwwkw....", "....wwwnnwww....", "....wrrrrrrw....", ".....wwwwww.....", "......wwww......"],
      pal: { g: "#4fbf6a", w: "#ffffff", b: "#3d8fe8", k: "#14161a", n: "#e8302a", r: "#e8302a" } },
    shiba: { rows: ["................", "...o........o...", "...oao....oao...", "...oaaooooaao...", "...oaaaaaaaao...", "...oawkaawkao...",
      "...oaaaaaaaao...", "...owwwkkwwwo...", "....owwwwwwo....", ".....oaaaao.....", "......aaaa......"],
      pal: { a: "#e8a050", w: "#fff3e0", k: "#14161a", o: "#6a3a1a" } },
    shades: { rows: ["................", "................", ".....hhhhhh.....", "....hhhhhhhh....", "....hsssssss....", "...kkkkkkkkkk...",
      "...kkwkk.kwkk...", "....ssssssss....", "....sssmmsss....", ".....ssssss.....", "......ssss......"],
      pal: { h: "#3a2a1a", s: "#c68642", k: "#14161a", w: "#ffffff", m: "#8a3a3a" } },
  },
  torso: {
    hoodie: { rows: [".....cccccc.....", "....ccwccwcc....", "...dccwccwccss..", "...dcccccccsss..", "...dcppppppc....", "....cppppppc....", "....cccccccc...."],
      pal: { c: "#5a6070", d: "#3a3f48", w: "#e8e8e8", p: "#4a5060", s: SKIN } },
    tuxedo: { rows: [".....kwwwwk.....", "....kkwrrwkk....", "...kkkwwwwkkss..", "...kkkwkwkksss..", "...kkkwwwwkk....", "....kkwkwwkk....", "....kkkkkkkk...."],
      pal: { k: "#1b1d22", w: "#ffffff", r: "#e8302a", s: SKIN } },
    hawaiian: { rows: [".....rrrrrr.....", "....rryrrgrr....", "...drrrgrryrss..", "...dryrrrrrsss..", "...drrrgryrr....", "....rgrrrrgr....", "....zzzzzzzz...."],
      pal: { r: "#e8553d", y: "#f5c542", g: "#4fbf6a", d: "#a03a2a", z: "#6a4a2a", s: SKIN } },
    armor: { rows: [".....mmmmmm.....", "....mmmmmmmm....", "...dmmllllmmgg..", "...dmmlmmlmggg..", "...dmmllllmm....", "....mmmmmmmm....", "....zzyyzzzz...."],
      pal: { m: "#a9b4c2", l: "#e8e8e8", d: "#6a7080", g: "#6a7080", z: "#3a3f48", y: "#f5c542" } },
    lifevest: { rows: [".....oooooo.....", "....oowwwwoo....", "...dowwwwwwoss..", "...dooooooosss..", "...dowwwwwwo....", "....oooooooo....", "....zzzzzzzz...."],
      pal: { o: "#f08a3c", w: "#e8e8e8", d: "#a05a20", z: "#3a3a48", s: SKIN } },
    sailor: { rows: [".....wbwbwb.....", "....bwbwbwbw....", "...dwbwbwbwbss..", "...dbwbwbwbsss..", "...dwbwbwbwb....", "....bwbwbwbw....", "....zzzzzzzz...."],
      pal: { w: "#ffffff", b: "#2a5aa8", d: "#1a3a78", z: "#2a2a30", s: SKIN } },
    hero: { rows: [".....cccccc.....", "....ccyyyycc....", "...dccyrrycccss.", "...dcccyycccsss.", "...dcccccccc....", "....cccccccc....", "....yyyyyyyy...."],
      pal: { c: "#3d8fe8", y: "#f5c542", r: "#e8302a", d: "#e8302a", s: SKIN } },
    labcoat: { rows: [".....wwkkww.....", "....wwwkkwww....", "...gwwwkkwwwss..", "...gwwwkkwwsss..", "...gwbwwwwbw....", "....wwwwwwww....", "....wwwwwwww...."],
      pal: { w: "#f3f3f3", k: "#5fa8d8", g: "#c8ccd4", b: "#3d8fe8", s: SKIN } },
    fishsweater: { rows: [".....cccccc.....", "....cccccccc....", "...dccffffcfss..", "...dcfkffffsss..", "...dccffffcfc...", "....cccccccc....", "....zzzzzzzz...."],
      pal: { c: "#e86ab0", d: "#a04a80", f: "#5fd3ff", k: "#14161a", z: "#3a3a48", s: SKIN } },
    rainbow: { rows: [".....rrrrrr.....", "....oooooooo....", "...dyyyyyyyyss..", "...dggggggggsss.", "...dbbbbbbbb....", "....pppppppp....", "....zzzzzzzz...."],
      pal: { r: "#e8302a", o: "#f08a3c", y: "#f5c542", g: "#4fbf6a", b: "#3d8fe8", p: "#9b6ad6", d: "#c8402a", z: "#3a3a48", s: SKIN } },
  },
  legs: {
    jeans: { rows: ["....jjjjjjjj....", "....jjj..jjj....", "....jjj..jjj....", "....jjj..jjj....", "...wwww..wwww...", "................"],
      pal: { j: "#3d6ab8", w: "#f3efe8" } },
    sandals: { rows: ["....yyyyyyyy....", "....yyy..yyy....", "....sss..sss....", "....sss..sss....", "...bbbb..bbbb...", "................"],
      pal: { y: "#f5c542", s: SKIN, b: "#6a4a2a" } },
    kilt: { rows: ["....rgrgrgrg....", "...rgrgrgrgrg...", "....sss..sss....", "....www..www....", "...kkkk..kkkk...", "................"],
      pal: { r: "#c8302a", g: "#2a6a3a", s: SKIN, w: "#f3efe8", k: "#1b1d22" } },
    robolegs: { rows: ["....mmmmmmmm....", "....mlm..mlm....", "....mmm..mmm....", "....mlm..mlm....", "...mmmm..mmmm...", "................"],
      pal: { m: "#a9b4c2", l: "#5fd3ff" } },
    skates: { rows: ["....pppppppp....", "....ppp..ppp....", "....ppp..ppp....", "...rrrr..rrrr...", "...rrrr..rrrr...", "...w.w....w.w..."],
      pal: { p: "#3a3a48", r: "#e86ab0", w: "#f5c542" } },
    flippers: { rows: ["....pppppppp....", "....ppp..ppp....", "....sss..sss....", "...ggg....ggg...", "..gggg....gggg..", ".ggggg....ggggg."],
      pal: { p: "#2a5aa8", s: SKIN, g: "#4fbf6a" } },
    cowboy: { rows: ["....jjjjjjjj....", "....jjj..jjj....", "....bbb..bbb....", "....bbb..bbb....", "...bbbby.bbbby..", "....kk....kk...."],
      pal: { j: "#4a6aa8", b: "#8a5a2a", y: "#f5c542", k: "#3a2a1a" } },
    tutu: { rows: ["..pppppppppppp..", ".pppppppppppppp.", "....sss..sss....", "....sss..sss....", "...pppp..pppp...", "................"],
      pal: { p: "#ff8fd0", s: SKIN } },
    pegleg: { rows: ["....pppppppp....", "....ppp..ppp....", "....ppp...w.....", "....ppp...w.....", "...bbbb...w.....", "................"],
      pal: { p: "#3a2a1a", b: "#1b1d22", w: "#b8946a" } },
    clownshoes: { rows: ["....rrrrrrrr....", "....rrr..rrr....", "....yyy..yyy....", "....yyy..yyy....", ".rrrrrr..rrrrrr.", ".rrrrrr..rrrrrr."],
      pal: { r: "#e8302a", y: "#f5c542" } },
  },
};
// one part: { rows (its own rows only), pal }, or null for the free one
function partOf(slot, id) {
  if (NEW_PARTS[slot][id]) return NEW_PARTS[slot][id];
  const whole = SKIN_SPRITES[id];
  return whole ? { rows: whole.rows.slice(...PART_ROWS[slot]), pal: whole.pal } : null;
}
// look: { head, torso, legs } (an old skin id string still works: the whole skin)
function drawAnglerSprite(ctx, login, skin, x, y, flip = false, scale = 1) {
  const look = typeof skin === "string" ? { head: skin, torso: skin, legs: skin } : skin || {};
  const L = lookOf(login);
  const free = { ...BASE, s: L.skin, h: L.hair, m: "#8a3a3a", c: L.coat, d: shade(L.coat), z: "#2a2320", p: "#3a3a48", b: "#2a2a30" };
  for (const slot of ["legs", "torso", "head"]) {
    const [a, b] = PART_ROWS[slot], part = partOf(slot, look[slot] || "angler");
    if (part) drawRows(ctx, part.rows, part.pal, x, y + a, flip, scale);
    else {
      drawRows(ctx, BODY.slice(a, b), free, x, y + a, flip, scale);
      if (slot === "head") drawRows(ctx, HATS[L.hat], { y: "#f5c542", a: L.hatColor, w: "#f3efe8" }, x, y, flip, scale);
    }
  }
}
function anglerCanvas(login, skin, scale) {
  const c = document.createElement("canvas");
  c.className = "px";
  c.style.imageRendering = "pixelated";
  c.width = 16 * scale;
  c.height = 24 * scale;
  drawAnglerSprite(c.getContext("2d"), login, skin, 0, 0, false, scale);
  return c;
}
// one part on its own (the shops): the default angler wears it, so it is seen on a body
function partCanvas(slot, id, scale) {
  return anglerCanvas("shop", { head: "angler", torso: "angler", legs: "angler", [slot]: id }, scale);
}

const fishRows = (f) => (f.tier === "unique" ? [...CROWN, ...(SHAPES[f.shape] || SHAPES.fish)] : SHAPES[f.shape] || SHAPES.fish);
const fishCanvas = (f, scale) => spriteCanvas(fishRows(f), { ...fishPal(f), y: "#f0c030" }, scale);
