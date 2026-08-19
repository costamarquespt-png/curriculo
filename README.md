# Portfólio — Marques

Landing page de portfólio, construída com Next.js (App Router), React e TailwindCSS.

## Como correr localmente

```bash
npm install
npm run dev
```

Abrir http://localhost:3000

## Como publicar

O caminho mais simples é o [Vercel](https://vercel.com): ligar o repositório e publicar — não é preciso configuração adicional.

## Onde editar o conteúdo

Todo o texto está nos componentes em `components/`, um por secção:

- `Hero.tsx` — nome, título, chamadas para ação
- `Specialties.tsx` — áreas de especialidade
- `About.tsx` — biografia, soft skills, disponibilidade
- `Projects.tsx` — projetos e respetivos links
- `Certificates.tsx` — certificados (atualmente com dados de exemplo)
- `Testimonials.tsx` — testemunhos (atualmente com dados de exemplo)
- `Contact.tsx` — email, telefone, redes sociais, formulário

Os campos marcados com `[substituir]` devem ser preenchidos com dados reais antes de publicar.

O formulário de contacto (`Contact.tsx`) ainda não envia dados — ligar a um serviço como [Formspree](https://formspree.io) ou [Resend](https://resend.com).

## Cores e tipografia

Os tokens de cor estão definidos em `tailwind.config.ts`. As fontes (Space Grotesk, IBM Plex Mono, Inter) são carregadas via `next/font/google` em `app/layout.tsx`.
