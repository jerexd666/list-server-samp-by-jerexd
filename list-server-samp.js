// scrape by jerexd 
// saluran info scrape https://whatsapp.com/channel/0029VbAo3iNAjPXTxx0Luv33
// group wa https://chat.whatsapp.com/D90MlH881yt8FWcu1yVt5S
// community discord https://discord.gg/7U5dXt8tEe

import axios from "axios";

async function fetchServers() {
  try {
    const res = await axios.get(
      "https://sa-mp.co.id/api/server.php",
      {
        params: { _: Date.now() },
        headers: {
          "Accept": "application/json, text/javascript, */*; q=0.01",
          "X-Requested-With": "XMLHttpRequest",
          "Referer": "https://sa-mp.co.id/",
          "User-Agent":
            "Mozilla/5.0 (Linux; Android 10) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/137.0.0.0 Mobile Safari/537.36"
        }
      }
    );

    const servers = res.data.slice(0, 20).map(s => ({
      id: s.id,
      name: s.hostname,
      ip: s.ipAddress,
      port: s.port,
      address: `${s.ipAddress}:${s.port}`,
      players: {
        online: s.onlinePlayers,
        max: s.maxplayers
      },
      gamemode: s.gamemode,
      language: s.language,
      map: s.mapname,
      version: s.version,
      time: s.worldtime,
      weather: s.weather,
      website: s.weburl,
      status: s.online ? "online" : "offline"
    }));

    const output = {
      source: "sa-mp.co.id",
      fetched_at: new Date().toISOString(),
      total_displayed: servers.length,
      servers
    };

    
    console.log(JSON.stringify(output, null, 2));

    return output;

  } catch (err) {
    console.error("Fetch error:", err.message);
  }
}

fetchServers();
