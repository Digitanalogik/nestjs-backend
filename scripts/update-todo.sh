#!/bin/bash

curl -X PATCH http://localhost:3000/todo/1 \
-H "Content-Type: application/json" \
-d '{
  "title": "Updated Title",
  "description": "Updated Description"
}'
