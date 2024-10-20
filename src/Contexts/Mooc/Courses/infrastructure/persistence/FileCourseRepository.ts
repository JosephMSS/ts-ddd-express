import { deserialize, serialize } from 'bson';
import { readFile, writeFile } from 'fs/promises';

import { Uuid } from '../../../../Shared/domain/value-object/Uuid';
import { Course } from '../../domain/Course';
import { CourseRepository } from '../../domain/CourseRepository';

export class FileCourseRepository implements CourseRepository {
	private readonly FILE_PATH = `${__dirname}/courses`;
	async save(course: Course): Promise<void> {
		await writeFile(this.filePath(course.id.value), serialize(course));
	}

	async search(courseId: string): Promise<Course> {
		const course = await readFile(this.filePath(courseId));

		const courseData = deserialize(course) as Course;

		return new Course({
			id: new Uuid(courseData.id.value),
			name: courseData.name,
			duration: courseData.duration
		});
	}

	private filePath(courseId: string): string {
		return `${this.FILE_PATH}/${courseId}.repo`;
	}
}
