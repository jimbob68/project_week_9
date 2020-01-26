use task_helper;
db.dropDatabase();

db.tasks.insertMany([
  {
    "brush_teeth": "Brush Teeth",
    "teeth_brushed": false
  },

  {
    "comb_hair": "Comb Hair",
    "hair_combed": true
  },

  {
    "get_dressed": "Get Dressed",
    "dressed": true
  },

  {
    "eat_breakfast": "Eat Breakfast",
    "ate_breakfast": true
  },

  {
    "shoes_on": "Shoes On",
    "put_shoes_on": true
  },

  {
    "coat_on": "Coat On",
    "put_on_coat": false
  },

  {
    "get_in_car": "Get In The Car",
    "in_the_car": false
  },

  {
    "go_to_school": "Go To School",
    "in_school": false
  }

]);
