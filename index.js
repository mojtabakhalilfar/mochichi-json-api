const express = require("express");
const fs = require("fs");
const path = require("path");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

// بارگذاری فایل data.json
const DATA_PATH = path.join(__dirname, "data.json");
let DATA = null;
try {
  const raw = fs.readFileSync(DATA_PATH, "utf8");
  DATA = JSON.parse(raw);
} catch (e) {
  console.error("❌ خطا در خواندن data.json:", e);
  process.exit(1);
}

// سکشن‌ها
const sections = [
  "menu",
  "articleHome",
  "banner",
  "discount",
  "category",
  "categoris",
  "mostpopular",
  "newblog",
  "bestchoice",
  "blogs",
  "blog",
  "product",
  "commentsP",
  "commentsB"
];

// روت اصلی
app.get("/", (req, res) => {
  res.json({
    message: "API Online ✅",
    availableRoutes: sections.map(s => `/${s}`)
  });
});

// برای هر سکشن یک روت
sections.forEach(section => {
  app.get(`/${section}`, (req, res) => {
    if (!(section in DATA)) {
      return res.status(404).json({ error: `${section} not found` });
    }
    res.json(DATA[section]);
  });

  app.get(`/${section}/:id`, (req, res) => {
    if (!(section in DATA)) {
      return res.status(404).json({ error: `${section} not found` });
    }
    const value = DATA[section];
    const { id } = req.params;
    if (Array.isArray(value)) {
      const found = value.find(item => String(item.id) === String(id));
      if (!found) return res.status(404).json({ error: "Item not found" });
      return res.json(found);
    } else if (typeof value === "object" && value !== null) {
      if (String(value.id) === String(id)) return res.json(value);
    }
    return res.status(400).json({ error: "Section is not a list with ids" });
  });
});

// health check
app.get("/healthz", (req, res) => res.json({ ok: true }));

// پورت
const PORT = process.env.PORT || 8000;
app.listen(PORT, () => {
  console.log(`🚀 API running on port ${PORT}`);
});
