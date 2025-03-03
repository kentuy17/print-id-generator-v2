import * as React from "react";
import { useReactToPrint } from "react-to-print";
import { ToPrint } from "./ToPrint";
import { Button } from "./ui/button";
import { Separator } from "./ui/separator";
import { ScrollArea, ScrollBar } from "./ui/scroll-area";

// const ImgTemplate = new Image(330, 250);

/**
 * A basic printing example printing a component
 */
export const PrintBasic = () => {
  const componentRef = React.useRef(null);

  const handleAfterPrint = React.useCallback(() => {
    console.log("`onAfterPrint` called");
  }, []);

  const handleBeforePrint = React.useCallback(() => {
    console.log("`onBeforePrint` called");
    return Promise.resolve();
  }, []);

  const printFn = useReactToPrint({
    contentRef: componentRef,
    documentTitle: "AwesomeFileName",
    onAfterPrint: handleAfterPrint,
    onBeforePrint: handleBeforePrint,
  });

  const tempArray = [
    {
      fileName: "Template_1.png",
      name: "Salagdoong Beach",
      location: "San Juan",
      description: "This is a description of the template",
    },
    {
      fileName: "Template_2.png",
      name: "Salagdoong Beach",
      location: "San Juan",
      description: "This is a description of the template",
    },
    {
      fileName: "6979963.jpg",
      name: "Travel tour guide",
      location: "N/A",
      description: "This template is for travel tour guide",
    },
  ];

  return (
    <div className="grid lg:grid-cols-3">
      {tempArray.map((template) => (
        <div className="flex flex-col gap-4" key={template.fileName}>
          <div className="relative">
            <ScrollArea>
              <div className="flex space-x-4 pb-4">
                <div className="w-[250px] space-y-3">
                  <img
                    className="h-auto w-auto object-cover transition-all hover:scale-105 aspect-square"
                    height={250}
                    width={330}
                    src={`${window.location.origin}/templates/${template.fileName}`}
                  />
                  <div className="space-y-1 text-sm">
                    <h3 className="font-medium leading-none">
                      {template.name}
                    </h3>
                    <p className="text-xs text-muted-foreground">
                      {template.location}
                    </p>
                  </div>
                </div>
              </div>
              <ScrollBar orientation="horizontal" />
            </ScrollArea>
          </div>
        </div>
      ))}
    </div>
    //   <Button className="m-2" onClick={printFn}>
    //   Print
    // </Button>
    // <ToPrint ref={componentRef} />
  );
};
