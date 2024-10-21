import { v4 } from 'uuid';
import validate from 'uuid-validate';

import { InvalidArgumentError } from './InvalidArgumentError';

type IValidate = (uuid: string, version?: number) => boolean;
type IUuid = () => string;

const uuid = v4 as IUuid;
export class Uuid {
	readonly value: string;
	private readonly validate: IValidate = validate as IValidate;
	constructor(value: string) {
		this.ensureIsValidUuid(value);

		this.value = value;
	}

	static random(): Uuid {
		return new Uuid(uuid());
	}

	toString(): string {
		return this.value;
	}

	private ensureIsValidUuid(id: string): void {
		if (!this.validate(id)) {
			throw new InvalidArgumentError(`<${this.constructor.name}> does not allow the value <${id}>`);
		}
	}
}
