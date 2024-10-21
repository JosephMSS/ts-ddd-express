import { Course } from './Course.1';

export interface CourseRepository {
	save(course: Course): Promise<void>;
}
