"use strict";

module.exports = {
	up: (queryInterface, Sequelize) => {
		return queryInterface.bulkInsert(
			"Answers",
			[
				{
					ownerId: 2,
					questionId: 1,
					answer:
						"Although several dozen minor galaxies lie closer to our Milky Way, the Andromeda galaxy is the closest large spiral galaxy to ours. Excluding the Large and Small Magellanic Clouds, visible from Earth’s Southern Hemisphere, the Andromeda galaxy is the brightest external galaxy you can see. At 2.5 million light-years, it’s the most distant thing humans can see with the unaided eye.",
					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					ownerId: 3,
					questionId: 1,
					answer:
						"Closest galaxies: 1. Canis Major Dwarf (Distance: 0.025 Mly), 2. Virgo Stellar Stream (Distance: 0.030 Mly), 2. Sagittarius Dwarf Elliptical Galaxy (Distance: 0.081 Mly).",
					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					ownerId: 5,
					questionId: 2,
					answer:
						"Astronomers have discovered that all galaxies rotate once every billion years, no matter how big they are.",
					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					ownerId: 10,
					questionId: 2,
					answer:
						"We know that galaxy rotation is happening because the Milky Way is a flattened disk, in the same way that the Solar System is a flattened disk. The centrifugal force from the rotation flattens out the galactic disk. All stars in the galactic disk follow roughly circular orbits around the center of the galaxy.",
					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					ownerId: 7,
					questionId: 3,
					answer:
						"There are two reasons for why the Moon can be seen during the daytime. First, there is the Moon’s apparent luminosity, which is due to its proximity to our planet and a combination of other factors. Second, there is the particular nature of the Moon’s orbit around Earth, otherwise known as the Lunar Cycle. Between these two factors, the Moon can become visible to the casual observer during the day.",
					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					ownerId: 1,
					questionId: 4,
					answer:
						"Galaxies are collections of stars, gas, dust and dark matter held together by gravity. Their appearance and composition are shaped over billions of years by interactions with groups of stars and other galaxies. Using supercomputers, scientists can look back in time and simulate how a galaxy may have formed in the early universe and grown into what we see today. Galaxies are thought to begin as small clouds of stars and dust swirling through space. As other clouds get close, gravity sends these objects careening into one another and knits them into larger spinning packs. Subsequent collisions can sling material toward a galaxy’s outskirts, creating extensive spiral arms filled with colonies of stars.",
					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					ownerId: 1,
					questionId: 5,
					answer:
						"A supernova is the explosion of a star. It is the largest explosion that takes place in space. A supernova happens where there is a change in the core, or center, of a star. A change can occur in two different ways, with both resulting in a supernova. The first type of supernova happens in binary star systems. Binary stars are two stars that orbit the same point. One of the stars, a carbon-oxygen white dwarf, steals matter from its companion star. Eventually, the white dwarf accumulates too much matter. Having too much matter causes the star to explode, resulting in a supernova. The second type of supernova occurs at the end of a single star’s lifetime. As the star runs out of nuclear fuel, some of its mass flows into its core. Eventually, the core is so heavy that it cannot withstand its own gravitational force. The core collapses, which results in the giant explosion of a supernova. The sun is a single star, but it does not have enough mass to become a supernova.",
					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					ownerId: 1,
					questionId: 6,
					answer:
						"Absolutely. But you might be surprised to find that planets can exist in several other iterations, too. They can orbit dead stars, for one, or might fly through the universe at extraordinary speeds thanks to a kind of cosmic slingshot event. But before we get to our free-wheelin' planet cousins, let's give a little background on how stars usually support planets. For one, stars and planets are usually formed from the same mess of matter. When a nebula (a big cloud of gas and dust) collapses, the core forms a hot star. The outer disk begins to form planets, as matter sticks together in an orbit around the core [source: HubbleSite]. Matter either collides with the infant planets or sticks to them, so that in time the orbit becomes an HOV lane: free and clear for the planet to travel. We're not quite certain how planets form without stars. But scientists do know that some wandering planets without a sun (also called runaway planets) broke away from their star after birth. Some of these planets are actually catapulting through the universe at nearly 30 million miles (48 million kilometers) per hour!",
					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					ownerId: 4,
					questionId: 7,
					answer:
						"If you mean new planets being born, no. That era has long since passed. All the material that would go to form new planets was used up long, long ago. If you mean new major planets being discovered, probably “no” as well. There’s always been talk of another big planet way out beyond Pluto, but there is no evidence one exists.",
					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					ownerId: 2,
					questionId: 8,
					answer:
						"Believe it or not, this is the most asked question that astronomers encounter. Many people do not understand the difference. In ancient times, they were considered one and the same. But the two disciplines were separated during the Age of Reason in the 17th century. Astrology is a practice of using the locations of the planets to look into a person's personality or predict the future. It is not a science and is considered a form of divination. By contrast, astronomy is the scientific study of the universe. Astronomers observe the objects in the night sky to try to determine their composition and learn more about the origin and structure of the universe.",
					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					ownerId: 7,
					questionId: 9,
					answer:
						"Many people hesitate to get involved with astronomy because they believe it requires expensive equipment. The only thing you really need to enjoy the night sky is your eyes, a dark viewing location, and some patience. To get a better look at things, a pair of binoculars can provide a really good view. Many people will be surprised how many more stars and objects they can see with a decent pair of 10X binoculars. They collect much more light than the human eye and will bring much dimmer objects into view. You can even see Jupiter’s moons with binoculars. A simple camera tripod to steady the binoculars is also a good idea, since your arms can get tired very quickly.",
					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					ownerId: 1,
					questionId: 10,
					answer:
						"The primary purposes of a telescope are to gather light and magnify an image. The aperture (opening) of a telescope is larger than that of the human eye and therefore, can gather much more light. This enables us to see dim objects that are too faint to see with the naked eye. The larger the aperture of the telescope, the more light it can gather. Telescopes also use a series of lenses and/or mirrors to magnify the image, enabling us to see more detail.",
					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					ownerId: 8,
					questionId: 11,
					answer:
						"If you live near a big city, you may not be able to see a lot of stars. The reason for this is light pollution. Dust and water vapor in the atmosphere reflects the bright city lights back down towards the ground. This “light pollution” tends to be brighter than some of the dim stars and other deep sky objects, essentially hiding them from view. To truly appreciate the night sky, you must get as far away from city lights as possible. There is no more beautiful sight then the band of the Milky Way stretching across a dark sky. We can all help to combat light pollution by convincing our local authorities to use more efficient light fixtures that shine the light on the ground and block it from going up into the sky.",
					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					ownerId: 6,
					questionId: 12,
					answer:
						"Space is defined as the area above the Earth’s atmosphere. But there is no specific boundary since the atmosphere gradually thins out as you move farther away from the Earth. However, NASA awards astronaut status to anyone who flies above 50 miles (80 km).",
					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					ownerId: 12,
					questionId: 13,
					answer:
						"All though the exact age of the Earth is difficult to determine, scientists believe it to be about 4.54 billion years old. This age has been estimated by measuring the amount of radioactive decay in rocks and minerals on Earth, and by observing the elements that exist in the Sun. The age of the Earth is believed to be the same as the age of the Sun and the other planets in the Solar System since they all formed at the same time from the same raw materials.",
					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					ownerId: 3,
					questionId: 14,
					answer:
						"As the Sun shines on the surface of the Earth, it illuminates one half of the Earth's surface. The other half is in darkness, or night. The dividing line between day and night is known as the terminator. The terminator line passes through any given point on Earth two times a day, once during sunrise and again during sunset. Because of the tilt of the Earth's axis, the polar regions are an exception. They spend parts of the year in perpetual day and night. The terminator is not a sharp line on Earth. It is actually kind of blurry because the atmosphere scatters the sunlight. This is why we have dawn and dusk before sunrise and sunset. The terminator line moves across the surface of the Earth as the Earth rotates on its axis. Therefore, the speed that the terminator moves is the same as the speed that the Earth rotates. At the equator, the speed would be 1,038 miles per hour (1,670 kilometers per hour). The speed decreases as you travel further north or south.",
					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					ownerId: 9,
					questionId: 15,
					answer:
						"The Earth's atmosphere is an extremely thin sheet of gas that surrounds the planet. All though the planet is nearly 8,000 miles (12,875 kilometers) in diameter, the atmosphere is only 62 miles (100 kilometers) thick. This thin sheet of gas is all that separates us from the cold vacuum of outer space. All though some gas molecules extend out as far as 300 miles (480 kilometers), the majority of the atmosphere's mass lies below 62 miles, which is generally considered to be the edge of space.",
					createdAt: new Date(),
					updatedAt: new Date(),
				},

				{
					ownerId: 5,
					questionId: 16,
					answer:
						"Yes, the Moon is gradually moving away from the Earth at the rate of about 1.5 inches (3.8 centimeters) per year. We know this because we can track the Moon’s distance using lasers. The Apollo moon missions left reflective mirrors on the Moon’s surface. By measuring the time it takes a laser beam to travel to the Moon and back, we can calculate the distance using the speed of light. When the Moon first formed, it was much closer to the Earth. Astronomers believe it was about 12 times closer than it is now, which means it would have been much larger in the night sky.",
					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					ownerId: 1,
					questionId: 17,
					answer:
						"The Moon shines because the light from the Sun shines and reflects from the Moon’s surface. What we think of as Moon shine is actually just reflected sunlight.",
					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					ownerId: 10,
					questionId: 18,
					answer:
						"The most widely accepted scientific theory today suggests that the universe began about 14 billion years ago from an infinitely small, dense, and hot state that expanded rapidly. As it continued to expand and cool, hydrogen gas formed into stars and eventually formed into galaxies. This theory is known as the big bang theory and helps to explain why the universe appears to be expanding today. Astronomers have observed that galaxies are moving away from each other. The farther away a galaxy is, the faster it is moving away. The big bang theory states that it is actually the fabric of space that is expanding. Matter is simply going along for the ride like dust on the surface of a balloon. As the balloon expands, the dust gets farther and farther apart.",
					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					ownerId: 13,
					questionId: 19,
					answer:
						"The answer to this question is a bit complicated. The most recent and most popular definition says that a blue moon is the second of two full moons occurring in the same month. Since the lunar cycle is 29 days and most months have 30-31 days, we eventually find a situation where a full moon occurs at the beginning and the ending of the same month. There is also a second, older definition of a blue moon. This one defines a blue moon as the third full moon in a season with four full moons. Normally there is one full moon each month, so a season such as summer would usually have three full moons. The reason for this is complex, and has to do with the ancient Christian ecclesiastical calendar. This calendar was used to determine important dates such as Easter. Each of the usual 12 full moons of the year had a name associated with the time of year in which they usually occurred. In a year with 13 full moons, the extra full moon was referred to as a blue moon so the calendar could stay on track.",
					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					ownerId: 2,
					questionId: 20,
					answer:
						"Scientists used to think that the combined gravity from all of the matter in the universe would eventually slow its expansion and cause it to contract back into an infinitely small, dense state as it existed before the big bang. But now, most agree that there is not enough matter in the universe to slow its expansion. This means that it will continue to expand until all of the stars eventually burn out. Eventually, matter will decompose and all that will be left is a cold, dark void. That may sound depressing, but it will take at least 100 trillion years.",
					createdAt: new Date(),
					updatedAt: new Date(),
				},
			],
			{}
		);
	},

	down: (queryInterface, Sequelize) => {
		return queryInterface.bulkDelete("Answers", null, {});
	},
};
