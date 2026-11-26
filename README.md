# Vuriko Company Profile

Static company profile site built with [Astro](https://astro.build/).

## Tech Stack

- **Framework:** Astro 5 (static site generation)
- **Language:** TypeScript
- **Styling & UI:** Bootstrap, custom CSS, Font Awesome Pro, Swiper, Magnific Popup, Splitting, Odometer, Isotope, jQuery, Matter.js
- **Deployment:** Docker (Node 22 Alpine build stage + Nginx Alpine serve stage)

## Development

```sh
npm install
npm run dev
npm run build
npm run preview
```

## Configuration

Set the `SITE_URL` environment variable to configure the canonical site URL used by Astro (defaults to `https://vuriko.id`):

```sh
SITE_URL=https://vuriko.id npm run build
```

## Deployment (cPanel Shared Hosting & Docker / Nginx)

- **cPanel / Shared Hosting:** Run `npm run build`, then upload the contents of `dist/` (including `.htaccess`) to `public_html/`.
- **Docker / Nginx:** The repository includes a `Dockerfile` and `nginx.conf`. Nginx serves the static build from `dist/`, redirects legacy `.html` URLs to clean URLs, and serves the custom `404.html` page.
