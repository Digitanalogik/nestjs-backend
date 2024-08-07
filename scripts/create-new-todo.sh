#!/bin/bash

curl -X POST http://localhost:3000/todo \
  -H "Content-Type: application/json" \
  -d '{
    "title": "Sample Todo",
    "description": "This is a sample todo item."
  }'