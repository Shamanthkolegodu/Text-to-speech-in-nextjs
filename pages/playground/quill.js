import { useState } from "react";
import Head from "next/head";
import dynamic from "next/dynamic";
import Layout from "../../components/layout";

import "react-quill/dist/quill.core.css";
import "react-quill/dist/quill.snow.css";

import "katex/dist/katex.min.css";

let ReactQuill = null;
let katex = null;
let MathQuill = null;

if (typeof window !== "undefined") {
  // dynamic loads library on demand
  // check react lazy
  ReactQuill = dynamic(() => import("react-quill"));
  katex = require("katex");
  MathQuill = require("react-mathquill");

  window.katex = katex;
  window.MathQuill = MathQuill;
}

export default function Quill() {
  const [evalue, setEvalue] = useState("");
  const [latex, setLatex] = useState("e=mc^2");

  return (
    <Layout>
      <Head>
        <title>Quilljs</title>
      </Head>

      <h1 className="title">QUILL</h1>

      <div
        style={{
          display: "flex",
          marginTop: "50px",
          position: "relative",
        }}
      >
        {typeof window !== "undefined" && ReactQuill && (
          <>
            <div
              className="equation-editor-wrapper"
              style={{
                position: "absolute",
                top: "10px",
                right: "1vw",
                display: "flex",
              }}
            >
              <MathQuill.EditableMathField
                latex={latex}
                style={{
                  border: "none",
                  fontSize: "18px",
                  marginTop: "-4px",
                  marginLeft: "5px",
                }}
                placeholder="as"
                onChange={(mathField) => {
                  setLatex(mathField.latex());
                  navigator.clipboard.writeText(mathField.latex());
                }}
              />
            </div>

            <ReactQuill
              onChange={(v) => {
                console.log(v);
                setEvalue(v);
              }}
              theme="snow"
              style={{ height: "300px", width: "60vw" }}
              modules={{
                toolbar: [
                  [{ header: [1, 2, false] }],
                  ["bold", "italic", "underline", "strike", "blockquote"],
                  [
                    { list: "ordered" },
                    { list: "bullet" },
                    { indent: "-1" },
                    { indent: "+1" },
                  ],
                  ["link", "image"],
                  ["formula", "code-block"],
                  [{ script: "super" }, { script: "sub" }],
                ],
                // handlers: {
                //   // handlers object will be merged with default handlers object
                //   link: function (value) {
                //     if (value) {
                //       var href = prompt("Enter the URL");
                //       this.quill.format("link", href);
                //     } else {
                //       this.quill.format("link", false);
                //     }
                //   },
                // },
                history: {
                  // Enable with custom configurations
                  delay: 2500,
                  userOnly: true,
                },
              }}
            />
          </>
        )}

        {/* <div
          style={{
            height: "70vh",
            width: "45%",
            border: "1px solid #ccc",
            padding: "0.5rem",
          }}
          className="ql-container ql-snow"
        >
          <div
            className="ql-editor"
            dangerouslySetInnerHTML={{
              __html: evalue,
            }}
          ></div>
        </div> */}
      </div>
    </Layout>
  );
}
