InertiaRails.configure do |config|
  config.ssr_enabled = ViteRuby.config.ssr_build_enabled
  config.version = ViteRuby.digest

  config.default_render = true
end
