export const seedData = {
  users: {
    _model: "User",
    homer: {
      firstName: "Homer",
      lastName: "Simpson",
      email: "homer@simpson.com",
      password: "secret",
    },
    marge: {
      firstName: "Marge",
      lastName: "Simpson",
      email: "marge@simpson.com",
      password: "secret",
    },
    bart: {
      firstName: "Bart",
      lastName: "Simpson",
      email: "bart@simpson.com",
      password: "secret",
    },
    joe: {
      firstName: "Joe",
      lastName: "Bloggs",
      email: "jbloggs@gmail.com",
      password: "Joe"
    },
  },
  trektypes: {
    _model: "Trektype",
    mountains: {
      title: "Mountains"
    },
    forests: {
      title: "Forests"
    },
    hills: {
      title: "HillWalks"
    },
    green: {
        title: "Greenways"
      }
  },
  placemarks: {
    _model: "Placemark",
    one: {
      poi: "Dungarvan Greenway",
      level: "beginner",
      member: "->users.bart",
      trektype: "->trektypes.green",
      lat: "52.099275",
      lng: "-7.583662",
    },
    two: {
      poi: "Spinc trail",
      level: "intermediate",
      member: "->users.marge",
      trektype: "->trektypes.hills",
      lat: "53.003025",
      lng: "-6.351568",
    },
    three: {
      poi: "Mangerton",
      level: "expert",
      member: "->users.homer",
      trektype: "->trektypes.mountains",
      lat: "51.970600",
      lng: "-9.484453",
    },
    four: {
      poi: "Jenkinstown Wood",
      level: "beginner",
      member: "->users.homer",
      trektype: "->trektypes.forests",
      lat: "52.727126",
      lng: "-7.287323",
    },
  },
};