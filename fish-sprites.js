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
const tierOf = (f) => (f.tier === "unique" ? "gold" : f.price >= 500 ? "red" : f.price >= 100 ? "pink" : f.price >= 30 ? "purple"
  : f.price >= 10 ? "blue" : f.price >= 3 ? "lightblue" : "white");
const BIG = new Set(["red", "gold"]);  // these get the big alert in the middle of the stream
// how long one catch plays, ms: the cast, the strip, then the result stays. With 2+ more catches waiting a plain
// one goes fast, so the screen keeps up with the chat; red and gold always get their full show.
// fishing.html (the pier) and fishing-art.html (the alerts) both use this, so they stay in step.
// a fishing duel: six slot reels spin, stop one by one (2.2 s apart), then the result and the voice
const DUEL_TIMES = { cast: 0, spin: 15000, hold: 5000 };
function playTimes(e, waiting) { return e.type === "fishduel" ? DUEL_TIMES : catchTimes(e.fish, waiting); }
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
// draws one angler: their bought skin, or the free one in their own look
function drawAnglerSprite(ctx, login, skin, x, y, flip = false, scale = 1) {
  const own = SKIN_SPRITES[skin];
  if (own) return drawRows(ctx, own.rows, own.pal, x, y, flip, scale);
  const L = lookOf(login);
  drawRows(ctx, BODY, { ...BASE, s: L.skin, h: L.hair, m: "#8a3a3a", c: L.coat, d: shade(L.coat), z: "#2a2320",
    p: "#3a3a48", b: "#2a2a30" }, x, y, flip, scale);
  drawRows(ctx, HATS[L.hat], { y: "#f5c542", a: L.hatColor, w: "#f3efe8" }, x, y, flip, scale);
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

const fishRows = (f) => (f.tier === "unique" ? [...CROWN, ...(SHAPES[f.shape] || SHAPES.fish)] : SHAPES[f.shape] || SHAPES.fish);
const fishCanvas = (f, scale) => spriteCanvas(fishRows(f), { ...fishPal(f), y: "#f0c030" }, scale);
