import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import {
  ReactPictureAnnotation,
  defaultShapeStyle,
  DefaultInputSection
} from "react-picture-annotation";

if (typeof window !== "undefined") {
}

export default function ImageAnnotation() {
  const [pageSize, setPageSize] = useState({
    width: undefined,
    height:undefined
  });


  useEffect(() => {
    const onResize = () => {
      setPageSize({ width: window.innerWidth, height: window.innerHeight });
    };
    
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  const onSelect = selectedId => console.log(selectedId);
  const onChange = data => console.log(data);

  return (
    <div className="App">
      <ReactPictureAnnotation
        image="https://source.unsplash.com/random/800x600"
        onSelect={onSelect}
        onChange={onChange}
        width={pageSize.width}
        height={pageSize.height}
        annotationStyle={{
          ...defaultShapeStyle,
          shapeStrokeStyle: "#2193ff",
          transformerBackground: "black"
        }}
        inputElement={(value, onChange, onDelete) => (
          <DefaultInputSection
            placeholder={"Hello world"}
            {...{ value, onChange, onDelete }}
          />
        )}
      />
    </div>
  );
}
