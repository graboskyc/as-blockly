python.pythonGenerator.forBlock['createsearchindex'] = function(block, generator) {
  var value_databasename = generator.valueToCode(block, 'databaseName', python.Order.ATOMIC);
  var value_collectionname = generator.valueToCode(block, 'collectionName', python.Order.ATOMIC);
  var value_indexname = generator.valueToCode(block, 'indexName', python.Order.ATOMIC);
  var value_fields = generator.valueToCode(block, 'fields', python.Order.ATOMIC);
  console.log(value_fields);
  var a = JSON.parse(value_fields.replace(/'/g, '"'));
  console.log(a);
  var code = '############################\n# Create an index\n############################\n\
handle.runCommand({\n\
    createSearchIndexes: "'+value_collectionname+'",\n\
    indexes: [\n\
      {\n\
        "name": "'+value_indexname+'",\n\
        "definition": {\n\
          "analyzer": "lucene.english",\n\
          "searchAnalyzer": "lucene.english",\n\
            "mappings": {\n\
            "dynamic": false,\n\
            "fields": {\n';
                for (var i = 0; i < a.length; i++) {
                  code = code + '\"'+a[i]+'": {\n"type": "string"\n},\n';
                }    
    code = code + '}],\n\n  });';
  return code;
};

python.pythonGenerator.forBlock['connecttoatlas'] = function(block, generator) {
  var value_connstring = generator.valueToCode(block, 'connString', python.Order.ATOMIC);
  var value_db = generator.valueToCode(block, 'db', python.Order.ATOMIC);
  var value_col = generator.valueToCode(block, 'col', python.Order.ATOMIC);
  // TODO: Assemble python into code variable.
  var code = '############################\n# CREATE A CONNECTION HANDLER\n############################\n\
client = pymongo.MongoClient('+value_connstring+')\n\
handle = client[\''+value_db+'\'][\''+value_col+'\']\n\n\n';
  return code;
};

python.pythonGenerator.forBlock['atlasimports'] = function(block, generator) {
  // TODO: Assemble python into code variable.
  var code = '############################\n# IMPORT REQUIRED PACKAGES\n############################\n\
import time\n\
import datetime\n\
import pymongo\n\
import bson\n\
from bson import ObjectId\n\
import requests\n\
import json\n\
import urllib.parse\n\
import os\n\n\n';
  return code;
};

python.pythonGenerator.forBlock['vectorize'] = function(block, generator) {
  var value_name = generator.valueToCode(block, 'NAME', python.Order.ATOMIC);
  // TODO: Assemble python into code variable.
  var code = '############################\n# MAKE VECTORIZOR REST API CALL \n############################\n\
vectorizerUrl = "http://vec.dungeons.ca/svec/?l2=false&stopwords=true&text="+urllib.parse.quote('+value_name+')\n\
resp = requests.post(vectorizerUrl)\n\
text = resp.text\n\
print(text)\n\
body = json.loads(text)\n\n';
  return code;
};

