class Admin::DashboardController < Admin::AdminController
  use_inertia_instance_props
  include Auth

  def index
  end
end
