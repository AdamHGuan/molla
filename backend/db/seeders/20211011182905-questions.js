"use strict";

module.exports = {
	up: (queryInterface, Sequelize) => {
		return queryInterface.bulkInsert(
			"Questions",
			[
				{
					ownerId: 1,
					title: "What are some neighboring galaxies?",
					description:
						"How do I find a list of all the nearby galaxies, say, about within 200 MPC nearby?",
					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					ownerId: 1,
					title: "Do galaxies spin?",
					description:
						"Galaxies look stationary, if galaxies rotate, why can’t we see them moving?",
					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					ownerId: 1,
					title: "Why can you see the Moon even though it's daytime?",
					description:
						"Why do we generally always see the moon in the night and rarely during the day?",
					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					ownerId: 2,
					title: "How do galaxies form?",
					description:
						"How long did it take to form a galaxy like the Milky Way?",
					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					ownerId: 2,
					title: "What is a Supernova?",
					description: "What leads to this event?",
					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					ownerId: 3,
					title:
						"Is there a possibility of a 'cold' solar system or a system of planets without a star?",
					description: "What would it be like in those environments?",
					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					ownerId: 3,
					title: "Can new planets form in our solar system?",
					description: "It is possibly to see new planet in our solar system?",
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
