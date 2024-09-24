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

      expect(inertia).to include_props({ new_course_path: new_admin_course_path })
    end
  end

  context "GET courses/new" do
    it "should render the courses index page" do
      get new_admin_course_path

      # check the component
      expect(inertia).to render_component 'admin/courses/new'
    end
  end

  context "GET courses/:id" do
    let(:course) do
      Course.create(title: "title", description: "description", end_date: Date.tomorrow)
    end

    it "should render the course show page" do
      get admin_course_path(course)

      expect(inertia).to render_component 'admin/courses/show'
    end

    it "passes the course attributes to the inertia component" do
      get admin_course_path(course)

      expect(inertia.props[:course].attributes[:id]).to eq(course.id)
      expect(inertia.props[:course].attributes[:title]).to eq(course.title)
      expect(inertia.props[:course].attributes[:description]).to eq(course.description)
      expect(inertia.props[:course].attributes[:end_date]).to eq(course.end_date)
      expect(inertia.props[:course].attributes[:end_date_formatted]).to eq(I18n.localize course.end_date)
    end
  end

  context "POST courses" do
    context "with valid params" do
      it "should create a new course" do
        expect {
          post admin_courses_path, params: { title: "title", description: "description", end_date: Date.tomorrow }
        }.to change(Course, :count).by(1)
      end

      it "should redirect to the course show page" do
        post admin_courses_path, params: { title: "title", description: "description", end_date: Date.tomorrow }

        expect(response).to redirect_to admin_course_path(Course.first)
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

  context "DELETE /courses/:id" do
    let(:course) do
      Course.create(title: "title", description: "description", end_date: Date.tomorrow)
    end

    it "should delete the course" do
      path = admin_course_path(course)

      expect {
        delete path
      }.to change(Course, :count).by(-1)
    end

    it "should redirect to the courses page" do
      delete admin_course_path(course)
      follow_redirect!

      expect(inertia).to render_component 'admin/courses/index'
    end
  end
end
