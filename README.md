## Művészettörténet 3 gyakorló alkalmazás

Ionic3 és Angular5 segítségével készült mobil alkalmazás, mely egy mobilra optimalizál webes felülettel is rendelkezik (http://bence04.github.io/muvtori_3/)

Célja a NBB_RA939K2 tárgykódú tárgy vizsga beugrójára való felkészítés. (Eszterházy Károly Egyetem Művészettörténet 3)

### Használat
Bal oldalon felül látszik az eddig eltalált és az eddig elrontott képek száma, jobb oldalon pedig az összes kép menyisége. Az alkalmazás véletlenszerűen feldob egy képet és a "Megoldás" gombra kattintva feldobja az alkotó nevét és a kép címét. Itt ki lehet választani, hogy tudtuk-e vagy nem. Ha a végére értünk akkor kiírja, hogy hány %-ban volt jó és előről lehet kezdeni új sorrenddel.

### Közreműködés

Az alkalmazás futtatásához szükség van NodeJS-re illetve Ionic3-ra.

#### Futtatás
- npm install
- ionic cordova prepare
- ionic serve

#### Új kép hozzáadása
- src/assets/imgs/ mappába kell a képet feltölteni
- src/assets/img.json fájlba pedig hozzáadni.

```
{
  "name": "KÉP NEVE",
  "author": "KÉSZÍTŐ NEVE",
  "src": "KÉP CÍME"
}
```

Egyéb információk: toth.bence [AT] simonyi [DOT] bme [DOT] hu
