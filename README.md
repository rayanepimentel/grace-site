# GRACE ICMC-USP - Site Oficial

Site oficial do GRACE (Grupo de Alunas de Ciências Exatas) do ICMC-USP São Carlos.

## 🎯 Sobre o Projeto

O GRACE é um projeto de extensão do Instituto de Ciências Matemáticas e de Computação (ICMC) da Universidade de São Paulo (USP), campus São Carlos. O grupo é dedicado ao desenvolvimento de atividades na área de tecnologia, com foco no público feminino, especialmente estudantes dos níveis primário, secundário e superior.

## 🚀 Como Rodar o Site

### Opção 1: Abrir Diretamente no Navegador (Mais Simples)
1. Navegue até o diretório do projeto
2. Abra o arquivo `index.html` diretamente no seu navegador
   - Clique duas vezes no arquivo, ou
   - Arraste o arquivo para o navegador, ou
   - Clique com botão direito → "Abrir com" → Escolha seu navegador

### Opção 2: Usar Servidor Local com Python
```bash
# Python 3
python -m http.server 8000

# Python 2
python -m SimpleHTTPServer 8000
```
Depois acesse: `http://localhost:8000`

### Opção 3: Usar Servidor Local com Node.js
```bash
# Instalar serve globalmente
npm install -g serve

# Rodar o servidor
serve
```

### Opção 4: Usar Live Server (VS Code)
1. Instale a extensão "Live Server" no VS Code
2. Clique com botão direito em `index.html`
3. Selecione "Open with Live Server"

## 📁 Estrutura do Projeto

```
GRACE/
├── index.html                      # Página principal
├── robotica-escola.html           # Página Robótica na Escola
├── ciencia-dados.html             # Página Ciência de Dados
├── escola-web.html                # Página Escola de Web
├── pensamento-computacional.html  # Página Pensamento Computacional
├── materiais.html                 # Página de Materiais (apostilas/videoaulas)
├── blog.html                      # Blog
├── blog-details.html              # Detalhes do blog
├── portfolio-details.html         # Detalhes do portfólio
├── service-details.html           # Detalhes de serviços
├── starter-page.html              # Página inicial template
├── assets/
│   ├── css/
│   │   └── main.css              # Estilos principais
│   ├── js/
│   │   └── main.js               # Scripts principais
│   ├── img/                      # Imagens do site
│   │   ├── blog/
│   │   ├── colaboradores/
│   │   ├── instagram/
│   │   ├── masonry-portfolio/
│   │   ├── midia/
│   │   ├── pesquisa/
│   │   └── parcerias/
│   ├── vendor/                   # Bibliotecas de terceiros
│   └── scss/                     # Arquivos SCSS (se aplicável)
├── forms/
│   └── contact.php               # Script de contato
└── README.md                     # Este arquivo
```

## ✨ Modificações Realizadas

### 1. Meta Tags e SEO
- ✅ Adicionadas meta tags completas com descrição e keywords
- ✅ Meta tags Open Graph para compartilhamento em redes sociais
- ✅ Título otimizado: "GRACE ICMC-USP - Grupo de Alunas de Ciências Exatas | São Carlos"

### 2. Informações do ICMC-USP
- ✅ Atualizado texto "Quem Somos" destacando vínculo com ICMC-USP
- ✅ Endereço completo adicionado: Av. Trabalhador São-carlense, 400, Centro, São Carlos - SP
- ✅ Informações de contato atualizadas

### 3. Páginas de Ações Criadas
- ✅ **Robótica na Escola** (`robotica-escola.html`)
- ✅ **Ciência de Dados para Ensino Médio** (`ciencia-dados.html`)
- ✅ **Escola de Web para Meninas** (`escola-web.html`)
- ✅ **Pensamento Computacional** (`pensamento-computacional.html`)

### 4. Página de Materiais
- ✅ Criada página `materiais.html` com seções:
  - Apostilas (em desenvolvimento)
  - Videoaulas (em desenvolvimento)

### 5. Links do Menu
- ✅ Todos os links do menu de navegação foram atualizados
- ✅ Links das ações apontam para as páginas corretas
- ✅ Links de materiais funcionais

## 📋 Pendências

### Assets Faltantes
Os seguintes arquivos de imagem precisam ser adicionados em `assets/img/`:
- `favicon.png` (32x32px) - Ícone da aba do navegador
- `apple-touch-icon.png` (180x180px) - Ícone para dispositivos Apple
- `logo.png` - Logo principal do GRACE para o cabeçalho

Consulte `assets/img/README.md` para mais detalhes.

### Bibliotecas Vendor
As bibliotecas JavaScript/CSS de terceiros precisam ser instaladas em `assets/vendor/`:
- Bootstrap 5
- Bootstrap Icons
- AOS (Animate On Scroll)
- Animate.css
- GLightbox
- Swiper
- Imagesloaded
- Isotope Layout

Consulte `assets/vendor/README.md` para instruções de instalação.

### Conteúdo em Desenvolvimento
- Apostilas para download
- Videoaulas
- Alguns links de projetos específicos

## 🔧 Configuração do Formulário de Contato

O formulário de contato em `forms/contact.php` precisa ser configurado com:
1. Servidor PHP habilitado
2. Configurações de email (SMTP)
3. Validação e sanitização de dados

## 📱 Redes Sociais

- **Instagram:** [@grace.icmc.usp](https://www.instagram.com/grace.icmc.usp/)
- **Facebook:** [grace.icmc.usp](https://www.facebook.com/grace.icmc.usp/)
- **Twitter/X:** [@icmc_usp](https://x.com/icmc_usp)
- **LinkedIn:** [Grace USP](https://www.linkedin.com/search/results/all/?heroEntityKey=urn%3Ali%3Aorganization%3A64666623&keywords=Grace%20USP)

## 📞 Contato

- **Email:** grace@icmc.usp.br
- **Telefone:** (16) 3373-9700
- **Endereço:** ICMC-USP, Av. Trabalhador São-carlense, 400, Centro, São Carlos - SP, 13566-590

## 🤝 Parcerias

- Meninas Digitais (SBC)
- ICMC-USP
- Sociedade Brasileira de Computação (SBC)

## 📄 Licença

Copyright © GRACE-USP. Todos os direitos reservados.

## 👥 Equipe de Desenvolvimento

Site desenvolvido para o GRACE ICMC-USP São Carlos.

---

**Última atualização:** Junho de 2026