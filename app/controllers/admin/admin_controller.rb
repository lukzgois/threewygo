class Admin::AdminController < ApplicationController
  before_action :set_breadcrumbs

  def set_breadcrumbs
    add_breadcrumb("Home", admin_dashboard_path)
  end
end
