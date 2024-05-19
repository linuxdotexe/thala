import generateKeys from '@/utils/generateKeys';
import 'katex/dist/katex.min.css';
import Latex from 'react-latex-next';

export default function Math1(text: string) {
    let k = 1;
    const elements = [
        // <Latex>{"$\\textit{accident   sdf}$"}</Latex>,
        <p key={generateKeys("math1", k++)}><em>&quot;{text}&quot;</em> has <Latex>${text.length.toString()}$</Latex> characters.</p>,
        <Latex key={generateKeys("math1", k++)}>Multiplying that ${text.length.toString()}$ with $14$ gives us:</Latex>,
        <Latex key={generateKeys("math1", k++)}>${text.length.toString()}*14 = {(text.length*14).toString()}$</Latex>,
        <Latex key={generateKeys("math1", k++)}>Dividing this ${(text.length*14).toString()}$ with $2$ gives us:</Latex>,
        <Latex key={generateKeys("math1", k++)}>${(text.length*14).toString()}/2 = {(text.length*7).toString()}$</Latex>,
        <Latex key={generateKeys("math1", k++)}>And if we divide this ${(text.length*7).toString()}$ with the $original$ $number$ ${text.length.toString()}$ itself, we get:</Latex>,
        <Latex key={generateKeys("math1", k++)}>${(text.length*7).toString()}/{text.length.toString()} = 7$</Latex>
    ]
    return elements;
}