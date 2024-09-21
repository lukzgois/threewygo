class DashboardController < ApplicationController
  use_inertia_instance_props

  def index
    @name = "Test Name"
  end
end
