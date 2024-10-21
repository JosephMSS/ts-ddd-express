import { Uuid } from '../../../Shared/domain/value-object/Uuid';
import { Course } from '../domain/Course';
import { CourseRepository } from '../domain/CourseRepository';
import { CourseCreatorRequest } from './CourseCreatorRequest';

export class CourseCreator {
	constructor(private readonly repository: CourseRepository) {}

	async run({ id, name, duration }: CourseCreatorRequest): Promise<void> {
		const course = new Course({ id: new Uuid(id), name, duration });
		await this.repository.save(course);
	}
}
