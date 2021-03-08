import * as fs from 'fs';
import { get, set } from 'lodash';

/**
 * Reads a JSON format file and updates or adds a new object at
 * a specified path. It then overwrites the JSON file with the updated
 * object.
 *
 * @param fileName The JSON format file to modify
 * @param fieldPath The path within the JSON object to the field to modify/add.
 * @param value The value to update/insert at the path location.
 * @returns 0 on success and -1 on invalid parameters
 */
export const setJSONFileField = (
  fileName: string,
  fieldPath: string,
  value: any,
): number => {
  if (!fs.existsSync(fileName)) {
    console.log(`Missing JSON file specified "${fileName}"`);
    return -1;
  }

  const jsonObject = JSON.parse(fs.readFileSync(fileName).toString());

  // Print a warning if the field doesn't currently exist but still
  // add it to the object.
  if (get(jsonObject, fieldPath) === undefined) {
    console.log(
      `*** JSON file "${fileName}" is missing target "${fieldPath}" creating new field`,
    );
  }

  set(jsonObject, fieldPath, value);

  fs.writeFileSync(fileName, JSON.stringify(jsonObject, undefined, 2));
  return 0;
};
