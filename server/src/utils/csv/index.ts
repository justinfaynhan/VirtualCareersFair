import {Parser, AsyncParser, transforms} from 'json2csv';

interface ICreateCsvString {
  header?: {
    label: string;
    value: string;
  }[] | string[];
  records: {
    [key: string]: string | string[] | undefined;
  }[];
  displayHeader: boolean;
}

export const create_csv_string = async ({header, records, displayHeader}: ICreateCsvString) => {
  console.log(header, records);
  const {flatten} = transforms;
  const parser =  new Parser({fields: header, header: displayHeader, transforms: [flatten({arrays: true})]});
  const csv = parser.parse(records);
  return csv;
}