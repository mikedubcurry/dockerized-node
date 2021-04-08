import { sequelize, Person } from '../db';

type TPerson = {
	firstName: string;
	lastName: string;
	id: string;
};

beforeAll(async () => {
	await sequelize.sync({ force: true });
});
test('create person', async () => {
	expect.assertions(1);
	const person: any = await Person.create({
		id: 1,
		firstName: 'Bobbie',
		lastName: 'Draper',
	});
	expect(person.id).toEqual(1);
});

test('get person', async () => {
	expect.assertions(2);
	const person: any = await Person.findByPk(1);
	expect(person.firstName).toEqual('Bobbie');
	expect(person.lastName).toEqual('Draper');
});

test('delete person', async () => {
	expect.assertions(1);
	await Person.destroy({
		where: {
			id: 1,
		},
	});
	const person: any = await Person.findByPk(1);
	expect(person).toBeNull();
});

afterAll(async () => {
	await sequelize.close();
});
