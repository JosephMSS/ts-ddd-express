import { Course } from '../../../../../../src/Contexts/Mooc/Courses/domain/Course';
import { FileCourseRepository } from '../../../../../../src/Contexts/Mooc/Courses/infrastructure/persistence/FileCourseRepository';
import { CourseId } from '../../../../../../src/Contexts/Mooc/Shared';

describe('FileCourseRepository', () => {
	it('should be save a course', async () => {
		const expectedCourse = new Course({
			id: new CourseId('d92cf24e-b3e4-4885-9592-5d6996a6733c'),
			name: 'Course 1',
			duration: '100'
		});
		const repository = new FileCourseRepository();
		await repository.save(expectedCourse);

		const course = await repository.search(expectedCourse.id.value);
		expect(course).toEqual(expectedCourse);
	});
});
