#!/usr/bin/env node

import * as fs from 'fs';

export function setJSONField(
  fileName: string,
  fieldName: string,
  value: object,
): void {
  const jsonObject = JSON.parse(fs.readFileSync(fileName).toString());
  jsonObject[fieldName] = value;

  fs.writeFile(fileName, JSON.stringify(jsonObject, undefined, 2), (err) => {
    if (err) console.log(err);
  });
}

const anonyomeInfo = JSON.parse(
  fs.readFileSync('open-api/AnonyomeInfo.json').toString(),
);

setJSONField('open-api/openapi.json', 'info', anonyomeInfo);
