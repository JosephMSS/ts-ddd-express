import { Course } from '../../../../../../src/Contexts/Mooc/Courses/domain/Course';
import { FileCourseRepository } from '../../../../../../src/Contexts/Mooc/Courses/infrastructure/persistence/FileCourseRepository';

describe('FileCourseRepository', () => {
	it('should be save a course', async () => {
		const expectedCourse = new Course({
			id: '1',
			name: 'Course 1',
			duration: '100'
		});
		const repository = new FileCourseRepository();
		await repository.save(expectedCourse);

		const course = await repository.search(expectedCourse.id);
		expect(course).toEqual(expectedCourse);
	});
});
