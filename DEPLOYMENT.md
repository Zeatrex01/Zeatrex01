# 🚀 Deployment Guide

## GitHub Pages Deployment (Önerilen: GitHub Actions)

Bu portfolio sitesi **GitHub Actions** ile otomatik olarak deploy edilebilir! 🎉

### 🚀 Hızlı Başlangıç (GitHub Actions ile):

1. **GitHub Pages'i Aktifleştirin**
   - GitHub repository'nizde `Settings` > `Pages` bölümüne gidin
   - `Source` kısmından **`GitHub Actions`** seçin
   
2. **Main Branch'e Merge Edin**
   - Bu PR'ı merge edin veya değişiklikleri `main` branch'ine alın
   
3. **Otomatik Deployment**
   - GitHub Actions otomatik olarak çalışacak
   - Site deploy edilecek: **`https://zeatrex01.github.io/`**
   - Her `main` branch'e push'ta otomatik güncellenir!

📖 **Detaylı Türkçe Rehber**: [`GITHUB_PAGES_SETUP.md`](GITHUB_PAGES_SETUP.md) dosyasına bakın

---

## Alternatif: Manuel Branch Deployment

Eğer GitHub Actions kullanmak istemiyorsanız:

1. **GitHub Repository Ayarları**
   - GitHub repository'nizde `Settings` > `Pages` bölümüne gidin
   - `Source` kısmından `Deploy from a branch` seçin
   - `Branch` kısmından `main` (veya `master`) ve `/ (root)` seçin
   - `Save` butonuna tıklayın

2. **Site URL'niz**
   - Bu özel repository için: **`https://zeatrex01.github.io/`**

3. **Özel Domain (Opsiyonel)**
   - `Settings` > `Pages` > `Custom domain` kısmından kendi domain'inizi ekleyebilirsiniz
   - DNS ayarlarınızda CNAME kaydı eklemeniz gerekecek

## Yerel Geliştirme

### Basit HTTP Server ile Test

**Python 3:**
```bash
python3 -m http.server 8000
```

**Node.js (http-server):**
```bash
npx http-server -p 8000
```

**PHP:**
```bash
php -S localhost:8000
```

Sonra tarayıcınızda `http://localhost:8000` adresini açın.

## Düzenleme

### Kişisel Bilgileri Güncelleme

Tüm kişisel bilgiler `config.js` dosyasında bulunur:

```javascript
const CONFIG = {
    name: "Adınız Soyadınız",
    role: "Pozisyonunuz",
    bio: "Kısa açıklamanız",
    email: "email@example.com",
    social: {
        github: "https://github.com/kullanıcıadınız",
        linkedin: "https://linkedin.com/in/kullanıcıadınız"
    },
    projects: [...]
};
```

### Yeni Proje Ekleme

`config.js` dosyasındaki `projects` array'ine yeni bir obje ekleyin:

```javascript
{
    title: "Proje Adı",
    tag: "Platform/Kategori",
    description: "Proje açıklaması",
    tech: ["Teknoloji1", "Teknoloji2"],
    link: "https://proje-linki.com" // veya "#" link yoksa
}
```

## Teknik Detaylar

- **Framework:** React 18 (CDN)
- **Styling:** TailwindCSS (CDN)
- **Babel:** Browser-based JSX compilation
- **Font:** Google Fonts (Inter)
- **Özellikler:**
  - Responsive design
  - SEO optimized
  - Loading state
  - Smooth scrolling
  - Hover animations
  - Dark theme

## Performance

Site tamamen statik HTML, CSS ve JavaScript kullanır:
- ✅ Sunucu gereksinimleri yok
- ✅ Veritabanı yok
- ✅ Hızlı yükleme
- ✅ CDN üzerinden optimized kaynaklar

## Tarayıcı Desteği

- ✅ Chrome/Edge (son 2 versiyon)
- ✅ Firefox (son 2 versiyon)
- ✅ Safari (son 2 versiyon)
- ✅ Mobile browsers

## Sorun Giderme

### Site görünmüyorsa:
1. Tarayıcı console'unu açın (F12)
2. CDN kaynaklarının yüklendiğinden emin olun
3. `config.js` dosyasının doğru yüklendiğini kontrol edin

### Projeler görünmüyorsa:
- `config.js` dosyasındaki `projects` array'inin boş olmadığından emin olun
- Syntax hatası olup olmadığını kontrol edin

## Lisans

Bu portfolio template'i özgürce kullanabilir ve özelleştirebilirsiniz.
