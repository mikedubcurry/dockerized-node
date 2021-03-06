import express from 'express';

import { Person } from '../db';

const router = express.Router();

router.get('/all', (req, res) => {
	Person.findAll()
		.then((persons) => {
			res.status(200).json({ persons });
		})
		.catch((err) => {
			res.status(500).send(JSON.stringify(err));
		});
});

router.get('/:id', (req, res) => {
	Person.findByPk(req.params.id)
		.then((person) => {
			res.status(200).send(JSON.stringify(person));
		})
		.catch((err) => {
			res.status(500).send(JSON.stringify(err));
		});
});

router.put('/', function (req, res) {
	Person.create({
		firstName: req.body.firstName,
		lastName: req.body.lastName,
		id: req.body.id,
	})
		.then((person) => {
			res.status(200).send(JSON.stringify(person));
		})
		.catch((err) => {
			res.status(500).send(JSON.stringify(req));
		});
});

router.delete('/:id', function (req, res) {
	Person.destroy({
		where: {
			id: req.params.id,
		},
	})
		.then(() => {
			res.status(200).send();
		})
		.catch((err) => {
			res.status(500).send(JSON.stringify(err));
		});
});

export { router };
