import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head, router } from "@inertiajs/react";

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

import { Input } from "@/components/ui/input";
import { useForm } from "react-hook-form";
import { newEventSchema } from "@/validators/add";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import React, { useEffect } from "react";
import { cn } from "@/lib/utils";
import { ArrowLeft, ArrowRight } from "lucide-react";
// import { useToast } from "@/hooks/use-toast";
import { toast } from "sonner";
import { DatePicker } from "@/Components/date-picker";
import moment from "moment";
import { useStateContext } from "@/context/ContextProvider";
import { useForm as inertiaForm } from "@inertiajs/react";
import { Textarea } from "@/Components/ui/textarea";

export default function Edit({ event }) {
  // const { toast } = useToast();
  const [formStep, setFormStep] = React.useState(0);
  const [preview, setPreview] = React.useState(null);
  const [image, setImage] = React.useState(null);
  const [isNewImg, setIsNewImg] = React.useState(false);

  const { date } = useStateContext();

  let formInitVals = {
    id: event.id,
    eventName: event.name,
    details: event.description,
    location: event.location,
    eventDate: moment(),
    contact_number: event.contact_number,
    image: null,
  };

  const form = useForm({
    resolver: zodResolver(newEventSchema),
    defaultValues: formInitVals,
  });

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setIsNewImg(true);
    if (file) {
      setImage(file);
      setPreview(URL.createObjectURL(file));
    }
  };

  const onSubmit = (values) => {
    const formVals = form.getValues();
    const formData = new FormData();
    formData.append("id", event.id);
    formData.append("eventName", values.eventName);
    formData.append("details", values.details);
    formData.append("location", values.location);
    formData.append("eventDate", moment(date).format("YYYY-MM-DD"));
    formData.append("contact_number", formVals.contact_number);
    formData.append("image", image);

    router.post(route("event.update"), formData);
  };

  return (
    <AuthenticatedLayout
      header={
        <h2 className="text-xl font-semibold leading-tight text-gray-800">
          Edit Event
        </h2>
      }
      breadcrumb="Event"
      subBread="Edit"
    >
      <Head title="Edit Event" />
      <div className="py-4">
        <div className="mx-auto max-w-7xl space-y-6 sm:px-6 lg:px-8">
          <Card className="max-w">
            <CardHeader>
              <CardTitle>Edit Event</CardTitle>
              <CardDescription>Edit the details of the event.</CardDescription>
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
                          {!isNewImg ? (
                            <FormDescription>
                              <img
                                src={`/images/${event.image}`}
                                alt="Preview"
                                width="200"
                              />
                            </FormDescription>
                          ) : (
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
                          <FormDescription>
                            Person to contact for more information
                          </FormDescription>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </motion.div>
                  <div className="flex gap-2">
                    <Button
                      variant="outline"
                      onClick={() => window.history.back()}
                    >
                      Back
                    </Button>
                    <Button type="submit">Save</Button>
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
