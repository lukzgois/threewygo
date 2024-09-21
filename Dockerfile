FROM ruby:3.3.4-alpine
ENV RAILS_ENV="development"

ARG UID=1000
ARG GID=1000

RUN apk update
RUN apk add \
      tzdata \
      nodejs \
      npm \
      build-base \
      postgresql-dev

RUN addgroup --gid ${GID} threewygo && \
    adduser -S --uid ${UID} -G threewygo threewygo

RUN mkdir /.npm && chown -R $UID:$GID /.npm

USER threewygo
WORKDIR /app

EXPOSE 3100
EXPOSE 3036

CMD ["rails", "server", "-b", "0.0.0.0"]
