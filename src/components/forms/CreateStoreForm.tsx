"use client";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "../ui/form";
import { Input } from "../ui/input";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "../ui/button";
import { useStoreModal } from "@/app/hooks/use-store-modal";

const formSchema = z.object({
    name: z.string().min(2, {
        message: "Name must be at least 2 characters long."
    }).max(100, {
        message: "Name can have maximun 100 characters."
    }),
});

export default function CreateStoreForm() {
    const storeModal = useStoreModal();
    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            name: "",
        },
    });

    const  onSubmit = (values: z.infer<typeof formSchema>) => {
        console.log("values: ", values);
    }

    return(
        <div className="space-y-4 pt-2 pb-4">
            <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)}>
                    <FormField
                        control={form.control}
                        name="name"
                        render={({field}) => (
                            <FormItem>
                                <FormLabel>Name</FormLabel>
                                <FormControl>
                                    <Input placeholder="Store's name" {...field}/>
                                </FormControl>
                                <FormMessage/>
                            </FormItem>
                        )}
                    />
                    <div
                        className="pt-6 space-x-2 flex items-center justify-end w-full"
                    >
                        <Button
                            variant="outline"
                            onClick={storeModal.OnClose}
                        >
                            Cancel
                        </Button>
                        <Button type="submit">Continue</Button>
                    </div>
                </form>
            </Form>
        </div>
    );
}