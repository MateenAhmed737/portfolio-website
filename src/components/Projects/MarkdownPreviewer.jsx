import { useState, useRef, useEffect, useLayoutEffect } from "react";
import { marked } from 'marked';
import gsap from 'gsap'

const MarkdownPreviewer = () => {
  const [markdown, setMarkdown] = useState(
    `# Welcome to my React Markdown Previewer!

## This is a sub-heading...
### And here's some other cool stuff:

Heres some code, \`<div></div>\`, between 2 backticks.

\`\`\`
// this is multi-line code:

function anotherExample(firstLine, lastLine) {
  if (firstLine == '\`\`\`' && lastLine == '\`\`\`') {
    return multiLineCode;
  }
}
\`\`\`

You can also make text **bold**... whoa!
Or _italic_.
Or... wait for it... **_both!_**
And feel free to go crazy ~~crossing stuff out~~.

There's also [links](https://www.freecodecamp.org), and
> Block Quotes!

And if you want to get really crazy, even tables:

Wild Header | Crazy Header | Another Header?
------------ | ------------- | -------------
Your content can | be here, and it | can be here....
And here. | Okay. | I think we get it.

- And of course there are lists.
  - Some are bulleted.
     - With different indentation levels.
        - That look like this.


1. And there are numbered lists too.
1. Use just 1s if you want!
1. And last but not least, let's not forget embedded images:

![freeCodeCamp Logo](https://cdn.freecodecamp.org/testable-projects-fcc/images/fcc_secondary.svg)
`);

  const preview = useRef();
  useEffect(() => {
    document.title = "MD Previewer - Mateen Ahmed";
    preview.current.innerHTML = marked.parse(markdown);
  }, []);

  useLayoutEffect(() => {
    gsap.fromTo('.editor, .preview', { opacity: 0, y: 100 }, { duration: 1, opacity: 1, y: 0, stagger: 0.25 })
  }, [])

  const handleChange = e => {
    setMarkdown(e.target.value);
    preview.current.innerHTML = marked.parse(e.target.value);
  };

  return (
    <div className="flex items-center justify-center py-5 bg-gray-700">
      <div className="w-full xs:w-5/6 lg:w-full flex flex-col items-center lg:items-start lg:justify-center lg:flex-row">
        <div className="editor flex flex-col mb-5 px-2 max-w-[600px] w-full">
          <div className="w-full p-1.5 px-3 font-mono font-bold text-lg bg-gray-100 border-2 border-gray-100 rounded-t-lg">
            Editor
          </div>
          <textarea id="editor" spellCheck="false"
            className="overflow-scroll min-h-[250px] lg:h-[100vh] p-3 border-4 border-gray-100 rounded-b-lg focus:border-gray-100 focus:outline-none"
            onChange={handleChange} value={markdown}
          ></textarea>
        </div>

        <div className="preview px-2 w-full max-w-[600px]">
          <div className="w-full p-1.5 px-3 font-mono font-bold text-lg bg-gray-100 border-2 border-gray-100 rounded-t-lg"> Previewer </div>
          <div id="preview" ref={preview} className="w-full p-3 bg-white border-2 border-gray-100 rounded-b-lg overflow-scroll" ></div>
        </div>
      </div>
    </div>
  );
}

export default MarkdownPreviewer