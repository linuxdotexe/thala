import { useState } from "react";
import FormDataInterface from "@/interfaces/FormDataInterface";

export default function Form({
  handleSubmit,
  id,
}: {
  handleSubmit: (
    event: React.FormEvent<HTMLFormElement>,
    formData: FormDataInterface
  ) => void;
  id: string;
}) {
  const [formData, setFormData] = useState({
    reason: "",
  });

  function handleChange(event: React.ChangeEvent<HTMLInputElement>) {
    setFormData((prevFormData) => {
      return {
        ...prevFormData,
        [event.target.name]: event.target.value,
      };
    });
  }

  return (
    <form
      className="w-full"
      onSubmit={(event) => handleSubmit(event, formData)}>
      <div className="flex flex-col m-12 items-center">
        <input
          type="text"
          placeholder="Type your reason."
          className="w-64 text-md py-3 px-4 rounded-md bg-neutral-800 
          text-neutral-50 border-2 border-neutral-700 
          placeholder:text-neutral-400 focus:outline-none"
          onChange={handleChange}
          value={formData.reason}
          name="reason"
          id={id + "-reason"}
        />
        <button
          type="submit"
          className="bg-neutral-900 w-fit px-6 py-2 mt-4 rounded-md
          text-amber-200 font-bold text-md">
          Fabricate!
        </button>
      </div>
    </form>
  );
}
