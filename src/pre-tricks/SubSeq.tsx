import generateKeys from "@/utils/generateKeys";

// REDUDANT CODE. check src/components/Trick.tsx for validSubSeq(text: string) => boolean
function getLetters(text: string) {
    const dhoni = "dhoni", DHONI = "DHONI";
    const result = [];
    let k = 0;
    for (let i = 0; i < text.length; i++) {
        if (dhoni[k] === text[i] || DHONI[k] === text[i]) {
            result.push(<strong key={i} className="text-red-400">{DHONI[k]}</strong>);
            k++;
        } else {
            result.push(text[i]);
        }
        if (k === dhoni.length) {
            if (i !== text.length - 1) {
                result.push(text.slice(i, text.length));
            }
            return result;
        }
    }
    // this will never happen, because we check for valid subSeq already
    return [];
}

export default function SubSeq(text: string) {
    const letters = getLetters(text);
    let k = 1;
    const elements = [
        <p key={generateKeys("subseq", k++)}>Interesting, you entered: <em>&quot;{text}&quot;</em>.</p>,
        <p key={generateKeys("subseq", k++)}>If I were to <em>randomly</em> pick a few letters from that, like:</p>,
        <p key={generateKeys("subseq", k++)}>{letters}</p>,
        <p key={generateKeys("subseq", k++)}><strong className="text-red-400">DHONI</strong>?</p>,
    ]
    return elements;
}