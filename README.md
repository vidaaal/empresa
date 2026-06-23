# PRISMA® Studio — Landing Page

Landing page premium para estúdio de design, desenvolvimento de software e experiências digitais.

## Inspiração

Design inspirado nos padrões visuais de agências de referência:

- **Metalab** — Marquee infinito, tipografia bold, hero minimalista
- **BASIC/DEPT®** — Statement cultural, engajamentos em destaque, badges de prêmios
- **Obys Agency** — Grid numerado de projetos, scroll horizontal, cursor customizado
- **Locomotive** — Filosofia do estúdio, stats, timeline
- **Fantasy.co** — Serviços numerados (01, 02, 03), posicionamento premium
- **Oryzo.ai** — Estética tech premium, animações fluidas

## Stack

- Next.js 16 (App Router)
- TypeScript
- Tailwind CSS 4
- Framer Motion
- Lenis (smooth scroll)
- GSAP

## Desenvolvimento

```bash
npm install
npm run dev
```

Acesse [http://localhost:3000](http://localhost:3000)

## Build

```bash
npm run build
npm start
```

## Seções

1. **Preloader** — Animação de carregamento com contador
2. **Hero** — Tipografia gigante com reveal animado
3. **Marquee** — Faixas infinitas de texto (estilo Metalab/Obys)
4. **Statement** — Posicionamento cultural com word-by-word reveal
5. **Serviços** — Tabs numeradas (estilo Fantasy.co)
6. **Trabalhos** — Galeria horizontal com projetos numerados (estilo Obys)
7. **Engajamentos** — Parcerias em destaque (estilo BASIC/DEPT®)
8. **Estúdio** — Filosofia + stats (estilo Locomotive)
9. **Processo** — Etapas numeradas do workflow
10. **Contato** — CTA gigante + formulário
11. **Footer** — Tipografia monumental

## Customização

Edite `src/lib/data.ts` para alterar nome da empresa, projetos, serviços e textos.
