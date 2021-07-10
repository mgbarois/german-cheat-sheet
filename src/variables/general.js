// ##############################
// // // Tasks for TasksCard - see Dashboard view
// #############################

var bugs = [
  "Make flashcards",
  "Watch a German movie and jot down words",
  "Download 'Word of the day' app",
];
var website = [
  "Write practice sentences with prepositions",
  "Do an online grammar quiz",
  "Make diagram for trenbar verbs",
];
var server = [
  "Sign up for a german class",
  "Find a german tandem partner",
  "Browse german practice meetup groups",
];

var vocab = [
  {
    de: "German1",
    en: "English1",
  },
  {
    de: "German2",
    en: "English2",
  },
  {
    de: "German3",
    en: "English2",
  },
];

module.exports = {
  // these 3 are used to create the tasks lists in TasksCard - Dashboard view
  bugs,
  website,
  server,
  vocab,
};
