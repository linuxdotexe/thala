"use client";

import { useState, useId } from "react";
import Trick from "@/components/Trick";
import Form from "@/components/Form";
import FormDataInterface from "@/interfaces/FormDataInterface";

export default function ReasonBox() {

    const id = useId();

    const [renderTrigger, setRenderTrigger] = useState(false);

    const [submitData, setSubmitData] = useState({
        reason: ""
    });

    function handleSubmit(event: React.FormEvent<HTMLFormElement>, formData: FormDataInterface) {
        event.preventDefault();
        setSubmitData(prevSubmitData => {
            return {
                ...prevSubmitData,
                reason: formData.reason.trim()
            };
        });
        setRenderTrigger(prev => !prev);
    }

    return (
        <>
            <Form handleSubmit={handleSubmit} id={id} />
            {submitData.reason !== '' &&
                <Trick
                    trigger={renderTrigger}
                    text={submitData.reason}
                />}
        </>
    )
}