import Tricks from "@/tricks/Tricks";
import PreTricks from "@/pre-tricks/PreTricks";
import LogicViewer from "@/components/LogicViewer";

function validSubSeq(text: string) {
  const dhoni = "dhoni";
  text = text.toLowerCase();
  let k = 0;
  for (let i = 0; i < text.length; i++) {
    if (dhoni[k] === text[i]) {
      k++;
    }
    if (k === dhoni.length) {
      return true;
    }
  }
  return false;
}

function pickATrick(text: string) {
  const validTricks: Array<(text: string) => JSX.Element[]> = [];
  if (validSubSeq(text)) {
    validTricks.push(PreTricks.SubSeq);
  } else {
    // this else should be removed for more randomness
    const randomIndex = Math.round(Math.random() * (Tricks.length - 1));
    validTricks.push(Tricks[randomIndex]);
  }

  return validTricks;
}

export default function Trick({
  text,
  trigger,
}: {
  text: string;
  trigger: boolean;
}) {
  const validTricks = pickATrick(text);
  const randomIndex = Math.round(Math.random() * (validTricks.length - 1));
  const currentTrick = validTricks[randomIndex];
  const elements = currentTrick(text);
  elements.push(
    <h3
      id="thala-4-a-reason"
      className="text-3xl
            italic font-bold
            text-amber-200">
      Thala for a reason!
    </h3>
  );
  return <LogicViewer elements={elements} text={text} trigger={trigger} />;
}
