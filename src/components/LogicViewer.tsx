import { useEffect, useState } from "react";

const textLoadTime = 1300;
const scrollToThala = 300;

export default function LogicViewer({ elements, text, trigger }: { elements: Array<JSX.Element>, text: string, trigger: boolean }) {
    const [visibleCount, setVisibleCount] = useState(0);

    useEffect(() => {
        if (visibleCount < elements.length) {
            const timer = setTimeout(() => {
                setVisibleCount(visibleCount + 1);
            }, textLoadTime);
            let timer2: NodeJS.Timeout;
            if (visibleCount === elements.length - 1) {
                const timer2 = setTimeout(() => {
                    document.getElementById("thala-4-a-reason")?.scrollIntoView({ behavior: "smooth", block: "end", inline: "nearest" });
                }, textLoadTime + scrollToThala);
            }
            return () => {
                // console.log("cleanup internal");
                clearTimeout(timer);
                timer2 ? clearTimeout(timer2) : null; 
            }
        }
    }, [visibleCount]);

    useEffect(() => {
        setVisibleCount(0);
    }, [trigger]);

    return (
        <div className="flex flex-col items-center justify-center text-center text-2xl m-5">
            {elements.slice(0, visibleCount).map((element, index) => (
                <div key={index + "-logic"} className="m-1">{element}</div>
            ))}
        </div>
    );
};
