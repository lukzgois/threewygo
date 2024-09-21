# frozen_string_literal: true

class Users::SessionsController < Devise::SessionsController
  # before_action :configure_sign_in_params, only: [:create]

  # GET /login
  def new
    render inertia: "auth/login", props: { test: :true }
  end

  # POST /resource/sign_in
  def create
    user = User.find_by(email: params[:email].downcase)

    if  user && user.valid_password?(params[:password])
      sign_in(user)
      respond_with user, location: admin_courses_path
    else
      redirect_to "/login", inertia: { errors: { email: "Email e/ou senha inválidos" } }
    end
  end

  # DELETE /resource/sign_out
  # def destroy
  #   super
  # end

  # protected

  # If you have extra params to permit, append them to the sanitizer.
  # def configure_sign_in_params
  #   devise_parameter_sanitizer.permit(:sign_in, keys: [:attribute])
  # end
end
