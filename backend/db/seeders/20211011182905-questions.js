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

				{
					ownerId: 3,
					title: "What is the difference between astronomy and astrology?",
					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					ownerId: 4,
					title: "Do I need an expensive telescope to enjoy astronomy?",
					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					ownerId: 4,
					title: "How does a telescope work?",
					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					ownerId: 5,
					title: "Why can't I see very many stars at night?",
					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					ownerId: 5,
					title: "Where does space begin?",
					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					ownerId: 6,
					title: "How old is the Earth?",
					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					ownerId: 6,
					title: "What is terminator on the Moon?",
					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					ownerId: 7,
					title: "How thick is the Earth's atmosphere?",
					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					ownerId: 7,
					title: "Is the Moon moving away from the Earth?",
					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					ownerId: 8,
					title: "Why does the Moon shine?",
					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					ownerId: 8,
					title: "How did the universe begin?",
					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					ownerId: 9,
					title: "What is a blue moon?",
					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					ownerId: 9,
					title: "How will the universe end?",
					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					ownerId: 10,
					title: "How long does it take the light from the Sun to reach Earth?",
					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					ownerId: 10,
					title: "What are sunspots and why do they appear dark?",
					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					ownerId: 11,
					title: "What is the solar wind?",
					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					ownerId: 11,
					title: "How many planets are there in the Solar System?",
					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					ownerId: 12,
					title: "How old is the Solar System?",
					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					ownerId: 12,
					title: "What is a star?",
					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					ownerId: 13,
					title: "Why do stars seem to twinkle?",
					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					ownerId: 13,
					title: "How do stars die",
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
