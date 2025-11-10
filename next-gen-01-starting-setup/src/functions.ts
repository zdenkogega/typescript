function getLength(val: any[]): string;
function getLength(val: string): string;

function getLength(val: string | any[]) {
    if (typeof val === 'string') {
        const numberOfWords = val.split(' ').length;
        return `${numberOfWords} words`;
    }
return `${val.length} items`;
}

const numberOfWords = getLength('Hello world! This is TypeScript.');
const numberOfItems = getLength([1, 'Gaming', 3, 4, 'Cookies']);