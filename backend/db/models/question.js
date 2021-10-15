"use strict";
module.exports = (sequelize, DataTypes) => {
	const Question = sequelize.define(
		"Question",
		{
			ownerId: { allowNull: false, type: DataTypes.INTEGER },
			title: { allowNull: false, type: DataTypes.STRING(255) },
		},
		{}
	);
	Question.associate = function (models) {
		// associations can be defined here
		Question.belongsTo(models.User, { foreignKey: "ownerId" });
		Question.hasMany(models.Answer, {
			foreignKey: "questionId",
			onDelete: "CASCADE",
			hooks: true,
		});
	};
	return Question;
};
