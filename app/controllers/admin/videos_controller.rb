class Admin::VideosController < ApplicationController
  use_inertia_instance_props
  include Auth

  def new
    @create_video_path = admin_course_videos_path(params[:course_id])
  end

  def create
    video = Video.new(request_params)

    if video.save
      redirect_to admin_course_path(params[:course_id])
    else
      redirect_to new_admin_course_video_path, inertia: { errors: video.errors }
    end
  end

  private

  def request_params
    params.permit(:title, :video, :course_id)
  end
end
