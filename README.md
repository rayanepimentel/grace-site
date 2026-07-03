# 🌟 GRACE ICMC-USP - Site em React/Next.js

Este é o site do GRACE (Grupo de Alunas de Ciências Exatas) migrado de HTML/CSS/JS para **Next.js 15** com **TypeScript** e **Tailwind CSS**.

## 🚀 Tecnologias Utilizadas

- **Next.js 15** - Framework React com App Router
- **TypeScript** - Tipagem estática
- **Tailwind CSS** - Estilização utilitária
- **Framer Motion** - Animações fluidas
- **React Icons** - Ícones modernos
- **Swiper** - Carrosséis e sliders
- **AOS** - Animações on scroll

## 📁 Estrutura do Projeto

```
grace-site/
├── app/                          # App Router do Next.js
│   ├── page.tsx                 # Página inicial
│   ├── layout.tsx               # Layout global
│   ├── globals.css              # Estilos globais
│   ├── equipe/                  # Página da equipe
│   ├── robotica-escola/         # Página Robótica na Escola
│   ├── escola-web/              # Página Escola de Web
│   ├── ciencia-dados/           # Página Ciência de Dados
│   └── pensamento-computacional/ # Página Pensamento Computacional
├── components/                   # Componentes reutilizáveis
│   ├── Header.tsx               # Cabeçalho com navegação
│   ├── Footer.tsx               # Rodapé
│   └── Hero.tsx                 # Seção hero com carrossel
├── public/                       # Arquivos estáticos
│   └── assets/                  # Imagens e recursos
└── package.json                 # Dependências
```

## 🎯 Funcionalidades Implementadas

### ✅ Componentes Globais
- [x] Header responsivo com navegação dropdown
- [x] Footer com links e redes sociais
- [x] Hero com carrossel animado (3 slides)
- [x] Layout global com metadata SEO

### ✅ Páginas Principais
- [x] **Home** - Página inicial com todas as seções
  - Hero com carrossel
  - Sobre o GRACE
  - CTA para equipe
  - Nossas Ações (4 projetos)
  - Publicações científicas
  - FAQ
  - Contato
- [x] **Equipe** - Grid de membros com filtros por categoria
- [x] **Robótica na Escola** - Detalhes do projeto
- [x] **Escola de Web** - Curso de desenvolvimento web
- [x] **Ciência de Dados** - Projeto para ensino médio
- [x] **Pensamento Computacional** - Atividades lúdicas

### ✅ Recursos
- [x] Design responsivo (mobile-first)
- [x] Animações com Framer Motion
- [x] Navegação suave entre seções
- [x] Otimização de imagens com Next.js Image
- [x] SEO otimizado
- [x] Acessibilidade (ARIA labels)

## 🛠️ Instalação e Execução

### Pré-requisitos
- Node.js 18+ instalado
- npm ou yarn

### Passos

1. **Navegue até o diretório do projeto:**
```bash
cd grace-site
```

2. **Instale as dependências:**
```bash
npm install
```

3. **Execute o servidor de desenvolvimento:**
```bash
npm run dev
```

4. **Abra no navegador:**
```
http://localhost:3000
```

## 📦 Scripts Disponíveis

```bash
npm run dev      # Inicia servidor de desenvolvimento
npm run build    # Cria build de produção
npm run start    # Inicia servidor de produção
npm run lint     # Executa linter
```

## 🎨 Customização

### Cores
As cores principais estão definidas em `app/globals.css`:
- **Primary (Pink)**: `#ff006e`
- **Secondary (Purple)**: `#8338ec`

### Fontes
Usando **Poppins** do Google Fonts, configurado em `app/layout.tsx`

### Componentes
Todos os componentes estão em `components/` e podem ser facilmente reutilizados e customizados.

## 🌐 Deploy

### Vercel (Recomendado)
1. Faça push do código para GitHub
2. Conecte o repositório no [Vercel](https://vercel.com)
3. Deploy automático!

### Outras Plataformas
- **Netlify**: Suporta Next.js
- **AWS Amplify**: Configuração simples
- **Railway**: Deploy rápido

## 📝 Próximos Passos Sugeridos

### Melhorias Futuras
- [ ] Adicionar página de Materiais (apostilas e vídeos)
- [ ] Implementar sistema de blog
- [ ] Adicionar galeria de fotos dos eventos
- [ ] Integrar formulário de contato com backend
- [ ] Adicionar sistema de newsletter
- [ ] Implementar modo escuro
- [ ] Adicionar testes (Jest + React Testing Library)
- [ ] Implementar i18n (internacionalização)
- [ ] Adicionar analytics (Google Analytics/Plausible)
- [ ] Criar painel administrativo (CMS)

### Otimizações
- [ ] Implementar ISR (Incremental Static Regeneration)
- [ ] Adicionar Service Worker para PWA
- [ ] Otimizar carregamento de imagens
- [ ] Implementar lazy loading de componentes
- [ ] Adicionar sitemap.xml automático

## 🤝 Contribuindo

1. Fork o projeto
2. Crie uma branch para sua feature (`git checkout -b feature/AmazingFeature`)
3. Commit suas mudanças (`git commit -m 'Add some AmazingFeature'`)
4. Push para a branch (`git push origin feature/AmazingFeature`)
5. Abra um Pull Request

## 📄 Licença

Este projeto pertence ao GRACE ICMC-USP.

## 📧 Contato

**GRACE ICMC-USP**
- Email: grace@icmc.usp.br
- Instagram: [@grace.usp](https://instagram.com/grace.usp)
- Facebook: [graceusp](https://facebook.com/graceusp)

---

## 🔄 Comparação: HTML vs React

### Vantagens da Migração para React/Next.js

#### ✅ Antes (HTML/CSS/JS)
- Código duplicado em múltiplas páginas
- Difícil manutenção do header/footer
- Sem componentização
- SEO básico
- Performance limitada

#### ✨ Depois (React/Next.js)
- **Componentização**: Header/Footer reutilizáveis
- **Manutenção**: Alterar uma vez, reflete em todas as páginas
- **Performance**: Code splitting automático
- **SEO**: Otimizado com metadata e SSR
- **Developer Experience**: TypeScript, hot reload, melhor debugging
- **Escalabilidade**: Fácil adicionar novas páginas e features
- **Animações**: Framer Motion para transições suaves
- **Imagens**: Otimização automática com Next.js Image

### Estrutura de Código

**Antes:**
```html
<!-- Repetido em cada página -->
<header>...</header>
<nav>...</nav>
```

**Depois:**
```tsx
// Componente único usado em todas as páginas
<Header />
```

---

Desenvolvido com ❤️ pela equipe GRACE
