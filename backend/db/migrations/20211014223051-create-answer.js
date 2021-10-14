"use strict";
module.exports = {
	up: (queryInterface, Sequelize) => {
		return queryInterface.createTable("Answers", {
			id: {
				allowNull: false,
				autoIncrement: true,
				primaryKey: true,
				type: Sequelize.INTEGER,
			},
			ownerId: {
				allowNull: false,
				type: Sequelize.INTEGER,
				references: { model: "Users" },
			},
			questionId: {
				allowNull: false,
				type: Sequelize.INTEGER,
				references: { model: "Questions" },
			},
			answer: {
				allowNull: false,
				type: Sequelize.TEXT,
			},
			createdAt: {
				allowNull: false,
				type: Sequelize.DATE,
			},
			updatedAt: {
				allowNull: false,
				type: Sequelize.DATE,
			},
		});
	},
	down: (queryInterface, Sequelize) => {
		return queryInterface.dropTable("Answers");
	},
};
