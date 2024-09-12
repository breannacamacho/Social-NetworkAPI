const connection = require("../config/connection");
const { User, Thought, Reaction } = require("../models");

const users = [
  {
    username: "byteMe",
    email: "byte.me@code.com",
    // thoughtText: "I'm not a bug, I'm a feature!",
    // friends: []
  },
  {
    username: "ctrlAltElite",
    email: "elite@techworld.com",
    // thoughtText: "I turn coffee into code.",
    // friends: []
  },
  {
    username: "bugHunter",
    email: "hunter@debug.com",
    // thoughtText: "It's not a bug, it's an undocumented feature.",
    // friends: []
  },
  {
    username: "nullPointer",
    email: "null.pointer@exception.com",
    // thoughtText: "Why does this keep breaking at runtime?",
    // friends: []
  },
  {
    username: "stackOverflowed",
    email: "overflowed@devhelp.com",
    // thoughtText: "I don't always test my code, but when I do, I do it in production.",
    // friends: []
  }
  
];

connection.on("error", (err) => err);

connection.once("open", async () => {
  console.log("connected");
  await User.deleteMany({});
  await Thought.deleteMany({});
  await User.collection.insertMany(users);

  console.table(users);
  console.info("Seeding complete! 🌱");
  process.exit(0);
});
