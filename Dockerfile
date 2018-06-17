FROM debian
RUN apt-get update
RUN apt-get install nginx
RUN rm /etc/nginx/default
CP . /apps
RUN cp /apps/nginx.conf /etc/nginx/nginx.conf
EXPOSE 80
CMD nginx
