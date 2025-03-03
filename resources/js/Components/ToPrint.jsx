import * as React from "react";

// import image from "../test_image.png";
// const image = window.location.origin + "/avatars/shadcn.jpg";
const image = window.location.origin + "/templates/Template_2.png";

export const ToPrint = React.forwardRef((props, ref) => {
  const { text } = props;

  const canvasEl = React.useRef(null);
  const shadowRootHostEl = React.useRef(null);

  React.useEffect(() => {
    const ctx = canvasEl.current?.getContext("2d");

    if (ctx) {
      ctx.beginPath();
      ctx.arc(95, 50, 40, 0, 2 * Math.PI);
      ctx.stroke();
      ctx.fillStyle = "rgb(200, 0, 0)";
      ctx.fillRect(85, 40, 20, 20);
      ctx.save();
    }
  }, []);

  // React.useEffect(() => {
  //   const shadowRoot = shadowRootHostEl.current?.attachShadow({ mode: "open" });
  //   if (shadowRoot) {
  //     const div = document.createElement("div");
  //     div.innerHTML = "Shadow DOM Content";
  //     shadowRoot.appendChild(div);
  //   }
  // }, []);

  return (
    <div className="relativeCSS" ref={ref}>
      <link
        // This tests that we properly ignore disabled nodes
        // Learn more: https://github.com/MatthewHerbst/react-to-print/pull/537
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        disabled
        rel="stylesheet"
        href="../disabled.css"
      />
      <style type="text/css" media="print">
        {"@page { size: landscape; }"}
      </style>
      {/* <link href="./as-style.css" rel="stylesheet" /> */}
      <div className="flash" />

      <div className="w-full min-h-[65vh] flex items-center justify-center py-8">
        <img
          alt="A test image"
          className="object-center size-150"
          src={image}
          // width="200"
        />
      </div>

      {/* <div ref={shadowRootHostEl} /> */}
    </div>
  );
});
