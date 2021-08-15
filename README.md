# TMDB Clone

Ata Gülalan'ın SabancıDX için hazırladığı demo.

### [Canlı Demo: tmdb.xava.me](https://tmdb.xava.me)

![Ana Sayfa](demo/home.jpg 'Ana Sayfa')
![Film Detayı](demo/movie.jpg 'Film Detayı')
![Lighthouse](demo/lighthouse.jpg 'Lighthouse')

## Yapılacaklar Listesi

- [x] ESLint & Prettier kur
- [x] En az bir örnek unit test yaz
- [x] Tüm sayfaları tab tuşu ile gezilebilir hale getir
- [x] Fontları belirle
- [x] İkon kütüphanesi belirle
- [x] Renkleri belirle
- [x] Rotaları belirle
- [x] Navigasyonu oluştur
- [x] Hero oluştur
- [x] Axios kur
- [x] API Key için ortam değişkeni tanımla
- [x] Dairesel ilerleme çubuğu oluştur
- [x] Yatay kaydırma bileşeni oluştur
- [x] Yatay kaydırma bileşeni kaydırılmamış ise sağ tarafta beyaz geçiş rengi gözüksün
- [x] Tarih verisini işleyebilecek bir kütüphane kur
- [x] Yuvarlak buton bileşeni oluştur
- [x] Uygulamayı İngilizceye dönüştür
- [x] 404 sayfası oluştur
- [x] Lighthouse'da performans, erişilebilirlik, üstün yöntemler ve SEO 100'e ulaşsın
- [x] Siteyi kolay erişilebilecek bir alt etki alanına yayınla
- [ ] Detaylı testler yaz
- [ ] Footer oluştur
- [ ] Televizyon programları için bir kısım yap
- [ ] İç sayfadaki arka plan rengini poster ile uyumlu hale getir (ColorThief?)
- [ ] Butonlara araç ipuçları oluştur

## Bilinen hatalar ve nedenleri

### Film detayı görüntülenirken yapımcı, yönetmen ve benzeri isimler çıkmıyor

TMDB bu verileri film detaylarını yollarken yollamıyor.

### Arkaplan rengi poster rengine göre değişmiyor

TMDB bunu arkada hesaplayıp sayfaya gömülü şekilde koyarak çözmüş. Benim böyle bir lüksüm yok. Resim URL'i **büyük ihtimalle** Color Thief gibi kütüphanelerde işlenirken CORS hatasına sebep olacak. Bu yüzden hiç denemedim.

### TMDB'de popüler kısmında televizyon programları da çıkıyor

Film ve televizyon programlarını bir araya toplayan bir endpoint bulamadım.

## Proje kurulumu için

```
npm install
```

### Geliştirme için derlemeler ve hot-reload desteği için

```
npm run dev
```

veya

```
npm run serve
```

### Canlı için çıktı almak için

```
npm run build
```

### Lint kontrolü için

```
npm run lint
```

### Lint sorunlarını düzeltmek için

```
npm run fix
```

### Birim testleri çalıştırmak için

```
npm run test:unit
```
