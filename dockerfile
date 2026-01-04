# Temel imaj olarak nginx alpine (çok küçük boyutlu) kullanıyoruz
FROM nginx:alpine

# Çalışma dizinindeki dosyaları nginx'in html klasörüne kopyalıyoruz
COPY index.html /usr/share/nginx/html/
COPY style.css /usr/share/nginx/html/
COPY main.js /usr/share/nginx/html/

# Nginx varsayılan olarak 80 portunu kullanır
EXPOSE 80

# Nginx otomatik olarak başlayacaktır