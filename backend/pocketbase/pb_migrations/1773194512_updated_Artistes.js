/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("pbc_1154068080")

  // update field
  collection.fields.addAt(5, new Field({
    "hidden": false,
    "id": "file2071186360",
    "maxSelect": 1,
    "maxSize": 0,
    "mimeTypes": [],
    "name": "photo__artiste",
    "presentable": false,
    "protected": false,
    "required": false,
    "system": false,
    "thumbs": [],
    "type": "file"
  }))

  return app.save(collection)
}, (app) => {
  const collection = app.findCollectionByNameOrId("pbc_1154068080")

  // update field
  collection.fields.addAt(5, new Field({
    "hidden": false,
    "id": "file2071186360",
    "maxSelect": 1,
    "maxSize": 0,
    "mimeTypes": [],
    "name": "photo_artiste",
    "presentable": false,
    "protected": false,
    "required": false,
    "system": false,
    "thumbs": [],
    "type": "file"
  }))

  return app.save(collection)
})
