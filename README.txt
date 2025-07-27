TAILWIND CLI
- File input assets/input.css
- File output assets/style.css

RUN TAILWINDCSS
- npx @tailwindcss/cli -i ./assets/input.css -o ./assets/style.css --watch

CUSTOM CLASS TAILWIND
.nav-list 
-- Custom hover dengan after line
.active
-- Setting navbar active ketika di scroll
.active .btn & .active .btn-dark
-- Trigger button ketika navbar active
.swipper-slide
-- Custom style for items box
.dropdown
-- Styling dropdown
.product-list
-- Setting list dropdown product
.accordion, .accordion-header & .accordion-content
-- Custom class untuk style accordion

CUSTOM FONT GOOGLE FONTS (CDN)
--font-archivo: Font dari Archivo Black
--font-poppins: Font dari Poppins
--font-cursive: Font dari Nothing You Could Do

SLIDER FROM SWIPERJS CDN
- <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.css">
- <script src="https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.js"></script>

ICONS FROM BOX ICONS CDN
- <link rel="stylesheet" href="https://cdn.boxicons.com/fonts/basic/boxicons.min.css">
- <link rel="stylesheet" href="https://cdn.boxicons.com/fonts/basic/boxicons-brands.min.css">

TYPED JS CDN
- <script src="https://unpkg.com/typed.js@2.1.0/dist/typed.umd.js"></script>
 

