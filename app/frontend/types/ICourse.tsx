import IVideo from "./IVideo"

export default interface ICourse {
  id: number,
  title: string
  description: string,
  end_date: string,
  end_date_formatted: string,
  view_course_url: string,
  delete_course_url: string,
  edit_course_url: string,
  update_course_url: string,
  videos_total_size: string,
  videos: IVideo[]
}
