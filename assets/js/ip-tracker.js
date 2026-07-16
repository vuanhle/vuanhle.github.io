(function () {
  function setText(id, text) {
    var node = document.getElementById(id);
    if (node) node.textContent = text || "Unavailable";
  }

  function applyGeo(data) {
    if (!data) return;
    setText("ip-address", data.ip);
    setText("ip-location", [data.city, data.region, data.country_name || data.country].filter(Boolean).join(", "));
    setText("ip-network", data.org || data.asn || data.timezone);
  }

  function applyIpOnly(data) {
    if (data && data.ip) setText("ip-address", data.ip);
  }

  if (!document.getElementById("ip-address")) return;

  Promise.allSettled([
    fetch("https://ipapi.co/json/").then(function (r) { return r.json(); }),
    fetch("https://api.ipify.org?format=json").then(function (r) { return r.json(); })
  ]).then(function (results) {
    var geo = results[0].status === "fulfilled" ? results[0].value : null;
    var ipOnly = results[1].status === "fulfilled" ? results[1].value : null;
    applyGeo(geo);
    applyIpOnly(ipOnly);
  }).catch(function () {
    setText("ip-address", "Blocked by browser or network");
    setText("ip-location", "Unavailable");
    setText("ip-network", "Unavailable");
  });
})();
