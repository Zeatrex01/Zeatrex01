# 🚀 GitHub Pages Deployment - Türkçe Rehber

## ✅ Otomatik Deployment Kurulumu

Bu repository artık **GitHub Actions** ile otomatik deployment yapabilecek şekilde yapılandırılmıştır!

### 📋 Deployment Adımları:

#### 1. GitHub Pages'i Aktifleştirin

1. GitHub'da repository sayfanıza gidin: https://github.com/Zeatrex01/Zeatrex01
2. **Settings** (Ayarlar) sekmesine tıklayın
3. Sol menüden **Pages** bölümüne gidin
4. **Source** (Kaynak) kısmında:
   - **GitHub Actions** seçeneğini seçin
   - (Eğer "Deploy from a branch" seçili ise, bunu "GitHub Actions" olarak değiştirin)

#### 2. Main Branch'e Merge Edin

Bu değişikliklerin deployment yapabilmesi için `main` veya `master` branch'inde olması gerekiyor:

```bash
# GitHub'da Pull Request oluşturun ve merge edin
# VEYA
# Local'de main branch'e geçin ve merge edin:
git checkout main
git merge copilot/prepare-html-site
git push origin main
```

#### 3. Deployment'ı İzleyin

1. Repository'nizde **Actions** sekmesine gidin
2. "Deploy to GitHub Pages" workflow'unu göreceksiniz
3. Workflow otomatik olarak çalışacak ve site deploy edilecek
4. ✅ Yeşil check işareti göründüğünde deployment tamamlanmıştır

#### 4. Sitenizi Ziyaret Edin

Site şu adreste yayında olacak:
**🌐 https://zeatrex01.github.io/**

---

## 🔄 Otomatik Güncellemeler

Artık her `main` veya `master` branch'ine push yaptığınızda:
- ✅ GitHub Actions otomatik olarak çalışır
- ✅ Site en son versiyonu ile güncellenir
- ✅ Birkaç dakika içinde değişiklikler yayına alınır

---

## 🎯 Hızlı Güncelleme

Site içeriklerini güncellemek için sadece `config.js` dosyasını düzenleyin:

```javascript
// config.js dosyasını açın ve istediğiniz alanları değiştirin
const CONFIG = {
    name: "Adınız Soyadınız",
    role: "Pozisyonunuz",
    bio: "Kısa açıklamanız",
    email: "email@example.com",
    social: { ... },
    projects: [ ... ]
};
```

Değişiklikleri kaydedin ve push edin:
```bash
git add config.js
git commit -m "Bilgileri güncelle"
git push origin main
```

GitHub Actions otomatik olarak siteyi güncelleyecek! 🎉

---

## 🛠️ Workflow Özellikleri

`.github/workflows/deploy.yml` dosyası şunları yapar:

- ✅ **Otomatik Deployment**: Her main/master push'unda çalışır
- ✅ **Manuel Tetikleme**: Actions sekmesinden manuel başlatılabilir
- ✅ **Güvenli**: Sadece okuma/yazma izinleri ile çalışır
- ✅ **Concurrent Control**: Aynı anda sadece bir deployment
- ✅ **Artifact Upload**: Tüm repository içeriğini deploy eder

---

## 📱 Canlı Site URL'leri

### Ana Sayfa
🌐 **https://zeatrex01.github.io/**

### Test Etmek İçin
Site deploy edildikten sonra:
- ✅ Ana sayfayı kontrol edin
- ✅ Projeler bölümünün çalıştığını doğrulayın
- ✅ Tüm linklerin doğru olduğunu kontrol edin
- ✅ Mobil görünümü test edin

---

## ⚠️ Sorun Giderme

### Deployment Başarısız Olursa:
1. **Actions** sekmesine gidin
2. Başarısız olan workflow'a tıklayın
3. Hata mesajını okuyun
4. Genellikle şu nedenlerle olur:
   - GitHub Pages henüz aktif değil
   - Branch adı yanlış (main/master kontrolü yapın)
   - Permissions ayarları eksik

### Site Görünmüyorsa:
1. GitHub Pages'in aktif olduğundan emin olun (Settings > Pages)
2. Deployment'ın tamamlandığını kontrol edin (Actions sekmesi)
3. 5-10 dakika bekleyin (ilk deployment biraz zaman alabilir)
4. Cache'i temizleyin veya incognito modda açın

### Değişiklikler Yansımıyorsa:
1. Değişikliklerin `main` branch'inde olduğundan emin olun
2. GitHub Actions workflow'unun çalıştığını kontrol edin
3. Browser cache'ini temizleyin (Ctrl+Shift+R veya Cmd+Shift+R)

---

## 🎨 Özelleştirme Sonrası

Değişiklik yaptıktan sonra:
```bash
# 1. Değişiklikleri kaydedin
git add .
git commit -m "Site güncellendi"

# 2. Push edin
git push origin main

# 3. GitHub Actions sekmesinde deployment'ı izleyin
# 4. 2-3 dakika sonra siteniz güncellenecek!
```

---

## 📚 Daha Fazla Bilgi

- [GitHub Pages Dokümantasyonu](https://docs.github.com/en/pages)
- [GitHub Actions Dokümantasyonu](https://docs.github.com/en/actions)
- Repository README: `DEPLOYMENT.md`

---

## ✨ Başarıyla Deploy Edildi!

Siteniz artık canlı! 🎉
**https://zeatrex01.github.io/**

Yeni projeler eklemek, bilgileri güncellemek veya tasarımı değiştirmek için `config.js` dosyasını düzenleyin ve push edin. GitHub Actions her şeyi otomatik olarak halledecek!
