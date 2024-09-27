class ApplicationController < ActionController::Base
  include InertiaCsrf

  # Only allow modern browsers supporting webp images, web push, badges, import maps, CSS nesting, and CSS :has.
  allow_browser versions: :modern

  def breadcrumbs
    @breadcrumbs ||= []
  end

  def add_breadcrumb(text, path = nil)
    breadcrumbs << { text: text.truncate(15), path: path }
  end

  inertia_share auth: -> {
    if user_signed_in?
      {
        user: current_user.email
      }
    end
  }

  inertia_share breadcrumbs: -> {
    breadcrumbs
  }
end
