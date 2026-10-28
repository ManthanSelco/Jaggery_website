# Jaggery Value Chain website (MERN)

SELCO Foundation ki Jaggery website, ab **MongoDB + Express + React + Node** par.
Website ka text aur design pehle jaisa hi hai. Har photo / video ka dabba ab database se aata hai,
aur **admin panel** (`/admin`) se badla ja sakta hai.

## Kya-kya hai

```
jaggery-mern/
├── api/index.js           Vercel serverless function (runs the Express API)
├── vercel.json            Vercel settings
├── client/                React (Vite) website + admin panel
│   ├── src/pages/         8 pages (Home, Steps 1-4, 5-6, 7-11, Machines, Plan your unit, Case study, More case studies)
│   ├── src/components/    SiteHeader, MediaSlot (photo/video box), VideoPlayer
│   ├── src/admin/         Admin panel (login, boxes, media library)
│   ├── public/assets/     Case-study PDF
│   └── public/uploads/    Website ki saari photos/videos (GitHub/Vercel par yahi se chalti hain)
└── server/                Express API
    ├── src/models/        Slot (media box), Media (uploaded file), Admin
    ├── src/routes/        auth, slots, media upload
    ├── src/utils/         photo/video compression (sharp + ffmpeg)
    ├── seed/              156 media boxes (slots.json)
    └── uploads/           admin se upload ki gayi files (sirf apne computer par, GitHub par nahi jaati)
```

## Naya design (v2)
- Naya modern look: photo wala bada hero, serif headings, terracotta buttons. Saara text pehle jaisa hi hai.
- Nav bar: Home, **Process** (pehle "11 Steps"), Machines, Plan your unit, Case study, More stories. Mobile par ☰ menu hai.
- **EN / ಕನ್ನಡ** button: poori website Kannada mein badal jaati hai, aur choice yaad rehti hai. Translations `client/src/i18n/kn.json` mein hain.
- **Search** (🔍 ya Ctrl+K) se kisi bhi page ki heading par seedha pahunch sakte ho.
- **Share** button: phone par apps ki share list khulti hai. Computer par WhatsApp, Facebook, LinkedIn, X, Telegram, Email aur Copy link milte hain.
- **Logo:** Admin → page "Site-wide (logo)" → box `site-logo` mein SELCO ka official logo (PNG/SVG) upload karo. Upload na karo to `client/public/selco-logo.png` wala logo dikhta hai.
- **Contact** page (`/contact`) aur har page ke footer mein SELCO Foundation ke contact details: phone, email, Bengaluru / Guwahati / Bhubaneswar office, website aur social media. Details `client/src/lib/contact.js` mein badal sakte ho.
- "Jaggery Processing" PDF se 50 nayi photos 63 dabbon mein lagi hain (`server/seed/media/images/pdf-*.jpg`).
- Fonts (Fraunces, Inter, Noto Kannada) website ke andar hi bundled hain, Google Fonts ki zaroorat nahi.

**Pehle se seed kiya hai?** `npm install` phir `npm run seed` chalao. Ye sirf nayi photos/videos jodta hai. Tumhari upload ki hui photos waise hi rehti hain, aur jo pehle se hai woh dobara nahi judta (duplicate nahi banta). `--reset` mat chalana, warna admin wale badlav chale jaayenge.

## Site switches (`client/src/lib/siteConfig.js`)
- `SHOW_CONTACT = false`: Contact page, menu ka "Contact" aur footer (SELCO contact details) abhi chhupe hue hain. Wapas dikhane ke liye `true` karo aur push karo. Kuch bhi delete nahi kiya gaya.
- `LOGO = '/jaggery-logo.svg'`: header ka logo. Purana SELCO logo `client/public/selco-logo.png` mein rakha hai.

## Pehli baar setup

**Zaroorat:** Node.js 20 ya naya, aur ek free MongoDB Atlas account.

### 1. MongoDB Atlas
1. https://cloud.mongodb.com par free **M0** cluster banao.
2. **Database Access** mein jaakar username + password wala database user banao.
3. **Network Access** mein apna IP add karo. Server kisi hosting par ho to uska IP, ya `0.0.0.0/0`.
4. **Connect → Drivers** se connection string copy karo.

### 2. Project chalao
```bash
npm install                                   # root, server aur client teeno install ho jaate hain
cp server/.env.example server/.env            # Windows: copy server\.env.example server\.env
```
`server/.env` kholo aur ye values bharo:
- `MONGODB_URI`: Atlas wali string. `<password>` badlo aur `?` se pehle `/jaggery` (database ka naam) lagao.
- `JWT_SECRET`: lamba random text. Ise `node -e "console.log(require('crypto').randomBytes(48).toString('hex'))"` se bana sakte ho.
- `ADMIN_EMAIL`, `ADMIN_PASSWORD`: admin panel ka login. Password kam se kam 8 characters ka ho.

```bash
# agar video upload par ffmpeg error aaye:  cd server && node node_modules/ffmpeg-static/install.js
npm run seed        # 156 media boxes (131 bhare hue, 15 apni videos), pehle se lagi photos/videos aur admin login bana deta hai
npm run dev         # website: http://localhost:5173   admin: http://localhost:5173/admin
```

