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
  }
])
