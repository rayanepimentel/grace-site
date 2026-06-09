# Dependências Vendor

Este diretório deve conter as bibliotecas JavaScript e CSS de terceiros necessárias para o funcionamento do site.

## Bibliotecas Necessárias

O site GRACE ICMC-USP utiliza as seguintes bibliotecas:

### 1. Bootstrap 5
- **Descrição:** Framework CSS para design responsivo
- **Arquivos necessários:**
  - `bootstrap/css/bootstrap.min.css`
  - `bootstrap/js/bootstrap.bundle.min.js`
- **Download:** https://getbootstrap.com/

### 2. Bootstrap Icons
- **Descrição:** Biblioteca de ícones
- **Arquivo necessário:** `bootstrap-icons/bootstrap-icons.css`
- **Download:** https://icons.getbootstrap.com/

### 3. AOS (Animate On Scroll)
- **Descrição:** Animações ao rolar a página
- **Arquivos necessários:**
  - `aos/aos.css`
  - `aos/aos.js`
- **Download:** https://michalsnik.github.io/aos/

### 4. Animate.css
- **Descrição:** Biblioteca de animações CSS
- **Arquivo necessário:** `animate.css/animate.min.css`
- **Download:** https://animate.style/

### 5. GLightbox
- **Descrição:** Lightbox para imagens e vídeos
- **Arquivos necessários:**
  - `glightbox/css/glightbox.min.css`
  - `glightbox/js/glightbox.min.js`
- **Download:** https://github.com/biati-digital/glightbox

### 6. Swiper
- **Descrição:** Slider/carousel moderno
- **Arquivos necessários:**
  - `swiper/swiper-bundle.min.css`
  - `swiper/swiper-bundle.min.js`
- **Download:** https://swiperjs.com/

### 7. Imagesloaded
- **Descrição:** Detecta quando imagens foram carregadas
- **Arquivo necessário:** `imagesloaded/imagesloaded.pkgd.min.js`
- **Download:** https://imagesloaded.desandro.com/

### 8. Isotope Layout
- **Descrição:** Layout de grid com filtros
- **Arquivo necessário:** `isotope-layout/isotope.pkgd.min.js`
- **Download:** https://isotope.metafizzy.co/

### 9. PHP Email Form
- **Descrição:** Validação de formulários
- **Arquivo necessário:** `php-email-form/validate.js`
- **Nota:** Este arquivo pode precisar ser customizado

## Como Instalar

### Opção 1: Download Manual
1. Baixe cada biblioteca dos links fornecidos acima
2. Extraia os arquivos necessários
3. Organize-os na estrutura de diretórios especificada

### Opção 2: Usar CDN (Recomendado para desenvolvimento)
Você pode substituir os links locais por CDN no HTML:

```html
<!-- Bootstrap CSS -->
<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css" rel="stylesheet">

<!-- Bootstrap Icons -->
<link href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.0/font/bootstrap-icons.css" rel="stylesheet">

<!-- AOS -->
<link href="https://unpkg.com/aos@2.3.1/dist/aos.css" rel="stylesheet">

<!-- Animate.css -->
<link href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css" rel="stylesheet">

<!-- GLightbox -->
<link href="https://cdn.jsdelivr.net/npm/glightbox/dist/css/glightbox.min.css" rel="stylesheet">

<!-- Swiper -->
<link href="https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.css" rel="stylesheet">
```

### Opção 3: Usar NPM (Para projetos com build)
```bash
npm install bootstrap bootstrap-icons aos animate.css glightbox swiper imagesloaded isotope-layout
```

## Estrutura de Diretórios Esperada

```
assets/vendor/
├── bootstrap/
│   ├── css/
│   │   └── bootstrap.min.css
│   └── js/
│       └── bootstrap.bundle.min.js
├── bootstrap-icons/
│   └── bootstrap-icons.css
├── aos/
│   ├── aos.css
│   └── aos.js
├── animate.css/
│   └── animate.min.css
├── glightbox/
│   ├── css/
│   │   └── glightbox.min.css
│   └── js/
│       └── glightbox.min.js
├── swiper/
│   ├── swiper-bundle.min.css
│   └── swiper-bundle.min.js
├── imagesloaded/
│   └── imagesloaded.pkgd.min.js
├── isotope-layout/
│   └── isotope.pkgd.min.js
└── php-email-form/
    └── validate.js
```

## Observações

- Para produção, é recomendado hospedar os arquivos localmente
- Certifique-se de respeitar as licenças de cada biblioteca
- Mantenha as bibliotecas atualizadas para segurança e performance