class Admin::DashboardController < ApplicationController
  use_inertia_instance_props
  include Auth

  def index
  end
end
