import { GitHubLogoIcon, InstagramLogoIcon, LinkedInLogoIcon } from "@radix-ui/react-icons";
import Link from "next/link";
import { Label } from "../ui/label";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { Textarea } from "../ui/textarea";

export default function EmailSection() {
  // const handleSubmit = async (e: any) => {
  //   e.preventDefault();
  //   const data = {
  //     email: e.target.email.value,
  //     subject: e.target.subject.value,
  //     message: e.target.message.value,
  //   };
  //   const JSONdata = JSON.stringify(data);
  //   const endpoint = "/api/send";

  //   const options = {
  //     method: "POST",
  //     headers: {
  //       "Content-Type": "application/json",
  //     },
  //     body: JSONdata,
  //   };

  //   const response = await fetch(endpoint, options);
  //   const resData = await response.json();

  //   if (response.status === 200) {
  //     console.log("Message sent.");
  //   }
  // };

  return (
    <section id="contact" className="flex justify-between md:flex-nowrap flex-wrap md:my-12 py-24 gap-4 relative">
      <div>
        <h5 className="text-xl font-bold text-primar-foreground my-2">Let`&apos;s Connect</h5>
        <p className="text-primary mb-4 max-w-md"> I&apos;m currently looking for new opportunities, my inbox is always open. Whether you have a question or just want to say hi, I&apos;ll try my best to get back to you!</p>
        <div className="socials flex flex-row gap-2">
          <Link href="https://github.com/riyyanfirdaus" target="_blank" className="text-primary">
            <GitHubLogoIcon width={30} height={30} />
          </Link>
          <Link href="https://linkedin.com" target="_blank" className="text-primary">
            <LinkedInLogoIcon width={30} height={30} />
          </Link>
          <Link href="https://instagram.com/riyyan_firdaus" target="_blank" className="text-primary">
            <InstagramLogoIcon width={30} height={30} />
          </Link>
        </div>
      </div>
      <div className="w-full md:w-1/2">
        {/* {emailSubmitted ? (
          <p className="text-green-500 text-sm mt-2">
            Email sent successfully!
          </p>
        ) : ( */}
        <form className="flex flex-col">
          <div className="mb-6">
            <Label htmlFor="email" className="block mb-2">
              Your Email
            </Label>
            <Input name="email" type="email" id="email" required placeholder="jacob@google.com" />
          </div>
          <div className="mb-6">
            <Label htmlFor="subject" className="block mb-2">
              Subject
            </Label>
            <Input name="subject" type="text" id="subject" required placeholder="Just saying hi" />
          </div>
          <div className="mb-4">
            <Label htmlFor="message" className="block mb-2">
              Message
            </Label>
            <Textarea name="message" id="message" placeholder="Let's talk about..." />
          </div>
          <Button type="submit" className="w-full py-6">
            Send Message
          </Button>
        </form>
        {/* )} */}
      </div>
    </section>
  );
}
