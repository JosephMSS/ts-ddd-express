import { CourseCreator } from '../../../../../src/Contexts/Mooc/Courses/application/CourseCreator';
import { CourseCreatorRequest } from '../../../../../src/Contexts/Mooc/Courses/application/CourseCreatorRequest';
import { Course } from '../../../../../src/Contexts/Mooc/Courses/domain/Course';
import { Uuid } from '../../../../../src/Contexts/Shared/domain/value-object/Uuid';
import { CourseRepositoryMock } from '../__mocks__/CourseRepositoryMock';

let repository: CourseRepositoryMock;
let creator: CourseCreator;

beforeEach(() => {
	repository = new CourseRepositoryMock();
	creator = new CourseCreator(repository);
});

describe('CourseCreator', () => {
	it('should create a valid course', async () => {
		const id = new Uuid('d92cf24e-b3e4-4885-9592-5d6996a6733c');
		const name = 'some-name';
		const duration = 'some-duration';

		const course = new Course({ id, name, duration });

		await creator.run({ id: id.value, name, duration } as CourseCreatorRequest);

		repository.assertLastSavedCourseIs(course);
	});
});
