require 'rails_helper'

RSpec.describe "Admin::Videos", type: :request, inertia: true do
  before(:each) do
    user = User.create(email: 'user@test.com', password: 'password')
    sign_in user
  end

  let(:course) do
    Course.create(
      title: "title",
      description: "description",
      end_date: Date.tomorrow
    )
  end

  context "GET courses/:id/videos/new" do
    it "should render the course_videos new page" do
      get new_admin_course_video_path(course)

      expect(inertia).to render_component 'admin/videos/new'
    end
  end

  context "POST courses/:id/videos/new" do
    context "with invalid params" do
      it "should not create a new video" do
        expect {
          post admin_course_videos_path(course)
        }.to change(Video, :count).by(0)
      end

      it "should redirect to the new course video page" do
        post admin_course_videos_path(course)

        expect(response).to redirect_to new_admin_course_video_path(course)
      end

      it "should renders the inertia component" do
        post admin_course_videos_path(course)

        follow_redirect!
        expect(inertia).to render_component 'admin/videos/new'
      end

      it "passes the errors to the inertia component" do
        post admin_course_videos_path(course)

        follow_redirect!
        expect(inertia.props[:errors]).to include(:title, :video)
      end
    end
  end
end
