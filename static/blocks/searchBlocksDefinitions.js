[{
  "type": "createsearchindex",
  "message0": "Create a Search Index %1 Database Name %2 Collection Name %3 Index Name %4 List of Fields to Index %5",
  "args0": [
    {
      "type": "input_dummy"
    },
    {
      "type": "input_value",
      "name": "databaseName",
      "check": "String"
    },
    {
      "type": "input_value",
      "name": "collectionName",
      "check": "String"
    },
    {
      "type": "input_value",
      "name": "indexName",
      "check": "String"
    },
    {
      "type": "input_value",
      "name": "fields",
      "check": "Array"
    }
  ],
  "previousStatement": null,
  "nextStatement": null,
  "colour": 315,
  "tooltip": "Create a search index using the Python Driver",
  "helpUrl": "https://www.mongodb.com/docs/atlas/atlas-search/create-index/#create-an-fts-index-programmatically"
},
{
  "type": "connecttoatlas",
  "message0": "Connect to Atlas %1 Connection String %2 Database Name %3 Collection Name %4",
  "args0": [
    {
      "type": "input_dummy"
    },
    {
      "type": "input_value",
      "name": "connString"
    },
    {
      "type": "input_value",
      "name": "db"
    },
    {
      "type": "input_value",
      "name": "col"
    }
  ],
  "previousStatement": null,
  "nextStatement": null,
  "colour": 60,
  "tooltip": "Instantiate a MongoDB Client",
  "helpUrl": "https://www.mongodb.com/docs/guides/atlas/connection-string/"
},
{
  "type": "atlasimports",
  "message0": "Start with python boilerplate",
  "nextStatement": null,
  "colour": 60,
  "tooltip": "Start here",
  "helpUrl": "Start here"
},
{
  "type": "vectorize",
  "message0": "Vectorizor %1 String to Vectorize %2",
  "args0": [
    {
      "type": "input_dummy"
    },
    {
      "type": "input_value",
      "name": "NAME",
      "check": "String"
    }
  ],
  "previousStatement": null,
  "nextStatement": null,
  "colour": 0,
  "tooltip": "",
  "helpUrl": ""
}]