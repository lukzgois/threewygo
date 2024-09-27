class PublicController < ApplicationController
  before_action :set_breadcrumbs

  def set_breadcrumbs
    add_breadcrumb("Home", root_path)
  end

end
