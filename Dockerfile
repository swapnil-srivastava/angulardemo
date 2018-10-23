# FROM nginx:alpine
# LABEL author="Swapnil Srivastava"
# COPY ./dist /usr/share/nginx/html
# EXPOSE 80 443 4200
# ENTRYPOINT ["nginx", "-g", "daemon off;"]


##############################
### build environment ########
### Multi Stage Docker #######
##############################

#####################################
# not building the app with multi
# stage docker as it taking more time
# in circle ci build as the cache for
# docker is not ultized in circle ci
# for docker and every creation of
# docker build in circle ci build
# a fresh docker image
#####################################

# # base image
# FROM node:8.11.2 as builder

# ARG ANGULAR_VERSION=7.0.2

# # ENV http_proxy ${http_proxy}
# # ENV https_proxy ${https_proxy}

# # set working directory
# RUN mkdir /app

# WORKDIR /app

# # install and cache app dependencies
# COPY package.json package-lock.json /app/

# RUN npm install -g npm@latest && npm install

# RUN npm install -g @angular/cli@${ANGULAR_VERSION} --unsafe-perm

# COPY . /app/

# # generate build using npm scripts
# RUN npm run build -- --prod

# COPY /httpd/ /app/httpd/

# ENV http_proxy ""
# ENV https_proxy ""

# ##############################
# ### production apache2 #######
# ##############################

#base image
FROM ubuntu:16.04

# ENV http_proxy ${http_proxy}
# ENV https_proxy ${https_proxy}

#======================
# Install apache2 httpd
#======================

RUN apt-get update && \
    apt-get install -y apache2

# Removing Existing *.html files
RUN rm -rf /var/www/html/*

# Setting Port Config to 4200
COPY ./httpd/ports.conf  /etc/apache2/

#Enabling mod_rewrite
RUN a2enmod rewrite.load

# Copying Main Apache2 Configuration File
COPY ./httpd/apache2.conf /etc/apache2/

COPY ./httpd/000-default.conf /etc/apache2/sites-enabled/

# htaccess config
COPY ./httpd/.htaccess /var/www/html/

# Copying dist folder from builder docker above and copy to relevant apache directory
COPY ./dist/angulardemo /var/www/html/
# COPY --from=builder /app/dist/angulardemo /var/www/html/  // not using multi stage docker

EXPOSE 4200

# ENV http_proxy ""
# ENV https_proxy ""

ENTRYPOINT ["apache2ctl"]

CMD ["-DFOREGROUND"]

