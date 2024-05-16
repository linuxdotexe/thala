import Tricks from "@/tricks/Tricks";
import LogicViewer from "@/components/LogicViewer";

export default function Trick({ text }: { text: string }) {
    const randomIndex = Math.round(Math.random() * (Tricks.length-1));
    const currentTrick = Tricks[randomIndex];
    return (
        <LogicViewer elements={currentTrick(text)} text={text}/>
    );
}