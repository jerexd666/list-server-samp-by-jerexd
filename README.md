🚀 SA-MP Server Fetcher (Bot-Ready JSON)

> Clean • Fast • Bot-Friendly



Script Node.js untuk mengambil 20 server SA-MP dari sa-mp.co.id, memformat ulang datanya menjadi JSON rapi, tanpa data player/user, dan siap diimplementasikan ke bot WhatsApp / Discord / API.


---

✨ Fitur Utama

🔍 Ambil 20 server SA-MP teratas

🧹 Tanpa data user / players list (privacy-safe)

📦 Output JSON bersih & konsisten

🤖 Siap dipakai di Bot WhatsApp / Discord

⚡ Ringan & cepat (axios)

🛠 Mudah dikembangkan (filter, sort, cache, API)



📂 Contoh Output

{
  "source": "sa-mp.co.id",
  "fetched_at": "2025-12-26T14:40:00.000Z",
  "total_displayed": 20,
  "servers": [
    {
      "id": 2993,
      "name": "Arsy Asia Gta Multiplayer Indonesia",
      "ip": "31.58.143.22",
      "port": 7777,
      "address": "31.58.143.22:7777",
      "players": {
        "online": 727,
        "max": 1000
      },
      "gamemode": "Arsy Asia by ELNINO",
      "language": "Indonesia",
      "map": "Full Indonesia",
      "version": "0.3.7-R2",
      "time": "00:00",
      "weather": 6,
      "website": "discord.gg/airasiarp",
      "status": "online"
    }
  ]
}



⚙️ Instalasi

npm install axios

Pastikan Node.js versi 18+.



▶️ Menjalankan Script

node samp.js

Output akan langsung berupa JSON rapi ke terminal atau bisa ditangkap
