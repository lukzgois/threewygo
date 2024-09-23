class Admin::VideosController < ApplicationController
  use_inertia_instance_props
  include Auth

  def new
    @create_video_path = admin_course_videos_path(params[:course_id])
  end

  def create
  end
end
