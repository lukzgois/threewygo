FROM ruby:3.3.4-alpine
ENV RAILS_ENV="development"

RUN apk update
RUN apk add \
      tzdata \
      nodejs \
      npm \
      build-base \
      postgresql-dev
WORKDIR /app
EXPOSE 3100
EXPOSE 3036

CMD ["rails", "server", "-b", "0.0.0.0"]
