FROM node:onbuild

EXPOSE 80

CMD apt-get install nodejs-legacy
CMD npm run-script start

WORKDIR /usr/src/app
CMD python -m SimpleHTTPServer 80
