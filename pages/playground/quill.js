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
                left: "43vw",
                display: "flex",
              }}
            >
              <svg
                viewBox="0 0 18 18"
                className="fxSVG"
                style={{
                  width: "17px",
                }}
              >
                <path
                  class="ql-fill"
                  d="M11.759,2.482a2.561,2.561,0,0,0-3.53.607A7.656,7.656,0,0,0,6.8,6.2C6.109,9.188,5.275,14.677,4.15,14.927a1.545,1.545,0,0,0-1.3-.933A0.922,0.922,0,0,0,2,15.036S1.954,16,4.119,16s3.091-2.691,3.7-5.553c0.177-.826.36-1.726,0.554-2.6L8.775,6.2c0.381-1.421.807-2.521,1.306-2.676a1.014,1.014,0,0,0,1.02.56A0.966,0.966,0,0,0,11.759,2.482Z"
                ></path>
                <rect
                  class="ql-fill"
                  height="1.6"
                  rx="0.8"
                  ry="0.8"
                  width="5"
                  x="5.15"
                  y="6.2"
                ></rect>
                <path
                  class="ql-fill"
                  d="M13.663,12.027a1.662,1.662,0,0,1,.266-0.276q0.193,0.069.456,0.138a2.1,2.1,0,0,0,.535.069,1.075,1.075,0,0,0,.767-0.3,1.044,1.044,0,0,0,.314-0.8,0.84,0.84,0,0,0-.238-0.619,0.8,0.8,0,0,0-.594-0.239,1.154,1.154,0,0,0-.781.3,4.607,4.607,0,0,0-.781,1q-0.091.15-.218,0.346l-0.246.38c-0.068-.288-0.137-0.582-0.212-0.885-0.459-1.847-2.494-.984-2.941-0.8-0.482.2-.353,0.647-0.094,0.529a0.869,0.869,0,0,1,1.281.585c0.217,0.751.377,1.436,0.527,2.038a5.688,5.688,0,0,1-.362.467,2.69,2.69,0,0,1-.264.271q-0.221-.08-0.471-0.147a2.029,2.029,0,0,0-.522-0.066,1.079,1.079,0,0,0-.768.3A1.058,1.058,0,0,0,9,15.131a0.82,0.82,0,0,0,.832.852,1.134,1.134,0,0,0,.787-0.3,5.11,5.11,0,0,0,.776-0.993q0.141-.219.215-0.34c0.046-.076.122-0.194,0.223-0.346a2.786,2.786,0,0,0,.918,1.726,2.582,2.582,0,0,0,2.376-.185c0.317-.181.212-0.565,0-0.494A0.807,0.807,0,0,1,14.176,15a5.159,5.159,0,0,1-.913-2.446l0,0Q13.487,12.24,13.663,12.027Z"
                ></path>
              </svg>
              :
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
                  ["code-block"],
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
