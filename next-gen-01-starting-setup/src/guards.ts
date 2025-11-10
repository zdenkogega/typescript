type FileSource = { type: 'file'; path: string };
const fileSource: FileSource = {
  type: 'file',
  path: 'some/path/to/file.csv',
};

type DBSource = { type: 'db'; connectionUrl: string };
const dbSource: DBSource = {
  type: 'db',
  connectionUrl: 'some-connection-url',
};

type Source = FileSource | DBSource;

function loadData(source: Source) {
  // Open + read file OR reach out to database server
  //if ('path' in source) {
  if (source.type === 'file') {
    return;
  }
  source.connectionUrl;
}

class User3 {
  constructor(public name: string) {}

  join() {
    //...
  }
}

class Admin {
  constructor(permissions: string[]) {}

  scan () {
    //...
  }
}

const user = new User3('Jane');
const admin = new Admin(['read', 'write']);

type Entity = User3 | Admin;

function isFile(source: Source): source is FileSource {
  return source.type === 'file';
}

function init(entity: Entity) {
  if (entity instanceof User3) {
    entity.join();
    return;
  }

  entity.scan();
}