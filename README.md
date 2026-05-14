# STURM Commercial Landing

Лендинг направления STURM для комплектации коммерческих объектов сантехникой, плиткой и керамогранитом.

## PDF-карта

- Слайд 1: титульный слайд презентации компании STURM, 2026.
- Слайд 2: типы объектов для поставок.
- Слайд 3: категории поставки.
- Слайды 4-5: факты о компании, складах, шоурумах, ассортименте и проектном сообществе.
- Слайды 6-42: портфолио объектов.
- Слайд 44: контакты STURM.

Для наполнения реальными кейсами и преимуществами замените placeholders в data/landing.ts данными из PDF-презентации STURM.

## Команды

```bash
npm run dev
npm run build
npm run lint
```

## Resend

Для отправки заявок на email задайте переменные окружения из `.env.example`.

## Docker

Переменные из `.env.local` не копируются внутрь Docker-образа: это сделано намеренно, чтобы секреты не попадали в image и git. Передавайте их в контейнер при запуске.

```bash
docker build -t sturm-commercial-landing .
docker run --rm -p 3000:3000 --env-file .env.local sturm-commercial-landing
```

Или через Docker Compose:

```bash
docker compose up --build
```

Файл `compose.yaml` подключает `.env.local` через `env_file`, поэтому `RESEND_API_KEY`, `RESEND_FROM_EMAIL` и `RESEND_TO_EMAIL` будут доступны в `process.env` на runtime.

## Production uploads

В приложении лимит Server Actions настроен в `next.config.ts`:

```ts
experimental: {
  serverActions: {
    bodySizeLimit: "25mb",
  },
}
```

Если на production файл 2-3 МБ падает с `413 Request Entity Too Large`, запрос отклоняет reverse proxy до Next.js. Для Nginx добавьте лимит в активный `server` или `location`:

```nginx
client_max_body_size 25m;
```

Пример конфига лежит в `deploy/nginx/project.sturmproject.ru.conf`.

Проверка на сервере:

```bash
sudo nginx -T | grep -n "client_max_body_size"
sudo nginx -t
sudo systemctl reload nginx
```
