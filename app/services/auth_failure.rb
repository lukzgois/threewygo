# Devise: Redirect user to login page on auth failure
#
class AuthFailure < Devise::FailureApp
  include ActionController::Redirecting

  def http_auth?
    if request.headers['X-Inertia']
      # Explicitly disable HTTP authentication on Inertia
      # requests and force a redirect on failure
      false
    else
      super
    end
  end

  def respond
    if request.env.dig('warden.options', :action) == 'unauthenticated'
      redirect_to "/login", inertia: { errors: { test: :errors }}
    end
  end
end
