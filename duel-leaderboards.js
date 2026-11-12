(function (root) {
  function duelLeaderboards(duels) {
    const combined = [];
    const personalBest = new Map();
    for (const duel of duels || []) {
      const names = duel.names || [];
      const logins = duel.logins || [];
      const totals = duel.totals || [];
      const scores = [Number(totals[0]) || 0, Number(totals[1]) || 0];
      combined.push({ names: [names[0] || logins[0] || "?", names[1] || logins[1] || "?"],
        logins: [logins[0] || "", logins[1] || ""], total: scores[0] + scores[1], duel: String(duel.at) });
      scores.forEach((total, side) => {
        const login = logins[side] || "";
        const entry = { name: names[side] || login || "?", login, total, duel: String(duel.at) };
        if (!personalBest.has(login) || total > personalBest.get(login).total) personalBest.set(login, entry);
      });
    }
    return {
      combined: combined.sort((a, b) => b.total - a.total),
      individual: [...personalBest.values()].sort((a, b) => b.total - a.total),
    };
  }

  function duelByKey(duels, key) {
    return (duels || []).find((duel) => String(duel.at) === String(key));
  }

  function duelHref(key) {
    return "?duel=" + encodeURIComponent(String(key));
  }

  root.duelLeaderboards = duelLeaderboards;
  root.duelByKey = duelByKey;
  root.duelHref = duelHref;
  if (typeof module !== "undefined") module.exports = { duelLeaderboards, duelByKey, duelHref };
})(typeof window === "undefined" ? globalThis : window);
