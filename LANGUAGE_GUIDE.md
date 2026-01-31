# 🌐 Dil Değiştirme (Language Switcher) Kullanım Kılavuzu

## Genel Bakış

Portfolio sitesi artık **İki Dilli** (Türkçe ve İngilizce) olarak çalışıyor! 🎉

## Özellikler

### 🔄 Otomatik Dil Algılama
- Siteniz ilk ziyarette tarayıcının dilini algılar
- Türkçe tarayıcılar → TR başlar
- Diğer diller → EN başlar

### 💾 Tercih Kaydı
- Seçilen dil `localStorage`'a kaydedilir
- Bir sonraki ziyarette aynı dil hatırlanır
- Manuel olarak temizlemek isterseniz: Browser Console → `localStorage.clear()`

### 🎯 Kullanıcı Arayüzü
- Navigation bar'da TR/EN toggle butonu
- Aktif dil mavi highlight ile gösterilir
- Tek tıkla dil değişimi

## Dil Yapısı

### config.js İçinde
Tüm içerik `CONFIG.languages` altında organize edilmiş:

```javascript
CONFIG.languages = {
    tr: {
        name: "Enes Aksu",
        role: "Oyun Geliştirici & 3D Sanatçı",
        bio: "...",
        nav: { ... },
        education: { ... },
        about: { ... },
        projects: [ ... ]
    },
    en: {
        name: "Enes Aksu",
        role: "Game Developer & 3D Artist",
        bio: "...",
        nav: { ... },
        education: { ... },
        about: { ... },
        projects: [ ... ]
    }
}
```

## İçerik Düzenleme

### Türkçe İçerik Güncelleme

```javascript
// config.js içinde
tr: {
    role: "Güncel rol başlığınız",
    bio: "Güncel bio açıklamanız",
    // ... diğer alanlar
}
```

### İngilizce İçerik Güncelleme

```javascript
// config.js içinde
en: {
    role: "Your updated role title",
    bio: "Your updated bio description",
    // ... other fields
}
```

### Yeni Proje Ekleme (Her İki Dilde)

```javascript
// TR dilinde
tr: {
    projects: [
        // Mevcut projeler...
        {
            title: "Yeni Proje",
            tag: "Platform",
            description: "Türkçe açıklama",
            tech: ["Tech1", "Tech2"],
            link: "https://..."
        }
    ]
},

// EN dilinde
en: {
    projects: [
        // Existing projects...
        {
            title: "New Project",
            tag: "Platform",
            description: "English description",
            tech: ["Tech1", "Tech2"],
            link: "https://..."
        }
    ]
}
```

### Skill Ekleme/Güncelleme

Her iki dilde de aynı yapıyı takip edin:

```javascript
skills: [
    {
        name: "Skill Name", // Aynı (teknik terimler)
        level: "İleri" / "Advanced",
        experience: "3+ yıl" / "3+ years",
        description: "Açıklama" / "Description"
    }
]
```

## Çeviri İpuçları

### ✅ Yapılması Gerekenler
- Teknik terimleri (Unity, Blender, C#) çevirmeyin
- Her iki dilde de aynı bilgiyi verin
- Profesyonel ton kullanın
- Kısa ve öz açıklamalar

### ❌ Yapılmaması Gerekenler
- Otomatik çeviri kullanmayın (doğal gelmiyor)
- Bir dilde fazla, diğerinde az bilgi vermeyin
- HTML/özel karakterler eklemeyin
- Çok uzun cümleler kurmayın

## Sık Sorulan Sorular

### Yeni bir dil ekleyebilir miyim?
Evet! `config.js` içinde yeni bir dil nesnesi oluşturun (örn: `de` Almanca için) ve `app.js` içinde toggle butonlarına ekleyin.

### Varsayılan dili nasıl değiştirebilirim?
```javascript
// app.js içinde
const [language, setLanguage] = React.useState('en'); // TR yerine EN
```

### Dil tercihi nasıl sıfırlanır?
Browser console'da: `localStorage.removeItem('preferredLanguage')`

### Sadece bazı bölümleri çevirmek istiyorum?
Her alan bağımsız, istediğiniz alanı atlayabilirsiniz. Ancak tutarlılık için tüm alanları çevirmenizi öneririz.

## Teknik Detaylar

### React State Management
```javascript
const [language, setLanguage] = React.useState('tr');
```

### localStorage Kullanımı
```javascript
// Kaydetme
localStorage.setItem('preferredLanguage', 'en');

// Okuma
const saved = localStorage.getItem('preferredLanguage');
```

### Tarayıcı Dili Algılama
```javascript
const browserLang = navigator.language.toLowerCase();
return browserLang.startsWith('tr') ? 'tr' : 'en';
```

## Örnek: Tam Çeviri Şablonu

```javascript
languages: {
    tr: {
        name: "İsim Soyisim",
        role: "Pozisyon Türkçe",
        bio: "Türkçe bio açıklaması...",
        nav: {
            about: "Hakkımda",
            education: "Eğitim",
            projects: "Projeler",
            contact: "İletişim"
        },
        education: {
            title: "Eğitim",
            degree: "Derece",
            field: "Alan",
            university: "Üniversite",
            year: "Yıl",
            description: "Açıklama..."
        }
    },
    en: {
        name: "Name Surname",
        role: "Position English",
        bio: "English bio description...",
        nav: {
            about: "About",
            education: "Education",
            projects: "Projects",
            contact: "Contact"
        },
        education: {
            title: "Education",
            degree: "Degree",
            field: "Field",
            university: "University",
            year: "Year",
            description: "Description..."
        }
    }
}
```

## Test Etme

1. Siteyi açın
2. TR/EN butonuna tıklayın
3. Tüm içeriğin değiştiğini kontrol edin
4. Sayfayı yenileyin - diliniz hatırlanmalı
5. Browser console'da hata olmamalı

---

**Not**: Her değişiklikten sonra `git push` yapmayı unutmayın!
