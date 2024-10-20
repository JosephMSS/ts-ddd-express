import { readFile, writeFile } from "fs/promises";
import { Course } from "../../domain/Course";
import { CourseRepository } from "../../domain/CourseRepository";
import { serialize, deserialize } from "bson";

export class FileCourseRepository implements CourseRepository {
  private readonly FILE_PATH = `${__dirname}/courses`;
  async save(course: Course): Promise<void> {
    writeFile(this.filePath(course.id), serialize(course));
  }
  private filePath(courseId: string): string {
    return `${this.FILE_PATH}/${courseId}.repo`;
  }
  async search(courseId: string): Promise<Course> {
    const course = await readFile(this.filePath(courseId));

    const courseData = deserialize(course) as Course;
    return new Course({
      id: courseData.id,
      name: courseData.name,
      duration: courseData.duration,
    });
  }
}
