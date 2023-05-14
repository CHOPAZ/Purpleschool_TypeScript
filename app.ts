/*  
  Template Literal Types
*/

type ReadOrWrite = 'read' | 'write';
type Access = `can${ReadOrWrite}`; // type Access = "canread" | "canwrite"
type Access2 = `can${Uppercase<ReadOrWrite>}`; // type Access2 = "canREAD" | "canWRITE"
type Access3 = `can${Capitalize<ReadOrWrite>}`; // type Access3 = "canRead" | "canWrite"

type Bulk = 'bulk' | '';
type Access4 = `can${Capitalize<ReadOrWrite>}${Capitalize<Bulk>}`; //type Access4 = "canRead" | "canWrite" | "canReadBulk" | "canWriteBulk"


/*  */
type ErrorOrSuccess = 'error' | 'success';
interface ResponceT {
  result: `http${Capitalize<ErrorOrSuccess>}`
}

const a: ResponceT = {
  result: 'httpError'
};


/* Обратно распокавать составной тип */

type ReadOrWriteBulk<T> = T extends `can${infer R}` ? R : never;
type T = ReadOrWriteBulk<Access4>; //type T = "Read" | "Write" | "ReadBulk" | "WriteBulk"