FROM debian
LABEL maintainer="spamfree@matthieubessat.fr"
ADD . /app
WORKDIR /app
RUN apt-get update && apt-get -y upgrade
RUN apt-get update && apt-get upgrade
RUN apt-get install -y nginx
RUN rm /etc/nginx/sites-enabled/default
RUN cp /app/nginx.conf /etc/nginx/sites-enabled/default
EXPOSE 80
CMD nginx -g "daemon off;"
