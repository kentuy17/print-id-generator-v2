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
import { registerSchema } from "@/validators/add";
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

export default function Edit({ tourist }) {
  // const { toast } = useToast();
  const [formStep, setFormStep] = React.useState(0);
  let formInitVals = {
    id: tourist.id,
    firstName: tourist.first_name,
    lastName: tourist.last_name,
    phone: tourist.phone_number,
    arrivalDate: moment(),
    nationality: tourist.nationality,
    address: tourist.address,
    cityState: tourist.city,
    country: tourist.country,
    passportNumber: tourist.passport_number,
    zip: tourist.zip_code,
    gender: tourist.gender === "M" ? "Male" : "Female",
    email: tourist.email,
  };
  const { data, patch } = inertiaForm(formInitVals);
  const form = useForm({
    resolver: zodResolver(registerSchema),
    defaultValues: formInitVals,
  });

  const { date } = useStateContext();

  function onSubmit() {
    // alert(JSON.stringify(data, null, 4));
    // console.log(data);

    // console.log(form.getValues());

    let formVals = form.getValues();
    formVals.arrivalDate = moment(date).format("YYYY-MM-DD");
    data.gender = formVals.gender === "Male" ? "M" : "F";
    let keys = Object.keys(data);

    keys.forEach((key) => {
      data[key] = formVals[key];
    });
    // console.log(data, "gg");
    patch(route("tourist.update", tourist.id), {
      onSuccess: (data) => {
        // toast({
        //   title: "Update info",
        //   description: "Tourist Added Successfully",
        //   // status: "success",
        //   // duration: 9000,
        //   // isClosable: true,
        // });
        // toast("Info Updated Successfully");
        alert("Info Updated Successfully");
      },
    });
  }

  // console.log(tourist);

  return (
    <AuthenticatedLayout
      header={
        <h2 className="text-xl font-semibold leading-tight text-gray-800">
          Tourist
        </h2>
      }
    >
      <Head title="Edit Tourist" />
      <div className="py-12">
        <div className="mx-auto max-w-7xl space-y-6 sm:px-6 lg:px-8">
          <Card className="max-w">
            <CardHeader>
              <CardTitle>Edit Tourist</CardTitle>
              <CardDescription>
                Please fill-up form with accurate data.
              </CardDescription>
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
                    {/* name */}
                    <div className="columns-2 gap-3">
                      <FormField
                        control={form.control}
                        name="firstName"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>First name</FormLabel>
                            <FormControl>
                              <Input
                                placeholder="Enter firstname..."
                                {...field}
                              />
                            </FormControl>
                            {/* <FormDescription>
                          This is your public display name.
                        </FormDescription> */}
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      <FormField
                        control={form.control}
                        name="lastName"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Last name</FormLabel>
                            <FormControl>
                              <Input
                                placeholder="Enter lastname..."
                                {...field}
                              />
                            </FormControl>
                            {/* <FormDescription>
                          This is your public display name.
                        </FormDescription> */}
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>
                    {/* name */}

                    {/* year */}
                    <FormField
                      control={form.control}
                      name="gender"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Gender</FormLabel>
                          <Select
                            onValueChange={field.onChange}
                            defaultValue={
                              tourist.gender == "F" ? "Female" : "Male"
                            }
                          >
                            <FormControl>
                              <SelectTrigger>
                                <SelectValue placeholder="Select gender" />
                              </SelectTrigger>
                            </FormControl>
                            <SelectContent>
                              {["Male", "Female"].map((gender) => {
                                return (
                                  <SelectItem value={gender} key={gender}>
                                    {gender}
                                  </SelectItem>
                                );
                              })}
                            </SelectContent>
                          </Select>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    {/* ari */}

                    {/* phone */}
                    <FormField
                      control={form.control}
                      name="phone"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Phone</FormLabel>
                          <FormControl>
                            <Input
                              placeholder="Enter phone number..."
                              {...field}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    {/* arrivalDate */}
                    <FormField
                      control={form.control}
                      name="arrivalDate"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Arrival Date</FormLabel>
                          <FormControl>
                            <DatePicker {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    {/* nationality */}
                    <FormField
                      control={form.control}
                      name="nationality"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Nationality</FormLabel>
                          <FormControl>
                            <Input
                              placeholder="Enter nationality..."
                              {...field}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="passportNumber"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Passport#</FormLabel>
                          <FormControl>
                            <Input
                              placeholder="Enter passport number..."
                              {...field}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </motion.div>

                  {/* page 2 */}
                  <motion.div
                    className={cn("space-y-3 absolute top-0 left-0 right-0", {
                      // hidden: formStep == 0,
                    })}
                    // formStep == 0 -> translateX == 100%
                    // formStep == 1 -> translateX == 0
                    animate={{
                      translateX: `${100 - formStep * 100}%`,
                    }}
                    style={{
                      translateX: `${100 - formStep * 100}%`,
                    }}
                    transition={{
                      ease: "easeInOut",
                    }}
                  >
                    {/* Email */}
                    <FormField
                      control={form.control}
                      name="email"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Email</FormLabel>
                          <FormControl>
                            <Input
                              placeholder="Email address..."
                              {...field}
                              type="email"
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    {/* Address */}
                    <FormField
                      control={form.control}
                      name="address"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Address</FormLabel>
                          <FormControl>
                            <Input
                              placeholder="Current address..."
                              {...field}
                              type="text"
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    {/* city/state */}
                    <FormField
                      control={form.control}
                      name="cityState"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>City/State</FormLabel>
                          <FormControl>
                            <Input
                              placeholder="City or State..."
                              {...field}
                              type="text"
                              onChange={(e) => {
                                form.setValue("cityState", e.target.value);
                                console.log(e.target.value);
                              }}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    {/* country */}
                    <FormField
                      control={form.control}
                      name="country"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Country</FormLabel>
                          <FormControl>
                            <Input
                              placeholder="Country..."
                              {...field}
                              type="text"
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    {/* country */}
                    <FormField
                      control={form.control}
                      name="zip"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Zip Code</FormLabel>
                          <FormControl>
                            <Input
                              placeholder="Zip Code..."
                              {...field}
                              type="text"
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </motion.div>
                  <div className="flex gap-2">
                    <Button
                      type="button"
                      variant={"ghost"}
                      className={cn({
                        hidden: formStep == 1,
                      })}
                      onClick={() => {
                        // validation
                        let error = false;
                        let items = [
                          "firstName",
                          "lastName",
                          "nationality",
                          "phone",
                          // "arrivalDate",
                          // "cityState",
                        ];
                        form.trigger(items);

                        items.forEach((item) => {
                          if (form.getFieldState(item).invalid) {
                            // formStep = 1;
                            console.log(item);
                            console.log({
                              ...form.getFieldState(item),
                              invalid: form.getFieldState(item).invalid,
                              isDirty: form.getFieldState(item).isDirty,
                            });

                            error = true;
                            return;
                          }
                        });

                        if (error) return;
                        setFormStep(1);
                      }}
                    >
                      Next
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </Button>
                    <Button
                      type="button"
                      variant={"ghost"}
                      onClick={() => {
                        setFormStep(0);
                      }}
                      className={cn({
                        hidden: formStep == 0,
                      })}
                    >
                      <ArrowLeft className="w-4 h-4 ml-2" />
                      Back
                    </Button>
                    <Button
                      type="submit"
                      className={cn({
                        hidden: formStep == 0,
                      })}
                      onSubmit={() => {
                        let items = ["cityState", "country"];
                        form.trigger(items);
                      }}
                    >
                      Save
                    </Button>
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
