import Tricks from "@/tricks/Tricks";

export default function Trick(props: { text: string }) {
    const randomIndex = Math.round(Math.random() * (Tricks.length-1));
    const CurrentTrick = Tricks[randomIndex];
    return (
        <CurrentTrick text={props.text}/>
    );
}