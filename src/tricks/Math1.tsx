import LogicViewer from "@/components/LogicViewer";
import 'katex/dist/katex.min.css';
import Latex from 'react-latex-next';

export default function Math1({ text }: {text: string}) {
    const elements = [
        // <Latex>{"$\\textit{accident   sdf}$"}</Latex>,
        <p><em>"{text}"</em> has <Latex>${text.length.toString()}$</Latex> characters.</p>,
        <Latex>Multiplying that ${text.length.toString()}$ with $14$ gives us: ${text.length.toString()}*14 = {(text.length*14).toString()}$</Latex>,
        <Latex>Dividing this with $2$ gives us: ${(text.length*14).toString()}/2 = {(text.length*7).toString()}$</Latex>,
        <Latex>And if we divide this ${(text.length*7).toString()}$ with the $original$ $number$ ${text.length.toString()}$ itself, we get:</Latex>,
        <Latex>${(text.length*7).toString()}/{text.length.toString()} = 7$</Latex>,
        <h3>Thala for a reason!</h3>
    ]
    return <LogicViewer elements={elements} text={text}/>
}