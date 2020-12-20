import { useState } from "react";
import Head from "next/head";
import dynamic from "next/dynamic";
import Layout from "../../components/layout";

import "react-quill/dist/quill.core.css";
import "react-quill/dist/quill.snow.css";

let ReactQuill = null;

if (typeof window !== "undefined") {
  // dynamic loads library on demand
  // check react lazy
  ReactQuill = dynamic(() => import("react-quill"));
}

export default function Quill() {
  const [evalue, setEvalue] = useState("");
  const [ob, setOb] = useState("asdasd");

  return (
    <Layout>
      <Head>
        <title>Quilljs</title>
      </Head>
      <h1 className="title">QUILL</h1>

      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          width: "100%",
          marginTop: "50px",
        }}
      >
        {typeof window !== "undefined" && ReactQuill && (
          <ReactQuill
            onChange={(v) => {
              console.log(v);
              setEvalue(v);
            }}
            theme="snow"
            style={{ height: "300px", width: "45%" }}
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
              history: {
                // Enable with custom configurations
                delay: 2500,
                userOnly: true,
              },
            }}
          />
        )}

        <div
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
        </div>
      </div>
    </Layout>
  );
}
