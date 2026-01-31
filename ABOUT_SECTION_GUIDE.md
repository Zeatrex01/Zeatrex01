# 📚 Hakkımda Bölümü Kullanım Kılavuzu

## Genel Bakış

Portfolio sitesine **Hakkımda** bölümü eklendi! Bu bölüm üç ana tema altında yeteneklerinizi sergiler:
- 💻 **Game Development** (Oyun Geliştirme)
- 🎨 **3D Art & Modeling** (3D Sanat ve Modelleme)
- 🎬 **3D Animation** (3D Animasyon)

## Nasıl Düzenlenir?

### config.js Dosyasını Açın

Tüm içerik `config.js` dosyasındaki `about` nesnesinde bulunur:

```javascript
about: {
    development: { ... },
    art: { ... },
    animation: { ... }
}
```

### Bölüm Yapısı

Her bölüm (development, art, animation) şu özelliklere sahiptir:

```javascript
{
    title: "Başlık",           // Sekme üzerinde görünen başlık
    icon: "💻",                // Emoji ikon
    description: "...",        // Ana açıklama metni
    skills: [...],            // Yetenekler listesi
    highlights: [...]         // Öne çıkanlar listesi
}
```

### Yetenek Ekleme/Düzenleme

Her yetenek şu formatta tanımlanır:

```javascript
{
    name: "Unity Engine",               // Yetenek adı
    level: "İleri",                     // Seviye: "Başlangıç", "Orta", "İleri", "Uzman"
    experience: "3+ yıl",               // Deneyim süresi
    description: "Açıklama metni..."   // Detaylı açıklama
}
```

### Öne Çıkan Ekleme

Highlights dizisine string olarak ekleyin:

```javascript
highlights: [
    "Steam'de yayınlanmış oyun projesi",
    "3+ mobil oyun yayını",
    "Yeni başarı..."
]
```

## Örnekler

### Yeni Yetenek Ekleme

```javascript
// Development skills dizisine ekleyin:
{
    name: "Python",
    level: "Orta",
    experience: "1+ yıl",
    description: "Game tools, automation scripts"
}
```

### Yeni Highlight Ekleme

```javascript
highlights: [
    "Mevcut highlight",
    "Yeni eklenen başarı!", // ← Yeni
]
```

### Açıklama Güncelleme

```javascript
description: "Güncellenmiş açıklama metniniz..."
```

## Renk Temaları

Her sekmenin kendine özel rengi var:
- **Development**: Mavi (`bg-blue-600`)
- **3D Art**: Mor (`bg-purple-600`)
- **Animation**: Pembe (`bg-pink-600`)

Bunlar otomatik olarak uygulanır, değiştirmenize gerek yok.

## Mobil Uyum

Site mobil cihazlarda otomatik olarak optimize edilir:
- Sekmeler küçük ekranlarda ikon göstermez
- Yetenekler tek sütunda görünür
- Metin boyutları otomatik küçülür

## İpuçları

### ✅ Yapılması Gerekenler
- Kısa ve öz açıklamalar yazın
- Seviye tanımlarını tutarlı kullanın
- 4-6 arası yetenek ekleyin (çok fazla karışık görünür)
- Highlights'ta somut başarılar belirtin

### ❌ Yapılmaması Gerekenler
- Çok uzun açıklamalar (2 satırdan fazla)
- Tutarsız seviye tanımları (Örn: "Çok İyi" yerine "İleri")
- 10'dan fazla yetenek eklemeyin
- HTML veya özel karakterler kullanmayın

## Örnek Tam Bölüm

```javascript
development: {
    title: "Game Development",
    icon: "💻",
    description: "5+ yıllık Unity deneyimi ile mobil ve PC oyunları geliştiriyorum.",
    skills: [
        {
            name: "Unity Engine",
            level: "İleri",
            experience: "5+ yıl",
            description: "2D/3D oyun geliştirme, sistem mimarisi, optimizasyon"
        },
        {
            name: "C# Programming",
            level: "İleri",
            experience: "5+ yıl",
            description: "OOP, design patterns, clean code principles"
        },
        {
            name: "Unreal Engine",
            level: "Başlangıç",
            experience: "6 ay",
            description: "Blueprint scripting, basic C++ implementation"
        }
    ],
    highlights: [
        "10+ yayınlanmış oyun projesi",
        "Steam ve mobil platformlarda yayın",
        "Award-winning indie game developer"
    ]
}
```

## Sık Sorulan Sorular

### Yeni bir kategori ekleyebilir miyim?
Evet! `config.js` içinde `about` nesnesine yeni bir alan ekleyin ve `app.js` içinde yeni bir sekme butonu oluşturun.

### İkonları değiştirebilir miyim?
Evet! Herhangi bir emoji kullanabilirsiniz: `icon: "🚀"`

### Kaç yetenek eklemeliyim?
Her kategori için 4-6 yetenek ideal. Çok fazla ekleme, sayfa uzar.

### Seviye adlarını değiştirebilir miyim?
Evet ama tutarlı olun: "Başlangıç", "Orta", "İleri", "Uzman"

---

**Not**: Değişiklik yaptıktan sonra `git push` yapmayı unutmayın!
