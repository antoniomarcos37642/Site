# Nutrição Saudável — Site Estático

Um site completo e leve sobre nutrição saudável: calculadoras (IMC e TDEE), receitas com busca, gerador de plano semanal, dicas, páginas institucionais e formulário de contato. Tudo em HTML, CSS e JavaScript, sem dependências.

## Como executar

- Abra o arquivo `index.html` no navegador, ou
- Sirva localmente com um servidor estático (recomendado para navegação entre páginas):

```bash
python3 -m http.server 5173
# Depois acesse: http://localhost:5173
```

## Estrutura

- `index.html`: página inicial com hero, meta semanal e receitas em destaque
- `calculadoras.html`: IMC e TDEE com fórmulas Mifflin-St Jeor
- `receitas.html`: lista com busca e filtro por categoria
- `planos.html`: gerador de cardápio semanal baseado em calorias-alvo e objetivo
- `dicas.html` e `sobre.html`: conteúdo institucional
- `contato.html`: formulário com validação simples
- `assets/css/styles.css`: estilos base e dark mode via `[data-theme="dark"]`
- `assets/js/main.js`: toggle de tema, smooth scroll e utilidades
- `favicon.svg`, `sitemap.xml`, `robots.txt`, `manifest.webmanifest`

## Personalização

- Cores e espaçamentos em `:root` dentro de `assets/css/styles.css`.
- Adicione imagens em `assets/images/` e dados em `assets/data/`.
- Ajuste textos e conteúdo diretamente nos `.html`.

## SEO e Acessibilidade

- Títulos e descrições em cada página.
- `robots.txt` e `sitemap.xml` básicos.
- Controles com `aria-label`, `role` e `aria-live` quando necessário.

## Licença

Uso livre para fins educacionais e demonstrativos. Verifique requisitos de marca se publicar.
