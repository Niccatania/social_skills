const connection = require('../config/connection');
const { User, Thought } = require('../models');
const {
  getRandomUserName,
  getRandomThought,
  getRandomUser,
  genRandomIndex,
} = require('./data');

// Start the seeding runtime timer
console.time('seeding');

// Creates a connection to mongodb
connection.once('open', async () => {
  // Delete the entries in the collection
  await User.deleteMany({});
  await Thought.deleteMany({});

  // Empty arrays for randomly generated posts and comments
  const thoughts = [...getRandomThought(10)];
  const users = [];

  // Makes comments array
  const makeUser = (text) => {
    users.push({
      text,
      username: getRandomUserName().split(' ')[0],
      Thought: [thoughts[genRandomIndex(thoughts)]._id],
    });
  };

  // Wait for the comments to be inserted into the database
  await Thought.collection.insertMany(thoughts);

  // For each of the comments that exist, make a random post of 10 words
  thoughts.forEach(() => makeUser(getRandomUser(10)));

  // Wait for the posts array to be inserted into the database
  await User.collection.insertMany(users);

  // Log out a pretty table for comments and posts
  console.table(users);
  console.table(thoughts);
  console.timeEnd('seeding complete 🌱');
  process.exit(0);
});