## Admin panel kaise use karein
1. `/admin` par login karo.
2. Left side se page chuno. **Empty** filter se khaali dabbe dikhenge, aur search mein "crusher" jaisa shabd likh sakte ho.
3. Kisi dabbe par click karo, phir:
   - **Upload photo / video**: file drag karo. Photo apne aap WebP (max 1600px) ban jaati hai, aur video 720p MP4 ban jaati hai (20 MB ki video lagbhag 2 MB ki).
     Video ki awaaz hatani ho to "Remove sound" chuno. Video tircha ho to "Turn video" se seedha karo.
   - **YouTube link**: koi bhi YouTube link paste karo.
   - **Image link**: kisi aur website ki photo ka link. Sirf wahi photo lagao jise use karne ki permission ho, aur credit bharo.
   - **From library**: pehle upload ki gayi file dobara use karo.
4. Ek dabbe mein kai photo/video daal sakte ho. Visitors unke beech switch kar sakte hain. ↑ ↓ se order badlo.
5. **Save** dabao. Website par turant dikh jaayega. **See on page** se wahi dabba page par khulta hai.

## Live (production) par chalana
```bash
npm install
npm run build                       # React build -> client/dist
NODE_ENV=production npm start       # http://localhost:5000 par website + API + admin, sab ek saath
```
- **VPS / EC2:** upar wali commands chalao, aur `pm2` ya `systemd` se server chalta rakho. Nginx se domain jodo.
- **Render / Railway:** Build command `npm install && npm run build`, start command `npm start`, aur environment variables `.env` wale hi.
  Dhyan rakho ki uploads `server/uploads` folder mein save hote hain. Is folder ke liye **persistent disk** lagao, warna restart par uploaded files chali jaayengi.
- `server/uploads` ka backup lete raho. Database Atlas par safe rehta hai.

## GitHub + Vercel par publish karna

**1. MongoDB Atlas (ek baar)**
- Network Access → **ALLOW ACCESS FROM ANYWHERE** (`0.0.0.0/0`). Vercel ka IP fix nahi hota, isliye ye zaroori hai.
- Apne computer se `npm run check-db` aur `npm run seed` chalao, taaki database mein saare dabbe aa jaayen.

**2. GitHub par daalo** (`jaggery-mern` folder mein)
```bash
git init
git add .
git commit -m "Jaggery value chain website"
git branch -M main
git remote add origin https://github.com/<aapka-username>/jaggery-value-chain.git
git push -u origin main
```
`.env`, `node_modules` aur `server/uploads` GitHub par nahi jaate (`.gitignore`). Password safe rehta hai.

**3. Vercel**
1. vercel.com → **Add New → Project** → apna GitHub repo **Import** karo.
2. Framework: **Other**. Root directory: repo ka root (jahan `vercel.json` hai). Build settings `vercel.json` se apne aap aa jaati hain.
3. **Environment Variables** mein ye 4 daalo (value `server/.env` wali):
   `MONGODB_URI`, `JWT_SECRET`, `ADMIN_EMAIL`, `ADMIN_PASSWORD`
4. **Deploy** dabao. 1-2 minute mein link mil jaayega (`https://<naam>.vercel.app`). Admin: `/admin`.
5. Check: `https://<naam>.vercel.app/api/health` par `"db":true` dikhna chahiye.

**Vercel par photo/video upload**
Vercel ke paas permanent disk nahi hoti, isliye live site ke admin mein file upload band hai
(YouTube link, Image link aur From library chalte hain). Nayi photo/video daalne ka tareeka:
```bash
npm run dev               # apne computer par /admin se upload karo aur box mein lagao
npm run sync-uploads      # files client/public/uploads mein copy hoti hain
git add . && git commit -m "New media" && git push     # Vercel apne aap naya version bana deta hai
```
Database (Atlas) dono jagah same hai, isliye box ki setting live site par turant dikh jaati hai; file push ke baad aati hai.

## Kaam ki commands
| Command | Kya karta hai |
|---|---|
| `npm run dev` | Development: API (5000) + React (5173) |
| `npm run seed` | Naye boxes aur nayi seed photos jodta hai, bina duplicate ke; tumhari uploads safe rehti hain |
| `npm run seed -- --reset` | ⚠️ Saare boxes ko original content par wapas laata hai (admin uploads dabbon se hat jaate hain) |
| `npm --prefix server run seed -- --reset-password` | `.env` wala naya admin password laga deta hai |
| `npm run build` / `npm start` | Production build / server |
| `npm run check-db` | MongoDB connection test, kya theek karna hai woh batata hai |
| `npm run sync-uploads` | Apne computer ki uploads ko `client/public/uploads` mein copy (GitHub/Vercel ke liye) |

## API
| Method | URL | |
|---|---|---|
| GET | `/api/slots?page=machines` | Ek page ke saare boxes (public) |
| POST | `/api/auth/login` | `{ email, password }` se token milta hai |
| GET | `/api/admin/slots` | Saare boxes (admin) |
| PUT | `/api/admin/slots/:slotId` | `{ items: [...] }` save karta hai |
| GET / POST / DELETE | `/api/admin/media` | Media library, upload (`file`, `mute`, `rotate`) |

## Notes
- "Photo: Wikimedia Commons" wali photos internet se load hoti hain. Inka credit website par dikhta rehna chahiye, kyunki license mein ye zaroori hai.
- Purane links (jaise `/machines.html#crusher`) apne aap naye page par chale jaate hain.
- SELCO logo `client/public/selco-logo.png` mein hai. Search, Kannada aur Share chalte hain.
- Kannada translation machine se banaya gaya hai. Publish karne se pehle kisi Kannada bolne wale se check karwa lo.
- Khaali photo/video dabbe website par nahi dikhte. Admin se photo lagaoge to apne aap dikhne lagenge.
- `ENOTFOUND` error ka matlab hai ki `.env` mein `MONGODB_URI` abhi bhi example wali hai. Asli Atlas string daalo.
