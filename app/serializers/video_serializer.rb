class VideoSerializer < ActiveModel::Serializer
  include Rails.application.routes.url_helpers

  attributes :id, :title, :video_url, :delete_video_url

  def video_url
    if object.video.attached?
      rails_blob_url(object.video, only_path: true)
    end
  end

  def delete_video_url
    admin_course_videos_path(object.id)
  end
end
