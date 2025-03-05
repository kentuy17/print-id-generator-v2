import * as React from "react";
import { useReactToPrint } from "react-to-print";
import { ToPrint } from "./ToPrint";
import { Button } from "./ui/button";
import { Separator } from "./ui/separator";
import { ScrollArea, ScrollBar } from "./ui/scroll-area";
import { IdPrintPreview } from "./id-print-preview";

// const ImgTemplate = new Image(330, 250);

/**
 * A basic printing example printing a component
 */
export const PrintBasic = ({ templates }) => {
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
      orientation: "landscape",
    },
    {
      fileName: "Template_2.png",
      name: "Salagdoong Beach",
      location: "San Juan",
      description: "This is a description of the template",
      orientation: "landscape",
    },
    {
      fileName: "Template_3.png",
      name: "Salagdoong Beach",
      location: "San Juan",
      description: "This is a description of the template",
      orientation: "landscape",
    },
    {
      fileName: "6979963.jpg",
      name: "Travel tour guide",
      location: "N/A",
      description: "This template is for travel tour guide",
      orientation: "portrait",
    },
  ];

  const testData = {
    first_name: "Padidi",
    last_name: "Pogi",
    arrival_date: "2023-01-01",
  };

  return (
    <div className="grid lg:grid-cols-3">
      {templates.map((template) => (
        <div className="flex flex-col gap-4" key={template.fileName}>
          <div className="relative">
            <ScrollArea>
              <div className="flex space-x-4 pb-4">
                <IdPrintPreview
                  data={testData}
                  template={template}
                  ref={componentRef}
                >
                  <div className="w-[250px] space-y-3">
                    <img
                      className="h-auto w-auto object-cover transition-all hover:scale-105 aspect-square cursor-pointer"
                      height={250}
                      width={330}
                      src={`${window.location.origin}/templates/${template.filename}`}
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
                </IdPrintPreview>
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
