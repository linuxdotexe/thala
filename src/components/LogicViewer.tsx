import { useEffect, useState } from "react";

export default function LogicViewer({ elements, text }: { elements: Array<JSX.Element>, text: string }) {
    const [visibleCount, setVisibleCount] = useState(0);

    useEffect(() => {
        if (visibleCount < elements.length) {
            const timer = setTimeout(() => {
                setVisibleCount(visibleCount + 1);
            }, 1300);
            return () => clearTimeout(timer);
        }
        return () => {
            // cancel the subscription
            setVisibleCount(0);
        };
    }, [visibleCount, elements.length, text]);

    return (
        <div className="flex flex-col items-center justify-center text-center text-2xl m-5">
            {elements.slice(0, visibleCount).map((element, index) => (
                <div key={index + "-logic"} className="m-1">{element}</div>
            ))}
        </div>
    );
};
