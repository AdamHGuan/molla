"use strict";

module.exports = {
	up: (queryInterface, Sequelize) => {
		return queryInterface.bulkInsert(
			"Questions",
			[
				{
					ownerId: 1,
					title: "What are some neighboring galaxies?",
					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					ownerId: 1,
					title: "Do galaxies spin?",
					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					ownerId: 1,
					title: "Why can you see the Moon even though it's daytime?",
					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					ownerId: 2,
					title: "How do galaxies form?",
					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					ownerId: 2,
					title: "What is a Supernova?",
					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					ownerId: 3,
					title:
						"Is there a possibility of a 'cold' solar system or a system of planets without a star?",
					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					ownerId: 3,
					title: "Can new planets form in our solar system?",
					createdAt: new Date(),
					updatedAt: new Date(),
				},
			],
			{}
		);
	},

	down: (queryInterface, Sequelize) => {
		return queryInterface.bulkDelete("Questions", null, {});
	},
};
