#!/usr/bin/env node

import * as fs from 'fs';
import { setJSONFileField } from './setJSONFileField';

const companyInfo = JSON.parse(
  fs.readFileSync('open-api/companyInfo.json').toString(),
);

setJSONFileField('open-api/openapi.json', 'info', companyInfo);
