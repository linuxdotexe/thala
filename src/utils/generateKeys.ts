export default function generateKey(prefix: string, index: number) {
    return `${prefix}-${index}`;
}