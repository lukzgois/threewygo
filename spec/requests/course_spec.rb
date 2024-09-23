require 'rails_helper'

RSpec.describe "Courses", type: :request, inertia: true do
  before(:each) do
    user = User.create(email: 'user@test.com', password: 'password')
    sign_in user
  end

  context "GET courses/" do
    it "should render the courses index page" do
      get admin_courses_path

      # check the component
      expect(inertia).to render_component 'admin/courses/index'
    end

    it "passes the url for the new course page" do
      get admin_courses_path

      expect(inertia).to include_props({new_course_path: new_admin_course_path})
    end
  end

  context "GET courses/new" do
    it "should render the courses index page" do
      get new_admin_course_path

      # check the component
      expect(inertia).to render_component 'admin/courses/new'
    end
  end

  context "POST courses" do
    context "with valid params" do
      it "should create a new course" do
        expect {
          post admin_courses_path, params: { title: "title", description: "description", end_date: Date.tomorrow }
        }.to change(Course, :count).by(1)
      end

      it "should redirect to the courses pages" do
        post admin_courses_path, params: { title: "title", description: "description", end_date: Date.tomorrow }

        expect(response).to redirect_to admin_courses_path
      end
    end

    context "with invalid params" do
      it "should not create a new course" do
        expect {
          post admin_courses_path
        }.to change(Course, :count).by(0)
      end

      it "should redirect to the new course page" do
        post admin_courses_path

        expect(response).to redirect_to new_admin_course_path
      end

      it "should renders the inertia component" do
        post admin_courses_path

        follow_redirect!
        expect(inertia).to render_component 'admin/courses/new'
      end

      it "passes the errors to the inertia component" do
        post admin_courses_path

        follow_redirect!
        expect(inertia.props[:errors]).to include(:title, :description, :end_date)
      end
    end
  end
end
