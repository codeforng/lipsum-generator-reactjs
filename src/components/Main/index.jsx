import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import useClipboard from "react-use-clipboard";

const Main = () => {
  const [query, setQuery] = useState(2);
  const [lorem, setLorem] = useState("Output Here");
  const [copied, setCopied] = useState(false)
  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .get(
        `https://baconipsum.com/api/?type=all-meat&paras=${query}&start-with-lorem=1&format=text`
      )
      .then((res) => setLorem(res.data))
      .catch((err) => console.log(err));
    setQuery("");
  };

  useEffect(() => {
    axios
      .get(
        `https://baconipsum.com/api/?type=all-meat&paras=${query}&start-with-lorem=1&format=text`
      )
      .then((res) => setLorem(res.data))
      .catch((err) => console.log(err));
    setQuery("");
  }, []);

  return (
    <div className="w-screen">
      <div className="container flex flex-col gap-2 my-4 items-center justify-center mx-auto">
        <FormSection
          query={query}
          setQuery={setQuery}
          submitHandler={handleSubmit}
          
        />
        <OutputSection>
          {/* {
            lorem.map((paragraph) => (
              <p>
                {paragraph}
              </p>
            ))
          } */}
          {lorem}
        </OutputSection>
      </div>
    </div>
  );
};

function FormSection({ query, setQuery, submitHandler }) {
  return (
    <form
      onSubmit={submitHandler}
      className="flex relative flex-col items-center justify-center gap-2"
    >
        <button className="absolute top-0 right-0">Copy</button>

      <label htmlFor="query" className="gap-2 flex flex-col">
        <p className="text-md text-slate-700">
          Enter the amount of paragraphs needed
        </p>
        <input
          type="number"
          value={query}
          onChange={(e) => setQuery(e.currentTarget.value)}
          className="w-full outline-none border-2 border-slate-600 px-3 rounded-md py-2"
          name="query"
          id="query"
          placeholder="paragraph"
        />
      </label>
      <input
        type="submit"
        value="Generate"
        className="bg-slate-900 px-4 cursor-pointer text-white py-2 rounded-md"
      />
    </form>
  );
}

function OutputSection(props) {
  return (
    <div className="bg-white rounded-md py-4 px-6 prose prose-slate text-justify mx-auto my-4">
      {props.children}
    </div>
  );
}

export default Main;
