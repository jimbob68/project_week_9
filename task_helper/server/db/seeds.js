use task_helper;
db.dropDatabase();

db.tasks.insertMany([
  {
    "description": "Brush Teeth",
    "completed": false
  },

  {
    "description": "Comb Hair",
    "completed": false
  },

  {
    "description": "Get Dressed",
    "completed": false
  },

  {
    "description": "Eat Breakfast",
    "completed": false
  },

  {
    "description": "Shoes On",
    "completed": false
  },

  {
    "description": "Coat On",
    "completed": false
  },

  {
    "description": "Get In The Car",
    "completed": false
  },

  {
    "description": "Go To School",
    "completed": false
  }

]);
