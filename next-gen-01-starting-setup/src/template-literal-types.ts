const mainUserName = 'Max';
const greeting = `Hello, ${mainUserName}! Welcome back.`;

type ReadPermissions = 'no-read' | 'read-only' | 'read-write';
type WritePermissions = 'no-write' | 'write-only' | 'write-read';

type FilePermissions = `${ReadPermissions}-${WritePermissions}`;

type DataFile = {
    data: string;
    permissions: FilePermissions;
}

type DataFileEventNames = `${keyof DataFile}Changed`;

type DataFileEvents = {
    [Key in DataFileEventNames]: () => void;
};