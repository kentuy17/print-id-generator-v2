import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head } from "@inertiajs/react";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { motion } from "framer-motion";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import { Input } from "@/components/ui/input";
import { useForm } from "react-hook-form";
import { newEventSchema } from "@/validators/add";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import React, { forwardRef, useState } from "react";
import { cn } from "@/lib/utils";
import { ArrowRight } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { DatePicker } from "@/Components/date-picker";
import moment from "moment";
import { useStateContext } from "@/context/ContextProvider";
import { useForm as inertiaForm } from "@inertiajs/react";
import { Textarea } from "@/Components/ui/textarea";

export default function Create() {
  // const { toast } = useToast();
  // const [formStep, setFormStep] = React.useState(0);
  const formStep = 0;

  const [image, setImage] = useState(null);
  const [preview, setPreview] = useState(null);

  let formInitVals = {
    eventName: "",
    details: "",
    location: "",
    eventDate: moment(),
    contact_number: "",
    image: "",
  };

  const { post, data } = inertiaForm(formInitVals);
  const form = useForm({
    resolver: zodResolver(newEventSchema),
    defaultValues: formInitVals,
  });

  const { date } = useStateContext();

  function onSubmit() {
    let formVals = form.getValues();
    formVals.arrivalDate = moment(date).format("YYYY-MM-DD");
    formVals.image = image;
    let keys = Object.keys(data);
    keys.forEach((key) => {
      data[key] = formVals[key];
    });

    post(route("event.store"), {
      onSuccess: (data) => {
        // toast({
        //   title: "Tourist Added",
        //   description: "Tourist Added Successfully",
        //   status: "success",
        //   duration: 9000,
        //   isClosable: true,
        // });
        console.log(data);
      },
    });
  }

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setImage(file);
      setPreview(URL.createObjectURL(file));
    }
  };

  return (
    <AuthenticatedLayout
      header={
        <h2 className="text-xl font-semibold leading-tight text-gray-800">
          Event
        </h2>
      }
      breadcrumb="Tourist"
      subBread="Add"
    >
      <Head title="Add Tourist" />
      <div className="py-4">
        <div className="mx-auto max-w-7xl space-y-6 sm:px-6 lg:px-8">
          <Card className="max-w">
            <CardHeader>
              <CardTitle>Add Event</CardTitle>
              <CardDescription>Enter event details</CardDescription>
            </CardHeader>
            <CardContent>
              <Form {...form}>
                <form
                  onSubmit={form.handleSubmit(onSubmit)}
                  className="relative space-y-3 overflow-x-hidden"
                >
                  {/* page 1 */}
                  <motion.div
                    className="space-y-3"
                    animate={{
                      translateX: `-${formStep * 100}%`,
                    }}
                    transition={{ ease: "easeInOut" }}
                  >
                    {/* event name */}
                    <FormField
                      control={form.control}
                      name="eventName"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Event name</FormLabel>
                          <FormControl>
                            <Input placeholder="Enter event..." {...field} />
                          </FormControl>
                          {/* <FormDescription>
                          This is your public display name.
                        </FormDescription> */}
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    {/* event name */}

                    {/* details */}
                    <FormField
                      control={form.control}
                      name="details"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Details</FormLabel>
                          <FormControl>
                            <Textarea
                              placeholder="Enter details..."
                              className="resize-none"
                              {...field}
                            />
                          </FormControl>
                          <FormDescription>
                            Detailed description of the event.
                          </FormDescription>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    {/* Picture */}
                    <FormField
                      control={form.control}
                      name="image"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Picture</FormLabel>
                          <FormControl>
                            <Input
                              id="picture"
                              type="file"
                              {...field}
                              className="cursor-pointer"
                              onChange={handleFileChange}
                            />
                          </FormControl>
                          {preview && (
                            <FormDescription>
                              <img src={preview} alt="Preview" width="200" />
                            </FormDescription>
                          )}
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    {/* location */}
                    <FormField
                      control={form.control}
                      name="location"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Location</FormLabel>
                          <FormControl>
                            <Input
                              placeholder="Enter Location to held..."
                              {...field}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    {/* eventDate */}
                    <FormField
                      control={form.control}
                      name="eventDate"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Event Date</FormLabel>
                          <FormControl>
                            <DatePicker {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    {/* phone */}
                    <FormField
                      control={form.control}
                      name="contact_number"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Contact Number</FormLabel>
                          <FormControl>
                            <Input
                              placeholder="Enter contact number..."
                              {...field}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </motion.div>

                  <div className="flex gap-2">
                    <Button type="submit">Submit</Button>
                  </div>
                </form>
              </Form>
            </CardContent>
          </Card>
        </div>
      </div>
    </AuthenticatedLayout>
  );
}

function InputFile({ ...props }) {
  return (
    <div
      className={cn(
        "grid w-full max-w-sm items-center gap-1.5",
        props.className
      )}
    >
      <Label htmlFor="picture">Picture</Label>
      <Input id="picture" type="file" />
    </div>
  );
}
